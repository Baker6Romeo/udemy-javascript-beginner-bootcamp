<script>
  import { getContext } from "svelte";
  export let id;
  export let name = "";
  export let amount = 0;
  const removeExpense = getContext("removeExpense");
  const setModifyExpense = getContext("setExpense");

  let displayAmount = false;

  function toggleAmount() {
    displayAmount = !displayAmount;
  }
</script>

<article class="single-expense">
  <div class="expense-info">
    <h2>
      {name}
      <button class="amount-btn" on:click={toggleAmount}>
        <i class="fas fa-caret-down" />
      </button>
    </h2>
    {#if displayAmount}
      <h4>amount: ${amount}</h4>
    {/if}
  </div>
  <div class="expense-buttons">
    <button class="expense-btn edit-btn" on:click={() => setModifyExpense(id)}>
      <i class="fas fa-pen" />
    </button>
    <button class="expense-btn delete-btn" on:click={() => removeExpense(id)}>
      <i class="fas fa-trash" />
    </button>
  </div>
</article>
