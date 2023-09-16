function EducationForm({data, onChange}) {
  return (
    <form>
      <h1>Education</h1>
      <div className="input-container">
        <label htmlFor='school'>School</label>
        <input type="text" id='school' value={data.school} onChange={onChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='major'>Major</label>
        <input type="text" id='major' value={data.major} onChange={onChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='schoolDate'>Dates Attended</label>
        <input type="text" id='schoolDate' value={data.schoolDate} onChange={onChange}/>
      </div>
    </form>
  )
}
export default EducationForm;