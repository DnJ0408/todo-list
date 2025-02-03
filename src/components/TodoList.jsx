import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoList = ({ todos, handleDelete, handleToggleStatus }) => {
    const ListWrapper = styled.div`
        display: flex;
        gap: 10px;
    `
    const workingTodos = todos.filter((todo) => !todo.isDone);
    const doneTodos = todos.filter((todo) => todo.isDone);

    return (
        <>
            <h2>Working</h2>
            <ListWrapper>
                <ul>
                    {workingTodos.map((todo) =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleDelete={handleDelete}
                            handleToggleStatus={handleToggleStatus}
                        />
                    )}
                </ul>
            </ListWrapper>
            <h2>Done</h2>
            <ListWrapper>
                <ul>
                    {doneTodos.map((todo) =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleDelete={handleDelete}
                            handleToggleStatus={handleToggleStatus}
                        />
                    )}
                </ul>
            </ListWrapper>
        </>
    );
}

export default TodoList;