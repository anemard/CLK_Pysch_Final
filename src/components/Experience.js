import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Experience() {
  let [experience, setExperience] = useState([])

  const fetchExperience = async () => {
    const {data} = await axios.get('http://localhost:8080/api/experiences')
    setExperience(data)
  }

  useEffect(() => {
    fetchExperience()
  }, [])

    return (
      <div className='component-page'>
        <div className='component-body-whole'>
            <div className='experience'>
              <div className='experience-title'>Experience</div>
                {experience.map(pg => (<div key={pg.id} className=''>
                  {pg.paragraph}
                </div>))}
            </div>
          </div>
      </div>
    )
}

export default Experience