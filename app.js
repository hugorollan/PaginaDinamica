// Esperar a que todo el HTML esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Definir variables globales
    let todosLosVinos = []; // Array para guardar los vinos del JSON
    const contenedorVinos = document.getElementById('catalogo-vinos');
    const filtroRegion = document.getElementById('filtro-region');
    const filtroTipo = document.getElementById('filtro-tipo');

    // 2. Función para cargar los vinos del JSON
    async function cargarVinos() {
        try {
            const respuesta = await fetch('vinos.json');
            todosLosVinos = await respuesta.json();
            mostrarVinos(todosLosVinos); // Mostrar todos al inicio
        } catch (error) {
            console.error("Error al cargar los vinos:", error);
            contenedorVinos.innerHTML = '<div class="mensaje-vacio">Error al cargar los vinos. Por favor, recarga la página.</div>';
        }
    }

    // 3. Función para "pintar" los vinos en el HTML
    function mostrarVinos(vinos) {
        // Limpiar el contenedor
        contenedorVinos.innerHTML = '';
        
        // Si no hay vinos que mostrar
        if (vinos.length === 0) {
            contenedorVinos.innerHTML = '<div class="mensaje-vacio">No se encontraron vinos con los filtros seleccionados.</div>';
            return;
        }
        
        // Recorrer el array y crear una tarjeta por cada vino
        vinos.forEach(vino => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta-vino'); // Para el CSS
            
            // (Esta es la generación dinámica de HTML)
            tarjeta.innerHTML = `
                <img src="${vino.imagen}" alt="${vino.nombre}">
                <h3>${vino.nombre}</h3>
                <p><strong>Bodega:</strong> ${vino.bodega}</p>
                <p><strong>Región:</strong> ${vino.region}</p>
                <p><strong>Tipo:</strong> ${vino.tipo}</p>
                <p><strong>Uva:</strong> ${vino.uva}</p>
                <p class="precio">${vino.precio.toFixed(2)} €</p>
            `;
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
