Marquee3k.init()


$('project-info').hide(500)
$('.checkcheck').click(function() {
    
    this.checked ? $('project-info').show(500) : $('project-info').hide(500); //time for show
});

// Draggable

const sortable = new Draggable.Sortable(document.querySelectorAll('projects'), {
    draggable: 'project',
    swapAnimation: {
      duration: 200,
      easingFunction: 'ease-in-out'    },
    plugins: [Draggable.Plugins.SwapAnimation]
  });