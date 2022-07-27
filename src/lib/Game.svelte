<script>
    import { onMount } from "svelte";
    import { score, gameSequence } from "../store";

    var colorDic = {
        "#fff3b8": ["텐쇼인에이치", "에이치"],
        "#a1d8e2": ["히비키와타루", "와타루"],
        "#f5b2b2": ["히메미야토리", "토리"],
        "#3e62ad": ["후시미유즈루", "유즈루"],
        "#0068b7": ["히다카호쿠토", "호쿠토"],
        "#f3981d": ["아케호시스바루", "스바루"],
        "#65ab31": ["유우키마코토", "마코토"],
        "#941f57": ["이사라마오", "마오"],
        "#e60033": ["모리사와치아키", "치아키"],
        "#008db7": ["신카이카나타", "카나타"],
        "#302833": ["나구모테토라", "테토라"],
        "#00533f": ["타카미네미도리", "미도리"],
        "#ffdc00": ["센고쿠시노부", "시노부"],
        "#ba2636": ["아마기히이로", "히이로"],
        "#fff1cf": ["시라토리아이라", "아이라"],
        "#522f60": ["아야세마요이", "마요이"],
        "#7ebea5": ["카제하야타츠미", "타츠미"],
        "#a73836": ["란나기사", "나기사"],
        "#b8d200": ["토모에히요리", "히요리"],
        "#74325c": ["사에구사이바라", "이바라"],
        "#192f60": ["사나자미쥰", "쥰"],
        "#e3acae": ["이츠키슈", "슈"],
        "#006a6c": ["카게히라미카", "미카"],
        "#eb6ea0": ["아오이히나타", "히나타"],
        "#00a1e9": ["아오이유우타", "유우타"],
        "#b7282e": ["아마기린네", "린네"],
        "#507ea4": ["시이나니키", "니키"],
        "#89c3eb": ["HiMERU", "히메루", "토죠카나메"],
        "#f4b3c2": ["오우카와코하쿠", "코하쿠"],
        "#47266e": ["사쿠마레이", "레이"],
        "#fdd35c": ["하카제카오루", "카오루"],
        "#c9caca": ["오오가미코가", "코가"],
        "#915da3": ["오토가리아도니스", "아도니스"],
        "#ffec47": ["니토나즈나", "나즈나"],
        "#ed6d35": ["텐마미츠루", "미츠루"],
        "#eedcb3": ["마시로토모야", "토모야"],
        "#cab8d9": ["시노하지메", "하지메"],
        "#316745": ["하스미케이토", "케이토"],
        "#e83929": ["키류쿠로", "쿠로"],
        "#5654a2": ["칸자키소마", "소마"],
        "#942343": ["스오우츠카사", "츠카사"],
        "#ec6d51": ["츠키나가레오", "레오"],
        "#bbdbf3": ["세나이즈미", "이즈미"],
        "#001e43": ["사쿠마리츠", "리츠"],
        "#edde7b": ["나루카미아라시", "아라시"],
        "#00608d": ["아오바츠무기", "츠무기"],
        "#d70035": ["사카사키나츠메", "나츠메"],
        "#fff352": ["하루카와소라", "소라"],
        "#622d18": ["미케지마마다라", "마다라"],
    };

    let inputArr = [];
    const answer = () => {
        $score = 0;
        inputArr.forEach((input, i) => {
            input = input.split(" ").join("");
            const answers = colorDic[randKeys[i]];
            if (answers.includes(input)) {
                ++$score;
            }
        });
        $gameSequence = 2;
    };

    const randCount = 10;
    const randKeys = Object.keys(colorDic)
        .sort(() => Math.random() - Math.random())
        .slice(0, randCount);

    let count = 100;
    var min = 0;
    var sec = 0;
    onMount(() => {
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
            {#each randKeys as key, i}
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
