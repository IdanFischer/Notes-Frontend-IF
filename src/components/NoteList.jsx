import { useState, useEffect } from "react";
import NoteAdd from "./NoteAdd";

export default function NoteList({ notes, setNotes }) {
  const [note, setNote] = useState('')
  const [noteId, setNoteId] = useState()

  useEffect(() => {
    fetch("https://notes-api-if.web.app/notes")
      .then(res => res.json())
      .then(setNotes)
      .catch(console.error)
  }, [setNotes])


  // OK SO QUESTION IS DO I LET IT UPDATE MID TYPING OR no wait i should make it update mid typing
  const handleEditNote = (noteIds, noteText) => {
    fetch(`https://notes-api-if.web.app/notes/${noteIds}`, {
      method: "PATCH",
      // mode: 'cors',
      headers: {
        "Content-Type": "application/json",

      }
    })
    .then(res => res.json())
    .then(setNotes)
    .catch(console.error)

    // if we have note id then we know its an edit, if there is no note id, then its an add. will live in noteadd
    // this sets the current noteId variable as the notesId of note that was clicked on. 
    setNoteId(noteIds)
    // this sets the current note variable as the text of the note that was clicked on
    setNote(noteText)

    // for example, if the note is "start on your final project" and the noteId is "ryNqumU55U29ampqsCWK" then it will set the two variables and such and then send a patch request 

    console.log(noteIds)
    console.log(noteText)
  }
  // console.log(noteId)
  // console.log(note)

  // useEffect((handleEditNote) => {

  // }, [setNote])

  return (
    <div>
      <h1>Your Notes</h1>
      <NoteAdd 
      setNotes={setNotes}
      note={note}
      setNote={setNote}
      noteId={noteId}
      />
      {
        !notes
          ? <p>Loading Your Notes...</p>
          : notes.map((element, index) => (
            <p 
            key={element.notesId}
            onClick={() => handleEditNote(element.notesId, element.note)}
            >{index + 1}. {element.note}</p>
          ))
      }
    </div>
  )
}
