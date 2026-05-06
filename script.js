<script>
// Filter menu logic
function filterMenu(type){
  let items = document.getElementsByClassName("card");
  for(let i=0; i<items.length; i++){
    items[i].style.display = (type=="all" || items[i].classList.contains(type)) ? "inline-block" : "none";
  }
}

// Booking logic
function bookTable(event) {
  // Prevent the page from refreshing on form submission
  event.preventDefault();
  
  const name = document.getElementById("customerName").value;
  const date = document.getElementById("resDate").value;
  const time = document.getElementById("resTime").value;

  if(name && date && time) {
    alert(`Grazie, ${name}! Your table is booked for ${date} at ${time}.`);
    // Optional: Clear the form after booking
    event.target.reset();
  } else {
    alert("Please fill in all the details.");
  }
}
</script>
