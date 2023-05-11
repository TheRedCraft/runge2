let darkmode = false;
let html_cotact = `
	<div style="position: absolute; top: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100%; width: 100%;">
	<input
		style="width: 35rem; margin: 0.5rem; height: 3rem; border-radius: 15px; padding: 5px; background-color: var(--token-15111fde-133a-4f2a-a639-023410d025db); border: none; color: #c2c2c2"
		placeholder="Name"
		type="text"
		class="in1" /><input
		style="width: 35rem; margin: 0.5rem; height: 3rem; border-radius: 15px; padding: 5px; background-color: var(--token-15111fde-133a-4f2a-a639-023410d025db); border: none; color: #c2c2c2"
		placeholder="Email"
		type="text"
		class="in1" /><input
		style="width: 35rem; margin: 0.5rem; height: 10rem; border-radius: 15px; padding: 5px; background-color: var(--token-15111fde-133a-4f2a-a639-023410d025db); border: none; color: #c2c2c2"
		placeholder="Message"
		type="text"
		class="in1" /><input
		value="SEND"
		style="width: 35rem; margin: 0.5rem; height: 3rem; border-radius: 15px; padding: 5px; background-color: var(--token-15111fde-133a-4f2a-a639-023410d025db); border: none; color: var(--token-c3cb0cd5-b51f-4513-b6f3-4eb1d93cac0a);"
		type="button"
		class="but1" />
	</div>
`;

setInterval(function () {
	document.getElementById('__framer-badge-container').innerHTML = ' ';
}, 1000);

setInterval(function () {
	if (document.querySelector('.Contact-container').innerHTML == '') {
		document.querySelector('.framer-13hlmmu').innerHTML = html_cotact;
		document.querySelector('.Contact-container').innerHTML = ' ';
	}
}, 10);
