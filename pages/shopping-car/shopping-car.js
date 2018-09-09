// pages/merber-center/merber-center.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopcarProducts:[],
    selected: false,
    totalMount: 0,
    allSelected: false
  },
  onGetSalePrice(e) {
    let totalMount = e.detail.select ? (this.data.totalMount + e.detail.price) : (this.data.totalMount - e.detail.price)
    this.setData({
      totalMount: totalMount
    })
    console.log('onGetSalePrice',e.detail)
  },
  //  是否全选
  onAllSelected() {
    this.setData({
      allSelected: !this.data.allSelected
    })
    console.log('dfnjsdfnjsd',this.data.allSelected)
  },
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let _this = this
    wx.request({
      url: 'https://hackathon.jd.com/hackaton/shopcar/query',
      data: {
        userPin:'test1'
      },
      method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function(res){
        let data = res.data
        console.log('res',res)
        if(data && data.success) {
          let shopcarProducts = data.data
          _this.setData({
            shopcarProducts
          })
          console.log('productData',shopcarProducts)
        }
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
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
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})