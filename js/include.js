// Simple script to inject modular header and footer into every page
document.addEventListener('DOMContentLoaded', function () {
	function includeHTML(selector, url) {
		const el = document.querySelector(selector);
		if (!el) return;
		fetch(url)
			.then(res => res.text())
			.then(html => { el.innerHTML = html; });
	}

	includeHTML('#header-include', '/components/_header.html');
	includeHTML('#footer-include', '/components/_footer.html');
});