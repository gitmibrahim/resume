import React from 'react'
import './avatar.css'

//Avatar
const Avatar = props => {
  return (
      <div id={props.id} className="onPrint">
        <img id="profilePic" src="../assets/images/avatar.jpg" alt="Muhammed Ibrahim's Image"/>
      </div>
  )
}

export default Avatar