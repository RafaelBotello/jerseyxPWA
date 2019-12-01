;( function( $, window, undefined ) {
function showProducts(minPrice, maxPrice) {
    $("#products div").hide().filter(function() {
        var price = parseInt($(this).data("price"), 10);
        return price >= minPrice && price <= maxPrice;
    }).show();
}

    $(function() {
        var options = {
            range: true,
            min: 0,
            max: 200,
            values: [0, 200],
            slide: function(event, ui) {
                var min = ui.values[0],
                    max = ui.values[1];

                $("#amount").val(`$${min} - $${max}`);
                showProducts(min, max);
            }
        }, min, max;

        $("#slider-range").slider(options);

        min = $("#slider-range").slider("values", 0);
        max = $("#slider-range").slider("values", 1);

        $("#amount").val(`$${min} - $${max}`);

        showProducts(min, max);
    });
})( jQuery, window );
 
