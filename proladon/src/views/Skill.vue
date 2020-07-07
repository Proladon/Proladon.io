<template>
    <div class="skill">
        <div class="skill-wrapper">
            <div class="skill-class" data-aos="fade-down">

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

            <div class="skill-type" data-aos="fade-down" data-aos-delay="50">
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

            <div class="skill-content" data-aos="fade-down" data-aos-delay="100">
                <div class="skill-item-wrapper">
                    <hooper id="skill-hooper" group="group1">

                        <slide class="title3 two-col">
                            <div class="group-wrapper">
                                <!-- FrontEnd -->
                                <Skills title="Front-End" :dict="frontend" />
                                <!-- BackEnd -->
                                <Skills title="Back-End" :dict="backend" />
                            </div>

                            <div class="group-wrapper">
                                <!-- Framework -->
                                <Skills title="Framework" :dict="framework" />
                                <Skills title="DataBase" :dict="database" />
                            </div>
                        </slide>

                        <slide class="title3 two-col">
                            <div class="group-wrapper">
                                <!-- IDE/Editor -->
                                <Skills title="IDE/Editor" :dict="ide" />
                                <!-- Git -->
                                <Skills title="Git" :dict="Git" />
                            </div>
                            <div class="group-wrapper">
                                <!-- Other -->
                                <Skills title="Other" :dict="other" />
                            </div>
                        </slide>

                        <slide class="title3 two-col">
                            <!-- Industrial Design -->
                            <div class="group-wrapper">
                                <Skills title="Modeling" :dict="skillID" />
                                <Skills title="Renderer" :dict="skillrender" />
                            </div>
                            <div class="group-wrapper">
                                <Skills title="3D Print" :dict="skill3dp" />
                            </div>
                        </slide>

                        <slide class="title3">
                            <Skills :dict="skill3D" />
                        </slide>

                        <slide class="title3">
                            <Skills :dict="skillGD" />
                        </slide>

                        <slide class="title3">
                            <Skills :dict="skill2D" />
                        </slide>

                        <slide class="title3">
                            <Skills :dict="skillMedia" />
                        </slide>
                        <hooper-pagination slot="hooper-addons"></hooper-pagination>
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
        Navigation as HooperNavigation,
        Pagination as HooperPagination,
    } from 'hooper';
    import 'hooper/dist/hooper.css';
    import Skills from '@/components/Skills.vue'
    export default {
        name: "Skill",
        components: {
            Hooper,
            Slide,
            HooperNavigation,
            Skills,
            HooperPagination,
        },
        data() {
            return {
                cur_Type: 0,
                last_Type: 0,
                typeCode: 1,
                type3D: 2,
                type2D: 4,
                typeMedia: 6,
                // frontend
                frontend: {
                    js: {
                        name: 'JavaScript',
                        value: '55',
                    },
                    html: {
                        name: 'HTML',
                        value: '80',
                    },
                    css: {
                        name: 'CSS',
                        value: '40',
                    },
                    json: {
                        name: 'Json',
                        value: '85',
                    }
                },
                // backend
                backend: {
                    py: {
                        name: 'Python',
                        value: '80',
                    },
                    cs: {
                        name: 'C#',
                        value: '40',
                    },
                },
                // framework
                framework: {
                    vue: {
                        name: 'Vue.js',
                        value: '45',
                    },
                    wpf: {
                        name: '.Net WPF',
                        value: '40',
                    },
                    dc: {
                        name: 'discord.py',
                        value: '95',
                    },
                },
                // DataBase
                database: {
                    mongo: {
                        name: 'MongoDB',
                        value: '30',
                    },
                    sql3: {
                        name: 'SQLite3',
                        value: '30',
                    }
                },
                // IDE
                ide: {
                    vsc: {
                        name: 'Visual Studio Code',
                        value: '85',
                    },
                    vs: {
                        name: 'Visual Studio',
                        value: '60',
                    }
                },
                // Git
                Git: {
                    git: {
                        name: 'Github',
                        value: '70',
                    },
                    gitk: {
                        name: 'Gitkraken',
                        value: '70',
                    }
                },
                // Other
                other: {
                    google: {
                        name: 'Google',
                        value: '85',
                    },
                    psychic: {
                        name: 'Psychic',
                        value: '65',
                    }
                },
                // Industrial Design
                skillID: {
                    creo: {
                        name: 'Creo (Pro/E)',
                        value: '85',
                    },
                    rhino: {
                        name: 'Rhino',
                        value: '50',
                    },
                    cad: {
                        name: 'AutoCAD',
                        value: '75',
                    },
                },
                skill3dp: {
                    cura: {
                        name: 'CURA',
                        value: '80',
                    },
                },
                skillrender: {
                    keyshot: {
                        name: 'KeyShot',
                        value: '65',
                    },
                },
                // Industrial Design
                skill3D: {
                    blender: {
                        name: 'Blender',
                        value: '80'
                    },
                    zb: {
                        name: 'Zbrush',
                        value: '65'
                    },
                },
                skillGD: {
                    ps: {
                        name: 'PhotoShop',
                        value: '90'
                    },
                    ai: {
                        name: 'Illustrator',
                        value: '70'
                    },
                    id: {
                        name: 'Indesign',
                        value: '80'
                    },
                },
                skill2D: {
                    kt: {
                        name: 'Krita',
                        value: '60'
                    },
                    mdp: {
                        name: 'MediBang Paint Pro',
                        value: '60'
                    },
                    lv2d: {
                        name: 'live2D',
                        value: '50'
                    },
                },
                skillMedia: {
                    pr: {
                        name: 'Premiere',
                        value: '80'
                    },
                    ae: {
                        name: 'AffterEffect',
                        value: '70'
                    },
                    sv: {
                        name: 'SonyVega',
                        value: '60'
                    },
                }
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
    * {
        font-family: consolas;
    }

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

    #class-hooper{
        height: 100%;
    }

    #skill-hooper {
        height: 100%;
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
        }

        .two-col {
            display: flex;
            width: 100%;
            justify-content: space-between;
        }

        .skill-content {
            width: 100%;
            height: 55vh;
            color: #333333;

            .skill-item-wrapper {
                display: flex;
                height: 100%;
                margin-top: 30px;

                .group-wrapper {
                    width: 45%;
                }
            }
        }
    }
</style>