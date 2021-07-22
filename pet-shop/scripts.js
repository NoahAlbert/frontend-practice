function handleSubmit(event) {
    event.preventDefault();
    console.log("Submitted Form");
    const form = document.querySelector("form");
    console.log(form.elements.name.value)
    const newPet = {
      name: form.elements.name.value,
      type: form.elements.type.value,
      color: form.elements.color.value,
      age: form.elements.age.value,
    }    
    console.log(newPet)
    fetch('https://na-pet-boutique.web.app/pets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPet)
    })
    .then(res => res.json())
    .then(json => {
      form.innerHTML = `<h3>${json.message}</h3>`
    //   getPets()
    })
    .catch(err => form.innerHTML = '<h3>Error Sending Pet</h3>')
}