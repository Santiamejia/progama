<?php
include "conexion.php";

$nombres = $_POST["nombres"];
$apellidos = $_POST["apellidos"];
$fechaNacimiento = $_POST["fechaNacimiento"];
$correo = $_POST["correo"];
$contrasena = password_hash($_POST["password"], PASSWORD_DEFAULT);

$query = "INSERT INTO usuarios (nombres, apellidos, fecha_nacimiento, correo, password) 
          VALUES ('$nombres', '$apellidos', '$fechaNacimiento', '$correo', '$contrasena')";

if (mysqli_query($conexion, $query)) {
    header("Location: index.html");
} else {
    echo "Error: " . mysqli_error($conexion);
}
?>