const Rx = require('rxjs/Rx')

let myObserverables = Rx.Observable.range(0, 10)

var myObserver = {
  next: item => console.log(`Next ${item}`),
  error: ex => console.log(`${ex}`),
  complete: () => console.log(`Completed yo`)
}

//myObserverables.subscribe(myObserver)

/**
 * Tworzy liste typu: [[0], [0,1], [0,1,2], [0,1,2,3]], bez switchMap item=>item mielibysmy tam
 * @type {Subscription}
 */
let anotherObserverable = Rx.Observable.range(0, 10).
                             map(item => Rx.Observable.range(0, item)).
                             switchMap(item => item).
                             subscribe(myObserver)

