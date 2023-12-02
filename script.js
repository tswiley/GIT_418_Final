document.addEventListener("DOMContentLoaded", function() {
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
});


document.addEventListener("DOMContentLoaded", function () {
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
  });

  
  