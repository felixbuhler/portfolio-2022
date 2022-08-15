Marquee3k.init()

// Hide Description

$('.checkcheck').click(function () {

    this.checked ? $('project-info').hide(500) : $('project-info').show(500);

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

// Switch Follow

$(document).mousemove(function (e) {
    $('switch').offset({
        left: e.pageX - 30
    });
});