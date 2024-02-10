const express = require("express")
const dotenv = require("dotenv")

const aap = express()
dotenv.config

aap.get('/',)

aap.listen(5000,console.log("server strated on PORT 5000"));