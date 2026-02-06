'use client';

import React from 'react';
import './TestPulseButton.css';

export default function TestPulseButton() {
    return (
        <div className="test-container">
            <button className="pulse-button">
                <span className="button-text">Test Connexion MCP</span>
                <span className="pulse-ring"></span>
            </button>
            <p className="test-status">✅ Connexion Stitch active</p>
        </div>
    );
}
