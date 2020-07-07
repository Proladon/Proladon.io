<template>
    <div id="app">
        <div class="index-wrapper">
            <Home class="section" :section="current_section" />
            <About class="section" />
            <Skill class="section" />
            <Awards class="section" />
            <Youtube class="section" />
            <Works class="section" id="sectionWorks" />
        </div>

        <div class="menu-mask" :class="{mask_hide:menu}"></div>
        <div class="side-menu" :class="{menu_hide:menu}">
            <p>Home</p>
            <p>About</p>
            <p>Skills</p>
            <p>Awards</p>
            <p>Works</p>
        </div>
        <div class="menu-btn" @click="menu = !menu">Ω</div>
    </div>
</template>

<script>
    // import _ from 'lodash'
    import Home from '@/views/Home.vue'
    import About from '@/views/About.vue'
    import Skill from '@/views/Skill.vue'
    import Awards from '@/views/Awards.vue'
    import Youtube from '@/views/Youtube.vue'
    import Works from '@/views/Works.vue'
    export default {
        components: {
            Home,
            About,
            Skill,
            Awards,
            Youtube,
            Works
        },
        data() {
            return {
                current_section: this.$store.state.current_section,
                menu: false,
            }
        },
        methods:{
            toSection(sec){
                const element = document.getElementsByClassName(sec)
                window.scrollTo({
                    'behavior': 'smooth',
                    'left': 0,
                    'top': element.offsetTop
                })
            }
        },
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

    * {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        // overflow-y: hidden;
    }

    // font
    @font-face {
        font-family: "AVS";
        src: url('../src/assets/font/AV Semi-Round straight.ttf');
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;

    }

    body {
        background-color: rgb(38, 38, 38);
    }

    .menu-mask {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: black;
        opacity: .7;
        transition-property: all;
        transition: ease-in-out 1s;
    }

    .mask_hide{
        opacity: 0;
        pointer-events: none;
    }

    .side-menu {
        position: fixed;
        width: 30%;
        height: 100vh;
        background: #2c3e50;
        top: 0;
        right: 0;
        transition: ease-in-out .7s;

        p {
            color: white;
        }
    }

    .menu_hide {
        width: 0;
        transition: ease-in-out .7s;
    }

    .menu-btn {
        position: fixed;
        color: aquamarine;
        top: 20px;
        right: 20px;
        cursor: pointer;
    }

    .index_nav {
        visibility: collapse;
        background-color: transparent !important;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }

    .web-wrapper {
        width: 1000px;
    }

    .page-wrapper {
        width: calc(100% - 100px);
        margin-left: 100px;
        height: 100vh;
        // overflow-y: hidden;
    }
</style>