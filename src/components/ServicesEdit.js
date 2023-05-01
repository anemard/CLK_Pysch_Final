import React, { useState, useEffect } from 'react'

function ServiceEdit(props) {
    let { paragraph } = props
    let [editParagraph, setEditParagraph] = useState('')
    let [id, setId] = useState(0)
    let [edit, setEdit] = useState(false)

    useEffect(() => {
        setEditParagraph(paragraph.paragraph)
        setId(paragraph.id)
      }, [])

      console.log('id', id)

    return (
        <>
        {(edit) ? (<>
        
            <div>
              <textarea 
                name="services-paragraph" 
                value={editParagraph} 
                type="text" 
                className="input-paragraph" 
                onChange={(evt) => setEditParagraph(evt.target.value)} />
              <button>Save</button>
            </div>
        
        </>) : (
            <div>
                <div>{editParagraph}</div>
                <button>Remove</button>
                <button onClick={() => {setEdit(true)}}>Edit</button>
            </div>)}

        </>
    )
}

export default ServiceEdit