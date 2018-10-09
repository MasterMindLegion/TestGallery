// Selects current img
let current = document.querySelector("#current");
// Selects all imgs
let imgs = document.querySelectorAll(".imgs img");
// Array for clicked imgs
let imgsHigh = [
  src = "photos/01.jpg",
  src = "photos/02.jpg",
  src = "photos/03.jpg",
  src = "photos/04.jpg",
  src = "photos/05.jpg",
  src = "photos/06.jpg",
  src = "photos/07.jpg",
  src = "photos/08.jpg",
  src = "photos/09.jpg",
  src = "photos/10.jpg",
  src = "photos/11.jpg",
  src = "photos/12.jpg", 
]

current.style.display = "none";

imgs.forEach(img => img.addEventListener("click", imgClick));
  function imgClick(e) { 
    current.style.display = "block";
    current.src = e.target.src.replace('thumbnails/', '');
   
 }
 


//  current.src = e.target.src.replace('thumbnails/', '');
  //  works
  // current.src = e.target.src;   
  //.includes("thumbnails/")

  
 



// REPLACING IMGS TO HIGHER RES BUT NOT THE CURRENT CLICKED ONE

// if(current.src .includes("thumbnails/") === true) {
//   document.getElementById("1").src = "photos/01.jpg";
//   document.getElementById("2").src = "photos/02.jpg";
//   document.getElementById("3").src = "photos/03.jpg";
//   document.getElementById("4").src = "photos/04.jpg";
//   document.getElementById("5").src = "photos/05.jpg";
//   document.getElementById("6").src = "photos/06.jpg";
//   document.getElementById("7").src = "photos/07.jpg";
//   document.getElementById("8").src = "photos/08.jpg";
//   document.getElementById("9").src = "photos/09.jpg";
//   document.getElementById("10").src = "photos/10.jpg";
//   document.getElementById("11").src = "photos/11.jpg";
//   document.getElementById("12").src = "photos/12.jpg";
 


// imgs.forEach(img => img.addEventListener("click", imgClick));
// function imgClick(e) { 
//  if(current.src .includes("thumbnails/") === true) {

//   document.getElementById("1").src=  "photos/01.jpg";
//   document.getElementById("2").src = "photos/02.jpg";
//   document.getElementById("3").src = "photos/03.jpg";
//   document.getElementById("4").src = "photos/04.jpg";
//   document.getElementById("5").src = "photos/05.jpg";
//   document.getElementById("6").src = "photos/06.jpg";
//   document.getElementById("7").src = "photos/07.jpg";
//   document.getElementById("8").src = "photos/08.jpg";
//   document.getElementById("9").src = "photos/09.jpg";
//   document.getElementById("10").src = "photos/10.jpg";
//   document.getElementById("11").src = "photos/11.jpg";
//   document.getElementById("12").src = "photos/12.jpg";
// }
//    current.src = e.target.src;   
// }


// CHANGING BOTTOM IMG WITH CURRENT IMG

// imgs.forEach(img => img.addEventListener("click", imgClick));
// function imgClick(e) { 
//  if( e.target.src = current.src .includes("thumbnails/") === true) {

//   document.getElementById("1").src=  "photos/01.jpg";
//   document.getElementById("2").src = "photos/02.jpg";
//   document.getElementById("3").src = "photos/03.jpg";
//   document.getElementById("4").src = "photos/04.jpg";
//   document.getElementById("5").src = "photos/05.jpg";
//   document.getElementById("6").src = "photos/06.jpg";
//   document.getElementById("7").src = "photos/07.jpg";
//   document.getElementById("8").src = "photos/08.jpg";
//   document.getElementById("9").src = "photos/09.jpg";
//   document.getElementById("10").src = "photos/10.jpg";
//   document.getElementById("11").src = "photos/11.jpg";
//   document.getElementById("12").src = "photos/12.jpg";
// }
//  e.target.src =   current.src  
// }

// REPLACE SOURCE BY LOOPING SOURCE THORUGH ARRAY

// for ( let i = 0; i <= imgsHigh.length.src; i += 1) {
//   imgs.setAttribute("current.src", imgsHigh[i].src)
//   current.src =  imgsHigh[i].src;
//   imgsHigh[i].src = e.target.src 
// }


//TRY TO REPLACE SOURCE BY DELETING PART OF PATH

// if(e.target.src .includes("thumbnails/") === true) {
//   NOW DELETE THUMBNAILS FROM SOURCE 
//   delete "thumbnails/";
// }
//  e.target.src = current.src