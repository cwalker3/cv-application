import { useState } from 'react';
import PersonalForm from './components/PersonalForm'

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
    startDate: '',
    endDate: ''
  })

  function handleChange(e) {
    const key = e.target.id;
    const newValue = e.target.value;
    setData({...data, [key]: newValue})
    console.log(data)
  }

  return (
    <>
      <PersonalForm data={data} onChange={handleChange}/>
      
    </>
  )
}

export default App
