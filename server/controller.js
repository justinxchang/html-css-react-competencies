let messages = [
    'Text message 1',
    'Text message 2',
    'Text message 3',
]

let starWars = []

let check = (req, res, next) => {
    if(req.body.name === ''){
        res.status(200).send({mes: 'please fill out all forms'})
    } else {
        next()
    }
}

module.exports = {
    create: (req, res) => {
        messages.push(req.body.input)
        res.status(200).send(messages)
        console.log(messages)
    },
    read: (req, res) => {
        res.status(200).send(messages)
        console.log(messages)
    },
    delete: (req, res) => {
        for(let i=0; i < messages.length; i++){
            if(i == req.params.id){
                messages.splice(i, 1)
            }
        }
        res.status(200).send(messages)
    },
    update: (req, res) => {
        for(let i=0; i < messages.length; i++){
            if(i == req.params.id){
                messages[i] = req.body.input
            }
        }
        res.status(200).send(messages)
        console.log(messages)
    },
    star: (req, res) => {
        console.log('search', req.query.search)
        let query = req.query.search
        console.log('queary', query)
        console.log('res', res.data)
        starWars.push(res.data)
        res.status(200).send(starWars)
    }
}
