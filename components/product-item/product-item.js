// components/product-item/product-item.js
/*
* 适用于搜索页、浏览记录、购买记录、我的收藏
* */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      value: {
        productDesc: '小香风蕾丝连衣裙女夏2018新款秋季中长款气质超仙无袖小个子裙子',
        favorable: '98%',
        originPrice: 1234,
        salePrice: 248,
        imageUrl: 'https://img.alicdn.com/imgextra/i1/84714233/TB2XcWIsS3PL1JjSZFxXXcBBVXa_!!84714233-0-beehive-scenes.jpg_280x380xz.jpg'
      },
      observer(newVal, oldVal) {

      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onGoProductDetail(e) {
      console.log(e)      
      this.triggerEvent('detail')
    }
  }
})
