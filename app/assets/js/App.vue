<template>
    <div id="class">
        <router-link to="/">都是</router-link>
        <router-link to="/two">TWO</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'App',
    components:{

    },
    data () {
      return {
          msg: 'Welcome Your Vu.js App'
      }
    },
    watch:{
      '$route' (to, from){
        console.log(to);
        console.log(from)
      }
    }

}
</script>
