<template>
    <div class="navbar">
        <div class="nav-container" v-for="Lnav in navs" :key="Lnav.path">
            <button class="nav-el" >{{Lnav.name}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        mounted() {
            const that = this
            const navBtn = document.querySelectorAll('.nav-el')
            const sections = document.querySelectorAll('.section')
            console.log(navBtn)
            for (let i=0; i<navBtn.length; i++){
                navBtn[i].addEventListener('click', ()=>{
                    scrollSection(i)
                })
            }

            function scrollSection(index) {
                const element = sections[index]
                that.$store.commit('changeSection', index) //update state
                window.scrollTo({
                    'behavior': 'smooth',
                    'left': 0,
                    'top': element.offsetTop
                })
            }
        },
        data() {
            return {
                navs: {
                    nav1: {
                        name: 'Home'
                    },
                    nav2: {
                        name: 'About'
                    },
                    nav3: {
                        name: 'Skill'
                    },
                    nav4: {
                        name: 'Works'
                    },
                }
            }
        }
    }
</script>

<style scoped>
    .navbar {
        width: 100px;
        height: 100vh;
        background-color: rgba(20, 20, 20, .3);
        position: fixed;
    }

    .nav-el {
        background: transparent;
        border: 1px solid transparent;
        outline: none;
        cursor: pointer;
        text-decoration: none;
        color: rgb(194, 194, 194);
        width: 100%;
        height: 100%;
        transition: 1s;
    }

    .nav-el:hover {
        color: mediumspringgreen;
        border: 1px solid mediumspringgreen;
        transition: .5s;
    }

    .nav-container {
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 80%;
        height: 50px;
    }
</style>