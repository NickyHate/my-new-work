import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Contacts from "./pages/contacts";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div className="main-container">
          <Header />
          <HashRouter>
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/skills" exact component={() => <Skills />} />
              <Route path="/projects" exact component={() => <Projects />} />
              <Route path="/contacts" exact component={() => <Contacts />} />
            </Switch>
          </HashRouter>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
