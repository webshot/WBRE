$(document).ready(function(){

$('#menuwarn').on('click', function(){
    $('#menu').show();
})
$('#close').on('click', function(){
    $('#menu').hide();
})

function hey(){
    alert('Сайт в разработке :D');
}

setTimeout(hey,600);

});