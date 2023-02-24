import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import NoteEdit from "./NoteEdit"
import NoteSimpleAdd from "./NoteSimpleAdd"


export default function NoteAdd({ note, setNote, setNotes, handleEditNote, noteId, setNoteId }) {


  const handleAddNote = e => {
    e.preventDefault()
    const newNote = {
      "note": note
    }

    fetch("https://notes-api-if.web.app/notes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newNote)
    })
      .then(res => res.json())
      .then(setNotes)
      .catch(console.error)
  }

  return (
    <>
      <Form>
        {/* <Form.Group>
          <Form.Control 
          className="mb-1"
          value={note}
          onChange={e => setNote(e.target.value)}
          type="text"
          placeholder="Enter Your Note Here!" />
          <Button type="submit">{noteId ? 'Update Note' : 'Add Note'}</Button>
        </Form.Group> */}
        {noteId
          ?
          <NoteEdit
            handleEditNote={handleEditNote}
            note={note}
            setNote={setNote}
          />
          :
          <NoteSimpleAdd
            handleAddNote={handleAddNote}
            note={note}
            setNote={setNote} />
        }
      </Form>
    </>
  )
}
