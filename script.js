"use strict";

// Sample data for speakers and sponsors (replace with your actual data)
const speakersData = [
  { name: "Speaker 1", bio: "Bio for Speaker 1", link: "https://speaker1.com" },
  { name: "Speaker 2", bio: "Bio for Speaker 2", link: "https://speaker2.com" },
  { name: "Speaker 3", bio: "Bio for Speaker 3", link: "https://speaker3.com" }
];

const sponsorsData = [
  "sponsor1.jpg",
  "sponsor2.jpg",
  "sponsor3.jpg"
];

// Function to load speakers dynamically
function loadSpeakers() {
  const speakerList = $("#speakerList");
  speakersData.forEach(speaker => {
    const speakerInfo = `<div class="speaker">
      <h3>${speaker.name}</h3>
      <p>${speaker.bio}</p>
      <a href="${speaker.link}" target="_blank">Learn more</a>
    </div>`;
    speakerList.append(speakerInfo);
  });
}

// Function to load sponsors dynamically
function loadSponsors() {
  const sponsorCarousel = $("#sponsorCarousel");
  sponsorsData.forEach(sponsor => {
    const sponsorImage = `<img src="${sponsor}" alt="Sponsor Image">`;
    sponsorCarousel.append(sponsorImage);
  });
}

// Document ready event
$(document).ready(function() {
  // Initialize jQuery UI Tabs
  $("#tabs").tabs();

  // Load speakers and sponsors
  loadSpeakers();
  loadSponsors();
});
