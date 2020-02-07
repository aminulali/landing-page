// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format - instead of 13:00pm, it will display 1pm
    hour = hour % 12 || 12;

    // Output Time - time format
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec)} ${showAmPm ? amPm : ''}`;

    // updates time every second
    setTimeout(showTime, 1000);
}

// Add Zeros - to numbers < 10 for minutes and seconds
function addZero(number) {
    return (parseInt(number, 10) < 10 ? '0' : '') + number;
}

// Set Background
function setBackground() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        document.body.style.backgroundImage = "url('./images/morning.jpg')";
    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')";
    } else if (hour < 21) {
        // Evening
        document.body.style.backgroundImage = "url('./images/evening.jpg')";
    } else {
        // Night
        document.body.style.backgroundImage = "url('./images/night.jpg')";
    }
}

// Set Greeting
function setGreeting() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // Morning
        greeting.textContent = 'Good Morning, ';
    } else if (hour < 18) {
        // Afternoon
        greeting.textContent = 'Good Afternoon, ';
        document.body.style.color = 'white';
    } else if (hour < 21) {
        // Evening
        greeting.textContent = 'Good Evening, ';
        document.body.style.color = 'white';
    } else {
        // Night
        greeting.textContent = 'Good Night, ';
        document.body.style.color = 'white';
    }
}

// Get name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
}

// Set name
function setName(e) {
    if (e.type === 'keypress') {
        // Making sure enter is pressed
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('name', e.target.innerText);
            /* blur used when the user does not use the enter button
            and clicks elsewhere on the screen */
            name.blur();
        } else {
            localStorage.setItem('name', e.target.innerText);
        }
    }
}

// Get focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Making sure enter is pressed
        if (e.which == 13 || e.keycode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        } else {
            localStorage.setItem('focus', e.target.innerText);
        }
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBackground();
setGreeting();
getName();
getFocus();