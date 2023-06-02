import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { InterestsEdit } from './'
import butterfly from '../img/butterfly.png';

function Interests(props) {
  let [interests, setInterests] = useState([])
  let [item, setItem] = useState('')
  let { admin } = props

  const fetchInterests = async () => {
    const {data} = await axios.get('http://localhost:8080/api/interests/')
    setInterests(data)
  }

  const createInterest = async ({ item }) => {
    const { data } = await axios.post('http://localhost:8080/api/interests', {
      item
    })
    fetchInterests()
  }

  const submitAddInterest = async(evt) => {
    evt.preventDefault();
    createInterest({item})
    setItem('')
  }

  const deleteInterest = async (id) => {
    const { data } = await axios.delete(`http://localhost:8080/api/interests/${id}`)
    fetchInterests()
  }

  useEffect(() => {
    fetchInterests()
  }, [])

    return (
      <div className='component-page'>
          <div className='butterfly-component'>
            <img src={butterfly} className='butterfly-img' />
          </div>
          <div className='interests-body-left' id='interests'>
            <div className='component-title'>Specialties & Interests</div>
            {(admin) ? (<div>
              <div>{interests.map(interest => (<div key={interest.id}><InterestsEdit interest={interest} /><button onClick={()=>{deleteInterest(interest.id)}}>Remove</button>
                  </div>))}
              </div>
              <form className="addform" onSubmit={submitAddInterest}>
                <input name="service" value={item} placeholder="New interest" type="text" onChange={(evt) => setItem(evt.target.value)} />
                <button type="submit" className="addButton">Submit</button>
                <button type="button" className="addButton" onClick={() => setItem('')}>Reset</button>
              </form>

            </div>) : (<div className="interests">{interests.map(interest => (<div key={interest.id}>{interest.item}
                  </div>))}</div>)}    
          </div>
      </div>
    )
}

export default Interests

