import React, { useEffect, useRef, useState } from "react";
import QuillEditor from "../QuillEditor";
import "quill/dist/quill.snow.css";
import "./index.css";


const Editor = () => {

    const contentRef = useRef();
    const [editorContents, setEditorContents] = useState({html: "", delta: {}});

    useEffect(() => {
        const showContent = () => {
            contentRef.current.innerHTML = editorContents.html;
        };
        showContent();
    }, [editorContents]);

    return (
        <div className="wrapper">
            <div className="editor">

                <QuillEditor setEditorContents={setEditorContents} />

                <div className="display">
                    <div className="content-wrapper">
                        <p>Rendered Content</p>
                        <div 
                            ref={contentRef} 
                            className="content-display"
                            >
                        </div>
                    </div>

                    <div className="content-wrapper">
                        <p>Raw Content</p>
                        <div className="html-display">
                            <pre>{ editorContents.html }</pre>
                        </div>
                    </div>
                </div>

            </div>

            {/* <div className="button">
                <hr className="button-separator" />
                <div 
                    className="btn btn-md btn-dark" 
                    // onClick={showContent}
                >Save</div>
            </div> */}
        </div>
    );
}

export default Editor;