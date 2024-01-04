 const observer = new IntersectionObserver(f, {
  threshold:[0,1]
});

function f(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting && entry.intersectionRatio >= 1) {
      entry.target.classList.toggle("inbound", true)
    }
    else {
      entry.target.classList.toggle("inbound", false)
    }
  }
}

const itemEls = Array.from(document.querySelectorAll(".item"));
for (const itemEl of itemEls)
  observer.observe(itemEl)