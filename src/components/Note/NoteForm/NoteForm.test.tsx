import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import NoteForm from "./NoteForm";

describe("NoteForm", () => {
  it('submits a note with the correct text when "Submit" button is clicked', () => {
    const onSubmitMock = jest.fn();

    const { getByPlaceholderText, getByText } = render(
      <NoteForm onSubmit={onSubmitMock} />
    );

    const input = getByPlaceholderText("Add a note about Milton Romaguera");
    fireEvent.change(input, { target: { value: "Test note text" } });

    const meetingButton = getByText("Meeting");
    fireEvent.click(meetingButton);

    const submitButton = getByText("Submit");
    fireEvent.click(submitButton);

    expect(onSubmitMock).toHaveBeenCalledWith({
      timestamp: expect.any(Number),
      user: "You",
      type: "meeting",
      text: "You had a meeting with Milton Romaguera",
      noteText: "Test note text",
    });
  });
});
