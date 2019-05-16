/*
Write a function that returns the total surface area and volume of a box as an array: [area, volume]. 
*/

function getSize(width, height, depth){
const volume = width * height * depth
const surfaceArea = ( (width * height)+(depth * height)+(depth * width) ) * 2
const arr = [surfaceArea,volume]
return arr
}