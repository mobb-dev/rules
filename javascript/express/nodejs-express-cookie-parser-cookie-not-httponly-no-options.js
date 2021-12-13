//vulnerable
express = require('express')
mod = require("cookie-parser")
app = express()
app.use(mod)

app.get('/', (req, res) => {
        res.cookie('qwe','zxc')
});

//not vulnerable

express = require('express')
mod = require("cookie-parser")
app = express()
app.use(mod)

app.get('/', (req, res) => {
        res.cookie('qwe','zxc', {httpOnly: true})
});


