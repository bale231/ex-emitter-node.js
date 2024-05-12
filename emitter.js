const { EventEmitter } = require("node:events");

function createNewsFeed() {
    const emitter = new EventEmitter();

    setInterval(() => {
        emitter.emit("newsEvent", "News: A thing happened in a place.");
    }, 1000);

    setInterval(() => {
        emitter.emit("breakingNews", "Breaking news! A BIG thing happened.");
    }, 4000);

    setTimeout(() => {
        emitter.emit("error", new Error("News feed connection error"));
    }, 5000);

    // Collega i listener di eventi
    emitter.on("newsEvent", (data) => console.log("News Event:", data));
    emitter.on("breakingNews", (data) => console.log("Breaking News:", data));
    emitter.on("error", (error) => console.error("Error:", error.message));

    return emitter;
}

createNewsFeed();