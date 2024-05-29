document.addEventListener("DOMContentLoaded", () => {
   //cargar games con AJAX

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