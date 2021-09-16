import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import React from "react";
import Editor from "./Editor";

const App = () => {

    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="homepage">
        
            <div className="header">
                <h1>Quill Editor <i class="bi bi-pencil-square"></i></h1>
            </div>
            
            <Editor />

            <div className="footer">
                <div><span>&copy; { year } paulowells</span></div>
                <div><a className="github-icon" href="https://github.com/wellspr/quill-demo-with-react" alt="github-link"><i class="bi bi-github"></i></a></div>
            </div>
        </div>
    );
}

export default App;