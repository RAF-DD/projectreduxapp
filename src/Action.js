export const ADD_TODO ="ADD_TODO";


export function addTodo(todo){
    return{
        type: "ADD_TODO",
        payload:{data:"learn Redux",id:1, completed:false}
    }
}