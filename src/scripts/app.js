$(document).ready(function () {
    // Get UI Elements
    var btnQuote = $('button#quote');
    var txtWithQuotes = $('textarea#textWithQuotes');
    var btnDequote = $('button#dequote');
    var txtWithoutQuotes = $('textarea#textWithoutQuotes');


    //
    // Define logic
    //

    function quote(text, quote, padding) {
        return text;
    }

    function dequote(text, quote, padding) {
        return text;
    }


    //
    // Setup click handlers
    //

    btnQuote.on('click', function (e) {
        e.preventDefault();

        var quotes = '"';
        var padding = '\\n';
        var textToQuote = txtWithoutQuotes.val();

        txtWithQuotes.val(quote(textToQuote, quotes, padding));
    });

    btnDequote.on('click', function (e) {
        e.preventDefault();

        var quotes = '"';
        var padding = '\\n';
        var textToDequote = txtWithQuotes.val();

        txtWithoutQuotes.val(dequote(textToDequote, quotes, padding));
    });
});
