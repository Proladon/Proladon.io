<template>
    <div class="works">
        <!-- Left Panel -->
        <div class="left-panel">
            <div class="works-nav" :class="{ hide:focus !== ''}">
                <button @click="chgWorks('ID')">Product Design</button>
                <button @click="chgWorks('3D')">3D Art</button>
                <button @click="chgWorks('2D')">2D Art</button>
            </div>

            <div class="gallery-wrapper">
                <div class="gallery" :class="{ hide:focus !== ''}">
                    <button class="work-thumbnail" v-for="wk in obj" :key="wk.img">
                        <img :src="wk.img" :alt="wk.index" @click="focusWork">
                    </button>
                </div>

                <transition name="fade">
                    <div class="focus-wrapper" v-if=" focus !== '' ">
                        <img id="getfocus" :src="focus" alt="" @click="unfocus">
                    </div>
                </transition>
            </div>
        </div>

        <!-- Right Panel -->
        <transition name="fade">
        <div class="right-panel" :class="{ hide:focus === ''}">
            <div class="content-wrapper">
                <div class="name"></div>
                <div class="year"></div>
                <div class="link"></div>
                <div class="note"></div>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
    import workID from '@/json/works/ID.json'
    import work3D from '@/json/works/3D.json'
    import work2D from '@/json/works/2D.json'
    export default {
        name: "Works",
        components: {},
        data() {
            return {
                current: '3D',
                focus: '',
                obj: work3D,
                worksID: workID,
                works3D: work3D,
                works2D: work2D,

                name: String,
                year: String,
                link: String,
                note: String,
            }
        },
        methods: {
            chgWorks(works) {
                if (works === 'ID') this.obj = this.worksID
                if (works === '3D') this.obj = this.works3D
                if (works === '2D') this.obj = this.works2D
            },
            focusWork(e) {
                this.focus = e.target.src
                const data = this.works3D[e.target.alt].des
                this.name = data.name
                this.year = data.years
                this.link = data.link
                this.note = data.note
            },
            unfocus(e) {
                e.target.style.opacity = 0
                setTimeout(() => {
                    this.focus = ''
                }, 300);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter,
    .fade-leave-to {
        opacity: 0;
    }

    .works {
        height: 100vh;
        width: 100%;
        display: flex;
        background-color: rgb(38, 38, 38);
        overflow-y: hidden;
    }

    .left-panel {
        width: 80%;

        .works-nav {
            width: 100%;
            height: 5%;

            button {
                height: 100%;
                width: 10em;
                margin-left: .5em;
                margin-right: .5em;
            }
        }

        .gallery-wrapper {
            width: 100%;
            height: 95%;
        }

        .gallery{
            width: 100%;
            height: 100%;
            overflow-y: auto;
        }


    }

    .hide {
        display: none;
    }

    .right-panel {
        height: 100%;
        width: 20%;
        background: aquamarine;
    }

    .work-thumbnail {
        width: 20em;
        height: 20em;
        position: relative;

        img {
            max-height: 100%;
            max-width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
        }
    }

    .focus-wrapper {
        width: 100%;
        height: 105%;
        position: relative;

        #getfocus {
            max-height: 100%;
            max-width: 100%;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            transition: .3s;
        }
    }
</style>