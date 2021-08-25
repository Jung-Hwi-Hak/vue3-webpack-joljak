<template>
  <div class="container">
    <input v-model="title" type="text" placeholder="Search for Movies" class="form-control" @keyup.enter="apply"/>
    <div class="selects">
      <!-- select -->
      <select v-for="filter in filters" :key="filter.name" 
      v-model="$data[filter.name]" 
      class="form-select">
        <option v-if="filter.name=== 'year'" value="">
          All Years
        </option>
        <option v-for="item in filter.items" :key="item">
          {{item}}</option>
      </select>
      <!-- select end -->
    </div>
    <button class="btn btn-primary" @click="apply">
      Apply
    </button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      title: '',
      type: 'movie',
      number: 10,
      year: '',
      filters: [
        {
          name:'type',
          items: ['movie', 'series', 'episode'],
        },
        {
          name:'number',
          items: [10, 20, 30],
        },
        {
          name:'year',
          items: (() => {
            const years = []
            const thisYear = new Date().getFullYear()
            for(let i = thisYear; i >= 1985; i--){
              years.push(i);
            }
            return years
          })(),
        },
      ]
    }
  },

  methods:{
    async apply(){
      // Search Movie Method
      this.$store.dispatch('movie/searchMovies', {
        title: this.title,
        type: this.type,
        number:this.number,
        year:this.year,
      })

    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    display: flex;
    >*{
      font-size: 15px;
      margin-right: 10px;
      &:last-child{
        margin-right: 0px;
      }
    }
    .selects{
      display: flex;
      select{
        width: 120px;
        margin-right: 10px;
        &:last-child{
          margin-right: 0px;
        }
      }
    }

    .btn{
      width:120px;
      height: 50px;
      font-weight: 700;
      flex-shrink: 0; //flex-shink를 이용해 감소하지 않고 동일하기 만들어줌
    }
  }
</style>