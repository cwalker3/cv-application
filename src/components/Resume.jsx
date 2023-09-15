function Resume({data}) {
  return (
    <div className='resume'>
      {data.name} {data.email} {data.phone}
    </div>
  )
}

export default Resume;