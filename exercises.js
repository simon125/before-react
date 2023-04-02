/**
 * usuń/odfiltruj wszystkie stringi z tablicy które mają mniej znaków niż 3
 */

const strings2 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

/**
 * Przerób podaną tablicę tak aby zawierała osoby pełnoletnie w świetle polskiego prawa
 *
 * wynik wykonsoluj przy użyciu metody console.table lub wyświetl dane w dowolny znany Ci sposób
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const users = [
  { name: "John", age: 12 },
  { name: "Jane", age: 22 },
  { name: "Joe", age: 55 },
  { name: "Kate", age: "9" },
];

/**
 * dodaj do każdego stringa w tablicy znak specjalny * w taki sposób żeby był pomiędzy każdą literką
 * np cześć => c*z*e*ś*ć
 *
 * wynik wykonsoluj za pomocą console.table
 *
 */

const strings1 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

/**
 * Stwórz funkcję która będzie zwracać "zresetowaną" tablicę todos
 * tzn mając tablice todos z różnymi statusami przetwórz daną tablicę tak żeby wszystkie statusy
 * były ustawione na todo - zwróć uwage jak wygląda podany kształ danych
 *
 * wynik wyświetl za pomocą console.table
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos0 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

/**
 * Stwórz funkcję która będzie zwracać "zarchiwizowaną" tablicę todos
 * tzn dodaj dodatkowe pole typu boolean do kazdego obiektu w tablicy
 * pole niech się nazywa archived i niech będzie ustawione na true
 *
 * wynik wyświetl za pomocą console.table
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos1 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

/**
 * stwórz funkcje która obsłuży search bar (np taki jak w aplikacjach do wyszukiwania rekordów)
 *
 * funckja będzie szukać w tablicy na podstawie pola "task",
 * funckja ma zwracać pierwszy pasujący elemnt
 *
 *
 * ⭐ ⭐ dla chętnych niech funckja posiada drugi parametr określający czy chcemy dostać
 * wszystkie pasujące elementy np podając słowo "pouczyć się" funkcja powinna zwrócić dwa elmenty z poniższej tablicy
 * gdy drugi parametr funkcji określa np że chcemy konretny rekord/element tablicy niech funckja
 * wyszukuje pierwszy pasujący element
 *
 *
 */

const todos2 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

/**
 * podana tablica skłąda się ze studenów którzy są przyporządkowani każdy do jakiejś grupy
 * jednak są oni w tej samej tablicy
 *
 * swtórz funkcje która stworzy dwie lub więcej tablic w tablicy na podstawie pola group
 * dzięki temu pogrupujesz studentów i będzie można ich wyświetlić pogrupowancyh do
 * czego zachęcam żeby przećwiczyć operacje na DOMie
 */

const students = [
  { name: "John", age: 12, group: 1 },
  { name: "Jane", age: 22, group: 2 },
  { name: "Joe", age: 55, group: 1 },
  { name: "Kate", age: 9, group: 2 },
];
