/*! browserdevicemanager - ver 1.1.7 created:2021/3/8 下午7:07:53 */
!function(e,r){if("object"==typeof exports&&"object"==typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var t=r();for(var o in t)("object"==typeof exports?exports:e)[o]=t[o]}}(self,(function(){return(()=>{"use strict";var e={304:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.BrowserDeviceManager=void 0;var o=t(101),i=t(853),n=t(62),E=t(913),c=t(331),a=t(1),s=t(935),R=function(){function e(){this.systemUtil=new o.SystemUtil,this.deviceManager=this.createDeviceManager()}return e.prototype.getCameraList=function(){return this.deviceManager.getCameraList()},e.prototype.getMicList=function(){return this.deviceManager.getMicList()},e.prototype.getAudioTrack=function(e){return this.deviceManager.getAudioTrack(e)},e.prototype.getVideoTrack=function(e){return this.deviceManager.getVideoTrack(e)},e.prototype.getScreenTrack=function(e){return this.deviceManager.getScreenTrack(e)},e.prototype.checkSupportScreenShare=function(){return this.deviceManager.checkSupportScreenShare()},e.prototype.createDeviceManager=function(){return this.systemUtil.isWindows?new s.WindowsDeviceManager:this.systemUtil.isAndroid?new i.AndroidDeviceManager:this.systemUtil.isIos?new E.IosDeviceManager:this.systemUtil.isMacOS?new a.MacDeviceManager:this.systemUtil.isLinux?new c.LinuxDeviceManager:new n.BaseDeviceManager},e}();r.BrowserDeviceManager=R},603:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.DeviceError=r.DeviceErrorDescription=r.DeviceErrorCode=void 0,function(e){e[e.ERROR_DEVICE_UNKNOWNERROR=1e4]="ERROR_DEVICE_UNKNOWNERROR",e[e.ERROR_DEVICE_AUDIODEVICE_NOTFOUND=10001]="ERROR_DEVICE_AUDIODEVICE_NOTFOUND",e[e.ERROR_DEVICE_VIDEODEVICE_NOTFOUND=10002]="ERROR_DEVICE_VIDEODEVICE_NOTFOUND",e[e.ERROR_DEVICE_AUDIODEVICE_NOTALLOWED=10003]="ERROR_DEVICE_AUDIODEVICE_NOTALLOWED",e[e.ERROR_DEVICE_VIDEODEVICE_NOTALLOWED=10004]="ERROR_DEVICE_VIDEODEVICE_NOTALLOWED",e[e.ERROR_DEVICE_AUDIODEVICE_NOTREADABLE=10005]="ERROR_DEVICE_AUDIODEVICE_NOTREADABLE",e[e.ERROR_DEVICE_VIDEODEVICE_NOTREADABLE=10006]="ERROR_DEVICE_VIDEODEVICE_NOTREADABLE",e[e.ERROR_DEIVCE_CONSTRAINEDERROR=10007]="ERROR_DEIVCE_CONSTRAINEDERROR",e[e.ERROR_SCREENSHARE_UNKNOWNERRO=10010]="ERROR_SCREENSHARE_UNKNOWNERRO",e[e.ERROR_SCREENSHARE_NOTALLOWED=10011]="ERROR_SCREENSHARE_NOTALLOWED",e[e.ERROR_SCREENSHARE_ENDED=10012]="ERROR_SCREENSHARE_ENDED",e[e.ERROR_SCREENSHARE_NOPERMISSION=10013]="ERROR_SCREENSHARE_NOPERMISSION",e[e.ERROR_SCREENSHARE_INVALIDACCESS=10014]="ERROR_SCREENSHARE_INVALIDACCESS",e[e.ERROR_SCREENSHARE_NOTSUPPORT=10018]="ERROR_SCREENSHARE_NOTSUPPORT",e[e.ERROR_DEVICE_NOTSUPPORT=10019]="ERROR_DEVICE_NOTSUPPORT"}(r.DeviceErrorCode||(r.DeviceErrorCode={})),function(e){e.ERRORMESSAGE_DEVICENOTFOUND="Requested device not found",e.ERRORMESSAGE_DEVICENOTALLOWED="Permission denied",e.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE="Permission denied by system",e.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED="The request is not allowed by the user agent or the platform in the current context, possibly because the user denied permission.",e.ERRORMESSAGE_MOBILEDEVICE_NOTALLOWED="video device not allowed",e.ERRORMESSAGE_AUDIODEVICENOTREADABLE="Could not start audio source",e.ERRORMESSAGE_VIDEODEVICENOTREADABLE="Could not start video source",e.ERRORNAME_DEVICENOTFOUND="NotFoundError",e.ERRORNAME_DEVICENOTALLOWED="NotAllowedError",e.ERRORNAME_DEVICENOTREADABLE="NotReadableError",e.ERRORNAME_DEVICEOVERCONSTRAINED="OverconstrainedError",e.ERRORNAME_INVALID_ACCESS="InvalidAccessError"}(r.DeviceErrorDescription||(r.DeviceErrorDescription={}));var t=function(e,r){this.code=e,this.reason=r};r.DeviceError=t},873:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.FacingMode=r.DeviceType=r.MobileCameraType=void 0,function(e){e[e.USER=0]="USER",e[e.ENV=1]="ENV"}(r.MobileCameraType||(r.MobileCameraType={})),function(e){e.Camera="videoinput",e.Mic="audioinput",e.Screen="screen"}(r.DeviceType||(r.DeviceType={})),function(e){e.USER="user",e.ENVIRONMENT="environment"}(r.FacingMode||(r.FacingMode={}))},853:function(e,r,t){var o,i=this&&this.__extends||(o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0}),r.AndroidDeviceManager=void 0;var n=function(e){function r(){return e.call(this)||this}return i(r,e),r}(t(583).MobileDeviceManager);r.AndroidDeviceManager=n},62:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.BaseDeviceManager=void 0;var o=t(603),i=t(873),n=function(){function e(){}return e.prototype.checkSupportScreenShare=function(){if(navigator&&navigator.mediaDevices&&navigator.mediaDevices.getDisplayMedia&&navigator.mediaDevices.getDisplayMedia)return!0;return!1},e.prototype.getCameraList=function(){var e=this;return new Promise((function(r,t){e.checkSupport()?e.getDeviceRight(i.DeviceType.Camera).then((function(){e.getDeviceList(i.DeviceType.Camera).then((function(e){r(e)})).catch((function(r){t(e.parseError(i.DeviceType.Camera,r))}))})).catch((function(r){t(e.parseError(i.DeviceType.Camera,r))})):t(new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT,"not support navigator.mediaDevices"))}))},e.prototype.getMicList=function(){var e=this;return new Promise((function(r,t){e.checkSupport()?e.getDeviceRight(i.DeviceType.Mic).then((function(){e.getDeviceList(i.DeviceType.Mic).then((function(e){r(e)})).catch((function(r){t(e.parseError(i.DeviceType.Mic,r))}))})).catch((function(r){t(e.parseError(i.DeviceType.Mic,r))})):t(new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT,"not support navigator.mediaDevices"))}))},e.prototype.getAudioTrack=function(e){var r=this;return new Promise((function(t,n){if(r.checkSupport()){var E=void 0;E=e&&e.deviceId?{audio:{deviceId:e.deviceId}}:{audio:!0},navigator.mediaDevices.getUserMedia(E).then((function(e){t(e.getAudioTracks()[0])})).catch((function(e){n(r.parseError(i.DeviceType.Mic,e))}))}else n(new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT,"not support navigator.mediaDevices"))}))},e.prototype.getVideoTrack=function(e){var r=this;return new Promise((function(t,n){if(r.checkSupport()){var E=r.createVideoConstraints(e);navigator.mediaDevices.getUserMedia(E).then((function(e){t(e.getVideoTracks()[0])})).catch((function(e){n(r.parseError(i.DeviceType.Camera,e))}))}else n(new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_NOTSUPPORT,"not support navigator.mediaDevices"))}))},e.prototype.getScreenTrack=function(e){var r=this;return new Promise((function(t,n){r.checkSupportScreenShare()?navigator.mediaDevices.getDisplayMedia(e).then((function(e){t(e)})).catch((function(e){n(r.parseError(i.DeviceType.Screen,e))})):n(new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_NOTSUPPORT,"browser not support screenshare"))}))},e.prototype.checkSupport=function(){return!!(navigator&&navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&navigator.mediaDevices.getUserMedia)},e.prototype.getDeviceList=function(e){return new Promise((function(r,t){navigator.mediaDevices.enumerateDevices().then((function(t){var o=[];t.forEach((function(r){r.kind===e&&o.push(r)})),r(o)})).catch((function(e){t(e)}))}))},e.prototype.getDeviceRight=function(e){return new Promise((function(r,t){var o;i.DeviceType.Camera===e?o={video:!0}:i.DeviceType.Mic===e&&(o={audio:!0}),navigator.mediaDevices.getUserMedia(o).then((function(e){e.getVideoTracks().forEach((function(e){e.stop()})),r(void 0)})).catch((function(e){t(e)}))}))},e.prototype.parseError=function(e,r){var t=null;return i.DeviceType.Mic===e?t=this.parseAudioError(r):i.DeviceType.Camera===e?t=this.parseVideoError(r):i.DeviceType.Screen===e&&(t=this.parseScreenError(r)),null===t?new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_UNKNOWNERROR,""):t},e.prototype.parseAudioError=function(e){return e.message===o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTFOUND||e.name===o.DeviceErrorDescription.ERRORNAME_DEVICENOTFOUND?new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTFOUND,"audio device not found"):e.message===o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED||e.message===o.DeviceErrorDescription.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED?new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTALLOWED,"audio device not allowed"):e.message===o.DeviceErrorDescription.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE||e.message===o.DeviceErrorDescription.ERRORMESSAGE_AUDIODEVICENOTREADABLE||e.message===o.DeviceErrorDescription.ERRORNAME_DEVICENOTREADABLE?new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_AUDIODEVICE_NOTREADABLE,"audio device not readable"):null},e.prototype.parseVideoError=function(e){return e.message===o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTFOUND||e.name===o.DeviceErrorDescription.ERRORNAME_DEVICENOTFOUND?new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTFOUND,"video device not found"):e.message===o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED||e.message===o.DeviceErrorDescription.ERRORMESSAGE_MOBILEDEVICE_NOTALLOWED||e.message===o.DeviceErrorDescription.ERRORMESSAGE_MACSAFARI_DEVICENOTALLOWED?new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTALLOWED,"video device not allowed"):e.message===o.DeviceErrorDescription.ERRORMESSAGE_MACCHROME_DEVICENOTREADABLE||e.message===o.DeviceErrorDescription.ERRORMESSAGE_VIDEODEVICENOTREADABLE||e.name===o.DeviceErrorDescription.ERRORNAME_DEVICENOTREADABLE?new o.DeviceError(o.DeviceErrorCode.ERROR_DEVICE_VIDEODEVICE_NOTREADABLE,"video device not readable"):null},e.prototype.parseScreenError=function(e){return e.name===o.DeviceErrorDescription.ERRORNAME_DEVICENOTALLOWED?e.message===o.DeviceErrorDescription.ERRORMESSAGE_DEVICENOTALLOWED?new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_NOTALLOWED,e.message):new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_NOPERMISSION,e.message):e.name===o.DeviceErrorDescription.ERRORNAME_INVALID_ACCESS?new o.DeviceError(o.DeviceErrorCode.ERROR_SCREENSHARE_INVALIDACCESS,e.message):null},e.prototype.createVideoConstraints=function(e){return e.deviceId||e.width||e.height||e.frameRate?{video:{deviceId:e.deviceId,width:e.width,height:e.height,frameRate:e.frameRate}}:{video:!0}},e}();r.BaseDeviceManager=n},913:function(e,r,t){var o,i=this&&this.__extends||(o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0}),r.IosDeviceManager=void 0;var n=function(e){function r(){return e.call(this)||this}return i(r,e),r}(t(583).MobileDeviceManager);r.IosDeviceManager=n},331:function(e,r,t){var o,i=this&&this.__extends||(o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0}),r.LinuxDeviceManager=void 0;var n=function(e){function r(){return e.call(this)||this}return i(r,e),r}(t(62).BaseDeviceManager);r.LinuxDeviceManager=n},1:function(e,r,t){var o,i=this&&this.__extends||(o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0}),r.MacDeviceManager=void 0;var n=function(e){function r(){return e.call(this)||this}return i(r,e),r}(t(62).BaseDeviceManager);r.MacDeviceManager=n},583:function(e,r,t){var o,i=this&&this.__extends||(o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0}),r.MobileDeviceManager=void 0;var n=t(603),E=function(e){function r(){return e.call(this)||this}return i(r,e),r.prototype.checkSupportScreenShare=function(){return!1},r.prototype.getScreenTrack=function(e){return new Promise((function(e,r){r(new n.DeviceError(n.DeviceErrorCode.ERROR_SCREENSHARE_NOTSUPPORT,"mobile not support screenshare"))}))},r.prototype.createVideoConstraints=function(e){return e.deviceId||e.facingMode||e.width||e.height?{video:{deviceId:e.facingMode?e.facingMode:e.deviceId,width:e.width,height:e.height}}:{video:!0}},r}(t(62).BaseDeviceManager);r.MobileDeviceManager=E},935:function(e,r,t){var o,i=this&&this.__extends||(o=function(e,r){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])})(e,r)},function(e,r){function t(){this.constructor=e}o(e,r),e.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)});Object.defineProperty(r,"__esModule",{value:!0}),r.WindowsDeviceManager=void 0;var n=function(e){function r(){return e.call(this)||this}return i(r,e),r}(t(62).BaseDeviceManager);r.WindowsDeviceManager=n},607:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.BrowserDeviceManager=void 0;var o=t(304);Object.defineProperty(r,"BrowserDeviceManager",{enumerable:!0,get:function(){return o.BrowserDeviceManager}}),window&&(window.BrowserDeviceManager=o.BrowserDeviceManager)},101:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.SystemUtil=void 0,function(e){e[e.Unknown=0]="Unknown",e[e.MacOS=1]="MacOS",e[e.Windows=2]="Windows",e[e.Android=3]="Android",e[e.Iphone=4]="Iphone",e[e.Ipad=5]="Ipad",e[e.Linux=6]="Linux"}(t||(t={}));var o=function(){function e(){this.systemType=t.Unknown,this.getSystemInfo()}return Object.defineProperty(e.prototype,"isIos",{get:function(){return this.systemType===t.Ipad||this.systemType===t.Iphone},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isAndroid",{get:function(){return this.systemType===t.Android},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isMacOS",{get:function(){return this.systemType===t.MacOS},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isWindows",{get:function(){return this.systemType===t.Windows},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isLinux",{get:function(){return this.systemType===t.Linux},enumerable:!1,configurable:!0}),e.prototype.getSystemInfo=function(){if(navigator&&navigator.userAgent){var e=navigator.userAgent.toLocaleLowerCase();e.indexOf("ipad")>-1?this.systemType=t.Ipad:e.indexOf("iphone")>-1?this.systemType=t.Iphone:e.indexOf("android")>-1?this.systemType=t.Android:e.indexOf("win")>-1?this.systemType=t.Windows:e.indexOf("mac")>-1?this.systemType=t.MacOS:e.indexOf("linux")>-1?this.systemType=t.Linux:e.indexOf("")>-1&&(this.systemType=t.Unknown)}},e}();r.SystemUtil=o}},r={};return function t(o){if(r[o])return r[o].exports;var i=r[o]={exports:{}};return e[o].call(i.exports,i,i.exports,t),i.exports}(607)})()}));