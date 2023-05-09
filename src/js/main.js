let html_cotact = `
<div style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; width: 100%; background-color: black;">
<input
	style="width: 60%; margin: 1rem; height: 5rem; border-radius: 15px; padding: 5px; background-color: #353535; border: none; color: #c2c2c2"
	placeholder="Name"
	type="text"
	class="in1" /><input
	style="width: 60%; margin: 1rem; height: 5rem; border-radius: 15px; padding: 5px; background-color: #353535; border: none; color: #c2c2c2"
	placeholder="Email"
	type="text"
	class="in1" /><input
	style="width: 60%; margin: 1rem; height: 13rem; border-radius: 15px; padding: 5px; background-color: #353535; border: none; color: #c2c2c2"
	placeholder="Message"
	type="text"
	class="in1" /><input
	value="SEND"
	style="width: 60%; margin: 1rem; height: 5rem; border-radius: 15px; padding: 5px; background-color: #353535; border: none; color: #ffffff;"
	type="button"
	class="but1" />
</div>
`;

setInterval(function () {
	document.getElementById('__framer-badge-container').innerHTML = ' ';
}, 1000);

setInterval(function () {
	if(document.querySelector('.Contact-container').innerHTML == "") {
		document.querySelector('body').innerHTML = html_cotact;
	}
}, 1000);
