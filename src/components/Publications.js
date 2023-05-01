import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Publications() {
  let [publications, setPublications] = useState([])

  const fetchPublications = async () => {
    const {data} = await axios.get('http://localhost:8080/api/publications')
    setPublications(data)
  }

  useEffect(() => {
    fetchPublications()
  }, [])

    return (
      <div className='compontent-page-short' id='publications'>
        <div className='component-body-left'>
          <div className='publication-title'>Selected Publications</div>
        </div>
        <div className='component-body-right'>
          <div className='publications-list'>
            <div>
              {publications.map(pg => (<div key={pg.id}>
                <a href={pg.url} target="_blank"><div className='publication'>{pg.title}, <i>{pg.publisher}</i>, {pg.year}</div></a>
              </div>))}
            </div>
          </div>
        </div>
      </div>
    )
}

export default Publications