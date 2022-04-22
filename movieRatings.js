function movieRatings(input) {
    let index = 0
    let filmCount = Number(input[index])
    index++
    let highestRating = Number.MIN_SAFE_INTEGER
    let lowestRating = Number.MAX_SAFE_INTEGER
    let ratingSum = 0
    let highestRatingFilm = ""
    let lowestRatingFilm = ""

    for (let i = 0; i < filmCount; i++) {
        let filmName = input[index]
        index++
        let filmRating = Number(input[index])
        index++
        if (filmRating > highestRating) {
            highestRating = filmRating
            highestRatingFilm = filmName
        }
        if (filmRating < lowestRating) {
            lowestRating = filmRating
            lowestRatingFilm = filmName
        }
        ratingSum += filmRating

    }

    let avgRating = ratingSum/filmCount
    console.log(`${highestRatingFilm} is with highest rating: ${highestRating.toFixed(1)}`);
    console.log(`${lowestRatingFilm} is with lowest rating: ${lowestRating.toFixed(1)}`);
    console.log(`Average rating: ${avgRating.toFixed(1)}`);
}
movieRatings([5,
 "A Star is Born",
 7.8,
 "Creed 2",
 7.3,
 "Mary Poppins",
 7.2,
 "Vice",
 7.2,
 "Captain Marvel",
 7.1])