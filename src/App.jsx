import { useState } from 'react'
import './App.css'

function App() {
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [isSubmitted,setIsSubmitted] = useState(false);
  function handleSubmit(e){
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
  }
  return (
    <div className='main-container'>
      <div className='cv-details'>
        <h1>CV Details Section</h1>
        <div className="general-info">
          <h2 className='title'>General Information</h2>
          <p className={isSubmitted ? 'disabled' : ''}>Fill out the form!</p>
          <form className={isSubmitted ? 'general-form disabled' : 'general-form'}>
            <label htmlFor='full-name'>Enter Full Name (required)</label>
            <input type="text" id='full-name' placeholder='e.g John Snow' required onChange={(e)=>setFullName(e.target.value)} />
            <label htmlFor='email'>Enter Email (required)</label>
            <input type="email" id='email' placeholder='e.g example@gmail.com' required onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor='phone-no'>Enter Phone Number (required)</label>
            <input type="number" id='phone-no' placeholder='e.g 07045687911' required onChange={(e)=>setPhoneNumber(e.target.value)} />
            <button type='submit' id='submit-form' onClick={handleSubmit}>Submit Form</button>
          </form>
          <button className={!isSubmitted ? 'disabled' : ''} onClick={handleSubmit}>Edit General Info</button>
        </div>
        <div className="educational-experience">
          <h2 className="title">Educational Experience</h2>
          <div className='educational-info disabled'>
            
          </div>
          <button>+ Add Education</button>
        </div>
        <div className="practical-experience">
          <h2 className="title">Practical Experience</h2>
          <button>+ Add Experience</button>
        </div>
      </div>
      <div className='cv-preview'>
        <h1>CV Preview Section</h1>
        <div>
          <h2>General Information</h2>
          <div>
            <p>Full Name: {fullName}</p>
            <p>Email: {email}</p>
            <p>Phone Number: {phoneNumber}</p>
          </div>
          <h2>Educational Experience</h2>
          <div></div>
          <h2>Practical Experience</h2>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default App
