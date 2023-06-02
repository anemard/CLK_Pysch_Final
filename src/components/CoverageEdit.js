import React, { useState, useEffect } from 'react'
import axios from 'axios';

function CoverageEdit(props) {
    let { paragraph } = props
    let [editParagraph, setEditParagraph] = useState('')
    let [id, setId] = useState(0)
    let [edit, setEdit] = useState(false)

    let updateParagraph = async (id, paragraph)=>{
      const res = await axios.put(`http://localhost:8080/api/insurances/${id}`, {
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
        <>
        {(edit) ? (<>
        
            <div>
              <textarea 
                name="coverage-paragraph" 
                value={editParagraph} 
                type="text" 
                className="input-paragraph" 
                onChange={(evt) => setEditParagraph(evt.target.value)} />
              <button onClick={() => {submitUpdate(id, editParagraph)}}>Save</button>
            </div>
        
        </>) : (
            <div>
                <div>{editParagraph}</div>
                <button onClick={() => {setEdit(true)}}>Edit</button>
            </div>)}

        </>
    )
}

export default CoverageEdit