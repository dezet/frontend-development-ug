var lib = {}

lib.module = (function () {

  //zmienna publiczna udostepniona przez interfejs zwracanego obiektu
  var message       = 'not secrted message'
  //zmiena prywatna, bo nie udostepniona przez interfejs zwracanego obiektu
  var secretMessage = 'secret message'

  /**
   * metoda prywatna
   */
  var privateFun1 = function () {

  }

  /**
   *  metoda publiczna, udostepniona poprzez interfejs return {} ponizej
   * @returns {string}
   */
  var publicFun1 = function () {
    return 'yolo'
  }

  return {
    fun: publicFun1,
    message: message
  }
})()

console.log(lib.module.fun())