const { Router } = require('express');

const indexRouter = Router();
const messages = [
    {
      id: 1,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 2,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

// GET route for the home page
indexRouter.get("/", (req, res) => {
    res.render("index", { title: "Mini Messageboard", messages });
});

// GET route for displaying the form
indexRouter.get("/new", (req, res) => {
    res.render("form");
});

// POST route for handling form submission
indexRouter.post("/new", (req, res) => {
    const { user, text } = req.body;
    const newMessage = { id: messages.length + 1, text, user, added: new Date() };
    messages.push(newMessage);
    res.redirect("/");
});

// GET route for displaying a message detail
indexRouter.get("/message/:id", (req, res) => {
    const messageId = parseInt(req.params.id);
    const message = messages.find(msg => msg.id === messageId);
    if (message) {
        res.render("message", { message });
    } else {
        res.status(404).send("Message not found");
    }
});

module.exports = indexRouter;
