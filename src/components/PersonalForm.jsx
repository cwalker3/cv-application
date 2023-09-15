function PersonalForm({data, onChange}) {
  return (
    <form>
      <div className="input-container">
        <label htmlFor='name'>Full Name</label>
        <input type="text" id='name' value={data.name} onChange={onChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='email'>Email</label>
        <input type="email" id='email' value={data.email} onChange={onChange}/>
      </div>
      <div className="input-container">
        <label htmlFor='phone'>Phone Number</label>
        <input type="tel" id='phone' value={data.phone} onChange={onChange}/>
      </div>
    </form>
  )
}

export default PersonalForm;