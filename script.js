//Made By: Charles M Milam Jr | Date: 10-14-23 | Memegenerator.js
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

 // top text input
const topTextIN = document.querySelector("#topTextIN");
const topTextOUT = document.querySelector('#topTextOUT');
// buttom text input
const bottomTextIN = document.querySelector("#bottomtextIN");
const bottomTextOUT = document.querySelector('#bottomTextOUT');
// image input
const imageIN = document.querySelector("#imageIN");

function creatememe(topTextIN, bottomTextIN, imageIN){
    // all text output

    topTextOUT.innerText = topTextIN;
    bottomTextOUT.innerText = bottomTextIN;
    // image output
    let img = document.createElement('img');
    img.src = URL.createObjectURL(imageIN.files[0]);
    document.body.appendChild(img);
}

imageIN.addEventListener('change', () => {
    creatememe(topTextIN.value, bottomTextIN.value, imageIN);
})

 