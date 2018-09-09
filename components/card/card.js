/**
 * by use in page:buy-history
 */
import { STORAGE_KEY } from '../../utils/constants'

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: {
            type: Object,
            shopUrl: '',
            value: {
                id: 1,
                productDesc: '小香风蕾丝连衣裙女夏2018新款秋季中长款气质超仙无袖小个子裙子',
                favorable: '98',
                originPrice: 1234,
                salePrice: 248,
                imageUrl: 'https://img.alicdn.com/imgextra/i1/84714233/TB2XcWIsS3PL1JjSZFxXXcBBVXa_!!84714233-0-beehive-scenes.jpg_280x380xz.jpg',
                productImgs: [],
                productSizes: [],
                types:'',
            },
            observer(newVal, oldVal) {
                this.changeData(newVal)
            },
        },
        productSize:{
            type: Object,
            value: {
                sizeCode:''
            }
        }
        // selected:{
        //     type: Boolean,
        //     value: false
        // }     
    },

    /**
     * 组件的初始数据
     */
    data: {
        item: {},
        count: 1,
        unableReduce: true, //减号置灰
        selected: false
    },

    /**
     * 组件的方法列表
     */
    methods: {
        onChangeCheckSatus(e) {
            console.log('eeeee',e)
            this.setData({
                selected: !this.data.selected
            })
            this.triggerEvent('select',e.currentTarget.dataset)
        },
        changeData(data) {
            this.setData({
              item: data,
            })
            return data
          },
        onGoPath(e) {
            wx.setStorage({
                key: STORAGE_KEY.PRODUCT_DETAIL,
                data: this.data.item,
              })
            this.triggerEvent('detail')
        },
         /**
         * 点击减少数量
         */
        minusProbability() {
            if (this.data.unableReduce) {
                return
              }
            this.setData({
                count: this.data.count - 1,
            })
            if (this.data.count === 1) {
                this.setData({
                    unableReduce: true
                })
                return
            }
        },
        /**
         * 点击增加数量
         */
        addProbability(e) {
            this.setData({
                count: this.data.count + 1,
                unableReduce: false
            })
        },
    }
})