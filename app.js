// DOM ready
window.addEventListener('DOMContentLoaded', () => {
	// Boutons de filtrage
	displayCategoryBtn(menu);
	// Afficher le menu
	displayMenuItems(menu);
});

// Boutons de filtrage
const displayCategoryBtn = (menuItems) => {
	// Btns container
	const btnContainer = document.querySelector('.btn-container');
	// Nous empilons les catégories dans l'array retourné ,-)
	const categories = menuItems.reduce((acc, current) => {
		// Nous itérons sur menu !!!
		if (!acc.includes(current.category)){
			acc.push(current.category);
		}
		return acc;
	},['all']);
	let categoryBtns = categories.map((cat) => {
		return `<button class="filter-btn" data-category="${ cat }" type="button">${ cat }</button>`;
	}).join('');
	btnContainer.innerHTML = categoryBtns;
	// Filter le menu
	const filterBtns = document.querySelectorAll('.filter-btn');
	filterBtns.forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const category = e.currentTarget.dataset.category;
			const newMenu = menu.filter((item) => {
				return item.category === category;
			});
			category === 'all' ? displayMenuItems(menu) : displayMenuItems(newMenu);
		});
	});
};

// Construire le menu, init et filtrage
const sectionCenter = document.querySelector('.section-center');
const displayMenuItems = (menuItems) => {
	let displayMenu = menuItems.map((item) => {
		const { title, price, img, desc } = item;
		return(
			`<article class="menu-item">
				<img src="${ img }" class="photo" alt="${ title }">
				<div class="item-info">
					<header>
						<h4>${ title }</h4>
						<h4 class="price">$${ price }</h4>
					</header>
					<p class="item-text">${ desc }</p>
				</div>
			</article>`	
		);
	});
	// join sans arguments ajoute une virgule entre chaque élément
	displayMenu = displayMenu.join('');
	sectionCenter.innerHTML = displayMenu;
};