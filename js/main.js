function toggleClass(elem, className) {
    var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, ' ' ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0 ) {
            newClass = newClass.replace( ' ' + className + ' ' , ' ' );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}

var postTitles = Array.prototype.slice.call(document.getElementsByClassName('minimalpost'));

postTitles.forEach(function(elem) {
  var postLink = elem.getElementsByClassName('post-link');
  elem.getElementsByClassName('post-link')[0].addEventListener('click', function(event) {
    var tmp = elem.getElementsByClassName('blog-content');
    toggleClass(elem.getElementsByClassName('blog-content')[0], 'bloginvis')
  });
});
