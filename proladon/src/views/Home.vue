<template>
    <div class="home bg" >
        <div class="topper-wrapper">
            <div class="p"></div>
            <a class="nav" href="">About</a>
            <a class="nav" href="">Skills</a>
            <a class="nav" href="">Works</a>
            <a class="nav" href="">Awards</a>
            <a class="dc" title="Discord" href="https://shelter-zone.github.io/SHELTER-ZONE/#/" target="_blank"></a>
        </div>
        <div class="ch-name" v-prlx.mobile="{speed:0.5}">
            <p>Chaing, Yu Houng</p>
        </div>

        <div class="pro" v-prlx.mobile="{speed:0.2, reverse: true}">
            <span>Coder</span>
            <span>Industrial Designer</span>
            <span>2D/3D Artist</span>
        </div>    
    </div>
</template>

<script>
    // import typical from 'vue-typical'
    export default {
        name: 'Home',
        components: {
            // typical,
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
            },
            test(){
                alert("123")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
    font-family: 'Roboto-Regular';
    src:url('../assets/font/AV Semi-Round straight.ttf')
    }

    .home {
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: rgb(38, 38, 38);
        overflow-y: hidden;
        position: relative;
    }

    .bg {
        width: 100vw;
        height: 100vh;
        background-image: url('../assets/img/profio3.png');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        transition: 4s all cubic-bezier(0.22, 1, 0, 1);
    }
    .topper-wrapper{
        
        width: 100%;
        top: 0;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .nav{
        font-family: consolas;
        color: skyblue;
        text-decoration: none;
    }

    .p{
        width: 30px;
        height: 30px;
        margin: 2vw;
        background-size: cover;
        background-image: url('../assets/img/P.png');
    }

    .dc{
        width: 30px;
        height: 30px;
        margin: 2vw;
        background-size: cover;
        background-image: url('../assets/icon/Discord-Logo-White.svg');
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .ch-name{
        
        color: white;
        font-size: 5vw;
        letter-spacing: 10px;
        padding-top: 15vh;
        text-align: center;
        p{
            font-family: consolas;
        }
    }

    .pro{
        color: white;
        padding-top: 70vh;
        text-align: center;
        span{
            font-family: consolas;
            margin-left: 5vw;
            margin-right: 5vw;
        }
    }
</style>