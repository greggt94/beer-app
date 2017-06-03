$(document).ready(function() {
    $('.slider').slider();
    $('.button-collapse').sideNav({
        menuWidth: 300,
        edge: 'left',
        draggable: true
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 50, // Creates a dropdown of 15 years to control year
        max: new Date(2017, 5, 10)
    });


});
