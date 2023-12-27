<script>
  import { setContext } from "svelte";
  // components
  import ExpensesList from "./ExpensesList.svelte";
  import Navbar from "./Navbar.svelte";

  // data
  import expenseData from "./expenses";

  // variables
  let expenses = [...expenseData];

  // functions
  function removeExpense(id) {
    expenses = expenses.filter((expense) => expense.id != id);
  }
  function clearExpenses() {
    expenses = [];
  }
  setContext("removeExpense", removeExpense);
</script>

<!-- <style></style> -->
<!-- CSS/STYLING -->

<Navbar />
<main class="content">
  <ExpensesList {expenses} />
  <button
    type="button"
    class="btn btn-primary btn-block"
    on:click={clearExpenses}
    >clear expenses
  </button>
</main>
