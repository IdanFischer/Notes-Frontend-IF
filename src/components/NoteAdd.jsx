import { useState } from "react"
import { Button, Form } from "react-bootstrap"


export default function NoteAdd({ note, setNote, setNotes }) {
  

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
      <Form onSubmit={handleAddNote}>
        <Form.Group>
          <Form.Control 
          className="mb-1"
          value={note}
          onChange={e => setNote(e.target.value)}
          type="text"
          placeholder="Enter Your Note Here!" />
        <Button onClick={handleAddNote}>add note</Button>
        </Form.Group>
      </Form>
    </>
  )
}
