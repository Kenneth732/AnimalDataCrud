
// Add event listener to the form submission
document.querySelector('#animal-form').addEventListener('submit', (e) => {
  e.preventDefault();

  // Get the input values
  const nameInput = document.querySelector('#nameInput').value;
  const imageInput = document.querySelector('#imageInput').value;
  const descriptionInput = document.querySelector('#descriptionInput').value;

  // Create a new animal object
  const newAnimal = {
    nameInput: nameInput,
    imageInput: imageInput,
    descriptionInput: descriptionInput,
    donations: 0
  };

  // Call the handlePostRequest function to send the POST request
  handlePostRequest(newAnimal);
});

// Function to handle rendering the fetched data
const handleDisplay = (data) => {
  const animalList = document.querySelector('#animal-list');

  // Clear any existing content
  animalList.innerHTML = '';

  // Iterate over the data and generate HTML for each animal
  data.forEach(animal => {
    const animalItem = document.createElement('li');
    animalItem.classList.add('card');
    animalItem.innerHTML = `
      <h3>${animal.nameInput}</h3>
      <img src="${animal.imageInput}" alt="${animal.name}">
      <p>${animal.descriptionInput}</p>
      <p>Donations: ${animal.donations}</p>
      <button class="editBtn" data-id="${animal.id}">Edit</button>
      <button class="donateBtn" data-id="${animal.id}">Donation</button>
      <button class="deleteBtn" data-id="${animal.id}">Delete</button>
    `;

};

