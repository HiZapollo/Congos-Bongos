import React from 'react';

function AboutUs() {
    // Define styles as JavaScript objects
    const containerStyle = {
        border: 'rgb(36, 21, 5) solid 2px',
        borderRadius: '5px',
        padding: '15px',
        margin: '10px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        background: 'linear-gradient(to top right, rgb(114, 96, 61), rgb(170, 143, 92))',
        maxWidth: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
    };

    const h1Style = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginBottom: '20px'
    };

    const h2Style = {
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '15px'
    };

    const pStyle = {
        fontSize: '18px',
        marginBottom: '15px'
    };

    return (
        <div style={containerStyle}>
            <h1 style={h1Style}>About Congo Bongo</h1>
            <p style={pStyle}>
                Welcome to Congo Bongo - the ultimate bongo paradise! We are the rhythm of the jungle, bringing the vibrant beats of bongos to every home. Founded in the heart of the Congo, our passion for bongos knows no bounds.
            </p>
            <p style={pStyle}>
                At Congo Bongo, we believe that bongos are more than just musical instruments; they are a way of life. From the traditional beats of African tribes to modern-day fusion rhythms, bongos have always been at the center of musical celebrations.
            </p>
            <h2 style={h2Style}>Our Story</h2>
            <p style={pStyle}>
                Congo Bongo began as a dream in a small village in the Congo. Our founder, Bongo Bob, grew up surrounded by the enchanting rhythms of bongos. He envisioned a world where everyone could experience the joy and magic of bongos, and thus, Congo Bongo was born.
            </p>
            <p style={pStyle}>
                Over the years, Congo Bongo has traveled through jungles, savannahs, and cities to source the finest bongos. We've built a community of bongo enthusiasts, sharing knowledge, beats, and bongo love.
            </p>
            <h2 style={h2Style}>Why Choose Congo Bongo?</h2>
            <p style={pStyle}>
                Congo Bongo is not just a store; it's an experience. Our dedication to quality, authenticity, and community sets us apart. Every bongo we offer has a story, a heritage, and a soul.
            </p>
            <p style={pStyle}>
                Join the Congo Bongo family and immerse yourself in the world of bongos. Whether you're a seasoned player or a curious newbie, we promise a rhythmic adventure like no other!
            </p>
        </div>
    );
}

export default AboutUs;
