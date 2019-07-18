import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import PostContext from '../../../context/posts/PostContext';
import Select from 'react-select';
import './PostEdit.scss';
import { AuthStore } from '../../../helpers';

class PostEdit extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            status: false,
            views: 0,
            readtime: "",
            image: null,
            user_id: false,
            categories: false,
            tags: false,
            selectedCategories: [],
            selectedTags: []
        };
    }

    componentDidMount() {
        this.props.getCategoriesAndTags().then((data) => {
            console.log(data);
            this.setState({
                categories: data.categories.map(category => {
                    return { value: category.id, label: category.name };
                }),
                tags: data.tags.map(tag => {
                    return { value: tag.id, label: tag.name };
                })
            });
        });
    }

    handleChange = e => {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

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

        console.log(`Option selected:`, selectedTags);
    };

    handleSubmit = (e) => {
        e.preventDefault();

        this.setState({
            submitting: true
        });

        setTimeout(() => {
            if (this.state.title === "" || this.state.content === "" || this.state.readtime === "") {
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

            this.props.savePost(this.state, AuthStore.getUser().id).then(({ data }) => {
                this.setState({
                    success: 'yes',
                    confirmationMessage: "Article enregistré avec succès, il sera visible sur le site après validation par un administrateur 🙂",
                    title: "",
                    content: "",
                    status: false,
                    views: 0,
                    readtime: "",
                    image: null,
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
            this.setState({
                submitting: false
            });
        }, 1000);
    }

    handleChangeContent = (data) => {
        console.log("Register data", data);
        this.setState({
            content: data
        });
    }

    render() {

        return (
            <div className="PostEdit container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="mx-auto mt-4 mb-4">Créer un article</h1>
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
                                <label htmlFor="readtime">Temps de lecture (en min)</label>
                                <input type="number" id="readtime" name="readtime" value={this.state.readtime} onChange={this.handleChange} className="form-control" placeholder="Entrer le temps" />
                            </div>

                            <CKEditor
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
                            />

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
        {({ getCategoriesAndTags, savePost }) =>
            <PostEdit
                {...props}
                getCategoriesAndTags={getCategoriesAndTags}
                savePost={savePost}
                ref={ref}
            />
        }
    </PostContext.Consumer>
));
