import express from 'express';
import path from "path"
const app = express();
const port = 5001
const __dirname = path.resolve()

app.use("/static",express.static(path.join(__dirname,'public')))

app.set('view engine', 'ejs')
app.set("views", __dirname + '/src/views')

app.get('/', (req, res) => {
    res.render("pages/index")
})
app.get('/components.html', (req, res) => {
    res.render("pages/components")
})
app.get('/forms.html', (req, res) => {
    res.render("pages/forms")
})

app.get('/icons.html', (req, res) => {
    res.render("pages/icons")
})
app.get('/notifications.html', (req, res) => {
    res.render("pages/notifications")
})
app.get('/tables.html', (req, res) => {
    res.render("pages/tables")
})
app.get('/typography.html', (req, res) => {
    res.render("pages/typography")
})

app.listen(port, function() {
    console.log("http://localhost:" + port)
})