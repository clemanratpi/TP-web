<?php
require_once __DIR__ . "/database.php";

/* Debug PHP */
ini_set("display_errors", 1);
ini_set("display_startup_errors", 1);
error_reporting(E_ALL);

$db = dbConnect();
if ($db === false) {
  http_response_code(500);
  echo "Erreur connexion BDD";
  exit;
}

/* Route: /chat.php?request=channels */
if (isset($_GET["request"]) && $_GET["request"] === "channels") {
  $channels = dbGetChannels($db);

  if ($channels === false) {
    http_response_code(500);
    echo "Erreur requête channels";
    exit;
  }

  header("Content-Type: application/json; charset=utf-8");
  echo json_encode($channels, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  exit;
}

/* Sinon: ne rien afficher (connexion OK) */
