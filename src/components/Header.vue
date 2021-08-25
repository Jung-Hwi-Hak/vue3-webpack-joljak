<template>
  <header>
    <Logo />
    <div class="nav nav-pills">
      <div v-for="nav in navigations" :key="nav.name" class="nav-item">
        <!-- //RouterLink 는 <a>태그이다. -->
        <RouterLink :to="nav.href" class="nav-link" active-class="active">
          {{nav.name}}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {

  components:{
    Logo
  },
  data(){
    return{
      navigations:[
        {
          name: 'Search',
          href: '/',
        },
        {
          name: 'Movie',
          href: '/movie',
        },
        {
          name: 'About',
          href: '/about',
        },
      ]
    } // return end
  }, //data() end
} //export default end
</script>

<style lang="scss" scoped>
  header{
    height: 70px;
    padding: 0px 40px;
    display: flex;
    align-items: center;
    .logo{
      margin-right: 40px;
      text-decoration: none;
      
    }
  }
</style>