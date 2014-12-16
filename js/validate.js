(function( $ ) {
 
  $.fn.validate = function ( options ) {
 
    var settings = $.extend({
      onblur: false,
      requiredmsg: 'This field is required.',
      emailmsg: 'This emailaddress is not valid.'
    }, options );
 
    return this.each(function() {
      //$( this ).addClass( settings.option2 ).addClass( settings.option1 );
      function checkForm(formElem) {
        var pass = true; 
        return pass;
      }

      $(this).submit(function (e) {
        e.preventDefault();
        alert('What are we doing?');
      });
    });
 
  };
 
}( jQuery ));