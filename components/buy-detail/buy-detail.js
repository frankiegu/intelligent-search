/**
 * by use in page:buy-history
 */
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        data: {
            type: Object,
            shopUrl: '',
            value: {
                shopName: '夕蒙seemon studio',
                imageUrl: '',
                description: '',
                productColor: '',
                productSize: '',
                productPrice: '',
                productCount: '',
                buyStatus: ''
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
        onGoPath() {
            this.triggerEvent('detail')
        }
    }
})  