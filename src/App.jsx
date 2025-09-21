import { useState } from 'react'
import './App.css'

function App() {
  const qualifications = ['GCSE','College Diploma', 'A Levels', "Undergraduate Degree", "Master's Degree", "Doctorate (Ph.D)"];
  const [fullName,setFullName] = useState('');
  const [email,setEmail] = useState('');
  const [phoneNumber,setPhoneNumber] = useState('');
  const [isGeneralHidden,setIsGeneralHidden] = useState(false);
  const [isEducationHidden,setIsEducationHidden] = useState(true);
  const [isJobHidden,setIsJobHidden] = useState(true);
  const [generalWarningVisible,setGeneralWarningVisible] = useState(false);
  const [edWarningVisible,setEdWarningVisible] = useState(false);
  const [jobWarningVisible,setJobWarningVisible] = useState(false);
  const [startDateSchool,setStartDateSchool] = useState('');
  const [endDateSchool,setEndDateSchool] = useState('');
  const [schoolName,setSchoolName] = useState('');
  const [qualification,setQualification] = useState('');
  const [startDateJob,setStartDateJob] = useState('');
  const [endDateJob,setEndDateJob] = useState('');
  const [companyName,setCompanyName] = useState('');
  const [positionTitle,setPositionTitle] = useState('');
  const [responsibilities,setResponsibilities] = useState('');
  const [containsInfoEducation,setContainsInfoEducation] = useState(false);
  const [containsInfoJob,setContainsInfoJob] = useState(false);
  const [isInSchool,setIsInSchool] = useState(true);
  const [isInJob,setIsInJob] = useState(true);
  //const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/
  function handleJobRadioChange(e){
    if(e.target.value === 'Yes'){
      setIsInJob(true);
    }else{
      setIsInJob(false);
      
    }
  }

  function handleSchoolRadioChange(e){
    if(e.target.value === 'Yes'){
      setIsInSchool(true);
    }else{
      setIsInSchool(false);
    }
  }

  function handleGeneralSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    if(form.checkValidity()){
      setIsGeneralHidden(true);
      console.log("Valid email, passes pattern");
      setEdWarningVisible(false);
      setJobWarningVisible(false);
    }else{
      form.reportValidity()
    }
  }

  function handleEducationSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    if(form.checkValidity()){
      setIsEducationHidden(true);
      console.log("Valid email, passes pattern");
      setGeneralWarningVisible(false);
      setJobWarningVisible(false);
      setContainsInfoEducation(true);
      if(isInSchool){
        setEndDateSchool('N/A')
      }
    }else{
      form.reportValidity()
    }
  }

  function handleJobSubmit(e){
    e.preventDefault();
    const form = e.currentTarget;
    if(form.checkValidity()){
      setIsJobHidden(true);
      console.log("Valid email, passes pattern");
      setEdWarningVisible(false);
      setGeneralWarningVisible(false);
      setContainsInfoJob(true);
      if(responsibilities.trim() === ''){
        setResponsibilities('N/A')
      }
      if(isInJob){
      setEndDateJob('N/A');
      }
    }else{
      form.reportValidity()
    }
  }

  function handleEditGeneralBtn(){
    if(isEducationHidden && isJobHidden){
      setIsGeneralHidden(false)
    }else{
      setGeneralWarningVisible(true);
    }
  }

  function handleEducationBtn(){
    if(isGeneralHidden && isJobHidden){
      setIsEducationHidden(false)
    }else{
      setEdWarningVisible(true)
    }
  }

  function handleJobBtn(){
    if(isGeneralHidden && isEducationHidden){
      setIsJobHidden(false)
    }else{
      setJobWarningVisible(true);
    }
  }

  return (
    <div className='main-container'>
      <div className='cv-details'>
        <h1>CV Details Section</h1>
        <div className="general-info">
          <h2 className='title'>General Information</h2>
          <p className={isGeneralHidden ? 'disabled' : ''}>Fill out the form!</p>
          <form onSubmit={handleGeneralSubmit} className={isGeneralHidden ? 'general-form disabled' : 'general-form'} >
            <label htmlFor='full-name'>Enter Full Name (required)</label>
            <input type="text" id='full-name' placeholder='e.g John Snow' pattern="^[A-Za-z]{2,}\s[A-Za-z]{2,}$" required onChange={(e)=>setFullName(e.target.value)} />
            <label htmlFor='email'>Enter Email (required)</label>
            <input type="email" id='email' placeholder='e.g example@gmail.com' pattern="^[A-Za-z0-9._%+\-]+@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,}$" required onChange={(e)=>setEmail(e.target.value)} />
            <label htmlFor='phone-no'>Enter Phone Number (required)</label>
            <input type="tel" id='phone-no' placeholder='e.g +447045687911' pattern='^\+\d{10,17}$' required onChange={(e)=>setPhoneNumber(e.target.value)} />
            <button type='submit' id='submit-form' >Submit Form</button>
          </form>
          <p className={generalWarningVisible ? 'warning' : 'warning disabled'}>You have to submit the other forms first</p>
          <button className={!isGeneralHidden ? 'disabled' : ''}onClick={handleEditGeneralBtn}>Edit General Info</button>
        </div>
        <div className="educational-experience">
          <h2 className="title">Educational Experience</h2>
          <div className='educational-info'>
            <form onSubmit={handleEducationSubmit} className={isEducationHidden ? 'education-form disabled' : 'education-form'} >
            <label htmlFor='school-name'>Enter School Name (required)</label>
            <input type="text" id='school-name' placeholder='e.g Barnfield College' value={schoolName}  required onChange={(e)=>setSchoolName(e.target.value)} />
            <label htmlFor='qualifications'>Choose Qualification Gained (required)</label>
            <select name="qualifications" id="qualifications" value={qualification} onChange={(e)=>setQualification(e.target.value)}>
              <option value="">Select one</option>
              {qualifications.map(qualification => <option key={qualification} value={qualification}>{qualification}</option>)}
            </select>
            <fieldset className='date-section'>
              <legend>Period Of Attendance</legend>
              <div className='date'>
                <label htmlFor="start-date">Start Date</label>
                <input type="date" value={startDateSchool} onChange={(e)=>setStartDateSchool(e.target.value)} id='start-date' />
              </div>
              <p>Are you still in this school?</p>
              <div>
                <input type="radio" name="end-date" id="current" onChange={handleSchoolRadioChange} value='Yes' />
                <label htmlFor="current">Yes</label>
              </div>
              <div>
                <input type="radio" name="end-date" id="not-current" onChange={handleSchoolRadioChange} value='No' />
                <label htmlFor="not-current">No</label>
              </div>
              <div className={isInSchool ? 'date disabled' : 'date'}>
                <label htmlFor="end-date">End Date</label>
                <input type="date" value={endDateSchool} onChange={(e)=>setEndDateSchool(e.target.value)} id='end-date' min={startDateSchool} />
              </div>
            </fieldset>
            <button type='submit' id='submit-form' >Submit Form</button>
          </form>
          </div>
          <p className={edWarningVisible ? 'warning' : 'warning disabled'}>You have to submit the other forms first</p>
          <button onClick={handleEducationBtn} className={!isEducationHidden ? 'disabled' : ''}>+ {containsInfoEducation ? 'Edit' : 'Add'} Education</button>
        </div>
        <div className="job-experience">
          <h2 className="title">Job Experience</h2>
          <div className='job-info'>
            <form onSubmit={handleJobSubmit} className={isJobHidden ? 'job-form disabled' : 'job-form'} >
            <label htmlFor='company-name'>Enter Company Name (required)</label>
            <input type="text" id='company-name' placeholder='e.g The Chalk Hills Academy' pattern="^[A-Za-z]{2,}" required onChange={(e)=>setCompanyName(e.target.value)} value={companyName} />
            <label htmlFor='full-name'>Enter Position Title (required)</label>
            <input type="text" id='full-name' placeholder='e.g Manager' pattern="^[A-Za-z]{2,}" required onChange={(e)=>setPositionTitle(e.target.value)} value={positionTitle} />
            <label htmlFor="responsiblities">Main Responsibilites (Optional)</label>
            <textarea name="responsibilities" id="responsibilities" placeholder='Enter responsibilities here' rows={5} cols={10} value={responsibilities} onChange={(e)=>setResponsibilities(e.target.value)}></textarea>
            <fieldset className='date-section'>
              <legend>Period Of Attendance</legend>
              <div className='date'>
                <label htmlFor="start-date">Start Date</label>
                <input type="date" value={startDateJob} onChange={(e)=>setStartDateJob(e.target.value)} id='start-date' required />
              </div>
              <p>Are you still in this job?</p>
              <div>
                <input type="radio" name="end-date" id="current" value='Yes' onChange={handleJobRadioChange} />
                <label htmlFor="current">Yes</label>
              </div>
              <div>
                <input type="radio" name="end-date" id="not-current" value='No' onChange={handleJobRadioChange} />
                <label htmlFor="not-current">No</label>
              </div>
              <div className={isInJob ? 'date disabled' : 'date'}>
                <label htmlFor="end-date">End Date</label>
                <input type="date" value={endDateJob} onChange={(e)=>setEndDateJob(e.target.value)} id='end-date' min={startDateJob}  />
              </div>
            </fieldset>
            <button type='submit' id='submit-form' >Submit Form</button>
          </form>
          </div>
          <p className={jobWarningVisible ? 'warning' : 'warning disabled'}>You have to submit the other forms first</p>
          <button onClick={handleJobBtn} className={!isJobHidden ? 'disabled' : ''}>+ {containsInfoJob ? 'Edit' : 'Add'} Experience</button>
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
          <div>
            <p>School Name: {schoolName}</p>
            <p>Qualification: {qualification}</p>
            <p>Start Date: {startDateSchool}</p>
            <p>End Date: {endDateSchool}</p>
          </div>
          <h2>Practical Experience</h2>
          <div>
            <p>Company Name: {companyName}</p>
            <p>Position Title: {positionTitle}</p>
            <p>Start Date: {startDateJob}</p>
            <p>End Date: {endDateJob}</p>
            <p>Main Responsibilites: {responsibilities}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
