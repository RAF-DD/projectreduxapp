import React, { useRef } from "react";


const Task= (props) => {
  
  const { item, updateTodo, removeTodo, completeTodo } = props;

  const inputRef = useRef(true);

  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      //here 13 is key code for enter key
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };
  return (
    <li
      key={item.id}
      className="card"
    > 
    <h3>#{item.id}</h3>
      <textarea className="text"
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <button className="btn1" onClick={() => changeFocus()}>
        🖊
        </button>
        {item.completed === false && (
          <button className="btn1"
            style={{ color: "green" }}
            onClick={() => completeTodo(item.id)}
          >
              ✔ 
          </button>
        )}
        <button className="btn1"
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)} >
    
    🞭
        </button>

      </div>
      {item.completed && <span className="completed">done</span>}
       
    </li>
  );
};

export default Task;
