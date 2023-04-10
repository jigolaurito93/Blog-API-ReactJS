import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ username, city, loggedIn, logUserOut }) {
    // console.log(props);
    // console.log(typeof props);
    return (
        <nav className="navbar navbar-expand-lg" style={{ background: "#383838" }}  >
            <div className="container-fluid">
                <Link className="navbar-brand fw-normal text-white" to="/">Welcome to FaceBlog</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link text-white" to="/">Home</Link>
                        {loggedIn ? (
                            <>
                            <Link className="nav-link text-white" to="/racers">Racers</Link>
                            <Link className="nav-link text-white" to="/buttons">Button Fun!</Link>
                            <Link className="nav-link text-white" to="/create">Create A Post</Link>
                            <Link className="nav-link text-white" to="/" onClick={() => logUserOut()}>Log Out</Link>
                            
                            </>
                        ) : (
                            <>
                            <Link className="nav-link text-white" to="/register">Sign Up</Link>
                            <Link className="nav-link text-white" to="/login">Log In</Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}
