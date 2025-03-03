/* global vi */
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "../src/Todos/Todo";

describe("Todo Component", () => {
  const mockTodo = { id: 1, text: "Learn Vite", done: false };
  const mockDelete = vi.fn();
  const mockComplete = vi.fn();

  test("renders todo text correctly", () => {
    render(
      <Todo
        todo={mockTodo}
        deleteTodo={mockDelete}
        completeTodo={mockComplete}
      />
    );
    expect(screen.getByText("Learn Vite")).toBeInTheDocument();
  });

  test('shows "This todo is not done" when todo is incomplete', () => {
    render(
      <Todo
        todo={mockTodo}
        deleteTodo={mockDelete}
        completeTodo={mockComplete}
      />
    );
    expect(screen.getByText("This todo is not done")).toBeInTheDocument();
  });

  test("calls delete function when delete button is clicked", () => {
    render(
      <Todo
        todo={mockTodo}
        deleteTodo={mockDelete}
        completeTodo={mockComplete}
      />
    );
    fireEvent.click(screen.getByText("Delete"));
    expect(mockDelete).toHaveBeenCalledWith(mockTodo);
  });

  test('calls complete function when "Set as done" button is clicked', () => {
    render(
      <Todo
        todo={mockTodo}
        deleteTodo={mockDelete}
        completeTodo={mockComplete}
      />
    );
    fireEvent.click(screen.getByText("Set as done"));
    expect(mockComplete).toHaveBeenCalledWith(mockTodo);
  });
});
