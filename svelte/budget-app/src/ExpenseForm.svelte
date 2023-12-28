<script>
  import Title from "./Title.svelte";

  let name = "";
  let amount = null;
</script>

<section class="form">
  <Title title="add expense" />
  <button class="close-btn" type="button"
    ><i class="fas fa-times" />close</button
  >
  <form class="expense-form">
    <div class="form-control">
      <label for="name">name</label>
      <input type="text" id="name" bind:value={name} />
    </div>
    <div class="form-control">
      <label for="amount">amount</label>
      <input type="number" id="amount" bind:value={amount} />
    </div>
    <p class="form-empty">please fill out all form fields</p>
    <button class="btn btn-block" type="submit">add expense</button>
  </form>
</section>
