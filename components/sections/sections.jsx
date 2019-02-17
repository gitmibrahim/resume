import React from 'react'
import Code from '../code/code.jsx'
import './sections.css'
import {headlines, languages, tools, learning, rLearning, projects} from '../../models/data.js'

const Sections = () => {
  let headline = 0
  const scrollToTop = () => {
    window.scrollTo(0,0)
    // window.location.hash = ''
  }

  return (
    <section id="sections">
      <article id="history">
          <h1>{ headlines[headline++].content + ':'}</h1>
          {languages.map((snippet, index) => 
              snippet.title == 'break'
                  ? <h2 key={index + 'lang'} className="phase">{snippet.phase}:</h2>
                  : <Code key={index + 'lang'} {...snippet} />
          )}
      </article>

      <hr/>
      <article id="tools">
          <h2>{ headlines[headline++].content + ':'}</h2>
          <div className="tools images">
              {tools.map(tool => <img key={tool} src={tool} alt={tool.replace(/^.*[\\\/]/, '')} title={'I use: ' + tool.match(/([^\/]+)(?=\.\w+$)/)[0] + ' in my work'} />)}
          </div>
      </article>

      <hr/>
      <article id="learning">
          <h2>{ headlines[headline++].content + ':'}</h2>
          <div className="tools images">
              {learning.map(thing => <img key={thing} src={thing} alt={thing.replace(/^.*[\\\/]/, '')} title={'I\'m currently learning ' + thing.match(/([^\/]+)(?=\.\w+$)/)[0]} />)}
          </div>
      </article>

      <hr/>
      <article id="rLearning">
          <h2>{ headlines[headline++].content + ':'}</h2>
          <div className="tools text">
              {rLearning.map(r => <p key={r}>{r}</p>)}
          </div>
      </article>

      <hr/>
      <article id="portfolio">
          <h2>{ headlines[headline++].content + ':'}</h2>
          <div className="tools text">
              {projects.map(project => <a key={project.link} href={project.link} target="_blank">{project.title}</a>)}
          </div>
      </article>
    </section>
  )
}

export default Sections