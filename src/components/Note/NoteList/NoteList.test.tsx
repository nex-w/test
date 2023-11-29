import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoteList from "./NoteList";

describe("NoteList", () => {
  it("displays a list of notes", () => {
    const notes = [
      {
        timestamp: 1,
        user: "You",
        type: "meeting",
        text: "You had a meeting with Milton Romaguera",
        noteText: "Note text 1",
      },
      {
        timestamp: 2,
        user: "You",
        type: "call",
        text: "You had a call with Milton Romaguera",
        noteText: "Note text 2",
      },
    ];

    const { getByText } = render(
      <NoteList notes={notes} onDelete={() => {}} />
    );

    expect(
      getByText("You had a meeting with Milton Romaguera")
    ).toBeInTheDocument();
    expect(
      getByText("You had a call with Milton Romaguera")
    ).toBeInTheDocument();
  });
});
