import React from 'react';
import {
  BrowserRouter,
  Route,
} from 'react-router-dom';
import MainPage from '../pages/MainPage';
import AboutUsPage from '../pages/AboutUsPage';
import Header from '../components/Header';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Route path="/" exact component={MainPage}/>
      <Route path="/about" exact component={AboutUsPage}/>
    </BrowserRouter>
  );
};

export default AppRouter;
