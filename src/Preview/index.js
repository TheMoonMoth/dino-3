import React from "react"

const Preview = props => {
  return (
    <div>
      <button id="preview-toggle" onClick={props.toggle}>Show Preview</button>
      <section id="application-preview" className={
        props.active ? "" : "hidden"
      }>{props.text}</section>
    </div>
  )
}

export default Preview
