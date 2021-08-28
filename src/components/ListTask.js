import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  completeTodos,
  removeTodos,
  updateTodos,
} from "../redux/reducer";
import Task from "./Task";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const ListTask = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="ListTask">
      <div className="buttons">
    
        <button
          onClick={() => setSort("active")}
        >
          Active
        </button>

        <button
          onClick={() => setSort("completed")}
        >
          Completed
        </button>

        <button
          onClick={() => setSort("all")}
        >
          All
        </button>

      </div>

      <ul>

          {props.todos.length > 0 && sort === "active"
            ? props.todos.map((item) => {
                return (
                  item.completed === false && (
           
                    <Task
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                        
                  )
                );
              })
            : null}
          {/* for completed items */}
          {props.todos.length > 0 && sort === "completed"
            ? props.todos.map((item) => {
                return (
                  item.completed === true && (
                    <Task
                      key={item.id}
                      item={item}
                      removeTodo={props.removeTodo}
                      updateTodo={props.updateTodo}
                      completeTodo={props.completeTodo}
                    />
                  )
                );
              })
            : null}
          {/* for all items */}
          {props.todos.length > 0 && sort === "all"
            ? props.todos.map((item) => {
                return (
                  <Task
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completeTodo={props.completeTodo}
                  />
                );
              })
            : null}
   
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ListTask);