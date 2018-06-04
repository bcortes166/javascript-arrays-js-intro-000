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

var derstructivelyRemoveElementFromBeginningOfArray = () => {

  ().shift()

  return array
}
