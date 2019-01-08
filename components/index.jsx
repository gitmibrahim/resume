import React, { useState } from 'react'
import { render } from 'react-dom';
import Avatar from './avatar/avatar.jsx'
import Code from './code/code.jsx'
import '../assets/public/fonts.css'
import './index.css'
// import 'highlight.js/styles/tomorrow-night-bright.css'
import '../assets/styles/railscasts.css'
import {languages, info, tools, learning, projects} from '../models/data.js'

const App = () => {
    let id = 0
    languages.map(lang => lang['id'] = ++id)
    id = 0
    info.map(lang => lang['id'] = ++id)
    
    return (
        <div id="app">
            <aside id="profile">
                <Avatar />
                {info.map(snippet => <Code key={snippet.id} noHeadline={true} {...snippet} />)}
            </aside>
            <article id="codeBlocks">
                <p>find this resume <a href="https://gitmibrahim.github.io/resume/">here on GitHub Pages</a></p>
                <p id="jump">jumb to: 
                    <br/>
                    <a href="#history">How I Coded Along The Past 2 Years</a>{' - '}
                    <a href="#tools">Helping Tools</a>{' - '}
                    <a href="#learning">Currently Learning</a>{' - '}
                    <a href="#portfolio">Some Projects and Contributions</a>
                </p>
                <hr id="history" />
                <h3>How I Coded Along The Past 2 Years: <span><a href="#jump">&uarr;</a></span></h3>
                {languages.map(snippet => 
                    snippet.title == 'break'
                        ? <p key={snippet.id} className="phase">{snippet.phase}:</p>
                        : <Code key={snippet.id} {...snippet} />
                )}

                <hr id="tools"/>
                <h3>Helping Tools: <span><a href="#jump">&uarr;</a></span></h3>
                <div className="tools">
                    {tools.map(tool => <img key={tool} src={tool} alt={tool.replace(/^.*[\\\/]/, '')} />)}
                </div>

                <hr id="learning"/>
                <h3>Currently Learning: <span><a href="#jump">&uarr;</a></span></h3>
                <div className="tools">
                    {learning.map(thing => <img key={thing} src={thing} alt={thing.replace(/^.*[\\\/]/, '')} />)}
                </div>

                <hr id="portfolio"/>
                <h3>Some Projects and Contributions: <span><a href="#jump">&uarr;</a></span></h3>
                <div className="tools">
                    {projects.map(project => <a key={project.link} href={project.link} target="_blank">{project.title}</a>)}
                </div>
            </article>
        </div>
    )
}

render((
        <App />
    ),
    document.getElementById('root')
);