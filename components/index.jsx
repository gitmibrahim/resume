import React, { useState, useEffect } from 'react'
import { render } from 'react-dom';
import { Router, Link, createHistory, globalHistory } from '@reach/router'
import '../assets/public/fonts.css'
import './index.css'
import './print.css'
import '../assets/styles/railscasts.css'
import Tech from './mainComponents/tech/tech.jsx'
import NonTech from './mainComponents/nonTech/nonTech.jsx'

const App = () => {
    const techNavClasses = 'hiddenOnPrint tab '
    const [pathname, setPathname] = useState(location.pathname)

    globalHistory.listen(() => {
        setPathname(location.pathname)
    })
    
    const isActive = ({ isCurrent }) => {
        return isCurrent ? { className: techNavClasses + "active" } : { className: techNavClasses}
    }

    const ExactNavLink = props => (
        <Link getProps={isActive} {...props} />
    )

    return (
        <div id="app">
            <nav id="techNav" className="hiddenOnPrint">
                <h1>{pathname === '/resume/' ? 'you don\'t understand this?' : 'are you a techie?'}</h1>
                <div id="switch">
                    <p>don't worry, you could switch between: </p>
                    <ExactNavLink to="/resume/">tech</ExactNavLink><span> and </span>
                    <ExactNavLink to="/resume/for-the-non-technicals">non-tech</ExactNavLink><span> views.</span>
                </div>
            </nav>
            <Router>
                <Tech path="/resume/" />
                <NonTech path="/resume/for-the-non-technicals" />
            </Router>
        </div>
    )
}

render((
        <App />
    ),
    document.getElementById('root')
);