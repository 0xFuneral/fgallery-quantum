import React from 'react'
import '../styles/card.css'
import { Link } from "react-router-dom";

function Card() {
    return <div className="card">
    <div className="card-content">
        <div className = "card-img">
        </div>
        <div className = "card-text">
            <div className ="card-links">
                <Link to="/artists">Name</Link>
            </div>
        </div>
    </div>
    </div>
}

export default Card