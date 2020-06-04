<template>
    <div class="home bg" >
        <div class="page-wrapper">
            <div class="title-wrapper">
                    <h1 id="ch-name" data-aos="fade-down" data-aos-duration="2000">
                        Chiang<br>
                        Yu Hong
                    </h1>
                    <p id="en-name" data-aos="fade-up" data-aos-duration="2000">
                        Rex / Proladon
                    </p>
                    <button id="entry-btn" @click="entry()">
                        <typical
                        :steps="['', 1500, '  >cd Profile', 100]"
                        />
                        <typical
                        :steps="['',200, '_', 100]"
                        :loop="Infinity"
                        />
                    </button>
                    <p id="pro" data-aos="fade-right">
                        Industrial Designer <span>/</span><br>
                        Coder <span>/</span><br>
                        2D/3D Artist <span>/</span>
                    </p>
            </div>
            
        </div>
        
    </div>
</template>

<script>
    import typical from 'vue-typical'
    export default {
        name: 'Home',
        components: {
            typical,
        },
        props: [
            'section'
        ],
        methods:{
            entry(){
                const element = document.querySelectorAll('.section')[1]
                window.scrollTo({
                            'behavior': 'smooth',
                            'left': 0,
                            'top': element.offsetTop
                        })
                this.$store.commit('changeSection', 1)
            }
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
    font-family: 'AV Semi-Round straight';
    src:url('../assets/font/AV Semi-Round straight.ttf')
    }
    @mixin titleWord($color, $size){
        color: $color;
        font-family: AV Semi-Round straight;
        font-size: $size;
        text-align: right;
        text-shadow: 0.1em 0.1em 0.1em rgb(0, 0, 0);
    }

    .home {
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: rgb(38, 38, 38);
        overflow-y: hidden;
    }

    .bg {
        width: 100vw;
        height: 100vh;
        background-image: url('../assets/img/profio2.png');
        background-size: 70%;
        background-attachment: fixed;
        background-position: left center;
        background-repeat: no-repeat;
        transition: 4s all cubic-bezier(0.22, 1, 0, 1);
    }
    
    .title-wrapper {
        overflow-y: hidden;
        width: 100vw;
        height: 80vh;
        float: right;
        color: white;
        margin-right: 5vw;
        margin-top: 10vh;
        margin-bottom: 10vh;
        letter-spacing: 10px;
        
    }

    #ch-name{
        height: 30%;
        @include titleWord(rgb(112,191,228), 5vw)
    }

    #en-name{
        @include titleWord(white, 2vw)
    }

    #pro{
        margin-top: 42vh;
        @include titleWord(white, 1vw)
    }

    #entry-btn{
        display: flex;
        padding-left: 40px;
        height: 10%;
        width: 20vw;
        margin: 10px;
        color: white;
        font-size: 2vw;
        font-family: consolas;
        letter-spacing: 10px;
        float: right;
        margin-top: 17vh;
        background-color: transparent;
        border: solid 1px rgb(112,191,228);
        transition: 1s;
    }

    #entry-btn:hover{
        background-color: rgb(112,191,228);
        color: rgb(50, 50, 50);
        transition: .8s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }

</style>