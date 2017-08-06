import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isloading:false,   //是否在请求数据
        fakeData:{
            "subscribe": 1,
            "openid": "o6_bmjrPTlm6_2sgVt7hMZOPfL2p",
            "nickname": "Band",
            "sex": 1,
            "language": "zh_CN",
            "city": "广州",
            "province": "广东",
            "country": "中国",
            "headimgurl":  "http://wx.qlogo.cn/mmopen/g3MonUZtNHkdmzicIlibx6iaFqAc56vxLSUfpb6n5WKSYVY0ChQKkiaJSgQ1dZuTOgvLLrhJbERQQ4eMsv84eavHiaiceqxibJxCfHe/0",
            "subscribe_time": 1501062940,
            "unionid": " o6_bmasdasdsad6_2sgVt7hMZOPfL",
            "remark": "",
            "groupid": 0,
            "tagid_list":[128,2]
        }
    },
    mutations: {
        addQueue(state, item){
            if (!(state.trackQueue.some(function (val) {
                    return val.id == item.id
                }))) {
                state.trackQueue.push(item)
                state.trackIndex=state.trackQueue.length-1;
            }else{
                // console.log(state.trackQueue.indexOf(item));
                state.trackIndex = state.trackQueue.indexOf(item)
            }

        },
        loadChange(state){
            state.isloading=!state.isloading;
        }

    },
    actions: {
        getMusicUrl ({commit, state}) {

        }
    }
})


export default store