$('.cross').hide();
$('.menu').hide();
$('.content').hide();
$('.e21Content').hide();
$('.e30Content').hide();
$('.e36Content').hide();
$('.e46Content').hide();
$('.e9xContent').hide();
$('.f3xContent').hide();

$('.hamburger').click(function() {
	$('.menu').slideToggle("slow", function() {
		$('.hamburger').hide();
		$('.cross').show();
	});
});

$('.cross').click(function() {
	$('.menu').slideToggle( "slow", function() {
		$('.cross').hide();
		$('.hamburger').show();
	});
});

$('.e21Button').click(function() {
	$('.e21Content').slideToggle();
	});

$('.e30Button').click(function() {
	$('.e30Content').slideToggle();
	});

$('.e36Button').click(function() {
	$('.e36Content').slideToggle();
	});

$('.e46Button').click(function() {
	$('.e46Content').slideToggle();
	});

$('.e9xButton').click(function() {
	$('.e9xContent').slideToggle();
	});

$('.f3xButton').click(function() {
	$('.f3xContent').slideToggle();
	});