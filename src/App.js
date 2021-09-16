import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import React from "react";
import Editor from "./Editor";

const App = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="homepage">
        
            <div className="header">
                <h1>Quill Editor</h1>
            </div>
            
            <Editor />

            <div className="footer">
                <p>&copy; { year } paulowells</p>
            </div>
        </div>
    );
}

export default App;