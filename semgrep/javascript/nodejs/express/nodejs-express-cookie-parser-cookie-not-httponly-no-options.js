//vulnerable
express = require('express')
import * as mod from 'cookie-parser'
app = express()
app.use(mod)

app.get('/', (req, res) => {
        res.cookie('v1','zxc')
});

//vulnerable
express = require('express')
mod = require("cookie-parser")
app = express()
app.use(mod)

app.get('/', (req, res) => {
        res.cookie('v2','zxc')
});

//not vulnerable

express = require('express')
mod = require("cookie-parser")
app = express()
app.use(mod)

app.get('/', (req, res) => {
        res.cookie('qwe','zxc', {httpOnly: true})
});


