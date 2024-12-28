// Initialize an observer object
let observer = {};

// Add a method to the observer
observer.update = function(data) {
    console.log('Received data:', data);
};

// Example of notifying observers (not shown: logic that triggers this)
let data = { message: 'Hello, observers!' };
observer.update(data);
