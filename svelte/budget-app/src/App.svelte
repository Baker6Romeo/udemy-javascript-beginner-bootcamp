<script>
  import { setContext } from "svelte";
  // components
  import ExpenseForm from "./ExpenseForm.svelte";
  import ExpensesList from "./ExpensesList.svelte";
  import Navbar from "./Navbar.svelte";
  import Total from "./Total.svelte";

  // data
  import expenseData from "./expenses";

  // variables
  let expenses = [...expenseData];
  $: total = expenses.reduce((acc, curr) => {
    return (acc += curr.amount);
  }, 0);

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
  <ExpenseForm />
  <Total title="Total Expenses" {total} />
  <ExpensesList {expenses} />
  <button
    type="button"
    class="btn btn-primary btn-block"
    on:click={clearExpenses}
    >clear expenses
  </button>
</main>
