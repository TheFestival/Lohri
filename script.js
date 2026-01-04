/* =========================================================
   LOHRI INTERACTIVE WEBSITE - FINAL SCRIPT.JS (POLISHED)
   ========================================================= */

/* ================= MUSIC CONTROL ================= */

const music = document.getElementById("lohriMusic");
const overlay = document.getElementById("overlay");
const muteBtn = document.querySelector(".mute");

let isMuted = false;

function startLohri() {
  if (music) music.play().catch(() => {});
  if (overlay) {
    overlay.style.opacity = "0";
    setTimeout(() => (overlay.style.display = "none"), 900);
  }
}

function toggleMusic() {
  isMuted = !isMuted;
  if (music) music.muted = isMuted;
  if (muteBtn) muteBtn.innerText = isMuted ? "🔇" : "🔊";
}

/* ================= URL NAME (VIRAL LOOP) ================= */

const fromBox = document.getElementById("fromBox");
const params = new URLSearchParams(window.location.search);
const sender = params.get("from");

if (sender && fromBox) {
  fromBox.innerHTML = `
    🎉 <strong>${sender}</strong> ਵੱਲੋਂ  
    ਤੁਹਾਨੂੰ ਅਤੇ ਤੁਹਾਡੇ ਪੂਰੇ ਪਰਿਵਾਰ ਨੂੰ  
    ਲੋਹੜੀ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ 🙏🔥
  `;
}

/* ================= GENERATE SHARE LINK ================= */

function generateLink() {
  const input = document.getElementById("nameInput");
  if (!input || !input.value.trim()) {
    alert("ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਆਪਣਾ ਨਾਮ ਲਿਖੋ 🙂");
    return;
  }

  const link =
    window.location.origin +
    window.location.pathname +
    "?from=" +
    encodeURIComponent(input.value.trim());

  navigator.clipboard.writeText(link);
  alert("ਲਿੰਕ ਕਾਪੀ ਹੋ ਗਿਆ 🔥 ਹੁਣ WhatsApp ‘ਤੇ ਸਾਂਝਾ ਕਰੋ");
}

/* ================= WHATSAPP SHARE ================= */

function shareWhatsApp() {
  const input = document.getElementById("nameInput");
  if (!input || !input.value.trim()) {
    alert("ਕਿਰਪਾ ਕਰਕੇ ਪਹਿਲਾਂ ਆਪਣਾ ਨਾਮ ਲਿਖੋ 🙂");
    return;
  }

  const link =
    window.location.origin +
    window.location.pathname +
    "?from=" +
    encodeURIComponent(input.value.trim());

  const message =
    "🔥 ਲੋਹੜੀ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ 🔥\n\n" +
    "ਤੁਹਾਡੇ ਲਈ ਇੱਕ ਖਾਸ ਲੋਹੜੀ ਦਾ ਸੰਦੇਸ਼ 🎁\n" +
    "ਹੇਠਾਂ ਦਿੱਤਾ ਲਿੰਕ ਖੋਲ੍ਹੋ 👇\n\n" +
    link;

  window.open(
    "https://wa.me/?text=" + encodeURIComponent(message),
    "_blank"
  );
}

/* ================= FUN PREDICTION ================= */

const predictions = [
  "🔥 ਤੁਹਾਡੀ ਲੋਹੜੀ ਬਹੁਤ ਖੁਸ਼ੀਆਂ ਭਰੀ ਰਹੇਗੀ!",
  "💛 ਇਹ ਲੋਹੜੀ ਪਰਿਵਾਰ ਨਾਲ ਖਾਸ ਹੋਵੇਗੀ!",
  "🎉 ਦੋਸਤਾਂ ਨਾਲ ਧਮਾਕੇਦਾਰ ਲੋਹੜੀ ਮਨੇਗੀ!",
  "🙏 ਤੁਹਾਡੇ ਘਰ ਚ ਸੁਖ-ਸ਼ਾਂਤੀ ਆਵੇਗੀ!",
  "✨ ਨਵੀਂ ਸ਼ੁਰੂਆਤ ਅਤੇ ਚੰਗੀਆਂ ਖ਼ਬਰਾਂ ਮਿਲਣਗੀਆਂ!"
];

const predictBtn = document.querySelector(".secondary-btn");
if (predictBtn) {
  predictBtn.addEventListener("click", () => {
    alert(predictions[Math.floor(Math.random() * predictions.length)]);
  });
}

/* ================= LIVE MOMENT COUNTER ================= */

const countEl = document.querySelector(".moment-counter strong");
const COUNT_KEY = "lohriMomentCount";
const USER_DONE_KEY = "lohriUserSubmitted";

let baseCount = parseInt(localStorage.getItem(COUNT_KEY), 10) || 12487;
localStorage.setItem(COUNT_KEY, baseCount);

if (countEl) countEl.innerText = baseCount.toLocaleString();

function incrementMomentCount() {
  if (localStorage.getItem(USER_DONE_KEY)) return;

  baseCount += 1;
  localStorage.setItem(COUNT_KEY, baseCount);
  localStorage.setItem(USER_DONE_KEY, "yes");

  if (countEl) {
    countEl.innerText = baseCount.toLocaleString();
  }
}

/* ================= GAME: LEAVE IT IN FIRE ================= */

function throwInFire() {
  const input = document.getElementById("fireThought");
  const result = document.getElementById("fireResult");

  if (!input || !result) return;

  if (!input.value.trim()) {
    alert("ਕਿਰਪਾ ਕਰਕੇ ਇੱਕ ਗੱਲ ਲਿਖੋ ਜੋ ਤੁਸੀਂ ਛੱਡਣਾ ਚਾਹੁੰਦੇ ਹੋ 🙏");
    return;
  }

  input.classList.add("dissolve");

  const messages = [
    "🙏 ਅੱਜ ਤੁਸੀਂ ਦਿਲ ਹਲਕਾ ਕਰ ਲਿਆ — ਨਵੀਂ ਸ਼ੁਰੂਆਤ ਮੁਬਾਰਕ",
    "🔥 ਇਹ ਗੱਲ ਅੱਗ ਵਿੱਚ ਛੱਡ ਦਿੱਤੀ ਗਈ — ਸੁਖ ਤੇ ਸ਼ਾਂਤੀ ਆਵੇ",
    "✨ ਪੁਰਾਣੀ ਚਿੰਤਾ ਛੱਡ ਕੇ ਨਵੀਂ ਰੌਸ਼ਨੀ ਵੱਲ ਵਧੋ",
    "💛 ਲੋਹੜੀ ਦੀ ਅੱਗ ਨੇ ਤੁਹਾਡੀ ਗੱਲ ਸੰਭਾਲ ਲਈ",
    "🌙 ਮਨ ਹਲਕਾ ਹੋਇਆ — ਅੱਜ ਦੀ ਲੋਹੜੀ ਖਾਸ ਬਣ ਗਈ"
  ];

  setTimeout(() => {
    input.value = "";
    input.classList.remove("dissolve");

    result.innerText =
      messages[Math.floor(Math.random() * messages.length)];
    result.classList.add("show");

    incrementMomentCount();

    if (fireActivityEl) {
      fireActivityEl.innerText = "✨ ਤੁਹਾਡੀ ਗੱਲ ਸਾਂਝੀ ਅੱਗ ਵਿੱਚ ਮਿਲ ਗਈ";
    }
  }, 1400);
}

/* ================= SURPRISE ================= */

let surpriseShown = false;

window.addEventListener("scroll", () => {
  if (window.scrollY > 300 && !surpriseShown) {
    const box = document.getElementById("surpriseBox");
    if (box) {
      box.classList.add("show");
      surpriseShown = true;
      setTimeout(() => box.classList.remove("show"), 3000);
    }
  }
});

/* ================= COLLECTIVE FIRE ILLUSION ================= */

const livePeopleEl = document.getElementById("livePeople");
const fireActivityEl = document.getElementById("fireActivity");

let livePeople = 120 + Math.floor(Math.random() * 40);
if (livePeopleEl) livePeopleEl.innerText = livePeople;

setInterval(() => {
  livePeople += Math.floor(Math.random() * 5) - 2;
  livePeople = Math.max(90, livePeople);
  if (livePeopleEl) livePeopleEl.innerText = livePeople;
}, 6000);

const fireMessages = [
  "🔥 ਹੁਣੇ ਹੀ ਅੱਗ ਵਿੱਚ ਕੁਝ ਸੁੱਟਿਆ ਗਿਆ",
  "🔥 ਅੱਗ ਨੇ ਇੱਕ ਹੋਰ ਭੇਟ ਸਵੀਕਾਰ ਕੀਤੀ",
  "🔥 ਅੱਗ ਹੋਰ ਵੀ ਗਰਮ ਹੋ ਰਹੀ ਹੈ",
  "🔥 ਸਾਂਝੀ ਅੱਗ ਵਿੱਚ ਹੋਰ ਤਾਪ ਆਇਆ",
  "🔥 ਅੱਗ ਕੋਲ ਰੌਣਕ ਵਧ ਰਹੀ ਹੈ"
];

let fireIndex = 0;
setInterval(() => {
  if (!fireActivityEl) return;
  fireActivityEl.classList.add("fade");
  setTimeout(() => {
    fireIndex = (fireIndex + 1) % fireMessages.length;
    fireActivityEl.innerText = fireMessages[fireIndex];
    fireActivityEl.classList.remove("fade");
  }, 500);
}, 7000);

/* ================= OFFERING TO FIRE ANIMATION ================= */

const fireEl = document.getElementById("fire");

document.querySelectorAll(".choice-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    if (!fireEl) return;

    const emoji = btn.innerText.split(" ")[0];
    const start = btn.getBoundingClientRect();
    const end = fireEl.getBoundingClientRect();

    const fly = document.createElement("div");
    fly.className = "flying-item";
    fly.innerText = emoji;
    fly.style.left = start.left + start.width / 2 + "px";
    fly.style.top = start.top + "px";
    document.body.appendChild(fly);

    requestAnimationFrame(() => {
      fly.style.transform = `translate(${end.left - start.left}px, ${end.top - start.top}px) scale(0.2)`;
      fly.style.opacity = "0";
    });

    setTimeout(() => fireEl.classList.add("fire-glow"), 450);

    setTimeout(() => {
      fireEl.classList.remove("fire-glow");
      fly.remove();
      if (fireActivityEl)
        fireActivityEl.innerText = "🔥 ਹੁਣੇ ਹੀ ਅੱਗ ਵਿੱਚ ਕੁਝ ਸੁੱਟਿਆ ਗਿਆ";
    }, 900);
  });
});

/* ================= SCROLL FIRE REACTION ================= */

window.addEventListener("scroll", () => {
  if (!fireEl) return;

  if (window.scrollY > 200) {
    fireEl.style.transform = "scale(1.05)";
    fireEl.style.filter = "drop-shadow(0 0 25px orange)";
  } else {
    fireEl.style.transform = "scale(1)";
    fireEl.style.filter = "none";
  }
});

function shareEverywhere() {
  const nameInput = document.getElementById("nameInput");
  const name = nameInput ? nameInput.value.trim() : "";

  const link =
    window.location.origin +
    window.location.pathname +
    (name ? "?from=" + encodeURIComponent(name) : "");

  const shareText =
    "🔥 ਲੋਹੜੀ ਦੀਆਂ ਲੱਖ ਲੱਖ ਵਧਾਈਆਂ 🔥\n\n" +
    "ਮੈਂ ਤੁਹਾਡੇ ਲਈ ਇੱਕ ਖਾਸ ਲੋਹੜੀ ਦਾ ਅਨੁਭਵ ਬਣਾਇਆ ਹੈ।\n" +
    "ਹੇਠਾਂ ਦਿੱਤਾ ਲਿੰਕ ਖੋਲ੍ਹੋ 👇";

  // 🔥 Native Share (Mobile – best)
  if (navigator.share) {
    navigator.share({
      title: "Happy Lohri 🔥",
      text: shareText,
      url: link
    }).catch(() => {});
  } 
  // Fallback (Desktop / old browsers)
  else {
    const whatsapp =
      "https://wa.me/?text=" +
      encodeURIComponent(shareText + "\n\n" + link);

    window.open(whatsapp, "_blank");
  }
}


// ===== Affiliate Click Tracking (GA4) =====
document.querySelectorAll('.affiliate-card').forEach((card, index) => {
  card.addEventListener('click', () => {
    if (typeof gtag === 'function') {
      gtag('event', 'affiliate_click', {
        event_category: 'affiliate',
        event_label: card.innerText.trim(),
        value: index + 1
      });
    }
  });
});
