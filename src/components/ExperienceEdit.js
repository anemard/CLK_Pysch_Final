import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExperienceEdit(props) {
  let { paragraph } = props
  let [editParagraph, setEditParagraph] = useState('')
  let [edit, setEdit] = useState(false)
  let [id, setId] = useState(0)


  const deleteExp = async (id) => {
    const { data } = await axios.delete(`http://localhost:8080/api/experiences/${id}`)
  }

  let updateParagraph = async (id, paragraph)=>{
    const res = await axios.put(`http://localhost:8080/api/experiences/${id}`, {
      paragraph
    })
  }

  let submitUpdate = (id, paragraph) => {
    updateParagraph(id, paragraph)
    setEdit(false)
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
              <button type='submit' onClick={() => {deleteExp(id)}}>Remove</button>
              <button onClick={() => {setEdit(true)}}>Edit</button>
            </div>
            
        )}
        

      </div>
    </div>
  )
}

export default ExperienceEdit