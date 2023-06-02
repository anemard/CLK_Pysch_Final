import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PublicationsEdit } from './'

function Publications(props) {
  let { admin } = props
  let [publications, setPublications] = useState([])
  let [publisher, setPublisher] = useState('')
  let [title, setTitle] = useState('')
  let [url, setUrl] = useState('')
  let [year, setYear] = useState('')
  console.log(publications)

  const fetchPublications = async () => {
    const {data} = await axios.get('http://localhost:8080/api/publications')
    setPublications(data)
  }

  const createPublication = async ({ publisher, title, url, year }) => {
    const { data } = await axios.post('http://localhost:8080/api/publications', {
      publisher, title, url, year
    })
    fetchPublications()
  }

  const submitPublication = async(evt) => {
    evt.preventDefault();
    createPublication({publisher, title, url, year})
    resetVals()
  }

  const resetVals = () => {
    setUrl('')
    setYear('')
    setPublisher('')
    setTitle('')
  }

  const deletePublication = async (id) => {
    const { data } = await axios.delete(`http://localhost:8080/api/publications/${id}`)
    fetchPublications()
  }

  useEffect(() => {
    fetchPublications()
  }, [])

    return (
      <div className='component-page' id='publications'>
        <div className='component-body-whole'>
          <div className='component-title'>Selected Publications</div>
          <div>
            {(admin) ? 
              (<>
                <div>
                  {publications.map(pg => (<div key={pg.id}>
                    <PublicationsEdit publication={pg}/>
                    <button onClick={() => deletePublication(pg.id)}>delete</button>
                  </div>))}
                </div>

                <form className="addform" onSubmit={submitPublication}>
                  <input name="publisher" value={publisher} placeholder="publisher" type="text" onChange={(evt) => setPublisher(evt.target.value)} />
                  <input name="title" value={title} placeholder="title" type="text" onChange={(evt) => setTitle(evt.target.value)} />
                  <input name="url" value={url} placeholder="url" type="text" onChange={(evt) => setUrl(evt.target.value)} />
                  <input name="year" value={year} placeholder="year" type="text" onChange={(evt) => setYear(evt.target.value)} />
                  <button type="submit" className="addButton">Submit</button>
                  <button type="button" className="addButton" onClick={resetVals}>Reset</button>
                </form>
              </>) : 
              (
                <div className='pub-grid'>
                {publications.map(pg => (<div key={pg.id}>
                  <a href={pg.url} target="_blank"><div className='pub-grid-item'>{pg.title}, <i>{pg.publisher}</i>, {pg.year}</div></a>
                </div>))}
                <a href='https://scholar.google.com/citations?user=VEzbA5MAAAAJ&hl=en' target="_blank"><div className='pub-grid-item'>Full list of scholarship here.</div></a>
              </div>
              )}
          </div>
        </div>
      </div>
    )
}

export default Publications