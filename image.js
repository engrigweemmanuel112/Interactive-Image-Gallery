 
 // Function to add an image to the gallery
 function addImage() {
  const imageInput = document.getElementById('imageInput').value;
  if (imageInput) {
      const gallery = document.getElementById('gallery');

      // Create a new div for the gallery item
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');

      // Create an img element and set its src attribute
      const img = document.createElement('img');
      img.src = imageInput;

      // Create a remove button
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.classList.add('remove-button');
      removeButton.onclick = () => gallery.removeChild(galleryItem);

      // Append the img and remove button to the gallery item div
      galleryItem.appendChild(img);
      galleryItem.appendChild(removeButton);

      // Append the gallery item div to the gallery
      gallery.appendChild(galleryItem);

      // Clear the input field
      document.getElementById('imageInput').value = '';
  } else {
      alert('Please enter an image URL.');
  }
}

// Add event listener to the add image button
document.getElementById('addImageButton').addEventListener('click', addImage);
