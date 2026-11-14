/* =========================================================
   WEBSITE AMATJAMBU — script.js
   >>> GANTI ISI WEBSITE DI BAGIAN "DATA" DI BAWAH INI <<<
   Semua foto / video / lagu ditaruh di folder: media/
   ========================================================= */

const DATA = {
  name: "amatjambu",
  role: "Front-end Creator — HTML · CSS · JS",
  titles: ["Web Developer", "Desainer", "Kreator"],           // tulisan berganti di banner
  bio: "Halo, aku amatjambu. Aku suka bikin website dari nol — mulai dari HTML, dirapikan pakai CSS, lalu dihidupkan dengan JavaScript. Di sini kamu bisa lihat foto, video, dan karya-karyaku.",
  about: "Buat aku, ngoding itu seperti menggambar: tiap baris kode menentukan warna, gerak, dan rasa dari sebuah halaman. Aku terus belajar dan bikin hal baru tiap hari.",
  avatar: "media/avatar.jpg",                                   // foto profil (bulat)

  // Foto banner hitam-putih (berganti otomatis)
  banner: ["media/banner-1.jpg", "media/banner-2.jpg", "media/banner-3.jpg", "media/banner-4.jpg"],

  // Lagu (tombol kiri bawah)
  music: { src: "media/lagu.mp3", title: "[Be My Baby]" },

  // Video — tambah baris baru untuk video lain
  videos: [
    { src: "media/video-1.mp4", title: "[Website pertama]", story: "[Website Romance Pertama]" },
    { src: "media/video-2.mp4", title: "[Website Kedua]", story: "[Website Gabut Yekan]" },
    { src: "media/video-3.mp4", title: "[Cooming Soon!]", story: "[Cerita singkat video 3]" },
  ],

  // Jumlah foto galeri: media/foto-1.jpg ... media/foto-24.jpg
  photoCount: 24,

  // Medsos — ganti handle & url
  socials: [
    { label: "TikTok", handle: "[Muhmddilham]", url: "https://www.tiktok.com/@muhmdddilham" },
    { label: "Instagram", handle: "[Muhmdddilham]", url: "https://www.instagram.com/muhmdddilham?mdxt=MTM0dW0wajk3bGJxeQ==" },
    { label: "Xbox", handle: "[AmatJambu]", url: "#" },
    { label: "Discord", handle: "[AmatJambu]", url: "https://discord.com/users/699406364610658326" },
  ],

  skills: [
    ["HTML5", "Struktur semantik yang rapi"],
    ["CSS3", "Animasi, grid, glass & glow"],
    ["JavaScript", "Interaksi & efek scroll"],
    ["Responsive", "Enak di HP maupun laptop"],
  ],
  marquee: ["HTML", "CSS", "JavaScript", "Desain", "Animasi", "Tipografi", "Kreatif"],
};

/* =========================================================
   Di bawah ini kode mesin website. Tidak perlu diubah.
   ========================================================= */
const $ = (s) => document.querySelector(s);
const $$ = (s) => document.querySelectorAll(s);
const PHOTOS = Array.from({ length: DATA.photoCount }, (_, i) => `media/foto-${i + 1}.jpg`);

const ICONS = {
  TikTok: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.73 5.73 0 0 0-.77-.05A5.69 5.69 0 0 0 4.17 15.3 5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.25-1.48z"/></svg>',
  Instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  Xbox: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 11h4M8 9v4M15 12h.01M18 10h.01"/><path d="M17.3 5H6.7a4 4 0 0 0-4 3.6l-.6 5.6A3 3 0 0 0 5 17.5c1 0 1.9-.5 2.4-1.3L8.5 15h7l1.1 1.2c.5.8 1.4 1.3 2.4 1.3a3 3 0 0 0 2.9-3.3l-.6-5.6A4 4 0 0 0 17.3 5z"/></svg>',
  Discord: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a8 8 0 0 1-11.8 7L3 21l2-6.2A8 8 0 1 1 21 12z"/></svg>',
};

/* ---------- Isi teks ---------- */
$$(".js-name").forEach((el) => (el.textContent = DATA.name));
$(".js-name-dot").textContent = DATA.name + ".";
$("#role").textContent = DATA.role;
$("#bio").textContent = DATA.bio;
$("#about-text").textContent = DATA.about;
$("#copy").textContent = `© ${new Date().getFullYear()} ${DATA.name}`;
const av = $("#avatar");
av.src = DATA.avatar;
av.onerror = () => av.remove();

$("#name").innerHTML = DATA.name.split("").map((c, i) =>
  `<span class="ch"><b style="transition-delay:${0.2 + i * 0.06}s"><em style="animation-delay:${1.8 + i * 0.12}s">${c}</em></b></span>`).join("");

$("#heroSocials").innerHTML = DATA.socials.map((s) =>
  `<span class="magnet"><a class="soc-icon" href="${s.url}" aria-label="${s.label}">${ICONS[s.label] || "•"}</a></span>`).join("");
$("#socials").innerHTML = DATA.socials.map((s) =>
  `<li><a href="${s.url}" target="_blank" rel="noreferrer"><span class="display">${ICONS[s.label] || ""}${s.label}</span><span class="mono muted">${s.handle} <span class="arrow">&#8599;</span></span></a></li>`).join("");
$("#skills").innerHTML = DATA.skills.map(([n, d], i) =>
  `<li class="reveal" style="transition-delay:${i * 0.06}s"><span><span class="mono fire num">0${i + 1}</span><span class="display">${n}</span></span><span class="muted small">${d}</span></li>`).join("");
const row = DATA.marquee.map((w, i) => `<span class="word ${i % 2 ? "outline" : ""}">${w}</span><span class="star spin-sym">${i % 2 ? "&#10023;" : "&#10022;"}</span>`).join("");
$("#marquee").innerHTML = row + row;

$("#code").innerHTML = [
  `<span class="t">&lt;section</span> <span class="a">class</span>=<span class="s">"profil"</span><span class="t">&gt;</span>`,
  `  <span class="t">&lt;h1&gt;</span>${DATA.name}<span class="t">&lt;/h1&gt;</span>`,
  `  <span class="t">&lt;p&gt;</span>HTML · CSS · JS<span class="t">&lt;/p&gt;</span>`,
  `<span class="t">&lt;/section&gt;</span>`, ``,
  `<span class="c">.profil</span> {`,
  `  <span class="a">color</span>: <span class="s">var(--fire)</span>;`,
  `  <span class="a">animation</span>: <span class="s">nyala 2s infinite</span>;`, `}`,
].map((l, i) => `<span class="ln">${i + 1}</span>${l}`).join("\n") + `\n<span class="ln"></span><span class="caret"></span>`;

/* ---------- Simbol estetik melayang ---------- */
const SYMS = ["✦", "✧", "◇", "+", "※", "○", "✳", "</>", "◎"];
$$(".has-sym").forEach((sec, s) => {
  for (let i = 0; i < 8; i++) {
    const el = document.createElement("span");
    el.className = "sym";
    el.textContent = SYMS[(i + s * 3) % SYMS.length];
    el.style.cssText = `left:${(i * 37 + s * 23 + 7) % 96}%;top:${(i * 53 + s * 31 + 11) % 92}%;font-size:${[18, 28, 14, 36, 22, 16, 30, 20][(i + s) % 8]}px;color:${i % 3 ? "var(--mute)" : "var(--fire)"};opacity:${i % 3 ? 0.35 : 0.5};animation-duration:${9 + ((i * 3 + s) % 7)}s;animation-delay:${-i * 1.3}s`;
    sec.prepend(el);
  }
});

/* ---------- Loading screen ---------- */
document.body.classList.add("locked");
let n = 0;
const count = setInterval(() => {
  n = Math.min(100, n + 1 + Math.floor(Math.random() * 6));
  $("#counter").textContent = String(n).padStart(3, "0");
  $("#bar").style.width = n + "%";
  if (n >= 100) { clearInterval(count); $("#enter").classList.remove("hidden"); }
}, 55);
const enter = (music) => {
  $("#loader").classList.add("out");
  document.body.classList.remove("locked");
  document.body.classList.add("ready");
  setTimeout(() => $("#loader").remove(), 1100);
  if (music) playMusic();
};
$("#enterMusic").onclick = () => enter(true);
$("#enterSilent").onclick = () => enter(false);

/* ---------- Banner: slideshow, teks berganti, cahaya kursor ---------- */
$("#slides").innerHTML = DATA.banner.map((src, i) => `<img src="${src}" alt="" class="${i === 0 ? "on" : ""}">`).join("");
let slide = 0;
setInterval(() => {
  const imgs = $$("#slides img");
  imgs[slide].classList.remove("on");
  slide = (slide + 1) % imgs.length;
  imgs[slide].classList.add("on");
}, 6500);

let rot = 0;
const rotBox = $("#rotator");
const showTitle = () => {
  const old = rotBox.querySelector("span");
  const el = document.createElement("span");
  el.textContent = DATA.titles[rot];
  el.style.transform = "translateY(100%)"; el.style.opacity = 0;
  rotBox.appendChild(el);
  requestAnimationFrame(() => requestAnimationFrame(() => { el.style.transform = "none"; el.style.opacity = 1; }));
  if (old) { old.style.transform = "translateY(-100%)"; old.style.opacity = 0; setTimeout(() => old.remove(), 700); }
  rot = (rot + 1) % DATA.titles.length;
};
showTitle();
setInterval(showTitle, 2400);

const banner = $("#banner"), torch = $("#torch");
banner.addEventListener("pointermove", (e) => {
  if (e.pointerType !== "mouse") return;
  const r = banner.getBoundingClientRect();
  torch.style.opacity = 1;
  torch.style.transform = `translate(${e.clientX - r.left}px, ${e.clientY - r.top}px)`;
});
banner.addEventListener("pointerleave", () => (torch.style.opacity = 0));

/* ---------- Tombol magnet ---------- */
$$(".magnet").forEach((m) => {
  m.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    const r = m.getBoundingClientRect();
    m.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.35}px, ${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
  });
  m.addEventListener("pointerleave", () => (m.style.transform = ""));
});

/* ---------- Muncul saat di-scroll + huruf acak ---------- */
const CH = "!<>-_/[]{}=+*^?#✦";
const scramble = (el) => {
  const text = el.dataset.t || (el.dataset.t = el.textContent);
  let f = 0;
  const id = setInterval(() => {
    f++;
    if (f / 2 >= text.length) { clearInterval(id); el.textContent = text; return; }
    el.textContent = text.split("").map((c, i) => (i < f / 2 || c === " " ? c : CH[Math.floor(Math.random() * CH.length)])).join("");
  }, 45);
};
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  if (!e.isIntersecting) return;
  e.target.classList.add("in");
  e.target.querySelectorAll(".scramble").forEach(scramble);
  io.unobserve(e.target);
}), { threshold: 0.1 });
$$(".reveal, .grid").forEach((el) => io.observe(el));

/* ---------- Galeri foto ---------- */
const grid = $("#grid");
grid.innerHTML = PHOTOS.map((src, i) =>
  `<button class="tile" data-i="${i}" style="transition-delay:${i * 0.07}s, ${i * 0.07}s, 0s, 0s"><img src="${src}" alt="Foto ${i + 1}" loading="lazy"></button>`).join("");
grid.querySelectorAll(".tile img").forEach((img) => {
  img.onerror = () => { const t = img.parentElement; t.classList.add("empty"); t.innerHTML = `<b class="fire">+</b>Foto ${+t.dataset.i + 1}<br>${PHOTOS[t.dataset.i]}`; };
});
new MutationObserver((_, ob) => {
  if (!grid.classList.contains("in")) return;
  ob.disconnect();
  setTimeout(() => grid.querySelectorAll(".tile").forEach((t) => (t.style.transitionDelay = "0s")), PHOTOS.length * 70 + 900);
}).observe(grid, { attributes: true, attributeFilter: ["class"] });

let lb = 0;
const lbShow = () => { $("#lbImg").src = PHOTOS[lb]; $("#lbCount").textContent = `${lb + 1} / ${PHOTOS.length}`; };
const lbMove = (d) => { lb = (lb + d + PHOTOS.length) % PHOTOS.length; lbShow(); };
grid.addEventListener("click", (e) => {
  const t = e.target.closest(".tile");
  if (!t || t.classList.contains("empty")) return;
  lb = +t.dataset.i; lbShow();
  $("#lightbox").classList.remove("hidden");
});
$("#lbPrev").onclick = () => lbMove(-1);
$("#lbNext").onclick = () => lbMove(1);
$("#lbClose").onclick = () => $("#lightbox").classList.add("hidden");
$("#lightbox").addEventListener("click", (e) => { if (e.target.id === "lightbox") e.target.classList.add("hidden"); });

const swipe = (el, onLeft, onRight) => {
  let x0 = null;
  el.addEventListener("pointerdown", (e) => (x0 = e.clientX));
  el.addEventListener("pointerup", (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (dx < -60) onLeft(); else if (dx > 60) onRight();
  });
};
swipe($("#lbImg"), () => lbMove(1), () => lbMove(-1));

/* ---------- Video ---------- */
const player = $("#player");
let vi = 0;
const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, "0")}`;
const loadVideo = (i) => {
  vi = i;
  $("#playerEmpty").classList.add("hidden");
  $("#bigPlay").classList.remove("hidden");
  player.src = DATA.videos[i].src;
  $$(".pick").forEach((p, k) => p.classList.toggle("active", k === i));
};
player.onerror = () => {
  $("#playerEmpty").classList.remove("hidden");
  $("#bigPlay").classList.add("hidden");
  $("#playerEmptyPath").textContent = "Taruh file di " + DATA.videos[vi].src;
};
const toggle = () => (player.paused ? player.play().catch(() => {}) : player.pause());
player.onclick = toggle; $("#bigPlay").onclick = toggle; $("#playBtn").onclick = toggle;
player.onplay = () => { $("#bigPlay").classList.add("hidden"); $("#playBtn").innerHTML = "&#10074;&#10074;"; };
player.onpause = () => { $("#bigPlay").classList.remove("hidden"); $("#playBtn").innerHTML = "&#9654;"; };
player.ontimeupdate = () => {
  $("#time").textContent = `${fmt(player.currentTime)} / ${fmt(player.duration || 0)}`;
  $("#seekFill").style.width = player.duration ? (player.currentTime / player.duration) * 100 + "%" : 0;
};
$("#seek").onclick = (e) => { const r = e.currentTarget.getBoundingClientRect(); if (player.duration) player.currentTime = ((e.clientX - r.left) / r.width) * player.duration; };
$("#muteBtn").onclick = () => { player.muted = !player.muted; $("#muteBtn").innerHTML = player.muted ? "&#128263;" : "&#128266;"; };

$("#picks").innerHTML = DATA.videos.map((v, i) =>
  `<div class="pick"><button class="sel" data-i="${i}"><span class="num">${String(i + 1).padStart(2, "0")}</span><span class="ttl">${v.title}</span></button><button class="exp" data-i="${i}" aria-label="Buka detail">&#x26F6;</button></div>`).join("");
$("#picks").addEventListener("click", (e) => {
  const sel = e.target.closest(".sel"), exp = e.target.closest(".exp");
  if (sel) loadVideo(+sel.dataset.i);
  if (exp) openDetail(+exp.dataset.i);
});
loadVideo(0);

/* ---------- Detail video layar penuh ---------- */
let di = 0;
const renderDetail = () => {
  const v = DATA.videos[di];
  $("#dMedia").innerHTML = `<video src="${v.src}" controls autoplay playsinline></video>`;
  const vid = $("#dMedia video");
  vid.onerror = () => ($("#dMedia").innerHTML = `<div class="video-empty"><p class="fire big-icon">&#9635;</p><p class="display">Slot video kosong</p><p class="mono small">Taruh file di ${v.src}</p></div>`);
  $("#dMedia").style.animation = "none"; void $("#dMedia").offsetWidth; $("#dMedia").style.animation = "";
  $("#dLabel").textContent = "VIDEO " + String(di + 1).padStart(2, "0");
  $("#dTitle").textContent = v.title;
  $("#dStory").textContent = v.story;
  $("#dCount").textContent = `${di + 1} / ${DATA.videos.length}`;
};
const openDetail = (i) => { player.pause(); di = i; renderDetail(); $("#detail").classList.remove("hidden"); document.body.classList.add("locked"); };
const closeDetail = () => { $("#dMedia").innerHTML = ""; $("#detail").classList.add("hidden"); document.body.classList.remove("locked"); };
const moveDetail = (d) => { di = (di + d + DATA.videos.length) % DATA.videos.length; renderDetail(); };
$("#fullBtn").onclick = () => openDetail(vi);
$("#dClose").onclick = closeDetail;
$("#dPrev").onclick = () => moveDetail(-1);
$("#dNext").onclick = () => moveDetail(1);
swipe($("#dMedia"), () => moveDetail(1), () => moveDetail(-1));

document.addEventListener("keydown", (e) => {
  if (!$("#detail").classList.contains("hidden")) {
    if (e.key === "Escape") closeDetail();
    if (e.key === "ArrowRight") moveDetail(1);
    if (e.key === "ArrowLeft") moveDetail(-1);
  } else if (!$("#lightbox").classList.contains("hidden")) {
    if (e.key === "Escape") $("#lightbox").classList.add("hidden");
    if (e.key === "ArrowRight") lbMove(1);
    if (e.key === "ArrowLeft") lbMove(-1);
  }
});

/* ---------- Musik ---------- */
const audio = $("#audio");
let musicMissing = false;
audio.src = DATA.music.src;
audio.onerror = () => (musicMissing = true);
$("#musicTitle").textContent = DATA.music.title;
const toast = (msg) => { const t = $("#toast"); t.textContent = msg; t.classList.remove("hidden"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.add("hidden"), 2600); };
function playMusic() {
  audio.play().then(() => { $("#musicBtn").classList.add("playing"); $("#musicIcon").innerHTML = "&#10074;&#10074;"; }).catch(() => {});
}
$("#musicBtn").onclick = () => {
  if (musicMissing) return toast("Lagu belum ada — taruh file di " + DATA.music.src);
  if (audio.paused) playMusic();
  else { audio.pause(); $("#musicBtn").classList.remove("playing"); $("#musicIcon").innerHTML = "&#9654;"; }
};

/* ---------- Suara klik ---------- */
let actx;
document.addEventListener("click", (e) => {
  if (!e.target.closest("button, a")) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  actx = actx || new AC();
  const t = actx.currentTime, o = actx.createOscillator(), g = actx.createGain();
  o.frequency.setValueAtTime(1500, t); o.frequency.exponentialRampToValueAtTime(520, t + 0.05);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.08, t + 0.004); g.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);
  o.connect(g).connect(actx.destination); o.start(t); o.stop(t + 0.08);
});

/* ---------- Tema, menu HP, garis scroll ---------- */
const setTheme = (dark) => {
  document.documentElement.classList.toggle("dark", dark);
  $("#themeBtn").innerHTML = dark ? "&#9728;" : "&#9790;";
  localStorage.setItem("aj-theme", dark ? "dark" : "light");
};
setTheme(localStorage.getItem("aj-theme") !== "light");
$("#themeBtn").onclick = () => setTheme(!document.documentElement.classList.contains("dark"));
$("#menuBtn").onclick = () => $("#mobileMenu").classList.toggle("hidden");
$$("#mobileMenu a").forEach((a) => (a.onclick = () => $("#mobileMenu").classList.add("hidden")));
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - innerHeight;
  $("#progress").style.transform = `scaleX(${h > 0 ? scrollY / h : 0})`;
}, { passive: true });
