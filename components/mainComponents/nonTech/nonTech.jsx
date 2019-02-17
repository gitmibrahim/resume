import React, { useState } from 'react'
import Avatar from '../../avatar/avatar.jsx'
import { languages, tools, learning, rLearning, projects } from '../../../models/data.js'
import './nonTech.css'

const NonTech = props => {
  const email = 'muhammed.ibrahim.me@gmail.com'
  const mobile = '01025075652'
  const [cemail, setCemail] = useState(false)
  const [cmobile, setCmobile] = useState(false)

  const copy = text => {
    if (!navigator.clipboard) {
      fallbackCopyTextToClipboard(text);
      return;
    }
    navigator.clipboard.writeText(text).then(function() {
      setTimeout(() => {
        text === mobile ? setCmobile(false) : setCemail(false)
      }, 1500);
      text === mobile ? setCmobile(true) : setCemail(true)
    }, function(err) {
      text === mobile ? setCmobile(false) : setCemail(false)
    });
  }
  
  return (
    <div id="nonTech">
      <div id="lines"></div>
      <ul id="info">
        <p className="visibleOnPrint">find this resume <a id="ghPages" href="https://gitmibrahim.github.io/resume/#/for-the-non-technicals">here on GitHub Pages</a></p>
        <h1 id="avatarWrapper" className="visibleOnPrint">
          <Avatar id="nonTechPic" />
        </h1>
        <li>Muhammed Ibrahim</li>
        <address>
          <li>
            <span className="contact" title="click to copy" onClick={() => copy(email)}>
              {cemail ? 'copied!' : 'email:'}
            </span>
            <a href={"mailto:" + email}> {email} </a>
          </li>
          <li>
            <span className="contact" title="click to copy" onClick={() => copy(mobile)}>
              {cmobile ? 'copied!' : 'mobile:'}
            </span>
            <a href={"tel:+2" + mobile}> {mobile} </a>
          </li>
          <li>address: Cairo, Egypt.</li>
        </address><br/><br/>
        <li>
          <h1>Languages: </h1>
        </li>
        <li>
          {languages.map((lang, index) => 
            lang.hasOwnProperty('phase') 
            ? null 
            : <span key={index + 'lang'}>
                {lang.title}
                {index < languages.length - 1 ? ' - ' : null}
              </span>
          )}
        </li><br/><br/>
        <li>
          <h1>Tools: </h1>
        </li>
        <li>
          {tools.map((tool, index) => 
            <span key={index + 'tool'}>
              {tool.match(/([^\/]+)(?=\.\w+$)/)[0]}
              {index < tools.length - 1 ? ' - ' : null}
            </span>
          )}
        </li><br/><br/>
        <li>
          <h1>Currently Learning: </h1>
        </li>
        <li>
          {learning.map((thing, index) => 
            <span key={index + 'learn'}>
              {thing.match(/([^\/]+)(?=\.\w+$)/)[0]}
              {index < learning.length - 1 ? ' - ' : null}
            </span>
          )}
        </li><br/><br/>
        <li>
          <h1>Recursively Learning: </h1>
        </li>
        <li>
          {rLearning.map((thing, index) => 
            <span key={index + 'rLearn'}>
              {thing}
              {index < rLearning.length - 1 ? ' - ' : null}
            </span>
          )}
        </li><br/><br/>
        <li>
          <h1>Some Projects and Contributions: </h1>
        </li>
        <li>
          {projects.map((project, index) => 
            <a className="projects" href={project.link} key={index + 'proj'} target="_blank">
              {project.title}
            </a>
          )}
        </li>
      </ul>
    </div>
  )
}

export default NonTech