/**
 * 组件用于图片轮播展示
 * 使用场景：首页banner轮播
 */
Component({
  externalClasses: ['external-banner-swiper'],
  properties: {
    imgUrls: {
      type: Array,
      value: [
        {
          "id": 1,
          "productId": 1,
          "type": "DETAIL_IMAG",
          "url": "http://thyrsi.com/t6/366/1535955593x-1404764438.jpg"
        }
      ]
    }
  },
  data: {
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000,
    circular: true,
    previousMargin: '40rpx',
    nextMargin: '40rpx',
    current: 0
  },
  methods: {
    swiperChange(event) {
      let { current } = event.detail || {}
      this.setData({
        current: current
      })
    }
  }
})
