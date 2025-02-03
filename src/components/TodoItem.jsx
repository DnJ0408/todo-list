import styled from "styled-components";

const TodoItem = ({ todo, handleDelete, handleToggleStatus }) => {

    const ListContainer = styled.div`
        border: 1px solid black;
        border-radius: 5px;
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right : 10px;
    `
    const Button = styled.div`
        display: flex;
        gap: 5px;
    `

    return (
        <div>
            <ListContainer>
                <div>
                    {todo.title}
                </div>
                <div>
                    {todo.text}
                </div>
                <Button>
                    <button onClick={() => handleDelete(todo.id)}>삭제</button>
                    {todo.isDone ? (
                        <button onClick={() => { handleToggleStatus(todo.id, false) }}>
                            취소
                        </button>
                    ) : (
                        <button onClick={() => { handleToggleStatus(todo.id, true) }}>
                            완료
                        </button>
                    )}
                </Button>
            </ListContainer>
        </div>
    )
}

export default TodoItem;