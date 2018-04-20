import React from 'react'

export default function Joblist({ jobs }) {
  return <section id='job-list'>
    <h2>Job Listings</h2>
    <ul id='job-listings'>
      {jobs.map(job => <li key={job.id}>
        <h4>{job.title}</h4>
        <small>{job.pay}</small>
        <p>{job.description}</p>
        <small>{job.interested.length} dinos are interested in this job</small>
      </li>
      )}
    </ul>
  </section>
}
