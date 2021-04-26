import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 mt-2 text-white text-center">
                        <h4>Notes</h4>
                    </div>
                    <div className="col-md-1 ms-auto mt-2 text-white text-center">
                        <p>Home</p>
                    </div>
                    <div className="col-md-1 mt-2 text-white text-center">
                        <p>About us</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;