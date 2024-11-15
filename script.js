document.addEventListener("DOMContentLoaded", () => {
    const funFacts = [
        "NASA was established in 1958 and has been exploring space ever since!",
        "The International Space Station travels at a speed of 28,000 km/h!",
        "The James Webb Space Telescope can see light from the first galaxies!",
        "Mars is home to the largest volcano in the solar system, Olympus Mons!",
        "NASA's Voyager 1 is the most distant human-made object in space!"
    ];

    const factElement = document.getElementById("fun-fact");
    let factIndex = 0;

    setInterval(() => {
        factIndex = (factIndex + 1) % funFacts.length;
        factElement.textContent = funFacts[factIndex];
    }, 5000); 
});
