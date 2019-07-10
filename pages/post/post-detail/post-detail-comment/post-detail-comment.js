// pages/post/post-detail/post-detail-comment/post-detail-comment.js
import {
  DBPostES6
} from '../../../../db/DBPostES6.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  previewImg: function(event) {

    // 注意这里id的获取方式
    var commentId = event.currentTarget.dataset.commentIdx;//评论Id
    var imgIdx = event.currentTarget.dataset.imgIdx;//图片的id
    var imgs = this.data.comments[commentId].content.img;//图片地址

    wx.previewImage({
      current: imgs[imgIdx],
      urls: imgs,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

    var id = options.id;

    this.dbPost = new DBPostES6(id);

    var comments = this.dbPost.getCommentData();

    console.log(comments);

    this.setData({
      comments: comments
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})