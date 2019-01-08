import React from 'react'
import '../../assets/public/fonts.css'
import './code.css'

const Code = props => {
  return (
    <div className="codeContainer">
      {!props.noHeadline && <p className="langName">{props.title}</p>}
      <pre className="preCode">
        <code className={props.language || 'javascript'}>
          {`${props.code}`}
        </code>
      </pre>
    </div>
  )
}

export default Code