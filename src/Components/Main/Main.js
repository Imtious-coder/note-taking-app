import React from 'react';
import { useState } from 'react';
import "./Main.css";

// Store data by UseState...
const Main = () => {
    const [note, setNote] = useState({
        note: ''
    })
    // Function to sadd note to ui...
    const handleSave = () => {
        document.getElementById('Main').style.display = "none";
        document.getElementById('Notes').style.display = "block";
        const Note = document.getElementById('Input--Note').value;
        // Setting data to useState..
        setNote({ note: Note })
    }
    return (
        <main>
            {/* Input UI */}
            <div id="Main">
                <div id="Input">
                    <input type="text" name="" id="Input--Note" placeholder="Write your note here..." /> <br />
                    <button id="Input--Button" onClick={handleSave} type="submit">Save</button>
                </div>
            </div>
            {/* Input UI */}
            {/* Note UI */}
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
            {/* Note UI */}
        </main>
    );
};

export default Main;