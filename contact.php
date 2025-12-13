<!-- Область основного контента -->
<?php
// Вопрос 1: Как получить значение директивы post_max_size из php.ini?
// Вопрос 2: Как преобразовать строковые значения (8M, 2G, 256K) в байты?

// Получаем значение директивы post_max_size
$postMaxSize = ini_get("post_max_size");

// Извлекаем числовую часть и единицу измерения
$value = (float)$postMaxSize;
$unit = strtoupper(substr(trim($post_max_size), -1));

// Инициализируем переменную $size
$size = 0;

// Преобразуем в байты с помощью switch
switch ($unit) {
    case 'G': // Гигабайты
        $size = $value * 1024 * 1024 * 1024;
        break;
    case 'M': // Мегабайты
        $size = $value * 1024 * 1024;
        break;
    case 'K': // Килобайты
        $size = $value * 1024;
        break;
    default: // Байты (если нет буквенного суффикса)
        $size = $value;
        break;
}
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
<!-- Область основного контента -->