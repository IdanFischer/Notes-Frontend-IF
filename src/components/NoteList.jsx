import { useState, useEffect } from "react";
import NoteAdd from "./NoteAdd";

export default function NoteList({ notes, setNotes }) {
  const [note, setNote] = useState('')
  const [noteId, setNoteId] = useState("")



  useEffect(() => {
    // fetch("https://notes-api-if.web.app/notes")
    fetch("https://notes-api-if.web.app/notes")
    // fetch("http://localhost:5001/notes")
      .then(res => res.json())
      .then(setNotes)
      .catch(console.error)
  }, [setNotes])

  // console.log(notes)


  // OK SO QUESTION IS DO I LET IT UPDATE MID TYPING OR no wait i should make it update mid typing
    const handleEditNote = (noteIds, noteText, e) => {
      fetch(`https://notes-api-if.web.app/notes/${noteIds}`, {
        method: "PATCH",
        // mode: 'cors',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ note: noteText })
      })
      .then(res => res.json())
      .then(setNotes)
      .catch(console.error)
      
      // if we have note id then we know its an edit, if there is no note id, then its an add. will live in noteadd
      // this sets the current noteId variable as the notesId of note that was clicked on. 
      setNoteId(noteIds)
      // this sets the current note variable as the text of the note that was clicked on
      setNote(noteText)
      // .then(console.log(note))
      
      // for example, if the note is "start on your final project" and the noteId is "ryNqumU55U29ampqsCWK" then it will set the two variables and such and then send a patch request 
      // But instead, its sending the patch request instantly and not waiting 
      
      console.log("THE ID", noteIds)
      console.log("POST FETCH", noteText)
      // console.log("NOTE ITSELF", note)
    }
    // console.log(noteId)
    // console.log(note)

  return (
    <div>
      <h1 className="big-note">Your Notes</h1>
      <NoteAdd 
      setNotes={setNotes}
      note={note}
      setNote={setNote}
      noteId={noteId}
      handleEditNote={handleEditNote}
      />
      {
        !notes
          ? <p>Loading Your Notes...</p>
          : notes.map((element, index) => (
            <p
            className="allnotes"
            // this is setting the notes id and the current note as the note that was clicked (that was already there)
            onClick={() => handleEditNote(element.notesId, element.note)}
            // contentEditable
            // onBlur={e => {console.log(e.target.value)}}
            key={element.notesId}>
              {index + 1}. {element.note}
            </p>
            // // want to set it so that when i click on one a new form will open
            // // >{index + 1}. {element.note}</input>
            // <text contentEditable value={element.note} onBlur={e => {console.log(e)}}>
            // {element.note?element.note: ""}
            // </text>
          ))
      }
    </div>
  )
}
