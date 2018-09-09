// components/search.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    searchKey: String
  },
  /**
   * 组件的初始数据
   */
  data: {
    keyword: ''
  },
  /**
   * 组件实例进入页面节点树hooks
   * */
  attached () {
    console.log(this)
    this.setData({
        keyword: this.data.searchKey
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {
      // 清空input内容
      fnClearInput (e) {
        this.setData({
            keyword: ''
        })
      },
      fnInput (e) {
          console.log('正在输入', this.data.keyword, e)
          this.setData({
              keyword: e.detail.value
          })
      },
      fnSearch (e) {
        this.triggerEvent('onSearch', {keyword: this.data.keyword})
      }
  }
})
