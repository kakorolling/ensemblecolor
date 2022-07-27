<script>
    import { gameSequence } from "../store";
</script>

<main>
    <div class="container">
        <div class="title">앙캐 이미지컬러 맞추기</div>
        <img class="idxBg" src="./src/assets/indexBg.jpg" alt="img" />
        <div class="text">
            답은 이름만, 갤별명 인정 안함<br />
            (ex. 스바루, 호쿠토, 마코토, 마오)<br />
            타이머 4분
        </div>
        <button
            id="start"
            on:click={() => {
                $gameSequence = 1;
            }}>시작</button
        >
    </div>
</main>

<style>
    .title {
        margin: auto;
        margin-top: 30px;
        width: 500px;
        text-align: center;
        font-size: 20pt;
        font-weight: 600;

        padding: 20px;
        border: 2px solid #000;
        border-radius: 10px;
    }

    .idxBg {
        width: 80%;
        margin: auto;
        margin-top: 20px;
        display: block;
    }

    .text {
        margin-top: 40px;
        font-size: 14pt;
        text-align: center;
    }

    #start {
        margin: auto;
        margin-top: 50px;
        display: block;
        padding: 10px 20px 10px 20px;
        font-size: 20pt;
        background-color: #fff;
        border: 2px solid #000;
        border-radius: 10px;
    }

    #start:hover {
        transition: all 0.5s;
        background-color: #ccc;
    }

    #start:active {
        background-color: #bbb;
    }
</style>
