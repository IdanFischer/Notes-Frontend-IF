import { useState } from 'react';
import NoteList from './components/NoteList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
// import bgImage from './images/bg-image.webp'

function App() {
  const [notes, setNotes] = useState("")

  return (
    <div className="App">
      <header className="App-header">
        <NoteList 
        notes={notes}
        setNotes={setNotes}
        />
      </header>
    </div>
  );
}

export default App;
