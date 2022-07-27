<script>
    import { onMount } from "svelte";
    import { score, gameSequence, colorDic, randKeys } from "../store";

    let inputArr = [];
    const answer = () => {
        $score = 0;
        inputArr.forEach((input, i) => {
            input = input.split(" ").join("");
            const answers = $colorDic[$randKeys[i]];
            if (answers.includes(input)) {
                ++$score;
            }
        });
        $gameSequence = 2;
    };

    const randCount = 10;
    $randKeys = Object.keys($colorDic)
        .sort(() => Math.random() - Math.random())
        .slice(0, randCount);

    let count = 100;
    var min = 0;
    var sec = 0;
    onMount(() => {
        window.scrollTo(0, 0);
        const counter = setInterval(() => {
            if (count == 0) {
                clearInterval(counter);
                answer();
                return;
            }
            --count;
            min = Math.trunc(count / 60);
            sec = count % 60;
        }, 1000);
    });
</script>

<main>
    <div class="container">
        <div id="timer">
            <ion-icon name="timer-outline" />
            <span id="timerText">{min}:{sec}</span>
        </div>

        <div>
            {#each $randKeys as key, i}
                <div class="color" style="background-color: {key};" />
                <input class="input" bind:value={inputArr[i]} />
            {/each}
        </div>
        <button id="submitBtn" on:click={answer}>제출</button>
    </div>
</main>

<style>
    .color {
        margin: auto;
        margin-top: 80px;
        width: 100px;
        height: 100px;
        border: 3px solid #000;
        border-radius: 50%;
    }

    .input {
        margin: auto;
        margin-top: 10px;
        display: block;
        width: 140px;
        height: 20px;
        border: 2px solid #000;
        border-radius: 5px;
    }
    ion-icon {
        font-size: 20pt;
    }
    #timer {
        position: fixed;
        top: 0%;
        left: calc(50% - 50px);
        height: 50px;
        width: 100px;
        background-color: rgba(127, 127, 127, 0.2);
        align-items: center;
        display: flex;
    }
    #timerText {
        font-size: 20pt;
        margin: auto;
        text-align: center;
    }

    #submitBtn {
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

    #submitBtn:hover {
        transition: all 0.5s;
        background-color: #ccc;
    }

    #submitBtn:active {
        background-color: #bbb;
    }
</style>
