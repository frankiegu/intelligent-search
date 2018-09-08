//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        searchKey: '连衣裙',
        pageData: []
    },
    onLoad: function () {
        this.fnGetPageData()
    },
    fnSearch(data) {
        this.setData({
            searchKey: data.detail.keyword
        })
      // console.log('查看data', data.detail.keyword)
        this.fnGetPageData()
    },
    fnGetPageData () {
        // console.log('查看data', this.searchKey, this)
        wx.request({
            url:"https://hackathon.jd.com/hackaton//product/query",
            method: 'POST',
            data: {
                userPin: 'test1',
                searchKeywords: this.data.searchKey
            },
            success: res => {
                console.log('获取接口数据成功', res)
                const data = res.data
                if (data && data.success) {
                    this.setData({
                        pageData: data.data
                    })
                }
            },
            fail: err => {

            }
        })
    },
    fnGoDeatil() {
        wx.navigateTo({
            url: '/pages/product-detail/product-detail'
        })
    }
})
