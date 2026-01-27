<?php
function h($s) { return htmlspecialchars($s, ENT_QUOTES, "UTF-8"); }

$langues = isset($_POST["languages"]) ? $_POST["languages"] : array();
$competences = isset($_POST["competences"]) ? $_POST["competences"] : array();

echo "<h2>TP n°4 - Traitements du premier formulaire</h2>";
echo "<h3>Récapitulatif de vos informations :</h3>";

echo "<p><strong>Langues parlées :</strong></p>";
if (count($langues) == 0) {
  echo "<p>Aucune langue sélectionnée.</p>";
} else {
  echo "<ul>";
  foreach ($langues as $l) echo "<li>".h($l)."</li>";
  echo "</ul>";
}

echo "<p><strong>Compétences informatiques :</strong></p>";
if (count($competences) == 0) {
  echo "<p>Aucune compétence sélectionnée.</p>";
} else {
  echo "<ul>";
  foreach ($competences as $c) echo "<li>".h($c)."</li>";
  echo "</ul>";
}

echo '<br><a href="tp4.php">⬅ Retour</a>';
?>
