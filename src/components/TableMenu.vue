<template>
  <div class="container">
    <div class="table_list">
      <RouterLink class="list" to="/table">메뉴</RouterLink>
      <RouterLink class="list" to="/table_item">테이블</RouterLink>
      <RouterLink class="list" to="/table_src">설명</RouterLink>
        <!-- <button>메뉴</button>
        <button>메뉴</button>
        <button>메뉴</button> -->
    </div>
    <div class="test">
        <table class="table" v-for="(count) in counts" :key="count">
          <tr>
            <td>테이블 {{count}}<br/>
            <hr>
                <span>text</span>
            </td>
          </tr>
        </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      counts: [1,2,3,4,5,6,8,9,10,11,12,13]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container{
    margin-top: 30px;
    display: flex;
    .table_list{
      width: 5%;
      height: 1000px;
      color: white;
      background-color: black;
      .list{
        color: white;
        text-decoration: none;
        margin:6px;
        line-height: 50px;
      }
    }
    .test{
      width: 100%;
      height: 1000px;
      background-color: rgb(206, 205, 205);
      display: flex;
      flex-wrap: wrap;
      .table{
        width: 200px;
        height: 200px;
        margin: 30px 18px;
        text-align: center;
        td{
          background-color: white;
          hr{
            border: solid 1px red;
            padding: 0px;
          }
        }
      }
  }
  }
</style>