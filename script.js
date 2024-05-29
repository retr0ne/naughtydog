document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[name="habilidad"]');

    checkboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const checkedCount = document.querySelectorAll(
                'input[name="habilidad"]:checked'
            ).length;

            if (checkedCount > 3) {
                checkbox.checked = false; // Desmarcar el checkbox si se excede el límite
                return; // Evitar que el contador se actualice
            }

            document.querySelector('input[name="habilidades_seleccionadas"]').value = checkedCount; // Actualizar el contador
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const buttons = [
        { id: '#btnUncharted', url: 'games/uncharted.html' },
        { id: '#btnLoU', url: 'games/lou.html' },
        { id: '#btnCrash', url: 'games/crash.html' },
        { id: '#btnJyD', url: 'games/jyd.html' }
    ];
    
    const esperar = 500;

    buttons.forEach(button => {
        document.querySelector(button.id).addEventListener('click', () => {
            fetch(button.url)
                .then(response => {
                    document.getElementById('contenido').textContent = 'Loading....';
                    return response.text();
                })
                .then(data => {
                    setTimeout(() => {
                        document.getElementById('contenido').innerHTML = data;
                    }, esperar);
                })
                .catch(error => console.error('Error:', error));
        });
    });
});