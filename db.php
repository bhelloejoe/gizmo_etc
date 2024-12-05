<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "gizmo_form_handler";

$con = new mysqli($servername, $username, $password, $dbname);

if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
}
?>
