// Good luck!
const express = require("express")
const app = express()

const musicClubDepartment = {
    clubPhoto: "https://cdn5.vectorstock.com/i/1000x1000/43/64/music-club-neon-signs-style-text-vector-41244364.jpg", 
    musicalGroups: [
      {
        name: "Choir",
        teacher: "Emily Johnson",
        genre: "Classical",
        active: true
      },
      {
        name: "Jazz Band",
        teacher: "Michael Brown",
        genre: "Jazz",
        active: true
      },
      {
        name: "Orchestra",
        teacher: "Sophia Wilson",
        genre: "Symphonic",
        active: true
      },
      {
        name: "Rock Band",
        teacher: "Daniel Garcia",
        genre: "Rock",
        active: false
      },
      {
        name: "Percussion Ensemble",
        teacher: "Emma Davis",
        genre: "Percussion",
        active: true
      }
    ],
    teachers: [
      {
        firstName: "Cham",
        lastName: "Pham",
        photoUrl: "Cham_Pham_photo.jpg",
        startYear: 2014,
        instrument: "Piano",
        funFact: "Has performed at Carnegie Hall twice."
      },
      {
        firstName: "Julian",
        lastName: "Castro",
        photoUrl: "Julian_Castro_photo.jpg",
        startYear: 2016,
        instrument: "Saxophone",
        funFact: "Loves jazz and collects vintage records."
      }
    ],
    events: [
      {
        eventName: "Spring Concert",
        date: "2025-05-20",
        location: "High School Auditorium",
        description: "Annual concert featuring all musical groups."
      },
      {
        eventName: "Jazz Night",
        date: "2025-03-15",
        location: "Cafeteria",
        description: "A night of smooth jazz performances."
      },
      {
        eventName: "Winter Recital",
        date: "2024-12-10",
        location: "Music Hall",
        description: "Recital featuring solo performances by students."
      }
    ]
  };
  
  app.use((request, response, next) => {
    console.log(request.method + "/" + request.url)
    next();
})

app.get("/", (request, response) => {
	response.send("<h1>Welcome to the Music Club Department</h1>")
})



app.get("/musicalGroups", (request, response) => {
	response.json(musicClubDepartment.musicalGroups)
})

app.get("/teachers", (request, response) => {
	response.json(musicClubDepartment.teachers)
})


app.get("/events", (request, response) => {
	response.json(musicClubDepartment.events)
})

app.get("/events/:id", (request, response) => {
    const index = request.params.id
response.json(musicClubDepartment.events[index])
})

app.get("/teachers/:id", (request, response) => {
    const index = request.params.id
response.json(musicClubDepartment.teachers[index])
})

app.get("/docs", (request, response) =>{
    response.send("Go to /musicalGroups or /teachers to learn about the Music Club Department")
    })



app.use((request, response, ) => {
	response.status(404).send("404 NOT FOUND")
})


app.listen(3000, () => {
    console.log("Server running")
})



