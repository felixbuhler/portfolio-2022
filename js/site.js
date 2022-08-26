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

// Watch

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);

setDate();



// A-Frame Mobile UI



$(document).ready(function () {
  var $aframeVisible = $('.a-modal');

  if ($aframeVisible.length) {
    $('intro text').hide();
  }

  $(".a-dialog-button").click(function () {
    $('intro text').show(250);
  });
});