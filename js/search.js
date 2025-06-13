// Buscador universal para Gamedev Latino

function initSiteSearch() {
	const searchForm = document.getElementById('site-search');
	const searchInput = document.getElementById('search-input');
	const resultsBox = document.getElementById('search-results');

	if (!searchForm || !searchInput || !resultsBox) return;

	// Index de ejemplo: agrega aquí tus contenidos reales
	const CONTENT_INDEX = [
		{
			title: "Tu Primer Juego: Guía Completa",
			type: "Ebook",
			url: "/ebooks.html",
			desc: "Fundamentos del desarrollo de videojuegos desde cero."
		},
		{
			title: "Movimiento 2D: Guía Completa",
			type: "Guía",
			url: "/guias.html",
			desc: "Aprende a implementar el movimiento básico en plataformas 2D."
		},
		{
			title: "Introducción a Godot: Video",
			type: "Video",
			url: "/videos.html",
			desc: "Cómo instalar Godot y crear tu primer proyecto."
		},
		{
			title: "Unity para Principiantes",
			type: "Curso",
			url: "/cursos.html",
			desc: "Curso para aprender a crear tu primer videojuego con Unity."
		},
		{
			title: "Plantilla de GDD",
			type: "Plantilla",
			url: "/plantillas.html",
			desc: "Documento de diseño de juego listo para usar."
		},
		// ...agrega más objetos según tus contenidos
	];

	function searchContent(query) {
		const q = query.trim().toLowerCase();
		if (!q) return [];

		return CONTENT_INDEX.filter(item =>
			item.title.toLowerCase().includes(q) ||
			item.desc.toLowerCase().includes(q) ||
			item.type.toLowerCase().includes(q)
		);
	}

	searchForm.addEventListener('submit', function (e) {
		e.preventDefault();
		const query = searchInput.value;
		const results = searchContent(query);

		if (results.length === 0) {
			resultsBox.innerHTML = "<p>No se encontraron resultados.</p>";
		} else {
			resultsBox.innerHTML = `
				<ul>
					${results.map(item => `
						<li>
							<strong>${item.type}:</strong>
							<a href="${item.url}">${item.title}</a>
							<br><span style="font-size:0.98em; color:#FFD700;">${item.desc}</span>
						</li>
					`).join('')}
				</ul>
			`;
		}
		resultsBox.classList.add("active");
		searchInput.setAttribute("aria-expanded", "true");
	});

	// Ocultar resultados si se borra el input
	searchInput.addEventListener('input', function () {
		if (!searchInput.value.trim()) {
			resultsBox.innerHTML = "";
			resultsBox.classList.remove("active");
			searchInput.setAttribute("aria-expanded", "false");
		}
	});
}

// Esperar a que el footer esté realmente cargado
document.addEventListener('footerLoaded', initSiteSearch);