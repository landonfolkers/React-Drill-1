import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Joblist from './components/Joblist'
import Jobform from './components/Jobform'
import Footer from './components/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { jobs: [] }
  }

  findJobs() {
    fetch('/listings.json', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(jobs => this.setState({ jobs }))
  }

  componentDidMount() {
    this.findJobs()
  }

  makeJob = (job) => {
    const { jobs } = this.state
    jobs.unshift(job)
    return this.setState({ jobs })
  }

  render() {
    return (
      <section id="body">
        <Header />
        <main>
          <Joblist jobs={this.state.jobs} />
          <Jobform makeJob={this.makeJob} />
        </main>
        <Footer />
      </section>
    )
  }
}

export default App