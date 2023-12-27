<script>
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
</script>

<!-- <style></style> -->
<!-- CSS/STYLING -->

<Navbar />
<main class="content">
  <ExpensesList {expenses} {removeExpense} />
</main>
