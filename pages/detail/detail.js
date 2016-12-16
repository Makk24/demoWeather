
 var app=getApp()
 Page({
     data:{
         weatherInfo:{error:-1,msg:"查询中。。。"},
         name:''
     },
     onLoad(options){
         var that=this;
         that.title=options.name+'天气';
         that.setData({
             name:options.name
         })
         wx.request({
         url: 'https://makk.apphb.com/interfaceapi/test?msg='+encodeURI(options.name),
         //url:'http://news-at.zhihu.com/api/4/news/latest',
         headers: {
        'Content-Type': 'application/json'
      },
         success (res) {
           console.log(res)
         that.setData({
           weatherInfo: res.data
         })
      }
    })
     }
     ,
     onReady: function () {
    wx.setNavigationBarTitle({
      title: this.title
    })
  }
 })