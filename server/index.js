import cors from "cors";
import express from "express"; 
import register from "./routes/register.js";
import login from "./routes/login.js";

const app = express(); 
app.use(express.json());
app.use(cors()); 
const PORT = process.env.PORT || 3000; 

app.use(register)
app.use(login)

app.listen(PORT, () => console.log(`http://localhost:3000 ...`))
