import React from 'react'
import "./start.css"

function Start() {
  return (
    <div className='game-start'>
      <div className='nono'><p>NONOGRAM</p></div>
      <a href='/one'>
      <button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;BAŞLA&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;BAŞLA&nbsp;</span>
      </button>
      </a>

      <a href='/whatgame'>
      <button data-text="Awesome" class="button">
        <span class="actual-text">&nbsp;AÇIKLAMA&nbsp;</span>
        <span class="hover-text" aria-hidden="true">&nbsp;AÇIKLAMA&nbsp;</span>
      </button>
      </a>
    </div>
  )
}

export default Start