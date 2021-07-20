function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted Form");
    const form = document.querySelector("form");
    form.innerHTML = "<h3>Submitted</h3>";
  }

function handleNameChange() {
     console.log('name changed', event.target.value)
}

// const hero = document.getElementById("hero");
// hero.innerText = "This is my new Hero Title";
// const links = document.getElementsByClassName("menu-link");
// links[1].style.color = "white";
// const footer = document.querySelector("footer");
// footer.style.backgroundColor = "grey";
