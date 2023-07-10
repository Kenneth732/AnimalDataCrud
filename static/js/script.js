
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


};

