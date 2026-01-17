// Splash Screen Timer
setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('app-content').classList.remove('hidden');
    renderStories('nepali');
}, 3000);

// Language Switch
function switchLang(lang, pos) {
    document.getElementById('tab-underline').style.left = pos + '%';
    renderStories(lang);
}

// Render Stories
function renderStories(lang) {
    const container = document.getElementById('story-container');
    container.innerHTML = '';
    allStories[lang].forEach(s => {
        const isDone = localStorage.getItem(s.id) === 'true';
        container.innerHTML += `
            <div class="story-card">
                <span class="tick-btn ${isDone ? 'active' : ''}" onclick="toggleTick(this, '${s.id}')">✅</span>
                <h2>${s.title}</h2>
                <p class="story-text">${s.content}</p>
                <div class="author-box">लेखकको नाम:- ${s.author}</div>
                <div class="moral-text">${s.moral}</div>
                <p class="thanks-msg">♡︎ Thanks For Reading ♡︎</p>
            </div>`;
    });
}

function toggleTick(el, id) {
    const active = el.classList.toggle('active');
    localStorage.setItem(id, active);
}

function toggleNightMode() { document.body.classList.toggle('dark-mode'); }

let fSize = 18;
function changeFontSize(n) {
    fSize += n;
    document.querySelectorAll('.story-text').forEach(p => p.style.fontSize = fSize + 'px');
}
