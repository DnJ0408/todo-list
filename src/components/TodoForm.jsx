import { useState } from "react";

const TodoForm = function ({ todos, setTodos }) {
    const [todoTitle, setTodoTitle] = useState("");
    const [todoText, setTodoText] = useState("");

    const resetForm = () => {
        setTodoTitle("");
        setTodoText("");
    }

    const handleSubmit = (e) => {
        // form이 제출될 때 새로고침을 막아준다.
        e.preventDefault();
        // 입력한 문자열의 앞뒤 공백을 제거한 후, 입력된 값이 비어있는지 확인한다.
        if (!todoText.trim() || !todoTitle.trim()) {
            alert("제목과 내용을 모두 입력해주세요!");
            return;
        }
        setTodos([...todos, { id: crypto.randomUUID(), title: todoTitle, text: todoText, isDone: false },])
        resetForm();
    }

    // 인풋 태그의 변경을 onChange로 감지하고 상태에 입력 값(e.target.value)을 저장한다.
    const handleChangeTodoTitle = (e) => { setTodoTitle(e.target.value); }
    const handleChangeTodoText = (e) => { setTodoText(e.target.value); }

    return (
        // jsx를 리턴하는 태그는 하나여야 하므로 div로 감싸준다.
        <div>
            {/* form 태그를 선언한다.*/}
            <form onSubmit={handleSubmit}>
                {/* todo내용을 받아올 input 태그를 선언한다. */}
                <label style={{ marginRight: "10px" }}>
                    제목
                    <input type="text" value={todoTitle} onChange={handleChangeTodoTitle} />
                </label>
                <label>
                    내용
                    <input type="text" value={todoText} onChange={handleChangeTodoText} />
                </label>
                {/* type이 submit인 버튼을 선언한다. */}
                <button type="submit">추가하기</button>
            </form>

        </div >
    );
};

export default TodoForm;