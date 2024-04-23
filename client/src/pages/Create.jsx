import { useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

export default function Create(){

    const [title,setTitle] = useState();
    const [summary, setSummary] = useState();
    const [content, setContent] = useState();


    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
            ['blockquote', 'code-block'],
            ['link', 'image', 'video', 'formula'],
          
            [{ 'header': 1 }, { 'header': 2 }],               // custom button values
            [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
            [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
            [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
            [{ 'direction': 'rtl' }],                         // text direction
          
            [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    // dropdown with defaults from theme
            [{ 'font': [] }],
            [{ 'align': [] }], 
        ]
    }
    // in each crate post we need to have a image, title, body, summary
    return(
        <div className="create-container">

            <form>
                <h1> New Post </h1>
                <input placeholder="Title" type="text" value={title} onChange={e => setTitle(e.target.value)}/>
                <input placeholder="Summary" type="text" value={summary} onChange={e => setSummary(e.target.value)}/>
                <input type="file"/>
                <ReactQuill modules={modules} 
                value={content} 
                onChange={newValue => setContent(newValue)}/>
                <button id="create-post-button"> Create Post </button>
            </form>

        </div>
    )
}