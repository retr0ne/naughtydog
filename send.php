<?php
$servername = "localhost:3307";
$username = "root";
$password = "1234";
$dbname = "forms";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

$nombre = $_POST['nombre'];
$profesion = $_POST['profesion'];
$telefono = $_POST['telephone'];
$correo = $_POST['email'];
$linkedin = $_POST['linkedin'];

$habilidades = isset($_POST['habilidad']) ? $_POST['habilidad'] : array();

$habilidades_str = implode(", ", $habilidades);

$sql = "INSERT INTO forms (full_name, profesion, telephone, email, linkedin, skills1, skills2, skills3) 
        VALUES ('$nombre', '$profesion', '$telefono', '$correo', '$linkedin', '', '', '')";

if ($conn->query($sql) === TRUE) {
    echo "Postulation sent";
} else {
    echo "Error" . $conn->error;
}

$conn->close();
?>