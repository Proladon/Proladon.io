<template>
    <div class="awards background">
        <div class="award-wrapper">
            <div class="award-content"></div>
            <div class="award-bg"></div>
            <div class="bg-cover"></div>
        </div>
        <div class="award-nav">
            <div class="kd17 nav-item" @click="chgbg('KD')"
                :class="{award_active:current_award === 'KD', award_deactive:current_award !== 'KD'}">
                <div class="nav-bg"></div>
                <p>KDesign 2017</p>
            </div>
            <div class="gold-dot nav-item" @click="chgbg('DC')"
                :class="{award_active:current_award === 'DC', award_deactive:current_award !== 'DC'}">
                <div class="nav-bg"></div>
                <p>Discord Hack Week 2019</p>
            </div>
            <div class="gold-dot nav-item" @click="chgbg('YP')"
                :class="{award_active:current_award === 'YP', award_deactive:current_award !== 'YP'}">
                <div class="nav-bg"></div>
                <p>YOUNG PIN 2018</p>
            </div>
            <div class="gold-dot nav-item" @click="chgbg('3FHU')"
                :class="{award_active:current_award === '3FHU', award_deactive:current_award !== '3FHU'}">
                <div class="nav-bg"></div>
                <p>3F ZIPPER / HUAYU TEXTILE</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Awards',
        components: {},
        data() {
            return {
                current_award: 'KD',
                bg: HTMLDivElement,
                content: HTMLDivElement,
                cover: HTMLDivElement,
            }
        },
        methods: {
            chgbg(award) {
                if (this.current_award === award) return
                this.current_award = award
                // var that = this
                // this.bg.classList.add("bg-out")
                // this.content.classList.add("content-out")
                this.cover.classList.add("cover-in")
                setTimeout(() => {
                    if (award === 'KD') {
                        // chgimg("KDesign/KD-17-0.jpg", "KDesign/KD17-2.png")
                        this.bg.style.backgroundImage = "url('./KDesign/KD-17-0.jpg')"
                        this.content.style.backgroundImage = "url('./KDesign/KD17-2.png')"
                    } else if (award === 'DC') {
                        this.bg.style.backgroundImage = "url('./DCHW19/dchw19.jpeg')"
                        this.content.style.backgroundImage = "url('./DCHW19/dc.png')"
                    } else if (award === 'YP') {
                        this.bg.style.backgroundImage = "url('./YP18/4332.png')"
                        this.content.style.backgroundImage = "url('./YP18/yp.png')"
                    } else if (award === '3FHU') {
                        this.bg.style.backgroundImage = "url('./3FHU/1.jpg')"
                        this.content.style.backgroundImage = "url('./3FHU/3FHU.png')"
                    }
                }, 1000);
                setTimeout(() => {
                    this.cover.classList.remove("cover-in")
                }, 1500);
                // function chgimg(bg_url, content_url) {
                //     that.bg.style.backgroundImage = `url("./${bg_url}")`
                //     that.content.style.backgroundImage = `url("./${content_url}")`
                // }
            }
        },
        mounted() {
            document.getElementsByClassName('award-bg')[0].style.backgroundImage = 'url("./KDesign/KD-17-0.jpg")'
            document.getElementsByClassName('award-content')[0].style.backgroundImage = 'url("./KDesign/KD17-2.png")'
            this.bg = document.getElementsByClassName('award-bg')[0]
            this.content = document.getElementsByClassName('award-content')[0]
            this.cover = document.getElementsByClassName('bg-cover')[0]
        }
    }
</script>

<style lang="scss" scoped>
    * {
        font-family: consolas;
    }

    .awards {
        margin: 0;
        width: 100%;
        height: 100vh;
        background-color: rgb(23, 34, 42);
    }

    .award-wrapper {
        width: 100%;
        height: 90%;
        display: flex;
        position: relative;

        .award-content {
            width: 30%;
            height: 100%;
            background-size: cover;
            background-position: center;
            transition: ease-in-out 1s;
        }

        .award-bg {
            width: 70%;
            height: 100%;
            background-size: 100%;
            background-position: center;
            background-repeat: no-repeat;
            // filter: brightness(50%);
            transition: ease-in-out 1s;
        }

        .bg-cover {
            width: 0;
            height: 100%;
            background-color: rgb(38, 38, 38);
            position: absolute;
            transition: ease-in-out 1s;
        }
    }

    .cover-in {
        width: 100% !important;
        transition: ease-in-out 1s;
    }

    .award-nav {
        width: 100%;
        height: 10%;
        font-size: 2px;
        display: flex;
        justify-content: space-between;

        .nav-item {
            // display: flex;
            // justify-content: center;
            // align-items: center;
            position: relative;
        }

        .nav-bg {
            width: 100%;
            // height: 100%;
        }

        p {
            position: absolute;
            top: 50%;
            left: 50%;
            margin-right: -50%;
            transform: translate(-50%, -50%)
        }

        .kd17 {
            width: 20%;
        }

        .gold-dot {
            width: 20%;
        }

    }

    .award_active {
        .nav-bg {
            height: 100%;
            // background-color: rgb(50, 182, 205);
            background-color: #c8c8c8;
            transition: ease-in-out 1s;
        }
    }

    .award_deactive {
        .nav-bg {
            height: 0;
            background-color: none;
            transition: ease-in-out 1s;
        }
    }
</style>