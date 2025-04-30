import React, { useState } from 'react';
import axios from 'axios';

function App() {
    const [script, setScript] = useState('');
    const [intro, setIntro] = useState('');

    const generateIntro = async () => {
        try {
            const response = await axios.post('http://localhost:5000/generate-intro', { script });
            setIntro(response.data.intro);
        } catch (error) {
            console.error('Error:', error);
            setIntro('An error occurred while generating the intro.');
        }
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            <h1>YouTube Intro Generator</h1>
            <textarea
                style={{ width: '100%', height: '150px' }}
                placeholder="Paste your video script here..."
                value={script}
                onChange={(e) => setScript(e.target.value)}
            ></textarea>
            <button style={{ marginTop: '10px' }} onClick={generateIntro}>Generate Intro</button>
            <div id="output" style={{ marginTop: '20px' }}>
                {intro}
            </div>
        </div>
    );
}

export default App;