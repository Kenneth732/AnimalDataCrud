
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

    const deleteButton = animalItem.querySelector('.deleteBtn');
    const editButton = animalItem.querySelector('.editBtn');
    const donateBtn = animalItem.querySelector('.donateBtn');

    deleteButton.addEventListener('click', () => {
      const animalId = deleteButton.dataset.id;
      handleDeleteRequest(animalId);
    });

    editButton.addEventListener('click', () => {
      const animalId = editButton.dataset.id;
      const updatedAnimal = {
        nameInput: prompt('Enter the new name:', animal.nameInput),
        imageInput: prompt('Enter the new image URL:', animal.imageInput),
        descriptionInput: prompt('Enter the new description:', animal.descriptionInput),
        donations: animal.donations
      };
      handleEditRequest(animalId, updatedAnimal);
    });

    donateBtn.addEventListener('click', () => {
      const animalId = donateBtn.dataset.id;
      handleDonateRequest(animalId);
    });

    animalList.appendChild(animalItem);
  });
};

// Function to handle fetching and rendering the data
const handleRenderFetch = () => {
  fetch('http://localhost:3000/animalsData')
    .then(res => res.json())
    .then(data => handleDisplay(data))
    .catch(error => console.error(error));
};

// Function to handle the POST request
const handlePostRequest = (animal) => {
  fetch('http://localhost:3000/animalsData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(animal)
  })
    .then(() => {
      // Reset the form fields
      document.querySelector('#nameInput').value = '';
      document.querySelector('#imageInput').value = '';
      document.querySelector('#descriptionInput').value = '';

      // Refresh the animal list by re-rendering the data
      handleRenderFetch();
    })
    .catch(error => console.error(error));
};

// Function to handle the DELETE request
const handleDeleteRequest = (animalId) => {
  fetch(`http://localhost:3000/animalsData/${animalId}`, {
    method: 'DELETE'
  })
    .then(() => {
      // Refresh the animal list by re-rendering the data
      handleRenderFetch();
    })
    .catch(error => console.error(error));
};
