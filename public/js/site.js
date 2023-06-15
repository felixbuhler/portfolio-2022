Marquee3k.init()

// Hide Description
$('.checkcheck').click(function () {

  this.checked ? $('projects').addClass('fullInfo') : $('projects').removeClass('fullInfo');
  this.checked ? $("body").get(0).style.setProperty("--color-switch", "var(--color-accent)") : $("body").get(0).style.setProperty("--color-switch", "var(--color-red)")
  this.checked ? $('switch-text div').text("🙉") : $('switch-text div').text("🙈");

  /*
  this.checked ? $('project-info').show(500) : $('project-info').hide(500);
  
  this.checked ? $("body").get(0).style.setProperty("--color-switch", "var(--color-accent)") : $("body").get(0).style.setProperty("--color-switch", "var(--color-red)")
  this.checked ? $('project-info').css('opacity', '1') : $('project-info').css('opacity', '0');
  this.checked ? $('project project-info>*').css('opacity', '1') : $('project project-info>*').css('opacity', '0');
  this.checked ? $('project h2').css('opacity', '1') : $('project h2').css('opacity', '0');
  this.checked ? $('project a[project-link]').css('opacity', '1') : $('project a[project-link]').css('opacity', '0');
  */

});

// Projects Slider 



$(document).ready(function () {

  if ($(window).innerWidth() >= 1280) {
    // Set default value
    $("#gridColumns").val(5);
    console.log("Grid Medium Screen")
  } else if ($(window).innerWidth() <= 767.98) {
    // Set default value
    $("#gridColumns").val(1);
    console.log("Grid Small Screen")
  } else {
    // Set default value
    $("#gridColumns").val(3);
    console.log("Grid Big Screen")
  }

  // Put in Variable
  $initialColumnValue = $("#gridColumns").val();

  // Set Text
  $("#slider_value").html($initialColumnValue + " Columns")

});

$(window).on('resize', function () {
  if ($(window).innerWidth() >= 1280) {
    // Set default value
    $("#gridColumns").val(5);
    console.log("Grid Medium Screen")
  } else if ($(window).innerWidth() <= 767.98) {
    // Set default value
    $("#gridColumns").val(1);
    console.log("Grid Small Screen")
  } else {
    // Set default value
    $("#gridColumns").val(3);
    console.log("Grid Big Screen")
  }

  // Put in Variable
  $initialColumnValue = $("#gridColumns").val();

  // Set Text
  $("#slider_value").html($initialColumnValue + " Columns")
});

$(document).on('input change', '#gridColumns', function () {
  $gridValue = $(this).val();
  if ($gridValue == 1) {
    $("projects").css("grid-template-columns", "1fr");
    $("#slider_value").html(this.value + " Column")

  } else if ($gridValue == 2) { $("projects").css("grid-template-columns", "1fr 1fr"); $("#slider_value").html(this.value + " Columns") }
  else if ($gridValue == 3) { $("projects").css("grid-template-columns", "1fr 1fr 1fr"); $("#slider_value").html(this.value + " Columns") }
  else if ($gridValue == 4) { $("projects").css("grid-template-columns", "1fr 1fr 1fr 1fr"); $("#slider_value").html(this.value + " Columns") }
  else if ($gridValue == 5) { $("projects").css("grid-template-columns", "1fr 1fr 1fr 1fr 1fr"); $("#slider_value").html(this.value + " Columns") }
  else if ($gridValue == 6) { $("projects").css("grid-template-columns", "1fr 1fr 1fr 1fr 1fr 1fr"); $("#slider_value").html(this.value + " Columns") }
  else if ($gridValue == 7) { $("projects").css("grid-template-columns", "1fr 1fr  1fr 1fr 1fr 1fr 1fr"); $("#slider_value").html(this.value + " Columns") };

  
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
    $('intro content[info] text').hide();
  }

  $(".a-dialog-button").click(function () {
    $('intro content[info] text').show();
  });



});

// Smooth Scroll

var scroll = new SmoothScroll('header a[href*="#"]', { updateURL: false, header: '[data-scroll-header]' });
var scrollFooter = new SmoothScroll('header a.footer', { updateURL: false, header: '' });
var scrollClients = new SmoothScroll('header a.clients', { updateURL: false, offset: 100 });


// Add target="_blank" to p Links 

$(document).ready(function () {
  $('project-info p a').attr('target', '_blank');
});


// Mouse

$(document).on('mousemove', function (e) {
  $('mouse').css({
    left: e.pageX,
    top: e.pageY
  });
});

$(function () {
  $('a').hover(function () {
    $('mouse').toggleClass("mouse-see-something");
  }, function () {
    $('mouse').toggleClass("mouse-see-something");
  });

  $('#show-education-features').hover(function () {
    $('mouse').toggleClass("mouse-see-something");
  }, function () {
    $('mouse').toggleClass("mouse-see-something");
  });

  $('.cm-btn').hover(function () {
    $('mouse').toggleClass("mouse-see-something");
  }, function () {
    $('mouse').toggleClass("mouse-see-something");
  });


});


