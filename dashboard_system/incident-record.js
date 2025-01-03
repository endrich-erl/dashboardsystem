document.addEventListener("DOMContentLoaded", () => {
    const proceedButton = document.getElementById("proceedButton");
    const incidentHistory = document.getElementById("incident-history");
    const addIncidentButton = document.getElementById("addIncidentButton");
    const addIncidentForm = document.getElementById("add-incident-form");
    const incidentForm = document.getElementById("incidentForm");
    const incidentList = document.getElementById("incidentList");
    const deleteHistoryButton = document.getElementById("deleteHistoryButton");

    // Array to store incident records
    let incidents = [];

    // Show incident history and add button when proceeding
    proceedButton.addEventListener("click", () => {
        incidentHistory.style.display = "block";
        proceedButton.style.display = "none";
        addIncidentButton.style.display = "inline-block"; // Show add button
        renderIncidents(); // Display current incidents
    });

    // Show form to add a new incident
    addIncidentButton.addEventListener("click", () => {
        addIncidentForm.style.display = "block";
        incidentHistory.style.display = "none";
    });

    // Handle adding a new incident
    incidentForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const date = document.getElementById("incidentDate").value.trim();
        const name = document.getElementById("incidentName").value.trim();
        const incidentCase = document.getElementById("incidentCase").value.trim();
        const personalInfo = document.getElementById("personalInfo").value.trim();

        if (date === "" || name === "" || incidentCase === "" || personalInfo === "") {
            alert("Please fill out all fields.");
            return;
        }

        // Create new incident object
        const newIncident = { date, name, incidentCase, personalInfo, cleared: false };

        // Add the new incident to the incidents array
        incidents.push(newIncident);

        // Update the incident list
        renderIncidents();

        // Clear the form and hide it
        incidentForm.reset();
        addIncidentForm.style.display = "none";
        incidentHistory.style.display = "block";
    });

    // Render the list of incidents
    function renderIncidents() {
        incidentList.innerHTML = ""; // Clear current list

        if (incidents.length === 0) {
            incidentList.innerHTML = "<p>No incidents recorded yet.</p>";
        } else {
            incidents.forEach((incident, index) => {
                const listItem = document.createElement("li");
                listItem.className = "incident-item";
                
                // Apply styles if the incident is cleared
                if (incident.cleared) {
                    listItem.classList.add("cleared");
                }

                listItem.innerHTML = `
                    <div class="incident-info">
                        <p><strong>Date:</strong> ${incident.date}</p>
                        <p><strong>Name:</strong> ${incident.name}</p>
                        <p><strong>Case:</strong> ${incident.incidentCase}</p>
                        <p><strong>Other Info:</strong> ${incident.personalInfo}</p>
                    </div>
                    <button class="delete-button" onclick="deleteIncident(${index})">Delete</button>
                    <button class="clear-button" onclick="markAsCleared(${index})">Mark as Cleared</button>
                `;
                incidentList.appendChild(listItem);
            });
        }
    }

    // Delete a specific incident
    window.deleteIncident = (index) => {
        incidents.splice(index, 1);
        renderIncidents(); // Re-render the list
    };

    // Mark an incident as cleared
    window.markAsCleared = (index) => {
        incidents[index].cleared = true;
        renderIncidents(); // Re-render the list
    };

    // Delete all incidents
    deleteHistoryButton.addEventListener("click", () => {
        const confirmDelete = confirm("Are you sure you want to delete all incident records?");
        if (confirmDelete) {
            incidents = []; // Empty the incidents array
            renderIncidents(); // Update the list
        }
    });
});
