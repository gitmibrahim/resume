import React, { useEffect } from 'react'
import '../../assets/public/fonts.css'
import './code.css'

const Code = props => {
  const codes = document.getElementsByTagName('code')
  useEffect(() => {
    Array.prototype.map.call(codes, code => hljs.highlightBlock(code))
  });

  return (
    <div className="codeContainer">
      {!props.noHeadline && <h2 className="langName">{props.title}</h2>}
      <pre className="preCode">
        <code className={props.language || 'javascript'}>
          {`${props.code}`}
        </code>
      </pre>
    </div>
  )
  
}

export default Code