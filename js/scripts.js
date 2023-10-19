// constants for query selector
// Reference to the paragraph element to display the student ID
const studentIdElem = document.getElementById('myStudentId');
// Reference to the input element where user enters a number for custom color
const customNumberElem = document.getElementById('customNumber');
// Reference to the button to change background color based on custom input
const custColorBtn = document.querySelector('.custColor');
// Reference to the button to change background color based on a random number
const randColorBtn = document.querySelector('.randColor');
// Reference to the dropdown select element for image selection
const imageSelectElem = document.getElementById('imageSelect');
// Reference to the image element that displays the selected image
const imagesElem = document.getElementById('images');

// function to change bg color from user input and add student id
function changeCustomColor() {  // Function to change background color based on user input and display student ID
    let number = customNumberElem.value;
    studentIdElem.textContent = 'Student ID: 200520350'; // replace with the actual student ID


    if (number < 0 || number > 100) {  // Function to change background color based on a random number between 1 and 100
        alert('Please enter a number between 1 and 100.');
        document.body.style.backgroundColor = 'red';
    } else if (number >= 0 && number <= 20) {
        document.body.style.backgroundColor = 'green';
    } else if (number > 20 && number <= 40) {
        document.body.style.backgroundColor = 'blue';
    } else if (number > 40 && number <= 60) {
        document.body.style.backgroundColor = 'orange';
    } else if (number > 60 && number <= 80) {
        document.body.style.backgroundColor = 'purple';
    } else if (number > 80 && number <= 100) {
        document.body.style.backgroundColor = 'yellow';
    }

}

// function to change bg color from random no.
function changeRandomColor() { // Function to change background color based on a random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    customNumberElem.value = randomNumber;
    changeCustomColor();
}

// function to generate options for select list
function addList() {// Function to populate the image selection dropdown
    const exampleImages = [
        { label: 'Image 1', url: 'img/img1.jpg' },
        { label: 'Image 2', url: 'img/img2.jpg' },
        { label: 'Image 3', url: 'img/img3.jpg' },
        { label: 'Image 4', url: 'img/img4.jpg' },
        { label: 'Image 5', url: 'img/img5.jpg' }
    ];

    if (imageSelectElem.children.length <= 1) {  // To prevent adding the list multiple times
        for (let image of exampleImages) {
            let option = document.createElement('option');
            option.value = image.url;
            option.textContent = image.label;
            imageSelectElem.appendChild(option);
        }
    }
}

// function to change image
function changeImage() { // Function to display the image selected from the dropdown
    const imageElement = document.querySelector('#images');
    const selectedImage = document.querySelector('#imageSelect').value;
    if (selectedImage) {
        imageElement.src = selectedImage;
    } else {
        imageElement.src = "";
    }
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener('click', changeCustomColor);
randColorBtn.addEventListener('click', changeRandomColor);
imageSelectElem.addEventListener('click', addList);

// event listeners for on change event of select
imageSelectElem.addEventListener('change', changeImage);
