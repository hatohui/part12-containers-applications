import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => (
  <>
    {todos
      .map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          completeTodo={completeTodo}
        />
      ))
      .reduce((acc, cur) => [...acc, <hr key={`hr-${cur.key}`} />, cur], [])}
  </>
);

export default TodoList;
