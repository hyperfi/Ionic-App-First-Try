import { createStore } from 'vuex';

const store = createStore(
    {
        state () {
            return { memories : [
                { id: 1, title: 'Memory 1', description: 'This is the first memory.' , image: 'https://picsum.photos/id/1/200' },
                { id: 2, title: 'Memory 2', description: 'This is the second memory.', image: 'https://picsum.photos/id/2/200' },
                { id: 3, title: 'Memory 3', description: 'This is the third memory.', image: 'https://picsum.photos/id/3/200' },
                { id: 4, title: 'Memory 4', description: 'This is the fourth memory.', image: 'https://picsum.photos/id/4/200' },
                { id: 5, title: 'Memory 5', description: 'This is the fifth memory.', image: 'https://picsum.photos/id/5/200' },
                { id: 6, title: 'Memory 6', description: 'This is the sixth memory.', image: 'https://picsum.photos/id/6/200' },
                { id: 7, title: 'Memory 7', description: 'This is the seventh memory.', image: 'https://picsum.photos/id/7/200' },
                { id: 8, title: 'Memory 8', description: 'This is the eighth memory.', image: 'https://picsum.photos/id/8/200' },
                { id: 9, title: 'Memory 9', description: 'This is the ninth memory.', image: 'https://picsum.photos/id/9/200' },
                { id: 10, title: 'Memory 10', description: 'This is the tenth memory.', image: 'https://picsum.photos/id/10/200' },
                ]
            };
        },
        
        getters: {
            getMemories: (state) => {
                return state.memories;
            },
            getMemoryById: (state) => (id) => {
                return state.memories.find(memory => memory.id === Number(id));
            },
        },
 
    }
)

export default store;