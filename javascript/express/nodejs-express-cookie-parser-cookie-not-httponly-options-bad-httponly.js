//vulnerable
express = require('express')
mod = require("cookie-parser")
app = express()
app.use(mod)

app.get('/', (req, res) => {
        res.cookie('qwe','zxc', {a:a,
                                 f:d,
                                 httpOnly: false,
                                 a:b})
});

//not vulnerable

express = require('express')
mod = require("cookie-parser")
app = express()
app.use(mod)

app.get('/', (req, res) => {
        res.cookie('qwe','zxc', {a:a,
                                 f:d,
                                 a:b,
                                 httpOnly: true})
});

