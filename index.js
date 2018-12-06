var eventsConfig=require('./config')
    Order=require('./order/Order')
    express=require('express')
    app=express();
const arr=[];

    const port=8000
    app.all('*',(req, res)=>{
        res.json(arr);
    })

function getAllOrders(){
    console.log(`number of orders: ${this.order}`);
    arr.push(`number of orders: ${this.order}`);
}

function checkMax(){
    if(this.order>this.max){
        console.log(`you get to the max: ${this.order}`);
        arr.push(`you get to the max: ${this.order}`);
    }
}

const order=new Order();
order.on("orderChanged", getAllOrders);
order.on("orderChanged", checkMax);

order.reset();
order.increase(10);
order.decrease(3);
order.increase(15);
order.reset();

app.listen(port,()=>console.log(`Example app listening on port ${port}!`));