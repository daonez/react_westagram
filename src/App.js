import React from "react";
import Navigation from "./components/Navigation";
import { BrowserRouter } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    );
  }
}

export default App;
