import React, { useEffect, useState } from "react";

import { Note } from "./components/Note/types";
import NoteForm from "./components/Note/NoteForm/NoteForm";
import NoteList from "./components/Note/NoteList/NoteList";

interface AppProps {
  initialNotes?: Note[];
}

const App: React.FC<AppProps> = ({ initialNotes = [] }) => {
  const [notes, setNotes] = useState<Note[]>(initialNotes);

  useEffect(() => {
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      const parsedNotes: Note[] = JSON.parse(savedNotes);
      setNotes(parsedNotes);
    }
  }, []);

  const handleNoteSubmit = (note: Note) => {
    setNotes([...notes, note]);
    localStorage.setItem("notes", JSON.stringify([...notes, note]));
  };

  const handleNoteDelete = (timestamp: number) => {
    const updatedNotes = notes.filter((note) => note.timestamp !== timestamp);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <div>
      <h1>Activity Feed</h1>
      <NoteForm onSubmit={handleNoteSubmit} />
      <NoteList notes={notes} onDelete={handleNoteDelete} />
    </div>
  );
};

export default App;
