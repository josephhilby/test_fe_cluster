import React from 'react';
import './AppLogo.css';

const AppLogo: React.FC = () => {
    return (
        <div className="App-logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="512px" height="512px">
                <linearGradient id="FTgfZn_BKpU6BFeGJnd8oa" x1="32" x2="32" y1="8" y2="56" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                    <stop offset="0" stop-color="#1a6dff"/>
                    <stop offset="1" stop-color="#c822ff"/>
                </linearGradient>
                <path fill="url(#FTgfZn_BKpU6BFeGJnd8oa)" d="M42.575,56h-21.15c-1.733,0-3.346-0.962-4.208-2.511L6.642,34.483 c-0.853-1.532-0.853-3.435,0-4.967l10.575-19.006C18.079,8.962,19.691,8,21.425,8h21.15c1.733,0,3.346,0.962,4.208,2.511 l10.575,19.006c0.853,1.532,0.853,3.435,0,4.967L46.783,53.489C45.921,55.038,44.309,56,42.575,56z M18.965,52.517 C19.474,53.432,20.417,54,21.425,54h21.15c1.008,0,1.951-0.568,2.46-1.483L55.61,33.511c0.519-0.932,0.519-2.09,0-3.021 L45.035,11.483C44.526,10.568,43.583,10,42.575,10h-21.15c-1.008,0-1.951,0.568-2.46,1.483L8.39,30.489 c-0.519,0.932-0.519,2.09,0,3.021L18.965,52.517z"/>
                <linearGradient id="FTgfZn_BKpU6BFeGJnd8ob" x1="32" x2="32" y1="28" y2="36" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                    <stop offset="0" stop-color="#6dc7ff"/>
                    <stop offset="1" stop-color="#e6abff"/>
                </linearGradient>
                <path fill="url(#FTgfZn_BKpU6BFeGJnd8ob)" d="M28 28H36V36H28z"/>
                <linearGradient id="FTgfZn_BKpU6BFeGJnd8oc" x1="32" x2="32" y1="8.75" y2="55.653" gradientUnits="userSpaceOnUse" spreadMethod="reflect">
                    <stop offset="0" stop-color="#1a6dff"/>
                    <stop offset="1" stop-color="#c822ff"/>
                </linearGradient>
                <path fill="url(#FTgfZn_BKpU6BFeGJnd8oc)" d="M45,29v-2h-4v-4h-4v-4h-2v4h-2v-4h-2v4h-2v-4h-2v4h-4v4h-4v2h4v2h-4v2h4v2h-4v2h4v4h4v4h2v-4 h2v4h2v-4h2v4h2v-4h4v-4h4v-2h-4v-2h4v-2h-4v-2H45z M39,39H25V25h14V39z"/>
            </svg>
        </div>
    );
}

export default AppLogo;