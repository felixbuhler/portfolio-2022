Marquee3k.init()

$('.checkcheck').click(function() {
    this.checked ? $('project-info').hide(500) : $('project-info').show(500); //time for show
});