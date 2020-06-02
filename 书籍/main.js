const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2020-06-02',
                price: 59.00,
                count: 1,
            },
            {
                id: 2,
                name: '《Unix编程艺术》',
                date: '2020-06-02',
                price: 59.00,
                count: 1,
            },
            {
                id: 3,
                name: '《编程珠玑》',
                date: '2020-06-02',
                price: 59.00,
                count: 1,
            },
            {
                id: 4,
                name: '《代码大全》',
                date: '2020-06-02',
                price: 59.00,
                count: 1,
            },
        ],
    },

    methods:{
        // getFinalPrice(price){
        //     return '￥' + price.toFixed(2)
        // },
        decrement:function(index){
            this.books[index].count--
        },
        increment:function(index){
            this.books[index].count++
        },
        del:function (index) {
            this.books[index].count = 0
            console.log(this.books.length)
        }
    },
    //过滤器
    filters:{
        showprice(price){
            return '￥' + price.toFixed(2)
        }
    },
    computed:{
        totalprice(){
            let totalprice = 0
            for (let i = 0;i < this.books.length;i++){
                totalprice += this.books[i].price * this.books[i].count
            }
            return totalprice
        }
    }
})