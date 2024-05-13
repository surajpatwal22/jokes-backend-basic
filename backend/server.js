import express from 'express';
import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT || 4000; 

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is ready');
});

let jokes = [
    {
        id: 1,
        title: 'Why don’t scientists trust atoms?',
        content: 'Because they make up everything!'
    },
    {
        id: 2,
        title: 'What did one ocean say to the other ocean?',
        content: 'Nothing, they just waved.'
    },
    {
        id: 3,
        title: 'Why did the scarecrow win an award?',
        content: 'Because he was outstanding in his field!'
    },
    {
        id: 4,
        title: 'How does a penguin build its house?',
        content: 'Igloos it together!'
    },
    {
        id: 5,
        title: 'Why did the bicycle fall over?',
        content: 'Because it was two-tired!'
    }
];

app.get('/api/v1/jokes', (req, res) => {
    res.json(jokes);
});


app.delete('/api/v1/jokes/:id', (req, res) => {
    const { id } = req.params;
    jokes = jokes.filter((joke) => joke.id != Number(id));
    res.status(200).send('Joke deleted successfully');
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
