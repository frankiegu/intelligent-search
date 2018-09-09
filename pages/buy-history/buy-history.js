// wx-js
// var app = getApp()
Page({
    /**
     * 页面的初始数据
     */
    data: {
        buyHistoryList: [
            {
                shopName: '春风十里不如你',
                imageUrl: 'https://img.alicdn.com/tfscom/i2/142722258/TB21DKLXUsIL1JjSZPiXXXKmpXa_!!142722258.jpg_280x380xz.jpg',
                description: 'MIXDEMIND觅定 气质甜美细条纹方领露肩长袖衬衫上衣韩国女2018秋',
                productColor: '藕粉色',
                productSize: '均码',
                productPrice: 79,
                productCount: 1,
                buyStatus: 1
            },
            {
                shopName: '细细条',
                imageUrl: 'https://img.alicdn.com/imgextra/i4/780862832/TB2h77bjjuhSKJjSspaXXXFgFXa_!!780862832-0-beehive-scenes.jpg_280x380xz.jpg',
                description: '杨泡泡2017秋冬新款韩版毛针织衫女时尚学生宽松V领上衣打底衫潮',
                productColor: '米白色',
                productSize: '均码',
                productPrice: 128,
                productCount: 1,
                buyStatus: 2
            },
            {
                shopName: '为你而生',
                imageUrl: 'https://img.alicdn.com/imgextra/i1/50016584/TB2jokCrZtnpuFjSZFKXXalFFXa_!!50016584.jpg_280x380xz.jpg',
                description: '小雨良品日系清新高腰棉麻背带裤女阔腿宽松学生韩版学院风九分裤',
                productColor: '浅绿色',
                productSize: 'M[90斤-110斤]',
                productPrice: 88,
                productCount: 1,
                buyStatus: 1
            },
            {
                shopName: '糯米糯米 你不开花',
                imageUrl: 'https://img.alicdn.com/tfscom/i8/TB1rxzib5wIL1JjSZFsYXIXFFXa_M2.SS2_280x380xz.jpg',
                description: 'alike alike 粉色 拉链连帽 oversize卫衣 慵懒风 宽松',
                productColor: '粉色',
                productSize: '均码',
                productPrice: 109,
                productCount: 1,
                buyStatus: 1
            },
            {
                shopName: '日系清新少女风',
                imageUrl: 'https://img.alicdn.com/tfscom/i1/47964711/TB2ZQllaesAV1JjSZFsXXadZXXa_!!47964711.jpg_280x380xz.jpg',
                description: '铜扣记秋冬中长款双排扣羊毛呢外套大摆加厚保暖宽松呢子大衣女',
                productColor: '黄色',
                productSize: 'M',
                productPrice: 129,
                productCount: 1,
                buyStatus: 1
            },
            {
                shopName: 'ICE BLUE 独家定制',
                imageUrl: 'https://img.alicdn.com/tfscom/i3/2856446234/TB2gZKbaQ.HL1JjSZFuXXX8dXXa_!!2856446234.jpg_280x380xz.jpg',
                description: '粉色木耳边上衣女衬衫短袖夏季2018新款韩范宽松棉麻小清新衬衣',
                productColor: '灰色',
                productSize: 'M',
                productPrice: 89,
                productCount: 1,
                buyStatus: 1
            },
            {
                shopName: '夏天家 潮流女装',
                imageUrl: 'https://img.alicdn.com/tfscom/i1/2182653972/TB23Qj6dgxlpuFjSszbXXcSVpXa_!!2182653972.jpg_280x380xz.jpg',
                description: '2018新款夏chic港味复古吊带裙子冷淡风imiss超仙女波点连衣裙女',
                productColor: '黑色',
                productSize: '均码',
                productPrice: 97,
                productCount: 1,
                buyStatus: 1
            },
        ],
        // 订单状态
        state:'',
        // 单子
        orderProducts: []
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        console.log('options', options)
        let _this = this
        wx.request({
            url: 'https://hackathon.jd.com/hackaton/order/query',
            data: {
                userPin: 'test1'
            },
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function(res){
                let data = res.data
                console.log('buy-history',data)                
                if(data.success) {
                    let productDatas = data.data
                    console.log('productData',productDatas)
                    _this.setData({
                        state: productDatas[0].state,
                        orderList: productDatas[0].orderProducts
                        
                    })
                    console.log('productData',_this.data.orderList)
                }
                // success
            }
        })
    },
    /**
     * 跳转到到商品详情页
     */
    onGoDeatil() {
        wx.navigateTo({
            url: '/pages/product-detail/product-detail'
        })
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () { },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () { },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () { },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () { },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () { },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () { },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () { }
})  