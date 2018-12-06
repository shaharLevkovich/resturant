var events=require('events')
class Order extends events.EventEmitter{
        constructor(){
            super();
            this.order=0;
            this.max=20;
        }
        reset(){
            this.order=0;
            this.emit('orderChanged');
        }
        increase(amount){
            this.order+=amount;
            this.emit('orderChanged');
        }
        decrease(amount){
            this.order-=amount;
            this.emit('orderChanged');
        }
    }
module.exports=Order;