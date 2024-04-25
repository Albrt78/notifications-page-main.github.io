const notificationsCount = document.querySelector(".notifications__count");
const notificationsToggle = document.querySelector(".notifications__toggle");
const notificationsBox = document.querySelectorAll(
    ".notifications__article__wrapper"
);
const notificationsPrivateMessage = document.querySelector(
    ".notifications__private__message"
);
const notificationsDot = document.querySelectorAll(".notifications__profile");

notificationsPrivateMessage.style.display = "block"; // default display of private message
notificationsCount.innerText = notificationsBox.length; // set how many unread notifications

// Added the red dot notifications
for (let i = 0; i < notificationsDot.length; i++) {
    notificationsDot[i].classList.toggle("unread");
}

// Funtion for private message
function displayPC() {
    if (notificationsPrivateMessage.style.display === "block") {
        notificationsPrivateMessage.style.display = "none";
    } else {
        notificationsPrivateMessage.style.display = "block";
    }
}

notificationsToggle.addEventListener("click", () => {
    notificationsCount.innerText = "0";

    // Clear the red dot notifications
    for (let i = 0; i < notificationsDot.length; i++) {
        notificationsDot[i].classList.remove("unread");
    }

    // Set background color to white when the message read
    for (let j = 0; j < notificationsBox.length; j++) {
        notificationsBox[j].style.backgroundColor = "white";
    }

    displayPC();
});
