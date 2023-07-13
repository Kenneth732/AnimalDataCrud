# AnimalDataCrud
Title: Simple CRUD Animal Adoption Website - HTML, CSS, and JavaScript Project

Introduction:
The Simple CRUD Animal Adoption Website project is a beginner-friendly application built using HTML, CSS, and JavaScript. It demonstrates the implementation of CRUD operations (Create, Read, Update, Delete) for managing animal data. By utilizing the Fetch API, this project allows users to add, view, update, and delete animal information. It serves as an educational resource for individuals interested in learning about CRUD operations and data manipulation using the Fetch API.

Code Description:
The provided code snippet showcases the essential CRUD operations in the context of an animal adoption website.

1. Creating an Animal:
An event listener is added to the form submission of the animal. When the form is submitted, the event is intercepted, preventing the default form submission behavior. The input values for the animal's name, image URL, and description are retrieved.

A new animal object is created, encapsulating the input values along with an initial donation count of 0. This object represents the animal to be added.

The `handlePostRequest` function is called, simulating the handling of a POST request using the Fetch API. It sends the new animal data as a JSON payload to a specific API endpoint. However, the implementation of this function is not provided in the code snippet.

2. Reading and Displaying Animals:
The `handleRenderFetch` function is responsible for fetching and rendering the animal data from a server. It uses the Fetch API to send a GET request to the API endpoint and retrieve the animal data in JSON format.

Once the response is received, it is converted to JSON using the `response.json()` method. The `handleDisplay` function is then called, passing the JSON data as an argument. However, the actual implementation of the `handleDisplay` function is not provided in the code snippet.

3. Updating and Deleting Animals:
Event listeners are attached to the edit, donate, and delete buttons within each animal item.

The edit button's event listener prompts the user for new values for the animal's name, image URL, and description. The `handleEditRequest` function is then called to simulate the handling of a PATCH request, updating the animal with the new values.

The donate button's event listener increases the donation count for the corresponding animal by 10. The `handleDonateRequest` function simulates the handling of a PATCH request to update the donation count.

The delete button's event listener triggers the `handleDeleteRequest` function, simulating the handling of a DELETE request, removing the animal from the list.

Conclusion:
The Simple CRUD Animal Adoption Website project provides a basic implementation of CRUD operations using HTML, CSS, and JavaScript. By incorporating the Fetch API, this project allows users to create, read, update, and delete animal data. Developers can expand upon this project by implementing the missing functions (`handleDisplay`, `handlePostRequest`, etc.) to achieve a fully functional animal adoption website. It serves as an excellent learning resource for individuals interested in understanding CRUD operations and utilizing the Fetch API for data manipulation in web development.
