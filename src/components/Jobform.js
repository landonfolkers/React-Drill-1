import React from 'react';

export default function Jobform({makeJob}) {
    return <section id='side'> 
        <h3>Add a Job</h3>
        <form className="job-form" onSubmit={makeJob}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" />
        <label htmlFor="pay">Compensation</label>
        <input type="text" name="pay" />
        <label htmlFor="description">Description</label>
        <textarea name="description" rows="8" cols="40"></textarea>
        <input type="submit" name="submit" value="Submit" />
        </form>
    </section>
  }
