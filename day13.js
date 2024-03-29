/*
Convert given seconds to space age on all planets of our solar system
*/
const orbitals = {
    'Mercury': 0.2408467,
    'Venus': 0.61519726,
    'Earth': 1,
    'Mars': 1.8808158,
    'Jupiter': 11.862615,
    'Saturn': 29.447498,
    'Uranus': 84.016846,
    'Neptune': 164.79132,
}
const earthYearInSeconds = 31557600;

const spaceAge = (seconds) => {


	const yearsInAllPlanets = {
		Mercury: 0,
		Venus: 0,
		Earth: 0,
		Mars: 0,
		Jupiter: 0,
		Saturn: 0,
		Uranus: 0,
		Neptune: 0,
	}

	// Your solution starts here
    year = seconds/earthYearInSeconds;

    Object.entries(orbitals).map(([planet,orbitalPeriod]) => {
        yearsInAllPlanets[planet] = parseFloat((year/orbitalPeriod).toFixed(2))
    })
	// Your solution ends here

	return yearsInAllPlanets
}
console.log(spaceAge(Math.round(Math.random() * 99999999)))
