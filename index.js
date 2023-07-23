const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/deals', (req, res) => {
    const deals = {
        deals: [
            {
                id: 1,
                title: 'Hr Software',
                person_name: 'Jane',
                organization_name: 'Apple Inc',
                owner: 'Jorge',
            },
            {
                id: 2,
                title: 'Hr Software',
                person_name: 'Robert',
                organization_name: 'Microsoft Corporation',
                owner: 'Joyce',
            },
        ]
    }
    res.send(deals)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})