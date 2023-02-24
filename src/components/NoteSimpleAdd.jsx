import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function NoteSimpleAdd({ note, setNote, handleAddNote}) {
  return (
    <>
      <Form.Group>
        <Form.Control
          className="mb-1"
          value={note}
          onChange={e => setNote(e.target.value)}
          type="text"
          placeholder="Enter Your Note Here!" />
        <Button className="mb-2" type="submit" onClick={handleAddNote}>add note</Button>
      </Form.Group>
    </>
  )
}