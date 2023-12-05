document.addEventListener("DOMContentLoaded", function() {
function fetchWeather() {
    const apiKey = '0dc3be9f41dc0baafe9f17469f061d46';
    const city = 'San Diego';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`; // Use units=imperial for Fahrenheit

    $.ajax({
        url: apiUrl,
        type: 'GET',
        success: function(data) {
            // Update the weather-info element with relevant weather information
            const weatherInfo = `${city}: ${data.weather[0].description}, ${Math.round(data.main.temp)}°F`;
            
            // Add an emoji based on the weather description
            const emoji = getWeatherEmoji(data.weather[0].description);
            $('#weather-info').html(`${weatherInfo} ${emoji}`);
        },
        error: function(error) {
            console.error('Error fetching weather data:', error);
        }
    });
}
    // Function to get weather emoji based on description
    function getWeatherEmoji(description) {
        // Example mapping, you can customize this based on your preference
        const emojiMap = {
            'clear sky': '☀️',
            'few clouds': '🌤️',
            'scattered clouds': '⛅',
            'broken clouds': '☁️',
            'shower rain': '🌧️',
            'rain': '🌧️',
            'thunderstorm': '⛈️',
            'snow': '❄️',
            'mist': '🌫️',
        };

        // Use the mapped emoji or return a default emoji
        return emojiMap[description.toLowerCase()] || '🌍';
    }

    // Call the fetchWeather function when the page loads
    fetchWeather();

    const allTabs = document.querySelectorAll('.schedule-tabs button, .sponsor-tabs button');
    const allTabContents = document.querySelectorAll('.tab-content, .sponsor-tab-content');

    const handleTabClick = (tabs, clickedTab) => {
        const isActive = clickedTab.classList.contains('active');

        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        allTabContents.forEach(content => {
            content.style.display = 'none';
        });

        if (!isActive) {
            clickedTab.classList.add('active');
            const dataTarget = clickedTab.getAttribute('data-target');
            const correspondingContent = document.getElementById(dataTarget);

            if (correspondingContent) {
                correspondingContent.style.display = 'block';
            }

            console.log(`Clicked tab: ${dataTarget}`);
        }
    };

    const setInitialState = (tabs) => {
        tabs.forEach(tab => {
            tab.classList.remove('active');
        });

        allTabContents.forEach(content => {
            content.style.display = 'none';
        });
    };

    // Handle all tabs
    allTabs.forEach(tab => {
        tab.addEventListener('click', () => handleTabClick(allTabs, tab));
    });

    // Set initial state for all tabs
    setInitialState(allTabs);


// Call the fetchStackExchangeInfo function when the page loads
document.addEventListener("DOMContentLoaded", function() {
    fetchStackExchangeInfo();
});


    const speakers = [
        {
            name: "Garima Singh",
            title: "Chief Architect, Sandvik",
            photo: "Speakers/Garim-Singh.webp",
        },
        {
            name: "Jamie Stapleton",
            title: "VP of Global Digital Strategy, Hitachi Energy",
            photo: "Speakers/Jamie-Stapleton.webp",
        },
        {
            name: "Agata Grela",
            title: "Digital Strategy Leader, RBS International",
            photo: "Speakers/Agata-Grela.webp",
        },
        {
            name: "Jesper Toubøl",
            title: "Vice President of Operations, Lego",
            photo: "Speakers/Jesper-Touboel.webp",
        },
    ];

    const speakersContainer = document.querySelector(".carousel-container");

    function createSpeakerCard(speaker) {
        const speakerCard = document.createElement("div");
        speakerCard.classList.add("speaker");

        const image = document.createElement("img");
        image.src = speaker.photo;
        image.alt = `${speaker.name} Photo`;

        const name = document.createElement("h3");
        name.textContent = speaker.name;

        const title = document.createElement("p");
        title.textContent = speaker.title;

        speakerCard.appendChild(image);
        speakerCard.appendChild(name);
        speakerCard.appendChild(title);

        return speakerCard;
    }

    let currentSlide = 0;

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % speakers.length;
        showSpeakers();
    }

    function showSpeakers() {
        speakersContainer.innerHTML = "";
        const speakerCard = createSpeakerCard(speakers[currentSlide]);
        speakersContainer.appendChild(speakerCard);
    }

    // Automatically advance to the next slide every 5 seconds (adjust as needed)
    setInterval(showNextSlide, 5000);

    // Show the initial slide
    showSpeakers();

    // Contact Form
    $('#contact-form').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        const nameInput = $('#name');
        const phoneInput = $('#phone');
        const emailInput = $('#email');
        const contactMethodInput = $("input[name='contact-method']:checked");
        const commentsInput = $('#comments');
        const nameError = $('#name-error');
        const phoneError = $('#phone-error');
        const emailError = $('#email-error');
        const contactMethodError = $('#contact-method-error');
        const commentsError = $('#comments-error');

        // Validate inputs
        const isValidName = validateNotEmpty(nameInput.val());
        const isValidPhone = validateNotEmpty(phoneInput.val());
        const isValidEmail = validateEmail(emailInput.val());
        const isValidContactMethod = contactMethodInput.length > 0;
        const isValidComments = validateNotEmpty(commentsInput.val());

        // Display error messages
        displayErrorMessage(isValidName, nameError, 'Please enter your name.');
        displayErrorMessage(isValidPhone, phoneError, 'Please enter your phone number.');
        displayErrorMessage(isValidEmail, emailError, 'Please enter a valid email address.');
        displayErrorMessage(isValidContactMethod, contactMethodError, 'Please select a contact method.');
        displayErrorMessage(isValidComments, commentsError, 'Please enter your comments.');

        // Check if all inputs are valid
        if (isValidName && isValidPhone && isValidEmail && isValidContactMethod && isValidComments) {
            // Handle successful submission (you can replace this with your own logic)
            alert('Thank you for contacting us. We will reach out to you soon.');
            // Clear the form
            $('#contact-form')[0].reset();
        }
    });

    // Subscribe Form
    $('#subscribe-form').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission
    
        const emailInput = $('#subscribe-form #email');
        const subscribedEmails = JSON.parse(localStorage.getItem('subscribedEmails')) || [];
    
        // Validate the email format
        const isValidEmail = validateEmail(emailInput.val());
    
        if (isValidEmail) {
            // Check if the email is already subscribed
            if (subscribedEmails.includes(emailInput.val())) {
                // Display a message that the email has already been submitted
                alert('This email has already been subscribed. Thank you for your interest.');
            } else {
                // Display the success message and clear the input
                alert('Thank you for subscribing. You\'ll receive updates for the 2024 Conference soon.');
                emailInput.val();
    
                // Save the email to local storage
                subscribedEmails.push(emailInput.val());
                localStorage.setItem('subscribedEmails', JSON.stringify(subscribedEmails));
            }
        } else {
            // Display an error message for invalid email
            alert('Please enter a valid email address.');
        }
    });

    // Helper function to validate if a field is not empty
    function validateNotEmpty(value) {
        return value.trim() !== '';
    }

    // Helper function to validate email format
    function validateEmail(email) {
        // Using a more permissive email pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    // Helper function to display error message
    function displayErrorMessage(isValid, errorElement, errorMessage) {
        if (!isValid) {
            errorElement.text(errorMessage);
            errorElement.show();
        } else {
            errorElement.text('');
            errorElement.hide();
        }
    }
});
