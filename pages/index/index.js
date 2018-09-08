//index.js
//获取应用实例
const app = getApp()
import utils from '../../utils/util'

Page({
    data: {
        isLoading: true,
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
        this.setData({
            isLoading: true
        })
        wx.showLoading({
            title: '加载中',
        })
        wx.request({
            url:"https://hackathon.jd.com/hackaton/product/query",
            method: 'POST',
            data: {
                userPin: 'test1',
                searchKeywords: this.data.searchKey
            },
            success: res => {
                console.log('获取接口数据成功', res)
                let data = res.data
                if (data && data.success) {
                    utils.formatImageUrl(data.data)
                    this.setData({
                        pageData: data.data
                    })
                }
                console.log(this.data.pageData)
            },
            fail: err => {

            },
            complete: () => {
                wx.hideLoading()
                this.setData({
                    isLoading: false
                })
            }
        })
    },
    fnGoDeatil() {
        wx.navigateTo({
            url: '/pages/product-detail/product-detail'
        })
    }
})
