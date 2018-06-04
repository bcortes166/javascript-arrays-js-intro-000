var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = function(array, element) {

  return [element, ...array]

}

var destructivelyAddElementToBeginningOfArray = function(array, element) {

  array.unshift(element)

  return array

}

var addElementToEndOfArray = (array, element) => {

  return [...array, element]
}

var destructivelyAddElementToEndOfArray = (array, element) => {

  array.push(element)

  return array
}

var accessElementInArray = (array, index) => {

  return array[index]
}

var destructivelyRemoveElementFromBeginningOfArray = function(array) {

 array.shift()

  return array
}

var removeElementFromBeginningOfArray = array => {
  array.slice(1)

  return array
}
