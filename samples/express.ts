import * as expressive from 'https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts';

const port = 3000;
const app = new expressive.App();

app.use(expressive.simpleLog());
app.use(expressive.static_('./public'));
app.use(expressive.bodyParser.json());

app.get('/api/test', async (req, res) => {
    res.json({ success: true });
});

app.listen(port);