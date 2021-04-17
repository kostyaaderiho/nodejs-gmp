import { sequalize, init } from './loaders';

const app = init();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT} port.`);
});

sequalize();
