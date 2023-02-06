import { API_KEY } from '@/apiKey.js';
import {createStore} from 'vuex';

const store = createStore({

    state:{
        booksData: [],
        categories: [],
        isBooksLoaded : false,
        chosenCategory: "hardcover-fiction",
    },

    mutations:{
        setState(state, payload) {   //*  Basic Mutation Factory               
            for (const [targetValue, newValue] of Object.entries(payload)) {     
                state[targetValue] = newValue;                                  
            }                                                          
        },

        takeChosenCategory(state, payload){
            state.chosenCategory = payload; 
            this.dispatch('getBooks');
            state.isBooksLoaded = true;
            setTimeout(() => {
             state.isBooksLoaded = false;
            }, 850);
        },
    },

    actions:{  
        async getBooks({ commit }) {
            const response = await fetch(
                 `https://api.nytimes.com/svc/books/v3/lists/current/${this.state.chosenCategory}.json?api-key=${API_KEY}`
                )
            const data = await response.json();
            commit('setState', { booksData: data.results });
        },

        async getCategories({ commit }) {
            const response = await fetch(
                `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${API_KEY}`
                )
            const data = await response.json();
            commit('setState', { categories: data.results });
        },
    },

    getters:{}

}); export default store;