document.addEventListener('DOMContentLoaded', function() {
    const table = document.getElementById('editableTable');
    const addRowBtn = document.querySelector('.add-row');
    const deleteConfirmPopup = document.getElementById('deleteConfirmPopup');
    const confirmDeleteBtn = document.getElementById('confirmDelete');
    const cancelDeleteBtn = document.getElementById('cancelDelete');
    let rowToDelete = null;

    addRowBtn.addEventListener('click', function() {
        const newRow = table.insertRow(-1);
        for (let i = 0; i < 5; i++) {
            const cell = newRow.insertCell(i);
            if (i === 2) { // Puerto column
                cell.innerHTML = `
                    <select>
                        <option value="">Seleccione un puerto</option>
                        <option value="puerto1">Puerto 1</option>
                        <option value="puerto2">Puerto 2</option>
                        <option value="puerto3">Puerto 3</option>
                    </select>
                `;
            } else {
                cell.contentEditable = true;
                cell.classList.add('editable');
                cell.textContent = 'Nuevo';
            }
        }
        const actionsCell = newRow.insertCell(5);
        actionsCell.innerHTML = `
            <button class="update-btn">Actualizar</button>
            <button class="delete-btn">Eliminar</button>
        `;
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