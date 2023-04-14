import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import image from '../../public/img/ck-bw.jpg';

// import bioImage from '../img/Cary-Klemmer-BW.jpeg'
// import bioImage2 from '../img/caryKlem-color.jpg'
// import bioImage3 from '../img/ck-bw.jpg'

function About() {
  let [about, setAbout] = useState([])

  const fetchAbout = async () => {
    const {data} = await axios.get('http://localhost:8080/api/abouts')
    setAbout(data)
  }

  useEffect(() => {
    fetchAbout()
  }, [])



    return (
      <div className='component-page'>
        <div className='component-body-left'>
            <img src="" className='bio-image' />
        </div>
        <div className='component-body-right'>
          <div className='about'>
            <div className='component-title'>Cary L Klemmer, PhD</div>
            <div className='component-sub-title'>Licensed Clinical Social Worker</div>
            <div className='all-about'>
            {about.map(pg => (<div key={pg.id} className=''>
                <p>{pg.paragraph}</p>
            </div>))}
        </div>
            </div>
        </div>
      </div>
    )
}

export default About