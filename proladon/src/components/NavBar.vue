<template>
    <div class="navbar">
        <div class="nav-container" v-for="Lnav in navs" :key="Lnav.path">
            <router-link class="nav-el" :to=Lnav.path> <span>{{Lnav.name}}</span></router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                navs: {
                    nav1: {
                        path: '/',
                        name: 'Home'
                    },
                    nav2: {
                        path: '/about',
                        name: 'About'
                    },
                    nav3: {
                        path: '/skill',
                        name: 'Skill'
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

    a {
        text-decoration: none;
        color: rgb(194, 194, 194);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .nav-container {
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 80%;
        height: 50px;
        /* background: greenyellow; */
    }
</style>