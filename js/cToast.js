var Notification = (function() {

	var iconTag,
		typeTag,
		linkTag,
		toastTag,
		dataVars,
		permanent=false;

	Notification.prototype.Type = {
			'OK': {
				iconClass: 'iconfont-Big-check',
				typeClass: 'notification-success',
				toastClass: 'notification-toast',
				jsClass: 'js-notification-toast'
			},
			'ERROR': {
				iconClass: 'iconfont-Alert',
				typeClass: 'notification-error',
				toastClass: 'notification-toast',
				jsClass: 'js-notification-toast'
			},
			'WARNING': {
				iconClass: 'iconfont-Info',
				typeClass: 'notification-warning',
				toastClass: 'notification-advice',
				jsClass: 'js-notification-advice'
			},
			'SYSTEM': {
				iconClass: '',
				typeClass: 'notification-system',
				toastClass: 'notification-advice',
				jsClass: 'js-notification-advice'
			}
		};

	/**
	 * Constructor
	 */
	function Notification() {
		iconTag = $('#notification-icon');
		typeTag = $('#notification-type');
		linkTag = $('#notification-link');
		toastTag = $('#notification-behavior');
		dataVars = getDataVars('notification-type');
		setAutoClose();
		setPermanent();
	}


	/**
	 * Get auto close value: the number of timeout.
	 * @param autoClose boolean true or false or undefined.
	 * @return the number of timeout. If returns -1, there is no need to set timeout.
	 */
	function getAutoClose(autoClose) {
		var autoCloseValue = -1;

		// The java parameter: gets from dataVars
		if(typeof dataVars != 'undefined' && typeof dataVars.autoClose != 'undefined') {
			autoCloseValue = dataVars.autoClose;

		// The ajax parameter: gets from autoClose
		} else if (typeof autoClose != 'undefined' && autoClose) {
			autoCloseValue = 5000;
		}
		return autoCloseValue;
	}


	/**
	 * Set timeOutClose value if there is the need.
	 * @param autoCLose boolean true, false or undefined
	 */
	function setAutoClose(autoClose) {
		var autoCloseValue = getAutoClose(autoClose);

		if(autoCloseValue != -1) {
			timeOutClose = setTimeout(hideToast, autoCloseValue);
		}
	}


	/**
	 * Clear toast
	 */
	function clearToast() {
		typeTag.attr('class', '');
		typeTag.attr('data-vars','{}');
		typeTag.attr('data-classes','notification-toast-fixed');
	}


	/**
	 * Add css classes if the toast doesn't have them yet.
	 * @param type the notification object
	 */
	function addClasses(type) {
		toastTag.addClass(type.toastClass);
		toastTag.addClass(type.jsClass);
		typeTag.addClass(type.typeClass);

		if(type.iconClass != '') {
			iconTag.addClass(type.iconClass);
		}
	}


	/**
	 * Cancel timeout.
	 */
	function closeTimers(){
		if(typeof timeOutClose != 'undefined') {
			clearTimeout(timeOutClose);
		}
	}


	/**
	 * Set permanent.
	 */
	function setPermanent() {
		if(typeof dataVars != 'undefined' && typeof dataVars.permanent != 'undefined') {
			permanent = dataVars.permanent;
		}
	}


	/**
	 * Hide toast.
	 */
	function hideToast() {
		if(permanent != true) {
			closeTimers();
			window.dispatchEvent(new CustomEvent('hideToast'));
		}
	}


	/**
	 * PUBLIC function hideLinkToast()
	 * Hide link.
	 */
	Notification.prototype.hideLinkToast = function() {
		linkTag.addClass('hide');
	}


	/**
	 * PUBLIC function showToast
	 * Show the toast.
	 * @param message String message
	 * @param type toast type: 'OK', 'ERROR', 'WARNING', 'SYSTEM'.
	 * @param autoClose boolean true or false, if true the toast close automatically
	 */
	Notification.prototype.showToast = function(message, type, autoClose) {
		if(toastTag.length == 1) {
			clearToast();
			addClasses(type);
			$("#notification-message").html(message);
			toastTag.removeClass("hide");
			setAutoClose(autoClose);
			window.dispatchEvent(new CustomEvent('showToast'));
		}
	}

	/**
	 * PUBLIC function toastCallAjax.
	 */
	Notification.prototype.toastCallAjax = function(url, confirmationMessage, paramMessage, xitiClick) {
		if( xitiClick != null && typeof(xitiClick) != 'undefined') {
			javascript:xt_click(this,'A',infojobs.pageConfig.getXitiPortalLevelTwo(),xitiClick,'A');
		}
		var message = "";
		if( paramMessage != null && typeof(paramMessage) != 'undefined') {
			message = getIJMessageWithParams(confirmationMessage, paramMessage);
		}
		else{
			message = getIJMessage(confirmationMessage);
		}
		$.ajax({
				url: url,
				success: function() {
					showToast(message, this.Type.OK, true);
				}
		});
	}

	return Notification;
})();

/**
 * Use this variable to access to public functions of Notification class.
 * for example:
 *    notification.showToast(message, notification.Type.OK, true);
 *    notification.showToast(message, notification.Type.ERROR);
 */
var notification;

$(document).ready(function() {
	notification = new Notification();
});
