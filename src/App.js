import './App.css';
import React from 'react';
import { Link, Route } from "wouter";
import Detail from './pages/Detail';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import { GifsContextProvider } from './context/GifsContext';

export default function App() {


  return (
      <div className="App">
        <section className="App-content">
          <div className="title">
            <Link to='/'>GIFFY</Link>
          </div>
          <div className="links">
            <Link to="/search/panda">Gif Panda</Link>
            <Link to="/search/colombia">Gif Colombia</Link>
            <Link to="/search/perro">Gif Perro</Link>
          </div>
          <div className="routers">
            <GifsContextProvider>
              <Route
                component={Home}
                path="/" />
              <Route
                component={Detail}
                path="/gif/:id" />
              <Route
                component={SearchResults}
                path="/search/:keyword" />
            </GifsContextProvider>
          </div>
        </section>
      </div>
  );
}
