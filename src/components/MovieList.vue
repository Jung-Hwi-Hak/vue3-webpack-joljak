<template>
  <div class="container">
    <div class="inner">
      <!-- props => :movie 해당 MovieItem 컴포넌트에 props movie를 넘겨준다.-->
      <MovieItem v-for="movie in movies" :key="movie.imdbID" :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
export default {
  components:{
    MovieItem
  },
  
  computed:{
    movies(){
      return this.$store.state.movie.movies
    }
  }
}
</script>