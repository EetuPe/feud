import React from 'react'
import './Subtitle.css';

function Subtitle(props) {
  return (
    <div className="Subtitle">
      <h2>Kuka todennäköisimmin {props.question}?</h2>
    </div>
  )
}

export default Subtitle