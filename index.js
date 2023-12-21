function changeImage() {
    const randomNumber = Math.floor(Math.random() * 9);
    document.querySelector("img").getAttribute("src");
    document.querySelector("img").setAttribute("src", "assets/" + randomNumber + ".png");
}

const ballImage = document.querySelector(".img1");
ballImage.addEventListener("click", changeImage);
