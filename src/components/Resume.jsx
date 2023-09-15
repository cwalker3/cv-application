function Resume({data}) {
  return (
    <div className='resume'>
      <div className="personal">
        {data.name} {data.email} {data.phone} 
      </div>
      <div className="education">
        {data.school} {data.major} {data.schoolDate}
      </div>
      
    </div>
  )
}

export default Resume;