const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001
app.use(cors())
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/plain');

    res.json({
        "notify": [
            {
                "main": true,
                "title": "🔨 Научимся строить свое API"
            },
            {
                "main": true,
                "title": "📦 Хранить данные с API в VUEX"
            },
            {
                "main": true,
                "title": "🎨 Сделаем динамическую подгрузку содержимого - load more"
            },
            {
                "main": false,
                "title": "Будем управлять этими сообщениями на сервере"
            },
            {
                "main": false,
                "title": "Разберемся с CORS и защитой"
            },
            {
                "main": false,
                "title": "Сделаем прелодер и обновление данных"
            },
            {
                "main": false,
                "title": "Обработаем все ошибки"
            },
            {
                "main": false,
                "title": "Научимся переиспользовать эти уведомления в любых проектах"
            }
        ]
    })
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

