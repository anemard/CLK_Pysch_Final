import React, { useState, useEffect } from 'react'
import axios from 'axios';

function PublicationEdit(props) {
    let { publication } = props
    let [editPublisher, setEditPublisher] = useState('')
    let [editTitle, setEditTitle] = useState('')
    let [editUrl, setEditUrl] = useState('')
    let [editYear, setEditYear] = useState('')
    let [id, setId] = useState(0)
    let [edit, setEdit] = useState(false)

    let updateParagraph = async (id, publisher, title, url, year)=>{
      const res = await axios.put(`http://localhost:8080/api/publications/${id}`, {
        publisher, title, url, year
      })
    }

    let submitUpdate = (id, publisher, title, url, year) => {
      updateParagraph(id, publisher, title, url, year)
      setEdit(false)
    }

    useEffect(() => {
        setEditPublisher(publication.publisher)
        setEditTitle(publication.title)
        setEditUrl(publication.url)
        setEditYear(publication.year)
        setId(publication.id)
      }, [])

    return (
        <>
        {(edit) ? (<>
        
            <div>
                <div>publisher:</div>
                <input name="publisher" value={editPublisher} type="text" onChange={(evt) => setEditPublisher(evt.target.value)} />
                <div>title:</div>
                <input name="title" value={editTitle} type="text" onChange={(evt) => setEditTitle(evt.target.value)} />
                <div>url:</div>
                <input name="url" value={editUrl} type="text" onChange={(evt) => setEditUrl(evt.target.value)} />
                <div>year:</div>
                <input name="year" value={editYear} type="text" onChange={(evt) => setEditYear(evt.target.value)} />
                <button onClick={() => {submitUpdate(id, editPublisher, editTitle, editUrl, editYear)}}>Save</button>
            </div>
        
        </>) : (
            <div>
                <a href={editUrl} target="_blank"><div className='publication'>{editTitle}, <i>{editPublisher}</i>, {editYear}</div></a>
                <button onClick={() => {setEdit(true)}}>Edit</button>
            </div>)}

        </>
    )
}

export default PublicationEdit