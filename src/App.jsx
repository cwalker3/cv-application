import { useState } from 'react';
import PersonalForm from './components/PersonalForm'
import EducationForm from './components/EducationForm'
import Resume from './components/Resume'

function App() {
  const [data, setData] = useState({
    name: '', 
    email: '', 
    phone: '', 
    school: '', 
    major: '', 
    schoolDate: '',
    company: '',
    position: '',
    jobDate: ''
  })

  function handleChange(e) {
    const key = e.target.id;
    const newValue = e.target.value;
    setData({...data, [key]: newValue})
  }

  return (
    <>
      <div className="forms">
        <PersonalForm data={data} onChange={handleChange}/>
        <EducationForm data={data} onChange={handleChange}/>
      </div>
      <Resume data={data} />
    </>
  )
}

export default App
