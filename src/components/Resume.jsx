function Resume({data}) {
  return (
    <div className='resume'>
      <div className="personal">
        {data.name} {data.email} {data.phone} 
      </div>
      <div className="education">
        {data.school} {data.major} {data.schoolDate}
      </div>
      <div className="experience">
        {data.company} {data.position} {data.jobDate}
      </div>
      
    </div>
  )
}

export default Resume;