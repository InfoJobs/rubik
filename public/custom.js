document.querySelector('.modal-click').addEventListener('click', function(event) {
		event.preventDefault();
		document.querySelector('.sg-view').style.display = 'block';
		document.querySelector('.modal-inner').style.width = '370px';
	});
