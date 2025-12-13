<?php 
// Получаем текущее значение директивы post_max_size
$postMaxSize = ini_get("post_max_size");

$value = (float)$postMaxSize;
$suffix = substr(trim($postMaxSize), -1);

// Преобразуем значение в байты с помощью switch
switch(strtoupper($suffix)) {
    case 'G':
        // Гигабайты: умножаем на 1024^3
        $size = $value * 1024 * 1024 * 1024;
        break;
    case 'M':
        // Мегабайты: умножаем на 1024^2
        $size = $value * 1024 * 1024;
        break;
    case 'K':
        // Килобайты: умножаем на 1024
        $size = $value * 1024;
        break;
    default:
        // Если суффикса нет - это уже байты
        $size = $value;
        break;
}

// Приводим к целому числу (байты всегда целые)
$size = (int)$size;
?>

<h3>Адрес</h3>
<p>123456 Москва, Малый Американский переулок 21</p>
<h3>Задайте вопрос</h3>
<form action='' method='post'>
  <label>Тема письма: </label>
  <br />
  <input name='subject' type='text' size="50" />
  <br />
  <label>Содержание: </label>
  <br />
  <textarea name='body' cols="50" rows="10"></textarea>
  <br />
  <br />
  <input type='submit' value='Отправить' />
</form>

<p>Максимальный размер отправляемых данных <?= $size ?> байт.</p>