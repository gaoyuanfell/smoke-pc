const router = [
  {
    path: "home",
    name: "home",
    component: "home"
  },
  {
    path: "product",
    name: "product",
    component: "product"
  },
  {
    path: "store",
    name: "store",
    component: "store"
  },
  {
    path: "about",
    name: "about",
    component: "about"
  },
  {
    path: "join",
    name: "join",
    component: "join"
  }
];

const hash = location.hash.substr(1) || "home";

hashchange(hash);

function animate(ref) {
  if (!ref.animate) return;
  ref.animate([{ opacity: 0 }, { opacity: 1 }], {
    duration: 222,
    easing: "linear"
  });
}

function hashchange(hash = "home") {
  for (let index = 0; index < router.length; index++) {
    const { path, component } = router[index];
    const ref = document.querySelector(`[route-id="${component}"]`);
    const link = document.querySelector(`[route-link="${component}"]`);
    if (!ref) continue;
    if (path !== hash) {
      ref.style.display = "none";
      link && link.classList.remove("action");
      continue;
    }

    link && link.classList.add("action");
    if (ref.nodeName === "TEMPLATE") {
      const clon = ref.content.cloneNode(true);
      ref.parentNode.insertBefore(clon, ref);
      ref.parentNode.removeChild(ref);
      const _ref = document.querySelector(`[route-id="${component}"]`);
      animate(_ref);
    } else {
      ref.style.display = "";
      animate(ref);
    }
  }
}

window.addEventListener("hashchange", () => {
  hashchange(location.hash.substr(1));
});

import "./home";
