(this["webpackJsonparimac-10th-anniversary"]=this["webpackJsonparimac-10th-anniversary"]||[]).push([[0],{166:function(e,t,n){},167:function(e,t,n){},169:function(e,t,n){},171:function(e,t,n){"use strict";n.r(t);n(102);var o=n(27),a=n.n(o),r=n(82),i=n.n(r),c=(n(166),n(1)),s=n(2),l=n(3),u=n(4),d=(n(167),function e(){if(!(window.innerWidth>window.innerHeight)){var t=document.createElement("div");t.style.position="fixed",t.style.zIndex=100,t.style.width="calc(100vw - 20px)",t.style.height="112px",t.style.left="0px",t.style.top="0px",t.style.background="#222",t.style.color="#ffffff",t.style.fontFamily="Consolas",t.style.fontSize="10px",t.style.lineHeight="16px",t.style.overflow="hidden",t.style.padding="10px",document.body.appendChild(t),console.log=function(){var n=Array.from(arguments);t.innerHTML=e.getString(n,"#0099ff")+t.innerHTML,e.removeOverflow()},console.error=function(){var n=Array.from(arguments);t.innerHTML=e.getString(n,"#ff0000")+t.innerHTML,e.removeOverflow()},console.warn=function(){var n=Array.from(arguments);t.innerHTML=e.getString(n,"yellow")+t.innerHTML,e.removeOverflow()}}});d.getString=function(e,t){var n="";e.forEach((function(e){n+=JSON.stringify(e)+" "}));var o=document.createElement("div");return o.className="trinity-log",o.style.lineHeight="16px",o.style.color=t,o.innerHTML=n,o.outerHTML},d.removeOverflow=function(){var e=document.querySelectorAll(".trinity-log");if(null!==e)for(var t=e.length-1;t>6;t--)e[t].outerHTML=""};var f=n(0),p=n(94),m=n(83),h=n(93),y=n(84),v=n(85),b=n(86),g=n(87),x=n(95),w=n(88),j=n(33),M=n(89),E=n(96),O=n(97),S=n(98),z=n(99),L=n(100),k=n(90),T=n(101),C=n(91),R=n(34),A=n(92),P=n(11),F=(n(81),{EffectComposer:x.a,RenderPass:w.a,ShaderPass:j.a,OutlinePass:M.a,BloomPass:E.a,UnrealBloomPass:O.a,GlitchPass:S.a,SSAOPass:z.a,SSRPass:L.a,ReflectorForSSRPass:C.a,FilmPass:k.a,BokehPass:T.a}),B=(R.a,A.a,P.c,{GLTFLoader:m.a,FBXLoader:h.a,OBJLoader:y.a,MTLLoader:v.a,DDSLoader:b.a}),X={OrbitControls:g.a},I=p.a,D=f.Clock,U=function(e){var t={obj:[],str:[],num:[],fun:[],boo:[]};if(void 0===e)return t;for(var n=0;n<e.length;n++){var o=e[n],a=(typeof o).substr(0,3);void 0===t[a]&&(t[a]=[]),t[a].push(o)}return t},H=function e(){var t=U(arguments),n=t.str[0].toLowerCase(),o=arguments[1],a=t.fun[0];!1===Array.isArray(o)&&(o=[o]);var r=e.list;o.forEach((function(e){r[n]&&(void 0===r[n][e.uuid]&&(r[n][e.uuid]=[]),r[n][e.uuid].push(a))}))};H.list={click:{},mousedown:{},mouseup:{},mousemove:{},mouseenter:{},mouseleave:{}},H.down=!1,H.last={object:{}},H.listen=function(e){var t=H,n=e.renderer.domElement;n.addEventListener("mousedown",(function(n){t.down=!0;var o=H.cast(n,e);null!==o&&H.callback("mousedown",o,n)})),n.addEventListener("mousemove",(function(n){if(t.down=!1,!1===t.down){var o=H.cast(n,e);if(null===o)return;H.callback("mousemove",o,n),t.last.object.uuid!==o.object.uuid&&(H.callback("mouseleave",t.last,n),t.last=o,H.callback("mouseenter",o,n))}})),n.addEventListener("mouseup",(function(n){if(t.down){var o=H.cast(n,e);if(null===o)return;H.callback("click",o,n)}t.down=!1}))},H.cast=function(e,t){var n=t.renderer.domElement.getBoundingClientRect(),o=new f.Vector2;o.x=+e.layerX/n.width*2-1,o.y=-e.layerY/n.height*2+1;var a=new f.Raycaster;a.setFromCamera(o,t.camera);var r=K.findByType(t.scene,"Mesh",!0),i=a.intersectObjects(r);return i.length>0?i[0]:null},H.callback=function(e,t,n){var o=t.object.uuid,a=H.list[e];void 0!==a[o]&&a[o].forEach((function(e){e(t,n)}))};var W=function e(){var t=U(arguments),n=t.obj[0],o=t.fun[0]||function(){},a=t.fun[1]||function(){},r={mngr:0};function i(){var t=!0,i=0;Object.keys(n).forEach((function(e){!0===n[e].wait&&(t=!1)})),Object.values(r).forEach((function(e){i+=e})),a(i),t&&e.isBusy&&(o(n),e.isBusy=!1)}!0!==e.isBusy&&(e.isBusy=!0,Object.keys(n).forEach((function(t){var o=e.getFileType(n[t]);n[t]={wait:!0,path:n[t].split("#")[0]},n[t].type="load"+o[0]+o.substr(1).toLowerCase(),n[t].extn=o,r[n[t].path]=0})),e.manager.onProgress=function(e,t){r.mngr=t,i()},Object.keys(n).forEach((function(e){var t=n[e].type,o=n[e].path;K[t](o,(function(t){var o=n[e].extn;"MODEL"!==o&&"TEXTURE"!==o&&(r[n[e]]=1),n[e]=t,i()}))})))};W.isBusy=!1,W.manager=new f.LoadingManager,W.getFileType=function(e){var t,n="AJAX";if(e.indexOf("#")>-1){t=e.split("#")[1].toUpperCase();["MODEL","TEXTURE","IMAGE","BITMAP","AJAX"].indexOf(t)>-1&&(n=t)}else{t=e.split(".").pop().toLowerCase();["glb","gltf","fbx","obj"].indexOf(t)>-1&&(n="MODEL"),["jpg","jpeg","png","gif","bmp"].indexOf(t)>-1&&(n="TEXTURE")}return n};function q(e,t,n){var o=Math.pow(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)+Math.pow(t.z-e.z,2),.5),a=(n=o-n)/o;return{x:e.x+a*(t.x-e.x),y:e.y+a*(t.y-e.y),z:e.z+a*(t.z-e.z)}}var _=function(){var e,t,n,o,a,r,i,c,s,l=U(arguments),u=l.str[0].toUpperCase(),d=l.obj[0],p=l.obj[1],m=l.obj[2],h=l.fun[0]||function(){},y=l.str[1]||"power1",v=d.target,b=d.object.position;if(d.enabled=!1,"FIXED"===u&&(t=l.num[0]/1e3,i={x:v.x-b.x,y:v.y-b.y,z:v.z-b.z},n={x:v.x,y:v.y,z:v.z},o={ease:y,duration:t},Object.keys(p).forEach((function(e){o[e]=p[e]})),I.timeline({onComplete:function(){d.enabled=!0,d.update(),h()},onUpdate:function(){d.object.position.set(n.x,n.y,n.z),d.target.set(n.x+i.x,n.y+i.y,n.z+i.z),d.update()}}).fromTo(n,n,o)),"LOOSE"===u){e=l.num[0],t=l.num[1]/1e3,n={x:v.x,y:v.y,z:v.z},a={x:b.x,y:b.y,z:b.z},o={ease:y,duration:t},Object.keys(p).forEach((function(e){o[e]=p[e]})),r=q(a,o,e);var g=(new f.Euler).copy(d.object.rotation);c={px:a.x,py:a.y,pz:a.z,tx:n.x,ty:n.y,tz:n.z},(s={px:r.x,py:r.y,pz:r.z,tx:o.x,ty:o.y,tz:o.z}).ease=y,s.duration=t,I.timeline({onComplete:function(){d.enabled=!0,h()},onUpdate:function(){d.target.set(c.tx,c.ty,c.tz),d.object.position.set(c.px,c.py,c.pz),d.update(),d.object.rotation.copy(g)}}).fromTo(c,c,s)}"EXACT"===u&&(t=l.num[0]/1e3,n={x:v.x,y:v.y,z:v.z},a={x:b.x,y:b.y,z:b.z},r={},o={ease:y,duration:t},Object.keys(p).forEach((function(e){o[e]=p[e]})),Object.keys(m).forEach((function(e){r[e]=m[e]})),c={px:a.x,py:a.y,pz:a.z,tx:n.x,ty:n.y,tz:n.z},(s={px:r.x,py:r.y,pz:r.z,tx:o.x,ty:o.y,tz:o.z}).ease=y,s.duration=t,I.timeline({onComplete:function(){d.enabled=!0,h()},onUpdate:function(){d.target.set(c.tx,c.ty,c.tz),d.object.position.set(c.px,c.py,c.pz),d.update()}}).fromTo(c,c,s))};_.captureSpot=function(){var e=U(arguments),t=e.obj[0];window.addEventListener("dblclick",(function(){console.log(["TARGET"]),console.log("x ==> ",t.target.x),console.log("y ==> ",t.target.y),console.log("z ==> ",t.target.z),console.log(["CAMERA"]),console.log("x ==> ",t.object.position.x),console.log("y ==> ",t.object.position.y),console.log("z ==> ",t.object.position.z)}))};var N=function e(){var t,n,o=U(arguments),a=o.obj[0],r=o.boo[0];1===o.obj.length&&2===o.num.length?(t=a.animations[o.num[0]],n=o.num[1]):1===o.num.length&&1===o.str.length?(t=f.AnimationClip.findByName(a.animations,o.str[0]),n=o.num[0]):0===o.str.length&&2===o.obj.length?(t=o.obj[1],n=o.num[0]):(t=a.animations[0],n=o.num[0]);var i,c,s=e.animations,l=a.uuid;if(void 0===n&&(n=1),void 0!==r&&s[l])return s[l].plays=r,!1===r?s[l].clock.stop():s[l].clock.start(),void(s[l].speed=n);s[l]?((i=s[l]).speed=n,c=i.mixer.clipAction(t)):c=(i=s[l]={mixer:new f.AnimationMixer(a),speed:n,plays:!0,clock:new D}).mixer.clipAction(t),i.clock.start(),c.play()};N.animations={},N.animate=function(){requestAnimationFrame(N.animate),Object.values(N.animations).forEach((function(e){e.plays&&e.mixer.update(e.clock.getDelta()*e.speed)}))},N.animate();var G=n(9),Z=n.n(G),J=n(15),V=window.XRWebGLLayer,Y={XR8:window.XR8,XRExtras:window.XRExtras,WebXR:{}};Y.WebXR.checkAvailability=function(){var e=Object(J.a)(Z.a.mark((function e(t,n){var o,a,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=navigator.xr,a=navigator.xr.isSessionSupported,e.next=4,navigator.xr.isSessionSupported("immersive-ar");case 4:r=e.sent,o&&a&&r?t():n();case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y.WebXR.requestSession=function(){var e=Object(J.a)(Z.a.mark((function e(t,n){var o;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test","dom-overlay"],domOverlay:{root:t}});case 3:o=e.sent,Y.WebXR.configureCanvas(t,o,n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t,n){return e.apply(this,arguments)}}(),Y.WebXR.configureCanvas=function(){var e=Object(J.a)(Z.a.mark((function e(t,n,o){var a,r;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=document.createElement("canvas"),r=a.getContext("webgl",{xrCompatible:!0}),n.updateRenderState({baseLayer:new V(n,r)}),e.next=5,Y.WebXR.configureScene(t,n,a,r,o);case 5:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),Y.WebXR.configureScene=function(){var e=Object(J.a)(Z.a.mark((function e(t,n,o,a,r){var i,c,s;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=new f.Scene,(c=new f.PerspectiveCamera).matrixAutoUpdate=!1,s=new f.WebGLRenderer({alpha:!0,preserveDrawingBuffer:!0,canvas:o,context:a}),e.next=6,Y.WebXR.configureLights(t,n,o,a,i,c,s,r);case 6:case"end":return e.stop()}}),e)})));return function(t,n,o,a,r){return e.apply(this,arguments)}}(),Y.WebXR.configureLights=function(){var e=Object(J.a)(Z.a.mark((function e(t,n,o,a,r,i,c,s){var l,u,d,p;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=new f.AmbientLight(16777215,.5),(u=new f.DirectionalLight(16777215,.3)).position.set(10,15,10),u.castShadow=!0,(d=new f.PlaneGeometry(2e3,2e3)).rotateX(-Math.PI/2),(p=new f.Mesh(d,new f.ShadowMaterial({color:1118481,opacity:.2}))).name="shadowMesh",p.receiveShadow=!0,p.position.y=1e4,r.add(p),r.add(l),r.add(u),e.next=15,Y.WebXR.configureReferenceSpaces(t,n,o,a,r,i,c,s);case 15:case"end":return e.stop()}}),e)})));return function(t,n,o,a,r,i,c,s){return e.apply(this,arguments)}}(),Y.WebXR.configureReferenceSpaces=function(){var e=Object(J.a)(Z.a.mark((function e(t,n,o,a,r,i,c,s){var l,u,d;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.requestReferenceSpace("local");case 2:return l=e.sent,e.next=5,n.requestReferenceSpace("viewer");case 5:return u=e.sent,e.next=8,n.requestHitTestSource({space:u});case 8:return d=e.sent,e.next=11,s({element:t,session:n,canvas:o,context:a,scene:r,camera:i,renderer:c,localReferenceSpace:l,viewerSpace:u,hitTestSource:d});case 11:case"end":return e.stop()}}),e)})));return function(t,n,o,a,r,i,c,s){return e.apply(this,arguments)}}(),Y.WebXR.renderLoop=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},n=e.session,o=e.scene,a=e.camera,r=e.renderer,i=e.context,c=e.localReferenceSpace,s=e.hitTestSource;function l(e,u){n.requestAnimationFrame(l);var d=n.renderState.baseLayer.framebuffer;i.bindFramebuffer(i.FRAMEBUFFER,d);var f=u.getViewerPose(c);if(f){var p=f.views[0],m=n.renderState.baseLayer.getViewport(p);r.setSize(m.width,m.height),a.matrix.fromArray(p.transform.matrix),a.projectionMatrix.fromArray(p.projectionMatrix),a.updateMatrixWorld(!0);var h=u.getHitTestResults(s);if(h.length>0){var y=h[0].getPose(c);t(y)}r.render(o,a)}}n.requestAnimationFrame(l)};var K={checkControls:function(e){var t=e.target,n=e.object.position;window.addEventListener("keydown",(function(e){if("`"===e.key){var o="";o+="{\n",o+="  target : { x : "+t.x+", y : "+t.y+", z : "+t.z+" },\n",o+="  camera : { x : "+n.x+", y : "+n.y+", z : "+n.z+" }\n",o+="}",console.log(o)}}))},checkTransform:function(e){var t=e.position,n=e.rotation,o=e.scale;window.addEventListener("keydown",(function(a){if("`"===a.key){var r="";r+="{\n",r+="  position : { x : "+t.x+", y : "+t.y+", z : "+t.z+" },\n",r+="  rotation : { x : "+n.x+", y : "+n.y+", z : "+n.z+" },\n",r+="  scale    : { x : "+o.x+", y : "+o.y+", z : "+o.z+" }\n",r+="}",console.log(r)}var i=.001;a.shiftKey&&(i=.01,a.preventDefault()),a.ctrlKey&&(i=.1,a.preventDefault()),"+"===a.key&&e.scale.set(e.scale.x+i,e.scale.y+i,e.scale.z+i),"-"===a.key&&e.scale.set(e.scale.x-i,e.scale.y-i,e.scale.z-i),"*"===a.key&&e.rotation.set(e.rotation.x,e.rotation.y+Math.PI/4,e.rotation.z),"/"===a.key&&e.rotation.set(e.rotation.x,e.rotation.y-Math.PI/4,e.rotation.z),"7"===a.key&&e.position.set(e.position.x,e.position.y-i,e.position.z),"9"===a.key&&e.position.set(e.position.x,e.position.y+i,e.position.z),"2"===a.key&&(e.position.z+=i),"8"===a.key&&(e.position.z-=i),"6"===a.key&&(e.position.x+=i),"4"===a.key&&(e.position.x-=i)}))},checkObjects:function(e,t){K.findByType(e,"Mesh",!0).forEach((function(e){K.createEvent("click",e,(function(e){void 0!==t?console.log(e.object[t],e.object,e):console.log(e.object,e)}))}))},checkConsole:d,tweenAnimation:N,createScene:function(){var e=U(arguments),t=e.num[0]||window.innerWidth,n=e.num[1]||window.innerHeight,o=e.str[0],a=e.boo[0],r=new f.Scene,i=new f.PerspectiveCamera(45,t/n,.01,1e3),c=new f.WebGLRenderer({antialias:!0,alpha:!0}),s=new X.OrbitControls(i,c.domElement),l=K.createLight("AMBIENT","#FFF");if(r.add(l),c.setSize(t,n),void 0!==o&&(r.background=new f.Color(o)),s.enablePan=!1,s.autoRotate=!1,s.autoRotateSpeed=.8,s.enableDamping=!0,s.dampingFactor=.1,K.setupControls("ORBIT",s,{x:0,y:0,z:0},{x:0,y:0,z:5}),!1!==a){var u=function e(){requestAnimationFrame(e),s.update(),c.render(r,i)};u()}var d={scene:r,camera:i,renderer:c,controls:s,light:l};return H.listen(d),d},createEffect:function(){var e,t=U(arguments),n=t.str,o=t.obj[0],a=t.obj[1],r=t.obj[2],i=t.obj[3]||{},c=o.domElement.width,s=o.domElement.height,l=new F.EffectComposer(o),u=new F.RenderPass(a,r);l.addPass(u);var d={composer:l,renderPass:u};return n.forEach((function(t){if("OUTLINE"===(t=t.toUpperCase()))(e=new F.OutlinePass(new f.Vector2(c,s),a,r)).edgeStrength=3,e.visibleEdgeColor.set("#FFFFFF");else if("BLOOM"===t)e=new F.UnrealBloomPass;else if("GLITCH"===t)e=new F.GlitchPass;else if("SSAO"===t)(e=new F.SSAOPass(a,r,c,s)).kernelRadius=.2,e.minDistance=.002,e.maxDistance=.1;else if("SSR"===t)e=new F.SSRPass(u,a,r,c,s);else{if("BOKEH"!==t)return;e=new F.BokehPass(a,r,{focus:4,aperture:1e-4,maxblur:.01,width:c,height:s})}Object.keys(i).forEach((function(t){void 0!==i[t]&&("visibleEdgeColor"===t?e[t].set(i[t]):e[t]=i[t])})),l.addPass(e)})),d},createEvent:H,createObject:function(){var e=U(arguments),t=e.obj[0]||{},n=e.obj[1],o=["Box","Circle","Cone","Cylinder","Dodecahedron","Edges","Extrude","Icosahedron","Lathe","Octahedron","Parametric","Plane","Polyhedron","Ring","Shape","Sphere","Tetrahedron","Text","Torus","TorusKnot","Tube","Wireframe"],a=["LineBasic","LineDashed","MeshBasic","MeshDepth","MeshDistance","MeshLambert","MeshMatcap","MeshNormal","MeshPhong","MeshPhysical","MeshStandard","MeshToon","Points","RawShader","Shader","Shadow","Sprite"],r=null,i=null;if(Object.keys(t).forEach((function(e){o.indexOf(e)>-1&&(r=e),a.indexOf(e)>-1&&(i=e)})),null!==r&&null!==i){var c,s=Object.values(t[r]);r+="Geometry",0===s.length?c=new f[r]:1===s.length?c=new f[r](s[0]):2===s.length?c=new f[r](s[0],s[1]):3===s.length?c=new f[r](s[0],s[1],s[2]):4===s.length?c=new f[r](s[0],s[1],s[2],s[3]):5===s.length&&(c=new f[r](s[0],s[1],s[2],s[3],s[5]));var l=new f[i+"Material"](t[i]),u=new f.Mesh(c,l);return n&&(u=K.setupObject(u,n)),u}},createLight:function(){var e,t=U(arguments),n=t.str[0]||"DIRECT",o=t.str[1]||"#FFF",a=t.num[0]||1,r=t.num[1],i=t.obj[0],c=t.obj[1],s=t.boo[0];return o=new f.Color(o).getHex(),"DIRECT"===(n=n.toUpperCase())?e=new f.DirectionalLight(o,a):"AMBIENT"===n?e=new f.AmbientLight(o,a):"POINT"===n?e=new f.PointLight(o,a):"HEMISPHERE"===n?e=new f.HemisphereLight(o,a):"SPOT"===n&&(e=new f.SpotLight(o)),void 0!==r&&(e.power=r),void 0!==i&&e.position.set(i.x,i.y,i.z),void 0!==c&&e.rotation.set(c.x,c.y,c.z),void 0!==c&&e.rotation.set(c.x,c.y,c.z),void 0!==s&&(e.visible=s),e},createParticles:function(){var e=U(arguments),t=e.str[0]||"",n=e.str[1]||"",o=e.num[0],a=e.num[1],r=e.num[2],i=e.num[3],c=e.num[4],s=e.num[5],l=e.num[6]||1,u=e.num[7]||1,d=e.num[8]||1,f=e.obj;function p(e,t){return Math.random()*(Math.max(e,t)-Math.min(e,t))+Math.min(e,t)}function m(){return f[Math.floor(Math.random()*f.length)]}o=Math.min(o,a),a=Math.max(o,a),r=Math.min(r,i),i=Math.max(r,i),c=Math.min(c,s),s=Math.max(c,s),t=t.toUpperCase(),n=n.toUpperCase();for(var h=[],y=o;y<=a;y+=l)for(var v=r;v<=i;v+=u)for(var b=c;b<=s;b+=d){var g=y,x=v,w=b;t.indexOf("X")>-1&&(g=p(o,a)),t.indexOf("Y")>-1&&(x=p(r,i)),t.indexOf("Z")>-1&&(w=p(c,s));var j=0,M=0,E=0;n.indexOf("X")>-1&&(j=Math.random()),n.indexOf("Y")>-1&&(M=Math.random()),n.indexOf("Z")>-1&&(E=Math.random());var O=m(),S=O.clone();S.material=O.material.clone(),S.position.set(g,x,w),S.rotation.set(j,M,E),h.push(S)}return h},evalPoints:function(){var e,t,n,o=U(arguments),a=o.str[0].toUpperCase();if("SCREEN"===a){e=o.obj[0],t=o.obj[1],n=o.obj[2];var r=new f.Vector3;(r=r.setFromMatrixPosition(e.matrixWorld)).project(n);var i=t.domElement.width/2,c=t.domElement.height/2;return r.x=+r.x*i+i,r.y=-r.y*c+c,r.z=0,r}},findAll:function(){var e=U(arguments),t=e.obj[0],n=[];function o(e){if(n.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)o(e.children[t])}return o(t),n},findById:function(){var e=U(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function r(e){if(e.uuid===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByName:function(){var e=U(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function r(e){if(e.name===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByType:function(){var e=U(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function r(e){if(e.type===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByProperty:function(){var e=U(arguments),t=e.obj[0],n=e.obj[1],o=e.boo[0],a=[];function r(e){if(Object.keys(n).forEach((function(t){e[t]===n[t]&&a.push(e)})),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByMaterialName:function(){var e=U(arguments),t=e.obj[0],n=e.str[0],o=e.boo[0],a=[];function r(e){if(void 0!==e.material&&e.material.name===n&&a.push(e),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},findByMaterialProperty:function(){var e=U(arguments),t=e.obj[0],n=e.obj[1],o=e.boo[0],a=[];function r(e){if(void 0!==e.material&&Object.keys(n).forEach((function(t){e.material[t]===n[t]&&a.push(e)})),void 0!==e.children)for(var t=0;t<e.children.length;t++)r(e.children[t])}return r(t),o?a:a[0]},loadAll:W,loadAjax:function(){var e=U(arguments),t=e.str[0],n=e.obj[0]||{a:1},o=e.fun[0]||function(){};-1===t.indexOf("?")?t+="?dnjs_ajax_t="+Date.now():t+="&dnjs_ajax_t="+Date.now();var a=new FormData;Object.keys(n).forEach((function(e){var t=n[e];"object"===typeof t&&(t=JSON.stringify(t)),a.append(e,t)}));var r=new XMLHttpRequest;r.open("GET",t,!0),r.onreadystatechange=function(){4===this.readyState&&200===this.status&&null!=o&&o(this.responseText)},r.send(a)},loadImage:function(){var e=U(arguments),t=e.str[0],n=e.fun[0]||function(){},o=new Image;o.crossOrigin="anonymous",o.onload=function(){n(o)},o.src=t},loadBitmap:function(){var e=U(arguments),t=e.str[0],n=e.fun[0]||function(){};(new f.ImageBitmapLoader).load(t,(function(e){n(e)}))},loadModel:function(){var e,t=U(arguments),n=t.str[0],o=t.fun[0]||function(){},a=n.split(".").pop().toLowerCase();if("obj"===a){var r=n.substr(0,n.lastIndexOf(".obj"))+".mtl",i=new B.MTLLoader(W.manager);return e=new B.OBJLoader(W.manager),void i.load(r,(function(t){t.preload(),e.setMaterials(t),e.load(n,(function(e){e.traverse((function(e){e.isMesh&&(e.material.opacity=1,e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),o(e)}))}))}"glb"===a||"gltf"===a?e=new B.GLTFLoader(W.manager):"fbx"===a?e=new B.FBXLoader(W.manager):o(null),e.load(n,(function(e){e.scene&&(e=e.scene),e.traverse((function(e){e.isMesh&&(e.material.emissive=e.material.color,e.material.emissiveMap=e.material.map)})),o(e)}))},loadTexture:function(){var e=U(arguments),t=e.str[0],n=e.num[0]||0,o=e.num[1]||0,a=e.fun[0]||function(){};return new f.TextureLoader(W.manager).load(t,(function(e){0===n&&0===o||(e.wrapS=f.RepeatWrapping,e.wrapT=f.RepeatWrapping,e.repeat.set(n,o)),a(e)}))},setupControls:function(){var e,t,n,o=U(arguments),a=o.str[0].toUpperCase(),r=o.obj[0];"SHOOT"===a&&(n=o.obj[1]||{},t=o.obj[2]||{x:0,y:0,z:0},r.target.set(t.x,t.y,t.z),r.object.position.set(t.x,t.y,t.z+.01),r.enableZoom=!1,r.rotateSpeed=-.3),"ORBIT"===a&&(e=o.obj[1]||{x:0,y:0,z:0},t=o.obj[2]||{x:0,y:0,z:0},n=o.obj[3]||{},r.target.set(e.x,e.y,e.z),r.object.position.set(t.x,t.y,t.z),r.enableZoom=!0,r.rotateSpeed=1),"EXACT"===a&&(e=o.obj[1]||{x:0,y:0,z:0},t=o.obj[2]||{x:0,y:0,z:0},n=o.obj[3]||{},r.target.set(e.x,e.y,e.z),r.object.position.set(t.x,t.y,t.z),r.enableZoom=!1,r.rotateSpeed=-.3),Object.keys(n).forEach((function(e){r[e]=n[e]})),r.update()},setupObject:function(){var e=U(arguments),t=e.obj[0],n=e.obj[1];!1===Array.isArray(t)&&(t=[t]);var o=["position","rotation","scale"];return t.forEach((function(e){Object.keys(n).forEach((function(t){o.indexOf(t)>-1?(void 0!==n[t].x&&(e[t].x=n[t].x),void 0!==n[t].y&&(e[t].y=n[t].y),void 0!==n[t].z&&(e[t].z=n[t].z)):e[t]=n[t]}))})),1===t.length?t[0]:t},setupScene:function(){var e=U(arguments),t=e.obj[0],n=e.obj[1],o=e.obj.splice(2),a=e.num[0]||window.innerWidth,r=e.num[1]||window.innerHeight;t.setSize(a,r),o.forEach((function(e){e.setSize(a,r)})),n.aspect=a/r,n.updateProjectionMatrix()},setupMaterial:function(){var e=U(arguments),t=e.obj[0],n=e.obj[1],o=["alphaMap","aoMap","bumpMap","displacementMap","emissiveMap","envMap","lightMap","map","normalMap","roughnessMap"],a=["color","emissive","specular"];return!1===Array.isArray(t)&&(t=[t]),t.forEach((function(e){Object.keys(n).forEach((function(t){a.indexOf(t)>-1?e[t]=new f.Color(n[t]):o.indexOf(t)>-1&&"string"===typeof n[t]?e[t]=K.loadTexture(n[t]):e[t]=n[t]}))})),1===t.length?t[0]:t},tweenControls:_,tweenMaterial:function(){var e,t,n=U(arguments),o=n.str[0]||"VALUE",a=n.obj[0],r=n.obj[1],i=n.num[0]||1e3,c=n.str[1]||"power1",s=n.fun[0]||function(){};if("CLONE"===o){var l=a.clone(!1);a.add(l),l.material=a.material.clone();var u=["alphaMap","aoMap","bumpMap","displacementMap","emissiveMap","envMap","lightMap","map","normalMap","roughnessMap"];u.forEach((function(e){a.material[e]&&(l.material[e]=a.material[e].clone(),l.material[e].needsUpdate=!0)})),Object.keys(r).forEach((function(e){u.indexOf(e)>-1?l.material[e].image=r[e]:l.material[e]=r[e]})),l.material.transparent=!0,l.material.opacity=0,l.material.needsUpdate=!0,e={opacity:0},t={opacity:1,duration:i/1e3,ease:c},I.timeline({onComplete:function(){a.material=l.material,a.remove(l),s()},onUpdate:function(){l.material.opacity=e.opacity}}).fromTo(e,e,t)}"VALUE"===o&&(e={},t={duration:i/1e3,ease:c},Object.keys(r).forEach((function(n){if("object"===typeof a.material[n]){var o=a.material[n];Object.keys(o).forEach((function(o){e[n+"."+o]=a.material[n][o],t[n+"."+o]=r[n][o]}))}else e[n]=a.material[n],t[n]=r[n]})),I.timeline({onComplete:function(){s()},onUpdate:function(){Object.keys(e).forEach((function(t){if(t.indexOf(".")>-1){var n=t.split(".");a.material[n[0]][n[1]]=e[t]}else a.material[t]=e[t]}))}}).fromTo(e,e,t))},tweenObject:function(){var e=U(arguments),t=e.obj[0],n=e.obj[1],o=e.str[0]||"power1",a=e.num[0]||1e3,r=e.fun[0]||function(){},i={},c={ease:o,duration:a/1e3},s=["position","rotation","scale"];s.forEach((function(e){i[e+"X"]=c[e+"X"]=t[e].x,i[e+"Y"]=c[e+"Y"]=t[e].y,i[e+"Z"]=c[e+"Z"]=t[e].z,n[e]&&(void 0!==n[e].x&&(c[e+"X"]=n[e].x),void 0!==n[e].y&&(c[e+"Y"]=n[e].y),void 0!==n[e].z&&(c[e+"Z"]=n[e].z))})),I.timeline({onComplete:function(){r()},onUpdate:function(){Object.keys(i).forEach((function(e){if("_GSAP"!==e&&"_gsap"!==e){var n=e.substr(0,e.length-1),o=e[e.length-1].toLocaleLowerCase();t[n][o]=i[e]}}))}}).fromTo(i,i,c)},tweenLight:function(){var e=U(arguments),t=e.obj[0],n=e.obj[1],o=e.num[0]||1e3,a=e.str[0]||"power1",r=e.fun[0]||function(){};!1===Array.isArray(t)&&(t=[t]),t.forEach((function(e,i){var c={},s={duration:o/1e3,ease:a};Object.keys(n).forEach((function(e){c[e]=t[e],s[e]=n[e],void 0===c[e]&&(c[e]=0)})),I.timeline({onComplete:function(){i===t.length-1&&r()},onUpdate:function(){Object.keys(c).forEach((function(t){e[t]=c[t]}))}}).fromTo(c,c,s)}))},webReality:Y};Y.XR8,Y.XRExtras,Y.WebXR,n(169);window.addEventListener("contextmenu",(function(e){return e.preventDefault(),!1}));var Q={},$=K.createScene(160,160,!1);$.isLoading=!0,$.controls.enabled=!1,function e(){if(requestAnimationFrame(e),$.isLoading&&$.logo){$.renderer.render($.scene,$.camera);var t=$.logo.rotation.y%(2*Math.PI),n=.03;t>.3&&t<5.8&&(n=.07),$.logo.rotation.y+=n}}();var ee=new f.AmbientLight(16777215,.7);$.scene.add(ee),Q.start=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};$.scene.background=new f.Color(e),$.root=document.querySelector(".arimac_load"),$.root.style.background=e,$.renderer.domElement.style.background=e,document.querySelector(".arimac_logo").style.display="block",$.root.style.display="block";var n=document.createElement("div");n.className="arimac_lval",$.root.appendChild(n),"#FFF"===e&&$.root.setAttribute("class","arimac_load arimac_load_white"),K.loadModel("models/arimac/logo.fbx",(function(n){$.root.appendChild($.renderer.domElement),$.logo=n,$.logo.rotation.y=5.8,$.scene.add(n),$.logo.scale.set(.2,.2,.2),$.isLoading=!0,"#FFF"===e&&(n.children[0].material[1].color=new f.Color("#131313")),t()}))},Q.setValue=function(e){var t=document.querySelector(".arimac_load");document.querySelector(".arimac_load>.arimac_lval").innerHTML="Loading... "+e+"%",100===e&&setTimeout((function(){t.style.opacity=0,setTimeout((function(){t.style.display="none"}),300)}),1e3)},Q.end=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},t=document.querySelector(".arimac_load");setTimeout((function(){t.style.opacity=0,setTimeout((function(){t.style.display="none",e()}),300)}),1e3)};var te=Q,ne=n(19),oe=K.webReality.WebXR,ae=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){te.start("#000",(function(){K.loadModel("models/model.fbx",(function(e){var t;t=e,K.findByType(t,"Mesh",!0).forEach((function(e){e.material=ue,e.material.needsUpdate=!0,e.castShadow=!0,e.receiveShadow=!0})),ce=e,document.querySelector(".click_text").style.color="#FFF",window.addEventListener("click",(function(){!1===re&&oe.checkAvailability(le,se)}))}))}))}},{key:"render",value:function(){return Object(ne.jsxs)("div",{children:[Object(ne.jsx)("div",{className:"arimac_load",children:Object(ne.jsx)("div",{className:"click_text",children:"Tap Anywhere to Start"})}),Object(ne.jsx)("div",{className:"arimac_logo arimac_logo_white"}),Object(ne.jsx)("div",{className:"cameraRoot"})]})}}]),n}(o.Component),re=!1,ie=null,ce=null;function se(){re=!0;var e=K.createScene("#333");document.querySelector("#root").appendChild(e.renderer.domElement),e.scene.add(ce),ce.scale.set(.0031,.0031,.0031),ce.position.set(0,-.6,0),e.controls.minPolarAngle=Math.PI/2,e.controls.maxPolarAngle=Math.PI/2,e.controls.enableZoom=!1,e.renderer.shadowMap.enabled=!1,e.renderer.physicallyCorrectLights=!0;var t=K.createLight("DIRECT","#fff",2.5);t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.far=1e3,e.scene.add(t),te.end(),window.addEventListener("resize",(function(){K.setupScene(e.renderer,e.camera)}))}function le(){var e=document.querySelector(".cameraRoot");oe.requestSession(e,(function(e){ie=e,oe.renderLoop(ie,(function(){}));var t=K.createLight("DIRECT","#fff",1.5);t.castShadow=!0,t.shadow.mapSize.width=1024,t.shadow.mapSize.height=1024,t.shadow.camera.far=1e3,ie.renderer.shadowMap.enabled=!1,ce.scale.set(0,0,0),ie.scene.add(ce),ie.scene.add(t),ce.position.set(0,-.3,-1.3),K.tweenObject(ce,{scale:{x:.001,y:.001,z:.001}},1500)}))}var ue=new f.MeshPhongMaterial({color:new f.Color("#FFF"),shininess:25});var de="U",fe=.012;new f.AmbientLight("#FFF",.2,1);!function e(){requestAnimationFrame(e),null!==ie&&null!==ce&&(ce.rotation.set(ce.rotation.x,ce.rotation.y+fe,ce.rotation.z),function(e){if(console.log(e),e<.2||e>6.1){if("A"===de)return;de="A",fe=.003}else if(e<4.7&&e>4.5){if("B"===de)return;de="B",fe=.003}else{if("C"===de)return;de="C",fe=.022}}(ce.rotation.y%(2*Math.PI)))}();var pe=ae,me=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,172)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),r(e),i(e)}))};i.a.render(Object(ne.jsx)(a.a.StrictMode,{children:Object(ne.jsx)(pe,{})}),document.getElementById("root")),me()}},[[171,1,2]]]);
//# sourceMappingURL=main.12354599.chunk.js.map