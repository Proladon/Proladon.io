<template>
    <div class="works">
        <!-- <div class="item" :style="{ backgroundImage: `url(${img})` }"></div> -->
        <hooper id="hooper" :centerMode="true">
            <slide v-for="work in works" :key="work.img">
                <div class="item" :style="{ backgroundImage: `url(${work.img})` }"></div>
            </slide>

            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
    </div>
</template>

<script>
    import {
        Hooper,
        Slide,
        Pagination as HooperPagination
    } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        name: "Works",
        components: {
            Hooper,
            Slide,
            HooperPagination,
        },
        data() {
            return {
                works: {
                    w1: {
                        img: 'https://cdnb.artstation.com/p/assets/images/images/007/677/551/large/proladon-1.jpg?1507788789'
                    },
                    w2: {
                        img: 'https://cdnb.artstation.com/p/assets/images/images/007/677/755/large/proladon-6.jpg?1507790350'
                    },
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .works {
        height: 100vh;
        width: 100%;
        background-color: rgb(38, 38, 38);
    }

    .hooper {
        margin: 0 auto;
        width: 80%;
        height: 100vh;
    }

    .item {
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-size: 80%;
        background-position: center center;
    }
</style>