<template>
    <div class="works">

        <div class="gallery-wrapper" :class="{ hide:focus !== ''}">
            <div class="works-nav" :class="{ hide:focus !== ''}">
                <button @click="chgWorks('ID')" :class="{nav_active:current === 'ID'}">Product Design</button>
                <button @click="chgWorks('3D')" :class="{nav_active:current === '3D'}">3D Art</button>
                <button @click="chgWorks('2D')" :class="{nav_active:current === '2D'}">2D Art</button>
            </div>

            <transition name="fade">
                <div class="gallery" v-if="focus === ''">
                    <button class="work-thumbnail" v-for="wk in obj" :key="wk.img" data-aos="fade">
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
                    <div class="content-wrapper" data-aos="fade-right">
                        <p class="name"><strong>Name:</strong> {{ name }}</p>
                        <p class="year"><strong>Year:</strong> {{ year }}</p>
                        <p class="link"><strong>Link:</strong> <a :href="link" target="_blank">Link</a></p>
                        <p class="note"><strong>Description:</strong><br>{{ note }}</p>
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
                current: 'ID',
                focus: '',
                obj: workID,
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
                this.current = works
                if (works === 'ID') this.obj = this.worksID
                if (works === '3D') this.obj = this.works3D
                if (works === '2D') this.obj = this.works2D
            },
            focusWork(e) {
                this.focus = e.target.src
                const data = this.obj[e.target.alt].des
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
        // overflow-y: hidden;
    }

    .hide {
        display: none !important;

    }

    .gallery-wrapper {
        width: 100%;
        height: 100%;
    }

    .nav_active{
        color: rgb(38, 38, 38) !important;
        background-color: rgb(105, 227, 238) !important;
    }
    .works-nav {
        width: 100%;
        margin-top: 5%;
        margin-bottom: 5%;
        // height: 5%;

        button {
            height: 3em;
            width: 10em;
            color: #c8c8c8;
            font-size: 1.2em;
            font-family: consolas;
            border: solid 2px rgb(105, 227, 238);
            border-radius: 5em;
            outline: none;
            background-color: transparent;
            margin-left: 2em;
            margin-right: 2em;
            margin-top: .5em;
            margin-bottom: .5em;
        }
        button:hover{
            color: rgb(38, 38, 38);
            background-color: rgb(105, 227, 238);
        }
    }


    .gallery {
        width: 95%;
        // height: 95%;
        margin: 0 auto;

        .work-thumbnail {
            width: 300px;
            height: 300px;
            position: relative;
            background-color: transparent;
            border: solid 1px transparent;
            transition: .8s !important;

            img {
                @include centerImg();
            }
        }

        .work-thumbnail:hover {
            border: solid 1px rgb(105, 227, 238);
            transition: .5s;
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
            background-color: #c8c8c8;

            .content-wrapper {
                width: 100%;
                height: 100%;
                text-align: left;
            }

            p {
                padding: 15px;
                font-size: 20px;
                line-height: 50px;
                text-align: justify;
            }

        }
    }

</style>