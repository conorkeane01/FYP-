import React, { useState } from "react";
import "../components/About.css";
import "../index.js";
import "../components/Navbar.js";
import { eventWrapper } from "@testing-library/user-event/dist/utils";
import video1 from "../videos/video1.mp4";


function About() {
    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "note title 1",
            content: "content 1",
        },
        {
            id: 2,
            title: "note title 2",
            content: "content 2",
        },
        {
            id: 3,
            title: "note title 2",
            content: "content 3",
        },

    ]);

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

  return (
    
    <div className="aboutPage">
      <form className="note-form">

        <input 
        value={title}
        onChange={(event)=>
            setTitle(event.target.value)
        }
        placeholder="Enter a note" required></input>
        <textarea 
        value={content}
        onChange={(event)=>
            setContent(event.target.value)
        }
        placeholder="Note" rows={10} required></textarea>
        <button type="submit">Add Note</button>
        
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
        <div className="note-item">
          <div className="notes-header">
            <button> x </button>
          </div>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
        </div>
        
        ))}
      </div>
    </div>
  );
}

export default About;
