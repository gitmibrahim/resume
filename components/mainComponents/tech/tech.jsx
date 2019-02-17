import React from 'react'
import Avatar from '../../avatar/avatar.jsx'
import Code from '../../code/code.jsx'
import Sections from '../../sections/sections.jsx'
import { headlines, info } from '../../../models/data.js'
import './tech.css'

const Tech = props => {
  return (
    <div id="tech" className="onPrint">
      <section id="profile" className="onPrint">
          <Avatar id="techPic" />
          {info.map((snippet, index) => <Code key={index + 'info'} noHeadline={true} {...snippet} />)}
      </section>
      <article id="codeBlocks" className="onPrint">
        <p className="visibleOnPrint">find this resume <a href="https://gitmibrahim.github.io/resume/#/">here on GitHub Pages</a></p>
        <nav id="jump" aria-labelledby="sectionsNavigation">
            <p id="sectionsNavigation">jumb to: </p>
            {headlines.map((h, index) => 
              <a href={'#' + h.id} key={h.id}>
                { h.content }
                {index < headlines.length - 1 && ' - '}
              </a>
            )}
        </nav>
        <hr/>
        <Sections />
      </article>
    </div>
  )
}

export default Tech