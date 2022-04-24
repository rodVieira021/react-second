import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';
import SectionOne from './SectionOne';
import Footer from './Footer';
import './global.css'
import './style.css'

function App() {
    return (
        <div>
            <Navigation />
            <SectionOne />
            <Footer />
        </div>
    )
}



ReactDOM.render(<App />,document.getElementById('root'));
