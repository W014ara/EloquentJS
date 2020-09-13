let re1 = new RegExp("abc");
let re2 = /abc/;
// let eighteenPlus = /eighteen\+/;
// console.log(/abc/.test("abcxde"));
// console.log(/abc/.test("abxde"));
// console.log(typeof(/abc/));

/**
  =============================Регулярные выражения==================================

  Объявление:

    1 способ - let re1 = new RegExp("abc");
    2 способ - let re2 = /abc/

    Разница: RegExp создает внутри себя обычную строку и все правила на \
    обращаются как на обычную строку

  ----------------------------=Символы=-----------------------------------------------
  Квадртатные скобки [] - соответствие любому символу, расположенному в них
  Знак тире \-          - диапазон символов (порядок следования идет по Unicode)
  \d                    - любая цифра
  \w                    - любой символ алфавитный (словообразующий)
  \s                    - любой пробельный символ
  \D                    - не цифры
  \W                    - не буквы
  \S                    - не пробел
  Знак запятой ,        - любой символ, кроме новой строки
  Знак крышечки ^       - все, кроме вот этого символа в МНОЖЕСТВЕ, если не во множестве
                        - , то обозначает начало строки (Пример: /[^01] и /^a/)
  Знак +                - означает, что символ может повторяться от 1+ раз
  Знак *                - тоже самое, что и +, только от 0+ раз
  Знак ?                - делает часть шаблона необязательной т.е. строка встречается
                          0 или 1 раз
  Фигурные скобки {}    - соответствует количеству вхождений (Пример \d{1,2}), где
                          несколько параметров обозначают интервал. При этом элемент
                          перед скобками ДОЛЖЕН повториться заданное число вхождений.
                          Так же можно задать подобное {5,} или {,5} - означает 5 и 
                          более раз и от 0 до 5
  Круглые скобки ()     - группирование регулярного выражения. Пример: /(boo){3}/
  Связка ^regex$        - обозначает начало и конец строки
  \b                    - обозначает границу слова
  Символ вертикали |    - обозначает выбор между шаблонами. Пример: /\b\d+(pig|cow|cat)s?\b/
  Знак точки .          - любой символ, кроме перевода строки
  \p                    - проверка кодировки в Unicod данного символа. Пример: /\p{Script=Greek}/
                            u.test('a') -> true

  ----------------------------=Методы и фишки=-----------------------------------------------

  regex.test(string)    -  проверяет, содержит ли строка шаблон выражения
  /regex/i              -  делает регулярное выражение нечувствительное к регистру (иными словами
                           вся строка на проверку в регулярку обращается в маленькие символы)
  regex.exec(string)    -  возвращается null, если совпадение не найдено, либо Array.object, при этом
                           в object хранится информация о ПЕРВОМ совпадении
  string.match(regex)   -  аналог exec, только для строк (абсолютно идентичен)
  string.replace(regex|string , string | function)
                        -  заменяет у текущей строки часть символов на выбранные. При этом,
                           заменяется ПЕРВОЕ прохождение, для поиска всех соответсвий используйте
                           g - global. Пример: `aaabbbaaa`.replace(/a/g, "1") -> `111bbb111`
  string.search(regex)  -  возвращает первый индекс, по которому было найдено выражение или -1,
                           если не найдено ничего

*/


/**
 * ==========================Дата и время=========================
 * Объявление даты:
 *      класс Date (let a = new Date(year, month, day, hour, minute, seconds, milliseconds)) - создает текущее время
 *      можно создать для определенного времени new Date(2009, 11, 9)
 *      если параметры не определены, они автоматически проставлены как 0
 *      При этом метки времени идут от 1970 года. До 1970 года надо использовать отрицательные аргументы 
 *      Если передать 1 аргумент - это будет время в миллисекундах
 * 
 * Номера месяцев начинаются с нуля!!!
 * Номера дней начинаются с единицы!!!
 */

let str = "I abrast ab ab"
let regex = /ab/gi, result, indices = [];
while ( (result = regex.exec(str)) ) {
    console.log(result);
    indices.push(result.index);
}
console.log(indices);