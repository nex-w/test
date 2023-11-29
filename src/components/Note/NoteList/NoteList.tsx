import moment from "moment";

import { NoteListProps } from "../types";
import styles from "./NoteList.module.css";

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      {notes.map((note) => (
        <div className={styles.noteContainer} key={note.timestamp}>
          <div className={styles.date}>
            <div>{moment().format("MM/DD/YY")}</div>
            <div>
              <strong>{note.type}</strong>
            </div>
          </div>
          <div className={styles.noteContent}>
            <div>
              <div className={styles.title}>{note.text}</div>
              <div>{note.noteText}</div>
            </div>
            <button
              className={styles.deleteBtn}
              onClick={() => onDelete(note.timestamp)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
