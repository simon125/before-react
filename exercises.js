/**
 * usuń/odfiltruj wszystkie stringi z tablicy które mają mniej znaków niż 3
 *
 * 1) do nowej zmiennej przypisz wynik działania Twojej funkcji
 * 2) funkcja może korzystać z metod dostępnym na tablicach .filter
 * 3) funkcja może korzystać z pętli for oraz funkcji push
 *
 *
 */

const strings2 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

// podejście 1

const strings3 = [];

for (let i = 0; i < strings2.length; i++) {
  if (strings2[i].length > 3) {
    strings3.push(strings2[i]);
  }
}

// console.table(strings3);

/**
 * podejście 2
 */

const filteredStrings = strings2.filter((string) => {
  return typeof string === "string" && string.length >= 3;
});

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
  { name: "Kate", age: null },
  { name: "Kate", age: undefined },
];

/**
 * podejście 1
 */

const adults = users.filter((user) => {
  return user.age >= 18;
});

// console.table(adults);

/**
 * podejście 2
 */
function czyPelnoletni() {
  return users.filter((user) => user.age >= 18);
}

// console.table(czyPelnoletni());

/**
 * 1) stworzyć strukture HTMLową tabelki w JSie + dane (spopulować tabelke danymi)
 * 2) pobrać elemnt z dokumentu html tak żeby umieścić w nim stworzoną w JSie tablke
 */

/**
 * Przykład HTMLA pisanego w JSie
 */

// const html = `
//   <div>
//     Lorem ipsum dolor sit amet consectetur adipisicoribus veniam dolorum at?
//   </div>
// `;

/**
 * [
 *  `
 *    <tr>
 *      <td>
 *        Name
 *      </td>
 *      <td>
 *        Age
 *      </td>
 *    </tr>
 *  `
 * ]
 */
const htmlAsArrayOfTRs = adults.map((user) => {
  return `
    <tr>
      <td>
        ${user.name}
      </td>
      <td>
        ${user.age}
      </td>
      <td>
        <button>DELETE</button>
      </td>
    </tr>
  `;
});

console.log(htmlAsArrayOfTRs);

// łączenie tablicy stringów (elementów TR) w jednego stringa;
const htmlTRSAsAString = htmlAsArrayOfTRs.join("");

/**
 * umieszczenie wszystkihc elementów TR pomiędzy tagi table & tbody
 */
const htmlTable = `<table>
  <tbody>
    ${htmlTRSAsAString}
  </tbody>
</table>`;

const articleHTMLButJSObject = document.querySelector("#output");

articleHTMLButJSObject.innerHTML = htmlTable;

/**
 * POWTÓRKA CZYM JEST OBEIKT + NAZEWNICTWO pole a zmienna i metoda a funkcja
 */

const obiekt = {
  name: "John",
  sayHello: () => console.log("Hello"),
};

// obiekt.name - pole obiektu JSowego
// let zmienna = 123; // to jest zmienna
// obiekt.sayHello(); // - metoda obiektu JSowego to inacze funkjca w obiekcie
// function sayHello () {} // oddzielny byt niezwiazany z obiektem

/**
 * dodaj do każdego stringa w tablicy znak specjalny * w taki sposób żeby był pomiędzy każdą literką
 * np cześć => c*z*e*ś*ć
 *
 * wynik wykonsoluj za pomocą console.table
 *
 * split(''); // spróbuj wywołać .split('') na dowolnym stringu
 *
 *
 */

"jakisstring".split().join();

// const strings1 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

/**
 * ["a*d*s*f*a*s*d*f", "q*w*e*q*wdasd", "as", "assadwq", "s", "", 123]
 */

const strings1 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", ""];

function dajDziwneZnaki() {
  return strings1.map((a) => {
    const zamianastring = a.toString();
    const newString = zamianastring.split("").join("*");
    console.log(newString);

    return newString;
  });
}
// console.log(dziwneZnaki());

/**
 * podejście 2
 */
const stringiZGwiazdami = strings1.map((string) => {
  return string.split("").join("*");
});

// console.log({ stringiZGwiazdami });

/**
 * podejscie 3
 */
for (let i = 0; i < strings1.length; i++) {
  const string = strings1[i].split("").join("*");
  // console.log(string);
}

/**
 * Stwórz funkcję która będzie zwracać "zresetowaną" tablicę todos
 * tzn mając tablice todos z różnymi statusami przetwórz daną tablicę tak żeby wszystkie statusy
 * były ustawione na todo - zwróć uwage jak wygląda podany kształ danych
 *
 * wynik wyświetl za pomocą console.table
 *
 * przykładowy obiekt user:
 *
 * --------------------------------
 *
 * const user = {
 *      name: 'Jane',
 *      lastName: 'Doe',
 *      age: 12,
 *      isAult: false
 * }
 *
 * --------------------------------
 *
 * żeby zaktualizować pole tego obiektu należy odwołać się do tego obiektu i następnie do przyszłego pola po
 * kropce (patrz poniżej)
 *
 * --------------------------------
 *
 * user.isAdult = true;
 *
 * --------------------------------
 *
 * przypisaliśmy wartość boolowską true
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
 * podejście 1
 */
const nowaTablicaNaPodstawieStarejTablicy = todos0.map((todo) => {
  const newTodo = { ...todo, status: "todo" };

  return newTodo;
});

// console.table(todos0);
// console.table(nowaTablicaNaPodstawieStarejTablicy);

/**
 * podejscie 2
 */

function zmienStatus() {
  return todos0.map((task) => ({ ...task, status: "todo" }));
}

// console.table(zmienStatus());

const todo = {
  task: "pouczyć się JSa",
  priority: "high",
  status: false,
};

/**
 * Stwórz funkcję która będzie zwracać "zarchiwizowaną" tablicę todos
 * tzn dodaj dodatkowe pole typu boolean do kazdego obiektu w tablicy
 * pole niech się nazywa archived i niech będzie ustawione na true
 *
 * wynik wyświetl za pomocą console.table
 *
 * obiekt.nazwaPola = true albo false;
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos1 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

const zarchiwizowaneTodosy = [
  { task: "wyspać się", status: "in progress", archived: true },
  { task: "mieć dobry chumor", status: "todo", archived: true },
  { task: "pouczyć się CSSa", status: "in progress", archived: true },
  { task: "pouczyć się JSa", status: "todo", archived: true },
];

/**
 * 1) przeiteruj się po tablicy todos1
 * 2) każdemu obiektowi z danego obrotu pętli dodaj nowe pole o nazwie "archived" i przypisz do niego wartość true
 * 3) wynikiem powinna być nowa tablica z obiektami stworzonymi na podstawie obiektów todos1
 */

function archiveTodos() {
  const archivedTodos = todos1.map((todo) => {
    return { ...todo, archived: true };
  });

  return archivedTodos;
}

// console.table(todos1);

// console.table(archiveTodos());

/**
 * stwórz funkcje która obsłuży search bar (np taki jak w aplikacjach do wyszukiwania rekordów)
 *
 * funckja będzie szukać w tablicy na podstawie pola "task",
 * funckja ma zwracać pierwszy pasujący elemnt
 *
 * albo filter albo find
 *
 *
 * ⭐ ⭐ dla chętnych niech funckja posiada drugi parametr określający czy chcemy dostać
 * wszystkie pasujące elementy np podając słowo "pouczyć się" funkcja powinna zwrócić dwa elmenty z poniższej tablicy
 * gdy drugi parametr funkcji określa np że chcemy konretny rekord/element tablicy niech funckja
 * wyszukuje pierwszy pasujący element
 *
 */

const todos2 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "todo" },
];

// function search(slowo) {
//   /**
//    * obiektTodo - element tablicy todos2 - {
//    *  task,
//    *  status
//    * }
//    */
//   return todos2.filter((obiektTodo) => {
//     if (obiektTodo.task.includes(slowo)) {
//       return true;
//     }

//     return false;
//   });
// }

function search(slowo) {
  /**
   * obiektTodo - element tablicy todos2 - {
   *  task,
   *  status
   * }
   */
  return todos2.filter((obiektTodo) => {
    return obiektTodo.task.includes(slowo);
  });
}

console.log(search("pou"));

// function search(searchPhrase){
//   return searchPhrase.filter('pouczyć się');
// }
// console.log(search(todos2));

/**
 * podana tablica skłąda się ze studenów którzy są przyporządkowani każdy do jakiejś grupy
 * jednak są oni w tej samej tablicy
 *
 * reduce
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
  { name: "Kate", age: 9, group: 3 },
  { name: "Kate", age: 9, group: 4 },
  { name: "Kate", age: 9, group: 5 },
  { name: "Kate", age: 9, group: 15 },
];

const groupedByAge = students.reduce(
  (groups, student) => {
    if (student.age < 30) {
      groups[0].push(student);
    } else {
      groups[1].push(student);
    }

    return groups;
  },
  [[], []]
);

console.log(groupedByAge);

// ta funckja policzy nam wiek dla wszytskich studentów
const sumaLatStudentów = students.reduce((acc, student) => {
  acc = acc + student.age;
  return acc;
}, 0);

const groupedByGroup = students.reduce((groups, student) => {
  if (groups[student.group]) {
    groups[student.group].push(student);
  } else {
    groups[student.group] = [student];
  }

  return groups;
}, []);

console.log(groupedByGroup);

/**
 * "skrótowe" tworzenie obiektu
 */

// const age = 12;

// dłuższa forma
// const user = {
//   klucz: 'wartość',
//   name: 'John',
//   age: age
// }

// krótsza forma - ekwiwalent
// const user = {
//   klucz: 'wartość',
//   name: 'John',
//   age
// }
