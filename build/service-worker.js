"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["http://www.live-ctrl.com/index.html","44ccada5df9d50398791090d1c10d36c"],["http://www.live-ctrl.com/static/css/main.773db532.css","0d6a6e5988a855109af9245f34c4f23a"],["http://www.live-ctrl.com/static/js/main.68da30ed.js","5d58123e4bb310c6b17661008330bbc7"],["http://www.live-ctrl.com/static/media/ajk_chara_item1.97cbef14.png","97cbef147711a966445bd8dcdbaab8de"],["http://www.live-ctrl.com/static/media/ajk_chara_item2.1a4c1d89.png","1a4c1d8991e8dc14646255ef8ecbec01"],["http://www.live-ctrl.com/static/media/android_qr.f7912be1.png","f7912be1d82974353c3de0d0c439ab5b"],["http://www.live-ctrl.com/static/media/android_qr1.7584ef8c.png","7584ef8c1e51e58d00d8fd8261d24b0e"],["http://www.live-ctrl.com/static/media/anli.227e8ecf.png","227e8ecfd8da4da003e79fedd60aa178"],["http://www.live-ctrl.com/static/media/anli2.1cbb955f.png","1cbb955fbda84a2d1877e35dc2576df0"],["http://www.live-ctrl.com/static/media/appfir.09909559.png","09909559e79e0fd629b0a8fc97583b76"],["http://www.live-ctrl.com/static/media/appfirst.d30f4803.png","d30f4803f241521f2cd99f7ff20ad25c"],["http://www.live-ctrl.com/static/media/call_topImg.15ead48e.png","15ead48ee364d8df3ae3a1c7971803bf"],["http://www.live-ctrl.com/static/media/callus_qr.7404b497.png","7404b497649a1078d0a935afc169be5d"],["http://www.live-ctrl.com/static/media/ccan.118712f5.png","118712f59939b4e4ea5f4061631cac07"],["http://www.live-ctrl.com/static/media/dfjy.e7023abb.png","e7023abbf603c54c63817c200e63b47c"],["http://www.live-ctrl.com/static/media/dians.ad8b01f6.png","ad8b01f6ae218fa667f3ee815481df4e"],["http://www.live-ctrl.com/static/media/dt1.8b2e2bb9.png","8b2e2bb95c8329c671eb02fdb8ed2da4"],["http://www.live-ctrl.com/static/media/dt2.3fdf0e62.png","3fdf0e623c529d765e7a6ec2fbe9a87b"],["http://www.live-ctrl.com/static/media/dt3.60642bd8.png","60642bd82afd2a2bb3f9bd3867dc1040"],["http://www.live-ctrl.com/static/media/experience_share_bg.98920044.png","9892004415279e7b9da5a7e217df9b38"],["http://www.live-ctrl.com/static/media/fen_750.e9e7b199.png","e9e7b19919c5fe4a69168174b951befc"],["http://www.live-ctrl.com/static/media/fensi.f8659008.png","f8659008125b8360fe39608d4befb073"],["http://www.live-ctrl.com/static/media/fir_750.4ab28615.png","4ab286159c47b0f240744480ea9b4b05"],["http://www.live-ctrl.com/static/media/fuw1.6f924fef.png","6f924fefaded1e4e0bd0991d922c30a1"],["http://www.live-ctrl.com/static/media/gaoz.0ae2e29c.png","0ae2e29c4dff898adb99020dc7f2e4aa"],["http://www.live-ctrl.com/static/media/gongneng.9b399f3f.png","9b399f3fc1255a629f6011d265108987"],["http://www.live-ctrl.com/static/media/gz_bg.a95cae28.png","a95cae28df9194c526609c18d616052f"],["http://www.live-ctrl.com/static/media/hand.8167f838.png","8167f838c0f1412da03b8e50ece05622"],["http://www.live-ctrl.com/static/media/hk.a7f94f5b.png","a7f94f5bf624a3c457c2ca75ad8cee8d"],["http://www.live-ctrl.com/static/media/hotel.6e128682.png","6e128682bf1ba4a7986f5e4df770ae38"],["http://www.live-ctrl.com/static/media/hoteld.1e117763.png","1e1177635f5046613ef9cf8eb9612d6a"],["http://www.live-ctrl.com/static/media/hotelyy.6ad0ac98.png","6ad0ac98e13d98fb5f9cd9473d82f790"],["http://www.live-ctrl.com/static/media/houtai.fd08381c.png","fd08381c7d094a0f79c06e4a52d6c070"],["http://www.live-ctrl.com/static/media/htgl.3da35844.png","3da3584421e3e0376278a5053a834121"],["http://www.live-ctrl.com/static/media/huodong.55b72957.png","55b72957c68179dc42fa5832c08d20ea"],["http://www.live-ctrl.com/static/media/ios_qr.52e7492d.png","52e7492dd177b0e2c9afdc95727f46c9"],["http://www.live-ctrl.com/static/media/ios_qr1.26342f3c.png","26342f3c10ad1c57beee191894cb8290"],["http://www.live-ctrl.com/static/media/jiance.c9891128.png","c989112879ae319e378fd1920fc423e2"],["http://www.live-ctrl.com/static/media/jm_bg.c0a2b587.png","c0a2b5876a8a1294841e92e209b481e6"],["http://www.live-ctrl.com/static/media/join.b50ffb2e.png","b50ffb2e08257c11ccb687c22cd34a45"],["http://www.live-ctrl.com/static/media/kz_bg.e92371e2.png","e92371e25d57cb8db724ba7335400e12"],["http://www.live-ctrl.com/static/media/lb2.4dbbb2b2.png","4dbbb2b2b56f4e165ffcb8b126b5754d"],["http://www.live-ctrl.com/static/media/likai.e3b5406e.png","e3b5406eb1379e024b0da96e32ff612c"],["http://www.live-ctrl.com/static/media/lingjun.ab8f5d7f.png","ab8f5d7f3c47f2c2108f78d137fe2942"],["http://www.live-ctrl.com/static/media/lock.b146b916.png","b146b916b4c78438536d16a29805a246"],["http://www.live-ctrl.com/static/media/qingchen.a2e557d2.png","a2e557d2eb0b32d66b65bb9b6d3540ab"],["http://www.live-ctrl.com/static/media/qr.17cacad7.png","17cacad75c504248e5627e1ffe6d7770"],["http://www.live-ctrl.com/static/media/qr.5a1b2da4.png","5a1b2da491ed2357df985cf4ba6e272e"],["http://www.live-ctrl.com/static/media/qrajk.ba0b7eb0.jpg","ba0b7eb0175953c0030c53e8a6653187"],["http://www.live-ctrl.com/static/media/rs2.2d895e9d.png","2d895e9dff1ae38736535e9d2aef27ba"],["http://www.live-ctrl.com/static/media/serv.d246bdec.png","d246bdec9c50e031d04459f5d25d77e8"],["http://www.live-ctrl.com/static/media/shouchi.c1216afc.png","c1216afcf48afefa70b90d2665eeb845"],["http://www.live-ctrl.com/static/media/shouji.3619bb22.png","3619bb223e0c6486001b6d9fa341d879"],["http://www.live-ctrl.com/static/media/sq.7c86028d.png","7c86028db475d5a43d1a2f8b39d45451"],["http://www.live-ctrl.com/static/media/timg.4aea9ffd.png","4aea9ffd0e716ef918ddb4398709f4e6"],["http://www.live-ctrl.com/static/media/tiy1.53752b67.png","53752b678ff59b31775faf4dec8d3916"],["http://www.live-ctrl.com/static/media/top_bg.f7d75d71.png","f7d75d71a98d2e1e44784912e265d845"],["http://www.live-ctrl.com/static/media/tuiguang.ea2d0825.png","ea2d0825bd650285b78663a3febb9e1f"],["http://www.live-ctrl.com/static/media/xiantiao.ddc2a2fb.png","ddc2a2fb30133f016a74d6b8bb24d95d"],["http://www.live-ctrl.com/static/media/xianyuan.80c22ab8.png","80c22ab863b5643ac7fb25b406ad6f21"],["http://www.live-ctrl.com/static/media/yd1.16ff0751.png","16ff07514e242182639b398af9c30cf5"],["http://www.live-ctrl.com/static/media/yingjian.636aa01c.png","636aa01c6a89922a15f898934acefad5"],["http://www.live-ctrl.com/static/media/youhuiquan-.58749f23.png","58749f23437ab71c45bf2926fce9ebd9"],["http://www.live-ctrl.com/static/media/yunshejiao.4d0568a0.png","4d0568a07bcff23715d4e5a17a1b2abf"],["http://www.live-ctrl.com/static/media/yunying.8705978f.png","8705978fd6906ed47e3b7621f2b92135"],["http://www.live-ctrl.com/static/media/yy.20cf9ed8.png","20cf9ed87023db9e0376d40c34ecbbeb"],["http://www.live-ctrl.com/static/media/zhoub.2f4e7513.png","2f4e7513a0595fe3af6e76f4ba1ec814"],["http://www.live-ctrl.com/static/media/zncp.d0fa9a93.png","d0fa9a931b8e53133f79ae67a2b5510a"],["http://www.live-ctrl.com/static/media/zngz-.978ec77a.png","978ec77a224b9266cc572c6cf94e7577"],["http://www.live-ctrl.com/static/media/znhgz.dc66bc47.png","dc66bc477e15a085fb26044ff9f2af90"],["http://www.live-ctrl.com/static/media/znhjc.4cafc384.png","4cafc384041baf7cfaf0011889298df5"],["http://www.live-ctrl.com/static/media/znhty.d0cc45ba.png","d0cc45baa5ca4bc034a74c843cd49b56"],["http://www.live-ctrl.com/static/media/znhz.8858fba5.png","8858fba535292f8a1fffa97f346def4d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=t),c.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,c,a){var i=new URL(e);return a&&i.pathname.match(a)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(c)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var c=new URL(t).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,t){var c=new URL(e);return c.hash="",c.search=c.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),c.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],c=e[1],a=new URL(t,self.location),i=createCacheKey(a,hashParamName,c,/\.\w{8}\./);return[a.toString(),i]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(c){if(!t.has(c)){var a=new Request(c,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+c+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(c,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(c){return Promise.all(c.map(function(c){if(!t.has(c.url))return e.delete(c)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,c=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,"index.html"),t=urlsToCacheKeys.has(c));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(c=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(c)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});