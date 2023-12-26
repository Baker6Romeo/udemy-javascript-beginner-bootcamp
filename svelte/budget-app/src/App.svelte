<script>
	import expenseData from "./expenses"
	import ExpensesList from "./ExpensesList.svelte"
	import Navbar from "./Navbar.svelte";

	let expenses = [...expenseData];
</script>

<!-- <style></style> -->
<!-- CSS/STYLING -->

<Navbar/>
<ExpensesList expenses = {expenses}/>