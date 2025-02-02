(() => {
    "use strict";
    var __webpack_modules__ = {
            1075: e => {
                var t = Object.prototype.hasOwnProperty,
                    n = "~";

                function a() {}

                function i(e, t, n) {
                    this.fn = e, this.context = t, this.once = n || !1
                }

                function r(e, t, a, r, o) {
                    if ("function" != typeof a) throw new TypeError("The listener must be a function");
                    var s = new i(a, r || e, o),
                        d = n ? n + t : t;
                    return e._events[d] ? e._events[d].fn ? e._events[d] = [e._events[d], s] : e._events[d].push(s) : (e._events[d] = s, e._eventsCount++), e
                }

                function o(e, t) {
                    0 == --e._eventsCount ? e._events = new a : delete e._events[t]
                }

                function s() {
                    this._events = new a, this._eventsCount = 0
                }
                Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (n = !1)), s.prototype.eventNames = function() {
                    var e, a, i = [];
                    if (0 === this._eventsCount) return i;
                    for (a in e = this._events) t.call(e, a) && i.push(n ? a.slice(1) : a);
                    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
                }, s.prototype.listeners = function(e) {
                    var t = n ? n + e : e,
                        a = this._events[t];
                    if (!a) return [];
                    if (a.fn) return [a.fn];
                    for (var i = 0, r = a.length, o = new Array(r); i < r; i++) o[i] = a[i].fn;
                    return o
                }, s.prototype.listenerCount = function(e) {
                    var t = n ? n + e : e,
                        a = this._events[t];
                    return a ? a.fn ? 1 : a.length : 0
                }, s.prototype.emit = function(e, t, a, i, r, o) {
                    var s = n ? n + e : e;
                    if (!this._events[s]) return !1;
                    var d, l, c = this._events[s],
                        u = arguments.length;
                    if (c.fn) {
                        switch (c.once && this.removeListener(e, c.fn, void 0, !0), u) {
                            case 1:
                                return c.fn.call(c.context), !0;
                            case 2:
                                return c.fn.call(c.context, t), !0;
                            case 3:
                                return c.fn.call(c.context, t, a), !0;
                            case 4:
                                return c.fn.call(c.context, t, a, i), !0;
                            case 5:
                                return c.fn.call(c.context, t, a, i, r), !0;
                            case 6:
                                return c.fn.call(c.context, t, a, i, r, o), !0
                        }
                        for (l = 1, d = new Array(u - 1); l < u; l++) d[l - 1] = arguments[l];
                        c.fn.apply(c.context, d)
                    } else {
                        var f, _ = c.length;
                        for (l = 0; l < _; l++) switch (c[l].once && this.removeListener(e, c[l].fn, void 0, !0), u) {
                            case 1:
                                c[l].fn.call(c[l].context);
                                break;
                            case 2:
                                c[l].fn.call(c[l].context, t);
                                break;
                            case 3:
                                c[l].fn.call(c[l].context, t, a);
                                break;
                            case 4:
                                c[l].fn.call(c[l].context, t, a, i);
                                break;
                            default:
                                if (!d)
                                    for (f = 1, d = new Array(u - 1); f < u; f++) d[f - 1] = arguments[f];
                                c[l].fn.apply(c[l].context, d)
                        }
                    }
                    return !0
                }, s.prototype.on = function(e, t, n) {
                    return r(this, e, t, n, !1)
                }, s.prototype.once = function(e, t, n) {
                    return r(this, e, t, n, !0)
                }, s.prototype.removeListener = function(e, t, a, i) {
                    var r = n ? n + e : e;
                    if (!this._events[r]) return this;
                    if (!t) return o(this, r), this;
                    var s = this._events[r];
                    if (s.fn) s.fn !== t || i && !s.once || a && s.context !== a || o(this, r);
                    else {
                        for (var d = 0, l = [], c = s.length; d < c; d++)(s[d].fn !== t || i && !s[d].once || a && s[d].context !== a) && l.push(s[d]);
                        l.length ? this._events[r] = 1 === l.length ? l[0] : l : o(this, r)
                    }
                    return this
                }, s.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = n ? n + e : e, this._events[t] && o(this, t)) : (this._events = new a, this._eventsCount = 0), this
                }, s.prototype.off = s.prototype.removeListener, s.prototype.addListener = s.prototype.on, s.prefixed = n, s.EventEmitter = s, e.exports = s
            },
            5215: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isIpad = t.isIphone = t.isFireFoxOnAndroid = t.isSamsungInternetOnAndroidTab = t.isSamsungInternetOnAndroidMobile = t.isAndroidTab = t.isAndroidMobile = t.isAndroidDevice = t.isMobileOrTab = t.getOrientation = t.nulOrUnd = void 0, t.nulOrUnd = function(e) {
                    return null == e
                }, t.getOrientation = function() {
                    let e = Math.abs(window.orientation);
                    return 180 == e && (e = 0), e
                }, t.isMobileOrTab = function() {
                    return [/webOS/i, /iPod/i, /BlackBerry/i, /Windows Phone/i].some((e => window.navigator.userAgent.match(e))) || this.isAndroidDevice() || this.isIphone() || this.isIpad()
                }, t.isAndroidDevice = function() {
                    return [/Android/i, /SamsungBrowser/i].some((e => window.navigator.userAgent.match(e)))
                }, t.isAndroidMobile = function() {
                    return [/Mobile/i].every((e => window.navigator.userAgent.match(e))) && this.isAndroidDevice()
                }, t.isAndroidTab = function() {
                    return ![/Mobile/i].every((e => navigator.userAgent.match(e))) && this.isAndroidDevice()
                }, t.isSamsungInternetOnAndroidMobile = function() {
                    return [/Mobile/i, /SamsungBrowser/i].every((e => window.navigator.userAgent.match(e)))
                }, t.isSamsungInternetOnAndroidTab = function() {
                    return [/SamsungBrowser/i].every((e => window.navigator.userAgent.match(e))) && this.isAndroidTab()
                }, t.isFireFoxOnAndroid = function() {
                    return [/Android/i, /Mobile/i, /FireFox/i].every((e => window.navigator.userAgent.match(e)))
                }, t.isIphone = function() {
                    return [/iPhone/i].some((e => window.navigator.userAgent.match(e))) && window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1
                }, t.isIpad = function() {
                    return [/iPad/i, /Macintosh/i].some((e => window.navigator.userAgent.match(e))) && window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 1
                }
            },
            8744: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(1075)),
                    r = n(4853),
                    o = a(n(347)),
                    s = n(9251),
                    d = a(n(6430)),
                    l = a(n(2673)),
                    c = a(n(694)),
                    u = a(n(9916)),
                    f = a(n(5797)),
                    _ = a(n(1840)),
                    g = a(n(2915)),
                    h = a(n(240)),
                    p = a(n(5038)),
                    m = n(973),
                    A = n(939),
                    E = a(n(9714));
                class v extends i.default {
                    static get instance() {
                        return void 0 === v._instance ? v._instance = new v : v._instance
                    }
                    constructor() {
                        super(), this.isReady = !1, this.gameStarted = !1, this.interface = new i.default, o.default.setupUIStyle()
                    }
                    static isPlatformSupported() {
                        return v.commsManager.isPlatformSupported
                    }
                    getPlayerID() {
                        return v.commsManager.playerID
                    }
                    async init(e) {
                        this.config = e, this.logBuild(e), this.applyWrapperOptions();
                        let {
                            err: t
                        } = await this.commsManager.initialize();
                        return this.commsManager.checkPlatformSupport(t), await this.storageManager.initialize(this.config), this.createInterface(e.interface), await this.initAds(), this.config.inAppPurchase && await this.initIAP(), window.sgWrapper = this, this.createUI(e), this.initOnceAllReady(), Promise.resolve()
                    }
                    onAllReady() {
                        this.isReady = !0, this.checkForRemoteJS(), window.onWrapperReady && (window.onWrapperReady(), this.emit(d.default.READY))
                    }
                    initOnceAllReady() {
                        let e = !1;
                        const t = () => {
                            e || (e = !0, setTimeout((() => {
                                this.onAllReady()
                            }), 200))
                        };
                        "complete" === document.readyState ? t() : window.addEventListener("load", (() => {
                            const e = setInterval((() => {
                                "complete" === document.readyState && (clearInterval(e), t())
                            }), 200)
                        }))
                    }
                    checkForRemoteJS() {
                        for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++)
                            if (null !== e[t].getAttribute("data-consolejs-channel")) {
                                alert("THIS GAME CONTAINS A REMOTEJS INSTANCE. REMOVE IT BEFORE GOING LIVE");
                                break
                            }
                    }
                    onStart() {
                        this.SGPreloader && this.SGPreloader.show()
                    }
                    showSupportPopup() {
                        p.default.show()
                    }
                    createUI(e) {
                        document.addEventListener("DOMContentLoaded", (function(t) {
                            document.head.title = e.gameTitle
                        })), this.countdownTag = new _.default, v.instance.platformDefaults.useAdLoader && (this.adLoadBg = new g.default);
                        const t = (0, m.getConfigOptionAny)("lockOrientation");
                        t !== A.OrientationLock.NONE && null !== t && new E.default
                    }
                    async initAds() {
                        return await this.adManager.initialize()
                    }
                    async initIAP() {
                        await this.iapManager.initialize()
                    }
                    hookUpInterface() {
                        this.interface.once(s.InterfaceEvent.LOADED, (() => {
                            this.onStartGame()
                        })), this.interface.on(s.InterfaceEvent.LOAD_PROGRESS, (e => {
                            this.commsManager.setLoadingProgress(e.progress)
                        }))
                    }
                    async onStartGame() {
                        this.gameStarted = !0, this.emit(d.default.GAME_START);
                        const {
                            err: e
                        } = await this.commsManager.startGame();
                        e && (console.log(e), this.commsManager.checkPlatformSupport(e))
                    }
                    createInterface(e) {
                        switch (e) {
                            case r.InterfaceType.SGSDK:
                                new f.default(this.interface);
                                break;
                            case r.InterfaceType.SG_HOOKS:
                                new u.default(this.interface);
                                break;
                            case r.InterfaceType.FBInstant:
                                new l.default(this.interface), new c.default(this.interface);
                                break;
                            default:
                                console.warn("Interface not initialized: type not recognized.")
                        }
                        this.hookUpInterface()
                    }
                    applyWrapperOptions() {
                        if (void 0 !== this.config.options) {
                            const e = window.navigator.userAgent.includes("Android");
                            this.config.options.reloadOnFold && e && new h.default
                        }
                    }
                    logBuild(e) {
                        console.log("*******************************"), console.log(e.gameTitle + " v" + e.gameBuild), console.log(e), console.log("*******************************")
                    }
                    static get placementIDs() {
                        return v.instance.placementIDs
                    }
                    static get commsManager() {
                        return v.instance.commsManager
                    }
                    static get adManager() {
                        return v.instance.adManager
                    }
                    static get iapManager() {
                        return v.instance.iapManager
                    }
                    static get interface() {
                        return v.instance.interface
                    }
                    static get config() {
                        return v.instance.config
                    }
                    static get storageManager() {
                        return v.instance.storageManager
                    }
                    static get leaderboards() {
                        return v.instance.leaderboards
                    }
                    static get sdkHandler() {
                        return v.instance.sdkHandler
                    }
                    static set sdkHandler(e) {
                        v.instance.sdkHandler = e
                    }
                }
                t.default = v
            },
            939: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.OrientationLock = void 0,
                    function(e) {
                        e.PORTRAIT = "portrait", e.LANDSCAPE = "landscape", e.NONE = "none"
                    }(t.OrientationLock || (t.OrientationLock = {}))
            },
            6043: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.Default = void 0;
                class n {}
                t.Default = n, n.LANG = "en"
            },
            4853: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.InterfaceType = void 0,
                    function(e) {
                        e.SG_HOOKS = "SG_Hooks", e.SGSDK = "sgSdk", e.FBInstant = "FBInstant"
                    }(t.InterfaceType || (t.InterfaceType = {}))
            },
            388: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                class n {}
                t.default = n, n.platformConfig = "platform-config.json", n.ratingImage = "lib/assets/grac_kr_rating_all.png", n.softgamesLogo = "lib/assets/softgames_logo.png", n.supportPopupBG = "lib/assets/support_popup.png", n.supportPopupTextFrame = "lib/assets/support_text_frame.png", n.supportPopupCloseBtn = "lib/assets/support_close_button.png", n.firebaseConfig = "firebaseConfig.json"
            },
            5028: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.PlatformType = void 0,
                    function(e) {
                        e.SAMSUNG_INSTANT = "samsung", e.AZERION = "azerion", e.WEB = "web", e.MSSTART = "msstart", e.NONE = "none"
                    }(t.PlatformType || (t.PlatformType = {}))
            },
            4186: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.LinksKR = t.Links = void 0,
                    function(e) {
                        e.TOS = "https://www.softgames.com/terms-of-use/", e.PRIVACYPOLICY = "https://www.softgames.de/privacy/"
                    }(t.Links || (t.Links = {})),
                    function(e) {
                        e.TOS = "https://www.softgames.com/terms-of-use-kr/", e.PRIVACYPOLICY = "https://www.softgames.com/privacy-kr/"
                    }(t.LinksKR || (t.LinksKR = {}))
            },
            347: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(2801));
                class r {
                    static setupUIStyle() {
                        const e = document.createElement("style");
                        e.setAttribute("id", r.UI_STYLES_ELEMENT_ID), e.innerHTML = r.UI_STYLE, document.body.appendChild(e)
                    }
                }
                t.default = r, r.UI_STYLES_ELEMENT_ID = "ui-styles", r.UI_STYLE = `\n\n    @font-face {\n      font-family: Lobster;\n      src: url(lib/assets/Lobster.ttf);\n    }\n\n    a:link { text-decoration: none; color: inherit; }\n    a:visited { text-decoration: none; color: inherit; }\n    a:hover { text-decoration: none; color: inherit;}\n    a:active { text-decoration: none; color: inherit;}\n\n    .wrapper-ui {\n      color: white;\n      font-family: sans-serif;\n      text-align: center;\n      z-index: ${i.default.UI_ELEMENT_Z_INDEX};\n    }\n  \n    #${i.default.RATING_CONTAINER_ID}{\n      position: absolute;\n      right: 0;\n      top: 10px;\n      width: 20%;\n      max-width: 80px; \n      z-index: ${i.default.RATING_CONTAINER_Z_INDEX}\n    }\n\n    .orientation-screen {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      width: 100vw;\n      height: 100vh;\n      background-color: black;\n      z-index: 999;\n    }\n\n    .orientation-screen-ico {\n      position: absolute;\n      top: calc(50vh - 100px);\n      right: calc(50vw - 100px);\n    }\n  \n    .loading-screen {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      background-color: black;\n      z-index: inherit;\n    }\n  \n    .splash-screen {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      display: flex;\n      flex-direction: column;\n      background-color: white;\n      align-items: center;\n      justify-content: space-around;\n      z-index: 9999;\n    }\n  \n    .game-logo {\n      position: absolute;\n      top: calc(25vh - 30px);\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n      max-height: 20%;\n      width: auto;\n      border-radius: 16%;\n    }\n\n    .supportPopupContainer {\n      position: absolute;\n      width:320px;\n      height:251px;\n      left:0;\n      right:0;\n      top:0;\n      bottom:0;\n      margin:auto;\n      z-index: 9999;\n    }\n\n    .supportPopup {\n      display:block;\n      background-size: contain;\n      background-repeat: norepeat;\n      width:-webkit-fill-available;\n      height:-webkit-fill-available; \n      z-index: 9999; \n    }\n\n    .fullBG {\n      background-color:black;\n      width:100vw;\n      height:100vh;\n      margin:0;\n      padding:0;\n      position:absolute;\n      opacity:0.5;\n    }\n\n    .supportPopupCloseBtn {\n      position:absolute;\n      top:5px;\n      right:3px;\n      width:55px;\n      height:55px;\n    }\n\n    .termsAndConditionsBg {\n      position:absolute;\n      width:290px;\n      height:53px;\n      top:75px;\n      right:15px;\n      right:0;\n      left:0;\n      margin:auto;\n    }\n\n    .privacyPolicyBg {\n      position:absolute;\n      width:290px;\n      height:53px;\n      top:130px;\n      right:15px;\n      right:0;\n      left:0;\n      margin:auto;\n    }\n\n    .termsAndConditionsLinkText {\n      position:absolute;\n      top:85px;\n      right:0;\n      left:0;\n      margin:auto;\n      font-weight:200;\n      font-size:24px;\n      user-select:none;\n      color: #FFFFFF;\n      font-family: "Lobster";\n    }\n\n    .privacyPolicyLinkText {\n      position:absolute;\n      top:140px;\n      font-weight:200;\n      font-size:24px;\n      right:0;\n      left:0;\n      margin:auto;\n      user-select:none;\n      color: #FFFFFF;\n      font-family: "Lobster";\n    }\n\n    .playerIdText {\n      position:absolute;\n      top:195px;\n      right:0;\n      left:0;\n      margin:auto;\n      color:black;\n      font-weight:bold;\n      font-size:23px;\n      color: #875A2B;\n    }\n\n    .IAPGiftMessage {\n      position:absolute;\n      top:90px;\n      right:0;\n      left:0;\n      margin:auto;\n      color:#875A2B;\n      font-family: "Lobster";\n      font-weight:bold;\n      font-size:23px;\n    }\n\n    .IAPGiftMessage {\n      position:absolute;\n      top:100px;\n      right:0;\n      left:0;\n      margin:auto;\n      color:black;\n      font-family: "Marker Felt;\n      font-weight:bold;\n      font-size:23px;\n      user-select:none;\n      max-width:200px;\n    }\n\n    .play-button {\n      position: absolute;\n      font-style: bold;\n      font-family: Arial;\n      top: calc(60vh);\n      max-height: 20%;\n      padding: 10px;\n      padding-left: 20px;\n      padding-right: 20px;\n      text-align:center;\n      font-size: 28px;\n      color: #FFFFFF;\n      background-color: #ff8c00;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    }\n\n    .play-button-bg {\n      position:relative;\n      display:block;\n      top:20px;\n    }\n\n    .play-text {\n      font-size: 24px;\n      font-color: white;\n      user-select: none;\n    }\n\n    .game-logo-azerion {\n      position: absolute;\n      top: calc(25vh - 30px);\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n      max-height: 20%;\n      width: auto;\n      border-radius: 16%;\n    }\n\n    .background-image {\n        width:100vw;\n        height:100vh;\n        filter: blur(40px);\n    }\n\n    .progressringaz {\n      position: absolute;\n      top: calc(45vh);\n      width: ${2*i.default.SPLASH_SPINNER_SIZE_AZ}px;\n      height: ${2*i.default.SPLASH_SPINNER_SIZE_AZ}px;\n    }\n\n    .progressringaz-circle {\n      stroke: #f1672b;\n      fill: transparent;\n      transform: rotate(-90deg);\n      transition: stroke-dashoffset 0.35s;\n      transform-origin: 50% 50%;\n    }\n  \n    .progress-ring {\n      position: absolute;\n      top: calc(50vh);\n      width: ${2*i.default.SPLASH_SPINNER_SIZE}px;\n      height: ${2*i.default.SPLASH_SPINNER_SIZE}px;\n    }\n  \n    /* https://css-tricks.com/building-progress-ring-quickly/ */\n    .background-circle {\n      stroke: #f3f3f3;\n      fill: transparent;\n    }\n  \n    .progress-ring-circle {\n      stroke: #f1672b;\n      fill: transparent;\n      transform: rotate(-90deg);\n      transition: stroke-dashoffset 0.35s;\n      transform-origin: 50% 50%;\n    }\n  \n    .softgames-logo {\n      position:absolute;\n      max-height: 5%;\n      max-width: 60%;\n      bottom: 0;\n    }\n\n    .sg-logo-azerion {\n      position:absolute;\n      max-height: 5%;\n      max-width: 60%;\n      bottom: 30%;\n    }\n\n    .sg-logo-azerion-fadeOut {\n      opacity: 0;\n      transition: opacity 600ms;\n    }\n\n    .sg-logo-azerion-fadeIn {\n      opacity: 1;\n      transition: opacity 600ms;\n    }\n  \n    @media (orientation: landscape) and (max-device-height: 640px) {\n      .progress-ring {\n        transform: scale(0.8);\n      }\n  \n      .game-logo {\n        max-height: 30%;\n      }\n  \n      .softgames-logo {\n        max-height: 10%;\n      }\n    }\n  \n    \n    /* ref: https://www.w3schools.com/howto/howto_css_loader.asp */\n    .spinner {\n      position: absolute;\n      top: calc(50vh - 30px);\n      left: calc(50vw - 30px);\n  \n      border: 4px solid #f3f3f3;\n      border-top: 4px solid black;\n      border-radius: 50%;\n      width: 60px;\n      height: 60px;\n      animation: spin 1s linear infinite;\n    }\n  \n    @keyframes spin {\n      0% { transform: rotate(0deg); }\n      100% { transform: rotate(360deg); }\n    }\n  \n    .countdown-tag {\n      pointer-events: none;\n      position: absolute;\n      right: 0;\n      bottom: 80px;\n      padding: 0 20px;\n      width: 90px;\n      background-color: black;\n      opacity: 0;\n      z-index: inherit;\n    }\n  \n    /* ref: https://css-tricks.com/snippets/css/toggle-visibility-when-hiding-elements/ */\n    .countdown-tag-fadeIn {\n      opacity: 1;\n      transition: opacity 300ms;\n    }\n  \n    .countdown-tag-label {\n      font-size: 16px;\n      padding: 0 10px;\n    }\n\n    .fakeRewarded-screen {\n      position: absolute;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      display: flex;\n      flex-direction: column;\n      background-color: #000000eb;\n      align-items: center;\n      z-index: 9999;\n      display: flex;\n      flex-flow: column;\n      justify-content: center;\n    }\n\n    .FakeRewardedCountdownText {\n      font-weight: bold;\n      font-size: 20px;\n      user-select:none;\n    }\n\n    .FakeRewardedImage {\n      user-select:none;\n      background-color: white;\n      width: 300px;\n      height: 450px;\n    }\n\n    .FakeRewardedIcon {\n      background-image: url(lib/assets/closed_gift.png);\n      background-size: cover;\n      width: 250px;\n      height: 250px;\n    }\n\n    .video-icon {\n      top: 50px;\n      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n      max-height: 20%;\n      user-select:none;\n    }\n\n    .txtNoAds {\n      user-select:none;\n      font-size:24px;\n      font-weight: bold;\n    }\n\n    .rewardTxtNoAds {\n      user-select:none;\n      font-weight: bold;\n      font-size: 30px;\n    }\n\n    .FakeAdCloseBtn {\n      position:absolute;\n      background-image: url(lib/assets/button_close.png);\n      background-size: cover;\n      top: 10px;\n      right: 10px;\n      user-select:none;\n      width: 50px;\n      height: 50px;\n    }\n\n    .claimButton {\n      background-image: url(lib/assets/button_green.png);\n      background-size: cover;\n      user-select: none;\n      font-weight: bold;\n      font-size: 26px;\n      width: 231px;\n      height: 81px;\n      text-align: center;\n      vertical-align: middle;\n      line-height: 70px;\n    }\n\n    .progress {\n      --progress: 0%;\n      width: 240px;\n      height: 16px;\n      border: 1px solid #4B223E;\n      padding: 5px 5px;\n      box-shadow: 0 0 10px #aaa;\n      user-select:none;\n      border-radius: 30px;\n      margin: 15px 0;\n    }\n\n    .progress .bar {\n      width: var(--progress);\n      height: 100%;\n      background: linear-gradient(#c16fb1, #E20484, #C3013F);\n      background-repeat: repeat;\n      box-shadow: 0 0 10px 0px #d72ed2;\n      /* animation: shine 4s ease-in infinite,\n          end 1s ease-out 1 7s; */\n      border-radius: 30px;\n    }\n\n    @property --progress {\n      syntax: "<length>";\n      initial-value: 0%;\n      inherits: true;\n    }\n    \n    @keyframes shine {\n      0% { background-position: 0 0; }\n      100% { background-position: 0 50px; }\n    }\n    \n    @keyframes end {\n      0%, 100% { box-shadow: 0 0 10px 0px #6699cc; }\n      50% { box-shadow: 0 0 15px 5px #6699cc; }\n    }\n  `
            },
            2801: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                class n {}
                t.default = n, n.SAMSUNG_SPLASH_DURATION_MS = 3e3, n.SHOW_RATING_DURATION_MS = 3e3, n.RATING_CONTAINER_Z_INDEX = 1e3, n.RATING_CONTAINER_ID = "rating_container", n.SPLASH_SPINNER_SIZE = 36, n.SPLASH_SPINNER_SIZE_AZ = 18, n.SPLASH_SPINNER_STROKE = 5, n.UI_ELEMENT_Z_INDEX = 9e3, n.ADS_CONTAINER_Z_INDEX = 1e4, n.ADS_CONTAINER_ID = "ads_container", n.LOGGER_CONTAINER_Z_INDEX = 2e3, n.LOGGER_CONTAINER_ID = "debug_logger", n.DEBUG_MENU_Z_INDEX = 3e4
            },
            2665: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.AdManagerEvent = void 0,
                    function(e) {
                        e.AD_ERROR = "AD_ERROR", e.AD_LOADED = "AD_LOADED", e.AD_START = "AD_START", e.AD_SKIP = "AD_SKIP", e.AD_COMPLETE = "AD_COMPLETE", e.AD_CLOSE = "AD_CLOSE", e.INTERSTITIAL_AD_REQUESTED = "INTERSTITIAL_AD_REQUESTED", e.REWARDED_AD_REQUESTED = "REWARDED_AD_REQUESTED", e.AD_REQUESTED = "AD_REQUESTED"
                    }(t.AdManagerEvent || (t.AdManagerEvent = {}))
            },
            7540: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.AdTimerEvent = void 0,
                    function(e) {
                        e.COOLDOWN_START = "COOLDOWN_START", e.COOLDOWN_END = "COOLDOWN_END", e.LONGPLAY_TRIGGER = "LONGPLAY_TRIGGER", e.LONGPLAY_TICKER_START = "LONGPLAY_TICKER_START", e.LONGPLAY_TICKER_STOP = "LONGPLAY_TICKER_STOP", e.LONGPLAY_TICK = "LONGPLAY_TICK", e.LONGPLAY_WARN_TICK = "LONGPLAY_WARN_TICK", e.LONGPLAY_WARN = "LONGPLAY_WARN"
                    }(t.AdTimerEvent || (t.AdTimerEvent = {}))
            },
            4989: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.GameEvent = void 0,
                    function(e) {
                        e.LEVEL_START = "LEVEL_START", e.LEVEL_FINISH = "LEVEL_FINISH", e.GAME_START = "GAME_START", e.GAME_OVER = "GAME_OVER"
                    }(t.GameEvent || (t.GameEvent = {}))
            },
            9250: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.IAPEvents = void 0,
                    function(e) {
                        e.IAP_READY = "onIAPReady"
                    }(t.IAPEvents || (t.IAPEvents = {}))
            },
            9251: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.InterfaceEvent = void 0,
                    function(e) {
                        e.LOADED = "GAME_LOADED", e.LOAD_PROGRESS = "LOAD_PROGRESS"
                    }(t.InterfaceEvent || (t.InterfaceEvent = {}))
            },
            6430: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                class n {}
                t.default = n, n.SDK_INIT = "SDK_INIT", n.SPLASH_HIDDEN = "SPLASH_HIDDEN", n.REQUEST_AD = "REQUEST_AD", n.GAME_START = "GAME_START", n.GAME_PAUSE = "GAME_PAUSE", n.GAME_RESUME = "GAME_RESUME", n.READY = "WRAPPER_READY"
            },
            973: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getConfigOptionAny = t.getConfigOption = void 0;
                const i = a(n(8744));
                t.getConfigOption = function(e) {
                    return i.default.config.options && i.default.config.options[e] || !1
                }, t.getConfigOptionAny = function(e) {
                    return i.default.config.options && i.default.config.options[e] || null
                }
            },
            308: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(388)),
                    r = a(n(9797)),
                    o = a(n(8744));
                t.default = class {
                    constructor() {
                        this.loadConfig(i.default.platformConfig)
                    }
                    async loadConfig(e) {
                        // const t = await fetch(e),
                        //     n = await t.json();
                        new Promise(function (resolve, reject) {
                            var xhttp = new XMLHttpRequest();
                            xhttp.onreadystatechange = function() {
                                if (this.readyState == 4 && this.status == 200) {
                                    resolve(xhttp.response);
                                // Typical action to be performed when the document is ready:
                                }
                            };
                            xhttp.responseType = "json";
                            xhttp.open("GET", e, true);
                            xhttp.send();
                        }).then((response) => {
                            this.createWrapper(response)
                        })
                    }
                    async createWrapper(e) {
                        new r.default
                    }
                    async getLeaderboardHandler(e) {
                        let t;
                        return new Promise(((e, n) => {
                            t = window.setInterval((() => {
                                (() => {
                                    if (window.sgLeaderboards) {
                                        window.clearInterval(t);
                                        const n = window.sgLeaderboards.getHandler(o.default.config);
                                        e(n)
                                    }
                                })()
                            }), 100)
                        }))
                    }
                    async getIAPDBHandler() {
                        let e;
                        return new Promise(((t, n) => {
                            e = window.setInterval((() => {
                                (() => {
                                    if (window.sgIAP) {
                                        window.clearInterval(e);
                                        const n = window.sgIAP.getHandler(o.default.config);
                                        t(n)
                                    }
                                })()
                            }), 100)
                        }))
                    }
                }
            },
            9284: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(5028),
                    r = n(5499),
                    o = a(n(5207)),
                    s = a(n(6631)),
                    d = a(n(1662)),
                    l = a(n(8745)),
                    c = a(n(5663)),
                    u = a(n(5577)),
                    f = a(n(8744)),
                    _ = a(n(308));
                class g extends _.default {
                    async createWrapper(e) {
                        super.createWrapper(e), f.default.instance.config = e, f.default.instance.platformDefaults = new c.default, e.platform = i.PlatformType.AZERION, f.default.instance.storageManager = new l.default, f.default.instance.commsManager = new s.default, f.default.instance.adManager = new o.default, f.default.instance.placementIDs = {
                            rewarded: f.default.config.gameID,
                            interstitial: f.default.config.gameID
                        }, f.default.instance.iapManager = new d.default, f.default.instance.SGPreloader = new u.default(!1), f.default.instance.init(e), !0 === e.leaderboardSupport && (f.default.instance.leaderboards = await this.getLeaderboardHandler(r.LeaderboardTypes.FIREBASE)), f.default.instance.onStart()
                    }
                }
                t.default = g, new g
            },
            2673: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(8744)),
                    r = n(9251),
                    o = n(973),
                    s = a(n(1547)),
                    d = a(n(4599)),
                    l = a(n(2596)),
                    c = a(n(4663)),
                    u = a(n(9912));
                class f extends s.default {
                    constructor(e) {
                        super(e), this.player = new c.default, this.payments = new l.default, this.tournament = new u.default, this.context = new d.default, window.FBInstant = this
                    }
                    initializeAsync() {
                        return i.default.instance.supportedLanguages = ["en"], Promise.resolve()
                    }
                    startGameAsync() {
                        return this.interfaceRef.emit(r.InterfaceEvent.LOAD_PROGRESS, {
                            progress: 101
                        }), i.default.commsManager.startGame(), Promise.resolve()
                    }
                    setLoadingProgress(e) {
                        const t = e || 0;
                        i.default.commsManager.setLoadingProgress(t), e >= 100 && this.interfaceRef.emit(r.InterfaceEvent.LOADED)
                    }
                    onPause(e) {}
                    getLocale() {
                        return i.default.commsManager.getLanguage()
                    }
                    getPlatform() {
                        return null
                    }
                    getSDKVersion() {
                        return ""
                    }
                    logEvent(e, t, n) {
                        return null
                    }
                    quit() {}
                    async getInterstitialAdAsync(e) {
                        return Promise.resolve({
                            loadAsync: () => Promise.resolve(),
                            showAsync: () => i.default.adManager.showInterstitialAd(),
                            getPlacementID: () => i.default.placementIDs.interstitial
                        })
                    }
                    async getRewardedVideoAsync(e) {
                        return Promise.resolve({
                            loadAsync: () => Promise.resolve(),
                            showAsync: () => new Promise((async (e, t) => {
                                await i.default.adManager.showRewardedAd() ? e(!0) : (0, o.getConfigOption)("rejectFailedRewarded") ? t() : e(!1)
                            })),
                            getPlacementID: () => i.default.placementIDs.rewarded
                        })
                    }
                    async getLeaderboardAsync(e) {}
                    canCreateShortcutAsync() {
                        return Promise.resolve(!1)
                    }
                    checkCanPlayerMatchAsync() {
                        return Promise.resolve(!1)
                    }
                    createShortcutAsync() {
                        return Promise.resolve(void 0)
                    }
                    getEntryPointAsync() {
                        return Promise.resolve("")
                    }
                    getEntryPointData() {
                        return null
                    }
                    getSupportedAPIs() {
                        let e = ["getRewardedVideoAsync", "getInterstitialAdAsync", "startGameAsync"];
                        return i.default.instance.iapManager.hasIAPSupport() && (e = e.concat(["payments.purchaseAsync", "payments.getCatalogAsync", "payments.onReady"])), e
                    }
                    matchPlayerAsync(e, t, n) {
                        return Promise.resolve(void 0)
                    }
                    postSessionScore(e) {}
                    setSessionData(e) {}
                    async shareAsync(e) {
                        await i.default.commsManager.shareAsync({
                            title: e.text,
                            text: "Join me on " + i.default.config.gameTitle + "!",
                            image: e.image
                        })
                    }
                    async switchGameAsync(e, t) {
                        return await i.default.commsManager.switchGameAsync(e, t)
                    }
                    updateAsync(e) {
                        return Promise.resolve(void 0)
                    }
                }
                t.default = f
            },
            4599: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(8744));
                t.default = class {
                    getID() {
                        return i.default.config.platform
                    }
                    getType() {
                        return "SOLO"
                    }
                    isSizeBetween(e, t) {
                        return null
                    }
                    switchAsync(e) {
                        return Promise.resolve()
                    }
                    chooseAsync(e) {
                        return Promise.resolve()
                    }
                    createAsync(e) {
                        return Promise.resolve()
                    }
                    getPlayersAsync() {
                        return Promise.resolve([])
                    }
                }
            },
            2596: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(9250),
                    r = a(n(8744));
                t.default = class {
                    async getCatalogAsync() {
                        return await r.default.iapManager.getCatalogAsync()
                    }
                    async purchaseAsync(e) {
                        return await r.default.iapManager.purchaseAsync(e)
                    }
                    async getPurchasesAsync() {
                        return await r.default.iapManager.getPurchasesAsync()
                    }
                    async consumePurchaseAsync(e) {
                        return await r.default.iapManager.consumePurchaseAsync(e)
                    }
                    onReady(e) {
                        if (r.default.iapManager.ready) return e();
                        r.default.iapManager.on(i.IAPEvents.IAP_READY, (() => {
                            e && e()
                        }))
                    }
                    hasIAPSupport() {
                        return r.default.iapManager.hasIAPSupport()
                    }
                }
            },
            4663: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(8744));
                t.default = class {
                    getID() {}
                    getSignedPlayerInfoAsync(e) {
                        return Promise.resolve({
                            getPlayerID: () => "id",
                            getSignature: () => ""
                        })
                    }
                    canSubscribeBotAsync() {
                        return Promise.resolve(!1)
                    }
                    subscribeBotAsync() {
                        return Promise.resolve(void 0)
                    }
                    getName() {
                        return ""
                    }
                    getPhoto() {
                        return ""
                    }
                    async getDataAsync(e) {
                        return await i.default.storageManager.getItem()
                    }
                    setDataAsync(e) {
                        return new Promise(((t, n) => {
                            try {
                                const n = Object.entries(e);
                                for (const [e, t] of n) i.default.storageManager.setItem(e, t);
                                t()
                            } catch (e) {
                                n(e)
                            }
                        }))
                    }
                    flushDataAsync() {
                        return Promise.resolve(void 0)
                    }
                    getStatsAsync(e) {
                        return Promise.resolve(null)
                    }
                    setStatsAsync(e) {
                        return Promise.resolve(void 0)
                    }
                    incrementStatsAsync(e) {
                        return Promise.resolve(null)
                    }
                    getConnectedPlayersAsync() {
                        return Promise.resolve([{
                            getID: () => "id",
                            getPhoto: () => "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
                            getName: () => "Name"
                        }])
                    }
                }
            },
            9912: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = class {
                    async postScoreAsync() {}
                    async createAsync() {
                        return {
                            getID: () => 0,
                            getContextID: () => 0,
                            getEndTime: () => 0,
                            getTitle: () => "",
                            getPayload: () => ""
                        }
                    }
                    async getTournamentsAsync() {
                        return []
                    }
                    async joinAsync(e) {}
                    async shareAsync() {}
                }
            },
            694: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(4989),
                    r = n(9251),
                    o = a(n(8744)),
                    s = a(n(1547)),
                    d = a(n(6408)),
                    l = a(n(9854));
                class c extends s.default {
                    constructor(e) {
                        super(e), this.storage = {
                            getStorageValue: this.getStorageValue.bind(this),
                            getStorageData: this.getStorageData.bind(this),
                            isGameBotRateLimited: this.isGameBotRateLimited.bind(this),
                            save: this.save.bind(this)
                        }, this.loading = {
                            finished: this.finished.bind(this)
                        }, this.tracking = {
                            isFirstTimeUser: this.isFirstTimeUser.bind(this),
                            getGameBotSubscribed: this.getGameBotSubscribed.bind(this),
                            isGameBotRateLimited: this.isGameBotRateLimited.bind(this),
                            getRegistrationDate: this.getRegistrationDate.bind(this)
                        }, this.utils = {
                            createShortcut: this.createShortcut.bind(this),
                            waitForGBCBeingLive: this.waitForGBCBeingLive.bind(this)
                        }, this.backend = new d.default, this.xpromo = new l.default, this.sgModules = {
                            backend: this.backend,
                            xpromo: this.xpromo
                        }, window.GBCXPromo = this
                    }
                    getGameConfig() {
                        return null
                    }
                    init(e, t) {
                        return Promise.resolve()
                    }
                    getLocale() {
                        return console.log("'getLocale' has an implemented logic."), o.default.commsManager.getLanguage()
                    }
                    setLocale(e) {
                        return ""
                    }
                    prepareText(e, t) {
                        return ""
                    }
                    getLocalizableContent(e, t) {
                        return {
                            default: "",
                            localizations: {}
                        }
                    }
                    setProgress(e) {
                        const t = e || 0;
                        o.default.commsManager.setLoadingProgress(t)
                    }
                    finished(e) {
                        return this.interfaceRef.emit(r.InterfaceEvent.LOADED), this.interfaceRef.emit(r.InterfaceEvent.LOAD_PROGRESS, {
                            progress: 101
                        }), Promise.resolve()
                    }
                    async showRewardedAd(e) {
                        return console.log("'showRewardedAd' has an implemented logic."), await o.default.adManager.showRewardedAd()
                    }
                    async showInterstitialAd(e) {
                        return console.log("'showInterstitialAd' has an implemented logic."), await o.default.adManager.showInterstitialAd()
                    }
                    areRewardedAdsSupported() {
                        return o.default.config.adsConfig.rewarded
                    }
                    areInterstitialAdsSupported() {
                        return !0
                    }
                    gameStart() {
                        this.interfaceRef.emit(i.GameEvent.GAME_START)
                    }
                    gameOver(e, t) {
                        this.interfaceRef.emit(i.GameEvent.GAME_OVER, {
                            level: e,
                            score: t
                        }), this.trackScore(e, t)
                    }
                    subscribeToBot() {
                        return Promise.resolve()
                    }
                    isFirstTimeUser() {
                        return !1
                    }
                    getUserLifetime() {
                        return -1
                    }
                    getSessionOfDay() {
                        return -1
                    }
                    getGameBotSubscribed() {
                        return !1
                    }
                    isGameBotRateLimited() {
                        return !1
                    }
                    getRegistrationDate() {
                        return -1
                    }
                    isChallengeAvailable() {
                        return !1
                    }
                    initChallenge(e) {}
                    startChallengeAsync(e) {
                        return Promise.resolve()
                    }
                    updateScore(e) {}
                    getStorageValue(e, t) {
                        let n;
                        try {
                            if (n = o.default.storageManager.getItem(e), null != n) return n
                        } catch (e) {
                            console.log(`Could not restore data - ${e}`)
                        }
                        return t
                    }
                    save(e, t) {
                        return new Promise(((t, n) => {
                            try {
                                const n = Object.entries(e);
                                for (const [e, t] of n) o.default.storageManager.setItem(e, t);
                                t()
                            } catch (e) {
                                n(e)
                            }
                        }))
                    }
                    load(e) {
                        return o.default.storageManager.getItem(e)
                    }
                    getStorageData() {
                        return Object()
                    }
                    getLocalStorageKey() {
                        return ""
                    }
                    waitForGBCBeingLive(e) {
                        return Promise.resolve()
                    }
                    createShortcut() {
                        return Promise.resolve()
                    }
                }
                t.default = c
            },
            6408: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = class {
                    isConnected() {
                        return Promise.resolve(!1)
                    }
                    getUserProfile() {
                        return Promise.resolve(void 0)
                    }
                    getServerTimestamp() {
                        return Promise.resolve(-1)
                    }
                    setUserProfile({
                        handle: e,
                        locale: t
                    }) {
                        return Promise.resolve()
                    }
                    syncFriendListByPlatformPlayerId({
                        friendList: e
                    }) {
                        return Promise.resolve()
                    }
                    getFriendsScores({
                        leaderboardName: e,
                        instanceId: t
                    }) {
                        return Promise.resolve(null)
                    }
                    postScore({
                        leaderboardName: e,
                        instanceId: t,
                        score: n
                    }) {
                        return Promise.resolve()
                    }
                    executeRuntimeScript({
                        route: e,
                        args: t
                    }) {
                        return Promise.resolve(null)
                    }
                }
            },
            9854: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = class {
                    getXPromo({
                        userData: e,
                        serverTime: t
                    }) {
                        return Promise.resolve([])
                    }
                    switchGame(e) {
                        return Promise.resolve()
                    }
                    initialize({
                        gameId: e,
                        playerId: t,
                        switchFunc: n,
                        trackingFunc: a,
                        payload: i,
                        userData: r
                    }) {
                        return () => {}
                    }
                }
            },
            8471: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.SGHooksActionType = void 0,
                    function(e) {
                        e.RUN = "runGame", e.PAUSE = "pauseGame", e.UNPAUSE = "unpauseGame"
                    }(t.SGHooksActionType || (t.SGHooksActionType = {}))
            },
            9916: function(__unused_webpack_module, exports, __webpack_require__) {
                var __importDefault = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(exports, "__esModule", {
                    value: !0
                });
                const GameEvent_1 = __webpack_require__(4989),
                    InterfaceEvent_1 = __webpack_require__(9251),
                    WrapperEvent_1 = __importDefault(__webpack_require__(6430)),
                    html_1 = __webpack_require__(6456),
                    Wrapper_1 = __importDefault(__webpack_require__(8744)),
                    InterfaceBase_1 = __importDefault(__webpack_require__(1547)),
                    SGHooksActionType_1 = __webpack_require__(8471);
                class SGHooksInterface extends InterfaceBase_1.default {
                    constructor(e) {
                        super(e), Wrapper_1.default.instance.supportedLanguages = window.gameLangs, this.loadGameScripts(), window.SG_Hooks = this, window.SG = {
                            lang: Wrapper_1.default.commsManager.getLanguage()
                        }
                    }
                    start() {
                        this.interfaceRef.emit(InterfaceEvent_1.InterfaceEvent.LOAD_PROGRESS, {
                            progress: 101
                        }), Wrapper_1.default.commsManager.startGame()
                    }
                    triggerMoreGames() {}
                    getLanguage(e) {
                        return Wrapper_1.default.commsManager.getLanguage(e)
                    }
                    registerObserver(e) {
                        this.observer = e
                    }
                    setPauseHandler(e) {
                        Wrapper_1.default.commsManager.setPauseCallback(e), void 0 !== this.observer && this.observer({
                            action: SGHooksActionType_1.SGHooksActionType.PAUSE
                        })
                    }
                    setUnpauseHandler(e) {
                        Wrapper_1.default.commsManager.setResumeCallback(e), void 0 !== this.observer && this.observer({
                            action: SGHooksActionType_1.SGHooksActionType.UNPAUSE
                        })
                    }
                    setOrientationHandler(e) {
                        window.addEventListener("orientationchange", (() => {
                            e()
                        }))
                    }
                    setResizeHandler(e) {
                        window.addEventListener("resize", (() => {
                            e()
                        }))
                    }
                    async loaded() {
                        this.interfaceRef.emit(InterfaceEvent_1.InterfaceEvent.LOADED), this.interfaceRef.emit(InterfaceEvent_1.InterfaceEvent.LOAD_PROGRESS, {
                            progress: 101
                        }), void 0 !== this.observer && this.observer({
                            action: SGHooksActionType_1.SGHooksActionType.RUN
                        })
                    }
                    async triggerIncentivise(e) {
                        const t = await Wrapper_1.default.adManager.showRewardedAd();
                        e && e(t)
                    }
                    async beforePlayButtonDisplay(e) {
                        Wrapper_1.default.config.adsConfig.supportsAdPlayButton = !0;
                        const t = await Wrapper_1.default.adManager.showInterstitialAd();
                        e && e(t)
                    }
                    async playButtonPressed(e) {
                        e && e()
                    }
                    isEnabledIncentiviseButton() {
                        return !0
                    }
                    levelStarted(e, t) {
                        this.interfaceRef.emit(GameEvent_1.GameEvent.LEVEL_START, {
                            level: e
                        }), t && t()
                    }
                    levelFinished(e, t, n) {
                        this.interfaceRef.emit(GameEvent_1.GameEvent.LEVEL_FINISH, {
                            level: e
                        }), this.trackScore(e, t), n && n()
                    }
                    gameStart(e) {
                        this.interfaceRef.emit(GameEvent_1.GameEvent.GAME_START), e && e()
                    }
                    gameOver(e, t, n) {
                        this.interfaceRef.emit(GameEvent_1.GameEvent.GAME_OVER, {
                            level: e,
                            score: t
                        }), this.trackScore(e, t), n && n()
                    }
                    levelUp(e, t, n) {
                        n && n()
                    }
                    addBooster() {}
                    setStorageItem(e, t) {
                        Wrapper_1.default.storageManager.setItem(e, t)
                    }
                    getStorageItem(e) {
                        return Wrapper_1.default.storageManager.getItem(e)
                    }
                    setCloseCallback(e) {
                        Wrapper_1.default.commsManager.setResumeCallback(e)
                    }
                    async loadGameScripts() {
                        if (window.gameJS) {
                            for (const e of window.gameJS) await (0, html_1.createHTMLElement)({
                                src: e,
                                tag: "script"
                            });
                            this.initGame()
                        } else this.initGame()
                    }
                    initGame() {
                        try {
                            Wrapper_1.default.instance.isReady ? eval(window.gameOnLoadScript) : Wrapper_1.default.instance.once(WrapperEvent_1.default.READY, (() => {
                                eval(window.gameOnLoadScript)
                            }))
                        } catch (e) {}
                    }
                }
                exports.default = SGHooksInterface
            },
            5797: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(4989),
                    r = n(9251),
                    o = a(n(8744)),
                    s = a(n(1547)),
                    d = n(1010);
                class l extends s.default {
                    constructor(e) {
                        super(e), window.sgSdk = this
                    }
                    initialize(e, t, n) {
                        this.initData = t, o.default.instance.supportedLanguages = t.supportedLanguages;
                        let a = {
                            commands: {
                                supportedLanguages: t.supportedLanguages
                            },
                            config: {
                                env: {
                                    locale: o.default.commsManager.getLanguage()
                                },
                                rewarded: {
                                    enabled: !0
                                }
                            }
                        };
                        o.default.commsManager.setPauseCallback((() => {
                            this.initData.freezeGame()
                        })), o.default.commsManager.setResumeCallback((() => {
                            this.initData.unfreezeGame()
                        })), o.default.instance.supportedLanguages = t.supportedLanguages, n && n(null, a, window.sgSdk)
                    }
                    getLocale() {
                        return o.default.commsManager.getLanguage()
                    }
                    async trigger(e, t) {
                        switch (e) {
                            case d.SGSDKTriggers.START:
                                this.interfaceRef.emit(r.InterfaceEvent.LOAD_PROGRESS, {
                                    progress: 101
                                }), o.default.commsManager.startGame();
                                break;
                            case d.SGSDKTriggers.LOADING_COMPLETED:
                                this.interfaceRef.emit(r.InterfaceEvent.LOAD_PROGRESS, {
                                    progress: 101
                                }), this.interfaceRef.emit(r.InterfaceEvent.LOADED), this.initData.runGame();
                                break;
                            case d.SGSDKTriggers.LOADING_UPDATE:
                                this.interfaceRef.emit(r.InterfaceEvent.LOAD_PROGRESS, {
                                    progress: t.progressPercentage
                                }), t.progressPercentage >= 100 && this.interfaceRef.emit(r.InterfaceEvent.LOADED);
                                break;
                            case d.SGSDKTriggers.SAVE:
                                if (o.default.storageManager.setItem(t.key, t.value), t.callback) return void t.callback();
                                break;
                            case d.SGSDKTriggers.RESTORE:
                                const e = o.default.storageManager.getItem(t.key);
                                if (t.callback) return void t.callback(null, e);
                                break;
                            case d.SGSDKTriggers.REWARDED_AD:
                                const n = await o.default.adManager.showRewardedAd();
                                if (t.callback) return void t.callback(n);
                                break;
                            case d.SGSDKTriggers.BEFORE_PLAY_BUTTON_DISPLAY:
                                const a = await o.default.adManager.showInterstitialAd();
                                if (t.callback) return void t.callback(a);
                                break;
                            case d.SGSDKTriggers.LEVEL_START:
                                if (this.interfaceRef.emit(i.GameEvent.LEVEL_START, {
                                        level: t.level
                                    }), t.callback) return void t.callback();
                                break;
                            case d.SGSDKTriggers.LEVEL_FINISH:
                                if (this.interfaceRef.emit(i.GameEvent.LEVEL_FINISH, {
                                        level: t.level
                                    }), this.trackScore(t.level, t.score), t.callback) return void t.callback();
                                break;
                            case d.SGSDKTriggers.GAME_START:
                                this.interfaceRef.emit(i.GameEvent.GAME_START);
                                break;
                            case d.SGSDKTriggers.GAME_OVER:
                                if (this.interfaceRef.emit(i.GameEvent.GAME_OVER, t), this.trackScore(null, t.score), t.callback) return void t.callback();
                                break;
                            case d.SGSDKTriggers.PLAY_BUTTON_PRESSED:
                                if (t.callback) return void t.callback(!0);
                            case d.SGSDKTriggers.MORE_GAMES || d.SGSDKTriggers.GAME_TRACKING || d.SGSDKTriggers.PAGE_DISPLAY:
                        }
                    }
                }
                t.default = l
            },
            1010: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.SGSDKTriggers = void 0,
                    function(e) {
                        e.START = "start", e.LOADING_COMPLETED = "loading.completed", e.LOADING_UPDATE = "loading.update", e.SAVE = "save", e.RESTORE = "restore", e.REWARDED_AD = "rewardedAd", e.BEFORE_PLAY_BUTTON_DISPLAY = "beforePlayButtonDisplay", e.PLAY_BUTTON_PRESSED = "playButtonPressed", e.MORE_GAMES = "moreGames", e.GAME_TRACKING = "gameTracking", e.PAGE_DISPLAY = "pageDisplay", e.LEVEL_START = "levelStart", e.LEVEL_FINISH = "levelFinish", e.GAME_START = "gameStart", e.GAME_OVER = "gameOver"
                    }(t.SGSDKTriggers || (t.SGSDKTriggers = {}))
            },
            1547: function(e, t, n) {
                var a = this && this.__createBinding || (Object.create ? function(e, t, n, a) {
                        void 0 === a && (a = n);
                        var i = Object.getOwnPropertyDescriptor(t, n);
                        i && !("get" in i ? !t.__esModule : i.writable || i.configurable) || (i = {
                            enumerable: !0,
                            get: function() {
                                return t[n]
                            }
                        }), Object.defineProperty(e, a, i)
                    } : function(e, t, n, a) {
                        void 0 === a && (a = n), e[a] = t[n]
                    }),
                    i = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    r = this && this.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var t = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && a(t, e, n);
                        return i(t, e), t
                    },
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const s = n(2665),
                    d = r(n(5215)),
                    l = o(n(8744));
                t.default = class {
                    constructor(e) {
                        this.interfaceRef = e
                    }
                    getConfig() {
                        return l.default.instance.config
                    }
                    getPlayerID() {
                        return l.default.instance.getPlayerID()
                    }
                    setPauseHandler(e) {
                        l.default.commsManager.setPauseCallback(e)
                    }
                    setUnpauseHandler(e) {
                        l.default.commsManager.setResumeCallback(e)
                    }
                    setAdClosedCallback(e) {
                        l.default.adManager.on(s.AdManagerEvent.AD_CLOSE, (() => {
                            e && e()
                        }))
                    }
                    startLongPlayAdTimer() {
                        l.default.adManager.forceLongPlayStart(!0)
                    }
                    stopLongPlayAdTimer() {
                        l.default.adManager.forceLongPlayStart(!1)
                    }
                    getWrapper() {
                        return l.default.instance
                    }
                    isIAP() {
                        return l.default.instance.iapManager.hasIAPSupport()
                    }
                    deviceDectorFunctions() {
                        return d
                    }
                    showSupportPopup() {
                        l.default.instance.showSupportPopup()
                    }
                    trackScore(e, t) {
                        d.nulOrUnd(e) ? d.nulOrUnd(t) || l.default.commsManager.setScore(t) : l.default.commsManager.setScore(e)
                    }
                    setIAPGiftCallback(e) {
                        l.default.instance.iapTracker.giftManager.setIAPGiftCallback(e)
                    }
                    clearUserData() {
                        l.default.instance.storageManager.clearAllData()
                    }
                    async promptInstallAsync() {
                        return await l.default.commsManager.promptInstallAsync()
                    }
                }
            },
            5499: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.LeaderboardTypes = void 0,
                    function(e) {
                        e[e.FIREBASE = 0] = "FIREBASE", e[e.SAMSUNG = 1] = "SAMSUNG"
                    }(t.LeaderboardTypes || (t.LeaderboardTypes = {}))
            },
            5207: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(2665),
                    r = a(n(9797)),
                    o = a(n(8744)),
                    s = a(n(9167)),
                    d = a(n(1932)),
                    l = a(n(9101)),
                    c = n(2436),
                    u = n(660);
                class f extends s.default {
                    async initialize() {
                        super.initialize(), this.sdkRef = o.default.sdkHandler, l.default.i.on(u.AzerionEvent.CONTENT_PAUSE_REQUESTED, (() => {
                            this.emit(i.AdManagerEvent.AD_START)
                        }));
                        const e = [u.AzerionEvent.SDK_REWARDED_WATCH_COMPLETE, u.AzerionEvent.SDK_SKIPPED, u.AzerionEvent.CONTENT_RESUME_REQUESTED, u.AzerionEvent.SDK_GAME_START];
                        for (let t in e) l.default.i.on(e[t], (() => {
                            this.emit(i.AdManagerEvent.AD_CLOSE)
                        }));
                        return o.default.config.adsConfig.rewarded && this.preloadNextRewarded(), this.showPrerollAD = e => {
                            this.showInterstitialAd(), window.removeEventListener("pointerdown", this.showPrerollAD), e.preventDefault()
                        }, window.addEventListener("pointerdown", this.showPrerollAD), Promise.resolve()
                    }
                    async showInterstitialAd() {
                        this.emit(i.AdManagerEvent.AD_REQUESTED), this.adTimer.ready && (super.showInterstitialAd(), this.sdkRef.showAd())
                    }
                    async showRewardedAd() {
                        super.showRewardedAd(), this.emit(i.AdManagerEvent.AD_REQUESTED);
                        let e = !1;
                        const t = new Promise((async (t, n) => {
                            const a = () => {
                                    e = !0
                                },
                                o = () => {
                                    s(), e ? (this.emit(i.AdManagerEvent.AD_COMPLETE), this.emit(i.AdManagerEvent.AD_CLOSE), t(!0)) : r.default.show().then((e => {
                                        this.emit(e ? i.AdManagerEvent.AD_COMPLETE : i.AdManagerEvent.AD_ERROR), this.emit(i.AdManagerEvent.AD_CLOSE), t(e)
                                    }))
                                },
                                s = () => {
                                    l.default.i.removeListener(u.AzerionEvent.SDK_REWARDED_WATCH_COMPLETE, a), l.default.i.removeListener(u.AzerionEvent.SDK_SKIPPED, (() => {
                                        o()
                                    })), l.default.i.removeListener(u.AzerionEvent.CONTENT_RESUME_REQUESTED, o), l.default.i.removeListener(u.AzerionEvent.SDK_GAME_START, o)
                                };
                            l.default.i.on(u.AzerionEvent.SDK_REWARDED_WATCH_COMPLETE, a), l.default.i.on(u.AzerionEvent.SDK_SKIPPED, o), l.default.i.on(u.AzerionEvent.CONTENT_RESUME_REQUESTED, o), l.default.i.on(u.AzerionEvent.SDK_GAME_START, o), this.sdkRef.showAd(c.AzerionAdType.REWARDED)
                        }));
                        return this.preloadNextRewarded(), t
                    }
                    setupTimer() {
                        this.adTimer = new d.default, super.setupTimer()
                    }
                    async preloadNextRewarded() {
                        let {
                            err: e
                        } = await this.sdkRef.preloadAd(c.AzerionAdType.REWARDED);
                        e ? console.log("ADManager : Rewarded Ad could not be preloaded.") : console.log("ADManager : Rewarded Ad loaded succesfully.")
                    }
                }
                t.default = f
            },
            1932: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(5522)),
                    r = a(n(4267));
                class o extends i.default {
                    constructor() {
                        super(), this.initialize(r.default.get())
                    }
                }
                t.default = o
            },
            6631: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(6043),
                    r = a(n(6430)),
                    o = n(6456),
                    s = a(n(8744)),
                    d = a(n(9977)),
                    l = a(n(9101)),
                    c = n(660);
                class u extends d.default {
                    constructor() {
                        super(...arguments), this.hasPaused = !1
                    }
                    async initialize() {
                        window.GD_OPTIONS = {
                            gameId: s.default.config.gameID,
                            prefix: "sg_",
                            onEvent: function(e) {
                                console.log("event :: " + e.name), l.default.i.emit(e.name, e)
                            },
                            advertisementSettings: {
                                debug: !1,
                                autoplay: !1,
                                locale: "en"
                            }
                        };
                        const e = new Promise((async (e, t) => {
                            l.default.i.once(c.AzerionEvent.SDK_READY, (() => {
                                if (window.gdsdk) s.default.sdkHandler = window.gdsdk, this.sdkRef = s.default.sdkHandler, e(!0);
                                else {
                                    const t = setInterval((() => {
                                        window.gdsdk && (clearInterval(t), s.default.sdkHandler = window.gdsdk, this.sdkRef = s.default.sdkHandler, e(!0))
                                    }), 10)
                                }
                            }))
                        }));
                        return function(e, t, n) {
                            let a, i = e.getElementsByTagName(t)[0];
                            e.getElementById(n) || (a = e.createElement(t), a.id = n, a.src = "main.min.js", i.parentNode.insertBefore(a, i))
                        }(document, "script", "gamedistribution-jssdk"), l.default.i.on(c.AzerionEvent.CONTENT_PAUSE_REQUESTED, (() => {
                            this.hasPaused = !0, s.default.instance.emit(r.default.GAME_PAUSE)
                        })), l.default.i.on(c.AzerionEvent.SDK_GAME_START, (() => {
                            this.hasPaused && s.default.instance.emit(r.default.GAME_RESUME), this.hasPaused = !1
                        })), e
                    }
                    async startGame() {
                        return Promise.resolve({
                            err: null
                        })
                    }
                    getLanguage(e = []) {
                        return (0, o.getParameterByName)("lang") || i.Default.LANG
                    }
                    setLoadingProgress(e) {}
                    setPauseCallback(e) {
                        l.default.i.on(c.AzerionEvent.CONTENT_PAUSE_REQUESTED, (() => {
                            e && e()
                        }))
                    }
                    setResumeCallback(e) {
                        l.default.i.on(c.AzerionEvent.SDK_GAME_START, (() => {
                            e && e()
                        }))
                    }
                    setCloseCallback(e) {}
                    checkPlatformSupport(e) {
                        return !0
                    }
                    setScore(e) {}
                }
                t.default = u
            },
            9101: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(1075));
                class r extends i.default {
                    static get i() {
                        return r._i ? r._i : r._i = new r
                    }
                }
                t.default = r
            },
            1662: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(4171));
                class r extends i.default {
                    hasIAPSupport() {
                        return !1
                    }
                }
                t.default = r
            },
            8745: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(247));
                class r extends i.default {
                    async setCloudData(e, t) {}
                    async getCloudData(e) {
                        return null
                    }
                }
                t.default = r
            },
            4267: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                class n {
                    constructor() {
                        this.adCooldownDuration = 1e3, this.adWarningDuration = 5e3, this.startOnCooldown = !1, this.maxLongPlayAdTimerRollover = 2e3, this.prerollAd = !0
                    }
                    static get() {
                        return new n
                    }
                }
                t.default = n
            },
            2436: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.AzerionAdType = void 0,
                    function(e) {
                        e.REWARDED = "rewarded"
                    }(t.AzerionAdType || (t.AzerionAdType = {}))
            },
            5663: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = class {
                    constructor() {
                        this.useAdLoader = !0
                    }
                }
            },
            660: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                        value: !0
                    }), t.AzerionEvent = void 0,
                    function(e) {
                        e.SDK_GAME_START = "SDK_GAME_START", e.CONTENT_RESUME_REQUESTED = "CONTENT_RESUME_REQUESTED ", e.CONTENT_PAUSE_REQUESTED = "CONTENT_PAUSE_REQUESTED", e.SDK_GDPR_TRACKING = "SDK_GDPR_TRACKING", e.SDK_REWARDED_WATCH_COMPLETE = "SDK_REWARDED_WATCH_COMPLETE", e.SDK_SKIPPED = "SKIPPED", e.SDK_COMPLETE = "COMPLETE", e.SDK_READY = "SDK_READY", e.SDK_STARTED = "STARTED", e.AD_ERROR = "AD_ERROR", e.AD_IS_ALREADY_RUNNING = "AD_IS_ALREADY_RUNNING"
                    }(t.AzerionEvent || (t.AzerionEvent = {}))
            },
            5577: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(2801)),
                    r = a(n(1790));
                class o extends r.default {
                    constructor(e = !0) {
                        super(e)
                    }
                    build() {
                        super.build(), this.spinner.classList.remove("progress-ring"), this.spinner.setAttribute("class", "progressringaz"), this.circle.setAttribute("r", "" + (i.default.SPLASH_SPINNER_SIZE_AZ - i.default.SPLASH_SPINNER_STROKE / 2)), this.circle.setAttribute("cx", `${i.default.SPLASH_SPINNER_SIZE_AZ}`), this.circle.setAttribute("cy", `${i.default.SPLASH_SPINNER_SIZE_AZ}`), this.circle.setAttribute("stroke-width", `${i.default.SPLASH_SPINNER_STROKE}`), this.background.setAttribute("class", "background-circle"), this.background.setAttribute("r", "" + (i.default.SPLASH_SPINNER_SIZE_AZ - i.default.SPLASH_SPINNER_STROKE / 2)), this.background.setAttribute("cx", `${i.default.SPLASH_SPINNER_SIZE_AZ}`), this.background.setAttribute("cy", `${i.default.SPLASH_SPINNER_SIZE_AZ}`), this.background.setAttribute("stroke-width", `${i.default.SPLASH_SPINNER_STROKE}`)
                    }
                    show() {
                        window.setTimeout((() => {
                            this.hide()
                        }), 3e3), this.root.appendChild(this.bg)
                    }
                    hide() {
                        this.root.removeChild(this.bg)
                    }
                    updateProgress(e) {
                        super.updateProgress(e)
                    }
                    setupLoadedEvent() {}
                    timeLeftMS() {
                        return super.timeLeftMS()
                    }
                    destroy() {
                        super.destroy()
                    }
                    onLogoShown() {
                        this.softgamesLogo.setAttribute("class", "sg-logo-azerion")
                    }
                }
                t.default = o
            },
            9167: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(1075)),
                    r = n(2665),
                    o = n(7540),
                    s = n(4989),
                    d = n(5215),
                    l = a(n(8744));
                class c extends i.default {
                    constructor() {
                        super(), this.levelsPlayedSinceLastAd = 0
                    }
                    async initialize() {
                        this.setupTimer(), l.default.interface.on(s.GameEvent.GAME_OVER, (e => {
                            this.onGameOver(e)
                        })), l.default.interface.on(s.GameEvent.LEVEL_FINISH, (e => {
                            this.onGameOver(e)
                        }))
                    }
                    forceLongPlayStart(e) {
                        e ? this.adTimer.startLongPlayAdTimer() : this.adTimer.stopLongPlayAdTimer()
                    }
                    get longPlayTimeLeft() {
                        return this.adTimer.longPlayTimeLeft
                    }
                    showInterstitialAd() {
                        l.default.config.options && !0 === l.default.config.options.disableAllAds || (l.default.adManager.once(r.AdManagerEvent.AD_CLOSE, (() => {
                            l.default.config.adsConfig.enableLongGameplayAds && this.adTimer.startLongPlayAdTimer()
                        })), this.adTimer.stopLongPlayAdTimer(), this.emit(r.AdManagerEvent.INTERSTITIAL_AD_REQUESTED))
                    }
                    showRewardedAd() {
                        l.default.config.options && !0 === l.default.config.options.disableAllAds || this.emit(r.AdManagerEvent.REWARDED_AD_REQUESTED)
                    }
                    setupTimer() {
                        this.adTimer.on(o.AdTimerEvent.LONGPLAY_TRIGGER, (() => {
                            this.showInterstitialAd()
                        }))
                    }
                    onGameOver(e) {
                        this.shouldAdPlayOnGameEnd(e.level, e.score) && this.showInterstitialAd()
                    }
                    shouldAdPlayOnGameEnd(e, t) {
                        this.levelsPlayedSinceLastAd++;
                        const n = !l.default.config.adsConfig.supportsAdPlayButton && (e >= l.default.config.adsConfig.adFreeInitialLevels || (0, d.nulOrUnd)(e)) && this.levelsPlayedSinceLastAd > l.default.config.adsConfig.interstitialCooldownLevel;
                        return n && (this.levelsPlayedSinceLastAd = 0), n
                    }
                }
                t.default = c
            },
            5522: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(1075)),
                    r = a(n(8744)),
                    o = n(4989),
                    s = n(2665),
                    d = n(7540),
                    l = a(n(6430));
                class c extends i.default {
                    constructor() {
                        super(...arguments), this._longPlayTimeLeft = -1, this.isGameOrLevelPlaying = !1
                    }
                    get ready() {
                        return this._ready
                    }
                    get longPlayTimeLeft() {
                        return this._longPlayTimeLeft
                    }
                    initialize(e) {
                        if (this.adRules = e, this.isLongPlayTimerRunning = !1, r.default.config.adsConfig.enableLongGameplayAds) {
                            const e = () => {
                                    this.isGameOrLevelPlaying = !0, this.startLongPlayAdTimer()
                                },
                                t = () => {
                                    this.isGameOrLevelPlaying = !1, this.stopLongPlayAdTimer()
                                };
                            r.default.interface.on(o.GameEvent.GAME_START, (() => {
                                e()
                            })), r.default.interface.on(o.GameEvent.LEVEL_START, (() => {
                                e()
                            })), r.default.interface.on(o.GameEvent.GAME_OVER, (() => {
                                t()
                            })), r.default.interface.on(o.GameEvent.LEVEL_FINISH, (() => {
                                t()
                            }))
                        }
                        this._ready = !e.startOnCooldown, e.startOnCooldown && (r.default.instance.gameStarted ? this.startAdCoolDownTimer() : r.default.instance.once(l.default.GAME_START, (() => {
                            this.startAdCoolDownTimer()
                        }))), r.default.adManager.on(s.AdManagerEvent.AD_SKIP, (() => {
                            this.onAdPlayed()
                        })), r.default.adManager.on(s.AdManagerEvent.AD_ERROR, (() => {
                            this.onAdFail()
                        }))
                    }
                    startLongPlayAdTimer() {
                        !this.isLongPlayTimerRunning && this.isGameOrLevelPlaying && (console.log("LONG PLAY TIMER STARTED"), this.isLongPlayTimerRunning = !0, this.longPlayTimerID && window.clearInterval(this.longPlayTimerID), this._longPlayTimeLeft = r.default.config.adsConfig.longGameplayCooldownMS, this.longPlayTimerID = window.setInterval((() => {
                            this._longPlayTimeLeft -= 1e3, this.emit(d.AdTimerEvent.LONGPLAY_TICK), this._longPlayTimeLeft <= 0 ? (window.clearInterval(this.longPlayTimerID), this.onLongPlayTimerEnd()) : this._longPlayTimeLeft <= this.adRules.adWarningDuration && this.tickWarning()
                        }), 1e3), this.emit(d.AdTimerEvent.LONGPLAY_TICKER_START))
                    }
                    stopLongPlayAdTimer() {
                        console.log("LONG PLAY TIMER STOPPED"), window.clearTimeout(this.longPlayTimerID), this.isLongPlayTimerRunning = !1, this.emit(d.AdTimerEvent.LONGPLAY_TICKER_STOP)
                    }
                    isInterstitialAdPreloaded() {
                        return !1
                    }
                    tickWarning() {
                        this._longPlayTimeLeft == this.adRules.adWarningDuration && this.emit(d.AdTimerEvent.LONGPLAY_WARN), console.log("warning :: " + this._longPlayTimeLeft), this.emit(d.AdTimerEvent.LONGPLAY_WARN_TICK)
                    }
                    startAdCoolDownTimer() {
                        console.log("AD IS ON COOLDOWN FOR THE NEXT " + this.adRules.adCooldownDuration / 1e3 + "SECONDS."), this.adCooldownTimerID = window.setTimeout((() => {
                            this.onAdCoolDownTimerEnd()
                        }), this.adRules.adCooldownDuration), this.emit(d.AdTimerEvent.COOLDOWN_START)
                    }
                    stopAdCoolDownTimer() {
                        console.log("AD COOLDOWN ENDED."), window.clearTimeout(this.adCooldownTimerID)
                    }
                    onAdPlayed() {
                        this._ready = !1, this._longPlayTimeLeft = r.default.config.adsConfig.longGameplayCooldownMS, this.startAdCoolDownTimer()
                    }
                    onAdFail() {}
                    onAdCoolDownTimerEnd() {
                        this._ready = !0, this.emit(d.AdTimerEvent.COOLDOWN_END)
                    }
                    onLongPlayTimerEnd() {
                        this._longPlayTimeLeft = r.default.config.adsConfig.longGameplayCooldownMS, r.default.adManager.once(s.AdManagerEvent.AD_CLOSE, (() => {
                            r.default.config.adsConfig.enableLongGameplayAds && (this.stopLongPlayAdTimer(), this.startLongPlayAdTimer())
                        })), this.emit(d.AdTimerEvent.LONGPLAY_TRIGGER), console.log("LONG PLAY AD TRIGERRED"), this.isLongPlayTimerRunning = !1
                    }
                }
                t.default = c
            },
            9977: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(1075));
                class r extends i.default {
                    constructor() {
                        super(...arguments), this.isPlatformSupported = !0, this._playerID = ""
                    }
                    checkPlatformSupport(e) {
                        return this.isPlatformSupported
                    }
                    get playerID() {
                        return null
                    }
                    async promptInstallAsync() {}
                    async shareAsync(e) {}
                    async switchGameAsync(e, t) {}
                }
                t.default = r
            },
            4171: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(1075)),
                    r = a(n(8744));
                class o extends i.default {
                    constructor() {
                        super(...arguments), this.isInit = !1
                    }
                    initialize() {
                        return Promise.resolve(!0)
                    }
                    getCatalogAsync() {
                        return Promise.resolve([])
                    }
                    purchaseAsync(e) {
                        return Promise.resolve(null)
                    }
                    getPurchasesAsync() {
                        return Promise.resolve([])
                    }
                    consumePurchaseAsync(e) {
                        return Promise.resolve()
                    }
                    onReady(e) {
                        e && e()
                    }
                    hasIAPSupport() {
                        return r.default.config.inAppPurchase
                    }
                    getSupportedAPIs() {
                        return []
                    }
                    get ready() {
                        return this.isInit
                    }
                }
                t.default = o
            },
            247: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(9233),
                    r = n(973),
                    o = n(5215),
                    s = a(n(8744));
                t.default = class {
                    constructor() {
                        this.store = {
                            _lastUpdate: 0
                        }, this.maxSaveInterval = 2e3, this.canSaveNow = !0
                    }
                    async initialize(e) {
                        const t = () => {
                            const t = e.gameSlug.replace(/-/g, "_").toUpperCase();
                            this.storageKey = (0, i.v5)(`${t}_STORAGE`, "28c78f71-1c31-4331-a9ca-e51e9221b3fa")
                        };
                        s.default.config.options ? (0, o.nulOrUnd)(s.default.config.options.forceKey) ? t() : this.storageKey = s.default.config.options.forceKey : t();
                        const n = this.getLocalData(this.storageKey),
                            a = await this.getCloudData(this.storageKey);
                        this.store = a || n, console.log(`user data loaded from '${a?"cloudStorage":"localStorage"}'.`), console.log(`data: ${JSON.stringify(this.store)}`), setInterval((() => {
                            this.canSaveNow = !0
                        }), this.maxSaveInterval)
                    }
                    setItem(e, t) {
                        const n = Date.now();
                        return this.store = Object.assign(Object.assign({}, this.store), {
                            [e]: t,
                            _lastUpdate: n
                        }), this.save()
                    }
                    getItem(e) {
                        return null === this.store ? null : void 0 === e ? this.store : null != this.store[e] ? this.store[e] : null
                    }
                    getDataForKeys(e) {
                        let t = [];
                        return e.forEach((e => {
                            t.push({
                                name: e,
                                value: this.getItem(e)
                            })
                        })), t
                    }
                    clearAllData() {
                        this.store = {
                            _lastUpdate: 0
                        }, this.save()
                    }
                    async save() {
                        return !this.canSaveNow && (0, r.getConfigOption)("limitSaveCalls") ? (clearTimeout(this.retryTimeOut), void(this.retryTimeOut = setTimeout((() => {
                            this.save()
                        }), 500))) : (this.canSaveNow = !1, this.saveLocalData(this.storageKey, this.store), (() => this.setCloudData(this.storageKey, this.store))())
                    }
                    saveLocalData(e, t) {
                        const n = JSON.stringify(t);
                        localStorage.setItem(e, n)
                    }
                    getLocalData(e) {
                        const t = localStorage.getItem(e);
                        return t && JSON.parse(t)
                    }
                    async setCloudData(e, t) {}
                    async getCloudData(e) {
                        return null
                    }
                }
            },
            1840: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(2665),
                    r = n(7540),
                    o = a(n(8744)),
                    s = n(7345);
                t.default = class {
                    constructor() {
                        const e = (0, s.getUIRoot)();
                        this.tag = document.createElement("div"), this.tag.setAttribute("class", "countdown-tag"), e.appendChild(this.tag), this.textfield = document.createElement("h4"), this.textfield.setAttribute("class", "countdown-tag-label"), this.tag.appendChild(this.textfield), o.default.adManager.adTimer.on(r.AdTimerEvent.LONGPLAY_WARN, (() => {
                            this.show()
                        })), o.default.adManager.adTimer.on(r.AdTimerEvent.LONGPLAY_WARN_TICK, (() => {
                            this.update(o.default.adManager.adTimer.longPlayTimeLeft / 1e3)
                        })), o.default.adManager.on(i.AdManagerEvent.AD_START, (() => {
                            this.hide()
                        }))
                    }
                    show() {
                        this.tag.classList.toggle("countdown-tag-fadeIn", !0)
                    }
                    update(e) {
                        this.textfield.textContent = `Ad in ${e}s`, 1 === e ? window.setTimeout((() => {
                            this.hide()
                        }), 1e3) : e < 0 && this.hide()
                    }
                    hide() {
                        this.tag.classList.toggle("countdown-tag-fadeIn", !1)
                    }
                }
            },
            9797: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(8744)),
                    r = n(7345),
                    o = n(6618);
                class s {
                    constructor() {
                        this.userCanClaim = !1, this.hasClaimButton = !1, s.i ? console.error("More than one instance of the FakeRewardedAd") : s.i = this
                    }
                    build() {
                        const e = i.default.commsManager.getLanguage(),
                            t = o.TEXTS[e];
                        this.root = (0, r.getUIRoot)(), this.bg = document.createElement("div"), this.bg.setAttribute("class", "fakeRewarded-screen"), this.closeBtn = document.createElement("div"), this.closeBtn.setAttribute("class", "FakeAdCloseBtn"), this.closeBtn.addEventListener("pointerup", (() => {
                            this.onAdClosed()
                        })), this.rewardTxt = document.createElement("span"), this.rewardTxt.setAttribute("class", "rewardTxtNoAds"), this.rewardTxt.innerHTML = t.ad_load_fail_reward_in, this.image = document.createElement("div"), this.image.setAttribute("class", "FakeRewardedImage"), this.progressBar = document.createElement("div"), this.progressBar.setAttribute("class", "progress"), this.progressBarInside = document.createElement("div"), this.progressBarInside.setAttribute("class", "bar"), this.progressBar.appendChild(this.progressBarInside), this.icon = document.createElement("div"), this.icon.setAttribute("class", "FakeRewardedIcon"), this.progressText = document.createElement("span"), this.progressText.setAttribute("class", "FakeRewardedCountdownText");
                        const n = t.ad_time;
                        this.progressText.innerHTML = n.replace("[x]", "<span style='font-weight:bold;'>30</span>"), this.claimBtn = document.createElement("div"), this.claimBtn.setAttribute("class", "claimButton"), this.claimBtn.innerText = t.claim, this.claimBtn.addEventListener("pointerup", (() => {
                            this.userCanClaim ? this.onUserClaim() : this.onUserClose()
                        })), s.isBuilt = !0
                    }
                    hide() {
                        clearInterval(this.rewardTimer), this.root.removeChild(this.bg)
                    }
                    onRewardTimerEnd() {
                        this.userCanClaim = !0, this.icon.style.setProperty("background-image", "url(lib/assets/open_gift.png)"), this.removeChild(), this.bg.appendChild(this.rewardTxt), this.bg.appendChild(this.icon), this.bg.appendChild(this.claimBtn), this.hasClaimButton = !0;
                        const e = i.default.commsManager.getLanguage(),
                            t = o.TEXTS[e];
                        this.claimBtn.innerText = t.claim, this.rewardTxt.innerText = t.ad_load_fail_reward_received
                    }
                    onAdClosed() {
                        this.userCanClaim = !1, this.icon.style.setProperty("background-image", "url(lib/assets/sad_emoji.png)"), this.removeChild(), this.bg.appendChild(this.rewardTxt), this.bg.appendChild(this.icon), this.bg.appendChild(this.claimBtn), this.hasClaimButton = !0, clearInterval(this.rewardTimer);
                        const e = i.default.commsManager.getLanguage(),
                            t = o.TEXTS[e];
                        this.claimBtn.innerText = t.ok, this.rewardTxt.innerText = t.ad_load_fail_reward_closed
                    }
                    removeChild() {
                        this.bg.removeChild(this.closeBtn), this.bg.removeChild(this.rewardTxt), this.bg.removeChild(this.progressBar), this.bg.removeChild(this.progressText), this.bg.removeChild(this.icon)
                    }
                    startTimer() {
                        clearInterval(this.rewardTimer);
                        let e = s.timerDuration;
                        this.rewardTimer = setInterval((() => {
                            e--;
                            const t = String(100 - Math.round(e / s.timerDuration * 100)) + "%",
                                n = i.default.commsManager.getLanguage(),
                                a = o.TEXTS[n];
                            this.progressBarInside.style.setProperty("--progress", t);
                            const r = "<span style='font-weight:bold;'>" + e + "</span>",
                                d = a.ad_time;
                            this.progressText.innerHTML = d.replace("[x]", r), console.log(e), 0 == e && (clearInterval(this.rewardTimer), this.onRewardTimerEnd())
                        }), 1e3)
                    }
                    static async show() {
                        return await this.i.showIt()
                    }
                    async showIt() {
                        if (!i.default.instance.platformDefaults.useAdLoader) return;
                        s.isBuilt || this.build();
                        const e = i.default.commsManager.getLanguage(),
                            t = o.TEXTS[e];
                        return this.bg.appendChild(this.closeBtn), this.bg.appendChild(this.rewardTxt), this.bg.appendChild(this.progressBar), this.bg.appendChild(this.progressText), this.bg.appendChild(this.icon), this.root.appendChild(this.bg), this.icon.style.setProperty("background-image", "url(lib/assets/closed_gift.png)"), this.progressBarInside.style.setProperty("--progress", "0"), this.progressText.innerHTML = "", this.hasClaimButton && (this.bg.removeChild(this.claimBtn), this.hasClaimButton = !1), this.rewardTxt.innerHTML = t.ad_load_fail_reward_in, this.startTimer(), new Promise(((e, t) => {
                            this.onUserClose = () => {
                                this.hide(), e(!1)
                            }, this.onUserClaim = () => {
                                this.hide(), e(!0)
                            }
                        }))
                    }
                }
                t.default = s, s.isBuilt = !1, s.timerDuration = 30
            },
            9714: (e, t, n) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const a = n(5215),
                    i = n(939),
                    r = n(973),
                    o = n(7345);
                t.default = class {
                    constructor() {
                        const e = (0, r.getConfigOptionAny)("lockOrientation");
                        e !== i.OrientationLock.NONE && null !== e && (this.validOrientation = e === i.OrientationLock.LANDSCAPE ? 90 : 0, this.build())
                    }
                    build() {
                        const e = (0, o.getUIRoot)();
                        this.bg = document.createElement("div"), this.bg.setAttribute("class", "orientation-screen");
                        const t = document.createElement("img");
                        t.src = "lib/assets/rotateIcon.png", t.setAttribute("class", "orientation-screen-ico"), this.bg.appendChild(t);
                        const n = () => {
                            (0, a.getOrientation)() !== this.validOrientation ? e.contains(this.bg) || e.appendChild(this.bg) : e.contains(this.bg) && e.removeChild(this.bg)
                        };
                        window.addEventListener("orientationchange", (() => {
                            n(), setTimeout((() => {
                                n()
                            }), 500)
                        })), n(), setTimeout((() => {
                            n()
                        }), 1500)
                    }
                }
            },
            5038: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = a(n(388)),
                    r = n(6618),
                    o = a(n(8744)),
                    s = n(7345),
                    d = n(4186),
                    l = n(5215);
                class c {
                    constructor() {
                        this.isBuilt = !1
                    }
                    static show() {
                        null == c._instance && (c._instance = new c), c._instance.show()
                    }
                    build() {
                        this.isBuilt = !0, this.container = document.createElement("div"), this.container.setAttribute("class", "supportPopupContainer"), this.fullBG = document.createElement("div"), this.fullBG.setAttribute("class", "fullBG");
                        const e = document.createElement("div");
                        e.setAttribute("class", "supportPopup"), this.container.appendChild(e), e.style.backgroundImage = "url(./" + i.default.supportPopupBG + ")";
                        const t = document.createElement("img");
                        t.src = i.default.supportPopupCloseBtn, t.setAttribute("class", "supportPopupCloseBtn"), t.onclick = () => {
                            this.hide()
                        }, this.container.appendChild(t);
                        const n = document.createElement("img");
                        n.src = i.default.supportPopupTextFrame, n.setAttribute("class", "termsAndConditionsBg");
                        const a = document.createElement("img");
                        a.src = i.default.supportPopupTextFrame, a.setAttribute("class", "privacyPolicyBg");
                        const s = document.createElement("div"),
                            l = document.createElement("div");
                        let c = o.default.commsManager.getLanguage();
                        r.wrapperLanguages.includes(c) || (c = "en");
                        let u = "kr" == c ? d.LinksKR.TOS : d.Links.TOS,
                            f = "kr" == c ? d.LinksKR.PRIVACYPOLICY : d.Links.PRIVACYPOLICY;
                        s.setAttribute("class", "termsAndConditionsLinkText"), s.innerHTML = "<a target='_blank' href='" + u + "'>" + r.TEXTS[c].tos + "</a>", l.setAttribute("class", "privacyPolicyLinkText"), l.innerHTML = "<a target='_blank' href='" + f + "'>" + r.TEXTS[c].privacy + "</a>", this.playerIdText = document.createElement("div"), this.playerIdText.setAttribute("class", "playerIdText"), this.container.appendChild(n), this.container.appendChild(a), this.container.appendChild(s), this.container.appendChild(l), this.container.appendChild(this.playerIdText)
                    }
                    show() {
                        this.isBuilt || this.build();
                        const e = (0, s.getUIRoot)();
                        e.appendChild(this.fullBG), e.appendChild(this.container);
                        const t = o.default.instance.getPlayerID();
                        this.playerIdText.innerHTML = (0, l.nulOrUnd)(t) ? "" : "ID: " + t
                    }
                    hide() {
                        const e = (0, s.getUIRoot)();
                        e.contains(this.container) && e.removeChild(this.container), e.contains(this.fullBG) && e.removeChild(this.fullBG)
                    }
                }
                t.default = c, c._instance = null
            },
            6456: (e, t) => {
                function n(e) {
                    return new Promise((t => {
                        document.addEventListener(e, t)
                    }))
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getParameterByName = t.DOMEventToPromise = t.createHTMLElement = void 0, t.createHTMLElement = async function({
                    tag: e,
                    id: t,
                    src: a,
                    style: i,
                    optParent: r
                }) {
                    document.body || await n("DOMContentLoaded");
                    const o = document.createElement(e);
                    if (t && (o.id = t), i && o.setAttribute("style", i), (r || document.body).appendChild(o), a) {
                        const e = function(e) {
                            return new Promise((t => {
                                e.onload = () => {
                                    t()
                                }
                            }))
                        }(o);
                        o.setAttribute("src", a), await e
                    }
                    return o
                }, t.DOMEventToPromise = n, t.getParameterByName = function(e, t = window.location.href) {
                    e = e.replace(/[\[\]]/g, "\\$&");
                    var n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                    return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, " ")) : "" : null
                }
            },
            7345: (e, t) => {
                function n() {
                    const e = document.createElement("div");
                    return e.setAttribute("id", t.UI_ROOT_ELEMENT_ID), e.setAttribute("class", "wrapper-ui"), document.body.appendChild(e), e
                }
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getUIRoot = t.createUIRoot = t.UI_ROOT_ELEMENT_ID = void 0, t.UI_ROOT_ELEMENT_ID = "ui-root", t.createUIRoot = n, t.getUIRoot = function() {
                    return document.getElementById(t.UI_ROOT_ELEMENT_ID) || n()
                }
            },
            2915: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(2665),
                    r = a(n(8744)),
                    o = n(7345);
                t.default = class {
                    constructor() {
                        this.root = (0, o.getUIRoot)(), this.bg = document.createElement("div"), this.bg.setAttribute("class", "loading-screen");
                        const e = document.createElement("div");
                        e.setAttribute("class", "spinner"), this.bg.appendChild(e), r.default.adManager.on(i.AdManagerEvent.AD_REQUESTED, (() => {
                            this.show()
                        })), r.default.adManager.on(i.AdManagerEvent.AD_START, (() => {
                            this.hide()
                        })), r.default.adManager.on(i.AdManagerEvent.AD_CLOSE, (() => {
                            this.hide()
                        }))
                    }
                    show() {
                        this.root.appendChild(this.bg), window.setTimeout((() => {
                            this.hide()
                        }), 5e3)
                    }
                    hide() {
                        this.root.contains(this.bg) && this.root.removeChild(this.bg)
                    }
                }
            },
            1790: function(e, t, n) {
                var a = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                const i = n(7345),
                    r = a(n(2801)),
                    o = n(6456),
                    s = a(n(388)),
                    d = n(9251),
                    l = a(n(8744));
                t.default = class {
                    constructor(e = !0) {
                        this.loadingScreenDuration = 3e3, this.showRating = e, this.hideCalled = !1, this.loadingScreenRemoved = !1, this.root = (0, i.createUIRoot)(), this.build(), this.setupLoadedEvent()
                    }
                    setupLoadedEvent() {
                        l.default.interface.once(d.InterfaceEvent.LOADED, (() => {
                            this.isLoaded = !0, this.canHide && this.hide()
                        }))
                    }
                    build() {
                        this.hideTimer = window.setTimeout((() => {
                            this.canHide = !0, this.isLoaded && this.hide()
                        }), this.loadingScreenDuration), this.bg = document.createElement("div"), this.bg.setAttribute("class", "splash-screen");
                        const e = document.createElement("img");
                        e.setAttribute("src", "./Icon_512x512.png"), e.setAttribute("class", "background-image"), this.bg.appendChild(e);
                        const t = document.createElement("img");
                        t.setAttribute("src", "./Icon_512x512.png"), t.setAttribute("class", "game-logo"), this.bg.appendChild(t), this.spinner = document.createElementNS("http://www.w3.org/2000/svg", "svg"), this.spinner.setAttribute("class", "progress-ring"), this.background = document.createElementNS("http://www.w3.org/2000/svg", "circle"), this.background.setAttribute("class", "background-circle"), this.background.setAttribute("r", "" + (r.default.SPLASH_SPINNER_SIZE - r.default.SPLASH_SPINNER_STROKE / 2)), this.background.setAttribute("cx", `${r.default.SPLASH_SPINNER_SIZE}`), this.background.setAttribute("cy", `${r.default.SPLASH_SPINNER_SIZE}`), this.background.setAttribute("stroke-width", `${r.default.SPLASH_SPINNER_STROKE}`), this.spinner.appendChild(this.background), this.circle = document.createElementNS("http://www.w3.org/2000/svg", "circle"), this.circle.classList.add("progress-ring-circle"), this.circle.setAttribute("r", "" + (r.default.SPLASH_SPINNER_SIZE - r.default.SPLASH_SPINNER_STROKE / 2)), this.circle.setAttribute("cx", `${r.default.SPLASH_SPINNER_SIZE}`), this.circle.setAttribute("cy", `${r.default.SPLASH_SPINNER_SIZE}`), this.circle.setAttribute("stroke-width", `${r.default.SPLASH_SPINNER_STROKE}`), this.circle.style.animation = "spin 2s linear infinite", this.spinner.appendChild(this.circle), this.bg.appendChild(this.spinner), (0, o.createHTMLElement)({
                            tag: "img"
                        }).then((async e => {
                            e.src = s.default.softgamesLogo, e.setAttribute("class", "softgames-logo"), this.softgamesLogo = e, this.bg.append(e), this.onLogoShown()
                        })), this.showRating && (0, o.createHTMLElement)({
                            tag: "img",
                            id: r.default.RATING_CONTAINER_ID
                        }).then((async e => {
                            e.src = s.default.ratingImage, this.bg.append(e)
                        })), this.createdAt = new Date, this.circumference = 2 * (r.default.SPLASH_SPINNER_SIZE - r.default.SPLASH_SPINNER_STROKE / 2) * Math.PI, this.circle.style.strokeDasharray = `${this.circumference} ${this.circumference}`, this.circle.style.strokeDashoffset = "" + (this.circumference - 1 / 3 * this.circumference)
                    }
                    show() {
                        this.hideCalled && window.setTimeout((() => {
                            this.hide()
                        }), this.loadingScreenDuration), this.root.appendChild(this.bg)
                    }
                    hide() {
                        this.root.contains(this.bg) && !this.loadingScreenRemoved ? window.setTimeout((() => {
                            this.loadingScreenRemoved = !0, this.root.contains(this.bg) && this.root.removeChild(this.bg)
                        }), this.loadingScreenDuration) : window.setTimeout((() => {
                            this.hide()
                        }), 1e3)
                    }
                    updateProgress(e) {
                        this.circle.style.animation = "", e = Math.max(e, 30), e = Math.min(e, 100);
                        const t = this.circumference - e / 100 * this.circumference;
                        this.circle.style.strokeDashoffset = t
                    }
                    timeLeftMS() {
                        return Math.max(0, r.default.SHOW_RATING_DURATION_MS + r.default.SAMSUNG_SPLASH_DURATION_MS - ((new Date).getTime() - this.createdAt.getTime()))
                    }
                    destroy() {
                        this.hide()
                    }
                    onLogoShown() {}
                }
            },
            240: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.default = class {
                    constructor() {
                        this.oldO = window.orientation, this.oldW = window.innerWidth, this.oldH = window.innerHeight, window.addEventListener("resize", (() => {
                            window.setTimeout((() => {
                                const e = this.oldW !== window.innerWidth || this.oldH !== window.innerHeight,
                                    t = this.oldW / this.oldH == window.innerWidth / window.innerHeight;
                                this.oldW = window.innerWidth, this.oldH = window.innerHeight;
                                const n = this.oldO !== window.orientation;
                                this.oldO = window.orientation, !e || n || t || location.reload()
                            }), 500)
                        }))
                    }
                }
            },
            6618: (e, t) => {
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.wrapperLanguages = t.TEXTS = void 0, t.TEXTS = [], t.TEXTS.fr = {
                    play: "JOUER",
                    tos: "Conditions d'utilisation",
                    privacy: "Politique de confidentialité",
                    ad_failed: "Ad failed",
                    ad_load_fail: "Pub impossible à charger.",
                    ad_load_fail_free_gift: "Veuillez profiter du cadeau !",
                    ad_reward_cancelled: "Récompense de pub annulée",
                    ad_time: "DANS [x] SEC",
                    claim: "Réclamer",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.de = {
                    play: "SPIELEN",
                    tos: "Geschäftsbedingungen",
                    privacy: "Datenschutzerklärung",
                    ad_failed: "Ad failed",
                    ad_load_fail: "Die Werbung konnte nicht geladen werden.",
                    ad_load_fail_free_gift: "Du bekommst die Belohnung gratis!",
                    ad_reward_cancelled: "Werbeeinblendung abgebrochen",
                    ad_time: "IN [x] SEK",
                    claim: "Einsammeln",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.en = {
                    play: "PLAY",
                    tos: "Terms & Conditions",
                    privacy: "Privacy Policy",
                    ad_failed: "Ad failed",
                    ad_load_fail: "We haven't been able to load your Ad.",
                    ad_load_fail_free_gift: "Please, enjoy the gift for free!",
                    ad_reward_cancelled: "Ad reward cancelled",
                    ad_time: "IN [x] SEC",
                    claim: "Claim",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.es = {
                    play: "JUEGA",
                    tos: "Términos y condiciones",
                    privacy: "Política de privacidad",
                    ad_failed: "Ad failed",
                    ad_load_fail: "No hemos podido cargar tu anuncio.",
                    ad_load_fail_free_gift: "¡Por favor, disfruta tu regalo gratis!",
                    ad_reward_cancelled: "Recompensa cancelada",
                    ad_time: "EN [x] SEGUNDOS",
                    claim: "Reclamar",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.it = {
                    play: "GIOCA",
                    tos: "Termini e Condizioni",
                    privacy: "Informativa sulla privacy",
                    ad_failed: "Ad failed",
                    ad_load_fail: "Non abbiamo potuto caricare il tuo annuncio",
                    ad_load_fail_free_gift: "Goditi il regalo gratis!",
                    ad_reward_cancelled: "Ad premio annullato",
                    ad_time: "TRA [x] SEC",
                    claim: "Reclamo",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.pt = {
                    play: "JOGAR",
                    tos: "Termos e condições",
                    privacy: "Política de privacidade",
                    ad_failed: "Anúncio falhou",
                    ad_load_fail: "Não foi possível carregar seu Anúncio.",
                    ad_load_fail_free_gift: "Desfrute do presente grátis!",
                    ad_reward_cancelled: "Prémio cancelado",
                    ad_time: "EM [x] SEGS",
                    claim: "Coletar",
                    ad_load_fail_reward_in: "Recompensa em",
                    ad_load_fail_reward_received: "Recompensa \n recebida!",
                    ad_load_fail_reward_closed: "Recompensa fechada \n muito cedo!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.ru = {
                    play: "Играть",
                    tos: "Условия",
                    privacy: "Политика конфиденциальн",
                    ad_failed: "Ad failed",
                    ad_load_fail: "Мы не смогли загрузить твою рекламу.",
                    ad_load_fail_free_gift: "Получи бесплатный подарок!",
                    ad_reward_cancelled: "Награда за рекламу отменена",
                    ad_time: "ЧЕРЕЗ [x] СЕК.",
                    claim: "Забрать",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.tr = {
                    play: "OYNA",
                    tos: "Şart ve Koşullar",
                    privacy: "Gizlilik Politikası",
                    ad_failed: "Ad failed",
                    ad_load_fail: "Reklamını yükleyemedik.",
                    ad_load_fail_free_gift: "Lütfen ücretsiz hediyenin keyfini çıkar!",
                    ad_reward_cancelled: "Reklam ödülü iptal edildi",
                    ad_time: "[x] SANİYEDE",
                    claim: "Talep Et",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.nl = {
                    play: "SPEEL",
                    tos: "Voorwaarden",
                    privacy: "Privacybeleid",
                    ad_failed: "Ad failed",
                    ad_load_fail: "We konden je advertentie niet laden.",
                    ad_load_fail_free_gift: "Profiteer van de gratis beloning!",
                    ad_reward_cancelled: "Reclamebeloning geannuleerd",
                    ad_time: "OVER [x] SEC",
                    claim: "Claim",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.pl = {
                    play: "GRAJ",
                    tos: "Zasady i warunki",
                    privacy: "Polityka prywatności",
                    ad_failed: "Ad failed",
                    ad_load_fail: "Nie mogliśmy załadować reklamy.",
                    ad_load_fail_free_gift: "Skorzystaj z prezentu za darmo!",
                    ad_reward_cancelled: "Anulowano nagrodę za reklamę",
                    ad_time: "ZA [x] SEK.",
                    claim: "Odbierz",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.hi = {
                    play: "खेलें",
                    tos: "Terms & Conditions",
                    privacy: "Privacy Policy",
                    ad_failed: "Ad failed",
                    ad_load_fail: "We haven't been able to load your Ad.",
                    ad_load_fail_free_gift: "Please, enjoy the gift for free!",
                    ad_reward_cancelled: "Ad reward cancelled",
                    ad_time: "IN [x] SEC",
                    claim: "Claim",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.vi = {
                    play: "Chơi",
                    tos: "Điều khoản & Điều kiện",
                    privacy: "Chính sách Quyền riêng tư",
                    ad_failed: "Ad failed",
                    ad_load_fail: "We haven't been able to load your Ad.",
                    ad_load_fail_free_gift: "Please, enjoy the gift for free!",
                    ad_reward_cancelled: "Ad reward cancelled",
                    ad_time: "IN [x] SEC",
                    claim: "Claim",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.th = {
                    play: "เล่น",
                    tos: "Terms & Conditions",
                    privacy: "Privacy Policy",
                    ad_failed: "Ad failed",
                    ad_load_fail: "We haven't been able to load your Ad.",
                    ad_load_fail_free_gift: "Please, enjoy the gift for free!",
                    ad_reward_cancelled: "Ad reward cancelled",
                    ad_time: "IN [x] SEC",
                    claim: "Claim",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.ja = {
                    play: "プレイ",
                    tos: "利用規約",
                    privacy: "プライバシーポリシー",
                    ad_failed: "Ad failed",
                    ad_load_fail: "We haven't been able to load your Ad.",
                    ad_load_fail_free_gift: "Please, enjoy the gift for free!",
                    ad_reward_cancelled: "Ad reward cancelled",
                    ad_time: "IN [x] SEC",
                    claim: "Claim",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.kr = {
                    play: "놀다",
                    tos: "이용 약관",
                    privacy: "개인정보 보호 정책",
                    ad_failed: "Ad failed",
                    ad_load_fail: "We haven't been able to load your Ad.",
                    ad_load_fail_free_gift: "Please, enjoy the gift for free!",
                    ad_reward_cancelled: "Ad reward cancelled",
                    ad_time: "IN [x] SEC",
                    claim: "Claim",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.TEXTS.ar = {
                    play: "لعب",
                    tos: "Terms & Conditions",
                    privacy: "Privacy Policy",
                    ad_failed: "Ad failed",
                    ad_load_fail: "We haven't been able to load your Ad.",
                    ad_load_fail_free_gift: "Please, enjoy the gift for free!",
                    ad_reward_cancelled: "Ad reward cancelled",
                    ad_time: "IN [x] SEC",
                    claim: "Claim",
                    ad_load_fail_reward_in: "Reward in",
                    ad_load_fail_reward_received: "Reward \n received!",
                    ad_load_fail_reward_closed: "Reward closed \n too soon!",
                    continue: "Continue",
                    ok: "Ok"
                }, t.wrapperLanguages = ["en", "fr", "de", "es", "it", "pt", "ru", "tr", "nl", "pl", "hi", "vi", "th", "ja", "kr", "ar"]
            },
            9233: (e, t, n) => {
                var a;
                n.r(t), n.d(t, {
                    NIL: () => L,
                    parse: () => p,
                    stringify: () => c,
                    v1: () => h,
                    v3: () => T,
                    v4: () => P,
                    v5: () => D,
                    validate: () => s,
                    version: () => O
                });
                var i = new Uint8Array(16);

                function r() {
                    if (!a && !(a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return a(i)
                }
                const o = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,
                    s = function(e) {
                        return "string" == typeof e && o.test(e)
                    };
                for (var d = [], l = 0; l < 256; ++l) d.push((l + 256).toString(16).substr(1));
                const c = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = (d[e[t + 0]] + d[e[t + 1]] + d[e[t + 2]] + d[e[t + 3]] + "-" + d[e[t + 4]] + d[e[t + 5]] + "-" + d[e[t + 6]] + d[e[t + 7]] + "-" + d[e[t + 8]] + d[e[t + 9]] + "-" + d[e[t + 10]] + d[e[t + 11]] + d[e[t + 12]] + d[e[t + 13]] + d[e[t + 14]] + d[e[t + 15]]).toLowerCase();
                    if (!s(n)) throw TypeError("Stringified UUID is invalid");
                    return n
                };
                var u, f, _ = 0,
                    g = 0;
                const h = function(e, t, n) {
                        var a = t && n || 0,
                            i = t || new Array(16),
                            o = (e = e || {}).node || u,
                            s = void 0 !== e.clockseq ? e.clockseq : f;
                        if (null == o || null == s) {
                            var d = e.random || (e.rng || r)();
                            null == o && (o = u = [1 | d[0], d[1], d[2], d[3], d[4], d[5]]), null == s && (s = f = 16383 & (d[6] << 8 | d[7]))
                        }
                        var l = void 0 !== e.msecs ? e.msecs : Date.now(),
                            h = void 0 !== e.nsecs ? e.nsecs : g + 1,
                            p = l - _ + (h - g) / 1e4;
                        if (p < 0 && void 0 === e.clockseq && (s = s + 1 & 16383), (p < 0 || l > _) && void 0 === e.nsecs && (h = 0), h >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                        _ = l, g = h, f = s;
                        var m = (1e4 * (268435455 & (l += 122192928e5)) + h) % 4294967296;
                        i[a++] = m >>> 24 & 255, i[a++] = m >>> 16 & 255, i[a++] = m >>> 8 & 255, i[a++] = 255 & m;
                        var A = l / 4294967296 * 1e4 & 268435455;
                        i[a++] = A >>> 8 & 255, i[a++] = 255 & A, i[a++] = A >>> 24 & 15 | 16, i[a++] = A >>> 16 & 255, i[a++] = s >>> 8 | 128, i[a++] = 255 & s;
                        for (var E = 0; E < 6; ++E) i[a + E] = o[E];
                        return t || c(i)
                    },
                    p = function(e) {
                        if (!s(e)) throw TypeError("Invalid UUID");
                        var t, n = new Uint8Array(16);
                        return n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24, n[1] = t >>> 16 & 255, n[2] = t >>> 8 & 255, n[3] = 255 & t, n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8, n[5] = 255 & t, n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8, n[7] = 255 & t, n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8, n[9] = 255 & t, n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255, n[11] = t / 4294967296 & 255, n[12] = t >>> 24 & 255, n[13] = t >>> 16 & 255, n[14] = t >>> 8 & 255, n[15] = 255 & t, n
                    };

                function m(e, t, n) {
                    function a(e, a, i, r) {
                        if ("string" == typeof e && (e = function(e) {
                                e = unescape(encodeURIComponent(e));
                                for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n));
                                return t
                            }(e)), "string" == typeof a && (a = p(a)), 16 !== a.length) throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");
                        var o = new Uint8Array(16 + e.length);
                        if (o.set(a), o.set(e, a.length), (o = n(o))[6] = 15 & o[6] | t, o[8] = 63 & o[8] | 128, i) {
                            r = r || 0;
                            for (var s = 0; s < 16; ++s) i[r + s] = o[s];
                            return i
                        }
                        return c(o)
                    }
                    try {
                        a.name = e
                    } catch (e) {}
                    return a.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", a.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", a
                }

                function A(e) {
                    return 14 + (e + 64 >>> 9 << 4) + 1
                }

                function E(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }

                function v(e, t, n, a, i, r) {
                    return E((o = E(E(t, e), E(a, r))) << (s = i) | o >>> 32 - s, n);
                    var o, s
                }

                function w(e, t, n, a, i, r, o) {
                    return v(t & n | ~t & a, e, t, i, r, o)
                }

                function S(e, t, n, a, i, r, o) {
                    return v(t & a | n & ~a, e, t, i, r, o)
                }

                function y(e, t, n, a, i, r, o) {
                    return v(t ^ n ^ a, e, t, i, r, o)
                }

                function b(e, t, n, a, i, r, o) {
                    return v(n ^ (t | ~a), e, t, i, r, o)
                }
                const T = m("v3", 48, (function(e) {
                        if ("string" == typeof e) {
                            var t = unescape(encodeURIComponent(e));
                            e = new Uint8Array(t.length);
                            for (var n = 0; n < t.length; ++n) e[n] = t.charCodeAt(n)
                        }
                        return function(e) {
                            for (var t = [], n = 32 * e.length, a = "0123456789abcdef", i = 0; i < n; i += 8) {
                                var r = e[i >> 5] >>> i % 32 & 255,
                                    o = parseInt(a.charAt(r >>> 4 & 15) + a.charAt(15 & r), 16);
                                t.push(o)
                            }
                            return t
                        }(function(e, t) {
                            e[t >> 5] |= 128 << t % 32, e[A(t) - 1] = t;
                            for (var n = 1732584193, a = -271733879, i = -1732584194, r = 271733878, o = 0; o < e.length; o += 16) {
                                var s = n,
                                    d = a,
                                    l = i,
                                    c = r;
                                n = w(n, a, i, r, e[o], 7, -680876936), r = w(r, n, a, i, e[o + 1], 12, -389564586), i = w(i, r, n, a, e[o + 2], 17, 606105819), a = w(a, i, r, n, e[o + 3], 22, -1044525330), n = w(n, a, i, r, e[o + 4], 7, -176418897), r = w(r, n, a, i, e[o + 5], 12, 1200080426), i = w(i, r, n, a, e[o + 6], 17, -1473231341), a = w(a, i, r, n, e[o + 7], 22, -45705983), n = w(n, a, i, r, e[o + 8], 7, 1770035416), r = w(r, n, a, i, e[o + 9], 12, -1958414417), i = w(i, r, n, a, e[o + 10], 17, -42063), a = w(a, i, r, n, e[o + 11], 22, -1990404162), n = w(n, a, i, r, e[o + 12], 7, 1804603682), r = w(r, n, a, i, e[o + 13], 12, -40341101), i = w(i, r, n, a, e[o + 14], 17, -1502002290), n = S(n, a = w(a, i, r, n, e[o + 15], 22, 1236535329), i, r, e[o + 1], 5, -165796510), r = S(r, n, a, i, e[o + 6], 9, -1069501632), i = S(i, r, n, a, e[o + 11], 14, 643717713), a = S(a, i, r, n, e[o], 20, -373897302), n = S(n, a, i, r, e[o + 5], 5, -701558691), r = S(r, n, a, i, e[o + 10], 9, 38016083), i = S(i, r, n, a, e[o + 15], 14, -660478335), a = S(a, i, r, n, e[o + 4], 20, -405537848), n = S(n, a, i, r, e[o + 9], 5, 568446438), r = S(r, n, a, i, e[o + 14], 9, -1019803690), i = S(i, r, n, a, e[o + 3], 14, -187363961), a = S(a, i, r, n, e[o + 8], 20, 1163531501), n = S(n, a, i, r, e[o + 13], 5, -1444681467), r = S(r, n, a, i, e[o + 2], 9, -51403784), i = S(i, r, n, a, e[o + 7], 14, 1735328473), n = y(n, a = S(a, i, r, n, e[o + 12], 20, -1926607734), i, r, e[o + 5], 4, -378558), r = y(r, n, a, i, e[o + 8], 11, -2022574463), i = y(i, r, n, a, e[o + 11], 16, 1839030562), a = y(a, i, r, n, e[o + 14], 23, -35309556), n = y(n, a, i, r, e[o + 1], 4, -1530992060), r = y(r, n, a, i, e[o + 4], 11, 1272893353), i = y(i, r, n, a, e[o + 7], 16, -155497632), a = y(a, i, r, n, e[o + 10], 23, -1094730640), n = y(n, a, i, r, e[o + 13], 4, 681279174), r = y(r, n, a, i, e[o], 11, -358537222), i = y(i, r, n, a, e[o + 3], 16, -722521979), a = y(a, i, r, n, e[o + 6], 23, 76029189), n = y(n, a, i, r, e[o + 9], 4, -640364487), r = y(r, n, a, i, e[o + 12], 11, -421815835), i = y(i, r, n, a, e[o + 15], 16, 530742520), n = b(n, a = y(a, i, r, n, e[o + 2], 23, -995338651), i, r, e[o], 6, -198630844), r = b(r, n, a, i, e[o + 7], 10, 1126891415), i = b(i, r, n, a, e[o + 14], 15, -1416354905), a = b(a, i, r, n, e[o + 5], 21, -57434055), n = b(n, a, i, r, e[o + 12], 6, 1700485571), r = b(r, n, a, i, e[o + 3], 10, -1894986606), i = b(i, r, n, a, e[o + 10], 15, -1051523), a = b(a, i, r, n, e[o + 1], 21, -2054922799), n = b(n, a, i, r, e[o + 8], 6, 1873313359), r = b(r, n, a, i, e[o + 15], 10, -30611744), i = b(i, r, n, a, e[o + 6], 15, -1560198380), a = b(a, i, r, n, e[o + 13], 21, 1309151649), n = b(n, a, i, r, e[o + 4], 6, -145523070), r = b(r, n, a, i, e[o + 11], 10, -1120210379), i = b(i, r, n, a, e[o + 2], 15, 718787259), a = b(a, i, r, n, e[o + 9], 21, -343485551), n = E(n, s), a = E(a, d), i = E(i, l), r = E(r, c)
                            }
                            return [n, a, i, r]
                        }(function(e) {
                            if (0 === e.length) return [];
                            for (var t = 8 * e.length, n = new Uint32Array(A(t)), a = 0; a < t; a += 8) n[a >> 5] |= (255 & e[a / 8]) << a % 32;
                            return n
                        }(e), 8 * e.length))
                    })),
                    P = function(e, t, n) {
                        var a = (e = e || {}).random || (e.rng || r)();
                        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t) {
                            n = n || 0;
                            for (var i = 0; i < 16; ++i) t[n + i] = a[i];
                            return t
                        }
                        return c(a)
                    };

                function R(e, t, n, a) {
                    switch (e) {
                        case 0:
                            return t & n ^ ~t & a;
                        case 1:
                        case 3:
                            return t ^ n ^ a;
                        case 2:
                            return t & n ^ t & a ^ n & a
                    }
                }

                function I(e, t) {
                    return e << t | e >>> 32 - t
                }
                const D = m("v5", 80, (function(e) {
                        var t = [1518500249, 1859775393, 2400959708, 3395469782],
                            n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                        if ("string" == typeof e) {
                            var a = unescape(encodeURIComponent(e));
                            e = [];
                            for (var i = 0; i < a.length; ++i) e.push(a.charCodeAt(i))
                        } else Array.isArray(e) || (e = Array.prototype.slice.call(e));
                        e.push(128);
                        for (var r = e.length / 4 + 2, o = Math.ceil(r / 16), s = new Array(o), d = 0; d < o; ++d) {
                            for (var l = new Uint32Array(16), c = 0; c < 16; ++c) l[c] = e[64 * d + 4 * c] << 24 | e[64 * d + 4 * c + 1] << 16 | e[64 * d + 4 * c + 2] << 8 | e[64 * d + 4 * c + 3];
                            s[d] = l
                        }
                        s[o - 1][14] = 8 * (e.length - 1) / Math.pow(2, 32), s[o - 1][14] = Math.floor(s[o - 1][14]), s[o - 1][15] = 8 * (e.length - 1) & 4294967295;
                        for (var u = 0; u < o; ++u) {
                            for (var f = new Uint32Array(80), _ = 0; _ < 16; ++_) f[_] = s[u][_];
                            for (var g = 16; g < 80; ++g) f[g] = I(f[g - 3] ^ f[g - 8] ^ f[g - 14] ^ f[g - 16], 1);
                            for (var h = n[0], p = n[1], m = n[2], A = n[3], E = n[4], v = 0; v < 80; ++v) {
                                var w = Math.floor(v / 20),
                                    S = I(h, 5) + R(w, p, m, A) + E + t[w] + f[v] >>> 0;
                                E = A, A = m, m = I(p, 30) >>> 0, p = h, h = S
                            }
                            n[0] = n[0] + h >>> 0, n[1] = n[1] + p >>> 0, n[2] = n[2] + m >>> 0, n[3] = n[3] + A >>> 0, n[4] = n[4] + E >>> 0
                        }
                        return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, 255 & n[0], n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, 255 & n[1], n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, 255 & n[2], n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, 255 & n[3], n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, 255 & n[4]]
                    })),
                    L = "00000000-0000-0000-0000-000000000000",
                    O = function(e) {
                        if (!s(e)) throw TypeError("Invalid UUID");
                        return parseInt(e.substr(14, 1), 16)
                    }
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports
    }
    __webpack_require__.d = (e, t) => {
        for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    var __webpack_exports__ = __webpack_require__(9284)
})();