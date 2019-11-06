const bodyParser = require('body-parser');
let userJson = require('./data/user.json')

module.exports={
    devServer:{
        before(app){
            // code:0 失败
            // code:1 成功
            app.post('/api/login',bodyParser.json(),(req,res)=>{
                let {username,password}=req.body
                let obj = userJson.find(item=>item.name==username);
                if(!obj){
                    res.send({
                        code:0,
                        msg:'登录失败,用户名不正确'
                    })
                }else{
                    if(obj.pwd==password){
                        res.send({
                            code:1,
                            msg:'登录成功'
                        })
                    }else{
                        res.send({
                            code:0,
                            msg:'密码错误'
                        })
                    }
                }
            })
        }
    }
}