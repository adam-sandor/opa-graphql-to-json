//import { jsonToGraphQLQuery } from 'json-to-graphql-query';

const {graphQlQueryToJson} = require('graphql-query-to-json');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.text());

app.post('/', (req, res) => {
    const query = req.body
    console.log('Converting query "' + query + '" to JSON');

    const result = graphQlQueryToJson(query)

    res.header("Content-Type", "application/json")
    res.send(result)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})