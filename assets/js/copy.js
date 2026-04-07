document.querySelector(".copy-btn").addEventListener("click", function() {
  const code = document.getElementById("myCode").innerText;
  navigator.clipboard.writeText(code);
  this.innerText = "Copied!";
  setTimeout(() => this.innerText = "Copy", 2000);
});
