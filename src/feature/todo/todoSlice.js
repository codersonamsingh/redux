






export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: 1,text: "Hello world"
            }
        },
        removeTodo: () => {},
    }

})