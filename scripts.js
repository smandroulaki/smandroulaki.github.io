(function () {
  var tabs = document.getElementById("tabs"),
    panels = document.querySelectorAll(".panel");
  panels.forEach(function (p, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "btn alt";
    b.textContent = p.dataset.name;
    b.setAttribute("aria-pressed", String(i === 0));
    b.addEventListener("click", function () {
      tabs.querySelectorAll("button").forEach(function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      panels.forEach(function (q) {
        q.hidden = q !== p;
      });
    });
    tabs.appendChild(b);
  });

  var faq = [
    [
      "Where do you live?",
      "I live in Thessaloniki. I moved here to study Computer Science and I stayed for the city, the people and the opportunities.",
    ],
    [
      "Where are you from?",
      "I’m from Crete. Born between the mountains and the sea. Always creating and mixing things up.",
    ],

    [
      "Why frontend?",
      "I like to make things that people can see and use. Things that are useful, beautiful and fun. I like to make things that work well on any device.",
    ],
    [
      "How did you start?",
      "I used to paint on Windows XP Paint when I was just a kid. Then I discovered HTML and CSS and started building my own pages. Then I chose to study Computer Science and I never looked back.",
    ],
    [
      "What do you do offline?",
      "Mostly things that give my eyes a break from the screen. I like to make clay art, paint, try new recipes and new hobbies.",
    ],
    ["Are you hiring-ready?", "Absolutely Yes. Say hi below."],
  ];

  var qs = document.getElementById("qs"),
    ans = document.getElementById("ans");
  faq.forEach(function (f) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "btn alt";
    b.textContent = f[0];
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      qs.querySelectorAll("button").forEach(function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      ans.textContent = f[1];
    });
    qs.appendChild(b);
  });

  var av = document.getElementById("avatar"),
    sws = document.getElementById("swatches"),
    hn = document.getElementById("hname"),
    bb = document.getElementById("bubble"),
    cu = document.getElementById("custom"),
    tg = document.getElementById("targets");

  var hairs = [
    ["#3a2a24", "Natural brown", "Natural. Classic. Reliable. "],
    [
      "rgb(226, 86, 128)",
      "Raspberry pink",
      "My highlights after 10 washes. Great taste.",
    ],
    ["#FF0090", "Bold Magenda", "My real highlights. Great taste."],
    ["#0012da", "Electric blue", "Looks like I'm about to turn into a Smurf."],
    ["#3ee6b0", "Mint compile", "Build passed. Hair passed too."],
    ["#f1c40e", "Banana yellow", "Bold. Bright. A little overconfident."],
    ["#9b5cff", "Purple hex", "#9b5cff looks good in any theme."],
    ["#ff6a1a", "Flame orange", "Hot take: this suits me."],
    ["#f2efe6", "Platinum", "Fresh out of the staging environment."],
  ];
  var target = "hl",
    cur = { base: "#3a2a24", hl: "#FF0090" },
    labels = { hl: "Highlights", base: "Base hair", all: "All hair" };
  function sync() {
    sws.querySelectorAll("button").forEach(function (b) {
      var c = b.dataset.c,
        on =
          target === "all" ? cur.base === c && cur.hl === c : cur[target] === c;
      b.setAttribute("aria-pressed", String(on));
    });
  }
  function setHair(c, name, say) {
    if (target !== "base") cur.hl = c;
    if (target !== "hl") cur.base = c;
    av.style.setProperty("--hl", cur.hl);
    av.style.setProperty("--base", cur.base);
    hn.textContent = labels[target] + ": " + name;
    bb.textContent = say;
    cu.value = c;
    sync();
  }
  [
    ["hl", "Highlights"],
    ["base", "Base hair"],
    ["all", "Everything"],
  ].forEach(function (t, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "btn alt";
    b.textContent = t[1];
    b.setAttribute("aria-pressed", String(i === 0));
    b.addEventListener("click", function () {
      target = t[0];
      tg.querySelectorAll("button").forEach(function (x) {
        x.setAttribute("aria-pressed", String(x === b));
      });
      hn.textContent = "Changing: " + labels[target];
      bb.textContent = "Now pick a colour below.";
      sync();
    });
    tg.appendChild(b);
  });
  hairs.forEach(function (h) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "sw";
    b.style.background = h[0];
    b.dataset.c = h[0];
    b.setAttribute("aria-label", h[1]);
    b.setAttribute("aria-pressed", "false");
    b.addEventListener("click", function () {
      setHair(h[0], h[1], h[2]);
    });
    sws.appendChild(b);
  });
  sync();
  document.getElementById("rand").addEventListener("click", function () {
    var c =
      "#" +
      ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6);
    setHair(c, "Random " + c, "Never seen this one before. Ship it.");
  });
  cu.addEventListener("input", function () {
    setHair(cu.value, "Custom " + cu.value, "Ooh, you have taste.");
  });

  var skins = [
      null,
      {
        "--bg": "#315C2B",
        "--a": "#9EA93F ",
        "--b": "#FF521B",
        "--c": "#FC9E4F",
        "--on-bg": "#020122",
      },
      {
        "--bg": "#ff4fa3",
        "--a": "#2b3bff",
        "--b": "#ffd83d",
        "--c": "#3ee6b0",
        "--on-bg": "#0e1033",
      },
      {
        "--bg": "#7B0D1E",
        "--a": "#0B7189",
        "--b": "#A1E8CC",
        "--c": "#B8B8F3",
        "--on-bg": "#F8E5EE",
      },
      {
        "--bg": "#d81159",
        "--a": "#ffbc42",
        "--b": "#743951",
        "--c": "#73d2de",
        "--on-bg": "#cce1e4",
      },
      {
        "--bg": "#E9190F",
        "--a": "#FFAE03",
        "--b": "#690375",
        "--c": "#FF0F80 ",
        "--on-bg": "#F0D3F7",
      },
      {
        "--bg": "#77625C",
        "--a": "#B2B1CF",
        "--b": "#98D2EB",
        "--c": "#d3cbc5 ",
        "--on-bg": "#E1F2FE",
      },
      {
        "--bg": "#410B13",
        "--a": "#BA1F33",
        "--b": "#91171F",
        "--c": "#CD5D67 ",
        "--on-bg": "#EAEAEA",
      },
    ],
    n = 0,
    root = document.documentElement;
  var keys = ["--bg", "--a", "--b", "--c", "--on-bg"];
  document.getElementById("skin").addEventListener("click", function () {
    n = (n + 1) % skins.length;
    keys.forEach(function (k) {
      root.style.removeProperty(k);
    });
    if (skins[n])
      Object.keys(skins[n]).forEach(function (k) {
        root.style.setProperty(k, skins[n][k]);
      });
  });
})();
