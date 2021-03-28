const express = require("express")
const app = express()

const persons = [
	{
		name: "Arto Hellas",
		number: "040-123456",
		id: 1,
	},
	{
		name: "Ada Lovelace",
		number: "39-44-5323523",
		id: 2,
	},
	{
		name: "Dan Abramov",
		number: "12-43-234345",
		id: 3,
	},
	{
		name: "Mary Poppendieck",
		number: "39-23-6423122",
		id: 4,
	},
]

app.get("/api/persons", (req, res) => {
	res.json(persons)
})

app.get("/info", (req, res) => {
	const info = `Phonebook has info for ${persons.length} people`
	const today = new Date()
	const date = String(today)
	res.send(`<p>${info}</p><p>${date}</p>`)
})

app.get("/api/persons/:id", (req, res) => {
	const id = Number(req.params.id)
	const contact = persons.find(person => person.id === id)

	if (contact) {
		res.json(contact)
	} else {
		res.status(404).end()
	}
})

const PORT = 3001
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
