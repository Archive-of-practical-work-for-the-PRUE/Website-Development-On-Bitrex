<?
  function drawTable($cols, $rows, $color)
  {
    echo "<table border='1' style='border-collapse: collapse; text-align: center;'>";

    // Первая строка с заголовками столбцов
    echo "<tr style='background-color: $color;'>";
    echo "<td style='font-weight: bold;'></td>"; // Пустая ячейка в углу
    for ($j = 1; $j <= $cols; $j++) {
        echo "<td style='font-weight: bold;'><b>$j</b></td>";
    }
    echo "</tr>";

    // Основные строки
    for ($i = 1; $i <= $rows; $i++) {
        echo "<tr>";
        
        // Заголовок строки (первый столбец)
        echo "<td style='font-weight: bold; background-color: $color;'><b>$i</b></td>";
        
        // Ячейки с произведениями
        for ($j = 1; $j <= $cols; $j++) {
            echo "<td>" . ($i * $j) . "</td>";
        }
        
        echo "</tr>";
    }

    echo "</table>";
  }

  function drawMenu($menu, $vertical = true) {
    if ($vertical) {
        // Вертикальное меню (по умолчанию)
        echo '<ul>';
        foreach ($menu as $item) {
            echo "<li><a href='{$item['href']}'>{$item['link']}</a></li>";
        }
        echo '</ul>';
    } else {
        // Горизонтальное меню
        echo '<ul style="display: flex; list-style: none; padding: 0;">';
        foreach ($menu as $item) {
            echo "<li style='margin-right: 15px;'><a href='{$item['href']}'>{$item['link']}</a></li>";
        }
        echo '</ul>';
    }
  }
?>