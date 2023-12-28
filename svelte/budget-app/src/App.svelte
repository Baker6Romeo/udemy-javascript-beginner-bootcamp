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

  let setId = null;
  let setName = "";
  let setAmount = null;

  // functions
  function addExpense({ name, amount }) {
    let expense = { id: Math.random() * Date.now(), name, amount };
    expenses = [expense, ...expenses];
  }
  function clearExpenses() {
    expenses = [];
  }
  function removeExpense(id) {
    expenses = expenses.filter((expense) => expense.id != id);
  }
  function setModifyExpense(id) {
    let expense = expenses.find((expense) => expense.id === id);

    setId = expense.id;
    setName = expense.name;
    setAmount = expense.amount;
  }
  setContext("removeExpense", removeExpense);
  setContext("setExpense", setModifyExpense);
</script>

<!-- <style></style> -->
<!-- CSS/STYLING -->

<Navbar />
<main class="content">
  <ExpenseForm {addExpense} />
  <Total title="Total Expenses" {total} />
  <ExpensesList {expenses} />
  <button
    type="button"
    class="btn btn-primary btn-block"
    on:click={clearExpenses}
    >clear expenses
  </button>
</main>
