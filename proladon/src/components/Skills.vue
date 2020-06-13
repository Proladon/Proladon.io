<template>
    <div class="skills">
        <p class="skill-section">{{title}}</p>
        <div class="item" v-for="key in dict" :key="key.name">
            <div class="skill-name-wrapper">
                <p>{{ key.name}}</p>
            </div>
            <div class="value">
                <span style="float: left;">|</span>
                <span style="float: right;">|</span>
                <div class="hr-wrapper">
                    <hr :style="{width: key.value+'%'}">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Skills',
        props: [
            'title',
            'dict',
        ]
    }
</script>

<style lang="scss" scoped>
    .skills {
        margin-top: 30px;
        width: 100%;
    }

    .skill-section {
        width: 28%;
        font-size: 2vw;
        color: #333333;
        background-color: #C8C8C8;
    }

    .item {
            clear: both;
            margin-top: 10px;
            margin-bottom: 10px;
            display: flex;
        }

    .skill-name-wrapper {
            width: 15vw;
        }

    .value {
            height: 3vh;
            width: 100%;

            .hr-wrapper {
                height: 100%;
                display: flex;
                align-items: center;
            }

            hr {
                height: 5px;
                background-color: #C8C8C8;
                border: none;

            }
        }
</style>