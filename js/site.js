Marquee3k.init()

// Hide Description
$('project-info').hide(500)
$('.checkcheck').click(function () {

  this.checked ? $('project-info').show(500) : $('project-info').hide(500);

  this.checked ? $("body").get(0).style.setProperty("--color-switch", "var(--color-accent)") : $("body").get(0).style.setProperty("--color-switch", "var(--color-red)")
});

// Draggable

const sortable = new Draggable.Sortable(document.querySelectorAll('projects'), {
  draggable: 'project',
  swapAnimation: {
    duration: 200,
    easingFunction: 'ease-in-out',
    horizontal: true
  },
  plugins: [Draggable.Plugins.SwapAnimation]
});

// Fields Flip

let $elements = $("art .tt");
$(".ttt").tickerText($elements, 0, 3, 30, 0, 0.5, 2, false, "timerpause", "timerstop");

// Watch

function startTime() {
  var e = new Date(),
    t = e.getHours(),
    n = e.getMinutes(),
    s = e.getSeconds(),
    n = checkTime(n),
    s = checkTime(s);
  document.getElementById("time").innerHTML =
    t +
    "<span class='time-dots'>:</span>" +
    n +
    "<span class='time-dots'>:</span>" +
    s;
  setTimeout(startTime, 500);
}

function checkTime(e) {
  return e < 10 && (e = "0" + e), e;
}

// Avoid Spam Mail

const links = document.querySelectorAll("[data-part1][data-part2][data-part3]");
for (const link of links) {
  const attrs = link.dataset;
  link.setAttribute(
    "href",
    `mailto:${attrs.part1}@${attrs.part2}.${attrs.part3}?subject=${encodeURIComponent(link.textContent)}`
  );
}

// A-Frame Mobile UI

$('.a-modal').appendTo('body');