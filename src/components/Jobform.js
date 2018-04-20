import React from 'react'

let blankJob = { title: '', pay: '', description: '', interested: [] }

export default class JobForm extends React.Component {
  state = {
    job: { ...blankJob }
  }

  handleChange = (event) => {
    const job = this.state.job
    job[event.target.name] = event.target.value
    this.setState({ job: job })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.makeJob(this.state.job)
    this.setState({ job: { ...blankJob }, })
  }

  render() {
    return <div className="side-bar">
      <form className="job-form" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" value={this.state.job.title} onChange={this.handleChange} />
        <label htmlFor="pay">Compensation</label>
        <input type="text" name="pay" value={this.state.job.pay} onChange={this.handleChange} />
        <label htmlFor="description">Description</label>
        <textarea name="description" rows="8" cols="40" value={this.state.job.description} onChange={this.handleChange}></textarea>
        <input type="submit" name="submit" value="Submit" />
        <div className="status-bar">{this.state.statusMessage}</div>
      </form>
    </div>
  }
}
