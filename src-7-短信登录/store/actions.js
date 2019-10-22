import { 
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO
} from './mutations-types'
import { 
    reqAddress,
    reqFoodCategorys,
    reqShops
} from '../api'

export default {
    async getAddress({commit, state}){
        const goehash = state.latitude + ',' + state.longitude
        const result = await reqAddress(goehash)
        if(result.code === 0){
            const address = result.data
            commit(RECEIVE_ADDRESS, {address})
        }
    },
    async getFoodCategorys({commit, state}){
        const goehash = state.goehash
        const result = await reqFoodCategorys(goehash)
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
    },
    recordUser({commit}, userinfo){
        commit(RECEIVE_USERINFO, {userinfo})
    }

}