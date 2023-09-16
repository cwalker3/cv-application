function Resume({data}) {
  return (
    <div className='resume'>
      <div className="personal">
        <h1>Personal Info</h1>
        {data.name} {data.email} {data.phone} 
      </div>
      <div className="education">
        <h1>Education</h1>
        {data.school} {data.major} {data.schoolDate}
      </div>
      <div className="experience">
        <h1>Experience</h1>
        {data.company} {data.position} {data.jobDate}
      </div>
      
    </div>
  )
}

export default Resume;