var connected = false;
//ws://your-app.herokuapp.com:9352/socket.io/?EIO=4&transport=websocket
var socket = io("ws://morning-ridge-27369.herokuapp.com/socket.io/?EIO=4&transport=websocket")
socket.emit("setup", userLoggedIn);

socket.on("connected", () => connected = true);
socket.on("message received", (newMessage) => messageReceived(newMessage));

socket.on("notification received", () => {
    $.get("/api/notifications/latest", (notificationData) => {
        showNotificationPopup(notificationData)
        refreshNotificationsBadge();
    })
})

function emitNotification(userId) {
    if(userId == userLoggedIn._id) return;

    socket.emit("notification received", userId);
}