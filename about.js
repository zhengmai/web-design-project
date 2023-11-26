document.addEventListener('DOMContentLoaded', function () {
    
    var i = 0;
    var time = 3000;
    var aboutImages = ['pictures/about1.jpg', 'pictures/about2.jpg', 'pictures/about3.jpg'];

    function changeImg() {
        var slideImage = document.getElementById('slide-image');
        slideImage.src = aboutImages[i];

        if (i < aboutImages.length - 1) {
            i++;
        } else {
            i = 0;
        }

        setTimeout(changeImg, time);
    }

    // Rolling recommendations logic
    var container = document.getElementById("rolling-container");

    function rollRecommendations() {
        var firstRecommendation = container.children[0];
        container.removeChild(firstRecommendation);
        container.appendChild(firstRecommendation.cloneNode(true));
    }

    setInterval(rollRecommendations, 3000);

    // Call the function for changing images
    changeImg();
});