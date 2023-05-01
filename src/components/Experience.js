import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ExperienceEdit } from './';

function Experience(props) {
  let { admin } = props
  let [experience, setExperience] = useState([])
  let [paragraph, setParagraph] = useState('')

  const fetchExperience = async () => {
    const {data} = await axios.get('http://localhost:8080/api/experiences')
    setExperience(data)
  }

  const createExp = async ({ paragraph }) => {
    const { data } = await axios.post('http://localhost:8080/api/experiences', {
      paragraph
    })
    fetchExperience()
  }

  const submitAddExp = async(evt) => {
    evt.preventDefault();
    createExp({paragraph})
    setParagraph('')
  }

  useEffect(() => {
    fetchExperience()
  }, [])

    return (
      <div className='component-page' id='experience'>
        <div className='component-body-whole'>
            <div className='experience'>
              <div className='experience-title'>Training & Experience</div>
                {(admin) ? (<div>
                  {experience.map(pg => (
                    <div key={pg.id} className='paragraph'>
                      <ExperienceEdit paragraph={pg} />
                    </div>
                  ))}
                  <div>
                    <form onSubmit={submitAddExp}>
                    <textarea name="experience" value={paragraph} className="input-paragraph" placeholder="New 'experience' paragraph" type="text" onChange={(evt) => setParagraph(evt.target.value)} />
                      <button type="submit">submit</button>
                    </form>
                    <button type="button" onClick={() => setParagraph('')}>Reset</button>
                  </div>

                </div>) : (<div>{experience.map(pg => (<div key={pg.id} className='paragraph'>
                  <div className='experience-paragraphs'>{pg.paragraph}</div>
                </div>))}</div>)}
            </div>
          </div>
      </div>
    )
}

export default Experience