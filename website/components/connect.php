<?php

$user="user";
$pass="12345";
try {
    $conn = new PDO('mysql:host=localhost;dbname=shop_db;port=8889', $user, $pass);
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>