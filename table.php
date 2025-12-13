<?php
if($_SERVER['REQUEST_METHOD'] == 'POST'){
  $cols = abs((int) $_POST['cols']); 
  $rows = abs((int) $_POST['rows']); 
  $color = trim(strip_tags($_POST['color'])); 
} 

// Устанавливаем значения по умолчанию, если переменные не установлены
$cols = isset($cols) && $cols > 0 ? $cols : 10; 
$rows = isset($rows) && $rows > 0 ? $rows : 10; 
$color = isset($color) && $color !== '' ? $color : 'yellow'; 
?>

<!-- Область основного контента -->
<form action='<?= $_SERVER['REQUEST_URI'] ?>' method="POST">
  <label>Количество колонок: </label>
  <br />
  <input name='cols' type='text' value="<?= isset($_POST['cols']) ? htmlspecialchars($_POST['cols']) : '' ?>" />
  <br />
  <label>Количество строк: </label>
  <br />
  <input name='rows' type='text' value="<?= isset($_POST['rows']) ? htmlspecialchars($_POST['rows']) : '' ?>" />
  <br />
  <label>Цвет: </label>
  <br />
  <input name='color' type='text' value="<?= isset($_POST['color']) ? htmlspecialchars($_POST['color']) : '' ?>" />
  <br />
  <br />
  <input type='submit' value='Создать' />
</form>
<!-- Таблица -->
<?php
if (function_exists('drawTable')) {
    drawTable($cols, $rows, $color);
}
?>
<!-- Таблица -->
<!-- Область основного контента -->