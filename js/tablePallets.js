document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('editableTable');
    const addRowBtn = document.querySelector('.add-row');
    const deleteConfirmPopup = document.getElementById('deleteConfirmPopup');
    const confirmDeleteBtn = document.getElementById('confirmDelete');
    const cancelDeleteBtn = document.getElementById('cancelDelete');
    let rowToDelete = null;

    addRowBtn.addEventListener('click', function() {
        const newRow = table.insertRow(-1);
        const columns = ['Marca', 'Hacienda', 'Puerto Destino', 'Cant. Cajas', 'Pallet', 'SSCC', 'Cajas por Pallet', 'Cantidad de Pallets', 'Contenedor', 'Cont. Principal', 'Acciones'];
        columns.forEach((col, index) => {
            const cell = newRow.insertCell(index);
            cell.setAttribute('data-label', col);
            if (col === 'Puerto Destino') {
                cell.innerHTML = `
                    <select>
                        <option value="">Seleccione un puerto</option>
                        <option value="puerto1">Puerto 1</option>
                        <option value="puerto2">Puerto 2</option>
                        <option value="puerto3">Puerto 3</option>
                    </select>
                `;
            } else if (col === 'Cont. Principal') {
                const checkboxId = `contPrincipal${table.rows.length - 1}`;
                cell.innerHTML = `
                    <input type="checkbox" id="${checkboxId}" name="${checkboxId}">
                    <label for="${checkboxId}">Principal</label>
                `;
            } else if (col === 'Acciones') {
                cell.innerHTML = `
                    <button class="update-btn">Actualizar</button>
                    <button class="delete-btn">Eliminar</button>
                `;
            } else {
                cell.contentEditable = true;
                cell.classList.add('editable');
                cell.textContent = 'Nuevo';
            }
        });
    });

    table.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            rowToDelete = e.target.closest('tr');
            deleteConfirmPopup.style.display = 'flex';
        } else if (e.target.classList.contains('update-btn')) {
            alert('Fila actualizada');
            // Aquí se implementaría la lógica real de actualización
        }
    });

    confirmDeleteBtn.addEventListener('click', function() {
        if (rowToDelete) {
            rowToDelete.remove();
            rowToDelete = null;
        }
        deleteConfirmPopup.style.display = 'none';
    });

    cancelDeleteBtn.addEventListener('click', function() {
        rowToDelete = null;
        deleteConfirmPopup.style.display = 'none';
    });
});