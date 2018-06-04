var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = function(array, element) {

  array = [element, ...array]

  return array
}
