import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";
import FormControl from "react-bootstrap/FormControl";

let marked = require("marked");

class App extends Component {
  state = {
    markdown: "",
  };

  updateMarkdown = (markdown) => {
    this.setState({ markdown });
  };

  render() {
    let { markdown } = this.state;
    return (
      <div className="App container">
        <div>
          <h1 style={{ paddingTop: 20, paddingBottom: 20 }}>
            Markdown Previewer
          </h1>
          <FormGroup controlId="formControlsTextarea">
            <FormLabel>
              <h4>Markdown Input</h4>
            </FormLabel>
            <FormControl
              componentClass="textarea"
              placeholder="Enter your markdown"
              value={markdown}
              onChange={(event) => this.updateMarkdown(event.target.value)}
            ></FormControl>
          </FormGroup>
        </div>
        <div>
          <h4 style={{ paddingTop: 20, paddingBottom: 20 }}>Markdown Output</h4>
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>
      </div>
    );
  }
}

export default App;
