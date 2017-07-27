
$(function () {
    $('.navigation1').find('a').on('click', closeNav);
});
function closeNav() {
    jQuery("#toggle").attr('checked', false);
}