import React from "react"

const Details = props => {
  return(
    <div className="job-detail">
      <h4>{props.job.title}</h4>
      <p>{props.job.description}</p>
    </div>
  )
}

export default Details
