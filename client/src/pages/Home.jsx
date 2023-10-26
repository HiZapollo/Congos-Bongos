import React, { useState, useEffect } from 'react';

const Home = () => {
    const [bongos, setBongos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/bongos')
            .then(response => response.json())
            .then(data => setBongos(data));
    }, []);

    return (
        <div>
            <h1>Welcome to Bongo Amazon</h1>
            <div className="bongo-grid">
                {bongos.map(bongo => (
                    <div key={bongo._id} className="bongo-card">
                        <img src={bongo.imageUrl} alt={bongo.name} />
                        <h2>{bongo.name}</h2>
                        <p>{bongo.description}</p>
                        <p>Price: ${bongo.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
