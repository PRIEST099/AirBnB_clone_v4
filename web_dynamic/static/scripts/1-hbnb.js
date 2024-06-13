window.addEventListener("load", function() {
    const amenity_ids = {};
    $('input[type=checkbox]').change(function () {
        if ($(this).prop('checked')) {
            amenity_ids[$(this).attr('data-id')] = $(this).attr('data-name');
        } else if (!$(this).prop('checked')) {
            delete amenity_ids[$(this).attr('data-id')];
        }
        if (Object.keys(amenity_ids).length = 0) {
            $
        }
    });
});