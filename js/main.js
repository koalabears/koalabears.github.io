//   alternative to jquery function toggle class (stolen from da internet..)
//   checks whether html element has a particular class (or set of classes)
//   assigned to it and adds it if it is not present or removes it if it is
// ARGS
//   elem:      the html element which will have it's class toggled
//   className: the class which needs toggling
// RETURN
//   This function makes a change to elem. There is no return value
//   i.e return is undefined

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


//   as above alternative to jquery function, checkous whether a HTML element
//   has a particular class
// ARGS
//   elem:      the html element which will have it's class checked
//   className: the class which needs checking
// RETURN
//   boolean, true or false

function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}


//   finds all children of elem with certain and returns them as an array
//   function getElementsByClassName does not return an array
//   (it return a HTMLCollection). Array.slice can be used to turns an
//   array-like object into an array. since it is an Array method we cannot
//   call it as a method of our HTMLCollection. Instead we find the function in
//   the Array prototype and and apply it to our object using call
// ARGS
//   elem:      the html element which we are looking at the children of
//   className: the class of we are looking for in the children
// RETURN
//   an array holding the children of elem which have class className
function arrFromClass(elem, className) {
  return Array.prototype.slice.call(elem.getElementsByClassName(className));
}

// an array of the divs which wrap each of our posts
var postWrappers = arrFromClass(document, 'minimalpost');

// for each of our post wrappers
postWrappers.forEach(function(elem) {
// find its first child of class blogtitlebanner and attach click listenter
  arrFromClass(elem, 'blogtitlebanner')[0].addEventListener('click',
    function(event) {
// toggle the class bloginvis on the blog content div. css does the rest
    toggleClass(arrFromClass(elem, 'blog-content')[0], 'bloginvis')
  });
});
