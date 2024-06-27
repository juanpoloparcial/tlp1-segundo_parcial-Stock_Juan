
// Iniciar el servidor

const express = require("express");
const db = require("./db");
const usuarios = require("./db");

// Crear el servidor
const app = express();

//Creamos los middleware
app.use(express.text());
app.use(express.json());

// Crear rutas
// Pagina principal

// Get (obtener o mostrar)
app.get("/",(req,res)=>{
    res.send("Hola desde mi servidor.");
});

// Creamos la pagina de los libros
app.get("/books",(req,res)=>{
    res.json(db);
});

//Obtener libro por su id
app.get("/books/:id",(req,res)=>{
    const id = parseInt(req.params.id); //id vienen como texto y las convertimos en número Entero

    const getLibro = db.find((title)=>title.id === id);
    res.json(books);
});

// Crear un Libro

app.post("/books",(req,res)=>{
    const {id,title} = req.body;

    const newBook = db.push({id:id,title:title});
    res.json({message: "Nuevo libro creado con éxito"});
});

// Editar un libro (title)

app.put("/books/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const{title} = req.body;

    const getLibro = db.find((title)=>title.id === id);
    getLibro.title = title;
    
    res.json({message: "Book creado con éxito."});
});

//Eliminar Libro

app.delete("/books/:id",(req,res)=>{
    const id = parseInt(req.params.id);

    const getLibro = db.find((title)=>title.id === id);

    const indexBook = db.indexOf(getLibro);
    const eliminarBook = db.splice(indexBook, 1);

    res.json({message: "Libro borrado con éxito!"})
})


// Crear el Puerto
app.listen(3000,()=>console.log("Servidor Corriendo en el puerto 3000"))