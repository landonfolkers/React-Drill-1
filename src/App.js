import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Joblist from './components/Joblist';
import Jobform from './components/Jobform';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
  super(props)
  this.state = {jobs: []}
}

  componentWillMount() {
    this.findJobs()
  }

  findJobs() {
    fetch('./listings.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      } 
    })
    .then(response => response.json())
    .then(jobs => this.setState({jobs}))
  }

  makeJob = (e) => {
    e.preventDefault()
    let data = new FormData(e.target)
    let {jobs} = this.state
    console.log(jobs)
    jobs.unshift({
      title: data.get('title'),
      pay: data.get('pay'),
      description: data.get('description'),
      interested: []
    })
    console.log({jobs})
    this.setState({jobs})
    e.target.reset()
  }

  render() {
    return (
      <main>
        <Header />
        <section id="job-list">
          <h2>Job Listings</h2>
          <ul id='job-listings'>
            <Joblist jobs={this.state.jobs} />
          </ul>
        </section>
        <section id='side'>
          <h3>Add a Job</h3>
          <Jobform makeJob={this.makeJob} />
        </section>
        <Footer />
      </main>
    )
  }
}

export default App;