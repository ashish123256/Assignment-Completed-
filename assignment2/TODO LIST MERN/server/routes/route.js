import  express  from "express";
import { addTodo , getAllTodos ,markTodoDone,updateTodo,deleteTodo} from "../controller/addTodo.js";

const route = express.Router();

route.post("/todos", addTodo);
route.get("/todos",getAllTodos)
route.get("/todos/:id",markTodoDone);
route.put("/todos/:id",updateTodo);
route.delete("/todos/:id",deleteTodo);

export default route;