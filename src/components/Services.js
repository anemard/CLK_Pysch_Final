import React, { useEffect, useState } from 'react';
import axios from 'axios';
import butterfly from '../img/butterfly-bw.jpg';
import { ServicesEdit } from './'

function Services(props) {
  let { admin } = props
  admin = true
  let [services, setServices] = useState([])
  let [paragraph, setParagraph] = useState('')

  const fetchServices = async () => {
    const {data} = await axios.get('http://localhost:8080/api/services')
    setServices(data)
  }

  const createServicePara = async ({ paragraph }) => {
    const { data } = await axios.post('http://localhost:8080/api/services', {
      paragraph
    })
    fetchServices()
  }

  const submitAddServices = async(evt) => {
    evt.preventDefault();
    createServicePara({paragraph})
    setParagraph('')
  }

  useEffect(() => {
    fetchServices()
  }, [])

    return (
      <div className='compontent-page-short' id='services'>
        <div className='component-body-right'>
            <div className='services-title'>Services</div>
            {(admin) ? 
            (<>
              {services.map(pg => (<div key={pg.id} className='services'>
                  <ServicesEdit paragraph={pg} />
              </div>))}
              <form className="addform" onSubmit={submitAddServices}>
                <textarea name="service" value={paragraph} placeholder="New service paragraph" type="text" className="input-paragraph" onChange={(evt) => setParagraph(evt.target.value)} />
                <button type="submit" className="addButton">Submit</button>
                <button type="button" className="addButton" onClick={() => setParagraph('')}>Reset</button>
              </form>
            </>) : 
            (<>
              {services.map(pg => (<div key={pg.id} className='services'>
                  <div className='paragraph'>{pg}</div>
              </div>))}
            </>)}
            
        </div>
        <div className='component-body-left'>
            <img src={butterfly} className='butterfly' />
        </div>
      </div>
    )
}

export default Services