import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { CoverageEdit } from './'
import chair from '../img/chair.png';

function Coverage(props) {
  let { admin } = props
  let [coverage, setCoverage] = useState([])
  let [paragraph, setParagraph] = useState('')

  const fetchCoverage = async () => {
    const {data} = await axios.get('http://localhost:8080/api/insurances')
    setCoverage(data)
  }

  const createCoveragePara = async ({ paragraph }) => {
    const { data } = await axios.post('http://localhost:8080/api/insurances', {
      paragraph
    })
    fetchCoverage()
  }

  const submitAddServices = async(evt) => {
    evt.preventDefault();
    createCoveragePara({paragraph})
    setParagraph('')
  }

  const deleteCoverage = async (id) => {
    const { data } = await axios.delete(`http://localhost:8080/api/insurances/${id}`)
    fetchCoverage()
  }

  useEffect(() => {
    fetchCoverage()
  }, [])

    return (
      <div className='component-page' >
        <div className='chair-component'>
          <img src={chair} className='chair-img' />
        </div>

        <div className='component-body-right' id='coverage'>
          <div className='component-title'>Coverage & Fees</div>
          {(admin) ? 
            (<>
              {coverage.map(pg => (<div key={pg.id} className='coverage-fees'>
                  <CoverageEdit paragraph={pg} /><button onClick={()=>{deleteCoverage(pg.id)}}>Remove</button>
              </div>))}
              <form className="addform" onSubmit={submitAddServices}>
                <textarea name="coverage" value={paragraph} placeholder="New coverage paragraph" type="text" className="input-paragraph" onChange={(evt) => setParagraph(evt.target.value)} />
                <button type="submit" className="addButton">Submit</button>
                <button type="button" className="addButton" onClick={() => setParagraph('')}>Reset</button>
              </form>
            </>) : 
            (<div className='coverage-fees'>
              {coverage.map(pg => (<div key={pg.id} className='paragraph'>
                  <div>{pg.paragraph}</div>
              </div>))}
            </div>)}
        </div>
      </div>
    )
}

export default Coverage