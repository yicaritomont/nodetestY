const { app, port, path } = require("./src/configurations");
//const db = require("./queries");


app.get("/", (request, response) => {
  response.sendFile(path.join(__dirname, "/public/index.html"));
  //response.json({ info: "node js, Express y postgres API :P " });
});

/*app.get("/users", db.getUsers);
app.get("/users/:id", db.getUserById);
app.post("/users", db.createUser);
app.put("/users/:id", db.updateUser);
app.delete("/users/:id", db.deleteUser);*/

app.listen(port, () => {
  console.log(`App runnin on port ${port}`);
});


