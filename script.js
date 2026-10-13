const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour < 12) {
  greeting.textContent = "Good Morning! Welcome to my website 👋";
} else if (hour < 18) {
  greeting.textContent = "Good Afternoon! Welcome to my website 👋";
} else {
  greeting.textContent = "Good Evening! Welcome to my website 👋";
}

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark")
    ? "Light Mode"
    : "Dark Mode";
});


const typing = document.getElementById("typing");
let i = 0;

function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}
type();
const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText("dashshubhrajyoti865838@gmail.com");
  copyBtn.textContent = "Copied!";
  setTimeout(() => (copyBtn.textContent = "Copy Email"), 2000);
});

