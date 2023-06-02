import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InterestsEdit(props) {
  let { interest } = props
  let [editInterest, setEditInterest] = useState('')
  let [edit, setEdit] = useState(false)
  let [id, setId] = useState(0)

  let updateInterest = async (id, item)=>{
    const res = await axios.put(`http://localhost:8080/api/interests/${id}`, {
      item
    })
  }

  let submitUpdate = (id, interest) => {
    updateInterest(id, interest)
    setEdit(false)
  }

  useEffect(() => {
    setEditInterest(interest.item)
    setId(interest.id)
  }, [])

  return (
    <div className='edit'>
        {(edit) ? (<>
        
        <div>
          <input
            name="services-paragraph" 
            value={editInterest} 
            type="text"
            onChange={(evt) => setEditInterest(evt.target.value)} />
          <button onClick={() => {submitUpdate(id, editInterest)}}>Save</button>
        </div>
    
    </>) : (<div>
        <div>{editInterest}</div>
        <button onClick={() => {setEdit(true)}}>Edit</button>
    </div>)}
    </div>
  )
}

export default InterestsEdit


{/* <div className="paragraph">
{(edit) ? (
    <div>
      <textarea 
        name="about-paragraph" 
        value={editInterest} 
        type="text" 
        className="input-paragraph" 
        onChange={(evt) => setEditInterest(evt.target.value)} />
      <button>Save</button>
    </div>
  ) : (
    <div>
      <div>{editInterest}</div>
      <button onClick={() => {setEdit(true)}}>Edit</button>
    </div>
    
)}


</div> */}