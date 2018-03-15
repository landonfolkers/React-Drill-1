import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Joblist from './components/Joblist'
import Jobform from './components/Jobform'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {jobs: []}
}

  findJobs() {
    fetch('/listings.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    })
    .then(response => response.json())
    .then(jobs => this.setState({jobs}))
  }

  componentDidMount() {
    this.findJobs()
  }

  makeJob = (e) => {
    e.preventDefault()
    let data = new FormData(e.target)
    let {jobs} = this.state
    jobs.unshift({
      title: data.title,
      pay: data.pay,
      description: data.description,
      interested: []
    })
    this.setState({jobs})
    e.target.reset()
  }

  render() {
    return (
      <body>
        <Header />
          <main>
            <Joblist jobs={this.state.jobs} />
          <Jobform makeJob={this.makeJob} />
          </main>
        <Footer />
      </body>
    )
  }
}

export default App