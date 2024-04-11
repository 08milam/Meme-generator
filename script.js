


// SUBMISSIONS CONTENT
submissions = function(){
    topText = document.querySelector('#topText').value
        topParagraph.textContent = topText
    bottomText = document.querySelector("#bottomText").value
        bottomParagraph.textContent = bottomText
    urlImage = document.querySelector('#urlImage').value
        createImgTag.src = urlImage
}
// CREATE DIV TAG
creatediv = function(){
    main = document.querySelector('.main');
        div = document.createElement('div');
        div.setAttribute("class", "contentcontainer");
        main.appendChild(div);
};
// IMAGE CONTAINER
createImageContainer = function(){
    divImg = document.createElement('div');
    divImg.setAttribute("class", "imgContainer");
    div.appendChild(divImg);
};
// TOP CONTAINER
createTopContainer = function(){
    topTextContent = document.createElement('div');
    topTextContent.setAttribute("class", "topContainer");
    div.appendChild(topTextContent);
};
// TOP PARAGRAPH
creatTopParagraph= function(){
    topParagraph = document.createElement('p');
    topTextContent.appendChild(topParagraph);
};
// B0TTOM CONTAINER
createBottomContainer = function(){
    bottomTextContent = document.createElement('div');
    bottomTextContent.setAttribute("class", "bottomContainer");
    div.appendChild(bottomTextContent);
};
// BUTTON PARAGRAPH
createButtonParagraph = function(){
    bottomParagraph = document.createElement('p');
    bottomTextContent.appendChild(bottomParagraph);
};
// CERATE IMG TAG
createImg = function(){
    createImgTag = document.createElement('img');
    createImgTag.setAttribute('class', 'urlimage');
    divImg.appendChild(createImgTag);
};
// DELETE ITEM
drop = function(){
    createbutton = document.createElement("button");
    createbutton.setAttribute('class', "remove");
    createbutton.textContent = "x";
    div.appendChild(createbutton);
    createbutton.addEventListener('click', function(e){
        e.target.parentElement.remove(); 
    });
};

// IF FORM IS EMPTY
formValidation = function(){
// Check if the input value is empty or contains only whitespace
if (urlImage.value === "" ) {
    alert("Image input is empty. Please enter a value.")
        // If the input is empty
        if (bottomText.value === "") {
            // If the input is empty
            alert("bottom input is empty. Please enter a value.")
            if (topText.value === "") {
                // If the input is empty
                alert("Top input is empty. Please enter a value.")
               }
           }
    } else {
// TEST FUNCTIONS BELOW 
    creatediv();
    createTopContainer();
    creatTopParagraph();
    createBottomContainer();
    createButtonParagraph();
    createImageContainer();
    createImg();
    drop();
    submissions();
        }
}
// FORM SUBMISSION EVENT
const form = document.querySelector('#form');
form.addEventListener('submit' || 'keydown', function(e) {
  e.preventDefault();
  formValidation();
  function submitForm() {
}
});