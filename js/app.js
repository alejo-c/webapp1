document.addEventListener('DOMContentLoaded', () => {
	const query = 'a[href="' + location.pathname + '"]'
	for (const link of document.querySelectorAll(query))
		link.className = 'active'
})