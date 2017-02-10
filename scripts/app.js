$(document).ready(function () {
    // Get UI Elements
    var btnQuote = $('button#quote');
    var txtWithQuotes = $('textarea#textWithQuotes');
    var btnDequote = $('button#dequote');
    var txtWithoutQuotes = $('textarea#textWithoutQuotes');

    //
    // Define logic
    //

    function quote(text, quote, padding, leadingConcat) {
        var lines = text.split(/\r\n|\n/g);

        return lines
            .map(function (line, idx) {
                var first = idx === 0;
                var last = idx === lines.length - 1;

                var lcat = leadingConcat && !first ? '+ ' : '';
                var tcat = !leadingConcat && !last ? ' +' : '';

                return lcat +
                    quote +
                    line +
                    (last ? '' : padding) +
                    quote +
                    tcat;
            })
            .join('\n');
    }

    function dequote(text) {
        return text
            .replace(/^(\+ ){0,1}["']/mg, '')
            .replace(/(\\n| ){0,1}["']( \+){0,1}$/mg, '');
    }

    //
    // Setup click handlers
    //

    btnQuote.on('click', function (e) {
        e.preventDefault();

        var quotes = $('input[name=quoteRadios]:checked').val();
        var padding = $('input[name=paddingRadios]:checked').val();
        var textToQuote = txtWithoutQuotes.val();
        var leadingConcat = $('input[name=concatRadios]:checked').val() === 'true';

        txtWithQuotes.val(quote(textToQuote, quotes, padding, leadingConcat));
    });

    btnDequote.on('click', function (e) {
        e.preventDefault();

        var textToDequote = txtWithQuotes.val();

        txtWithoutQuotes.val(dequote(textToDequote));
    });
});
