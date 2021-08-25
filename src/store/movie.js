import axios from 'axios';
import uniqBy from 'lodash/uniqBy';
import _uniqBy from 'lodash/uniqBy'

export default {
  // module! 할건지
  namespaced: true,
  // data! 
  state: ()=>({
    movies: [],
    message: '',
    loading: false
  }),
  // computed! 계산된 상태
  getters: {},
  // methods!

  // 변이-- 해당 장소에만 데이터를 수정할 수 있다. ㅇㅋ?
  mutations:{
    updateState(state, payload){
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key =>{
        // state.movies = payload.movies
        // state.message = payload.message
        state[key] = payload[key]

      })
    },
    resetMovies(state){
      state.movies = []
    }
  },
  // 비동기로 동작함
  actions:{
    async searchMovies({state, commit}, payload){
      const {title, type, number, year} = payload
      const OMDB_API_KEY = '7035c60c';
      
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y${year}&page=1`);
      const {Search, totalResults} = res.data
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID'),
      })
      console.log(Search)
      const total = parseInt(totalResults, 10)
      const pageLenght = Math.ceil(total / 10) //올림
      console.log(pageLenght)

      // 추가 요청!
      if(pageLenght > 1){
        for(let page = 2; page <= pageLenght; page++){
          if(page > (number/10)) break
          
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y${year}&page=${page}`);
          const {Search} = res.data
          commit('updateState', {
            movies: [...state.movies, ..._uniqBy(Search, 'imdbID')]
          })
        }
      }
    }
  }
}