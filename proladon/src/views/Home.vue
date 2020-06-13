<template>
    <div class="home bg">
        <div class="topper-wrapper">
            <div class="p"></div>
            <div class="ty-wrapper">
                <typical class="vt-title" :steps="['_', 500, '']" :loop="3" />
                <typical class="vt-title" :steps="['',1750, 'Hello World!', 500, 'Hello World! I\'m Proladon.']" />
                <typical class="vt-title" :steps="['',1700, '_', 500,' ']" :loop="Infinity" />
            </div>
            <a class="dc" title="Discord" href="https://shelter-zone.github.io/SHELTER-ZONE/#/" target="_blank"></a>
        </div>
        <kinesis-container class="test">
            <kinesis-element :strength="50" class="test2">
                <div class="ch-name2">
                    <kinesis-element :strength="10">
                        <span>C</span>
                    </kinesis-element>
                    <kinesis-element :strength="20">
                        <span>h</span>
                    </kinesis-element>
                    <kinesis-element :strength="15">
                        <span>a</span>
                    </kinesis-element>
                    <kinesis-element :strength="12">
                        <span>i</span>
                    </kinesis-element>
                    <kinesis-element :strength="30">
                        <span>n</span>
                    </kinesis-element>
                    <kinesis-element :strength="10">
                        <span>g</span>
                    </kinesis-element>
                    <kinesis-element :strength="20">
                        <span>, </span>
                    </kinesis-element>
                    <kinesis-element :strength="18">
                        <span>Y</span>
                    </kinesis-element>
                    <kinesis-element :strength="20">
                        <span>u </span>
                    </kinesis-element>
                    <kinesis-element :strength="25">
                        <span>H</span>
                    </kinesis-element>
                    <kinesis-element :strength="17">
                        <span>o</span>
                    </kinesis-element>
                    <kinesis-element :strength="25">
                        <span>u</span>
                    </kinesis-element>
                    <kinesis-element :strength="20">
                        <span>n</span>
                    </kinesis-element>
                    <kinesis-element :strength="16">
                        <span>g</span>
                    </kinesis-element>
                </div>
                <div class="pro2" style="font-size:15px;">
                    <span>Coder</span>
                    <span>Industrial Designer</span>
                    <span>2D/3D Artist</span>
                </div>
            </kinesis-element>
        </kinesis-container>
        <!-- <div class="ch-name" v-prlx.mobile="{speed:0.5}">
            <p>Chaing, Yu Houng</p>
        </div> -->

        <!-- <div class="pro" v-prlx.mobile="{speed:0.2, reverse: true}">
            <span>Coder</span>
            <span>Industrial Designer</span>
            <span>2D/3D Artist</span>
        </div> -->
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
        methods: {
            entry() {
                const element = document.querySelectorAll('.section')[1]
                window.scrollTo({
                    'behavior': 'smooth',
                    'left': 0,
                    'top': element.offsetTop
                })
                this.$store.commit('changeSection', 1)
            },
            test() {
                alert("123")
            }
        }
    }
</script>

<style lang="scss" scoped>
    @font-face {
        font-family: 'Roboto-Regular';
        src: url('../assets/font/AV Semi-Round straight.ttf')
    }


    .test{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        overflow-y: hidden;
    }

    .test2{
        width: 100%;
        height: 100%;
    }

    .ch-name2{
        color: white;
        font-size: 5vw;
        letter-spacing: 10px;
        height: 90%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .pro2{
        color: white;
        font-size: 1vw;
        span{
            margin-left: 5vw;
            margin-right: 5vw;
        }
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
        height: 100vh;
        background-image: url('../assets/img/profio3.png');
        background-size: cover;
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        transition: 4s all cubic-bezier(0.22, 1, 0, 1);

    }

    .topper-wrapper {

        width: 100%;
        top: 0;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .ty-wrapper {
        display: flex;
    }

    .vt-title {
        font-family: consolas;
        font-size: 20px;
        color: skyblue;
    }

    .p {
        width: 30px;
        height: 30px;
        margin: 2vw;
        background-size: cover;
        background-image: url('../assets/img/P.png');
    }

    .dc {
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

    .ch-name {

        color: white;
        font-size: 5vw;
        letter-spacing: 10px;
        padding-top: 15vh;
        text-align: center;

        p {
            font-family: consolas;
        }
    }

    .pro {
        color: white;
        padding-top: 70vh;
        text-align: center;

        span {
            font-family: consolas;
            margin-left: 5vw;
            margin-right: 5vw;
        }
    }
</style>