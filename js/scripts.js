$(document).ready(function() {
    $("form#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("input#new-first-name").val();
        var inputtedLastName = $("input#new-last-name").val();
        var inputtedStreet = $("input#street").val();
        var inputtedCity = $('input#city').val();
        var inputtedState = $('input#state').val();
        var inputtedZip = $('input#zip').val();

        var newContact = {
                    firstName:inputtedFirstName,
                    lastName: inputtedLastName,
                    address: function() {
                        return inputtedStreet + " " + inputtedCity + ", " + inputtedState + " " + inputtedZip;
                    }
                };

        $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

        $('input#new-first-name').val('');
        $('input#new-last-name').val('');
        $('input#new-address').val('');


        $('.contact').last().click(function() {
        $('#show-contact').show();
        $('#show-contact h2').text(newContact.firstName + ' ' + newContact.lastName);
        $('.first-name').text(newContact.firstName);
        $('.last-name').text(newContact.lastName);
        $('.address').text(newContact.address);

        });

    });
});
