import React from 'react';
import { Link, BrowserRouter as Router,Route,Routes, Outlet } from 'react-router-dom';
import Home from '../Home/Home';

function Routing() {
    return (
        <>
            <div>
                <ul>
                    <li>
                        <Link to ="/admin/home">Home</Link>
                    </li>
                    <li>
                        <Link to ="/admin/About">About</Link>
                    </li>
                </ul>
                <Outlet/>
            </div>
        </>
    )
}

export default Routing
