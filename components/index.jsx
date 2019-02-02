import React from 'react'
import { render } from 'react-dom';
import Avatar from './avatar/avatar.jsx'
import Code from './code/code.jsx'
import Sections from './sections/sections.jsx'
import '../assets/public/fonts.css'
import './index.css'
import './print.css'
import '../assets/styles/railscasts.css'
import {headlines, info} from '../models/data.js'

const App = () => {
    return (
        <div id="app">
            <section id="profile" className="onPrint">
                <Avatar />
                {info.map((snippet, index) => <Code key={index + 'info'} noHeadline={true} {...snippet} />)}
            </section>
            <article id="codeBlocks" className="onPrint">
                <p className="visibleOnPrint">find this resume <a href="https://gitmibrahim.github.io/resume/">here on GitHub Pages</a></p>
                <nav id="jump" aria-labelledby="sectionsNavigation">
                    <p id="sectionsNavigation">jumb to: </p>
                    {headlines.map(h => <a href={'#' + h.id} key={h.id}>{ h.content }</a>)}
                </nav>
                <hr/>
                <Sections />
            </article>
        </div>
    )
}

render((
        <App />
    ),
    document.getElementById('root')
);