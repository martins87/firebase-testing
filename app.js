import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
    res.send('Hello, 2021!');
});

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

