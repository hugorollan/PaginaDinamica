// Esperar a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Definir variables globales
    // Datos de vinos embebidos para evitar problemas de CORS
    let todosLosVinos = [
        {
            "id": 1,
            "nombre": "Marqués de Riscal Reserva",
            "bodega": "Marqués de Riscal",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=400&h=600&fit=crop",
            "precio": 18.50
        },
        {
            "id": 2,
            "nombre": "Viña Sol",
            "bodega": "Torres",
            "region": "Cataluña",
            "tipo": "Blanco",
            "uva": "Parellada",
            "imagen": "https://images.unsplash.com/photo-1474722883778-ab3ea2e8d1e4?w=400&h=600&fit=crop",
            "precio": 7.20
        },
        {
            "id": 3,
            "nombre": "Protos Crianza",
            "bodega": "Bodegas Protos",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=400&h=600&fit=crop",
            "precio": 16.90
        },
        {
            "id": 4,
            "nombre": "Verdejo Rueda",
            "bodega": "Bodegas Menade",
            "region": "Rueda",
            "tipo": "Blanco",
            "uva": "Verdejo",
            "imagen": "https://images.unsplash.com/photo-1553361371-9b22f78e8b1d?w=400&h=600&fit=crop",
            "precio": 9.50
        },
        {
            "id": 5,
            "nombre": "Tío Pepe",
            "bodega": "González Byass",
            "region": "Jerez",
            "tipo": "Blanco",
            "uva": "Palomino",
            "imagen": "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&h=600&fit=crop",
            "precio": 12.30
        },
        {
            "id": 6,
            "nombre": "Viña Pomal Reserva",
            "bodega": "Bodegas Bilbaínas",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=400&h=600&fit=crop",
            "precio": 14.80
        },
        {
            "id": 7,
            "nombre": "Gramona Imperial",
            "bodega": "Gramona",
            "region": "Cataluña",
            "tipo": "Espumoso",
            "uva": "Xarel·lo",
            "imagen": "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=400&h=600&fit=crop",
            "precio": 22.50
        },
        {
            "id": 8,
            "nombre": "Rosado de Lágrima",
            "bodega": "Bodegas Muga",
            "region": "Rioja",
            "tipo": "Rosado",
            "uva": "Garnacha",
            "imagen": "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=400&h=600&fit=crop",
            "precio": 11.20
        },
        {
            "id": 9,
            "nombre": "Emilio Moro",
            "bodega": "Bodegas Emilio Moro",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1598533526265-82d58c707e38?w=400&h=600&fit=crop",
            "precio": 19.90
        },
        {
            "id": 10,
            "nombre": "Albariño Pazo",
            "bodega": "Bodegas del Pazo",
            "region": "Rías Baixas",
            "tipo": "Blanco",
            "uva": "Albariño",
            "imagen": "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?w=400&h=600&fit=crop",
            "precio": 13.40
        }
    ];
    
    const contenedorVinos = document.getElementById('catalogo-vinos');
    const filtroRegion = document.getElementById('filtro-region');
    const filtroTipo = document.getElementById('filtro-tipo');

    // 2. Función para inicializar la aplicación
    function cargarVinos() {
        mostrarVinos(todosLosVinos); // Mostrar todos inmediatamente
    }

    // 3. Función para "pintar" los vinos en el HTML
    function mostrarVinos(vinos) {
        // Limpiar el contenedor
        contenedorVinos.innerHTML = '';
        
        // Si no hay vinos que mostrar
        if (vinos.length === 0) {
            contenedorVinos.innerHTML = `
                <div class="mensaje-vacio">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M9 2v6h6V2M9 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-2"/>
                        <path d="M9 8v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V8"/>
                    </svg>
                    <h3>No se encontraron vinos</h3>
                    <p>Prueba con otros filtros para ver más opciones</p>
                </div>
            `;
            return;
        }
        
        // Recorrer el array y crear una tarjeta por cada vino
        vinos.forEach((vino, index) => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta-vino');
            tarjeta.setAttribute('tabindex', '0');
            tarjeta.setAttribute('role', 'article');
            tarjeta.setAttribute('aria-label', `${vino.nombre} de ${vino.bodega}`);
            // Añadir animación de entrada escalonada
            tarjeta.style.animationDelay = `${index * 0.05}s`;
            
            // (Esta es la generación dinámica de HTML)
            tarjeta.innerHTML = `
                <img src="${vino.imagen}" alt="${vino.nombre}" loading="lazy">
                <div class="tarjeta-contenido">
                    <h3>${vino.nombre}</h3>
                    <p class="bodega"><strong>Bodega:</strong> ${vino.bodega}</p>
                    <p><strong>Región:</strong> ${vino.region}</p>
                    <p><strong>Tipo:</strong> ${vino.tipo}</p>
                    <p><strong>Uva:</strong> ${vino.uva}</p>
                    <p class="precio">${vino.precio.toFixed(2)} €</p>
                </div>
            `;
            
            // Agregar soporte para navegación por teclado
            tarjeta.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    tarjeta.click();
                }
            });
            
            contenedorVinos.appendChild(tarjeta);
        });
    }

    // 4. Función para filtrar
    function aplicarFiltros() {
        // Obtener valores actuales de los filtros
        const regionSeleccionada = filtroRegion.value;
        const tipoSeleccionado = filtroTipo.value;

        // Usar .filter() para crear el nuevo array dinámicamente
        const vinosFiltrados = todosLosVinos.filter(vino => {
            const pasaFiltroRegion = (regionSeleccionada === 'todas') || (vino.region === regionSeleccionada);
            const pasaFiltroTipo = (tipoSeleccionado === 'todos') || (vino.tipo === tipoSeleccionado);
            return pasaFiltroRegion && pasaFiltroTipo;
        });
        
        // "Pintar" solo los vinos filtrados
        mostrarVinos(vinosFiltrados);
    }

    // 5. Añadir los Event Listeners a los filtros
    filtroRegion.addEventListener('change', aplicarFiltros);
    filtroTipo.addEventListener('change', aplicarFiltros);

    // 6. Iniciar la aplicación
    cargarVinos();
});
