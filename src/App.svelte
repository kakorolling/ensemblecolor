<script>
    import Answer from "./lib/Answer.svelte";
    import Game from "./lib/Game.svelte";
    import Gate from "./lib/Gate.svelte";
    import { gameSequence } from "./store";
</script>

<main>
    {#if $gameSequence == 0}
        <Gate />
    {:else if $gameSequence == 1}
        <Game />
    {:else if $gameSequence == 2}
        <Answer />
    {/if}
</main>
