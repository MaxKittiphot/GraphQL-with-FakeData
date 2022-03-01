const PersonList = [
    {
        id: 1,
        name: "Mikasa Ackerman",
        age: 15,
        division: "Scouting Legion",   
        gender: "FEMALE",
        friends: [
            {
                id: 2,
                name: "Eren Yeager",
                age: 15,
                division: "Scouting Legion",
                gender: "MALE"
            },
            {
                id: 3,
                name: "Armin Arlert",
                age: 15,
                division: "Scouting Legion",
                gender: "MALE"
            }
        ]
    },
    {
        id: 2,
        name: "Eren Yeager",
        age: 15,
        division: "Scouting Legion",
        gender: "MALE",
        friends: [
            {
                id: 1,
                name: "Mikasa Ackerman",
                age: 15,
                division: "Scouting Legion",   
                gender: "FEMALE"
            },
            {
                id: 3,
                name: "Armin Arlert",
                age: 15,
                division: "Scouting Legion",
                gender: "MALE"
            }
        ]
    },
    {
        id: 3,
        name: "Armin Arlert",
        age: 15,
        division: "Scouting Legion",
        gender: "MALE",
        friends: [
            {
                id: 1,
                name: "Mikasa Ackerman",
                age: 15,
                division: "Scouting Legion",   
                gender: "FEMALE"
            },
            {
                id: 2,
                name: "Eren Yeager",
                age: 15,
                division: "Scouting Legion",
                gender: "MALE"
            }
        ]
    },
    {
        id: 4,
        name: "Levi Ackerman",
        age: 30,
        division: "Scouting Legion",
        gender: "MALE"
    },
    {
        id: 5,
        name: "Annie Leonhart",
        age: 16,
        division: "Military Police",
        gender: "FEMALE"
    },
    {
        id: 6,
        name: "Hannes",
        age: 40,
        division: "Stationary Guard",
        gender: "MALE"
    },
    {
        id: 7,
        name: "Kenny Ackerman",
        age: 40,
        division: "Military Police",
        gender: "MALE"
    },
    {
        id: 8,
        name: "Zeke Yeager",
        age: 25,
        division: "Warrior",
        gender: "MALE"
    },
    {
        id: 9,
        name: "Reiner Braun",
        age: 17,
        division: "Warrior",
        gender: "MALE"
    },
    {
        id: 10,
        name: "Historia Reiss",
        age: 15,
        division: "Scouting Legion",
        gender: "FEMALE"
    },
    {
        id: 11,
        name: "Floch Forster",
        age: 15,
        division: "Stationary Guard",
        gender: "MALE"
    },
    {
        id: 12,
        name: "Rico Brzenska",
        age: 15,
        division: "Stationary Guard",
        gender: "FEMALE"
    }
    
]

const BookList = [
    {
        id: 1,
        name: "The Great Gatsby"
    },
    {
        id: 2,
        name: "The Catcher in the RYE"
    },
    {
        id: 3,
        name: "On the Road"
    },
    {
        id: 4,
        name: "Alice's Adventures In Wonderland"
    },
    {
        id: 5,
        name: "Brave New World"
    },
    {
        id: 6,
        name: "Lord of the Flies"
    },
    {
        id: 7,
        name: "Rashomon"
    },
    {
        id: 8,
        name: "The Metamorphosis"
    }
]

module.exports = { PersonList, BookList } 

