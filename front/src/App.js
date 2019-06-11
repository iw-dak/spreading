import React from 'react';
import HeaderContainer from './components/Front/Header/HeaderContainer';
import HomeContainer from './components/Front/Home/HomeContainer';
import PostListContainer from './components/Front/Home/PostList/PostListContainer';

function App() {
    return <>
        <HeaderContainer />
        <HomeContainer />
        <PostListContainer />
    </>;
}

export default App;
