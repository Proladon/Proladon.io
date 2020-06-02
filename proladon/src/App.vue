<template>
    <div id="app">
        <NavBar />
        <div class="index-wrapper">
            <Home class="section" />
            <About class="section" />
            <Skill class="section" />
        </div>
        <!-- <router-view /> -->
    </div>
</template>

<script>
    import _ from 'lodash'
    import NavBar from '@/components/NavBar.vue'
    import Home from '@/views/Home.vue'
    import About from '@/views/About.vue'
    import Skill from '@/views/Skill.vue'
    export default {
        components: {
            NavBar,
            Home,
            About,
            Skill,
        },
        created() {
            var current_section = 0
            var ticking = false
            window.addEventListener('wheel', _.throttle((evt) => {
                var delta = evt.wheelDelta
                const sections = document.querySelectorAll('.section')
                var element

                console.log(delta)
                // scroll up
                if (ticking != true){
                    if (delta >= 30) {
                        if (current_section > 0) {
                            ticking = true
                            current_section -= 1
                            element = sections[current_section]
                            scrollSection()
                        }
                    }
                    // scroll down
                    else if (delta <= -30) {
                        if (current_section < 2) {
                            ticking = true
                            current_section += 1
                            element = sections[current_section]
                            scrollSection()
                        }
                    }
                    console.log("scrolling...")
                    tickingOut()
                }

                function scrollSection(){
                    window.scrollTo({
                        'behavior': 'smooth',
                        'left': 0,
                        'top': element.offsetTop
                    })
                }

                function tickingOut(){
                    setTimeout(() => {
                       ticking = false 
                    }, 600);
                }
            }, 60), false)
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        overflow-y: hidden;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;

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
    }
</style>