
// Save Preference

function savePreference(pic){

  // Add Weight To Image
  // CHANGE IMAGES

  console.log("PIC " + pic + " CHOSEN")


  // RANDOMLY CHOOSE A FEATURE
  var feature = Math.floor(Math.random()*(5));

  // EYES
  if (feature == 0){
    document.getElementById("img-1").src = "img/eyes/eyes1.jpeg";
    document.getElementById("img-2").src = "img/eyes/eyes2.jpeg";
    console.log(0);
  }

  // MOUTH
  if (feature == 1){
    document.getElementById("img-1").src = "img/mouth/mouth1.jpeg";
    document.getElementById("img-2").src = "img/mouth/mouth2.jpeg";
    console.log(1);
  }

  // NOSE
  if (feature == 2){
    document.getElementById("img-1").src = "img/nose/nose1.jpeg";
    document.getElementById("img-2").src = "img/nose/nose2.jpeg";
    console.log(2);
  }

  // EARS
  if (feature == 3){
    document.getElementById("img-1").src = "img/ears/ears1.jpeg";
    document.getElementById("img-2").src = "img/ears/ears2.jpeg";
    console.log(3);
  }

  // FOREHEAD
  if (feature == 4){
    document.getElementById("img-1").src = "img/forehead/forehead1.jpeg";
    document.getElementById("img-2").src = "img/forehead/forehead2.jpeg";
    console.log(4);
  }

} // End savePerference
