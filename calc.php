<?php
// Инициализация переменных
$num1 = '';
$num2 = '';
$operator = '';
$result = '';
$error = '';

// Обработка данных формы
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Прием и фильтрация данных
    $num1 = isset($_POST['num1']) ? trim($_POST['num1']) : '';
    $num2 = isset($_POST['num2']) ? trim($_POST['num2']) : '';
    $operator = isset($_POST['operator']) ? trim($_POST['operator']) : '';
    
    // Проверка, что все данные пришли
    if ($num1 === '' || $num2 === '' || $operator === '') {
        $error = 'Ошибка: Все поля должны быть заполнены!';
    } else {
        // Проверка, что введены целые числа
        if (!is_numeric($num1) || !is_numeric($num2)) {
            $error = 'Ошибка: Введите целые числа!';
        } else {
            // Преобразование в целые числа
            $num1 = (int)$num1;
            $num2 = (int)$num2;
            
            // Выполнение математической операции
            switch ($operator) {
                case '+':
                    $result = $num1 + $num2;
                    break;
                case '-':
                    $result = $num1 - $num2;
                    break;
                case '*':
                    $result = $num1 * $num2;
                    break;
                case '/':
                    if ($num2 == 0) {
                        $error = 'Ошибка: Деление на ноль невозможно!';
                    } else {
                        $result = $num1 / $num2;
                    }
                    break;
                default:
                    $error = 'Ошибка: Неверный оператор! Допустимые операторы: +, -, *, /';
                    break;
            }
        }
    }
}
?>

<!-- Вывод результата или ошибки -->
<?php if ($_SERVER['REQUEST_METHOD'] == 'POST'): ?>
    <?php if ($error): ?>
        <div style="color: red; font-weight: bold; margin-bottom: 20px;">
            <?= htmlspecialchars($error) ?>
        </div>
    <?php elseif ($result !== ''): ?>
        <div style="color: green; font-weight: bold; margin-bottom: 20px;">
            Результат: <?= htmlspecialchars($num1) ?> <?= htmlspecialchars($operator) ?> <?= htmlspecialchars($num2) ?> = <?= htmlspecialchars($result) ?>
        </div>
    <?php endif; ?>
<?php endif; ?>

<!-- Область основного контента -->
<form action='<?= $_SERVER['REQUEST_URI'] ?>' method='POST'>
  <label>Число 1:</label>
  <br />
  <input name='num1' type='text' value="<?= htmlspecialchars($num1) ?>" />
  <br />
  <label>Оператор: </label>
  <br />
  <input name='operator' type='text' value="<?= htmlspecialchars($operator) ?>" />
  <br />
  <label>Число 2: </label>
  <br />
  <input name='num2' type='text' value="<?= htmlspecialchars($num2) ?>" />
  <br />
  <br />
  <input type='submit' value='Считать'>
</form>
<!-- Область основного контента -->