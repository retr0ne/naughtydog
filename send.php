<?php
// 1. Conexión a la base de datos (misma lógica que antes)
$servername = "tu_servidor";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "tu_base_de_datos";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$profesion = $_POST['profesion'];
$telefono = $_POST['telefono'];
$correo = $_POST['correo'];
$linkedin = $_POST['linkedin'];

$habilidades = isset($_POST['habilidad']) ? $_POST['habilidad'] : array();

$habilidades_str = implode(", ", $habilidades);

$sql = "INSERT INTO postulaciones (nombre, profesion, telefono, correo, linkedin, habilidades) 
        VALUES ('$nombre', '$profesion', '$telefono', '$correo', '$linkedin', '$habilidades_str')";

if ($conn->query($sql) === TRUE) {
    echo "Postulación enviada correctamente";
} else {
    echo "Error al enviar postulación: " . $conn->error;
}

$conn->close();
?>