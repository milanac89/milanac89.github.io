$(document).ready(function () {


    $("select").select2({
        minimumResultsForSearch: -1
    });

    $(document).on("select2-open", "select", function () {
        var el;
        $('.select2-results').each(function () {
            var api = $(this).data('jsp');

            if (api !== undefined) api.destroy();
        });

        $('.select2-results').each(function () {
            if ($(this).parent().css("display") != 'none') el = $(this);

            if (el === undefined) return;

            el.mCustomScrollbar({
                mouseWheel:true,
                advanced:{
                    updateOnContentResize: true
                }
            });
        });
    });
});