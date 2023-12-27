<script>
    export let id;
    export let name = '';
    export let amount = 0;
</script>

<article class="single-expense">
    <div class="expense-info">
        <h2>{name}
            <button class="amount-btn">
                <i class="fas fa-caret-down"/>
            </button>
        </h2>
        <h4>amount: ${amount}</h4>
    </div>
    <div class="expense-buttons">
        <button class="expense-btn edit-btn">
            <i class="fas fa-pen"/>
        </button>
        <button class="expense-btn delete-btn">
            <i class="fas fa-trash"/>
        </button>
    </div>
</article>