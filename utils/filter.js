const buyStatusFilter = function (status) {
    switch (status) {
        case 1:
            return '交易成功'
        case 2:
            return '退款成功'
    }
}

export default {
    buyStatusFilter
}