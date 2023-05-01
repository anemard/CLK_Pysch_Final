import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AboutEdit(props) {
  let { paragraph } = props
  let [editParagraph, setEditParagraph] = useState('')
  let [edit, setEdit] = useState(false)
  let [id, setId] = useState(0)

  let updateParagraph = async (id, paragraph)=>{
    const res = await axios.put(`http://localhost:8080/api/abouts/${id}`, {
      paragraph
    })
  }

  let submitUpdate = (id, paragraph) => {
    updateParagraph(id, paragraph)
    setEdit(false)
  }

  const deleteAbout = async (id) => {
    const { data } = await axios.delete(`http://localhost:8080/api/abouts/${id}`)
  }

  useEffect(() => {
    setEditParagraph(paragraph.paragraph)
    setId(paragraph.id)
  }, [])

  return (
    <div className='edit'>
      <div className="paragraph">
        {(edit) ? (
            <div>
              <textarea 
                name="about-paragraph" 
                value={editParagraph} 
                type="text" 
                className="input-paragraph" 
                onChange={(evt) => setEditParagraph(evt.target.value)} />
              <button onClick={() => {submitUpdate(id, editParagraph)}}>Save</button>
            </div>
          ) : (
            <div>
              <div>{editParagraph}</div>
              <button type='submit' onClick={() => {deleteAbout(paragraph.id)}}>Remove</button>
              <button onClick={() => {setEdit(true)}}>Edit</button>
            </div>
            
        )}
        

      </div>
    </div>
  )
}

export default AboutEdit