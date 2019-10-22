import { 
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS
} from './mutations-types'
import { 
    reqAddress,
    reqCategorys,
    reqShops
} from '../api'

export default {
    async getAddress({commit, state}){
        const goehash = state.latitude + ',' + state.longitude
        const result = await reqAddress(goehash)
        if(result.code === 0){
            console.log(result)
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    async getCategorys({commit}){
        const result = await reqCategorys()
        if(result.code === 0){
            const categorys = result.data
            commit(RECEIVE_CATEGORYS, {categorys})
        }
    },
    async getShops({commit,state}){
        const {longitude, latitude} = state
        const result = await reqShops({longitude, latitude})
        if(result.code === 0){
            const shops = result.data
            commit(RECEIVE_SHOPS, {shops})
        }
    }
}