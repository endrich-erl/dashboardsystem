document.addEventListener("DOMContentLoaded", () => {
    const wasteForm = document.getElementById("wasteForm");
    const wasteResult = document.getElementById("wasteResult");
    const resultType = document.getElementById("resultType");
    const resultAmount = document.getElementById("resultAmount");
    const addMoreButton = document.getElementById("addMoreButton");

    // Handle form submission
    wasteForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const garbageType = document.getElementById("garbageType").value;
        const amount = document.getElementById("amount").value;

        resultType.textContent = garbageType;
        resultAmount.textContent = amount;

        wasteResult.style.display = "block";
    });

    // Handle "Add More" button to reset the form
    addMoreButton.addEventListener("click", () => {
        wasteForm.reset();
        wasteResult.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", () => {
    // Bar chart for number of participants
    const participantsCtx = document.getElementById("participantsChart").getContext("2d");
    new Chart(participantsCtx, {
        type: "bar",
        data: {
            labels: ["Annual Conference", "Tech Workshop", "Health Symposium", "Webinar", "Meetup"], // Event names
            datasets: [{
                label: "Number of Participants",
                data: [120, 85, 150, 200, 50], // Example participant numbers
                backgroundColor: "rgba(75, 192, 192, 0.6)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Bar chart for age distribution
    const ageCtx = document.getElementById("ageChart").getContext("2d");
    new Chart(ageCtx, {
        type: "bar",
        data: {
            labels: ["18-25", "26-35", "36-45", "46-60", "60+"], // Age ranges
            datasets: [{
                label: "Age Distribution",
                data: [50, 100, 75, 30, 20], // Example age group data
                backgroundColor: "rgba(153, 102, 255, 0.6)",
                borderColor: "rgba(153, 102, 255, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

// Napuno//
// This file is included in the HTML to manage any dynamic behavior

// Placeholder for future scripts or interactions
document.addEventListener("DOMContentLoaded", () => {
    console.log("Page Loaded");
    // Future JavaScript code can be added here
});




