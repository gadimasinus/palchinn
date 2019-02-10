const Event = require("../../models/event.model")

module.exports = function(router) {
    router.get('/events', function(req, res){
        console.log('in get events')
        let query = Event.find(function(err, results) {
            if(err) {
                  console.log('in get events err' + err)
               return res.status(400).json(err)
            }
             console.log('in get events success')
             console.log(results)
           return res.status(200).json(results)
        })
    })

    router.post('/events', function(req,res) {
        let event = new Event(req.body)
        event.save(function(err, event){
            if(err) {
                return res.status(400).json(err)
            }
            res.status(200).json(event)
        })
    }) 

    
}