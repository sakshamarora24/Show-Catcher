// src/screens/ShowListScreen.js

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Overview.css'; // Import CSS file for additional styling

const Overview = () => {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=all')
            .then(response => response.json())
            .then(data => {
                setShows(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="show-list-heading">SHOW CATCHER</h1> {/* Apply show-list-heading class */}
            <div className="row">
                {shows.map(({ show }) => (
                    <div key={show.id} className="col-md-6 mb-4">
                        <div className="card bg-dark text-light">
                            <img src={show.image?.medium || 'https://via.placeholder.com/300x400'} className="card-img-top" alt={show.name} />
                            <div className="card-body">
                                
                                    <h2 className="card-title">{show.name}</h2>
                                
                                {/* <p className="card-text">{show.summary}</p> */}
                                {/* Additional details */}
                                <p><strong>Status:</strong> {show.status}</p>
                                <p><strong>Language:</strong> {show.language}</p>
                                <p><strong>Genres:</strong> {show.genres.join(', ')}</p>
                                

                                {/* Add any other details you want to display */}
                                <Link to={`/show/${show.id}`} className="btn btn-danger">View Summary</Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Overview;
