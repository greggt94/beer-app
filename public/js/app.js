$(document).ready(function() {
    // initialize slider for landing page
    $('.slider').slider();
    // initialize mobile menu
    $('.button-collapse').sideNav({
        menuWidth: 300, // Menu width
        edge: 'left',
        draggable: true // Makes menu draggable with touchscreen
    });
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 50, // Creates a dropdown of 15 years to control year
        max: new Date(2017, 5, 10) // Sets max date to today
    });


});
