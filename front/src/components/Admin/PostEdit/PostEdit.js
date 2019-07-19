import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PostContext from '../../../context/posts/PostContext';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import './PostEdit.scss';
import { AuthStore } from '../../../helpers';
import Spinner from '../../Spinner/Spinner';

class PostEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: false,
            title: "",
            content: "",
            status: false,
            views: 0,
            readtime: "",
            image: "",
            user_id: false,
            categories: false,
            tags: false,
            selectedCategories: [],
            selectedTags: [],
            isExternal: false,
            externalLink: ""
        };
    }

    componentDidMount() {
        this.props.getCategoriesAndTags().then((data) => {
            this.setState({
                categories: data.categories.map(category => {
                    return { value: category.id, label: category.name };
                }),
                tags: data.tags.map(tag => {
                    return { value: tag.id, label: tag.name };
                })
            });


            if (this.props.match.params.slug) {
                this.props.fetchPost(this.props.match.params.slug).then((data) => {
                    console.log("data =>", data);
                    this.setState({
                        authUser: data.user,
                        id: data.id,
                        title: data.title,
                        content: data.content,
                        status: data.status,
                        views: data.views,
                        readtime: data.readtime,
                        image: data.image,
                        user_id: data.user_id,
                        externalLink: data.external_link,
                        isExternal: data.is_external === "1" ? true : false,
                        selectedCategories: data.categories.map(category => {
                            return { value: category.id, label: category.name };
                        }),
                        selectedTags: data.tags.map(tag => {
                            return { value: tag.id, label: tag.name };
                        })
                    });
                });
            }
        });
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        if (name === 'isExternal') {
            this.setState({
                content: "",
                externalLink: ""
            });
        }

        this.setState({
            [name]: value
        });
    }

    handleChangeCategories = selectedCategories => {
        if (selectedCategories) {
            this.setState({ selectedCategories });
        } else {
            this.setState({ selectedCategories: [] });
        }

        console.log(`Option selected:`, selectedCategories);
    };

    handleChangeTags = selectedTags => {
        if (selectedTags) {
            this.setState({ selectedTags });
        } else {
            this.setState({ selectedTags: [] });
        }
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            submitting: true
        });

        setTimeout(() => {

            if (!this.state.isExternal) {
                if (this.state.content === "") {
                    this.setState({
                        success: 'no',
                        confirmationMessage: "Le contenu de l'article est obligatoire",
                    });
                    return;
                }
            } else {
                if (this.state.externalLink === "") {
                    this.setState({
                        success: 'no',
                        confirmationMessage: "Saisissez un lien externe s'il vous plaît",
                    });
                    return;
                }
            }

            if (this.state.title === "" || this.state.readtime === "") {
                this.setState({
                    success: 'no',
                    confirmationMessage: "Remplissez tous les champs obligatoires",
                });
                this.setState({
                    submitting: false
                });
                return;
            }

            if (this.state.selectedCategories.length === 0 || this.state.selectedTags.length === 0) {
                this.setState({
                    success: 'no',
                    confirmationMessage: "Sélectionnez au moins une catégorie et un tag",
                });
                this.setState({
                    submitting: false
                });
                return;
            }

            if (this.state.id) {
                console.log("Update");
                // Update
                this.props.updatePost(this.state, AuthStore.getUser().id, this.state.id).then(({ data }) => {
                    this.setState({
                        success: 'yes',
                        confirmationMessage: "Article modifié avec succès 👍🏽",
                    });
                }).catch(error => {
                    this.setState({
                        success: 'no',
                        confirmationMessage: "Une erreur s'est produite, lors de l'enregistrement de l'article. réessayez 🤔",
                    })
                });
            } else {
                console.log("Save");
                // Save
                this.props.savePost(this.state, AuthStore.getUser().id).then(({ data }) => {
                    this.setState({
                        success: 'yes',
                        confirmationMessage: "Article enregistré avec succès, il sera visible sur le site après validation par un administrateur 🙂",
                        title: "",
                        content: "",
                        status: false,
                        views: 0,
                        readtime: "",
                        image: "",
                        user_id: false,
                        selectedCategories: [],
                        selectedTags: []
                    });
                }).catch(error => {
                    this.setState({
                        success: 'no',
                        confirmationMessage: "Une erreur s'est produite, lors de l'enregistrement de l'article. réessayez 🤔",
                    })
                });
            }

            this.setState({
                submitting: false
            });
        }, 1000);
    }

    handleChangeContent = (data) => {
        this.setState({
            content: data
        });
    }

    render() {
        if (this.props.match.params.slug) {
            if (AuthStore.getUser().roles !== 'admin' && (this.state.authUser && AuthStore.getUser().id !== this.state.authUser.id)) {
                return <Redirect to={{ pathname: "/404" }} />
            }
        }

        if (!this.state.categories) {
            return <Spinner />
        }

        return (
            <div className="PostEdit container">
                <div className="row">
                    <div className="col-12">
                        {this.state.id ? <h1 className="sp-back-title mb-5">Modifier un article</h1> :
                            <h1 className="sp-back-title mb-5">Créer un article</h1>}
                    </div>
                </div>

                <div className="row d-flex justify-content-center">
                    <div className="col-9">
                        {this.state.success && <div className={`alert
                        alert-${this.state.success === 'yes' ? 'success' : 'danger'}`} role="alert">
                            {this.state.confirmationMessage}
                        </div>}

                        <form onSubmit={this.handleSubmit} className="mb-4">
                            <div className="form-group">
                                <label htmlFor="title">Titre</label>
                                <input id="title" type="text" name="title" value={this.state.title} onChange={this.handleChange} className="form-control" placeholder="Entrer le titre de l'article" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="readtime">Temps de lecture (en minutes)</label>
                                <input type="number" id="readtime" name="readtime" value={this.state.readtime} onChange={this.handleChange} className="form-control" placeholder="Entrer le temps" />
                            </div>

                            <div className="form-group form-check">
                                <input type="checkbox" name="isExternal" checked={this.state.isExternal && "checked"} value={this.state.isExternal} onChange={this.handleChange} className="form-check-input" id="externalContent" />
                                <label className="form-check-label" htmlFor="externalContent">S'il s'agit d'un contenu externe, cochez cette case</label>
                            </div>

                            {this.state.isExternal && <div className="form-group">
                                <input type="text" id="externalLink" name="externalLink" value={this.state.externalLink} onChange={this.handleChange} className="form-control" placeholder="Lien vers l'article externe" />
                            </div>}

                            {!this.state.isExternal && <div className="form-group">
                                <label htmlFor="image">Poster de l'article</label>
                                <small id="imageHelp" className="form-text text-muted">Si aucune image n'est spécifié, un poster par défaut sera utilisé</small>
                                <input type="text" id="image" name="image" value={this.state.image} onChange={this.handleChange} className="form-control" placeholder="http://banque-images.com/poster.png" />
                            </div>}

                            {!this.state.isExternal && <CKEditor
                                editor={ClassicEditor}
                                data={this.state.content}
                                onInit={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    this.handleChangeContent(data);
                                }}
                                onBlur={editor => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={editor => {
                                    console.log('Focus.', editor);
                                }}
                            />}


                            {this.state.categories && <div className="d-flex">
                                <button type="submit" className="btn btn-secondary mt-4 mb-4">Enregistrer</button>
                                {this.state.submitting && <div className="spinner-grow" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>}
                            </div>}

                        </form>
                    </div>

                    <div className="col-3">
                        <div className="form-group group-category">
                            <label htmlFor="categories"><strong>Catégories</strong></label>
                            {this.state.categories ? <Select
                                placeholder="Ajouter des catégories"
                                isMulti={true}
                                value={this.state.selectedCategories}
                                onChange={this.handleChangeCategories}
                                options={this.state.categories}
                            /> : <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>}
                        </div>

                        <div className="form-group group-category">
                            <label htmlFor="tags"><strong>Tags</strong></label>
                            {this.state.tags ? <Select
                                placeholder="Ajouter des tags"
                                isMulti={true}
                                value={this.state.selectedTags}
                                onChange={this.handleChangeTags}
                                options={this.state.tags}
                            /> : <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default React.forwardRef((props, ref) => (
    <PostContext.Consumer>
        {({ getCategoriesAndTags, savePost, fetchPost, updatePost }) =>
            <PostEdit
                {...props}
                getCategoriesAndTags={getCategoriesAndTags}
                savePost={savePost}
                updatePost={updatePost}
                fetchPost={fetchPost}
                ref={ref}
            />
        }
    </PostContext.Consumer>
));
