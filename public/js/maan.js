function enableButton(){
	$('#mPay').removeAttr('disabled');
}
function showAccept(){
$('#accept').modal('show');
$('#mPay').attr('disabled');
	setTimeout(enableButton,3000);
}
$('#pay').on('hidden', function () {
	setTimeout(showAccept,3000);
});
