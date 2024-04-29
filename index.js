const quote = async function () {
  const res = await fetch("https://dummyjson.com/quotes");

  const data = await res.json();

  console.log(data);

  i = 0;
  document.querySelector(".new").addEventListener("click", function () {
    if (i < 30) {
      document.querySelector(".load1").textContent = "";
      document.querySelector(".load2").textContent = "";
      document.querySelector(".load1").textContent = data.quotes[i].quote;
      document.querySelector(".load2").textContent = data.quotes[i].author;
      i += 1;
    } else {
      i = 0;
    }
  });

  document.querySelector(".tweet").addEventListener("click", function () {
    window.open("https://twitter.com/i/flow/login");
  });
};

quote();
