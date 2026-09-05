// ========================================
// DESTINATION DATA
// ========================================

const destinations = {

    jaipur: {
        name: "Jaipur",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1000&q=80",

        description:
            "Jaipur, known as the Pink City, is the capital of Rajasthan. It is famous for magnificent forts, beautiful palaces, colourful markets and rich royal history.",

        bestTime:
            "October to March",

        duration:
            "2–3 days",

        highlights: [
            "Amber Fort",
            "City Palace",
            "Hawa Mahal",
            "Jantar Mantar",
            "Johari Bazaar"
        ]
    },


    goa: {
        name: "Goa",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80",

        description:
            "Goa is one of India's most popular beach destinations. It combines beautiful beaches, Portuguese-influenced architecture, delicious food and a relaxed coastal atmosphere.",

        bestTime:
            "November to February",

        duration:
            "3–5 days",

        highlights: [
            "Baga Beach",
            "Calangute Beach",
            "Basilica of Bom Jesus",
            "Fort Aguada",
            "Dudhsagar Falls"
        ]
    },


    kerala: {
        name: "Kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1000&q=80",

        description:
            "Kerala, often called God's Own Country, is famous for its peaceful backwaters, lush green landscapes, beaches, hill stations and unique cultural traditions.",

        bestTime:
            "September to March",

        duration:
            "4–6 days",

        highlights: [
            "Alleppey Backwaters",
            "Munnar",
            "Kochi",
            "Varkala Beach",
            "Thekkady"
        ]
    },


    ladakh: {
        name: "Ladakh",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=80",

        description:
            "Ladakh is a spectacular high-altitude region known for dramatic mountains, Buddhist monasteries, crystal-clear lakes and adventurous road journeys.",

        bestTime:
            "May to September",

        duration:
            "5–7 days",

        highlights: [
            "Pangong Lake",
            "Nubra Valley",
            "Leh Palace",
            "Thiksey Monastery",
            "Khardung La"
        ]
    },


    varanasi: {
        name: "Varanasi",
        image: "https://images.unsplash.com/photo-1561361058-c24cecae35ca?auto=format&fit=crop&w=1000&q=80",

        description:
            "Varanasi is one of India's oldest living cities and an important spiritual centre. The city's famous ghats along the Ganges offer a unique cultural and spiritual experience.",

        bestTime:
            "October to March",

        duration:
            "2–3 days",

        highlights: [
            "Dashashwamedh Ghat",
            "Ganga Aarti",
            "Assi Ghat",
            "Kashi Vishwanath Temple",
            "Sarnath"
        ]
    },


    manali: {
        name: "Manali",
        image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1000&q=80",

        description:
            "Manali is a beautiful mountain destination in Himachal Pradesh. It is popular for its snow-covered landscapes, adventure activities, scenic valleys and peaceful surroundings.",

        bestTime:
            "March to June and October to February",

        duration:
            "3–5 days",

        highlights: [
            "Solang Valley",
            "Rohtang Pass",
            "Old Manali",
            "Hadimba Temple",
            "Beas River"
        ]
    }

};


// ========================================
// SHOW DESTINATION DETAILS
// ========================================

function showDestination(destinationId) {

    // Get destination information
    const destination = destinations[destinationId];

    // If destination doesn't exist, stop the function
    if (!destination) {
        return;
    }


    // Get modal elements
    const modal = document.getElementById("destinationModal");

    const modalImage = document.getElementById("modalImage");

    const modalTitle = document.getElementById("modalTitle");

    const modalDescription =
        document.getElementById("modalDescription");

    const modalBestTime =
        document.getElementById("modalBestTime");

    const modalDuration =
        document.getElementById("modalDuration");

    const modalHighlights =
        document.getElementById("modalHighlights");


    // Add destination information to modal

    modalImage.src = destination.image;

    modalImage.alt = destination.name;

    modalTitle.textContent = destination.name;

    modalDescription.textContent =
        destination.description;

    modalBestTime.textContent =
        destination.bestTime;

    modalDuration.textContent =
        destination.duration;


    // Clear previous highlights
    modalHighlights.innerHTML = "";


    // Add new highlights
    destination.highlights.forEach(function (highlight) {

        const listItem = document.createElement("li");

        listItem.textContent = highlight;

        modalHighlights.appendChild(listItem);

    });


    // Show modal
    modal.style.display = "block";


    // Prevent background page from scrolling
    document.body.style.overflow = "hidden";
}


// ========================================
// CLOSE MODAL
// ========================================

function closeModal() {

    const modal =
        document.getElementById("destinationModal");

    modal.style.display = "none";

    // Allow page scrolling again
    document.body.style.overflow = "auto";
}


// ========================================
// CLOSE MODAL WHEN CLICKING OUTSIDE
// ========================================

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("destinationModal");

    if (event.target === modal) {

        closeModal();

    }

});


// ========================================
// CLOSE MODAL WITH ESCAPE KEY
// ========================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeModal();

    }

});