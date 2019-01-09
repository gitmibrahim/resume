import React, { useState } from 'react'
import { render } from 'react-dom';
import Avatar from './avatar/avatar.jsx'
import Code from './code/code.jsx'
import '../assets/public/fonts.css'
import './index.css'
// import 'highlight.js/styles/tomorrow-night-bright.css'
import '../assets/styles/railscasts.css'
import {languages, info, tools, learning, rLearning, projects} from '../models/data.js'

const App = () => {
    let id = 0
    languages.map(lang => lang['id'] = ++id)
    id = 0
    info.map(lang => lang['id'] = ++id)
    id = 0
    let headlines = [
        'How I Coded Along The Past 2 Years',
        'Helping Tools',
        'Currently Learning',
        'Recursively Learning',
        'Some Projects and Contributions'
    ]
    const resetId = () => id = 0
    return (
        <div id="app">
            <aside id="profile">
                <Avatar />
                {info.map(snippet => <Code key={snippet.id} noHeadline={true} {...snippet} />)}
            </aside>
            <article id="codeBlocks">
                <p id="jump">jumb to: 
                    <br/>
                    <a href="#history">{headlines[id++]}</a>{' - '}
                    <a href="#tools">{headlines[id++]}</a>{' - '}
                    <a href="#learning">{headlines[id++]}</a>{' - '}
                    <a href="#rLearning">{headlines[id++]}</a>{' - '}
                    <a href="#portfolio">{headlines[id++]}</a>
                </p>
                <span className="hidden">{id = 0}</span>
                <hr id="history" />
                <h3>{headlines[id++]}: <span><a href="#jump">&uarr;</a></span></h3>
                {languages.map(snippet => 
                    snippet.title == 'break'
                        ? <p key={snippet.id} className="phase">{snippet.phase}:</p>
                        : <Code key={snippet.id} {...snippet} />
                )}

                <hr id="tools"/>
                <h3>{headlines[id++]}: <span><a href="#jump">&uarr;</a></span></h3>
                <div className="tools">
                    {tools.map(tool => <img key={tool} src={tool} alt={tool.replace(/^.*[\\\/]/, '')} />)}
                </div>

                <hr id="learning"/>
                <h3>{headlines[id++]}: <span><a href="#jump">&uarr;</a></span></h3>
                <div className="tools">
                    {learning.map(thing => <img key={thing} src={thing} alt={thing.replace(/^.*[\\\/]/, '')} />)}
                </div>

                <hr id="rLearning"/>
                <h3>{headlines[id++]}: <span><a href="#jump">&uarr;</a></span></h3>
                <div className="tools">
                    {rLearning.map(r => <p key={r}>{r}</p>)}
                </div>

                <hr id="portfolio"/>
                <h3>{headlines[id++]}: <span><a href="#jump">&uarr;</a></span></h3>
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