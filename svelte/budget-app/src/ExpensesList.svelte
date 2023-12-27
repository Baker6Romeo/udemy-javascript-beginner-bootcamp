<script>
  import Expense from "./Expense.svelte";
  import SectionTitle from "./Title.svelte";

  export let expenses = [];
  export let removeExpense;
</script>

<section>
  <SectionTitle title="expense list" />
  <ul>
    {#each expenses as expense}
      <Expense {...expense} {removeExpense} />
    {:else}
      <h2>currently you have no expenses</h2>
    {/each}
  </ul>
</section>

<style>
  h2 {
    text-transform: capitalize;
  }
</style>
