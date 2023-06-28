const express = require('express')
const app = express()
app.all('/', (req, res) => {


        res.redirect('https://blog.grupocajamar.com/las-formas-de-entender-el-dinero-en-las-distintas-culturas/?gf=54806369')

})
app.listen(process.env.PORT || 3000)
