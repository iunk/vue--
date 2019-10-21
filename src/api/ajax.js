import axios from 'axios'

//封装ajax，返回promise对象，成功调用resolve，失败调用reject
export default function ajax(url, data={}, type='GET') {

    return new Promise(function (resolve, inject) {
        let promise
        if(type.toUpperCase()==='GET'){
            let dataStr = '';
            Object.keys(data).forEach((key)=>{
                dataStr += key + '=' + data[key] + '&'
            })
            if(dataStr !== ''){
                dataStr = dataStr.substring(0, dataStr.length-1)
                url = url + '?' + dataStr
            }
            promise = axios.get(url)
        } else {
            promise = axios.post(url, data)
        }
        promise.then(function(response){
            resolve(response.data);
        }).catch(function(error){
            reject(error)
        })
    })

}