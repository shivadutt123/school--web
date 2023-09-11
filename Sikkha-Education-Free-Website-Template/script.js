// function to show image when we click on a image
function showImage(imageSrc) {
    let popupImage = document.getElementById("popupImage");
    popupImage.src = imageSrc;
    
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "block";
    document.body.style.overflow = "hidden";
    }
    // function to hide the image when we click on cross button
    function closeImage() {
    let imagePopup = document.getElementById("imagePopup");
    imagePopup.style.display = "none";
    document.body.style.overflow = "auto";
    }
    let myWindow;

function openWin() {
  myWindow = window.open("", "myWindow", "width=200, height=100");
}

function closeWin() {
  myWindow.close();
}