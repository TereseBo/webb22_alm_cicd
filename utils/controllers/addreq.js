const {Calculator}= require('../calculator')

function addreq(req, res){
    const calc=new Calculator
    console.log(req.values)
    req.values.forEach(element => {
        calc.add(element)
    });
    const result=calc.getResult()
    res.render('calc', { title: 'Result', method:'Add', input:req.values, result:result });

  
}

module.exports={addreq}