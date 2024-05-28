import { useEffect } from "react";
import { deleteTodo, getAllTodos } from "../Redux/action/index";
import { ALL_TODOS, ACTIVE_TODO, DONE_TODO } from "../Redux/action/type";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo";
import Tabs from "./Tabs";

const Todos = () => {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);
  const currentTab = useSelector((state) => state.currentTab);

  useEffect(() => {
    dispatch(getAllTodos());
  }, []);

  const getTodos = () => {
    if(currentTab === ALL_TODOS){
      return todos
    }
    else if (currentTab === ACTIVE_TODO){
      return todos.filter(todo=>!todo.done)
    }
    else if(currentTab === DONE_TODO){
      return todos.filter(todo=> todo.done)
    }
  }

  const removeDoneTodos =() => {
    todos.forEach(({done,_id})=>{
      if(done){
        dispatch(deleteTodo(_id))
      }
    })
  }

  return (
    <article>
      <div>
        <Tabs currentTab={currentTab} />

    {todos.some(todo=>todo.done)?(
      <button onClick={removeDoneTodos} className="button clear">
        Remove Done Todos
      </button>
    ) :null
  }

      </div>
      <ul>
        {getTodos().map((todo) => (
          <Todo key={todo._id} todo={todo} />
        ))}
      </ul>
    </article>
  );
};

export default Todos;
