document.getElementById("year").textContent = new Date().getFullYear();

function handleSubmit(e){
  e.preventDefault();

  const status = document.getElementById("form-status");
  status.style.color = "#7dd3fc";
  status.textContent = "Message sent successfully. Thank you!";

  e.target.reset();
}
