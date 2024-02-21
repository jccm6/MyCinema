const dbConfig = require("./src/config/dbConfing.js");
const app = require("./src/server.js");
const PORT = 3000;

let startServer = async () => {
    try {
        await dbConfig();
        app.listen(PORT, ()=> {
            console.log(`Server listing Port: http://localhost:${PORT}`)
        })
        
    } catch (error) {
        console.log(error);
    }
}

startServer();