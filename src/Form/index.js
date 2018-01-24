import React from "react"

const Form = props => {
  return(
    <div>
      <form id="application-input" onSubmit={props.handleSubmit}>
        <label>Apply Here: </label>
        <textarea id="application-text" rows="8" cols="100" onChange={props.textToState}></textarea>
        <input id="submit" type="submit" value="Submit" />
      </form>
      <p id="message">{props.message}</p>
    </div>
  )
}

export default Form
