async function handleQuote() {
  let display = document.querySelector(".display");

  display.innerHTML = "Loading...";
  let response = await fetch("https://dummyjson.com/quotes");
  let ds = await response.json();
  let size = ds.quotes.length;
  let index = Math.floor(Math.random() * size);

  display.innerHTML = ds.quotes[index].quote;
}
