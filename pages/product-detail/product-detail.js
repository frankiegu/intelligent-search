// wx-js
// var app = getApp()
import {STORAGE_KEY} from '../../utils/constants';
import utils from "../../utils/util";

Page({
    /**
     * 页面的初始数据
     */
    data: {
        // 轮播广告
        bannerImgs: [],
        // 商品价格
        price: 199,
        shop: {
            imgUrl:
                'https://gw.alicdn.com/tfs/TB1zXoSkZrI8KJjy0FhXXbfnpXa-165-45.png?getAvatar=avatar'
        },
        isFavorite: false,
        buyCount: 1,
        productDetail: [],
        productSizes: [],
        matchSize: {},
        matchSizeIndex: 0,
        showSelectProductPanel: false
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        let _this = this;
        console.log("options", options);
        wx.getStorage({
            key: STORAGE_KEY.PRODUCT_DETAIL,
            success: res => {
                let {productImgs, productSizes} = res.data && res.data;
                _this.setData({
                    productSizes: productSizes,
                    productDetail: res.data,
                    matchSize: productSizes[res.data.productSizeIndex],
                    matchSizeIndex: res.data.productSizeIndex
                });
                let bannerImg = _this.data.productDetail.productImgs.filter(element => {
                    return element.type === 'SHORT_IMAG';
                });
                let imgDetails = _this.data.productDetail.productImgs.filter(
                    element => {
                        return element.type === 'DETAIL_IMAG';
                    }
                );
                _this.setData({
                    bannerImgs: bannerImg,
                    imgDetails: imgDetails
                });
                this.scanReport()
            }
        });

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
    },
    // 浏览上报
    scanReport () {
        wx.request({
            url:"https://hackathon.jd.com/hackaton/scans/insert",
            method: 'POST',
            data: {
                userPin: 'test1',
                productId: this.data.productDetail.id
            },
            success: res => {
            }
        })
    },
    // 去购物车
    goBuyCart () {
        wx.navigateTo({
            url: '/pages/shopping-car/shopping-car'
        })
    },
    // 选择尺寸
    selectSize (e) {
        this.setData({
            matchSize: e.target.dataset.value,
            matchSizeIndex: e.target.dataset.index
        })
    },
    openSelectPanel () {
        this.setData({
            showSelectProductPanel: true
        })
    },
    hideSelectPanel () {
        this.setData({
            showSelectProductPanel: false
        })
    },
    // 添加到购物车
    fnAddCart () {
        wx.request({
            url:"https://hackathon.jd.com/hackaton/shopcar/insert",
            method: 'POST',
            data: {
                userPin: 'test1',
                productId: this.data.productDetail.id,
                amount: this.data.buyCount,
                productSize: this.data.matchSizeIndex
            },
            success: res => {
                let data = res.data
                if (data && data.success) {
                    this.setData({
                        showSelectProductPanel: false
                    })
                    wx.showToast({
                        title: '加入成功',
                        icon: 'success',
                        duration: 2000
                    })

                }
            },
            fail: err => {
                wx.showToast({
                    title: '操作失败，请稍候再试',
                    icon: 'warn',
                    duration: 2000
                })
            },
            complete: () => {
            }
        })
    },
    // 添加收藏
    fnAddFavorite () {
        console.log('添加到我的收藏记录')
        wx.request({
            url:"https://hackathon.jd.com/hackaton/collects/insert",
            method: 'POST',
            data: {
                userPin: 'test1',
                productId: this.data.productDetail.id
            },
            success: res => {
                let data = res.data
                if (data && data.success) {
                    this.setData({
                        isFavorite: !this.data.isFavorite
                    })
                }
            },
            fail: err => {
                wx.showToast({
                    title: '操作失败，请稍候再试',
                    icon: 'warn',
                    duration: 2000
                })
            },
            complete: () => {
            }
        })
    },
    /**
     * 点击数量
     */
    minusProbability() {
        if (this.data.buyCount === 1) {
            return
        }
        this.setData({
            buyCount: this.data.buyCount - 1,
        })
    },
    /**
     * 点击增加数量
     */
    addProbability() {
        console.log(1111)
        this.setData({
            buyCount: this.data.buyCount + 1
        })
    }
});
