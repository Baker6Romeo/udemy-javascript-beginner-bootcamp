<script>
    import Expense from "./Expense.svelte"

    export let expenses = [];
</script>

<ul>
    {#each expenses as expense}
    <Expense/>
    {/each}
</ul>