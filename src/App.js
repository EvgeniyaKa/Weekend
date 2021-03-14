import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./tailwind.output.css";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";
import TagsPage from "./pages/TagsPage";
import EventPage from "./pages/EventPage";
import Footer from "./components/footer/Footer.js";
import logo from "./images/logo.png";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className="flex items-center border">
          <img src={logo} alt="logo" className="justify-self-start" style={{ width: 159 }}/>
          <h3 className="m-auto">Здесь будет хэдэр</h3>
        </div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/category" component={CategoryPage} />
          <Route path="/tags" component={TagsPage} />
          <Route path="/event" component={EventPage} />
        </Switch>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
