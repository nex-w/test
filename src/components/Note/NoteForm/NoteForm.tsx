import { useState } from "react";
import { Note, NoteFormProps, NoteButtonProps } from "../types";
import styles from "./NoteForm.module.css";
import clsx from "clsx";

const NoteButton: React.FC<NoteButtonProps> = ({
  buttonText,
  isSelected,
  onClick,
}) => (
  <button
    onClick={onClick}
    className={clsx(styles.noteButton, isSelected ? styles.selectedType : "")}
  >
    {buttonText}
  </button>
);

const NoteForm: React.FC<NoteFormProps> = ({ onSubmit }) => {
  const [noteText, setNoteText] = useState<string>("");
  const [selectedButton, setSelectedButton] = useState<string>("note");

  const handleButtonClick = (buttonText: string) => {
    setSelectedButton(buttonText);
  };

  const selectedButtonText = (type: string, user: string, contact: string) => {
    switch (type) {
      case "meeting":
        return `${user} had a meeting with ${contact}`;
      case "call":
        return `${user} had a call with ${contact}`;
      case "coffee":
        return `${user} had a coffee with ${contact}`;
      case "beer":
        return `${user} had a beer with ${contact}`;
      case "note":
        return `${user} added a note to ${contact}`;
      default:
        return "";
    }
  };

  const handleSubmit = () => {
    const timestamp = Date.now();
    const user = "You";
    const contact = "Milton Romaguera";
    const type = selectedButton;
    const text = selectedButtonText(type, user, contact);

    const newNote: Note = {
      timestamp,
      user,
      type,
      text,
      noteText,
    };

    onSubmit(newNote);

    setNoteText("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        className={styles.noteInput}
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        placeholder="Add a note about Milton Romaguera"
      />
      <div className={styles.buttons}>
        <div>
          <NoteButton
            buttonText="Note"
            isSelected={selectedButton === "note"}
            onClick={() => handleButtonClick("note")}
          />
          <NoteButton
            buttonText="Call"
            isSelected={selectedButton === "call"}
            onClick={() => handleButtonClick("call")}
          />
          <NoteButton
            buttonText="Coffee"
            isSelected={selectedButton === "coffee"}
            onClick={() => handleButtonClick("coffee")}
          />
          <NoteButton
            buttonText="Beer"
            isSelected={selectedButton === "beer"}
            onClick={() => handleButtonClick("beer")}
          />
          <NoteButton
            buttonText="Meeting"
            isSelected={selectedButton === "meeting"}
            onClick={() => handleButtonClick("meeting")}
          />
        </div>
        <button className={styles.submitButton} onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NoteForm;
