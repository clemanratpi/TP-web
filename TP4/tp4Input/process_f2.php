<?php
$size = isset($_GET["size"]) ? intval($_GET["size"]) : 0;
$isFilled = isset($_GET["isFilled"]) ? intval($_GET["isFilled"]) : 1;

if ($size <= 0) {
  echo "<p>Taille invalide.</p>";
  echo '<a href="tp4.php">⬅ Retour</a>';
  exit;
}

echo "<h2>TP n°4 - Traitements du deuxième formulaire</h2>";
echo "<h3>Dessin du triangle :</h3>";
echo "<pre>";

for ($i = 1; $i <= $size; $i++) {
  for ($j = 1; $j <= $i; $j++) {
    if ($isFilled == 1) {
      // plein
      echo "*";
    } else {
      // vide (contour)
      if ($j == 1 || $j == $i || $i == $size) echo "*";
      else echo " ";
    }
  }
  echo "\n";
}

echo "</pre>";
echo '<a href="tp4.php">⬅ Retour</a>';
?>
