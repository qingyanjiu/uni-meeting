<template>
	<view class="content">
		<a id="recordDownload" style="display:none"></a>
		<div class="prompt" v-if="showPrompt">
			<div style='position:relative;top:40%'><div>您好，欢迎来到视频会议室</div>
				<div>分享摄像头之前请记得修改自己的名字~</div>
				<br/>
				<div><input id='passwd' v-model="passwd" placeholder="输入密码" style='height:30px;border:solid 1px;margin:0 40%;'/></div>
				<br/>
				<div><a href='javascript:void(0)' @click='enter()'>点击我进入会议</a></div>
			</div>
		</div>
		<div style="text-align: center;" id="main-content" v-if="!showPrompt">
			<div style="text-align: center">
				<video id="screenShare" autoplay class="screen-share-video"></video>
				<video id="mediaServerRecord" style="display:none"></video>
			</div>
	
			<div id="meeting" style="text-align: left">
				<div style="display: inline-block" id="selfWindow">
					<span id="videoName_'+i.toString()+'" class="badge-self">
						我
					</span>
					<span id="toggleAudio" onclick="toggleAudio()" class="control-self-a">设为静音</span>
					<span id="toggleVideo" onclick="toggleVideo()" class="control-self-v">设为黑屏</span>
					<video id="selfVideo" autoplay class="self-video"></video>
				</div>
			</div>
	
			<div class="user-options">
				<div>
					<span>
						<label for="stream">我的名字:</label>
						<input type="text" style="co" id="stream" v-model="stream" value="" />
					</span>
				</div>
	
				<div class="camera-share">
					
					<view class="uni-list">
						<view class="uni-list-cell">
							<view class="uni-list-cell-left">
								分辨率
							</view>
							<view class="uni-list-cell-db">
								<picker :value="resolutionsIndex" :range="resolutionsPick">
									<view class="uni-input">{{resolutionsPick[resolutionsIndex]}}</view>
								</picker>
							</view>
						</view>
					</view>
	
					<span class="option-item">
						<label for="camera-select">摄像头</label>
						<select id="camera-select" ref="camera-select"></select>
					</span>
					<!-- <span class="option-item">
						<label for="mic-select">麦克风</label>
						<select id="mic-select"></select>
					</span>
					<span class="option-item">
						<label for="videoEnable">开启视频</label>
						<input type="checkbox" id="videoEnable" checked="checked" />
					</span>
					<span class="option-item">
						<label for="audioEnable">开启声音</label>
						<input type="checkbox" id="audioEnable" checked="checked" />
					</span>
					<span class="option-item">
						<label for="resolution">分辨率</label>
						<select id="resolution"></select>
					</span> -->
					<span>
						<button onclick="start_camera()">接入摄像头</button>
						<button onclick="stop_camera()">停止摄像头</button>
					</span>
				</div>
	
				<div class="screen-share" id="screenShareBox">
					<span>
						<button onclick="start_screenshare()">开始屏幕分享</button>
						<button onclick="stop_screenshare()">停止屏幕分享</button>
						<button id="startRecord" onclick="startMediaServerRecord()">开始录制屏幕</button>
						<button onclick="stopMediaServerRecord()">停止录制屏幕</button>
					</span>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	import { BrowserDeviceManager } from '@/js/browserDeviceManager.js'
	import { ZLMRTCClient } from '@/js/ZLMRTCClient.js'
	import $ from '@/js/jquery.3.4.1.js'
	
	export default {
		data() {
			return {
				// 屏幕分享流地址后缀
				SCREEN_SHARE_SUFFIX: "_screenshare",
				SUB_STREAM_SUFIX: "_sub",
				MEDIA_SERVER_RECORD_SUFIX: "_record",
				// 会议室名称，在url地址中添加 ?room=会议室名称
				app: 'live',
				// 是否host，host才能共享屏幕，在url地址中添加 &host=1
				host: 1,
				resArr: [],
				selfplayer: null,
				selfplayer_sub: null,
				screenSharePlayer: null,
				mediaServerRecordPlayer: null,
				recordStream: null,
				mediaRecorder: null,
				recordChunks: [],
				mainContentHtml: '',
				devicemanager: null,
				cameraSelect: null,
				micSelect: null,
				// 上次拉到的stream列表，用来对比谁下线了
				latestStreamSet: new Set(),
				// 设备上摄像头支持的最大分辨率
				cameraResolutions: {},
				showPrompt: true,
				passwd: '',
				stream: '',
				resolutionsIndex: 0,
				resolutionsPick: ['1920x1080', '1280x720', '640x360', '320x180'],
				selectedCameraIndex: 0,
				cameraList: []
			}
		},
		onLoad() {
			this.devicemanager = new BrowserDeviceManager()
			// 保存html信息，同时删除元素，防止未进入页面组件就开始加载会议视频和音频
			// 输入密码成功，进入页面后再展示元素的html
			this.mainContentHtml = $("#main-content").html()
			$("#main-content").html('')
	
			let text = "<div style='position:relative;top:40%'><div>您好，欢迎来到视频会议室</div>"
			if (this.host == 1) {
				text += "<div>您是会议室的主持人，可以使用页面最下方的屏幕分享功能<div>"
			}
			text += "<div>分享摄像头之前请记得修改自己的名字~</div>"
			text += "<br/><div><span style='margin-right:10px;'>请输入会议室密码</span><input id='passwd' type='text' style='height:30px'/></div>"
			text += "<div><a href='javascript:void(0)' onClick='enter()'>点击我进入会议</a></div></div>"
			$(".prompt").html(text)
		},
		methods: {
			enter() {
				if (this.passwd === 'hxkj2023') {
					this.showPrompt = false
	
					// 显示主内容区域
					$("#main-content").html(this.mainContentHtml)
					// 判断是否主持人
					if (this.host != 1) {
						$("#screenShareBox").hide()
					}
					
					
					// 初始化摄像头设备列表
					this.initCameraAndMicList()
					
					// 初始化麦克风设备列表
					// this.start_play_other()
				} else {
					alert("密码错误")
					return
				}
			},
	
			// 初始化摄像头列表和麦克风列表
			initCameraAndMicList() {
				// 获取摄像头列表
				this.cameraSelect = this.$refs['camera-select']
				this.cameraSelect.options = []
				this.devicemanager
					.getCameraList()
					.then((list) => {
						console.log(list)
						for (let i = 0; i < list.length; ++i) {
							this.cameraSelect.options[this.cameraSelect.options.length] = new Option(
								list[i].label,
								list[i].deviceId
							);
							// 获取摄像头参数（分辨率、帧数等）
							capabilities = list[i].getCapabilities();
							this.cameraResolutions[list[i].deviceId] = {
								w: capabilities.width.max,
								h: capabilities.height.max,
							};
						}
					})
					.catch((err) => {
						console.log(err);
					});


				// 获取麦克风列表
				micSelect = document.getElementById("mic-select");
				micSelect.options = [];
				devicemanager
					.getMicList()
					.then((list) => {
						for (let i = 0; i < list.length; ++i) {
							micSelect.options[micSelect.options.length] = new Option(
								list[i].label,
								list[i].deviceId
							);
						}
					})
					.catch((err) => {
						console.log(err);
					});
			},

			// 启动转码服务器录像(推流到zlm接口录像)
			startMediaServerRecord() {
				/**
				var stream = await navigator.mediaDevices.getDisplayMedia({
					audio: true,
					video: { displaySurface: "monitor" },
					selfBrowserSurface: "exclude",
					systemAudio: "include",
					surfaceSwitching: "exclude"
				})
				**/
				mediaServerRecordPlayer = new ZLMRTCClient.Endpoint({
					element: document.getElementById("mediaServerRecord"), // video 标签
					debug: true, // 是否打印日志
					zlmsdpUrl: getMediaServerRecordPushUrl(),
					simulcast: false,
					useCamera: false,
					audioEnable: true,
					videoEnable: true,
					recvOnly: false,
					resolution: { w: 3840, h: 2160 },
					usedatachannel: false,
					displaySurface: 'monitor'
				});

				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR,
					function (e) {
						// ICE 协商出错
						console.log("ICE 协商出错");
					}
				);

				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS,
					function (e) {
						//获取到了远端流，可以播放
						console.log("播放成功", e.streams);
						
					}
				);

				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,
					function (e) {
						// offer anwser 交换失败
						console.log("offer anwser 交换失败", e);
						stop_screenshare();
					}
				);

				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM,
					function (s) {
						//console.log('offer anwser 交换失败',e)
					}
				);

				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.CAPTURE_STREAM_FAILED,
					function (s) {
						// 获取本地流失败
						console.log("获取本地流失败");
					}
				);

				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,
					function (state) {
						// RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
						console.log("当前状态==>", state);
						// 如果状态是已连接，通知mediaServer开始录像
						// https://github.com/zlmediakit/ZLMediaKit/wiki/MediaServer%E6%94%AF%E6%8C%81%E7%9A%84HTTP-API  /index/api/startRecord
						if (state == 'connected') {
							setTimeout(() => {
								var stream = app + MEDIA_SERVER_RECORD_SUFIX
								$.ajax({
									dataType: "json",
									url: "/index/api/startRecord?type=1&vhost=__defaultVhost__&app="+app+"&stream="+stream+"&secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc",
									type: "GET",
									timeout: 1000,
									headers: {
										Accept: "application/json; charset=utf-8",
									},
									success: function (data) {
										if (data.result) {
											$("#startRecord").attr('disabled', true)
										} else {
											alert("通知服务器录像失败，请重试")
										}
									},
									error: function (xhr, textStatus, errorThrow) {
										console.log("error:" + xhr.readyState);
									}
								})
							}, 1000)
						}
					}
				)

				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN,
					function (event) {
						console.log("rtc datachannel 打开 :", event);
					}
				);

				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG,
					function (event) {
						console.log("rtc datachannel 消息 :", event.data);
					}
				);
				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR,
					function (event) {
						console.log("rtc datachannel 错误 :", event);
					}
				);
				mediaServerRecordPlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,
					function (event) {
						console.log("rtc datachannel 关闭 :", event);
					}
				);
			},

			stopMediaServerRecord() {
				var stream = app + MEDIA_SERVER_RECORD_SUFIX
				$.ajax({
					dataType: "json",
					url: "/index/api/stopRecord?type=1&vhost=__defaultVhost__&app="+app+"&stream="+stream+"&secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc",
					type: "GET",
					timeout: 1000,
					headers: {
						Accept: "application/json; charset=utf-8",
					},
					success: function (data) {
						$("#startRecord").attr('disabled', false)
					},
					error: function (xhr, textStatus, errorThrow) {
						console.log("error:" + xhr.readyState);
						$("#startRecord").attr('disabled', false)
					}
				})
				// 关屏幕分享流
				if (mediaServerRecordPlayer != null) {
					mediaServerRecordPlayer.close();
					mediaServerRecordPlayer = null;

					var record = document.getElementById("mediaServerRecord");
					if (record.srcObject) {
						record.srcObject.getTracks().forEach((element) => {
							element.stop();
						});
						record.srcObject = null;
						record.load();
						$("#startRecord").attr('disabled', false)
					}
				}
			},


			// 静音、取消静音
			toggleAudio() {
				selfplayer_sub.localStream.getAudioTracks()[0].enabled = !selfplayer.localStream.getAudioTracks()[0].enabled
				selfplayer.localStream.getAudioTracks()[0].enabled = !selfplayer.localStream.getAudioTracks()[0].enabled
				$("#toggleAudio").text(selfplayer.localStream.getAudioTracks()[0].enabled ? '设为静音' : '取消静音')
				$("#toggleAudio").css("background", selfplayer.localStream.getAudioTracks()[0].enabled ? "rgb(45, 126, 233)" : "rgba(233, 101, 45, 1)")
			},
			
			// 开启视频、关闭视频
			toggleVideo() {
				selfplayer_sub.localStream.getVideoTracks()[0].enabled = !selfplayer.localStream.getVideoTracks()[0].enabled
				selfplayer.localStream.getVideoTracks()[0].enabled = !selfplayer.localStream.getVideoTracks()[0].enabled
				$("#toggleVideo").text(selfplayer.localStream.getVideoTracks()[0].enabled ? '设为黑屏' : '显示画面')
				$("#toggleVideo").css("background", selfplayer.localStream.getVideoTracks()[0].enabled ? "rgb(45, 126, 233)" : "rgba(233, 101, 45, 1)")
			},
			
			setLocalStorage(key) {
				localStorage.setItem(key, $("#" + key).val());
			},
			
			// 获取其他人摄像头分享的播放地址
			// app: 房间号  stream: 入会人员名字  isSub: 是否播放子码流
			getPlayUrl(app, stream, isSub) {
				if(isSub) {
					stream = stream + SUB_STREAM_SUFIX
				}
				var playUrl =
					document.location.protocol +
					"//" +
					window.location.host +
					"/index/api/webrtc?app=" +
					app +
					"&stream=" +
					stream +
					"&type=play";
				return playUrl;
			},

			// 获取摄像头分享的推流地址
			getPushUrl() {
				var stream = document.getElementById("stream").value;
				var pushUrl =
					document.location.protocol +
					"//" +
					window.location.host +
					"/index/api/webrtc?app=" +
					app +
					"&stream=" +
					stream +
					"&type=push";
				return pushUrl;
			},

			// 获取屏幕分享的推流地址
			getScreenSharePushUrl() {
				// 屏幕分享的推流stream是 房间名_screenshare
				var stream = app + SCREEN_SHARE_SUFFIX;
				var pushUrl =
					document.location.protocol +
					"//" +
					window.location.host +
					"/index/api/webrtc?app=" +
					app +
					"&stream=" +
					stream +
					"&type=push";
				return pushUrl;
			},

			// 获取屏幕分享的播放地址
			getScreenShareUrl() {
				// 屏幕分享的推流stream是 房间名_screenshare
				var stream = app + SCREEN_SHARE_SUFFIX;
				var playUrl =
					document.location.protocol +
					"//" +
					window.location.host +
					"/index/api/webrtc?app=" +
					app +
					"&stream=" +
					stream +
					"&type=play";
				return playUrl;
			},
			
			// 获取推送摄像头辅码流的url
			getPushSubUrl() {
				var stream = document.getElementById("stream").value + SUB_STREAM_SUFIX;
				var pushUrl =
					document.location.protocol +
					"//" +
					window.location.host +
					"/index/api/webrtc?app=" +
					app +
					"&stream=" +
					stream +
					"&type=push";
				return pushUrl;
			},

			// 获取屏幕录制的推流地址
			getMediaServerRecordPushUrl() {
				// 屏幕分享的推流stream是 房间名_screenshare
				var stream = app + MEDIA_SERVER_RECORD_SUFIX;
				var pushUrl =
					document.location.protocol +
					"//" +
					window.location.host +
					"/index/api/webrtc?app=" +
					app +
					"&stream=" +
					stream +
					"&type=push";
				return pushUrl;
			},

			// 开始屏幕分享
			start_screenshare() {
				stop_screenshare()
				screenSharePlayer = new ZLMRTCClient.Endpoint({
					element: document.getElementById("screenShare"), // video 标签
					debug: true, // 是否打印日志
					zlmsdpUrl: getScreenSharePushUrl(),
					simulcast: false,
					useCamera: false,
					audioEnable: true,
					videoEnable: true,
					recvOnly: false,
					resolution: { w: 3840, h: 2160 },
					usedatachannel: false
				});

				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR,
					function (e) {
						// ICE 协商出错
						console.log("ICE 协商出错");
					}
				);

				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS,
					function (e) {
						//获取到了远端流，可以播放
						console.log("播放成功", e.streams);
					}
				);

				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,
					function (e) {
						// offer anwser 交换失败
						console.log("offer anwser 交换失败", e);
						stop_screenshare();
					}
				);

				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM,
					function (s) {
						// 获取到了本地流
						document.getElementById("screenShare").srcObject = s;
						document.getElementById("screenShare").muted = true;
						//console.log('offer anwser 交换失败',e)
					}
				);

				screenSharePlayer.on(
					ZLMRTCClient.Events.CAPTURE_STREAM_FAILED,
					function (s) {
						// 获取本地流失败

						console.log("获取本地流失败");
					}
				);

				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,
					function (state) {
						// RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
						console.log("当前状态==>", state);
					}
				);

				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN,
					function (event) {
						console.log("rtc datachannel 打开 :", event);
					}
				);

				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG,
					function (event) {
						console.log("rtc datachannel 消息 :", event.data);
					}
				);
				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR,
					function (event) {
						console.log("rtc datachannel 错误 :", event);
					}
				);
				screenSharePlayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,
					function (event) {
						console.log("rtc datachannel 关闭 :", event);
					}
				);
			},

			// 开始分享摄像头或者麦克风
			// useCamera: 布尔类型，播放时是否使用摄像头，如果不使用会共享屏幕或者窗口
			start_play() {
				let elr = document.getElementById("resolution");
				let res = elr.options[elr.selectedIndex].text.match(/\d+/g);
				let h = parseInt(res.pop());
				let w = parseInt(res.pop());
				//当前选中的摄像头
				var deviceId = cameraSelect.options[cameraSelect.selectedIndex].value;
				//当前选中的麦克风
				var micId = micSelect.options[micSelect.selectedIndex].value;

				// 主码流
				selfplayer = new ZLMRTCClient.Endpoint({
					element: document.getElementById("selfVideo"), // video 标签
					debug: true, // 是否打印日志
					zlmsdpUrl: getPushUrl(),
					//simulcast: document.getElementById("simulcast").checked,
					simulcast: false,
					// useCamera:document.getElementById('useCamera').checked,
					useCamera: true,
					audioEnable: document.getElementById("audioEnable").checked,
					videoEnable: document.getElementById("videoEnable").checked,
					recvOnly: false,
					resolution: { w: w, h: h },
					usedatachannel: false,
					deviceId: deviceId,
					micId: micId
				});

				selfplayer.on(
					ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR,
					function (e) {
						// ICE 协商出错
						console.log("ICE 协商出错");
					}
				);

				selfplayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS,
					function (e) {
						//获取到了远端流，可以播放
						console.log("播放成功", e.streams);
					}
				);

				selfplayer.on(
					ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,
					function (e) {
						// offer anwser 交换失败
						console.log("offer anwser 交换失败", e);
						stop_camera();
					}
				);

				selfplayer.on(ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM, function (s) {
					// 获取到了本地流
					document.getElementById("selfVideo").srcObject = s;
					// document.getElementById("selfVideo").muted = true;
					//console.log('offer anwser 交换失败',e)
				});

				selfplayer.on(ZLMRTCClient.Events.CAPTURE_STREAM_FAILED, function (s) {
					// 获取本地流失败
					console.log("获取本地流失败");
				});

				selfplayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,
					function (state) {
						// RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
						console.log("当前状态==>", state);
					}
				);

				selfplayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN,
					function (event) {
						console.log("rtc datachannel 打开 :", event);
					}
				);

				selfplayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG,
					function (event) {
						console.log("rtc datachannel 消息 :", event.data);
					}
				);
				selfplayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR,
					function (event) {
						console.log("rtc datachannel 错误 :", event);
					}
				);
				selfplayer.on(
					ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,
					function (event) {
						console.log("rtc datachannel 关闭 :", event);
					}
				);

				// 再推一路子码流。
				selfplayer_sub = new ZLMRTCClient.Endpoint({
					element: document.getElementById("selfVideo"), // video 标签
					debug: true, // 是否打印日志
					zlmsdpUrl: getPushSubUrl(),
					//simulcast: document.getElementById("simulcast").checked,
					simulcast: false,
					//useCamera:document.getElementById('useCamera').checked,
					useCamera: true,
					audioEnable: document.getElementById("audioEnable").checked,
					videoEnable: document.getElementById("videoEnable").checked,
					recvOnly: false,
					resolution: { w: 320, h: 180 },
					usedatachannel: false,
					deviceId: deviceId,
				});
			},

			start_play_other() {
				setInterval(() => {
					this.syncVideoWindowAndLivestream();
				}, 5000);
			},

			// 播放屏幕分享视频
			startScreenShareLivestream(data) {
				if (this.host != 1) {
					var screenShareLivestream = [];
					//过滤查询到的流
					screenShareLivestream = data.filter(
						(d) =>
							d.app == app && // 同一个会议室（app相同）
							d.originTypeStr == "rtc_push" && // rtc推流的
							d.schema == "rtmp" && // rtmp格式
							d.stream == app + SCREEN_SHARE_SUFFIX && //是屏幕分享流
							d.bytesSpeed != 0 //码率不为0，说明是有效的流
					);

					// 如果存在屏幕分享的视频流, 且没有在播放, 开个新流，否则说明在播放了，不做动作
					if(screenShareLivestream.length > 0) {
						if (screenSharePlayer == null) {
							screenSharePlayer = new ZLMRTCClient.Endpoint({
								element: document.getElementById("screenShare"), // video 标签
								debug: true, // 是否打印日志
								zlmsdpUrl: getScreenShareUrl(),
								simulcast: false,
								useCamera: false,
								audioEnable: true,
								videoEnable: true,
								recvOnly: true,
								resolution: { w: 3840, h: 2160 },
								usedatachannel: false,
							});

							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR,
								function (e) {
									// ICE 协商出错
									console.log("ICE 协商出错");
								}
							);

							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS,
								function (e) {
									//获取到了远端流，可以播放
									console.log("播放成功", e.streams);
									$("#screenShare")[0].play()
								}
							);

							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,
								function (e) {
									// offer anwser 交换失败
									console.log("offer anwser 交换失败", e);
								}
							);

							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM,
								function (s) {
									// 获取到了本地流
									//console.log('offer anwser 交换失败',e)
								}
							);

							screenSharePlayer.on(
								ZLMRTCClient.Events.CAPTURE_STREAM_FAILED,
								function (s) {
									// 获取本地流失败

									console.log("获取本地流失败");
								}
							);

							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,
								function (state) {
									// RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
									console.log("当前状态==>", state);
									if (state == 'disconnected') {
										// 如果没有屏幕共享的流，关闭画面
										stop_screenshare()
									}
								}
							);

							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN,
								function (event) {
									console.log("rtc datachannel 打开 :", event);
								}
							);

							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG,
								function (event) { }
							);
							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR,
								function (event) {
									console.log("rtc datachannel 错误 :", event);
								}
							);
							screenSharePlayer.on(
								ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,
								function (event) {
									console.log("rtc datachannel 关闭 :", event);
								}
							);
						}
					}
				}
			},

			// 同步其他参会人员的摄像头视频
			// 默认是小图标，播放辅码流
			syncVideoWindowAndLivestream() {
				let elr = document.getElementById("resolution");
				let res = elr.options[elr.selectedIndex].text.match(/\d+/g);
				let h = parseInt(res.pop());
				let w = parseInt(res.pop());

				// 获取同一个会议室（app相同）其他人的直播流
				$.ajax({
					dataType: "json",
					url: "/index/api/getMediaList?app="+app+"&secret=035c73f7-bb6b-4889-a715-d9eb2d1925cc",
					type: "GET",
					timeout: 1000,
					headers: {
						Accept: "application/json; charset=utf-8",
					},
					success: function (data) {
						var currentStreams = [];
						// 过滤查询到的流
						if (data.data) {
							currentStreams = data.data.filter(
								/** 过滤用户摄像头主码流的逻辑
								(d) =>
									d.app == app && // 同一个会议室（app相同）
									d.originTypeStr == "rtc_push" && // rtc推流的
									d.schema == "rtmp" && // rtmp格式
									d.stream != $("#stream").val() && // 不是推流者自己的流，也就是其他人的
									d.stream.indexOf(SUB_STREAM_SUFIX) == -1 && //不是辅码流
									d.stream.indexOf(SCREEN_SHARE_SUFFIX) == -1 && //不是屏幕分享流
									d.stream.indexOf(MEDIA_SERVER_RECORD_SUFIX) == -1 && //不是录像推流
									d.bytesSpeed != 0 //码率不为0，说明是有效的流
								**/
								// 过滤用户摄像头子码流的逻辑
								(d) => 
									d.app == app && // 同一个会议室（app相同）
									d.originTypeStr == "rtc_push" && // rtc推流的
									d.schema == "rtmp" && // rtmp格式
									d.stream != $("#stream").val() + SUB_STREAM_SUFIX && // 不是推流者自己的子码流，也就是其他人的
									d.stream.indexOf(SUB_STREAM_SUFIX) != -1 && //是辅码流
									d.stream.indexOf(SCREEN_SHARE_SUFFIX) == -1 && //不是屏幕分享流
									d.stream.indexOf(MEDIA_SERVER_RECORD_SUFIX) == -1 && //不是录像推流
									d.bytesSpeed != 0 //码率不为0，说明是有效的流
							);


							// 看是否需要播放分享桌面的视频
							startScreenShareLivestream(data.data)
						}

						console.log(currentStreams)
						// stream（新获取到的流列表）塞到set里面 (因为默认是拉子码流，显示的时候不显示_sub字样所以给截掉)
						var currentStreamSet = new Set(currentStreams.map((s) => s.stream.slice(0, -SUB_STREAM_SUFIX.length)));

						// 新加入会议的流（原视频流列表中没有，新的里面有）
						var newStreams = Array.from(currentStreamSet).filter(
							(s) => !latestStreamSet.has(s)
						);
						// 下线的视频流（新视频流列表里面没有，原视频列表里面有）
						var offlineStreams = Array.from(latestStreamSet).filter(
							(s) => !currentStreamSet.has(s)
						);

						// 删除下线的视频
						for (let i = 0; i < offlineStreams.length; i++) {
							latestStreamSet.delete(offlineStreams[i]);
							$("#video" + offlineStreams[i])
								.parent("div")
								.remove();
						}

						// 新加入的加入
						for (let i = 0; i < newStreams.length; i++) {
							var stream = newStreams[i];
							var tag = "video" + stream;

							latestStreamSet.add(stream);

							// 如果视频存在，不添加
							if ($("#video" + stream).length == 0) {
								$("#videoName_" + stream).text(stream);

								videodom =
									'<div style="display:inline-block"><span id="videoName_' +
									stream +
									'" class="badge">' +
									stream +
									"</span>" +
									'<video id="' +
									tag +
									'"  autoplay class="other-video">' +
									"</video></div>";
								$("#meeting").append($(videodom));

								const player = new ZLMRTCClient.Endpoint({
									element: document.getElementById(tag), // video 标签
									debug: true, // 是否打印日志
									// 播放子码流，isSub设置为true
									zlmsdpUrl: getPlayUrl(app, stream, true),
									simulcast: false,
									useCamera: false,
									audioEnable: true,
									videoEnable: true,
									recvOnly: true,
									resolution: { w: w, h: h },
									usedatachannel: false,
								});

								player.on(
									ZLMRTCClient.Events.WEBRTC_ICE_CANDIDATE_ERROR,
									function (e) {
										// ICE 协商出错
										console.log("ICE 协商出错");
									}
								);

								player.on(
									ZLMRTCClient.Events.WEBRTC_ON_REMOTE_STREAMS,
									function (e) {
										//获取到了远端流，可以播放
										console.log("播放成功", e.streams);
										document.getElementById(tag).muted = false;
									}
								);

								player.on(
									ZLMRTCClient.Events.WEBRTC_OFFER_ANWSER_EXCHANGE_FAILED,
									function (e) {
										// offer anwser 交换失败
										console.log("offer anwser 交换失败", e);
									}
								);

								player.on(
									ZLMRTCClient.Events.WEBRTC_ON_LOCAL_STREAM,
									function (s) {
										// 获取到了本地流
										//console.log('offer anwser 交换失败',e)
									}
								);

								player.on(
									ZLMRTCClient.Events.CAPTURE_STREAM_FAILED,
									function (s) {
										// 获取本地流失败

										console.log("获取本地流失败");
									}
								);

								player.on(
									ZLMRTCClient.Events.WEBRTC_ON_CONNECTION_STATE_CHANGE,
									function (state) {
										// RTC 状态变化 ,详情参考 https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
										console.log("当前状态==>", state);
										// 流断开的时候删除对应的播放窗口
										if(state == 'disconnected') {
											latestStreamSet.delete(stream);
											$("#video" + stream)
												.parent("div")
												.remove();
										}
									}
								);

								player.on(
									ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_OPEN,
									function (event) {
										console.log("rtc datachannel 打开 :", event);
									}
								);

								player.on(
									ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_MSG,
									function (event) { }
								);
								player.on(
									ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_ERR,
									function (event) {
										console.log("rtc datachannel 错误 :", event);
									}
								);
								player.on(
									ZLMRTCClient.Events.WEBRTC_ON_DATA_CHANNEL_CLOSE,
									function (event) {
										console.log("rtc datachannel 关闭 :", event);
									}
								);
							}
						}
					},
					error: function (xhr, textStatus, errorThrow) {
						console.log("error:" + xhr.readyState);
					},
				});
			},

			start_camera() {
				stop_camera();
				let elr = document.getElementById("resolution");
				let res = elr.options[elr.selectedIndex].text.match(/\d+/g);
				let h = parseInt(res.pop());
				let w = parseInt(res.pop());

				playIfSupportResolution(w, h);
			},

			playIfSupportResolution(w, h) {
				/**
				ZLMRTCClient.isSupportResolution(w,h).then(e=>{
					start_play()
				}).catch(e=>{
					alert("当前选择的摄像头分辨率不支持,请调低分辨率播放")
				});
				**/
				// 当前选中的摄像头
				var deviceId = cameraSelect.options[cameraSelect.selectedIndex].value;
				maxWidth = cameraResolutions[deviceId].w;
				maxHeight = cameraResolutions[deviceId].h;
				if (w > maxWidth || h > maxHeight) {
					alert(
						"当前选择的摄像头最高支持的分辨率是" +
						maxWidth +
						"X" +
						maxHeight +
						",请调低分辨率播放"
					);
				} else {
					start_play();
				}
			},

			stop_camera() {
				setLocalStorage("stream");

				// 关主码流
				if (selfplayer != null) {
					selfplayer.close();
					selfplayer = null;

					// 关辅码流
					if (selfplayer_sub != null) {
						selfplayer_sub.close();
						selfplayer_sub = null;
					}

					var local = document.getElementById("selfVideo");
					if (local.srcObject) {
						local.srcObject.getTracks().forEach((element) => {
							element.stop();
						});
						local.srcObject = null;
						local.load();
						// document.location.reload()
					}
				}
			},

			stop_screenshare() {
				// 关屏幕分享流
				if (screenSharePlayer != null) {
					screenSharePlayer.close();
					screenSharePlayer = null;

					var share = document.getElementById("screenShare");
					if (share.srcObject) {
						share.srcObject.getTracks().forEach((element) => {
							element.stop();
						});
						share.srcObject = null;
						share.load();
					}
				}
			},

			close() {
				if (selfplayer_sub != null) {
					selfplayer_sub.closeDataChannel();
				}
				if (selfplayer != null) {
					selfplayer.closeDataChannel();
				}
			}
		}
	}
</script>

<style>
	.badge {
		position: absolute;
		background: rgba(255, 255, 255, 1);
		color: #000;
		font-size: 12px;
		z-index: 9;
		padding: 2px;
		margin: 6px;
	}

	.badge-self {
		position: absolute;
		background: rgba(233, 101, 45, 1);
		color: #fff;
		font-size: 12px;
		z-index: 9;
		padding: 2px;
		margin: 6px;
	}

	.control-self-a {
		position: absolute;
		background: rgb(45, 126, 233);
		color: #fff;
		font-size: 12px;
		z-index: 9;
		padding: 2px;
		margin: 6px;
		top: 30px;
		cursor: pointer;
	}

	.control-self-v {
		position: absolute;
		background: rgb(45, 126, 233);
		color: #fff;
		font-size: 12px;
		z-index: 9;
		padding: 2px;
		margin: 6px;
		top: 56px;
		cursor: pointer;
	}

	.self-video {
		margin: 2px;
		background: #333;
		width: 150px;
		height: 85px;
		border: solid 2px rgb(45, 126, 233);
	}

	.other-video {
		margin: 2px;
		background: #333;
		width: 150px;
		height: 85px;
		border: solid 2px rgb(45, 126, 233);
	}

	.screen-share-video {
		background: #000;
		width: 100%;
		height: 86%;
		position: absolute;
		left: 0;
		top: 0;
		z-index: -1;
	}

	.user-options {
		text-align: center;
		background: #fff;
		z-index: 10;
		position: absolute;
		width: 100%;
		height: 12%;
		bottom: 10px;
		font-size: 20px;
	}

	.camera-share {
		text-align: center;
	}

	.prompt {
		width: 100%;
		height: 100%;
		z-index: 999;
		text-align: center;
		vertical-align: center;
		position: absolute;
		background: #FFF;
		font-size: 20px;
	}

	.option-item {
		border: solid 2px #888;
		margin: 4px;
		text-align: center;
	}
</style>
