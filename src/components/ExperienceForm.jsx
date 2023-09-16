function ExperienceForm({data, onChange}) {
  return (
    <form>
      <h1>Experience</h1>
      <div className="input-container">
        <label htmlFor='company'>Company</label>
        <input type="text" id='company' value={data.company} onChange={onChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='position'>Position</label>
        <input type="text" id='position' value={data.position} onChange={onChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='jobDate'>Dates Worked</label>
        <input type="text" id='jobDate' value={data.jobDate} onChange={onChange}/>
      </div>
    </form>
  )
}
export default ExperienceForm;