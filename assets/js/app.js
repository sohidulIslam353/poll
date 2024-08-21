var swiper = new Swiper(".swiper-container", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// =============second slider ==============
var swiper = new Swiper(".recent_join", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        560: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// =======testimonial ================

var swiper = new Swiper(".testimonial_slider", {
    slidesPerView: 1.3,
    centeredSlides: true,
    initialSlide: 1,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        550: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },

        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
    },
});

// ===============blog==============
var swiper = new Swiper(".blog-slider", {
    spaceBetween: 20,
    loop: true,
    autoPlay: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        850: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});

// ===============featured==============
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 20,
    loop: true,
    autoPlay: true,
    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
// =============== Product slider ===============
var swiper = new Swiper(".product-slider", {
    spaceBetween: 20,
    loop: true,
    autoPlay: true,
    // Navigation arrows
    navigation: {
        nextEl: ".prev",
        prevEl: ".next",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
        1024: {
            slidesPerView: 4,
        },
    },
});
// =============== Product slider ===============
var swiper = new Swiper(".gallery-slider", {
    spaceBetween: 20,
    slidesPerView: 1,
    loop: true,
    autoPlay: true,
    // Navigation arrows
    navigation: {
        nextEl: ".prev",
        prevEl: ".next",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});
// =============== profile slider ===============

var swiper = new Swiper(".profile-slider", {
    spaceBetween: 20,
    loop: true,
    autoPlay: true,
    navigation: {
        nextEl: ".prev",
        prevEl: ".next",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
});
// =================jquery toggle class ==============
$(document).ready(function() {
    $(".hambarger-menu").click(function() {
        $(".mobile-hemberger-menu").toggleClass("active");
    });
});

// =================category slider ==========
var swiper = new Swiper(".category_slider", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// ============category=========
$(document).ready(function() {
    $(".toggle-sidebar").click(function() {
        $(".city-list-wrapper").toggleClass("active");
    });
});

$(document).ready(function() {
    $(".close-provider").click(function() {
        $(".city-list-wrapper").removeClass("active");
    });
});

$(document).ready(function() {
    $(".dashboard-menu-title").click(function() {
        $(".dashboard-menu-ul").toggleClass("active");
    });
});


// schedule appointment
let currentStep = 1;

function nextStep() {
    console.log("Next step clicked");
    const currentStepElement = document.getElementById("step" + currentStep);
    const nextStepElement = document.getElementById("step" + (currentStep + 1));

    console.log("Current Step Element:", currentStepElement);
    console.log("Next Step Element:", nextStepElement);

    if (currentStepElement && nextStepElement) {
        currentStepElement.style.display = "none";
        nextStepElement.style.display = "block";
        currentStep++;
        document.getElementById("backButton").style.display = "block";

        // Check if current step is 5
        if (currentStep === 5) {
            // Change button type to "submit"
            const continueButton = document.getElementById("continueButton");
            continueButton.type = "submit";
            continueButton.textContent = "Finish"; // Change button text to "Finish"
        }
    } else {
        alert("You have reached the end of the form.");
    }
}

function previousStep() {
    console.log("Previous step clicked");
    if (currentStep > 1) {
        const currentStepElement = document.getElementById("step" + currentStep);
        const previousStepElement = document.getElementById("step" + (currentStep - 1));

        console.log("Current Step Element:", currentStepElement);
        console.log("Previous Step Element:", previousStepElement);

        if (currentStepElement && previousStepElement) {
            currentStepElement.style.display = "none";
            previousStepElement.style.display = "block";
            currentStep--;

            if (currentStep === 1) {
                document.getElementById("backButton").style.display = "none";
            }

            // Check if current step is not 5
            if (currentStep !== 5) {
                // Change button type back to "button" and text to "Continue"
                const continueButton = document.getElementById("continueButton");
                continueButton.type = "button";
                continueButton.textContent = "Continue";
            }
        } else {
            alert("You are already on the first step.");
        }
    } else {
        alert("You are already on the first step.");
    }
}

// Custom date and time
document.addEventListener('DOMContentLoaded', () => {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const calendar = document.getElementById('calendar').querySelector('tbody');
    const monthYear = document.getElementById('monthYear');
    const selectedDateElement = document.getElementById('selectedDate');
    const timeSlotsContainer = document.getElementById('timeSlots');
    let currentDate = new Date();
    let selectedDate = null;

    function renderCalendar(date) {
        calendar.innerHTML = '';
        const month = date.getMonth();
        const year = date.getFullYear();

        monthYear.textContent = `${monthNames[month]} ${year}`;

        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();

        let row = document.createElement('tr');
        let day = (firstDay === 0 ? 6 : firstDay - 1);

        for (let i = 0; i < day; i++) {
            row.appendChild(document.createElement('td'));
        }

        for (let date = 1; date <= lastDate; date++) {
            if (day === 7) {
                calendar.appendChild(row);
                row = document.createElement('tr');
                day = 0;
            }
            const cell = document.createElement('td');
            cell.textContent = date;

            const cellDate = new Date(year, month, date);
            if (cellDate < new Date().setHours(0, 0, 0, 0)) {
                cell.classList.add('disabled');
            } else {
                cell.addEventListener('click', () => {
                    document.querySelectorAll('tbody td').forEach(td => td.classList.remove('selected'));
                    cell.classList.add('selected');
                    selectedDate = new Date(year, month, date);
                    renderTimeSlots(selectedDate);
                });

                if (cellDate.toDateString() === new Date().toDateString()) {
                    cell.classList.add('selected');
                    selectedDate = cellDate;
                }
            }

            row.appendChild(cell);
            day++;
        }

        if (row.children.length) {
            calendar.appendChild(row);
        }

        if (selectedDate) {
            renderTimeSlots(selectedDate);
        }
    }

    function renderTimeSlots(date) {
        selectedDateElement.textContent = date.toDateString();
        timeSlotsContainer.innerHTML = '';

    }

    document.getElementById('prevMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar(currentDate);
    });

    document.getElementById('nextMonth').addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar(currentDate);
    });

    renderCalendar(currentDate);
});



// live chat js
const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

const BOT_MSGS = [
    "Hi, how are you?",
    "Ohh... I can't understand what you trying to say. Sorry!",
    "I like to play games... But I don't know how to play!",
    "Sorry if my answers are not relevant. :))",
    "I feel sleepy! :("
];

// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = "Sajad";

msgerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const msgText = msgerInput.value;
    if (!msgText) return;

    appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
    msgerInput.value = "";

    botResponse();
});

function appendMessage(name, img, side, text) {
    //   Simple solution for small apps
    const msgHTML = `
    <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

    msgerChat.insertAdjacentHTML("beforeend", msgHTML);
    msgerChat.scrollTop += 500;
}

function botResponse() {
    const r = random(0, BOT_MSGS.length - 1);
    const msgText = BOT_MSGS[r];
    const delay = msgText.split(" ").length * 100;

    setTimeout(() => {
        appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
    }, delay);
}

// Utils
function get(selector, root = document) {
    return root.querySelector(selector);
}

function formatDate(date) {
    const h = "0" + date.getHours();
    const m = "0" + date.getMinutes();

    return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


$(document).ready(function() {
    $(".live_chat").click(function() {
        $(".msger").addClass("active");
    });
});

$(document).ready(function() {
    $(".msger-header-options").click(function() {
        $(".msger").removeClass("active");
    });
});