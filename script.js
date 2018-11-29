function myFunction(imgs) {
    // Get the expanded image
    var expandImg = document.getElementById("expandedImg");
    // Get the image text
    var imgText = document.getElementById("imgtext");
    // Use the same src in the expanded image as the image being clicked on from the grid
    expandImg.src = imgs.src;
    // Use the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
}

/* 
Allikas: https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
Kuna kumbki meist javascriptiga varasemalt kokku ei olnud puutunud,
siis võtsime internetist abiks ülaltoodud skripti. Skripti funktsionaalsust
ei muutnud, aga muutsime oluliselt cssi ja natuke htmli osa, et meie 
lahendus töötaks meile sobivamalt.
*/