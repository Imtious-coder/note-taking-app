import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Main.css";

const Main = () => {
    const [note, setNote] = useState({
        note: ''
    })
    console.log(note);
    const handleSave = () => {
        document.getElementById('Main').style.display = "none";
        document.getElementById('Notes').style.display = "block";
        const Note = document.getElementById('Input--Note').value;
        setNote({ note: Note })
    }
    return (
        <main>
            <div id="Main">
                <div id="Input">
                    <input type="text" name="" id="Input--Note" placeholder="Write your note here..." /> <br />
                    <button id="Input--Button" onClick={handleSave} type="submit">Save</button>
                </div>

            </div>
            <div className="d-flex align-items-center" id="Notes">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-12">
                            <p id="Note-Text">"{note.note}"</p>
                            <div className="text-danger">'Please reload the page to add a new note'</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;