<template>
    <div class="home">
        <div class="page-wrapper">
        <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App" />
        </div>
    </div>
</template>

<script>
    import HelloWorld from '@/components/HelloWorld.vue'
    export default {
        name: 'Home',
        components: {
            HelloWorld
        }
    }
</script>

<style lang="scss" scoped>
    .home {
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: rgb(23, 34, 42);
        background-image: url('../assets/img/blurry-2.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transition: 1s;
    }

    .home.up{
        transform: translateY(0px);
        transition: 1s;
    }
</style>