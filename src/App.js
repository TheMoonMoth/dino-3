import React, { Component } from "react"
import "./App.css"
import Header from "./Header"
import Details from "./Details"
import Form from "./Form"
import Preview from "./Preview"
import Footer from "./Footer"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [],
      message: "",
      text: "",
      preview: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.togglePreview = this.togglePreview.bind(this)
    this.textToState = this.textToState.bind(this)
  }

  componentDidMount(){
    fetch("./listing.json")
      .then(response => response.json())
      .then(response => this.setState({data: response}))
  }

  handleSubmit(e){
    e.preventDefault()
    e.target.reset()
    this.setState({message: "Your application was submitted!"})
    this.setState({text: ""})
  }

  togglePreview(e){
    e.preventDefault()
    e.target.parentNode.childNodes[1].classList.toggle("hidden")
  }

  textToState(e){
    e.preventDefault()
    this.setState({text: e.target.value})
  }

  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <section id="job-details">
            <h2>Job Details</h2>
            <Details job={this.state.data}/>
          </section>
          <Form message={this.state.message} handleSubmit={this.handleSubmit} textToState={this.textToState}/>
          <Preview previewText={this.state.text} toggle={this.togglePreview} text={this.state.text}/>
        </main>
        <Footer />
      </div>
    )
  }
}

export default App
