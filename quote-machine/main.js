const newQuoteButton = document.querySelector('.new-quote');
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'

newQuoteButton.addEventListener('click', getQuote);

function getQuote() {
    fetch(endpoint)
    .then(response => response.json())
    .then(data => displayQuote(data.message))
    .catch(() => console.log("There was an error."))
}

function displayQuote(quote) {
    var quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

getQuote();