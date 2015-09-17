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

function arrFromClass(elem, className) {
  return Array.prototype.slice.call(elem.getElementsByClassName(className));
}

var postTitles = arrFromClass(document, 'minimalpost');

postTitles.forEach(function(elem) {
  elem.getElementsByClassName('post-link')[0].addEventListener('click', function(event) {
    toggleClass(elem.getElementsByClassName('blog-content')[0], 'bloginvis')
  });
});
