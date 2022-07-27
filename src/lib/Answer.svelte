<script>
    import result0 from "../static/result0.jpg";
    import result1 from "../static/result1.jpg";
    import result2 from "../static/result2.jpg";
    import result3 from "../static/result3.jpg";
    import { score, gameSequence } from "../store";
</script>

<main>
    {#if $score == 0}
        <img src={result0} alt="img" />
    {:else if $score > 0 && $score <= 4}
        <img src={result1} alt="img" />
    {:else if $score > 4 && $score <= 9}
        <img src={result2} alt="img" />
    {:else}
        <img src={result3} alt="img" />
    {/if}
    <div id="resultText">당신의 점수는</div>
    <div id="result">{$score}/10</div>
    <button
        class="btn"
        on:click={() => {
            $gameSequence = 1;
        }}>다시하기</button
    >
</main>

<style>
    img {
        margin: auto;
        margin-top: 30px;
        top: 50px;
        width: 60%;
        display: block;
        z-index: -1;
    }
    #resultText {
        margin: auto;
        margin-top: 50px;
        font-size: 40pt;
        font-weight: 600;
        width: 500px;
        border: 2px solid #000;
        border-radius: 10px;
        text-align: center;
        background-color: rgba(256, 256, 256, 0.5);
    }
    #result {
        margin: auto;
        margin-top: 20px;
        text-align: center;
        font-size: 100pt;
        font-weight: 600;
    }
    .btn {
        margin: auto;
        margin-top: 50px;
        margin-bottom: 50px;
        display: block;
        padding: 10px 20px 10px 20px;
        font-size: 20pt;
        background-color: #fff;
        border: 2px solid #000;
        border-radius: 10px;
    }

    .btn:hover {
        transition: all 0.5s;
        background-color: #ccc;
    }

    .btn:active {
        background-color: #bbb;
    }
</style>
