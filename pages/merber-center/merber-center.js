// pages/merber-center/merber-center.js
const OUT_LINKS = {
  // 我的收藏
  myCollect: '/pages/my-collect/my-collect',
  // 购买足迹
  buyHistory: '/pages/buy-history/buy-history',
  // 浏览足迹
  watchHistory: '/pages/watch-history/watch-history'
}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      personalImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtZ90CtITHRZkCTJLhu6IPSqihcsUZyZNIXWomFrj09Lk9iaz',
      name: 'Jd小迷妹'
    },
    detail: [
      {
        name: '收藏精品',
        count: 722,
        path: 'myCollect'
      },
      {
        name: '购买足迹',
        count: 81,
        path: 'buyHistory'
      },
      {
        name: '浏览足迹',
        count: 388,
        path: 'watchHistory'
      }
    ]
  },
  /**
   * 
   * @param {页面路径} url 
   */
  onGoAssignPath(e) {
    let { url = '' } = e.currentTarget.dataset || {}
    console.log('go-url', e, url)
    url = (url && OUT_LINKS[url]) || ''
    console.log('url----', url)
    url && wx.navigateTo({
      url
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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