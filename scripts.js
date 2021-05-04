var nextVideos = [
  {
    "thumbnail": "images/selfie.jpg",
    "title": "Self Esteem Issues",
    "username": "selfiequeen_83",
    "views":"1.7M views • 2 years ago",
    "link":"selfesteem.html"
  },
  {
    "thumbnail": "images/oversonsumption.jpg",
    "title": "Over Consumption",
    "username": "makeuplover101",
    "views":"658K views • 1 years ago",
    "link":"over.html"
  },
  {
    "thumbnail": "images/racism.jpg",
    "title": "Justification of Racism and Inappropriate Behavior",
    "username": "exhausted_girl23",
    "views":"2.7M views • 3 years ago",
    "link":"racism.html"
  },
  {
    "thumbnail": "images/beautystandard.jpg",
    "title": "Upholding White Beauty Standards",
    "username": "tired_blackgirl_123",
    "views":"3.7M views • 3 years ago",
    "link":"beautystand.html"
  }
];
//taking the images
const carouselImages = document.querySelectorAll('.carouselContainer img');
//the buttons
const prevBtn = document.querySelector('#prevButton');
const nextBtn = document.querySelector('#nextButton');
let counter = 1; //starting at 1

let output = document.getElementById('rightSideJSON');
for (var i = 0; i< nextVideos.length; i++){
  makeRightSide(nextVideos[i]);
}
//the side videos are done using a json collection
function makeRightSide(partOfDatabase){

  let newDiv = document.createElement("DIV");
  newDiv.classList.add("nextVid");


  let leftDiv = document.createElement("DIV");
  leftDiv.classList.add("leftDiv");

  let theImage = document.createElement("IMG");
  theImage.classList.add("theThumbnail");
  theImage.src = partOfDatabase["thumbnail"];
  leftDiv.appendChild(theImage);
  newDiv.appendChild(leftDiv);

  let rightDiv = document.createElement("DIV");
  rightDiv.classList.add("rightDiv");

  let theTitle  = document.createElement("A");
  theTitle.innerText = partOfDatabase["title"];
  theTitle.href = partOfDatabase["link"];
  theTitle.classList.add("vid_title");
  rightDiv.appendChild(theTitle);

  let theUsername  = document.createElement("P");
  theUsername.innerText = partOfDatabase["username"];
  theUsername.classList.add("vid_username");
  rightDiv.appendChild(theUsername);

  let theViews  = document.createElement("P");
  theViews.innerText = partOfDatabase["views"];
  theViews.classList.add("vid_views");
  rightDiv.appendChild(theViews);

  newDiv.appendChild(rightDiv);
  output.appendChild(newDiv);

}

//slide shOW, followed the w3 schools slideshow tutorial
nextBtn.addEventListener('click', ()=>{
  if(counter >carouselImages.length){
    counter = 1; //resetting the counter to 1 if we went through all the images in carouselimg
  }
  for (var i=0; i<carouselImages.length; i++){
    carouselImages[i].style.display = "none";

  }
  carouselImages[counter-1].style.display = "flex";
  counter++;
});

prevBtn.addEventListener('click', ()=>{

  if(counter<1){ //resetting the reverse counter
    counter = carouselImages.length;
  }
  for (var i=0; i<carouselImages.length; i++){
    carouselImages[i].style.display = "none";
  }
  carouselImages[counter-1].style.display = "flex";
  counter--;
});
