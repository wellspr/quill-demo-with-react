import hljs from "highlight.js";
import katex from "katex";
import "katex/dist/katex.min.css";
window.katex = katex;

hljs.configure({
    languages: ["javascript", "python", "html", "css"],
});

export const theme = "snow";

export const toolbarOptions = [
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    [{ 'font': [] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ 'size': ['small', false, 'large', 'huge'] }],

    ['blockquote', 'code', 'code-block', 'link', 'image', 'video', 'formula'],
    // [{ 'header': 1 }, { 'header': 2 }],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'align': [] }],

    [{ 'script': 'sub'}, { 'script': 'super' }],
    // [{ 'direction': 'rtl' }],
    [{ 'color': [] }, { 'background': [] }],
    ['clean']
];

export const formats = [
    "header", "font", "bold", "italic", "underline", "strike", 
    "size", "blockquote", "code-block", "code", "link", "image", "video", "formula",
    "list", "align", "script", "color", "background", "clean"
];

export const modules = { 
    toolbar: toolbarOptions,
    syntax: {
        highlight: text => hljs.highlightAuto(text).value,
    },
    
};