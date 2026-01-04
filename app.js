// Activity Database - Seattle specific activities
const ACTIVITIES = [
    // Outdoor Activities
    {
        id: 1,
        name: "Green Lake Park",
        description: "Walk around the lake, playground, feed ducks. Bring bread crumbs!",
        category: "outdoor",
        ages: [2, 4],
        location: "Green Lake, Seattle",
        free: true
    },
    {
        id: 2,
        name: "Volunteer Park",
        description: "Great playground, water tower to climb (4yo will love it), conservatory with plants",
        category: "outdoor",
        ages: [2, 4],
        location: "Capitol Hill, Seattle",
        free: true
    },
    {
        id: 3,
        name: "Discovery Park Beach",
        description: "Beach exploration, tide pools, collect shells and rocks",
        category: "outdoor",
        ages: [2, 4],
        location: "Magnolia, Seattle",
        free: true
    },
    {
        id: 4,
        name: "Woodland Park Zoo",
        description: "See animals, petting zoo area, playground. Morning is best before crowds",
        category: "outdoor",
        ages: [2, 4],
        location: "Phinney Ridge, Seattle",
        free: false
    },
    {
        id: 5,
        name: "Carkeek Park Beach Train",
        description: "Watch trains go by on the beach, explore tide pools, short hiking trails",
        category: "outdoor",
        ages: [2, 4],
        location: "North Seattle",
        free: true
    },
    {
        id: 6,
        name: "Gas Works Park",
        description: "Unique playground, kite flying, great views. Bring a picnic!",
        category: "outdoor",
        ages: [4],
        location: "Wallingford, Seattle",
        free: true
    },
    {
        id: 7,
        name: "Lincoln Park",
        description: "Beach, playground, wading pool (summer), Fauntleroy ferry watching",
        category: "outdoor",
        ages: [2, 4],
        location: "West Seattle",
        free: true
    },
    {
        id: 8,
        name: "Burke-Gilman Trail Bike Ride",
        description: "Flat paved trail, perfect for balance bikes or tricycles",
        category: "physical",
        ages: [2, 4],
        location: "Various access points",
        free: true
    },

    // Indoor Activities
    {
        id: 9,
        name: "Seattle Children's Museum",
        description: "Perfect for both ages! Toddler cove, art studio, water table, mountain forest",
        category: "indoor",
        ages: [2, 4],
        location: "Seattle Center",
        free: false
    },
    {
        id: 10,
        name: "Seattle Aquarium",
        description: "Touch tide pools, watch otters, see fish. Can be quick or spend hours",
        category: "indoor",
        ages: [2, 4],
        location: "Downtown Waterfront",
        free: false
    },
    {
        id: 11,
        name: "Pacific Science Center",
        description: "Hands-on exhibits, tropical butterfly house, planetarium shows",
        category: "educational",
        ages: [4],
        location: "Seattle Center",
        free: false
    },
    {
        id: 12,
        name: "Library Storytime",
        description: "Free storytimes at any Seattle Public Library branch. Check schedule online",
        category: "educational",
        ages: [2, 4],
        location: "Multiple locations",
        free: true
    },
    {
        id: 13,
        name: "University Village Play Area",
        description: "Indoor mall play area, good for rainy days. Free!",
        category: "indoor",
        ages: [2, 4],
        location: "University District",
        free: true
    },
    {
        id: 14,
        name: "Westfield Southcenter Play Area",
        description: "Free indoor play area at the mall",
        category: "indoor",
        ages: [2, 4],
        location: "Tukwila",
        free: true
    },
    {
        id: 15,
        name: "Ballard Locks",
        description: "Watch boats go through locks, see salmon ladder (summer/fall), fish hatchery",
        category: "educational",
        ages: [2, 4],
        location: "Ballard, Seattle",
        free: true
    },
    {
        id: 16,
        name: "MOHAI",
        description: "Museum of History & Industry - kid-friendly exhibits, boats, trains",
        category: "educational",
        ages: [4],
        location: "South Lake Union",
        free: false
    },

    // Creative Activities
    {
        id: 17,
        name: "Playdough at Home",
        description: "Set up playdough station with cookie cutters and rolling pins",
        category: "creative",
        ages: [2, 4],
        location: "Home",
        free: true
    },
    {
        id: 18,
        name: "Painting Session",
        description: "Finger painting or brush painting. Use washable paints!",
        category: "creative",
        ages: [2, 4],
        location: "Home",
        free: true
    },
    {
        id: 19,
        name: "Collage Making",
        description: "Cut out magazine pictures, glue on paper. Great for fine motor skills",
        category: "creative",
        ages: [4],
        location: "Home",
        free: true
    },
    {
        id: 20,
        name: "Open Studio at Pottery Cafe",
        description: "Paint ceramics together (they'll glaze and fire it)",
        category: "creative",
        ages: [4],
        location: "Multiple locations",
        free: false
    },

    // Physical Play
    {
        id: 21,
        name: "Gymboree Play & Music",
        description: "Classes for different ages, drop-in play times",
        category: "physical",
        ages: [2, 4],
        location: "Various locations",
        free: false
    },
    {
        id: 22,
        name: "Little Gym",
        description: "Gymnastics classes for toddlers and preschoolers",
        category: "physical",
        ages: [2, 4],
        location: "Various locations",
        free: false
    },
    {
        id: 23,
        name: "Dance Party at Home",
        description: "Put on favorite songs and dance! Great for rainy afternoons",
        category: "physical",
        ages: [2, 4],
        location: "Home",
        free: true
    },
    {
        id: 24,
        name: "Obstacle Course at Home",
        description: "Use pillows, tape lines on floor, furniture to climb. Tires them out!",
        category: "physical",
        ages: [2, 4],
        location: "Home",
        free: true
    },

    // Seasonal Activities
    {
        id: 25,
        name: "Pike Place Market",
        description: "See flying fish, Rachel the pig, flowers, sample foods. Go early!",
        category: "outdoor",
        ages: [4],
        location: "Downtown Seattle",
        free: true
    },
    {
        id: 26,
        name: "Pumpkin Patch (Fall)",
        description: "Bob's Corn Maze or The Farm at Swan's Trail",
        category: "outdoor",
        ages: [2, 4],
        location: "Various",
        free: false
    },
    {
        id: 27,
        name: "Strawberry Picking (Summer)",
        description: "Various U-pick farms around Seattle area",
        category: "outdoor",
        ages: [2, 4],
        location: "Various",
        free: false
    },

    // More Playgrounds
    {
        id: 28,
        name: "Cal Anderson Park Playground",
        description: "Modern playground with water feature (summer)",
        category: "outdoor",
        ages: [2, 4],
        location: "Capitol Hill",
        free: true
    },
    {
        id: 29,
        name: "Jefferson Park Playground",
        description: "Huge playground with climbing structures",
        category: "outdoor",
        ages: [4],
        location: "Beacon Hill",
        free: true
    },
    {
        id: 30,
        name: "Magnuson Park Playground",
        description: "Two playgrounds, beach access, big fields to run",
        category: "outdoor",
        ages: [2, 4],
        location: "Northeast Seattle",
        free: true
    },

    // Educational at Home
    {
        id: 31,
        name: "Baking Together",
        description: "Make cookies or muffins. Let them pour, stir, decorate",
        category: "educational",
        ages: [2, 4],
        location: "Home",
        free: true
    },
    {
        id: 32,
        name: "Sensory Bin Play",
        description: "Rice, beans, or water with scoops and toys. Set up on towel!",
        category: "creative",
        ages: [2, 4],
        location: "Home",
        free: true
    },
    {
        id: 33,
        name: "Building Blocks",
        description: "LEGO, Duplo, or wooden blocks. Build towers and knock them down!",
        category: "creative",
        ages: [2, 4],
        location: "Home",
        free: true
    },
    {
        id: 34,
        name: "Bubble Bath & Water Play",
        description: "Extra long bath with toys, bubbles, cups for pouring",
        category: "physical",
        ages: [2, 4],
        location: "Home",
        free: true
    },

    // More Seattle Specific
    {
        id: 35,
        name: "Seattle Great Wheel",
        description: "Ride the Ferris wheel on the waterfront. Amazing views!",
        category: "outdoor",
        ages: [4],
        location: "Waterfront",
        free: false
    },
    {
        id: 36,
        name: "Woodland Park Spray Park",
        description: "Free water play area (summer only). Bring towels!",
        category: "outdoor",
        ages: [2, 4],
        location: "Phinney Ridge",
        free: true
    },
    {
        id: 37,
        name: "Kubota Garden",
        description: "Beautiful Japanese garden, bridges, koi pond. Free!",
        category: "outdoor",
        ages: [4],
        location: "Rainier Beach",
        free: true
    },
    {
        id: 38,
        name: "Farmer's Market",
        description: "University District, Ballard, or other neighborhood markets. Let kids pick a fruit",
        category: "outdoor",
        ages: [2, 4],
        location: "Various neighborhoods",
        free: true
    },
    {
        id: 39,
        name: "Golden Gardens Beach",
        description: "Sandy beach, play area, tide pools. Bring sand toys!",
        category: "outdoor",
        ages: [2, 4],
        location: "Ballard",
        free: true
    },
    {
        id: 40,
        name: "Movie Morning at Home",
        description: "Rainy day movie with popcorn and blankets. Sometimes you need a break!",
        category: "indoor",
        ages: [2, 4],
        location: "Home",
        free: true
    }
];

// State Management
let currentWeekOffset = 0;
let weeklyPlan = {};
let favorites = new Set();
let selectedActivity = null;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadFromStorage();
    initTabs();
    renderWeeklyPlan();
    renderActivities();
    initEventListeners();
});

// Tab Navigation
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabName = btn.dataset.tab;

            // Update active states
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            document.getElementById(tabName).classList.add('active');

            // Refresh content if needed
            if (tabName === 'favorites') {
                renderFavorites();
            }
        });
    });
}

// Week Navigation
function initEventListeners() {
    document.getElementById('prevWeek').addEventListener('click', () => {
        currentWeekOffset--;
        renderWeeklyPlan();
    });

    document.getElementById('nextWeek').addEventListener('click', () => {
        currentWeekOffset++;
        renderWeeklyPlan();
    });

    document.getElementById('categoryFilter').addEventListener('change', renderActivities);
    document.getElementById('ageFilter').addEventListener('change', renderActivities);
    document.getElementById('cancelAdd').addEventListener('click', closeModal);
}

// Get dates for current week
function getWeekDates() {
    const today = new Date();
    const currentDay = today.getDay(); // 0 = Sunday
    const monday = new Date(today);
    monday.setDate(today.getDate() - currentDay + 1 + (currentWeekOffset * 7));

    const dates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(monday);
        date.setDate(monday.getDate() + i);
        dates.push(date);
    }

    return dates;
}

function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function formatDisplayDate(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

// Render Weekly Plan
function renderWeeklyPlan() {
    const weekDates = getWeekDates();
    const weekDisplay = document.getElementById('weekDisplay');
    const weeklyPlanDiv = document.getElementById('weeklyPlan');

    // Update week header
    if (currentWeekOffset === 0) {
        weekDisplay.textContent = 'This Week';
    } else if (currentWeekOffset === 1) {
        weekDisplay.textContent = 'Next Week';
    } else if (currentWeekOffset === -1) {
        weekDisplay.textContent = 'Last Week';
    } else {
        weekDisplay.textContent = `Week of ${formatDisplayDate(weekDates[0])}`;
    }

    // Render days
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    weeklyPlanDiv.innerHTML = weekDates.map((date, index) => {
        const dateKey = formatDate(date);
        const activities = weeklyPlan[dateKey] || [];

        return `
            <div class="day-card">
                <div class="day-header">
                    <div>
                        <div class="day-name">${dayNames[index]}</div>
                        <div class="day-date">${formatDisplayDate(date)}</div>
                    </div>
                </div>
                <div class="day-activities" data-date="${dateKey}">
                    ${activities.length === 0 ?
                        '<div style="color: #999; font-size: 14px; padding: 10px 0;">No activities planned</div>' :
                        activities.map(actId => {
                            const activity = ACTIVITIES.find(a => a.id === actId);
                            return activity ? `
                                <div class="day-activity">
                                    <div class="activity-title">${activity.name}</div>
                                    <button class="remove-activity" onclick="removeFromDay('${dateKey}', ${actId})">×</button>
                                </div>
                            ` : '';
                        }).join('')
                    }
                </div>
                <button class="add-to-day" onclick="quickAddToDay('${dateKey}')">+ Add Activity</button>
            </div>
        `;
    }).join('');
}

// Render Activities List
function renderActivities() {
    const categoryFilter = document.getElementById('categoryFilter').value;
    const ageFilter = document.getElementById('ageFilter').value;
    const activityList = document.getElementById('activityList');

    let filtered = ACTIVITIES;

    // Filter by category
    if (categoryFilter !== 'all') {
        if (categoryFilter === 'free') {
            filtered = filtered.filter(a => a.free);
        } else {
            filtered = filtered.filter(a => a.category === categoryFilter);
        }
    }

    // Filter by age
    if (ageFilter !== 'all') {
        if (ageFilter === 'both') {
            filtered = filtered.filter(a => a.ages.includes(2) && a.ages.includes(4));
        } else {
            const age = parseInt(ageFilter);
            filtered = filtered.filter(a => a.ages.includes(age));
        }
    }

    activityList.innerHTML = filtered.map(activity => `
        <div class="activity-card">
            <div class="activity-header">
                <div class="activity-name">${activity.name}</div>
                <button class="favorite-btn" onclick="toggleFavorite(${activity.id})">
                    ${favorites.has(activity.id) ? '❤️' : '🤍'}
                </button>
            </div>
            <div class="activity-tags">
                <span class="tag ${activity.category}">${activity.category}</span>
                ${activity.free ? '<span class="tag free">Free</span>' : ''}
                <span class="tag age">${activity.ages.includes(2) && activity.ages.includes(4) ? 'Both ages' : activity.ages.includes(2) ? '2yo' : '4yo'}</span>
            </div>
            <div class="activity-description">${activity.description}</div>
            <div class="activity-location">📍 ${activity.location}</div>
            <button class="add-activity-btn" onclick="openAddModal(${activity.id})">Add to Week</button>
        </div>
    `).join('');
}

// Render Favorites
function renderFavorites() {
    const favoritesList = document.getElementById('favoritesList');
    const favActivities = ACTIVITIES.filter(a => favorites.has(a.id));

    if (favActivities.length === 0) {
        favoritesList.innerHTML = '<div class="empty-state">No favorites yet!<br>Tap the heart on activities you love.</div>';
        return;
    }

    favoritesList.innerHTML = favActivities.map(activity => `
        <div class="activity-card">
            <div class="activity-header">
                <div class="activity-name">${activity.name}</div>
                <button class="favorite-btn" onclick="toggleFavorite(${activity.id})">❤️</button>
            </div>
            <div class="activity-tags">
                <span class="tag ${activity.category}">${activity.category}</span>
                ${activity.free ? '<span class="tag free">Free</span>' : ''}
                <span class="tag age">${activity.ages.includes(2) && activity.ages.includes(4) ? 'Both ages' : activity.ages.includes(2) ? '2yo' : '4yo'}</span>
            </div>
            <div class="activity-description">${activity.description}</div>
            <div class="activity-location">📍 ${activity.location}</div>
            <button class="add-activity-btn" onclick="openAddModal(${activity.id})">Add to Week</button>
        </div>
    `).join('');
}

// Modal Functions
function openAddModal(activityId) {
    selectedActivity = activityId;
    const modal = document.getElementById('addModal');
    const daySelector = document.getElementById('daySelector');

    const weekDates = getWeekDates();
    const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    daySelector.innerHTML = weekDates.map((date, index) => {
        const dateKey = formatDate(date);
        return `
            <button class="day-option" onclick="addToDay('${dateKey}')">
                ${dayNames[index]} - ${formatDisplayDate(date)}
            </button>
        `;
    }).join('');

    modal.classList.add('active');
}

function closeModal() {
    document.getElementById('addModal').classList.remove('active');
    selectedActivity = null;
}

function quickAddToDay(dateKey) {
    // This would ideally open a quick select, but for simplicity, open the activities tab
    document.querySelector('[data-tab="activities"]').click();
}

function addToDay(dateKey) {
    if (!selectedActivity) return;

    if (!weeklyPlan[dateKey]) {
        weeklyPlan[dateKey] = [];
    }

    if (!weeklyPlan[dateKey].includes(selectedActivity)) {
        weeklyPlan[dateKey].push(selectedActivity);
        saveToStorage();
        renderWeeklyPlan();
    }

    closeModal();

    // Switch to planner tab to show the result
    document.querySelector('[data-tab="planner"]').click();
}

function removeFromDay(dateKey, activityId) {
    if (weeklyPlan[dateKey]) {
        weeklyPlan[dateKey] = weeklyPlan[dateKey].filter(id => id !== activityId);
        saveToStorage();
        renderWeeklyPlan();
    }
}

function toggleFavorite(activityId) {
    if (favorites.has(activityId)) {
        favorites.delete(activityId);
    } else {
        favorites.add(activityId);
    }
    saveToStorage();
    renderActivities();

    // Update favorites tab if it's active
    if (document.getElementById('favorites').classList.contains('active')) {
        renderFavorites();
    }
}

// Local Storage
function saveToStorage() {
    localStorage.setItem('weeklyPlan', JSON.stringify(weeklyPlan));
    localStorage.setItem('favorites', JSON.stringify([...favorites]));
}

function loadFromStorage() {
    const savedPlan = localStorage.getItem('weeklyPlan');
    const savedFavorites = localStorage.getItem('favorites');

    if (savedPlan) {
        weeklyPlan = JSON.parse(savedPlan);
    }

    if (savedFavorites) {
        favorites = new Set(JSON.parse(savedFavorites));
    }
}
