import React, { useEffect, useRef, useState } from "react";
import { theme, modules, formats } from "./config.js";
import "highlight.js/styles/obsidian.css";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";


const QuillEditor = ({setEditorContents}) => {

    const { quill, quillRef } = useQuill({ theme, modules, formats });
    const [editorHeight, setEditorHeight] = useState(0);
    const [toolbarHeight, setToolbarHeight] = useState(0);
    const wrapperRef = useRef();
    const editorRef = useRef();

    useEffect(() => {
        if (quill) {
            quill.on("text-change", (delta, oldDelta, source) => {
                setEditorContents({
                    html: quill.root.innerHTML,
                    delta: quill.getContents()
                });
            });

            console.log(quill);
        }
    }, [quill, setEditorContents]);

    useEffect(() => {
        const handleHeights = () => {
            setEditorHeight(wrapperRef.current.offsetHeight)
            setToolbarHeight(editorRef.current.children[0].offsetHeight);
        };

        window.addEventListener("resize", handleHeights);
        window.addEventListener("load", handleHeights)

        return () => {
            window.removeEventListener("resize", handleHeights);
            window.removeEventListener("load", handleHeights)
        }
    }, [editorHeight]);

    return (
        <div className="quill-editor-wrapper" ref={wrapperRef}>
            <div className="quill-wrapper">
                <div 
                    ref={editorRef} 
                    className="quill"
                    style={{ height: editorHeight - toolbarHeight }}
                    >
                    <div ref={quillRef} />
                </div>
            </div>
        </div>
    );

}

export default QuillEditor;