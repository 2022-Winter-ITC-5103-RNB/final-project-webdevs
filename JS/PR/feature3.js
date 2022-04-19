//preload images
var images = new Array();

function preloadImage(){

    for (i=0; i < arguments.length; i++){

         images[i] = new Image();

        images[i] = preloadImage.arguments[i];

    }

}
 preloadImage("6.webp", "5.jpg", "1.jpg");
