export interface Note {
  timestamp: number;
  user: string;
  type: string;
  text: string;
  noteText: string;
}

export interface NoteFormProps {
  onSubmit: (note: Note) => void;
}

export interface NoteListProps {
  notes: Note[];
  onDelete: (timestamp: number) => void;
}

export interface NoteButtonProps {
  buttonText: string;
  isSelected: boolean;
  onClick: () => void;
}
