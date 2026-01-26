"use client";

import React, { useState } from 'react';
import './SolarSystem.css';

const SolarSystem = () => {
    const [view, setView] = useState('3D');
    const [zoom, setZoom] = useState('large');
    const [activePlanet, setActivePlanet] = useState('earth');
    const [dataOpen, setDataOpen] = useState(false);
    const [controlsOpen, setControlsOpen] = useState(false);

    return (
        <div className={`solar-system-container view-${view} zoom-${zoom} ${activePlanet} ${dataOpen ? 'data-open' : 'data-close'} ${controlsOpen ? 'controls-open' : 'controls-close'}`}>
            {/* <div id="navbar">
                <button id="toggle-data" onClick={() => setDataOpen(!dataOpen)}>Data</button>
                <h1>Solar System</h1>
                <button id="toggle-controls" onClick={() => setControlsOpen(!controlsOpen)}>Controls</button>
            </div> */}

            {/* <div id="data">
                {['sun', 'mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'].map(planet => (
                    <button
                        key={planet}
                        className={activePlanet === planet ? 'active' : ''}
                        onClick={() => setActivePlanet(planet)}
                    >
                        {planet.charAt(0).toUpperCase() + planet.slice(1)}
                    </button>
                ))}
            </div> */}

            <div id="controls">
                <label className="set-view">
                    <input
                        type="checkbox"
                        checked={view === '2D'}
                        onChange={(e) => setView(e.target.checked ? '2D' : '3D')}
                    />
                    <span>{view} View</span>
                </label>
                <label className="set-zoom">
                    <input
                        type="checkbox"
                        checked={zoom === 'close'}
                        onChange={(e) => setZoom(e.target.checked ? 'close' : 'large')}
                    />
                    <span>Zoom</span>
                </label>
            </div>

            <div id="universe" className="scale-stretched">
                <div id="galaxy">
                    <div id="solar-system" className={activePlanet}>
                        {['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'].map((planet) => (
                            <div key={planet} id={planet} className="orbit" onClick={() => setActivePlanet(planet)}>
                                <div className="pos">
                                    <div className="planet" onClick={(e) => { e.stopPropagation(); setActivePlanet(planet); }}>
                                        {planet === 'earth' && (
                                            <div className="orbit">
                                                <div className="pos">
                                                    <div className="moon"></div>
                                                </div>
                                            </div>
                                        )}
                                        {planet === 'saturn' && <div className="ring"></div>}
                                        <dl className="infos">
                                            <dt>{planet.charAt(0).toUpperCase() + planet.slice(1)}</dt>
                                            <dd><span></span></dd>
                                        </dl>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* Sun */}
                        <div id="sun" onClick={() => setActivePlanet('sun')}>
                            <dl className="infos">
                                <dt>Sun</dt>
                                <dd><span></span></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolarSystem;
