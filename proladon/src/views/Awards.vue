<template>
    <div class="awards background">
        <div class="page-wrapper">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Awards',
    }
</script>

<style lang="scss" scoped>
    .awards {
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: rgb(23, 34, 42);
    }

    .background {
        // height: 100%;
        background-image: url('../assets/KDesign/KD17.png');
        background-size: cover;
        background-attachment: fixed;
        background-position: center center;
        background-repeat: no-repeat;
        transition: 4s all cubic-bezier(0.22, 1, 0, 1);
    }

    .vt-title {
        color: #42b983;
        font-size: 20px;
        font-family: 'Roboto', sans-serif;
        letter-spacing: 8px;
    }

    #me{
        height: 100vh;
    }
</style>