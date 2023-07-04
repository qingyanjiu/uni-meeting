const SCREEN_SHARE_SUFFIX = "_screenshare"
const SUB_STREAM_SUFIX = "_sub"
const MEDIA_SERVER_RECORD_SUFIX = "_record"
const MEDIA_SERVER_URL = 'http://49.7.210.27:48080'

class VideoShare {
  app = ''
  stream = ''
  screenSharePlayer = null
  videoEle = document.getElementById('screenShare')
  constructor() {
    this.init()
  }

  init() {
    const url = new URL(window.location)
    this.app = url.searchParams.get('app')
    this.stream = url.searchParams.get('stream')
    console.log(this.app)
    console.log(this.stream)
    this.syncVideoWindowAndLivestream()
    setInterval(() => {
    }, 5000)
  }

  syncVideoWindowAndLivestream() {
    $.ajax({
      dataType: "json",
      url: MEDIA_SERVER_URL + "/index/api/getMediaList?app=" + this.app + "&secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc",
      type: "GET",
      timeout: 1000,
      headers: {
        Accept: "application/json; charset=utf-8",
      },
      success: (data) => {
        if (data.data) {
          this.startScreenShareLivestream(data.data)
        }
      }
    })
  }

  stop_screenshare() {
    // 关屏幕分享流
    if (this.screenSharePlayer != null) {
      this.screenSharePlayer.close();
      this.screenSharePlayer = null;

      const share = this.videoEle
      if (share.srcObject) {
        share.srcObject.getTracks().forEach((element) => {
          element.stop();
        });
        share.srcObject = null;
        share.load();
      }
    }
  }

  getScreenShareUrl() {
    // 屏幕分享的推流stream是 房间名_screenshare
    var stream = this.app + SCREEN_SHARE_SUFFIX;
    var playUrl =
      MEDIA_SERVER_URL +
      "/index/api/webrtc?app=" +
      this.app +
      "&stream="+stream+
      "&type=play";
    return playUrl;
  }

  startScreenShareLivestream(data) {
    var screenShareLivestream = [];
    //过滤查询到的流
    screenShareLivestream = data.filter(
      (d) =>
        d.app == this.app && // 同一个会议室（app相同）
        d.originTypeStr == "rtc_push" && // rtc推流的
        d.schema == "rtmp" && // rtmp格式
        d.stream == this.app + SCREEN_SHARE_SUFFIX && //是屏幕分享流
        d.bytesSpeed != 0 //码率不为0，说明是有效的流
    );

    console.log(JSON.stringify(screenShareLivestream))
    // 如果存在屏幕分享的视频流, 且没有在播放, 开个新流，否则说明在播放了，不做动作
    if (screenShareLivestream.length > 0) {
      if (this.screenSharePlayer == null) {
        this.screenSharePlayer = new Endpoint({
          element: this.videoEle, // video 标签
          debug: true, // 是否打印日志
          zlmsdpUrl: this.getScreenShareUrl(),
          simulcast: false,
          useCamera: false,
          audioEnable: true,
          videoEnable: true,
          recvOnly: true,
          resolution: {
            w: 3840,
            h: 2160
          },
          usedatachannel: false,
        });
        console.log('getScreenShareUrl------------',this.getScreenShareUrl())
        screenSharePlayer.on(
          Events.WEBRTC_ICE_CANDIDATE_ERROR,
          function (e) {
            // ICE 协商出错
            console.log("ICE 协商出错");
          }
        );

        screenSharePlayer.on(
          Events.WEBRTC_ON_REMOTE_STREAMS,
          function (e) {
            //获取到了远端流，可以播放
            console.log("播放成功", e.streams);
            this.videoEle.play()
          }
        );

        screenSharePlayer.on(
          Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,
          function (e) {
            // offer anwser 交换失败
            console.log("offer anwser 交换失败", e);
          }
        );

        screenSharePlayer.on(
          Events.WEBRTC_ON_LOCAL_STREAM,
          function (s) {
            // 获取到了本地流
            //console.log('offer anwser 交换失败',e)
          }
        );

        screenSharePlayer.on(
          Events.CAPTURE_STREAM_FAILED,
          function (s) {
            // 获取本地流失败

            console.log("获取本地流失败");
          }
        );

        screenSharePlayer.on(
          Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,
          (state) => {
            // RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
            console.log("当前状态==>", state);
            if (state == 'disconnected') {
              // 如果没有屏幕共享的流，关闭画面
              this.stop_screenshare()
            }
          }
        );

        screenSharePlayer.on(
          Events.WEBRTC_ON_DATA_CHANNEL_OPEN,
          function (event) {
            console.log("rtc datachannel 打开 :", event);
          }
        );

        screenSharePlayer.on(
          Events.WEBRTC_ON_DATA_CHANNEL_MSG,
          function (event) { }
        );
        screenSharePlayer.on(
          Events.WEBRTC_ON_DATA_CHANNEL_ERR,
          function (event) {
            console.log("rtc datachannel 错误 :", event);
          }
        );
        screenSharePlayer.on(
          Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,
          function (event) {
            console.log("rtc datachannel 关闭 :", event);
          }
        );
      }
    }
  }
}
