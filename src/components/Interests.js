import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Interests() {
  let [interests, setInterests] = useState([{list: []}])
  let isAdmin = true;

  const fetchInterests = async () => {
    const {data} = await axios.get('http://localhost:8080/api/interests/')
    setInterests(data)
  }

  const deleteInterests = async () => {

  }

  const updateInterests = async () => {

  }

  const addInterests = async () => {

  }

  let count = 0

  useEffect(() => {
    fetchInterests()
  }, [])

    return (
      <div className='compontent-page-short' id='interests'>
        
        <div className='component-body-left'>
        <div className='interests-title'>Specialties & Interests</div>
        </div>
        <div className='component-body-right'>
          {(isAdmin) ? (<div>
            <p>This is ADMIN!</p>
            



          </div>) : (<div>{interests.map(items => (<div key={items.id} className='interests'>
                  {items.list.map(item => (<p key={item}>{item}</p>))}
                </div>))}</div>)}



                
        </div>
      </div>
    )
}

export default Interests