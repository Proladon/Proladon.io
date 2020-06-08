<template>
    <div id="app">
        <NavBar :class="{index_nav: current_section==0}" />
        <div class="index-wrapper">
            <Home class="section" :section="current_section"/>
            <About class="section" />
            <Skill class="section" />
            <Awards class="section" />
            <Works class="section" />
        </div>
        
    </div>
</template>

<script>
    // import _ from 'lodash'
    import NavBar from '@/components/NavBar.vue'
    import Home from '@/views/Home.vue'
    import About from '@/views/About.vue'
    import Skill from '@/views/Skill.vue'
    import Awards from '@/views/Awards.vue'
    import Works from '@/views/Works.vue'

    export default {
        components: {
            NavBar,
            Home,
            About,
            Skill,
            Awards,
            Works
        },
        data(){
            return{
                current_section: this.$store.state.current_section
            }
        },
        // created() {
        //     var ticking = false
        //     // add wheel Event
        //     window.addEventListener('wheel', _.throttle((evt) => {
        //         var delta = evt.wheelDelta
        //         const sections = document.querySelectorAll('.section')
        //         var element
        //         // scroll up
        //         if (ticking != true) {
        //             if (delta >= 30) {
        //                 if (this.current_section > 0) {
        //                     ticking = true
        //                     this.current_section -= 1
        //                     element = sections[this.current_section]
        //                     this.$store.commit('changeSection', this.current_section) //update state
        //                     scrollSection()
        //                 }
        //             }
        //             // scroll down
        //             else if (delta <= -30) {
        //                 if (this.current_section < 3) {
        //                     ticking = true
        //                     this.current_section += 1
        //                     element = sections[this.current_section]
        //                     this.$store.commit('changeSection', this.current_section) //update state
        //                     scrollSection()
        //                 }
        //             }
        //             tickingOut()
        //         }
        //         // scroll function
        //         function scrollSection() {
        //             setTimeout(() => {
        //                 window.scrollTo({
        //                     'behavior': 'smooth',
        //                     'left': 0,
        //                     'top': element.offsetTop
        //                 })
        //             }, 100); //scroll delay
        //         }
        //         // lock scroll event
        //         function tickingOut() {
        //             setTimeout(() => {
        //                 ticking = false
        //             }, 600);
        //         }
        //     }, 60), false)
        // },
        computed:{
            getCurrentSection: function(){
                return this.$store.state.current_section
            }
        },
        watch: {
            getCurrentSection: function(value) {
                this.current_section = value
            }
        }
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
    @font-face{
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

    .index_nav{
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