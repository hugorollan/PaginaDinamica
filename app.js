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
            "imagen": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop",
            "precio": 18.50
        },
        {
            "id": 2,
            "nombre": "Viña Sol",
            "bodega": "Torres",
            "region": "Cataluña",
            "tipo": "Blanco",
            "uva": "Parellada",
            "imagen": "https://images.unsplash.com/photo-1597690589170-28c7f6a7f1ae?w=400&h=600&fit=crop",
            "precio": 7.20
        },
        {
            "id": 3,
            "nombre": "Protos Crianza",
            "bodega": "Bodegas Protos",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1601257877711-658bd4f1f4dc?w=400&h=600&fit=crop",
            "precio": 16.90
        },
        {
            "id": 4,
            "nombre": "Verdejo Rueda",
            "bodega": "Bodegas Menade",
            "region": "Rueda",
            "tipo": "Blanco",
            "uva": "Verdejo",
            "imagen": "https://images.unsplash.com/photo-1598027944300-81e339c9c53e?w=400&h=600&fit=crop",
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
            "imagen": "https://images.unsplash.com/photo-1566754436474-ca25f8f22028?w=400&h=600&fit=crop",
            "precio": 14.80
        },
        {
            "id": 7,
            "nombre": "Gramona Imperial",
            "bodega": "Gramona",
            "region": "Cataluña",
            "tipo": "Espumoso",
            "uva": "Xarel·lo",
            "imagen": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=600&fit=crop",
            "precio": 22.50
        },
        {
            "id": 8,
            "nombre": "Rosado de Lágrima",
            "bodega": "Bodegas Muga",
            "region": "Rioja",
            "tipo": "Rosado",
            "uva": "Garnacha",
            "imagen": "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=400&h=600&fit=crop",
            "precio": 11.20
        },
        {
            "id": 9,
            "nombre": "Emilio Moro",
            "bodega": "Bodegas Emilio Moro",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1608886866022-97c2bf65d1aa?w=400&h=600&fit=crop",
            "precio": 19.90
        },
        {
            "id": 10,
            "nombre": "Albariño Pazo",
            "bodega": "Bodegas del Pazo",
            "region": "Rías Baixas",
            "tipo": "Blanco",
            "uva": "Albariño",
            "imagen": "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop",
            "precio": 13.40
        },
        {
            "id": 11,
            "nombre": "Vega Sicilia Único",
            "bodega": "Bodegas Vega Sicilia",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1574995456754-ca6c26d8f88b?w=400&h=600&fit=crop",
            "precio": 285.00
        },
        {
            "id": 12,
            "nombre": "Pesquera Crianza",
            "bodega": "Bodegas Alejandro Fernández",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1598031620946-6c6ef5b08746?w=400&h=600&fit=crop",
            "precio": 21.80
        },
        {
            "id": 13,
            "nombre": "Cune Crianza",
            "bodega": "CVNE",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop",
            "precio": 12.50
        },
        {
            "id": 14,
            "nombre": "Martín Códax Albariño",
            "bodega": "Martín Códax",
            "region": "Rías Baixas",
            "tipo": "Blanco",
            "uva": "Albariño",
            "imagen": "https://images.unsplash.com/photo-1597690589170-28c7f6a7f1ae?w=400&h=600&fit=crop",
            "precio": 11.90
        },
        {
            "id": 15,
            "nombre": "Faustino I Gran Reserva",
            "bodega": "Bodegas Faustino",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1566754436474-ca25f8f22028?w=400&h=600&fit=crop",
            "precio": 28.90
        },
        {
            "id": 16,
            "nombre": "La Rioja Alta 904",
            "bodega": "La Rioja Alta",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1601257877711-658bd4f1f4dc?w=400&h=600&fit=crop",
            "precio": 42.00
        },
        {
            "id": 17,
            "nombre": "Manzanilla La Guita",
            "bodega": "Bodegas Hidalgo",
            "region": "Jerez",
            "tipo": "Blanco",
            "uva": "Palomino",
            "imagen": "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop",
            "precio": 8.90
        },
        {
            "id": 18,
            "nombre": "Pintia",
            "bodega": "Bodegas Pintia",
            "region": "Toro",
            "tipo": "Tinto",
            "uva": "Tinta de Toro",
            "imagen": "https://images.unsplash.com/photo-1608886866022-97c2bf65d1aa?w=400&h=600&fit=crop",
            "precio": 38.50
        },
        {
            "id": 19,
            "nombre": "Godello Valdeorras",
            "bodega": "Bodegas Godeval",
            "region": "Valdeorras",
            "tipo": "Blanco",
            "uva": "Godello",
            "imagen": "https://images.unsplash.com/photo-1598027944300-81e339c9c53e?w=400&h=600&fit=crop",
            "precio": 14.20
        },
        {
            "id": 20,
            "nombre": "Viña Ardanza Reserva",
            "bodega": "La Rioja Alta",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1574995456754-ca6c26d8f88b?w=400&h=600&fit=crop",
            "precio": 24.50
        },
        {
            "id": 21,
            "nombre": "Yllera 5.5 Rosado",
            "bodega": "Grupo Yllera",
            "region": "Rueda",
            "tipo": "Rosado",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1596363505729-4190a9506133?w=400&h=600&fit=crop",
            "precio": 6.80
        },
        {
            "id": 22,
            "nombre": "Priorat Mas Doix",
            "bodega": "Mas Doix",
            "region": "Priorat",
            "tipo": "Tinto",
            "uva": "Garnacha",
            "imagen": "https://images.unsplash.com/photo-1598031620946-6c6ef5b08746?w=400&h=600&fit=crop",
            "precio": 45.00
        },
        {
            "id": 23,
            "nombre": "Lustau Amontillado",
            "bodega": "Emilio Lustau",
            "region": "Jerez",
            "tipo": "Blanco",
            "uva": "Palomino",
            "imagen": "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=400&h=600&fit=crop",
            "precio": 15.90
        },
        {
            "id": 24,
            "nombre": "Marqués de Murrieta Reserva",
            "bodega": "Marqués de Murrieta",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=400&h=600&fit=crop",
            "precio": 23.50
        },
        {
            "id": 25,
            "nombre": "Raventós i Blanc Gran Reserva",
            "bodega": "Raventós i Blanc",
            "region": "Cataluña",
            "tipo": "Espumoso",
            "uva": "Xarel·lo",
            "imagen": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=600&fit=crop",
            "precio": 18.90
        },
        {
            "id": 26,
            "nombre": "Borsao Tres Picos",
            "bodega": "Bodegas Borsao",
            "region": "Campo de Borja",
            "tipo": "Tinto",
            "uva": "Garnacha",
            "imagen": "https://images.unsplash.com/photo-1601257877711-658bd4f1f4dc?w=400&h=600&fit=crop",
            "precio": 16.20
        },
        {
            "id": 27,
            "nombre": "Cava Juvé & Camps",
            "bodega": "Juvé & Camps",
            "region": "Cataluña",
            "tipo": "Espumoso",
            "uva": "Macabeo",
            "imagen": "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=600&fit=crop",
            "precio": 14.50
        },
        {
            "id": 28,
            "nombre": "Remírez de Ganuza Reserva",
            "bodega": "Remírez de Ganuza",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1566754436474-ca25f8f22028?w=400&h=600&fit=crop",
            "precio": 32.00
        },
        {
            "id": 29,
            "nombre": "Pazo de Señorans Albariño",
            "bodega": "Pazo de Señorans",
            "region": "Rías Baixas",
            "tipo": "Blanco",
            "uva": "Albariño",
            "imagen": "https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=400&h=600&fit=crop",
            "precio": 19.50
        },
        {
            "id": 30,
            "nombre": "Abadía Retuerta Selección Especial",
            "bodega": "Abadía Retuerta",
            "region": "Castilla y León",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://images.unsplash.com/photo-1574995456754-ca6c26d8f88b?w=400&h=600&fit=crop",
            "precio": 19.90
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
