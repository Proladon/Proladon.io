<template>
    <div class="skill">
        <!-- Programming Skill -->
        <div class="page-wrapper">

        
        <div class="skill-area">
            <div class="skill-title">Programming Skill</div>
            <div class="skill-card-wrapper" v-for="skill in skillProgram" :key="skill.name">
                <div class="skill-card">
                    <img :src="skill.icon" alt="none">
                    <p>{{ skill.name }}</p>
                </div>
                <div class="skill-value"></div>
            </div>
        </div>

        <!-- 3D Skill -->
        <div class="skill-area">
            <div class="skill-title">3D Skill</div>
            <div class="skill-card-wrapper" v-for="skill in skill3D" :key="skill.name">
                <div class="skill-card">
                    <img :src="skill.icon" alt="none">
                    <p>{{ skill.name }}</p>
                </div>
                <div class="skill-value"></div>
            </div>
        </div>

        <!-- 2D Skill -->
        <div class="skill-area">
            <div class="skill-title">2D Skill</div>
            <div class="skill-card-wrapper" v-for="skill in skill2D" :key="skill.name">
                <div class="skill-card">
                    <img :src="skill.icon" alt="none">
                    <p>{{ skill.name }}</p>
                </div>
                <div class="skill-value"></div>
            </div>
        </div>

        <!-- Media Skill -->
        <div class="skill-area">
            <div class="skill-title">Media Skill</div>
            <div class="skill-card-wrapper" v-for="skill in skillMedia" :key="skill.name">
                <div class="skill-card">
                    <img :src="skill.icon" alt="none">
                    <p>{{ skill.name }}</p>
                </div>
                <div class="skill-value"></div>
            </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Skill",
        data() {
            return {
                skillProgram: {
                    sk1: {
                        name: 'Python',
                        icon: ''
                    },
                    sk2: {
                        name: 'Javascript',
                        icon: ''
                    },
                    sk3: {
                        name: 'Typescript',
                        icon: ''
                    },
                    sk4: {
                        name: 'C#',
                        icon: ''
                    },
                    sk5: {
                        name: 'HTML',
                        icon: ''
                    },
                    sk6: {
                        name: 'CSS / SCSS',
                        icon: ''
                    },
                },
                skill3D: {
                    sk1: {
                        name: 'Creo (Pro/E)',
                        icon: './icon/discord.png'
                    },
                    sk2: {
                        name: 'Blender',
                        icon: './icon/discord.png'
                    },
                    sk3: {
                        name: 'Zbrush',
                        icon: './icon/discord.png'
                    }
                },
                skill2D: {
                    sk1: {
                        name: 'PhotoShop',
                        icon: ''
                    },
                    sk2: {
                        name: 'Indesign',
                        icon: ''
                    },
                },
                skillMedia: {
                    sk1: {
                        name: 'Premiere',
                        icon: ''
                    },
                    sk2: {
                        name: 'AffterEffect',
                        icon: ''
                    },
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .skill {
        padding-top: 30px;
        padding-bottom: 30px;
        width: 100%;
        height: 100%;
        background-color: rgb(32, 32, 32);
    }

    .skill-area {
        margin: 30px;
    }

    .skill-title {
        color: white;
        background-color: rgb(63, 63, 63);
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .skill-card-wrapper {
        width: 150px;
        height: 35px;
        margin-top: 30px;
        transition: .5s;
    }

    .skill-card-wrapper:hover {
        transform: scale(1.2);
        transition: .5s;
    }

    .skill-card {
        color: white;
        background-color: grey;
        display: flex;

        img {
            background-color: white;
            width: 30%;
        }

        p {
            margin-left: 10px;
            align-self: center;
        }
    }

    .skill-value {
        width: 150px;
        height: 5px;
        background-color: rgb(47, 255, 203);
    }

    @keyframes flicker {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0;
        }

        100% {
            opacity: 1;
        }
    }
</style>