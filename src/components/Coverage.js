import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Coverage() {
  let [coverage, setCoverage] = useState([])

  const fetchCoverage = async () => {
    const {data} = await axios.get('http://localhost:8080/api/insurances')
    setCoverage(data)
  }

  useEffect(() => {
    fetchCoverage()
  }, [])

    return (
      <div className='compontent-page-short' id='coverage'>
        <div className='component-body-left'>
            <div className='coverage-title'>Coverage & Fees</div>
        </div>

        <div className='component-body-right'>
            <div className='coverage-fees'>
            {coverage.map(pg => (<div key={pg.id} className='paragraph'>
                <p>{pg.paragraph}</p>
            </div>))}
            </div>
        </div>
      </div>
    )
}

export default Coverage