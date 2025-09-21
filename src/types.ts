export type Person = {
    readonly id: number,
    readonly name: string,
    birth_year: number,
    death_year? : number,
    biography: string,
    image: string
}

export type Actress = Person & {
    most_famous_movies: [string, string, string],
    award: string,
    nationality: Nationality
}

type Nationality = "American" | "British" | 
    "Australian" | "Israeli-American" | 
    "South African" | "French" | "Indian" | 
    "Israeli" | "Spanish" | "South Korean" |
    "Chinese"




