<template>
    <div class="skill">
        <div class="skill-wrapper">
            <div class="skill-class">

                <hooper id="class-hooper" ref="classHooper" :wheelControl="false" :keysControl="false"
                    :mouseDrag="false" :touchDrag="false">
                    <slide class="title1">
                        Programming
                    </slide>
                    <slide class="title1">
                        3D
                    </slide>
                    <slide class="title1">
                        2D
                    </slide>
                    <slide class="title1">
                        Media
                    </slide>
                </hooper>
            </div>

            <div class="skill-type">
                <hooper id="type-hooper" ref="typeHooper" @slide="udType" group="group1">
                    <slide class="title2">
                        FullStack Skills
                    </slide>
                    <slide class="title2">
                        Utilities Skills
                    </slide>
                    <slide class="title2">
                        Industrial-Design Skills
                    </slide>
                    <slide class="title2">
                        3D Art Skills
                    </slide>
                    <slide class="title2">
                        Graphic-Design Skills
                    </slide>
                    <slide class="title2">
                        2D-Art Skills
                    </slide>
                    <slide class="title2">
                        Media-Design Skills
                    </slide>
                    <hooper-navigation slot="hooper-addons"></hooper-navigation>
                </hooper>
            </div>

            <div class="skill-content">
                <div class="skill-item-wrapper">
                    <hooper id="skill-hooper" group="group1">
                        <slide class="title3" id="fullstack">
                            <div class="skill-section-wrapper">
                                <p class="skill-section">Front-End</p>
                                <div class="item" v-for="fn in frontend" :key="fn">
                                    <p>{{ fn}}</p>
                                </div>
                                <p class="skill-section">Back-End</p>
                                <div class="item" v-for="bn in backend" :key="bn">
                                    <p>{{ bn}}</p>
                                </div>
                            </div>
                            
                            <div class="skill-section-wrapper">
                                <p class="skill-section">Framework</p>
                                <div class="item" v-for="fw in framework" :key="fw">
                                    <p>{{ fw}}</p>
                                </div>
                                <p class="skill-section">DataBase</p>
                                <div class="item" v-for="db in database" :key="db">
                                    <p>{{ db }}</p>
                                </div>
                            </div>
                        </slide>

                        <slide class="title3">
                            <p class="skill-section">IDE/Editor</p>
                            <div class="item" v-for="IDE in ide" :key="IDE">
                                <p>{{ IDE }}</p>
                            </div>
                            <p class="skill-section">Git</p>
                            <div class="item" v-for="Git in git" :key="Git">
                                <p>{{ Git }}</p>
                            </div>
                        </slide>

                        <slide class="title3">
                            <div class="item" v-for="sk in skillID" :key="sk">
                                <p>{{ sk }}</p>
                            </div>
                        </slide>
                        <slide class="title3">
                            <div class="item" v-for="sk in skill3D" :key="sk">
                                <p>{{ sk }}</p>
                            </div>
                        </slide>
                        <slide class="title3">
                            <div class="item" v-for="sk in skillGD" :key="sk">
                                <p>{{ sk }}</p>
                            </div>
                        </slide>
                        <slide class="title3">
                            <div class="item" v-for="sk in skill2D" :key="sk">
                                <p>{{ sk }}</p>
                            </div>
                        </slide>
                        <slide class="title3">
                            <div class="item" v-for="sk in skillMedia" :key="sk">
                                <p>{{ sk }}</p>
                            </div>
                        </slide>
                    </hooper>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {
        Hooper,
        Slide,
        Navigation as HooperNavigation
    } from 'hooper';
    import 'hooper/dist/hooper.css';
    export default {
        name: "Skill",
        components: {
            Hooper,
            Slide,
            HooperNavigation,
        },
        data() {
            return {
                cur_Type: 0,
                last_Type: 0,
                typeCode: 1,
                type3D: 2,
                type2D: 4,
                typeMedia: 6,

                frontend:['JavaScript', 'HTML', 'CSS', 'Json'],
                backend:['Python', 'C#'],
                framework:['discord.py', 'Vue.js', '.Net WPF', 'Tkinter'],
                database:['MongoDB', 'SQLite3'],
                ide:['Visual Studio Code', 'Visual Studio'],
                git:['Github', 'Gitkraken'],


                skillID:[
                    'Creo (Pro/E)',
                    'Rhino',
                    'CURA',
                    'Keyshot',
                    'AutoCAD',
                ],
                skill3D:[
                    'Blender',
                    'Zbrush',
                ],
                skillGD:[
                    'PhotoShop',
                    'Illustrator',
                    'Indesign',
                ],
                skill2D:[
                    'Krita',
                    'MediBang Paint Pro',
                    'live2D'
                ],
                skillMedia:[
                    'Premiere',
                    'AffterEffect',
                    'SonyVega',
                ]
            }
        },
        methods: {
           
            udType(payload) {
                this.cur_Type = payload.currentSlide
                if (this.cur_Type - this.last_Type > 0) {
                    if (this.cur_Type == this.typeCode) this.$refs.classHooper.slideTo(0)
                    if (this.cur_Type == this.type3D) this.$refs.classHooper.slideTo(1)
                    if (this.cur_Type == this.type2D) this.$refs.classHooper.slideTo(2)
                    if (this.cur_Type == this.typeMedia) this.$refs.classHooper.slideTo(3)
                    this.last_Type = this.cur_Type - 1
                } else {
                    if (this.cur_Type == 1) this.$refs.classHooper.slideTo(0)
                    if (this.cur_Type == 3) this.$refs.classHooper.slideTo(1)
                    if (this.cur_Type == 5) this.$refs.classHooper.slideTo(2)
                    if (this.cur_Type == 6) this.$refs.classHooper.slideTo(3)
                    if (this.cur_Type == 5 && this.last_Type == 5) {
                        this.last_Type += 1
                    } else {
                        this.last_Type -= 1
                    }
                }
                if (this.cur_Type == 0) this.last_Type = 0
                this.debug = this.cur_Type - this.last_Type
            }
        }
    }
</script>

<style lang="scss" scoped>
    @mixin center-item {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skill {
        width: 100%;
        height: 100vh;
        background-color: #333333;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .title1 {
        color: #C8C8C8;
        font-family: AVS;
    }

    .title2 {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: consolas;
        font-size: 3vw;
    }
    .title3 {
        color: #C8C8C8;
        text-align: left;
        font-family: consolas;
        font-size: 1.25vw;
    }

    #class-hooper,
    #type-hooper,
    #skill-hooper {
        outline: none;
    }
    
    #skill-hooper{
        height: 100%;
    }
    .skill-section{
        font-size: 2vw;
    }


    .skill-wrapper {
        width: 85%;
        height: 85%;

        .skill-class {
            width: 100%;
            height: 20%;
            font-size: 10vw;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        .skill-type {
            width: 100%;
            height: 15%;
            background: #C8C8C8;
            @include center-item();

            #stype {}
        }


        .skill-content {
            width: 100%;
            height: 55vh;
            color: #333333;

            .skill-item-wrapper {
                display: flex;
                height: 100%;
                margin-top: 30px;

                #fullstack{
                    display: flex;
                    justify-content: space-around;
                }
            }
        }
    }
</style>