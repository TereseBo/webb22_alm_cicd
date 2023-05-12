const Joi= require('joi')

const valueSchema=Joi.object({
    val: Joi.array().items(Joi.number())
})

function validateParams(req,res, next){
    
    console.log(req.query)
    const validated=valueSchema.validate(req.query)
    if(validated.error){
        res.status(400)
        res.render('error3', {title:'Error', text:validated.error})
        return
    }
    const values=validated.value.val
    console.log(values)
    next()
}



module.exports= {validateParams}