import express from "express";

const app = express(); // app - web-server

app.get("/", (request, response)=> {
    response.send("<h2>Головна сторінка</h2>");
});

app.get("/products", (request, response)=> {
    res.send("<h2>Сторінка товарів</h2>")
})

app.get("/contacts", (request, response) => {
    console.log(request.url);
    console.log(request.method);
    response.send("<h2>Сторінка контактів</h2>");
})

app.listen(3000, ()=> console.log("Server running"));