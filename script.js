document.addEventListener("DOMContentLoaded", () => {

    //comprobar limite de habilidades
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

    //comprobar y enviar datos a la tarjeta

    const form = document.getElementById("postulacion-form");
    const submitBtn = document.getElementById("btn-primary");
    const section = document.getElementById("contenedor-mayor");
  
    const nombre = document.getElementById("nombre");
    const profesion = document.getElementById("profesion");
    const telefono = document.getElementById("telefono");
    const email = document.getElementById("correo");
    const linkedin = document.getElementById("linkedin");
    const warningNombre = document.getElementById("warningNombre");
    const warningProfesion = document.getElementById("warningProfesion");
    const warningTelefono = document.getElementById("warningTelefono");
    const warningEmail = document.getElementById("warningEmail");
    const warningLinkedin = document.getElementById("warningLinkedin");
    nombre.parentNode.insertBefore(warningNombre, nombre.nextSibling);
    profesion.parentNode.insertBefore(warningProfesion, profesion.nextSibling);
    telefono.parentNode.insertBefore(warningTelefono, telefono.nextSibling);
    email.parentNode.insertBefore(warningEmail, email.nextSibling);
    linkedin.parentNode.insertBefore(warningLinkedin, linkedin.nextSibling);
  
    submitBtn.addEventListener("click", e => {
      e.preventDefault();
  
      let boolNombre = true;
      let boolProfesion = true;
      let boolTelefono = true;
      let boolEmail = true;
      let boolLinkedin = true;
      let boolHabilidades = true;
  
      let regexEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
      let num = /^\d+$/;
  
      // Validar Nombre
      if (nombre.value.length < 4) {
        warningNombre.innerHTML = "El Nombre es muy corto";
        boolNombre = false;
      } else if (num.test(nombre.value)) {
        warningNombre.innerHTML = "El Nombre solo puede contener letras";
        boolNombre = false;
      } else {
        warningNombre.innerHTML = "";
        boolNombre = true;
      }
  
      // Validar Profesión
      if (profesion.value.length < 6) {
        warningProfesion.innerHTML = "La profesión es muy corta";
        boolProfesion = false;
      } else if (num.test(profesion.value)) {
        warningProfesion.innerHTML = "La Profesión solo puede contener letras";
        boolProfesion = false;
      } else {
        warningProfesion.innerHTML = "";
        boolProfesion = true;
      }
  
      // Validar Teléfono
      if (telefono.value.length < 10) {
        warningTelefono.innerHTML = "El teléfono es muy corto";
        boolTelefono = false;
      } else if (telefono.value.length > 10) {
        warningTelefono.innerHTML = "El teléfono es muy largo";
        boolTelefono = false;
      } else if (!/^\d{10}$/.test(telefono.value)) {
        warningTelefono.innerHTML = "El teléfono debe contener solo números";
        boolTelefono = false;
      } else {
        warningTelefono.innerHTML = "";
        boolTelefono = true;
      }
  
      // Validar Email
      if (!regexEmail.test(email.value)) {
        warningEmail.innerHTML = "El email no es valido";
        boolEmail = false;
      } else {
        warningEmail.innerHTML = "";
        boolEmail = true;
      }
  
      // Validar LinkedIn
      if (linkedin.value.length < 6) {
        warningLinkedin.innerHTML = "El LinkedIn es muy corto";
        boolLinkedin = false;
      } else {
        warningLinkedin.innerHTML = "";
        boolLinkedin = true;
      }
  
      // Validar habilidades seleccionadas (máximo 3)
      const seleccionados = document.querySelectorAll('#skills-form input[type="checkbox"]:checked');
      if (seleccionados.length > 3) {
        alert("No puedes seleccionar más de 3 habilidades");
        boolHabilidades = false;
      } else {
        boolHabilidades = true;
      }
  
      if (boolNombre && boolProfesion && boolTelefono && boolEmail && boolLinkedin && boolHabilidades) {
        const tarjetaHabilidades = document.createElement('p');
        tarjetaHabilidades.textContent = nombre.value;
  
        const card = document.createElement('div');
        card.className = 'card';
        section.appendChild(card);
  
        const card_image = document.createElement('div');
        card_image.className = 'card_image';
        card.appendChild(card_image);
  
        const picture = document.createElement('img');
        picture.className = 'picture';
        picture.src = 'src/usuario.png';
        card_image.appendChild(picture);
  
        const card_body = document.createElement('div');
        card_body.className = 'card_body';
        card.appendChild(card_body);
  
        const tarjetaNombre = document.createElement('h2');
        tarjetaNombre.textContent = nombre.value;
        card_body.appendChild(tarjetaNombre);
  
        const tarjetaProfesion = document.createElement('p');
        tarjetaProfesion.textContent = profesion.value;
        card_body.appendChild(tarjetaProfesion);
  
        const tarjetaTelefono = document.createElement('p');
        tarjetaTelefono.textContent = telefono.value;
        card_body.appendChild(tarjetaTelefono);
  
        const tarjetaEmail = document.createElement('p');
        tarjetaEmail.textContent = email.value;
        card_body.appendChild(tarjetaEmail);
  
        const tarjetaLinkedin = document.createElement('p');
        tarjetaLinkedin.textContent = linkedin.value;
        card_body.appendChild(tarjetaLinkedin);
  
        const card_redes = document.createElement('div');
        card_redes.className = 'card_redes';
        card.appendChild(card_redes);
  
        seleccionados.forEach(seleccionado => {
          const contenedor = document.createElement('div');
          const listItem = document.createElement('p');
          listItem.textContent = seleccionado.value;
          contenedor.appendChild(listItem);
          card_redes.appendChild(contenedor);
        });
  
        tarjeta = true;
      }
    });