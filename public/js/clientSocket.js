var connected = false;
//ws://your-app.herokuapp.com:9352/socket.io/?EIO=4&transport=websocket
//var socket = io("https://tweetchat.herokuapp.com")
var socketUrl = "https://twitterchat.up.railway.app/"; 
 
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") { 
    socketUrl = "http://localhost:3003";
}
 
var socket = io(socketUrl);

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