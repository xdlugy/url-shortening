import React from 'react'

export default function Link({oldLink, newLink}) {

  function handleCopy() {
    navigator.clipboard.writeText(newLink);
  }

  return (
    <div className="previous">
      <p>{oldLink}</p>
      <hr></hr>
      <p>{newLink}</p>
      <button className="copy" onClick={handleCopy}>Copy</button>
    </div>
  )
}
