/*
Resistor Color map Instructions
The goal of this exercise is to create a way:
to look up the numerical value associated with a particular color band to list the different band colors
*/

const colorCode = (color) => {
	// Code here
    colors = {"black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9
    };
    console.log(colors[color])
	return colors[color];
}
