import React from "react";
import mockChase from '../assets/images/mockChase.png';
import mockMiniStudio from '../assets/images/mockMiniStudio.png';
import mockFoodEstroyer from '../assets/images/mockFoodEstroyer.png';
import mockKaguEngine from '../assets/images/mockKaguEngine.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/dark-dylan-dev/KaguEngine" target="_blank" rel="noreferrer"><img src={mockKaguEngine} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dark-dylan-dev/KaguEngine" target="_blank" rel="noreferrer"><h2>Kagu Engine</h2></a>
                <p>My ongoing personal project, a 3D Vulkan engine written in C++ using various frameworks such as DearImGui and STB image.</p>
            </div>
            <div className="project">
                <a href="https://github.com/dark-dylan-dev/Food-estroyer" target="_blank" rel="noreferrer"><img src={mockFoodEstroyer} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/dark-dylan-dev/Food-estroyer" target="_blank" rel="noreferrer"><h2>Food'estroyer</h2></a>
                <p>My favorite 1st year project at Gaming Campus, a comic shoot'em up developed in 2 weeks with <a href="https://github.com/JulienRdgs/" target="_blank">Julien Rodrigues</a>, a classmate using the SFML framework.</p>
            </div>
            <div className="project">
                <a href="https://github.com/KPommez/Mini-Studio" target="_blank" rel="noreferrer"><img src={mockMiniStudio} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/KPommez/Mini-Studio" target="_blank" rel="noreferrer"><h2>Mini-Studio (AYM)</h2></a>
                <p>Another SFML C++ project developed in 2 weeks with a team of 11 people to make a solarpunk 2D game.</p>
            </div>
            <div className="project">
                <a href="https://github.com/Poisskaille/GameJam-LesFondsDeTiroirs/" target="_blank" rel="noreferrer"><img src={mockChase} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/Poisskaille/GameJam-LesFondsDeTiroirs/" target="_blank" rel="noreferrer"><h2>Chase</h2></a>
                <p>This is my first ever Game Jam, developed in 40 hours with Unity, I learned how to use this famous engine with this project, the project is available for Android on <a href="https://les-fonds-de-tiroirs.itch.io/chase" target="_blank">itch.io</a>.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;