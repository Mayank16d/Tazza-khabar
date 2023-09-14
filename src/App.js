import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';
import { BrowserRouter as Router,
  Routes,
  Route,
  Link } from 'react-router-dom';
import Footer from './components/Footer';

export default class App extends Component {
  render() {

    return (
      <>
          
      <Router>
      <NavBar/>
          {/* <NewsComp pageSize={5} newsCategory="Business"/> */}

          <Routes>
            <Route path="/" element={<NewsComp key="General"  pageSize={5} newsCategory="General"/>}></Route>
            <Route path="/business" element={<NewsComp key="Business"  pageSize={5} newsCategory="Business"/>}></Route>
            <Route path="/entertainment" element={<NewsComp key="Entertainment"  pageSize={5} newsCategory="Entertainment"/>}></Route>
            <Route path="/general" element={<NewsComp key="General"  pageSize={5} newsCategory="General"/>}></Route>
            <Route path="/health" element={<NewsComp key="Health"  pageSize={5} newsCategory="Health"/>}></Route>
            <Route path="/science" element={<NewsComp key="Science" pageSize={5} newsCategory="Science"/>}></Route>
            <Route path="/sports" element={<NewsComp key="Sports"  pageSize={5} newsCategory="Sports"/>}></Route>
            <Route path="/technology" element={<NewsComp key="Technology"  pageSize={5} newsCategory="Technology"/>}></Route>
          </Routes>
          {/* <Footer/> */}
          </Router>
      </>
    )
  }
}
