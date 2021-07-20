function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted Form");
    const form = document.querySelector("form");
    form.innerHTML = "<h3>Thanks</h3>";
  }

function handleNameChange() {
     console.log('name changed', event.target.value)
}

hero.innerText = 'here is my new hero title'
const footer = document.querySelector('footer')
footer.style.backgroundColor = 'grey'
