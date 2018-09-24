const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

const list = [
    { id: 1, name: 'John', number: '123456789' },
    { id: 2, name: 'John', number: '123456789' },
    { id: 3, name: 'John', number: '123456789' },
];

app.get('/', (req, res) => {
    res.send('Hello');
});

app.get('/api/phonelist/', (req, res) => {
    if (!list) res.status(404).send('Not found');
    res.send(list);
});

app.get('/api/phonelist/:id', (req, res) => {
    const node = list.find(c => c.id === parseInt(req.params.id));
    if (!node) res.status(404).send('Not found');
    res.send(node);
});

app.post('/api/phonelist/', (req, res) => {
    const { error } = validateNode(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const node = {
        id: list.lastIndexOf.id + 1,
        name: req.body.name
    };
    list.push(node);
    res.send(node);
});

app.put('/api/phonelist/:id', (req, res) => {
    const node = list.find(c => c.id === parseInt(req.params.id));
    if (!node) return res.status(404).send('Not found');

    const { error } = validateNode(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    node.name = req.body.name;
    number.name = req.body.name;
    res.send(node);
});

app.delete('/api/phonelist/:id', (req, res) => {
    const node = list.find(c => c.id === parseInt(req.params.id));
    if (!node) return res.status(404).send('Not found');

    const index = list.indexOf(node);
    list.splice(index, 1);

    res.send(node);
});

function validateNode(node) {
    const schema = {
        name: Joi.string().min(2).required(),
        number: Joi.parseInt.min(3).required()
    };

    return Joi.validate(course, schema);
};

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
