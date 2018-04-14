var canvas    = document.getElementById('myCanvas')
var ctx       = canvas.getContext('2d')
var boxHeight = 50
var boxWidth  = 50
var player    = {
  x: Math.floor((Math.random() * 800 - boxWidth) + 1 + boxWidth),
  y: Math.floor((Math.random() * 600 - boxHeight) + 1 + boxHeight),
  w: boxWidth,
  h: boxHeight,
  color: '#00FF00'
}

var game = {
  x: Math.floor((Math.random() * 800 - boxWidth) + 1 + boxWidth),
  y: Math.floor((Math.random() * 600 - boxHeight) + 1 + boxHeight),
  w: boxWidth,
  h: boxHeight,
  color: '#FF0000'

}

function draw (rect) {
  ctx.fillStyle = rect.color
  ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
}

function clear (rect) {
  ctx.clearRect(rect.x, rect.y, rect.w, rect.h)
}

function keyToDirection (key) {
  var direction = 1
  switch (key) {
    case 'ArrowLeft':
      direction = 1
      break
    case 'ArrowRight':
      direction = 2
      break
    case 'ArrowUp':
      direction = 4
      break
    case 'ArrowDown':
      direction = 3
      break
  }
  return direction
}

function randomDirection () {
  return Math.floor((Math.random() * 4) + 1)
}

function validate (rect, delta) {
  if (rect.x + delta.x < 0 || rect.x + delta.x > canvas.width - rect.w)
    return false
  if (rect.y + delta.y < 0 || rect.y + delta.y > canvas.height - rect.h)
    return false

  return true
}

function checkCollisions (rect1, rect2) {
  if (rect1.x < rect2.x + rect2.w &&
    rect1.x + rect1.w > rect2.x &&
    rect1.y < rect2.y + rect2.h &&
    rect1.h + rect1.y > rect2.y) {
    return true
  }
  else return false
}

function move (rect, direction) {
  var delta = null
  switch (direction) {
    //left
    case 1:
      delta = {
        x: -40,
        y: 0
      }
      break
    //right:
    case 2:
      delta = {
        x: 40,
        y: 0
      }
      break
    //up
    case 3:
      delta = {
        x: 0,
        y: 40
      }
      break
    //down
    case 4:
      delta = {
        x: 0,
        y: -40
      }
      break
  }

  if (validate(rect, delta)) {
    rect.x += delta.x
    rect.y += delta.y
  }
}

function end () {
  $('div#end').css('display', 'block')
}

var keyups = Rx.Observable.fromEvent(document, 'keydown').
                subscribe(function (event) {
                  if (!checkCollisions(game, player)) {
                    clear(player)
                    move(player, keyToDirection(event.key))
                    draw(player)
                  }
                  else {
                    end()
                    keyups.unsubscribe()
                  }
                })

draw(player)
var intervals = Rx.Observable.interval(500).
                   subscribe(function () {
                     if (!checkCollisions(game, player)) {
                       clear(game)
                       move(game, randomDirection())
                       draw(game)
                     } else {
                       end()
                       intervals.unsubscribe()
                     }
                   })

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