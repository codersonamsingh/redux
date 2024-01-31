






export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: "Hello world"
            }
        },
        removeTodo: () => {},
    }

})