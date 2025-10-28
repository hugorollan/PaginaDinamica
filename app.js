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
            "imagen": "https://tienda.marquesderiscal.com/media/catalog/product/cache/b04855209f3f211c08fd4858c18151cc/r/e/reserva_0009_fondo-de-_marqu_s-de-riscal-reserva-front-2025_-eliminado-copia-10_2.jpg",
            "precio": 18.50
        },
        {
            "id": 2,
            "nombre": "Viña Sol",
            "bodega": "Torres",
            "region": "Cataluña",
            "tipo": "Blanco",
            "uva": "Parellada",
            "imagen": "https://casapablo.es/tienda/15239-superlarge_default/vina-sol-2023.jpg",
            "precio": 7.20
        },
        {
            "id": 3,
            "nombre": "Protos Crianza",
            "bodega": "Bodegas Protos",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://tienda.bodegasprotos.com/237-large_default/protos-crianza-2020.jpg",
            "precio": 16.90
        },
        {
            "id": 4,
            "nombre": "Verdejo Rueda",
            "bodega": "Bodegas Menade",
            "region": "Rueda",
            "tipo": "Blanco",
            "uva": "Verdejo",
            "imagen": "https://bodegas.bio/wp-content/uploads/2022/02/menade-verdejo-2020.png",
            "precio": 9.50
        },
        {
            "id": 5,
            "nombre": "Tío Pepe",
            "bodega": "González Byass",
            "region": "Jerez",
            "tipo": "Blanco",
            "uva": "Palomino",
            "imagen": "https://www.bodeboca.com/sites/default/files/wines/2022-06/bot-tiopepe-palominofino.jpg",
            "precio": 12.30
        },
        {
            "id": 6,
            "nombre": "Viña Pomal Reserva",
            "bodega": "Bodegas Bilbaínas",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://www.15bodegas.com/media/catalog/product/b/o/botella-pomal-reserva-nuevo.jpg",
            "precio": 14.80
        },
        {
            "id": 7,
            "nombre": "Gramona Imperial",
            "bodega": "Gramona",
            "region": "Cataluña",
            "tipo": "Espumoso",
            "uva": "Xarel·lo",
            "imagen": "https://bodegas.bio/wp-content/uploads/2022/02/imperial-gramona.png",
            "precio": 22.50
        },
        {
            "id": 8,
            "nombre": "Rosado de Lágrima",
            "bodega": "Bodegas Muga",
            "region": "Rioja",
            "tipo": "Rosado",
            "uva": "Garnacha",
            "imagen": "https://www.vinosbaco.com/wp-content/uploads/2024/05/30057_MugaRosado-scaled.jpg",
            "precio": 11.20
        },
        {
            "id": 9,
            "nombre": "Emilio Moro",
            "bodega": "Bodegas Emilio Moro",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://www.emiliomoro.com/wp-content/uploads/2024/06/PDP_75cl_EMILIO-MORO-1.png",
            "precio": 19.90
        },
        {
            "id": 10,
            "nombre": "Albariño Pazo",
            "bodega": "Bodegas del Pazo",
            "region": "Rías Baixas",
            "tipo": "Blanco",
            "uva": "Albariño",
            "imagen": "https://pazobaion.com/wp-content/uploads/2022/10/Pazo-Baion-2019-TT-683x1024-1.webp",
            "precio": 13.40
        },
        {
            "id": 11,
            "nombre": "Vega Sicilia Único",
            "bodega": "Bodegas Vega Sicilia",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://petramora.com/cdn/shop/files/w-55000410-vega-sicilia-unico-2014_44956a81-2fc6-475b-af76-31dfc21df7e9.jpg?crop=center&height=2433&v=1731058274&width=1946",
            "precio": 285.00
        },
        {
            "id": 12,
            "nombre": "Pesquera Crianza",
            "bodega": "Bodegas Alejandro Fernández",
            "region": "Ribera del Duero",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://www.vinorema.com/4950-large_default/pesquera-crianza-regalo-bdgas-alejandro-fernandez-tinto-pesquera-sl.jpg",
            "precio": 21.80
        },
        {
            "id": 13,
            "nombre": "Cune Crianza",
            "bodega": "CVNE",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://cvne.com/wp-content/uploads/2021/03/vino-cune-crianza.png",
            "precio": 12.50
        },
        {
            "id": 14,
            "nombre": "Martín Códax Albariño",
            "bodega": "Martín Códax",
            "region": "Rías Baixas",
            "tipo": "Blanco",
            "uva": "Albariño",
            "imagen": "https://saboreatascaeulalia.com/cdn/shop/files/MartinCodaxAlbarino.jpg?v=1748258357&width=3651",
            "precio": 11.90
        },
        {
            "id": 15,
            "nombre": "Faustino I Gran Reserva",
            "bodega": "Bodegas Faustino",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202105/27/00118782300414____3__600x600.jpg",
            "precio": 28.90
        },
        {
            "id": 16,
            "nombre": "La Rioja Alta 904",
            "bodega": "La Rioja Alta",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://tienda.riojalta.com/144-large_default/gran-reserva-904-cosecha-2004-botella-75-cl.jpg",
            "precio": 42.00
        },
        {
            "id": 17,
            "nombre": "Manzanilla La Guita",
            "bodega": "Bodegas Hidalgo",
            "region": "Jerez",
            "tipo": "Blanco",
            "uva": "Palomino",
            "imagen": "https://www.nuevosvinos.es/1007-thickbox_default/la-guita-manzanilla.jpg",
            "precio": 8.90
        },
        {
            "id": 18,
            "nombre": "Pintia",
            "bodega": "Bodegas Pintia",
            "region": "Toro",
            "tipo": "Tinto",
            "uva": "Tinta de Toro",
            "imagen": "https://petramora.com/cdn/shop/files/w-55000409-bodegas-y-vinedos-pintia-2019.jpg?v=1731054173",
            "precio": 38.50
        },
        {
            "id": 19,
            "nombre": "Godello Valdeorras",
            "bodega": "Bodegas Godeval",
            "region": "Valdeorras",
            "tipo": "Blanco",
            "uva": "Godello",
            "imagen": "https://www.bebevino.es/5201-large_default/godeval-godello.webp",
            "precio": 14.20
        },
        {
            "id": 20,
            "nombre": "Viña Ardanza Reserva",
            "bodega": "La Rioja Alta",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://www.vinoseleccion.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/v/i/vina-ardanza_2.jpg",
            "precio": 24.50
        },
        {
            "id": 21,
            "nombre": "Yllera 5.5 Rosado",
            "bodega": "Grupo Yllera",
            "region": "Rueda",
            "tipo": "Rosado",
            "uva": "Tempranillo",
            "imagen": "https://www.campoluzenoteca.com/6437-img_ppagezoom/yllera-55-rosado-75cl.jpg",
            "precio": 6.80
        },
        {
            "id": 22,
            "nombre": "Priorat Mas Doix",
            "bodega": "Mas Doix",
            "region": "Priorat",
            "tipo": "Tinto",
            "uva": "Garnacha",
            "imagen": "https://labodega-gourmet.com/cdn/shop/files/mas-doix-salanques-2022.png?v=1760695455&width=3840",
            "precio": 45.00
        },
        {
            "id": 23,
            "nombre": "Lustau Amontillado",
            "bodega": "Emilio Lustau",
            "region": "Jerez",
            "tipo": "Blanco",
            "uva": "Palomino",
            "imagen": "https://lustau.es/wp-content/uploads/2021/01/amontillado_lustau-solera-familiar_los-arcos.jpg",
            "precio": 15.90
        },
        {
            "id": 24,
            "nombre": "Marqués de Murrieta Reserva",
            "bodega": "Marqués de Murrieta",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://www.vinoseleccion.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/marques-murrieta-reserva-magnum-con-estuche_1_1_2_1_1.jpg",
            "precio": 23.50
        },
        {
            "id": 25,
            "nombre": "Raventós i Blanc Gran Reserva",
            "bodega": "Raventós i Blanc",
            "region": "Cataluña",
            "tipo": "Espumoso",
            "uva": "Xarel·lo",
            "imagen": "https://www.decantalo.com/es/72403-large_default/raventos-i-blanc-blanc-de-blancs.jpg",
            "precio": 18.90
        },
        {
            "id": 26,
            "nombre": "Borsao Tres Picos",
            "bodega": "Bodegas Borsao",
            "region": "Campo de Borja",
            "tipo": "Tinto",
            "uva": "Garnacha",
            "imagen": "https://tienda.bodegasborsao.com/cdn/shop/files/BorsaoTresPicos_e3fcef69-f524-4014-98d7-5e800c442dda.png?v=1726826308",
            "precio": 16.20
        },
        {
            "id": 27,
            "nombre": "Cava Juvé & Camps",
            "bodega": "Juvé & Camps",
            "region": "Cataluña",
            "tipo": "Espumoso",
            "uva": "Macabeo",
            "imagen": "https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202101/14/00113356100381____4__1200x1200.jpg",
            "precio": 14.50
        },
        {
            "id": 28,
            "nombre": "Remírez de Ganuza Reserva",
            "bodega": "Remírez de Ganuza",
            "region": "Rioja",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://www.bodeboca.com/sites/default/files/wines/2022-11/bot-remirez-de-ganuza-reserva-2010.jpg",
            "precio": 32.00
        },
        {
            "id": 29,
            "nombre": "Pazo de Señorans Albariño",
            "bodega": "Pazo de Señorans",
            "region": "Rías Baixas",
            "tipo": "Blanco",
            "uva": "Albariño",
            "imagen": "https://www.campoluzenoteca.com/13649-large_default/pazo-senorans-albarino-2024.jpg",
            "precio": 19.50
        },
        {
            "id": 30,
            "nombre": "Abadía Retuerta Selección Especial",
            "bodega": "Abadía Retuerta",
            "region": "Castilla y León",
            "tipo": "Tinto",
            "uva": "Tempranillo",
            "imagen": "https://www.bodeboca.com/sites/default/files/wines/2025-07/bot-abadia-retuerta-seleccion-especial-2021.png",
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
