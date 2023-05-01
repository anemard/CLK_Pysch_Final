import React, { useEffect, useState } from 'react';
import axios from 'axios';
import headshot from '../img/ck-bw.jpg';
import { AboutEdit } from './'

function About(props) {
  let { admin } = props
  let [about, setAbout] = useState([])
  let [paragraph, setParagraph] = useState('')

  const fetchAbout = async () => {
    const { data } = await axios.get('http://localhost:8080/api/abouts')
    setAbout(data)
  }

  const createAbout = async ({ paragraph }) => {
    const { data } = await axios.post('http://localhost:8080/api/abouts', {
      paragraph
    })
    fetchAbout()
  }

  const submitAddAbout = async(evt) => {
    evt.preventDefault();
    createAbout({paragraph})
    setParagraph('')
  }

  useEffect(() => {
    fetchAbout()
  }, [])

    return (
      <div className='component-page' id='about'>
        <div className='component-body-left'>
            <img src={headshot} className='bio-image' />
        </div>
        <div className='component-body-right'>
          <div className='about'>
            <div className='component-title'>Cary L Klemmer, PhD</div>
            <div className='component-sub-title'>Licensed Clinical Social Worker</div>
            <div>
              {(admin) ? (<div>
                {about.map(pg => (<div key={pg.id} className="paragraph">
                    <AboutEdit paragraph={pg} />
                  </div>))}
                  <form className="addform" onSubmit={submitAddAbout}>
                    <textarea name="about" value={paragraph} placeholder="New about paragraph" type="text" className="input-paragraph" onChange={(evt) => setParagraph(evt.target.value)} />
                    <button type="submit" className="addButton">Submit</button>
                    <button type="button" className="addButton" onClick={() => setParagraph('')}>Reset</button>
                  </form>
              </div>) : (
                <div>
                  {about.map(pg => (<div key={pg.id} className="paragraph">
                    {pg.paragraph}
                  </div>))}
                </div>
              )}
        </div>
            </div>
        </div>
      </div>
    )
}

export default About