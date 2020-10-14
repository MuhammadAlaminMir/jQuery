// Adding and removing DOM elements
// we have some built in methods to do this :

// after(): It adds an element after the specified element
// before(): It adds an element before the specified element
// append(): It adds an element as last child to the specified element
// perpend(): It adds an element as fast child to the specified element
// remove(): It removes an element from DOM

// Modifying properties and Attributes:

// attr() method to either fetch the value of and attribute from the first element in the selected set or set attribute values onto all matched elements

// Other Attribute methods:
/* 
            removeAttr(name)
            hasClass(class)
            addClass(class)
            removeClass(class)
            toggleClass(class)
            prop()
            .attr()
            */
//    jQuery has a clone method thats help up to clone html tag
// if we want event also clone so that we have to give a parameter true

$(document).ready(() => {
    $('#first-block').text('hey my web pase is ready');
    $('#second-block').prepend('<h4> friends:</h4>');
    $('#second-block>ul').append('<li>likhon</li>');
    $('ul').attr('id', 'ul-id');
    console.log($('ul').attr('id'));
    $('#first-block').clone().appendTo('ul');
});
