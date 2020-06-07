<template>
    <div class="about">
        <div class="panel">
            <div class="inpanel-wrapper">
                <div class="left-inpanel">
                    <div class="top">
                        <div id="section1" data-aos="fade-down">
                            <p class="title">Tatung University (TTU)</p>
                            <div class="content-wrapper">
                                
                                <p class="content">Industrial Design (Master)</p>
                            </div>
                        </div>
                        <div id="section2" data-aos="fade-down" data-aos-delay="300">
                            <p class="title">Oriental Institute of Technology (OIT)</p>
                            <div class="content-wrapper">
                                <p class="content">Industrial Design</p>
                            </div>
                        </div>
                    </div>
                    <div class="mid">
                        <p class="title" data-aos="fade" data-aos-duration="2000" data-aos-delay="400">
                            Live for <br> 
                            Create & Share.
                        </p>
                    </div>
                    <div class="bottom">
                        <div class="card" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">
                            <p class="title">Name</p>
                            <div class="content-wrapper">
                                <p class="content">江宇弘 (Taiwan)</p>
                                <p class="content">Chaing, Yu Houng</p>
                                <p class="content">Rex / Proladon</p>
                            </div>
                        </div>
                        <div class="card" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="500">
                            <p class="title">Contact</p>
                            <div class="content-wrapper">
                                <p class="content">Proladon@gmail.com</p>
                                <p class="content">Discord：Proladon#7525</p>
                                <p class="content">Line：Proladon</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="right-inpanel">
                    <img class="icon" src="../assets/icon/P.png" alt=""  data-aos="flip-left" data-aos-duration="1500" data-aos-delay="600">
                    <img class="icon" src="../assets/icon/down.png" alt=""  data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style lang="scss" scoped>
    .about {
        margin: 0;
        width: 100%;
        height: 100vh;
        overflow-y: hidden;
        background-color: rgb(23, 34, 42);
        background-image: url('../assets/img/pretty-sky.jpeg');
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    p.title{
            font-size: 1.25vw;
            font-family: consolas;
            text-align: left;
    }
    p.content{
            font-size: 1vw;
            font-family: consolas;
            text-align: left;
    }

    .content-wrapper{
        padding-top: 2vh;
    }

    .panel{
        width: 80%;
        height: 80%;
        background: #E0E0E0;
        opacity: 70%;
        display: flex;
        align-items: center;        

        .inpanel-wrapper{
            width: 85%;
            height: 85%;
            margin: 0 auto;
            display: flex;
        }

        .left-inpanel{
            width: 80%;
            height: 100%;
            display: flex;
            flex-direction: column;

            .top{
                width: 100%;
                height: 30%;
                
                #section2{
                    margin-top: 2vw;
                }
            }
            .mid{
                width: 100%;
                height: 40%;
                p{
                    font-size: 5vw;
                }
            }
            .bottom{
                width: 100%;
                height: 30%;
                display: flex;
                
                .card{
                    margin-right: 20%;
                    p.content{
                        line-height: 40px;
                    }
                }
            }
        }

        .right-inpanel{
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: space-between;
            
            .icon{
                width: 50%;
                padding: 10px;
            }
        }
    }
</style>