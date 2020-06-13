<template>
    <div class="works">

        <div class="gallery-wrapper" :class="{ hide:focus !== ''}">
            <div class="works-nav" :class="{ hide:focus !== ''}">
                <button @click="chgWorks('ID')">Product Design</button>
                <button @click="chgWorks('3D')">3D Art</button>
                <button @click="chgWorks('2D')">2D Art</button>
            </div>

            <transition name="fade">
            <div class="gallery" v-if="focus === ''">
                <button class="work-thumbnail" v-for="wk in obj" :key="wk.img">
                    <img :src="wk.img" :alt="wk.index" @click="focusWork">
                </button>
            </div>
            </transition>
        </div>

        
        <div class="focus-wrapper" :class="{ hide:focus === ''}">
            <transition name="fade">
            <div class="focus-img" v-if="focus !== ''">
                <img id="getfocus" :src="focus" alt="" @click="unfocus" style="transition: .4s;">
            </div>
            </transition>

            <transition name="fade">
            <div class="note-panel" v-if="focus !== ''">
                <div class="content-wrapper">
                    <div class="name"></div>
                    <div class="year"></div>
                    <div class="link"></div>
                    <div class="note"></div>
                </div>
            </div>
            </transition>
        </div>
        
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
            unfocus() {
                this.focus = ''
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin centerImg {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

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

    .hide {
        display: none !important;

    }

    .gallery-wrapper {
        width: 100%;
        height: 100%;
    }

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


    .gallery {
        width: 100%;
        height: 95%;

        .work-thumbnail {
            width: 150px;
            height: 150px;
            position: relative;

            img {
                @include centerImg();
            }
        }
    }


    .focus-wrapper {
        width: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        .focus-img {
            width: 80%;
            height: 100%;
            position: relative;

            img {
                @include centerImg();
            }
        }

        .note-panel {
            width: 20%;
            height: 100%;
            background-color: aquamarine;

            .content-wrapper {
                width: 100%;
                height: 100%;
            }
        }
    }
</style>