import { 
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RESET_USERINFO
} from './mutations-types'
import { 
    reqAddress,
    reqCategorys,
    reqShops,
    reqUserInfo,
    reqLogout
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
    },
    recordUser({commit}, userinfo){
        commit(RECEIVE_USERINFO, {userinfo})
    },
    async getUserInfo({commit}){
        const result = await reqUserInfo()
        if(result.code === 0){
            const userinfo = result.data
            commit(RECEIVE_USERINFO, {userinfo})
        }
    },

    async getUserInfo({commit}){
        const result = await reqUserInfo()
        if(result.code === 0){
            const userinfo = result.data
            commit(RECEIVE_USERINFO, {userinfo})
        }
    },

    async logout({commit}){
        const result = await reqLogout()
        if(result.code === 0){
            commit(RESET_USERINFO)
        }
    },
    

}