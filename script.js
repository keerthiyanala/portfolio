document.addEventListener('DOMContentLoaded', function () {
    const typedText = document.getElementById('typed-text');

    // Function to animate typing effect letter by letter
    function typeLetterByLetter(element, text, delay) {
        let index = 0;
        element.innerHTML = ''; // Clear the element initially

        function addLetter() {
            if (index < text.length) {
                // Check if it's a newline character (\n)
                if (text.charAt(index) === '\n') {
                    element.innerHTML += '<br>'; // Add HTML line break
                } else {
                    // Check if the substring matches "Keerthi" and apply the red color
                    if (text.substr(index, 7) === "Keerthi") {
                        element.innerHTML += '<span style="color: red;">' + text.substr(index, 7) + '</span>';
                        index += 6; // Skip the next 6 characters since "Keerthi" is 7 characters long
                    } else {
                        element.innerHTML += text.charAt(index); // Add the normal letter
                    }
                }
                index++;
                setTimeout(addLetter, delay); // Call the function again for the next letter
            } else {
                // When the typing is complete, restart after a delay
                setTimeout(() => {
                    typeLetterByLetter(element, text, delay); // Restart typing effect
                }, 1000); // Delay before restarting (adjust as needed)
            }
        }

        addLetter(); // Start typing the text
    }

    // Apply the typing effect to the text with line breaks using \n
    const text = "Hi, I'm Keerthi Reddy\nFrom Dallas"; // Your message to type, using \n for line breaks
    const delay = 200; // Slow down the typing effect by increasing the delay (in milliseconds)
    typeLetterByLetter(typedText, text, delay); // Start the typing effect
});
