import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function NoteEdit({ note, setNote, handleEditNote }) {
  return (
    <>
      <h2>Edit Your Note Here!</h2>
      <Form.Group>
        <Form.Control
          className="mb-1"
          value={note}
          onChange={e => setNote(e.target.value)}
          type="text"
          placeholder="Edit Your Note Here!" />
        <Button onClick={handleEditNote}
        className="mb-1"
        >Save</Button>
      </Form.Group>
    </>
  )
}