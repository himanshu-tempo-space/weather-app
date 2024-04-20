
import React from 'react';
import Navigation from './Navigation';
import '../App.css';
function AboutPage() {
    return (
        <div>
            <Navigation />
            <header>
                <h1>About Us - Humber College Project</h1>
            </header>
            <main>
                <section id="about">
                    {/* About details */}
                </section>
            </main>
            <footer>
                <p>&copy; {String(2024)} Humber College Project</p>
            </footer>
        </div>
    );
}

export default AboutPage;
