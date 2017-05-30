var $Toast,
    timeOutIni,
    timeOutOut,
    timeOutClose,
    iniCssClass,
    outCssClass,
	dataVars,
	$hasShownToast;

$(document).ready(function() {

	$hasShownToast = $('#hasShownToast');
	$Toast = getToast();
	if(!$hasShownToast.val()){

		$('.js-toast').toast();

		//Set Toast dataVars values
		dataVars = getDataVars("notification-toast");

		if( dataVars.notSticky ){
			$Toast.attr('data-classes','');
		}


		$("#notification-toast .btn-close").click(function() {
			hideToast();
		});

		//Timeout autoClose
		if(typeof dataVars.autoClose != 'undefined'){
			timeOutClose = setTimeout(hideToastAnimated, dataVars.autoClose);
		}
		//Init timeout delay-in
		if(typeof dataVars.delayIn != 'undefined'){
			timeOutIni = setTimeout(function() { timerToast('ini'); }, dataVars.delayIn);
		}
		//Init timeout delay-out
		if(typeof dataVars.delayOut != 'undefined'){
			timeOutOut = setTimeout(function() { timerToast('out'); }, dataVars.delayOut);
		}
		if(typeof dataVars.iniCssClass != 'undefined'){
			iniCssClass = dataVars.iniCssClass;
		}
		if(typeof dataVars.outCssClass != 'undefined'){
			outCssClass = dataVars.outCssClass;
		}
	}
	else{
		//This is added because of back browser button
		getToast().addClass("hide");
	}
});

function showToastError(message, showBtnClose, notSticky){
	//Por defecto siempre es cerrable
	if (typeof(showBtnClose) == 'undefined'){
		showBtnClose = true;
	}
	showToast(message, "notification-error", showBtnClose, notSticky );
	$hasShownToast.val(false);
}

function showToastOk(message, showBtnClose, notSticky){
	//Por defecto siempre es cerrable
	if (typeof(showBtnClose) == 'undefined'){
		showBtnClose = true;
	}
	showToast(message, "notification-success", showBtnClose, notSticky );
}

function showToastWarning(message, showBtnClose, notSticky){
	//Por defecto siempre es cerrable
	if (typeof(showBtnClose) == 'undefined'){
		showBtnClose = true;
	}
	showToast(message, "notification-warning", showBtnClose, notSticky );
}

function showToastInfo(message, showBtnClose, notSticky){
	//Por defecto siempre es cerrable
	if (typeof(showBtnClose) == 'undefined'){
		showBtnClose = true;
	}
	showToast(message, "notification-info", showBtnClose, notSticky );
}

function showToast(message, notificationType, showBtnClose, notSticky){
	if( getToast().length == 1 ){
		clearToast();
		var toast = $("#notification-toast .notification");
		toast.addClass(notificationType);

		if( showBtnClose ){
			toast.addClass("notification-dismissable");
			$("#notification-toast button").removeClass('hide');
		}
		else{
			$("#notification-toast button").addClass('hide');
		}
		$("#message-toast").html(message);

		$('.js-toast').toast();
		$("#notification-toast .btn-close").click(function() {
			hideToast();
		});
		getToast().removeClass("hide").removeAttr('style');
		if( notSticky ){
			getToast().attr('data-classes','');
		}
		if(typeof iniCssClass !== 'undefined'){
			getToast().addClass(iniCssClass);
		}
	}
}

function addLinkToast (mensajeUrl, hrefUrl){
	var linkName = document.getElementById('link-toast');
	linkName.classList.remove('hide');
	linkName.href = hrefUrl;
	linkName.innerHTML = mensajeUrl;
}

function hideLinkToast (){
	var linkName = document.getElementById('link-toast');
	linkName.classList.add('hide');
}

function clearToast(){
	clearNotificationTypes();

	$hasShownToast.val(false);
	$('#notification-toast').attr('data-vars','{}');
	$('#notification-toast').attr('data-classes','notification-toast-fixed');

}

function clearNotificationTypes(){
	$("#notification-toast .notification").removeClass('notification-error')
										  .removeClass('notification-success')
										  .removeClass('notification-info')
										  .removeClass('notification-warning')
										  .removeClass('notification-dismissable');

	document.getElementById('notification-toast').classList.remove('fade-out');
}

function timerToast(time){
	var timer = time=='ini'?timeOutIni:timeOutOut;
	var cssClass = time=='ini'?iniCssClass:outCssClass;

	//Clear timeout
	if(typeof timer != 'undefined'){
		clearTimeout(timer);
	}

	getToast().removeClass("hide");
	if(cssClass!=null){
		getToast().addClass(cssClass);
	}
}

function hideToast(){
	//Cancel timeouts
	closeTimers();

	var permanent = false;
	dataVars = getDataVars("notification-toast");
	if(typeof dataVars.permanent != 'undefined'){
		permanent = dataVars.permanent;
	}

	if(permanent != true){
		getToast().addClass('hide');
		$('#hasShownToast').val(true);
	}
}

function hideToastAnimated(){
	//Cancel timeouts
	closeTimers();

	getToast().hide(500);
	$('#hasShownToast').val(true);
}

function closeTimers(){
	if(typeof timeOutClose != 'undefined'){
		clearTimeout(timeOutClose);
	}
	if(typeof timeOutIni != 'undefined'){
		clearTimeout(timeOutIni);
	}
	if(typeof timeOutOut != 'undefined'){
		clearTimeout(timeOutOut);
	}
}

function getToast(){
	if(typeof $Toast === 'undefined'){
		$Toast = $("#notification-toast");
	}
	return $Toast;
}

function toastCallAjax(url, confirmationMessage, paramMessage, xitiClick){
	if( xitiClick != null && typeof(xitiClick) != 'undefined'){
		javascript:xt_click(this,'A',infojobs.pageConfig.getXitiPortalLevelTwo(),xitiClick,'A');
	}
	var message = "";
	if( paramMessage != null && typeof(paramMessage) != 'undefined'){
		message = getIJMessageWithParams(confirmationMessage,paramMessage);
	}
	else{
		message = getIJMessage(confirmationMessage);
	}
	$.ajax({
			url: url,
			success: function(){
				showToastOk(message, true);
			}
	});
}

//  Para llamadas js sin volver al servidor muestra el mensaje OK y le anade la transicion.
//  Solo necesita el mensaje y el toast inicializado en el controller sin ningun parametro
function showToastOkWithTransition(mensaje){
	showToastOk(mensaje, true, true);
	setTimeout(function() { hideToastAnimated(); }, 4000);
}
