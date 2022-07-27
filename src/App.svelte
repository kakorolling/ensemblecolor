<script>
    import Answer from "./lib/Answer.svelte";
    import Game from "./lib/Game.svelte";
    import Index from "./lib/index.svelte";
    import { gameSequence } from "./store";
</script>

<main>
    {#if $gameSequence == 0}
        <Index />
    {:else if $gameSequence == 1}
        <Game />
    {:else if $gameSequence == 2}
        <Answer />
    {/if}
</main>
