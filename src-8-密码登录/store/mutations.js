import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO
} from './mutations-types'

export default {
    [RECEIVE_ADDRESS](state, {address}){
        state.address = address
    },
    [RECEIVE_CATEGORYS](state, {categorys}){
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, {shops}){
        state.shops = shops
    },
    [RECEIVE_USERINFO](state, {userinfo}){
        state.userinfo = userinfo
    }
}