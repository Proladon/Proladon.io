<template>
  <div class="youtube">
      {{ name }}
      {{ subs }}
      {{ viewcount }}
  </div>
</template>

<script>
// import axios from 'axios'
export default {
    name: 'Youtube',
    data(){
        return{
            key: "AIzaSyDXM5JOwJc2uOU3TO5rPTRqFpROGYCRJR8",
            base: "https://www.googleapis.com/youtube/v3/",
            name: String,
            subs: String,
            viewcount: String
        }
    },
    methods:{

    },
    mounted(){
        // axios.get(this.base + 'channels',{
        //     params:{
        //         key: this.key,
        //         part: "snippet,statistics",
        //         id: "UCczXI0u-LKlX-oBwrkKtOdg"
        //     }
        // }).then(res=>{
        //     const data = res.data.items[0] 
        //     this.name = data.snippet.title
        //     this.subs = data.statistics.subscriberCount
        //     this.viewcount = data.statistics.viewCount

        // }).catch(err=>{
        //     console.log(err)
        // })
    }
}
</script>

<style lang="scss" scoped>
.youtube {
        margin: 0;
        width: 100%;
        height: 100vh;
    }
</style>