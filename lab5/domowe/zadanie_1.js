var q = $('#q')
var keyups = Rx.Observable.fromEvent(q, 'keyup')
keyups.throttleTime(500).map(function (x) {
  return q.val()
}).switchMap(function (x) {
  return searchWikipedia(x)
}).switchMap(function (x) {
  return Rx.Observable.zip(
    Rx.Observable.from(x[1]),
    Rx.Observable.from(x[2]),
    Rx.Observable.from(x[3])
  )
}).switchMap(function (row) {
  return Rx.Observable.of(createLink(row))
}).subscribe(function (x) {
  $('ol#links').append(x)
})

function createLink (row) {
  return `<li><a href="${row[2]}">${row[0]}</a> </li>`
}

function searchWikipedia (term) {
  return $.ajax({
    url: 'http://en.wikipedia.org/w/api.php',
    dataType: 'jsonp',
    data: {
      action: 'opensearch',
      format: 'json',
      search: term
    }
  }).promise()
}

/*
Oba zadania powinniśmy napisać w RXJS
Zadania.
1. Wizualizacja wyniku wiki searcha
  - sformatować odpowiedź z ajaxa  np.
  Opis
  Linki:
  * [nazwa] - [href - link]
  * [nazwa] - [href - link]
2. Gra przegladarkowa
mamy duzy kwadrat div, oraz maly kwadrat div. maly div jest losowany w obrebie duzego diva. losowanie polozenia elementu malego co 1 sekunda
nastepnie mamy drugi maly div, ktorym sterujemy za pomoca klawiszy lub myszy, koniec gry jest wtedy kiedy oba sie przetna
 */