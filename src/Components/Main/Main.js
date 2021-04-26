import React from 'react';
import "./Main.css";

const Main = () => {
    const lol = () => {
        document.getElementById('lol2').style.display="none";
    }
    return (
        <main>
            <div id="Main">
                <form id="Input">
                    <input type="text" name="" id="Input--Title" placeholder="Title" />
                    <br />
                    <input type="text" name="" id="Input--Description" placeholder="Description" /> <br />
                    <button id="Input--Button" onClick={lol} type="submit">Save</button>
                </form>
            </div>
        </main>
    );
};

export default Main;