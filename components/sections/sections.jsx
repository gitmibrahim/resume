import React from 'react'
import Code from '../code/code.jsx'
import './sections.css'
import {headlines, languages, tools, learning, rLearning, projects} from '../../models/data.js'

const Sections = () => {
  let headline = 0
  return (
    <section id="sections">
      <article id="history">
          <h1>
            <span>{headlines[headline++].content}:</span>{' '}
            <a className="backtotop" href="#jump" title="back to top">🡩</a>
          </h1>
          {languages.map((snippet, index) => 
              snippet.title == 'break'
                  ? <h2 key={index + 'lang'} className="phase">{snippet.phase}:</h2>
                  : <Code key={index + 'lang'} {...snippet} />
          )}
      </article>

      <hr/>
      <article id="tools">
          <h2>
            <span>{headlines[headline++].content}:</span>{' '}
            <a className="backtotop" href="#jump" title="back to top">🡩</a>
          </h2>
          <div className="tools image">
              {tools.map(tool => <img key={tool} src={tool} alt={tool.replace(/^.*[\\\/]/, '')} title={'I use: ' + tool.match(/([^\/]+)(?=\.\w+$)/)[0] + ' in my work'} />)}
          </div>
      </article>

      <hr/>
      <article id="learning">
          <h2>
            <span>{headlines[headline++].content}:</span>{' '}
            <a className="backtotop" href="#jump" title="back to top">🡩</a>
          </h2>
          <div className="tools image">
              {learning.map(thing => <img key={thing} src={thing} alt={thing.replace(/^.*[\\\/]/, '')} title={'I\'m currently learning ' + thing.match(/([^\/]+)(?=\.\w+$)/)[0]} />)}
          </div>
      </article>

      <hr/>
      <article id="rLearning">
          <h2>
            <span>{headlines[headline++].content}:</span>{' '}
            <a className="backtotop" href="#jump" title="back to top">🡩</a>
          </h2>
          <div className="tools text">
              {rLearning.map(r => <p key={r}>{r}</p>)}
          </div>
      </article>

      <hr/>
      <article id="portfolio">
          <h2>
            <span>{headlines[headline++].content}:</span>{' '}
            <a className="backtotop" href="#jump" title="back to top">🡩</a>
          </h2>
          <div className="tools text">
              {projects.map(project => <a key={project.link} href={project.link} target="_blank">{project.title}</a>)}
          </div>
      </article>
    </section>
  )
}
export default Sections