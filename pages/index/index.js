//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World!!!',
    userInfo: {},
    array: ['北京', '天津', '上海', '深圳'],
    index:0,
    name:''
  },
bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e)
    this.setData({
      index: e.detail.value
    })
  },
formSubmit: function(e) {
    console.log('form发生了submit事件，携带数据为：', e)
    this.setData({
      name:e.detail.value['input']&&e.detail.value['input'].length>0?e.detail.value['input']:this.data.array[e.detail.value['name']]
    })
    wx.navigateTo({
     url: '../detail/detail?name='+this.data.name
    })
  },
  formReset: function() {
    this.setData({
      index: 0
    })
    console.log('form发生了reset事件'+this.data.array[this.data.index])
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  onShow: function() {
    console.log('onLoad');
    //console.log(app.globalData.userInfo.nickName) // I am global data
  },
  viewTap: function() {
    this.setData({
        motto:'userInfo'
      })
    console.log('view tap');
    console.log(getCurrentPages());
  },
  add:function(e){
    this.setData({
      count:this.data.count+1
    })
  },
  weatherViewTap: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
})
