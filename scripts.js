document.addEventListener('DOMContentLoaded', () => {
	const categories = document.querySelectorAll('.category');

	categories.forEach(category => {
		category.addEventListener('click', () => {
			categories.forEach(cat => cat.classList.remove('active'));
			category.classList.add('active');
		});
	});
});
