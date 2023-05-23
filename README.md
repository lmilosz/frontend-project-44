### Hexlet tests and linter status:
[![Actions Status](https://github.com/lmilosz/frontend-project-44/workflows/hexlet-check/badge.svg)](https://github.com/lmilosz/frontend-project-44/actions)

<a href="https://codeclimate.com/github/lmilosz/frontend-project-44/maintainability"><img src="https://api.codeclimate.com/v1/badges/e5a92c15032978165fba/maintainability" /></a>

# игры разума 
"игры разума" - это набор из пяти консольных игр, каждая из которых предлагает игроку сыграть 3 раунда, отвечая на вопросы. после 3-х правильных ответов игра считается успешно завершенной, а неправильные ответы завершают ее и предлагают попробовать еще раз.
## Установка
для установки нужно: 

клонировать репозиторий
```
git clone https://github.com/lmilosz/frontend-project-44.git
```
установить нужные пакеты
```
make install
```


## Как начать играть?

### 1 игра - проверка на четность
Описание: 
игроку в течение 3-х раундов будет выдаваться случайное число. От игрока требуется ответить yes, если оно четное, и no если число нечетное.

чтобы запустить игру:
```
make brain-even
```
пример установки и процесс игры
[![asciicast](https://asciinema.org/a/KZkvqd864nG5MDnHNbtm6CT7j.svg)](https://asciinema.org/a/KZkvqd864nG5MDnHNbtm6CT7j)
#
### 2 игра - калькулятор
Описание: 
пользователю показывается случайное математическое выражение, которое нужно вычислить и записать правильный ответ.

чтобы запустить игру:
```
make brain-calc
```
пример установки и процесс игры
[![asciicast](https://asciinema.org/a/902wisrEHb6nToRQpppHSpen1.svg)](https://asciinema.org/a/902wisrEHb6nToRQpppHSpen1)
#
### 3 игра - наибольший общий делитель
Описание: 
Игроку показывается два случайных числа. Игрок должен вычислить и ввести наибольший общий делитель этих чисел.

чтобы запустить игру:
```
make brain-gcd
```
пример установки и процесс игры
[![asciicast](https://asciinema.org/a/YOwee4iNO53lSgko9Fe45rQPj.svg)](https://asciinema.org/a/YOwee4iNO53lSgko9Fe45rQPj)
#
### 4 игра - арифметическая прогрессия
Описание: 
Игроку показывается ряд чисел, образующий арифметическую прогрессию, заменив любое из чисел двумя точками. Игрок должен определить это число.

чтобы запустить игру:
```
make brain-progression
```
пример установки и процесс игры
[![asciicast](https://asciinema.org/a/Ymuu71TxyO8Lr5zqgiw6BbhnX.svg)](https://asciinema.org/a/Ymuu71TxyO8Lr5zqgiw6BbhnX)