var i = 0;
var time = 3000;

// Family images
var familyImages = ['pictures/family1.jpg', 'pictures/family2.jpg', 'pictures/family3.jpg', 'pictures/family4.jpg'];

// Party images
var partyImages = ['pictures/party1.jpg', 'pictures/party2.jpg', 'pictures/party3.jpg', 'pictures/party4.jpg'];

// Friends images
var friendsImages = ['pictures/friends1.jpg', 'pictures/friends2.jpg', 'pictures/friends3.jpg', 'pictures/friends4.jpg'];

// Christmas images
var christmasImages = ['pictures/christmas1.jpg', 'pictures/christmas2.jpg', 'pictures/christmas3.jpg', 'pictures/christmas4.jpg'];

// change image
function changeImg() {
    document.getElementById('family-slide-1').innerHTML = '<img class="image" src="' + familyImages[i] + '" alt="Description">';
    document.getElementById('party-slide-1').innerHTML = '<img class="image" src="' + partyImages[i] + '" alt="Description">';
    document.getElementById('friends-slide-1').innerHTML = '<img class="image" src="' + friendsImages[i] + '" alt="Description">';
    document.getElementById('christmas-slide-1').innerHTML = '<img class="image" src="' + christmasImages[i] + '" alt="Description">';

    if (i < familyImages.length - 1) {
        i++;
    } else {
        i = 0;
    }

    setTimeout(changeImg, time);
}

// Call the function when the document is ready
document.addEventListener('DOMContentLoaded', function () {
    changeImg();
});