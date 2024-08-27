import {createSlice,nanoid} from '@reduxjs/toolkit';

const initialState={
    todos:[{
        id:1,
        text:"hello world"
    }]
}

// function sayHello(){
//     console.log("hllo world")
// }

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        //state action we always get
        //state=>current state
        //action:objct we send hre
        addTodo:(state,action)=>{
            const todo={        
                id:nanoid(),
                text:action.payload
                }
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{todo.id!==action.payload})
        },
    }

})


export const {addTodo,removeTodo}=todoSlice.actions
export default todoSlice.reducer
