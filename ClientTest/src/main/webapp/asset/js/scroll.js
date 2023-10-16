$('<div id="scroll-bar-indicator"></div>').css({
    width: 0,
    height: '5px',
    backgroundColor: 'cornflowerblue',
    position: 'fixed',
    left: 0,
    top:0,
    border: 0,
    padding: 0,
    margin: 0
}).prependTo($('body'));

$(document).scroll(function() {
    let x = $(document).scrollTop() * 100 / ($(document).outerHeight()-$(window).outerHeight());
    $('#scroll-bar-indicator').css('width', x+'%');
});