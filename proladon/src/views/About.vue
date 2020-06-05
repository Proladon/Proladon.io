<template>
    <div class="about">
        <div class="page-wrapper">
            <div class="section-header">
                <div class="img-wrapper">
                    <img id="oreki" src="@/assets/img/Oreki.png">
                </div>
                <div class="intro">
                    <p>Proladon / Rex / 綠茶 (Taiwan)</p>
                    <p>
                        Language: *Chinese / **English
                    </p>
                    <br>
                    <p>
                        <strong>Tatung University (TTU) :</strong> Industrial Design (Master)
                    </p>
                    <p>
                        <strong>Oriental Institute of Technology (OIT) :</strong> Industrial Design<br>
                    </p>
                    <p>
                        <strong>Songshan High School of Commerce and Home Economics (SSVS) :</strong> Advertising Design
                        Section<br>
                    </p>
                </div>
            </div>

            <div class="exp">
                <div class="card-wrapper">
                    <div class="card">
                        <h1>Internship</h1>
                        <p>Cooler Master (Industrial Designer)</p>
                    </div>

                    <div class="card">
                        <h1>Work Shop</h1>
                        <p>福興集團 | 3F Zipper</p>
                        <p>華宇錚鎣集團 | 華宇織造 HUAYU TEXTILE</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>
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
    }

    #oreki {
        width: 250px;
        padding-left: 5vw;
    }

    .section-header {
        padding-top: 50px;
        width: 100%;
        /* height: 30%; */
        color: white;
        font-size: 1.5vw;
        display: flex;
        flex-wrap: wrap;
    }

    .section-header p {
        padding-left: 5vw;
        text-align: left;
    }

    .exp {
        width: 100%;
        height: 60%;
        background-color: rgba(38, 38, 38, .85);
    }

    .card {
        margin: 20px;
        display: inline-block;
    }
</style>