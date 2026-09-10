var Og=Object.defineProperty;var Bg=(r,e,t)=>e in r?Og(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ke=(r,e,t)=>Bg(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Sr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wm(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var _i={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Fo={duration:.5,overwrite:!1,delay:0},ff,Mn,zt,Ai=1e8,Dt=1/Ai,Wu=Math.PI*2,kg=Wu/4,zg=0,Am=Math.sqrt,Vg=Math.cos,Hg=Math.sin,yn=function(e){return typeof e=="string"},Yt=function(e){return typeof e=="function"},Lr=function(e){return typeof e=="number"},df=function(e){return typeof e>"u"},ur=function(e){return typeof e=="object"},$n=function(e){return e!==!1},pf=function(){return typeof window<"u"},rl=function(e){return Yt(e)||yn(e)},Rm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},In=Array.isArray,Gg=/random\([^)]+\)/g,Wg=/,\s*/g,pd=/(?:-?\.?\d|\.)+/gi,Cm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,xa=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Hc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pm=/[+-]=-?[.\d]+/,Xg=/[^,'"\[\]\s]+/gi,qg=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Gt,Qi,Xu,mf,xi={},uc={},Lm,Dm=function(e){return(uc=Da(e,xi))&&ei},_f=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Oo=function(e,t){return!t&&console.warn(e)},Im=function(e,t){return e&&(xi[e]=t)&&uc&&(uc[e]=t)||xi},Bo=function(){return 0},Yg={suppressEvents:!0,isStart:!0,kill:!1},Yl={suppressEvents:!0,kill:!1},Kg={suppressEvents:!0},gf={},is=[],qu={},Nm,ci={},Gc={},md=30,Kl=[],xf="",vf=function(e){var t=e[0],n,i;if(ur(t)||Yt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Kl.length;i--&&!Kl[i].targetTest(t););n=Kl[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new n_(e[i],n)))||e.splice(i,1);return e},Rs=function(e){return e._gsap||vf(Ri(e))[0]._gsap},Um=function(e,t,n){return(n=e[t])&&Yt(n)?e[t]():df(n)&&e.getAttribute&&e.getAttribute(t)||n},Zn=function(e,t){return(e=e.split(",")).forEach(t)||e},Jt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},Sa=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},$g=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},hc=function(){var e=is.length,t=is.slice(0),n,i;for(qu={},is.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},yf=function(e){return!!(e._initted||e._startAt||e.add)},Fm=function(e,t,n,i){is.length&&!Mn&&hc(),e.render(t,n,!!(Mn&&t<0&&yf(e))),is.length&&!Mn&&hc()},Om=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Xg).length<2?t:yn(e)?e.trim():e},Bm=function(e){return e},vi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Zg=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Da=function(e,t){for(var n in t)e[n]=t[n];return e},_d=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ur(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},fc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},So=function(e){var t=e.parent||Gt,n=e.keyframes?Zg(In(e.keyframes)):vi;if($n(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Jg=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},km=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Pc=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},as=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},Qg=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Yu=function(e,t,n,i){return e._startAt&&(Mn?e._startAt.revert(Yl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},jg=function r(e){return!e||e._ts&&r(e.parent)},gd=function(e){return e._repeat?Ia(e._tTime,e=e.duration()+e._rDelay)*e:0},Ia=function(e,t){var n=Math.floor(e=Ht(e/t));return e&&n===e?n-1:n},dc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Lc=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},Dc=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Lc(e),n._dirty||Cs(n,e)),e},zm=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=dc(e.rawTime(),t),(!t._dur||nl(0,t.totalDuration(),n)-t._tTime>Dt)&&t.render(n,!0)),Cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Dt}},tr=function(e,t,n,i){return t.parent&&as(t),t._start=Ht((Lr(n)?n:n||e!==Gt?bi(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),km(e,t,"_first","_last",e._sort?"_start":0),Ku(t)||(e._recent=t),i||zm(e,t),e._ts<0&&Dc(e,e._tTime),e},Vm=function(e,t){return(xi.ScrollTrigger||_f("scrollTrigger",t))&&xi.ScrollTrigger.create(t,e)},Hm=function(e,t,n,i,s){if(Mf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Mn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Nm!==hi.frame)return is.push(e),e._lazy=[s,i],1},e0=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Ku=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},t0=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&e0(e)&&!(!e._initted&&Ku(e))||(e._ts<0||e._dp._ts<0)&&!Ku(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=nl(0,e._tDur,t),u=Ia(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ia(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Mn||i||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&Hm(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?Dt:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Yu(e,t,n,!0),e._onUpdate&&!n&&pi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&pi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&as(e,1),!n&&!Mn&&(pi(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},n0=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Na=function(e,t,n,i){var s=e._repeat,a=Ht(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Ht(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Dc(e,e._tTime=e._tDur*o),e.parent&&Lc(e),n||Cs(e.parent,e),e},xd=function(e){return e instanceof Yn?Cs(e):Na(e,e._dur)},i0={_start:0,endTime:Bo,totalDuration:Bo},bi=function r(e,t,n){var i=e.labels,s=e._recent||i0,a=e.duration()>=Ai?s.endTime(!1):e._dur,o,l,c;return yn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(In(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Mo=function(e,t,n){var i=Lr(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=$n(l.vars.inherit)&&l.parent;a.immediateRender=$n(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new sn(t[0],a,t[s+1])},hs=function(e,t){return e||e===0?t(e):t},nl=function(e,t,n){return n<e?e:n>t?t:n},Ln=function(e,t){return!yn(e)||!(t=qg.exec(e))?"":t[1]},r0=function(e,t,n){return hs(n,function(i){return nl(e,t,i)})},$u=[].slice,Gm=function(e,t){return e&&ur(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ur(e[0]))&&!e.nodeType&&e!==Qi},s0=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return yn(i)&&!t||Gm(i,1)?(s=n).push.apply(s,Ri(i)):n.push(i)})||n},Ri=function(e,t,n){return zt&&!t&&zt.selector?zt.selector(e):yn(e)&&!n&&(Xu||!Ua())?$u.call((t||mf).querySelectorAll(e),0):In(e)?s0(e,n):Gm(e)?$u.call(e,0):e?[e]:[]},Zu=function(e){return e=Ri(e)[0]||Oo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ri(t,n.querySelectorAll?n:n===e?Oo("Invalid scope")||mf.createElement("div"):e)}},Wm=function(e){return e.sort(function(){return .5-Math.random()})},Xm=function(e){if(Yt(e))return e;var t=ur(e)?e:{each:e},n=Ps(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return yn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(h,d,p){var g=(p||t).length,m=a[g],_,T,w,v,E,S,M,x,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,Ai])[1],!b){for(M=-Ai;M<(M=p[b++].getBoundingClientRect().left)&&b<g;);b<g&&b--}for(m=a[g]=[],_=l?Math.min(b,g)*u-.5:i%b,T=b===Ai?0:l?g*f/b-.5:i/b|0,M=0,x=Ai,S=0;S<g;S++)w=S%b-_,v=T-(S/b|0),m[S]=E=c?Math.abs(c==="y"?v:w):Am(w*w+v*v),E>M&&(M=E),E<x&&(x=E);i==="random"&&Wm(m),m.max=M-x,m.min=x,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(b>g?g-1:c?c==="y"?g/b:b:Math.max(b,g/b))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Ln(t.amount||t.each)||0,n=n&&g<0?x0(n):n}return g=(m[h]-m.min)/m.max||0,Ht(m.b+(n?n(g):g)*m.v)+m.u}},Ju=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Lr(n)?0:Ln(n))}},qm=function(e,t){var n=In(e),i,s;return!n&&ur(e)&&(i=n=e.radius||Ai,e.values?(e=Ri(e.values),(s=!Lr(e[0]))&&(i*=i)):e=Ju(e.increment)),hs(t,n?Yt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Ai,u=0,f=e.length,h,d;f--;)s?(h=e[f].x-o,d=e[f].y-l,h=h*h+d*d):h=Math.abs(e[f]-o),h<c&&(c=h,u=f);return u=!i||c<=i?e[u]:a,s||u===a||Lr(a)?u:u+Ln(a)}:Ju(e))},Ym=function(e,t,n,i){return hs(In(e)?!t:n===!0?!!(n=0):!i,function(){return In(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},a0=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},o0=function(e,t){return function(n){return e(parseFloat(n))+(t||Ln(n))}},l0=function(e,t,n){return $m(e,t,0,1,n)},Km=function(e,t,n){return hs(n,function(i){return e[~~t(i)]})},c0=function r(e,t,n){var i=t-e;return In(e)?Km(e,r(0,e.length),t):hs(n,function(s){return(i+(s-e)%i)%i+e})},u0=function r(e,t,n){var i=t-e,s=i*2;return In(e)?Km(e,r(0,e.length-1),t):hs(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},ko=function(e){return e.replace(Gg,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Wg);return Ym(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},$m=function(e,t,n,i,s){var a=t-e,o=i-n;return hs(s,function(l){return n+((l-e)/a*o||0)})},h0=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var a=yn(e),o={},l,c,u,f,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(In(e)&&!In(t)){for(u=[],f=e.length,h=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(p){p*=f;var g=Math.min(h,~~p);return u[g](p-g)},n=t}else i||(e=Da(In(e)?[]:{},e));if(!u){for(l in t)Sf.call(o,e,l,"get",t[l]);s=function(p){return Ef(p,o)||(a?e.p:e)}}}return hs(n,s)},vd=function(e,t,n){var i=e.labels,s=Ai,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},pi=function(e,t,n){var i=e.vars,s=i[t],a=zt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&is.length&&hc(),o&&(zt=o),u=l?s.apply(c,l):s.call(c),zt=a,u},uo=function(e){return as(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Mn),e.progress()<1&&pi(e,"onInterrupt"),e},va,Zm=[],Jm=function(e){if(e)if(e=!e.name&&e.default||e,pf()||e.headless){var t=e.name,n=Yt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Bo,render:Ef,add:Sf,kill:R0,modifier:A0,rawVars:0},a={targetTest:0,get:0,getSetter:Tf,aliases:{},register:0};if(Ua(),e!==i){if(ci[t])return;vi(i,vi(fc(e,s),a)),Da(i.prototype,Da(s,fc(e,a))),ci[i.prop=t]=i,e.targetTest&&(Kl.push(i),gf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Im(t,i),e.register&&e.register(ei,i,Jn)}else Zm.push(e)},Lt=255,ho={aqua:[0,Lt,Lt],lime:[0,Lt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Lt],navy:[0,0,128],white:[Lt,Lt,Lt],olive:[128,128,0],yellow:[Lt,Lt,0],orange:[Lt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Lt,0,0],pink:[Lt,192,203],cyan:[0,Lt,Lt],transparent:[Lt,Lt,Lt,0]},Wc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Lt+.5|0},Qm=function(e,t,n){var i=e?Lr(e)?[e>>16,e>>8&Lt,e&Lt]:0:ho.black,s,a,o,l,c,u,f,h,d,p;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ho[e])i=ho[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Lt,i&Lt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Lt,e&Lt]}else if(e.substr(0,3)==="hsl"){if(i=p=e.match(pd),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Wc(l+1/3,s,a),i[1]=Wc(l,s,a),i[2]=Wc(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(Cm),n&&i.length<4&&(i[3]=1),i}else i=e.match(pd)||ho.transparent;i=i.map(Number)}return t&&!p&&(s=i[0]/Lt,a=i[1]/Lt,o=i[2]/Lt,f=Math.max(s,a,o),h=Math.min(s,a,o),u=(f+h)/2,f===h?l=c=0:(d=f-h,c=u>.5?d/(2-f-h):d/(f+h),l=f===s?(a-o)/d+(a<o?6:0):f===a?(o-s)/d+2:(s-a)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jm=function(e){var t=[],n=[],i=-1;return e.split(rs).forEach(function(s){var a=s.match(xa)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},yd=function(e,t,n){var i="",s=(e+i).match(rs),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(h){return(h=Qm(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(u=jm(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(rs,"1").split(xa),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(rs),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},rs=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ho)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),f0=/hsl[a]?\(/,e_=function(e){var t=e.join(" "),n;if(rs.lastIndex=0,rs.test(t))return n=f0.test(t),e[1]=yd(e[1],n),e[0]=yd(e[0],n,jm(e[1])),!0},zo,hi=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,h,d,p=function g(m){var _=r()-i,T=m===!0,w,v,E,S;if((_>e||_<0)&&(n+=_-t),i+=_,E=i-n,w=E-a,(w>0||T)&&(S=++f.frame,h=E-f.time*1e3,f.time=E=E/1e3,a+=w+(w>=s?4:s-w),v=1),T||(l=c(g)),v)for(d=0;d<o.length;d++)o[d](E,h,S,m)};return f={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Lm&&(!Xu&&pf()&&(Qi=Xu=window,mf=Qi.document||{},xi.gsap=ei,(Qi.gsapVersions||(Qi.gsapVersions=[])).push(ei.version),Dm(uc||Qi.GreenSockGlobals||!Qi.gsap&&Qi||{}),Zm.forEach(Jm)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},zo=1,p(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),zo=0,c=Bo},lagSmoothing:function(m,_){e=m||1/0,t=Math.min(_||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,_,T){var w=_?function(v,E,S,M){m(v,E,S,M),f.remove(w)}:m;return f.remove(m),o[T?"unshift":"push"](w),Ua(),w},remove:function(m,_){~(_=o.indexOf(m))&&o.splice(_,1)&&d>=_&&d--},_listeners:o},f})(),Ua=function(){return!zo&&hi.wake()},xt={},d0=/^[\d.\-M][\d.\-,\s]/,p0=/["']/g,m0=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(p0,"").trim():+c,i=l.substr(o+1).trim();return t},_0=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},g0=function(e){var t=(e+"").split("("),n=xt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[m0(t[1])]:_0(e).split(",").map(Om)):xt._CE&&d0.test(e)?xt._CE("",e):n},x0=function(e){return function(t){return 1-e(1-t)}},Ps=function(e,t){return e&&(Yt(e)?e:xt[e]||g0(e))||t},Vs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Zn(e,function(o){xt[o]=xi[o]=s,xt[a=o.toLowerCase()]=n;for(var l in s)xt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=xt[o+"."+l]=s[l]}),s},t_=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Wu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Hg((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:t_(o);return s=Wu/s,l.config=function(c,u){return r(e,c,u)},l},qc=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:t_(n);return i.config=function(s){return r(e,s)},i};Zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Vs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;Vs("Elastic",Xc("in"),Xc("out"),Xc());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Vs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Vs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Vs("Circ",function(r){return-(Am(1-r*r)-1)});Vs("Sine",function(r){return r===1?1:-Vg(r*kg)+1});Vs("Back",qc("in"),qc("out"),qc());xt.SteppedEase=xt.steps=xi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Dt;return function(o){return((i*nl(0,a,o)|0)+s)*n}}};Fo.ease=xt["quad.out"];Zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return xf+=r+","+r+"Params,"});var n_=function(e,t){this.id=zg++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Um,this.set=t?t.getSetter:Tf},Vo=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Na(this,+t.duration,1,1),this.data=t.data,zt&&(this._ctx=zt,zt.data.push(this)),zo||hi.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Na(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ua(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Dc(this,n),!s._dp||s.parent||zm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&tr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Fm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+gd(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+gd(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ia(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?dc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Dt?0:this._rts,this.totalTime(nl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Lc(this),Qg(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ua(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Ht(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&tr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+($n(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?dc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Kg);var i=Mn;return Mn=n,yf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Mn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bi(this,n),$n(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,$n(i)),this._dur||(this._zTime=-Dt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Dt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Yt(n)?n:Bm,l=function(){var u=i.then;i.then=null,s&&s(),Yt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){uo(this)},r})();vi(Vo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var Yn=(function(r){wm(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=$n(n.sortChildren),Gt&&tr(n.parent||Gt,Sr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Vm(Sr(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Mo(0,arguments,this),this},t.from=function(i,s,a){return Mo(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Mo(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,So(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new sn(i,s,bi(this,a),1),this},t.call=function(i,s,a){return tr(this,sn.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new sn(i,a,bi(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,So(a).immediateRender=$n(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,So(o).immediateRender=$n(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Ht(i),f=this._zTime<0!=i<0&&(this._initted||!c),h,d,p,g,m,_,T,w,v,E,S,M;if(this!==Gt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),h=u,v=this._start,w=this._ts,_=!w,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Ht(u%m),u===l?(g=this._repeat,h=c):(E=Ht(u/m),g=~~E,g&&g===E&&(h=c,g--),h>c&&(h=c)),E=Ia(this._tTime,m),!o&&this._tTime&&E!==g&&this._tTime-E*m-this._dur<=0&&(E=g),S&&g&1&&(h=c-h,M=1),g!==E&&!this._lock){var x=S&&E&1,b=x===(S&&g&1);if(g<E&&(x=!x),o=x?0:u%c?c:u,this._lock=1,this.render(o||(M?0:Ht(g*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1,E=g),o&&o!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,o=x?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=n0(this,Ht(o),Ht(h)),T&&(u-=h-(h=T._start))),this._tTime=u,this._time=h,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!E&&(pi(this,"onStart"),this._tTime!==u))return this;if(h>=o&&i>=0)for(d=this._first;d;){if(p=d._next,(d._act||h>=d._start)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(h-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(h-d._start)*d._ts,s,a),h!==this._time||!this._ts&&!_){T=0,p&&(u+=this._zTime=-Dt);break}}d=p}else{d=this._last;for(var R=i<0?i:h;d;){if(p=d._prev,(d._act||R<=d._end)&&d._ts&&T!==d){if(d.parent!==this)return this.render(i,s,a);if(d.render(d._ts>0?(R-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(R-d._start)*d._ts,s,a||Mn&&yf(d)),h!==this._time||!this._ts&&!_){T=0,p&&(u+=this._zTime=R?-Dt:Dt);break}}d=p}}if(T&&!s&&(this.pause(),T.render(h>=o?0:-Dt)._zTime=h>=o?1:-1,this._ts))return this._start=v,Lc(this),this.render(i,s,a);this._onUpdate&&!s&&pi(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(v===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&as(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(pi(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Lr(s)||(s=bi(this,s,i)),!(i instanceof Vo)){if(In(i))return i.forEach(function(o){return a.add(o,s)}),this;if(yn(i))return this.addLabel(i,s);if(Yt(i))i=sn.delayedCall(0,i);else return this}return this!==i?tr(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Ai);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof sn?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return yn(i)?this.removeLabel(i):Yt(i)?this.killTweensOf(i):(i.parent===this&&Pc(this,i),i===this._recent&&(this._recent=this._last),Cs(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(hi.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=sn.delayedCall(0,s||Bo,a);return o.data="isPause",this._hasPause=1,tr(this,o,bi(this,i))},t.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&as(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Jr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Ri(i),l=this._first,c=Lr(s),u;l;)l instanceof sn?$g(l._targets,o)&&(c?(!Jr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=bi(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,h=l.immediateRender,d,p=sn.to(a,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||Dt,onStart:function(){if(a.pause(),!d){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());p._dur!==m&&Na(p,m,0,1).render(p._time,!0,!0),d=1}u&&u.apply(p,f||[])}},s));return h?p.render(0):p},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,vi({startAt:{time:bi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),vd(this,bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),vd(this,bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Ht(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Cs(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Cs(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Ai,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,tr(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Ht(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Na(a,a===Gt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Gt._ts&&(Fm(Gt,dc(i,Gt)),Nm=hi.frame),hi.frame>=md){md+=_i.autoSleep||120;var s=Gt._first;if((!s||!s._ts)&&_i.autoSleep&&hi._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hi.sleep()}}},e})(Vo);vi(Yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var v0=function(e,t,n,i,s,a,o){var l=new Jn(this._pt,e,t,0,1,l_,null,s),c=0,u=0,f,h,d,p,g,m,_,T;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=ko(i)),a&&(T=[n,i],a(T,e,t),n=T[0],i=T[1]),h=n.match(Hc)||[];f=Hc.exec(i);)p=f[0],g=i.substring(c,f.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),p!==h[u++]&&(m=parseFloat(h[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:m,c:p.charAt(1)==="="?Sa(m,p)-m:parseFloat(p)-m,m:d&&d<4?Math.round:0},c=Hc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Pm.test(i)||_)&&(l.e=0),this._pt=l,l},Sf=function(e,t,n,i,s,a,o,l,c,u){Yt(i)&&(i=i(s||0,e,a));var f=e[t],h=n!=="get"?n:Yt(f)?c?e[t.indexOf("set")||!Yt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,d=Yt(f)?c?T0:a_:bf,p;if(yn(i)&&(~i.indexOf("random(")&&(i=ko(i)),i.charAt(1)==="="&&(p=Sa(h,i)+(Ln(h)||0),(p||p===0)&&(i=p))),!u||h!==i||Qu)return!isNaN(h*i)&&i!==""?(p=new Jn(this._pt,e,t,+h||0,i-(h||0),typeof f=="boolean"?w0:o_,0,d),c&&(p.fp=c),o&&p.modifier(o,this,e),this._pt=p):(!f&&!(t in e)&&_f(t,i),v0.call(this,e,t,h,i,d,l||_i.stringFilter,c))},y0=function(e,t,n,i,s){if(Yt(e)&&(e=bo(e,s,t,n,i)),!ur(e)||e.style&&e.nodeType||In(e)||Rm(e))return yn(e)?bo(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=bo(e[o],s,t,n,i);return a},i_=function(e,t,n,i,s,a){var o,l,c,u;if(ci[e]&&(o=new ci[e]).init(s,o.rawVars?t[e]:y0(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Jn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==va))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Jr,Qu,Mf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,h=i.keyframes,d=i.autoRevert,p=e._dur,g=e._startAt,m=e._targets,_=e.parent,T=_&&_.data==="nested"?_.vars.targets:m,w=e._overwrite==="auto"&&!ff,v=e.timeline,E=i.easeReverse||f,S,M,x,b,R,P,D,V,z,U,k,I,J;if(v&&(!h||!s)&&(s="none"),e._ease=Ps(s,Fo.ease),e._rEase=E&&(Ps(E)||e._ease),e._from=!v&&!!i.runBackwards,e._from&&(e.ratio=1),!v||h&&!i.stagger){if(V=m[0]?Rs(m[0]).harness:0,I=V&&i[V.prop],S=fc(i,gf),g&&(g._zTime<0&&g.progress(1),t<0&&u&&o&&!d?g.render(-1,!0):g.revert(u&&p?Yl:Yg),g._lazy=0),a){if(as(e._startAt=sn.set(m,vi({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&$n(l),startAt:null,delay:0,onUpdate:c&&function(){return pi(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn||!o&&!d)&&e._startAt.revert(Yl),o&&p&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&p&&!g){if(t&&(o=!1),x=vi({overwrite:!1,data:"isFromStart",lazy:o&&!g&&$n(l),immediateRender:o,stagger:0,parent:_},S),I&&(x[V.prop]=I),as(e._startAt=sn.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Mn?e._startAt.revert(Yl):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=p&&$n(l)||l&&!p,M=0;M<m.length;M++){if(R=m[M],D=R._gsap||vf(m)[M]._gsap,e._ptLookup[M]=U={},qu[D.id]&&is.length&&hc(),k=T===m?M:T.indexOf(R),V&&(z=new V).init(R,I||S,e,k,T)!==!1&&(e._pt=b=new Jn(e._pt,R,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(ie){U[ie]=b}),z.priority&&(P=1)),!V||I)for(x in S)ci[x]&&(z=i_(x,S,e,k,R,T))?z.priority&&(P=1):U[x]=b=Sf.call(e,R,x,"get",S[x],k,T,0,i.stringFilter);e._op&&e._op[M]&&e.kill(R,e._op[M]),w&&e._pt&&(Jr=e,Gt.killTweensOf(R,U,e.globalTime(t)),J=!e.parent,Jr=0),e._pt&&l&&(qu[D.id]=1)}P&&c_(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!J,h&&t<=0&&v.render(Ai,!0,!0)},S0=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,h,d;if(!c)for(c=e._ptCache[t]=[],h=e._ptLookup,d=e._targets.length;d--;){if(u=h[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Qu=1,e.vars[t]="+=0",Mf(e,o),Qu=0,l?Oo(t+" not eligible for reset. Try splitting into individual properties"):1;c.push(u)}for(d=c.length;d--;)f=c[d],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Jt(n)+Ln(f.e)),f.b&&(f.b=u.s+Ln(f.b))},M0=function(e,t){var n=e[0]?Rs(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Da({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},b0=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(In(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},bo=function(e,t,n,i,s){return Yt(e)?e.call(t,n,i,s):yn(e)&&~e.indexOf("random(")?ko(e):e},r_=xf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",s_={};Zn(r_+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return s_[r]=1});var sn=(function(r){wm(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:So(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,h=l.stagger,d=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=i.parent||Gt,T=(In(n)||Rm(n)?Lr(n[0]):"length"in i)?[n]:Ri(n),w,v,E,S,M,x,b,R;if(o._targets=T.length?vf(T):Oo("GSAP target "+n+" not found. https://gsap.com",!_i.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,p||h||rl(c)||rl(u)){i=o.vars;var P=i.easeReverse||i.yoyoEase;if(w=o.timeline=new Yn({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:T}),w.kill(),w.parent=w._dp=Sr(o),w._start=0,h||rl(c)||rl(u)){if(S=T.length,b=h&&Xm(h),ur(h))for(M in h)~r_.indexOf(M)&&(R||(R={}),R[M]=h[M]);for(v=0;v<S;v++)E=fc(i,s_),E.stagger=0,P&&(E.easeReverse=P),R&&Da(E,R),x=T[v],E.duration=+bo(c,Sr(o),v,x,T),E.delay=(+bo(u,Sr(o),v,x,T)||0)-o._delay,!h&&S===1&&E.delay&&(o._delay=u=E.delay,o._start+=u,E.delay=0),w.to(x,E,b?b(v,x,T):0),w._ease=xt.none;w.duration()?c=u=0:o.timeline=0}else if(p){So(vi(w.vars.defaults,{ease:"none"})),w._ease=Ps(p.ease||i.ease||"none");var D=0,V,z,U;if(In(p))p.forEach(function(k){return w.to(T,k,">")}),w.duration();else{E={};for(M in p)M==="ease"||M==="easeEach"||b0(M,p[M],E,p.easeEach);for(M in E)for(V=E[M].sort(function(k,I){return k.t-I.t}),D=0,v=0;v<V.length;v++)z=V[v],U={ease:z.e,duration:(z.t-(v?V[v-1].t:0))/100*c},U[M]=z.v,w.to(T,U,D),D+=U.duration;w.duration()<c&&w.to({},{duration:c-w.duration()})}}c||o.duration(c=w.duration())}else o.timeline=0;return d===!0&&!ff&&(Jr=Sr(o),Gt.killTweensOf(T),Jr=0),tr(_,Sr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!p&&o._start===Ht(_._time)&&$n(f)&&jg(Sr(o))&&_.data!=="nested")&&(o._tTime=-Dt,o.render(Math.max(0,-u)||0)),m&&Vm(Sr(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-Dt&&!u?l:i<Dt?0:i,h,d,p,g,m,_,T,w;if(!c)t0(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=f,w=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,a);if(h=Ht(f%g),f===l?(p=this._repeat,h=c):(m=Ht(f/g),p=~~m,p&&p===m?(h=c,p--):h>c&&(h=c)),_=this._yoyo&&p&1,_&&(h=c-h),m=Ia(this._tTime,g),h===o&&!a&&this._initted&&p===m)return this._tTime=f,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&h!==g&&this._initted&&(this._lock=a=1,this.render(Ht(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(Hm(this,u?i:h,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._rEase){var v=h<o;if(v!==this._inv){var E=v?o:c-o;this._inv=v,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=E?(v?-1:1)/E:0,this._invScale=v?-this.ratio:1-this.ratio,this._invEase=v?this._rEase:this._ease}this.ratio=T=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=T=this._ease(h/c);if(this._from&&(this.ratio=T=1-T),this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&f&&!s&&!m&&(pi(this,"onStart"),this._tTime!==f))return this;for(d=this._pt;d;)d.r(T,d.d),d=d._next;w&&w.render(i<0?i:w._dur*w._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Yu(this,i,s,a),pi(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!s&&this.parent&&pi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Yu(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&as(this,1),!s&&!(u&&!o)&&(f||o||_)&&(pi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){zo||hi.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Mf(this,c),u=this._ease(c/this._dur),S0(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Dc(this,0),this.parent||km(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?uo(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Mn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Jr&&Jr.vars.overwrite!==!0)._first||uo(this),this.parent&&a!==this.timeline.totalDuration()&&Na(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Ri(i):o,c=this._ptLookup,u=this._pt,f,h,d,p,g,m,_;if((!s||s==="all")&&Jg(o,l))return s==="all"&&(this._pt=0),uo(this);for(f=this._op=this._op||[],s!=="all"&&(yn(s)&&(g={},Zn(s,function(T){return g[T]=1}),s=g),s=M0(o,s)),_=o.length;_--;)if(~l.indexOf(o[_])){h=c[_],s==="all"?(f[_]=s,p=h,d={}):(d=f[_]=f[_]||{},p=s);for(g in p)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Pc(this,m,"_pt"),delete h[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&uo(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Mo(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Mo(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Gt.killTweensOf(i,s,a)},e})(Vo);vi(sn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Zn("staggerTo,staggerFrom,staggerFromTo",function(r){sn[r]=function(){var e=new Yn,t=$u.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var bf=function(e,t,n){return e[t]=n},a_=function(e,t,n){return e[t](n)},T0=function(e,t,n,i){return e[t](i.fp,n)},E0=function(e,t,n){return e.setAttribute(t,n)},Tf=function(e,t){return Yt(e[t])?a_:df(e[t])&&e.setAttribute?E0:bf},o_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},w0=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},l_=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Ef=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},A0=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},R0=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Pc(this,t,"_pt"):t.dep||(n=1),t=i;return!n},C0=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},c_=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Jn=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||o_,this.d=l||this,this.set=c||bf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=C0,this.m=n,this.mt=s,this.tween=i},r})();Zn(xf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return gf[r]=1});xi.TweenMax=xi.TweenLite=sn;xi.TimelineLite=xi.TimelineMax=Yn;Gt=new Yn({sortChildren:!1,defaults:Fo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});_i.stringFilter=e_;var Ls=[],$l={},P0=[],Sd=0,L0=0,Yc=function(e){return($l[e]||P0).map(function(t){return t()})},ju=function(){var e=Date.now(),t=[];e-Sd>2&&(Yc("matchMediaInit"),Ls.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Qi.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Yc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sd=e,Yc("matchMedia"))},u_=(function(){function r(t,n){this.selector=n&&Zu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=L0++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Yt(n)&&(s=i,i=n,n=Yt);var a=this,o=function(){var c=zt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Zu(s)),zt=a,f=i.apply(a,arguments),Yt(f)&&a._r.push(f),zt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Yt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=zt;zt=null,n(this),zt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof sn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof sn)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ls.length;a--;)Ls[a].id===this.id&&Ls.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),D0=(function(){function r(t){this.contexts=[],this.scope=t,zt&&zt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ur(n)||(n={matches:n});var a=new u_(0,s||this.scope),o=a.conditions={},l,c,u;zt&&!a.selector&&(a.selector=zt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Qi.matchMedia(n[c]),l&&(Ls.indexOf(a)<0&&Ls.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(ju):l.addEventListener("change",ju)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),pc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Jm(i)})},timeline:function(e){return new Yn(e)},getTweensOf:function(e,t){return Gt.getTweensOf(e,t)},getProperty:function(e,t,n,i){yn(e)&&(e=Ri(e)[0]);var s=Rs(e||{}).get,a=n?Bm:Om;return n==="native"&&(n=""),e&&(t?a((ci[t]&&ci[t].get||s)(e,t,n,i)):function(o,l,c){return a((ci[o]&&ci[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Ri(e),e.length>1){var i=e.map(function(u){return ei.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=ci[t],o=Rs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;va._pt=0,f.init(e,n?u+n:u,va,0,[e]),f.render(1,f),va._pt&&Ef(1,va)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=ei.to(e,vi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Gt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ps(e.ease,Fo.ease)),_d(Fo,e||{})},config:function(e){return _d(_i,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ci[o]&&!xi[o]&&Oo(t+" effect requires "+o+" plugin.")}),Gc[t]=function(o,l,c){return n(Ri(o),vi(l||{},s),c)},a&&(Yn.prototype[t]=function(o,l,c){return this.add(Gc[t](o,ur(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){xt[e]=Ps(t)},parseEase:function(e,t){return arguments.length?Ps(e,t):xt},getById:function(e){return Gt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Yn(e),i,s;for(n.smoothChildTiming=$n(e.smoothChildTiming),Gt.remove(n),n._dp=0,n._time=n._tTime=Gt._time,i=Gt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof sn&&i.vars.onComplete===i._targets[0]))&&tr(n,i,i._start-i._delay),i=s;return tr(Gt,n,0),n},context:function(e,t){return e?new u_(e,t):zt},matchMedia:function(e){return new D0(e)},matchMediaRefresh:function(){return Ls.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||ju()},addEventListener:function(e,t){var n=$l[e]||($l[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=$l[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:c0,wrapYoyo:u0,distribute:Xm,random:Ym,snap:qm,normalize:l0,getUnit:Ln,clamp:r0,splitColor:Qm,toArray:Ri,selector:Zu,mapRange:$m,pipe:a0,unitize:o0,interpolate:h0,shuffle:Wm},install:Dm,effects:Gc,ticker:hi,updateRoot:Yn.updateRoot,plugins:ci,globalTimeline:Gt,core:{PropTween:Jn,globals:Im,Tween:sn,Timeline:Yn,Animation:Vo,getCache:Rs,_removeLinkedListItem:Pc,reverting:function(){return Mn},context:function(e){return e&&zt&&(zt.data.push(e),e._ctx=zt),zt},suppressOverwrites:function(e){return ff=e}}};Zn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return pc[r]=sn[r]});hi.add(Yn.updateRoot);va=pc.to({},{duration:0});var I0=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},N0=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=I0(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Kc=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(yn(s)&&(l={},Zn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}N0(o,s)}}}},ei=pc.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Mn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Kc("roundProps",Ju),Kc("modifiers"),Kc("snap",qm))||pc;sn.version=Yn.version=ei.version="3.15.0";Lm=1;pf()&&Ua();xt.Power0;xt.Power1;xt.Power2;xt.Power3;xt.Power4;xt.Linear;xt.Quad;xt.Cubic;xt.Quart;xt.Quint;xt.Strong;xt.Elastic;xt.Back;xt.SteppedEase;xt.Bounce;xt.Sine;xt.Expo;xt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Md,Qr,Ma,wf,Es,bd,Af,U0=function(){return typeof window<"u"},Dr={},vs=180/Math.PI,ba=Math.PI/180,Ys=Math.atan2,Td=1e8,Rf=/([A-Z])/g,F0=/(left|right|width|margin|padding|x)/i,O0=/[\s,\(]\S/,ir={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},eh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},B0=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},k0=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},z0=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},V0=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},h_=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},f_=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},H0=function(e,t,n){return e.style[t]=n},G0=function(e,t,n){return e.style.setProperty(t,n)},W0=function(e,t,n){return e._gsap[t]=n},X0=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},q0=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Y0=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Wt="transform",Qn=Wt+"Origin",K0=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Dr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=ir[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Mr(i,o)}):this.tfm[e]=a.x?a[e]:Mr(i,e),e===Qn&&(this.tfm.zOrigin=a.zOrigin);else return ir.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(Wt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=Wt}(s||t)&&this.props.push(e,t,s[e])},d_=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},$0=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Rf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Af(),(!s||!s.isStart)&&!n[Wt]&&(d_(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},p_=function(e,t){var n={target:e,props:[],revert:$0,save:K0};return e._gsap||ei.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},m_,th=function(e,t){var n=Qr.createElementNS?Qr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Qr.createElement(e);return n&&n.style?n:Qr.createElement(e)},mi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Rf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Fa(t)||t,1)||""},Ed="O,Moz,ms,Ms,Webkit".split(","),Fa=function(e,t,n){var i=t||Es,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ed[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ed[a]:"")+e},nh=function(){U0()&&window.document&&(Md=window,Qr=Md.document,Ma=Qr.documentElement,Es=th("div")||{style:{}},th("div"),Wt=Fa(Wt),Qn=Wt+"Origin",Es.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",m_=!!Fa("perspective"),Af=ei.core.reverting,wf=1)},wd=function(e){var t=e.ownerSVGElement,n=th("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Ma.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Ma.removeChild(n),s},Ad=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},__=function(e){var t,n;try{t=e.getBBox()}catch{t=wd(e),n=1}return t&&(t.width||t.height)||n||(t=wd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ad(e,["x","cx","x1"])||0,y:+Ad(e,["y","cy","y1"])||0,width:0,height:0}:t},g_=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&__(e))},os=function(e,t){if(t){var n=e.style,i;t in Dr&&t!==Qn&&(t=Wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Rf,"-$1").toLowerCase())):n.removeAttribute(t)}},jr=function(e,t,n,i,s,a){var o=new Jn(e._pt,t,n,0,1,a?f_:h_);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Rd={deg:1,rad:1,turn:1},Z0={grid:1,flex:1},ls=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Es.style,l=F0.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,h=i==="px",d=i==="%",p,g,m,_;if(i===a||!s||Rd[i]||Rd[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),_=e.getCTM&&g_(e),(d||a==="%")&&(Dr[t]||~t.indexOf("adius")))return p=_?e.getBBox()[l?"width":"height"]:e[u],Jt(d?s/p*f:s/100*p);if(o[l?"width":"height"]=f+(h?a:i),g=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,_&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===Qr||!g.appendChild)&&(g=Qr.body),m=g._gsap,m&&d&&m.width&&l&&m.time===hi.time&&!m.uncache)return Jt(s/m.width*f);if(d&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=f+i,p=e[u],T?e.style[t]=T:os(e,t)}else(d||a==="%")&&!Z0[mi(g,"display")]&&(o.position=mi(e,"position")),g===e&&(o.position="static"),g.appendChild(Es),p=Es[u],g.removeChild(Es),o.position="absolute";return l&&d&&(m=Rs(g),m.time=hi.time,m.width=g[u]),Jt(h?p*s/f:p&&s?f/p*s:0)},Mr=function(e,t,n,i){var s;return wf||nh(),t in ir&&t!=="transform"&&(t=ir[t],~t.indexOf(",")&&(t=t.split(",")[0])),Dr[t]&&t!=="transform"?(s=Go(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:_c(mi(e,Qn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=mc[t]&&mc[t](e,t,n)||mi(e,t)||Um(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ls(e,t,s,n)+n:s},J0=function(e,t,n,i){if(!n||n==="none"){var s=Fa(t,e,1),a=s&&mi(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=mi(e,"borderTopColor"))}var o=new Jn(this._pt,e.style,t,0,1,l_),l=0,c=0,u,f,h,d,p,g,m,_,T,w,v,E;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=mi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=e.style[t],e.style[t]=i,i=mi(e,t)||i,g?e.style[t]=g:os(e,t)),u=[n,i],e_(u),n=u[0],i=u[1],h=n.match(xa)||[],E=i.match(xa)||[],E.length){for(;f=xa.exec(i);)m=f[0],T=i.substring(l,f.index),p?p=(p+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(p=1),m!==(g=h[c++]||"")&&(d=parseFloat(g)||0,v=g.substr((d+"").length),m.charAt(1)==="="&&(m=Sa(d,m)+v),_=parseFloat(m),w=m.substr((_+"").length),l=xa.lastIndex-w.length,w||(w=w||_i.units[t]||v,l===i.length&&(i+=w,o.e+=w)),v!==w&&(d=ls(e,t,g,w)||0),o._pt={_next:o._pt,p:T||c===1?T:",",s:d,c:_-d,m:p&&p<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?f_:h_;return Pm.test(i)&&(o.e=0),this._pt=o,o},Cd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Q0=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Cd[n]||n,t[1]=Cd[i]||i,t.join(" ")},j0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Dr[o]&&(l=1,o=o==="transformOrigin"?Qn:Wt),os(n,o);l&&(os(n,Wt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Go(n,1),a.uncache=1,d_(i)))}},mc={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Jn(e._pt,t,n,0,0,j0);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ho=[1,0,0,1,0,0],x_={},v_=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Pd=function(e){var t=mi(e,Wt);return v_(t)?Ho:t.substr(7).match(Cm).map(Jt)},Cf=function(e,t){var n=e._gsap||Rs(e),i=e.style,s=Pd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ho:s):(s===Ho&&!e.offsetParent&&e!==Ma&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Ma.appendChild(e)),s=Pd(e),l?i.display=l:os(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Ma.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ih=function(e,t,n,i,s,a){var o=e._gsap,l=s||Cf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,h=o.yOffset||0,d=l[0],p=l[1],g=l[2],m=l[3],_=l[4],T=l[5],w=t.split(" "),v=parseFloat(w[0])||0,E=parseFloat(w[1])||0,S,M,x,b;n?l!==Ho&&(M=d*m-p*g)&&(x=v*(m/M)+E*(-g/M)+(g*T-m*_)/M,b=v*(-p/M)+E*(d/M)-(d*T-p*_)/M,v=x,E=b):(S=__(e),v=S.x+(~w[0].indexOf("%")?v/100*S.width:v),E=S.y+(~(w[1]||w[0]).indexOf("%")?E/100*S.height:E)),i||i!==!1&&o.smooth?(_=v-c,T=E-u,o.xOffset=f+(_*d+T*g)-_,o.yOffset=h+(_*p+T*m)-T):o.xOffset=o.yOffset=0,o.xOrigin=v,o.yOrigin=E,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Qn]="0px 0px",a&&(jr(a,o,"xOrigin",c,v),jr(a,o,"yOrigin",u,E),jr(a,o,"xOffset",f,o.xOffset),jr(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",v+" "+E)},Go=function(e,t){var n=e._gsap||new n_(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=mi(e,Qn)||"0",u,f,h,d,p,g,m,_,T,w,v,E,S,M,x,b,R,P,D,V,z,U,k,I,J,ie,L,he,_e,ze,Xe,He;return u=f=h=g=m=_=T=w=v=0,d=p=1,n.svg=!!(e.getCTM&&g_(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Wt]!=="none"?l[Wt]:"")),i.scale=i.rotate=i.translate="none"),M=Cf(e,n.svg),n.svg&&(n.uncache?(J=e.getBBox(),c=n.xOrigin-J.x+"px "+(n.yOrigin-J.y)+"px",I=""):I=!t&&e.getAttribute("data-svg-origin"),ih(e,I||c,!!I||n.originIsAbsolute,n.smooth!==!1,M)),E=n.xOrigin||0,S=n.yOrigin||0,M!==Ho&&(P=M[0],D=M[1],V=M[2],z=M[3],u=U=M[4],f=k=M[5],M.length===6?(d=Math.sqrt(P*P+D*D),p=Math.sqrt(z*z+V*V),g=P||D?Ys(D,P)*vs:0,T=V||z?Ys(V,z)*vs+g:0,T&&(p*=Math.abs(Math.cos(T*ba))),n.svg&&(u-=E-(E*P+S*V),f-=S-(E*D+S*z))):(He=M[6],ze=M[7],L=M[8],he=M[9],_e=M[10],Xe=M[11],u=M[12],f=M[13],h=M[14],x=Ys(He,_e),m=x*vs,x&&(b=Math.cos(-x),R=Math.sin(-x),I=U*b+L*R,J=k*b+he*R,ie=He*b+_e*R,L=U*-R+L*b,he=k*-R+he*b,_e=He*-R+_e*b,Xe=ze*-R+Xe*b,U=I,k=J,He=ie),x=Ys(-V,_e),_=x*vs,x&&(b=Math.cos(-x),R=Math.sin(-x),I=P*b-L*R,J=D*b-he*R,ie=V*b-_e*R,Xe=z*R+Xe*b,P=I,D=J,V=ie),x=Ys(D,P),g=x*vs,x&&(b=Math.cos(x),R=Math.sin(x),I=P*b+D*R,J=U*b+k*R,D=D*b-P*R,k=k*b-U*R,P=I,U=J),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),d=Jt(Math.sqrt(P*P+D*D+V*V)),p=Jt(Math.sqrt(k*k+He*He)),x=Ys(U,k),T=Math.abs(x)>2e-4?x*vs:0,v=Xe?1/(Xe<0?-Xe:Xe):0),n.svg&&(I=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!v_(mi(e,Wt)),I&&e.setAttribute("transform",I))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(d*=-1,T+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Jt(d),n.scaleY=Jt(p),n.rotation=Jt(g)+o,n.rotationX=Jt(m)+o,n.rotationY=Jt(_)+o,n.skewX=T+o,n.skewY=w+o,n.transformPerspective=v+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Qn]=_c(c)),n.xOffset=n.yOffset=0,n.force3D=_i.force3D,n.renderTransform=n.svg?tx:m_?y_:ex,n.uncache=0,n},_c=function(e){return(e=e.split(" "))[0]+" "+e[1]},$c=function(e,t,n){var i=Ln(t);return Jt(parseFloat(t)+parseFloat(ls(e,"x",n+"px",i)))+i},ex=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,y_(e,t)},fs="0deg",$a="0px",ds=") ",y_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,h=n.skewX,d=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,T=n.target,w=n.zOrigin,v="",E=_==="auto"&&e&&e!==1||_===!0;if(w&&(f!==fs||u!==fs)){var S=parseFloat(u)*ba,M=Math.sin(S),x=Math.cos(S),b;S=parseFloat(f)*ba,b=Math.cos(S),a=$c(T,a,M*b*-w),o=$c(T,o,-Math.sin(S)*-w),l=$c(T,l,x*b*-w+w)}m!==$a&&(v+="perspective("+m+ds),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(E||a!==$a||o!==$a||l!==$a)&&(v+=l!==$a||E?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ds),c!==fs&&(v+="rotate("+c+ds),u!==fs&&(v+="rotateY("+u+ds),f!==fs&&(v+="rotateX("+f+ds),(h!==fs||d!==fs)&&(v+="skew("+h+", "+d+ds),(p!==1||g!==1)&&(v+="scale("+p+", "+g+ds),T.style[Wt]=v||"translate(0, 0)"},tx=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,h=n.scaleY,d=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,T=n.forceCSS,w=parseFloat(a),v=parseFloat(o),E,S,M,x,b;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=ba,c*=ba,E=Math.cos(l)*f,S=Math.sin(l)*f,M=Math.sin(l-c)*-h,x=Math.cos(l-c)*h,c&&(u*=ba,b=Math.tan(c-u),b=Math.sqrt(1+b*b),M*=b,x*=b,u&&(b=Math.tan(u),b=Math.sqrt(1+b*b),E*=b,S*=b)),E=Jt(E),S=Jt(S),M=Jt(M),x=Jt(x)):(E=f,x=h,S=M=0),(w&&!~(a+"").indexOf("px")||v&&!~(o+"").indexOf("px"))&&(w=ls(d,"x",a,"px"),v=ls(d,"y",o,"px")),(p||g||m||_)&&(w=Jt(w+p-(p*E+g*M)+m),v=Jt(v+g-(p*S+g*x)+_)),(i||s)&&(b=d.getBBox(),w=Jt(w+i/100*b.width),v=Jt(v+s/100*b.height)),b="matrix("+E+","+S+","+M+","+x+","+w+","+v+")",d.setAttribute("transform",b),T&&(d.style[Wt]=b)},nx=function(e,t,n,i,s){var a=360,o=yn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?vs:1),c=l-i,u=i+c+"deg",f,h;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Td)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Td)%a-~~(c/a)*a)),e._pt=h=new Jn(e._pt,t,n,i,c,B0),h.e=u,h.u="deg",e._props.push(n),h},Ld=function(e,t){for(var n in t)e[n]=t[n];return e},ix=function(e,t,n){var i=Ld({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,h,d,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[Wt]=t,o=Go(n,1),os(n,Wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Wt],a[Wt]=t,o=Go(n,1),a[Wt]=c);for(l in Dr)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(d=Ln(c),p=Ln(u),f=d!==p?ls(n,l,c,p):parseFloat(c),h=parseFloat(u),e._pt=new Jn(e._pt,o,l,f,h-f,eh),e._pt.u=p||0,e._props.push(l));Ld(o,i)};Zn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});mc[e>1?"border"+r:r]=function(o,l,c,u,f){var h,d;if(arguments.length<4)return h=a.map(function(p){return Mr(o,p,c)}),d=h.join(" "),d.split(h[0]).length===5?h[0]:d;h=(u+"").split(" "),d={},a.forEach(function(p,g){return d[p]=h[g]=h[g]||h[(g-1)/2|0]}),o.init(l,d,f)}});var S_={name:"css",register:nh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,h,d,p,g,m,_,T,w,v,E,S,M,x,b;wf||nh(),this.styles=this.styles||p_(e),x=this.styles.props,this.tween=n;for(g in t)if(g!=="autoRound"&&(u=t[g],!(ci[g]&&i_(g,t,n,i,e,s)))){if(d=typeof u,p=mc[g],d==="function"&&(u=u.call(n,i,e,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=ko(u)),p)p(this,e,g,u,n)&&(M=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(g)+"").trim(),u+="",rs.lastIndex=0,rs.test(c)||(m=Ln(c),_=Ln(u),_?m!==_&&(c=ls(e,g,c,_)+_):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,g),a.push(g),x.push(g,0,o[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,e,s):l[g],yn(c)&&~c.indexOf("random(")&&(c=ko(c)),Ln(c+"")||c==="auto"||(c+=_i.units[g]||Ln(Mr(e,g))||""),(c+"").charAt(1)==="="&&(c=Mr(e,g))):c=Mr(e,g),h=parseFloat(c),T=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),T&&(u=u.substr(2)),f=parseFloat(u),g in ir&&(g==="autoAlpha"&&(h===1&&Mr(e,"visibility")==="hidden"&&f&&(h=0),x.push("visibility",0,o.visibility),jr(this,o,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=ir[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in Dr,w){if(this.styles.save(g),b=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=mi(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=mi(e,"perspective"),R?e.style.perspective=R:os(e,"perspective")}f=parseFloat(u)}if(v||(E=e._gsap,E.renderTransform&&!t.parseTransform||Go(e,t.parseTransform),S=t.smoothOrigin!==!1&&E.smooth,v=this._pt=new Jn(this._pt,o,Wt,0,1,E.renderTransform,E,0,-1),v.dep=1),g==="scale")this._pt=new Jn(this._pt,E,"scaleY",E.scaleY,(T?Sa(E.scaleY,T+f):f)-E.scaleY||0,eh),this._pt.u=0,a.push("scaleY",g),g+="X";else if(g==="transformOrigin"){x.push(Qn,0,o[Qn]),u=Q0(u),E.svg?ih(e,u,0,S,0,this):(_=parseFloat(u.split(" ")[2])||0,_!==E.zOrigin&&jr(this,E,"zOrigin",E.zOrigin,_),jr(this,o,g,_c(c),_c(u)));continue}else if(g==="svgOrigin"){ih(e,u,1,S,0,this);continue}else if(g in x_){nx(this,E,g,h,T?Sa(h,T+u):u);continue}else if(g==="smoothOrigin"){jr(this,E,"smooth",E.smooth,u);continue}else if(g==="force3D"){E[g]=u;continue}else if(g==="transform"){ix(this,u,e);continue}}else g in o||(g=Fa(g)||g);if(w||(f||f===0)&&(h||h===0)&&!O0.test(u)&&g in o)m=(c+"").substr((h+"").length),f||(f=0),_=Ln(u)||(g in _i.units?_i.units[g]:m),m!==_&&(h=ls(e,g,c,_)),this._pt=new Jn(this._pt,w?E:o,g,h,(T?Sa(h,T+f):f)-h,!w&&(_==="px"||g==="zIndex")&&t.autoRound!==!1?V0:eh),this._pt.u=_||0,w&&b!==u?(this._pt.b=c,this._pt.e=b,this._pt.r=z0):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=k0);else if(g in o)J0.call(this,e,g,c,T?T+u:u);else if(g in e)this.add(e,g,c||e[g],T?T+u:u,i,s);else if(g!=="parseTransform"){_f(g,u);continue}w||(g in o?x.push(g,0,o[g]):typeof e[g]=="function"?x.push(g,2,e[g]()):x.push(g,1,c||e[g])),a.push(g)}}M&&c_(this)},render:function(e,t){if(t.tween._time||!Af())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Mr,aliases:ir,getSetter:function(e,t,n){var i=ir[t];return i&&i.indexOf(",")<0&&(t=i),t in Dr&&t!==Qn&&(e._gsap.x||Mr(e,"x"))?n&&bd===n?t==="scale"?X0:W0:(bd=n||{})&&(t==="scale"?q0:Y0):e.style&&!df(e.style[t])?H0:~t.indexOf("-")?G0:Tf(e,t)},core:{_removeProperty:os,_getMatrix:Cf}};ei.utils.checkPrefix=Fa;ei.core.getStyleSaver=p_;(function(r,e,t,n){var i=Zn(r+","+e+","+t,function(s){Dr[s]=1});Zn(e,function(s){_i.units[s]="deg",x_[s]=1}),ir[i[13]]=r+","+e,Zn(n,function(s){var a=s.split(":");ir[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){_i.units[r]="px"});ei.registerPlugin(S_);var je=ei.registerPlugin(S_)||ei;je.core.Tween;function rx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function sx(r,e,t){return e&&rx(r.prototype,e),r}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Sn,Zl,fi,es,ts,Ta,M_,ys,Ea,b_,Er,Bi,T_,E_=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},w_=1,ya=[],dt=[],or=[],To=Date.now,rh=function(e,t){return t},ax=function(){var e=Ea.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,dt),i.push.apply(i,or),dt=n,or=i,rh=function(a,o){return t[a](o)}},ss=function(e,t){return~or.indexOf(e)&&or[or.indexOf(e)+1][t]},Eo=function(e){return!!~b_.indexOf(e)},Bn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Fn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},sl="scrollLeft",al="scrollTop",sh=function(){return Er&&Er.isPressed||dt.cache++},gc=function(e,t){var n=function i(s){if(s||s===0){w_&&(fi.history.scrollRestoration="manual");var a=Er&&Er.isPressed;s=i.v=Math.round(s)||(Er&&Er.iOS?1:0),e(s),i.cacheID=dt.cache,a&&rh("ss",s)}else(t||dt.cache!==i.cacheID||rh("ref"))&&(i.cacheID=dt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Wn={s:sl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gc(function(r){return arguments.length?fi.scrollTo(r,un.sc()):fi.pageXOffset||es[sl]||ts[sl]||Ta[sl]||0})},un={s:al,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Wn,sc:gc(function(r){return arguments.length?fi.scrollTo(Wn.sc(),r):fi.pageYOffset||es[al]||ts[al]||Ta[al]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Sn.utils.toArray)(e)[0]||(typeof e=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},ox=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},cs=function(e,t){var n=t.s,i=t.sc;Eo(e)&&(e=es.scrollingElement||ts);var s=dt.indexOf(e),a=i===un.sc?1:2;!~s&&(s=dt.push(e)-1),dt[s+a]||Bn(e,"scroll",sh);var o=dt[s+a],l=o||(dt[s+a]=gc(ss(e,n),!0)||(Eo(e)?i:gc(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=Sn.getProperty(e,"scrollBehavior")==="smooth"),l},ah=function(e,t,n){var i=e,s=e,a=To(),o=a,l=t||50,c=Math.max(500,l*3),u=function(p,g){var m=To();g||m-a>l?(s=i,i=p,o=a,a=m):n?i+=p:i=s+(p-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},h=function(p){var g=o,m=s,_=To();return(p||p===0)&&p!==i&&u(p),a===o||_-o>c?0:(i+(n?m:-m))/((n?_:a)-g)*1e3};return{update:u,reset:f,getVelocity:h}},Za=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Dd=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},A_=function(){Ea=Sn.core.globals().ScrollTrigger,Ea&&Ea.core&&ax()},R_=function(e){return Sn=e||E_(),!Zl&&Sn&&typeof document<"u"&&document.body&&(fi=window,es=document,ts=es.documentElement,Ta=es.body,b_=[fi,es,ts,Ta],Sn.utils.clamp,T_=Sn.core.context||function(){},ys="onpointerenter"in Ta?"pointer":"mouse",M_=Qt.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Bi=Qt.eventTypes=("ontouchstart"in ts?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ts?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return w_=0},500),Zl=1),Ea||A_(),Zl};Wn.op=un;dt.cache=0;var Qt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Zl||R_(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),Ea||A_();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,h=n.onStopDelay,d=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,_=n.onDragEnd,T=n.onDrag,w=n.onPress,v=n.onRelease,E=n.onRight,S=n.onLeft,M=n.onUp,x=n.onDown,b=n.onChangeX,R=n.onChangeY,P=n.onChange,D=n.onToggleX,V=n.onToggleY,z=n.onHover,U=n.onHoverEnd,k=n.onMove,I=n.ignoreCheck,J=n.isNormalizer,ie=n.onGestureStart,L=n.onGestureEnd,he=n.onWheel,_e=n.onEnable,ze=n.onDisable,Xe=n.onClick,He=n.scrollSpeed,j=n.capture,fe=n.allowClicks,oe=n.lockAxis,O=n.onLockAxis;this.target=o=qn(o)||ts,this.vars=n,d&&(d=Sn.utils.toArray(d)),i=i||1e-9,s=s||0,p=p||1,He=He||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(Ta).lineHeight)||22);var ae,te,Le,pe,H,K,q,N=this,le=0,Ae=0,Ie=n.passive||!u&&n.passive!==!1,De=cs(o,Wn),tt=cs(o,un),B=De(),Ft=tt(),Qe=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Bi[0]==="pointerdown",C=Eo(o),y=o.ownerDocument||es,W=[0,0,0],$=[0,0,0],ee=0,ve=function(){return ee=To()},ge=function(ue,Ke){return(N.event=ue)&&d&&ox(ue.target,d)||Ke&&Qe&&ue.pointerType!=="touch"||I&&I(ue,Ke)},ne=function(){N._vx.reset(),N._vy.reset(),te.pause(),f&&f(N)},re=function(){var ue=N.deltaX=Dd(W),Ke=N.deltaY=Dd($),me=Math.abs(ue)>=i,$e=Math.abs(Ke)>=i;P&&(me||$e)&&P(N,ue,Ke,W,$),me&&(E&&N.deltaX>0&&E(N),S&&N.deltaX<0&&S(N),b&&b(N),D&&N.deltaX<0!=le<0&&D(N),le=N.deltaX,W[0]=W[1]=W[2]=0),$e&&(x&&N.deltaY>0&&x(N),M&&N.deltaY<0&&M(N),R&&R(N),V&&N.deltaY<0!=Ae<0&&V(N),Ae=N.deltaY,$[0]=$[1]=$[2]=0),(pe||Le)&&(k&&k(N),Le&&(m&&Le===1&&m(N),T&&T(N),Le=0),pe=!1),K&&!(K=!1)&&O&&O(N),H&&(he(N),H=!1),ae=0},Me=function(ue,Ke,me){W[me]+=ue,$[me]+=Ke,N._vx.update(ue),N._vy.update(Ke),c?ae||(ae=requestAnimationFrame(re)):re()},Fe=function(ue,Ke){oe&&!q&&(N.axis=q=Math.abs(ue)>Math.abs(Ke)?"x":"y",K=!0),q!=="y"&&(W[2]+=ue,N._vx.update(ue,!0)),q!=="x"&&($[2]+=Ke,N._vy.update(Ke,!0)),c?ae||(ae=requestAnimationFrame(re)):re()},be=function(ue){if(!ge(ue,1)){ue=Za(ue,u);var Ke=ue.clientX,me=ue.clientY,$e=Ke-N.x,Oe=me-N.y,et=N.isDragging;N.x=Ke,N.y=me,(et||($e||Oe)&&(Math.abs(N.startX-Ke)>=s||Math.abs(N.startY-me)>=s))&&(Le||(Le=et?2:1),et||(N.isDragging=!0),Fe($e,Oe))}},Se=N.onPress=function(de){ge(de,1)||de&&de.button||(N.axis=q=null,te.pause(),N.isPressed=!0,de=Za(de),le=Ae=0,N.startX=N.x=de.clientX,N.startY=N.y=de.clientY,N._vx.reset(),N._vy.reset(),Bn(J?o:y,Bi[1],be,Ie,!0),N.deltaX=N.deltaY=0,w&&w(N))},xe=N.onRelease=function(de){if(!ge(de,1)){Fn(J?o:y,Bi[1],be,!0);var ue=!isNaN(N.y-N.startY),Ke=N.isDragging,me=Ke&&(Math.abs(N.x-N.startX)>3||Math.abs(N.y-N.startY)>3),$e=Za(de);!me&&ue&&(N._vx.reset(),N._vy.reset(),u&&fe&&Sn.delayedCall(.08,function(){if(To()-ee>300&&!de.defaultPrevented){if(de.target.click)de.target.click();else if(y.createEvent){var Oe=y.createEvent("MouseEvents");Oe.initMouseEvent("click",!0,!0,fi,1,$e.screenX,$e.screenY,$e.clientX,$e.clientY,!1,!1,!1,!1,0,null),de.target.dispatchEvent(Oe)}}})),N.isDragging=N.isGesturing=N.isPressed=!1,f&&Ke&&!J&&te.restart(!0),Le&&re(),_&&Ke&&_(N),v&&v(N,me)}},Ge=function(ue){return ue.touches&&ue.touches.length>1&&(N.isGesturing=!0)&&ie(ue,N.isDragging)},Ye=function(){return(N.isGesturing=!1)||L(N)},F=function(ue){if(!ge(ue)){var Ke=De(),me=tt();Me((Ke-B)*He,(me-Ft)*He,1),B=Ke,Ft=me,f&&te.restart(!0)}},ye=function(ue){if(!ge(ue)){ue=Za(ue,u),he&&(H=!0);var Ke=(ue.deltaMode===1?l:ue.deltaMode===2?fi.innerHeight:1)*p;Me(ue.deltaX*Ke,ue.deltaY*Ke,0),f&&!J&&te.restart(!0)}},se=function(ue){if(!ge(ue)){var Ke=ue.clientX,me=ue.clientY,$e=Ke-N.x,Oe=me-N.y;N.x=Ke,N.y=me,pe=!0,f&&te.restart(!0),($e||Oe)&&Fe($e,Oe)}},Te=function(ue){N.event=ue,z(N)},Ee=function(ue){N.event=ue,U(N)},ce=function(ue){return ge(ue)||Za(ue,u)&&Xe(N)};te=N._dc=Sn.delayedCall(h||.25,ne).pause(),N.deltaX=N.deltaY=0,N._vx=ah(0,50,!0),N._vy=ah(0,50,!0),N.scrollX=De,N.scrollY=tt,N.isDragging=N.isGesturing=N.isPressed=!1,T_(this),N.enable=function(de){return N.isEnabled||(Bn(C?y:o,"scroll",sh),a.indexOf("scroll")>=0&&Bn(C?y:o,"scroll",F,Ie,j),a.indexOf("wheel")>=0&&Bn(o,"wheel",ye,Ie,j),(a.indexOf("touch")>=0&&M_||a.indexOf("pointer")>=0)&&(Bn(o,Bi[0],Se,Ie,j),Bn(y,Bi[2],xe),Bn(y,Bi[3],xe),fe&&Bn(o,"click",ve,!0,!0),Xe&&Bn(o,"click",ce),ie&&Bn(y,"gesturestart",Ge),L&&Bn(y,"gestureend",Ye),z&&Bn(o,ys+"enter",Te),U&&Bn(o,ys+"leave",Ee),k&&Bn(o,ys+"move",se)),N.isEnabled=!0,N.isDragging=N.isGesturing=N.isPressed=pe=Le=!1,N._vx.reset(),N._vy.reset(),B=De(),Ft=tt(),de&&de.type&&Se(de),_e&&_e(N)),N},N.disable=function(){N.isEnabled&&(ya.filter(function(de){return de!==N&&Eo(de.target)}).length||Fn(C?y:o,"scroll",sh),N.isPressed&&(N._vx.reset(),N._vy.reset(),Fn(J?o:y,Bi[1],be,!0)),Fn(C?y:o,"scroll",F,j),Fn(o,"wheel",ye,j),Fn(o,Bi[0],Se,j),Fn(y,Bi[2],xe),Fn(y,Bi[3],xe),Fn(o,"click",ve,!0),Fn(o,"click",ce),Fn(y,"gesturestart",Ge),Fn(y,"gestureend",Ye),Fn(o,ys+"enter",Te),Fn(o,ys+"leave",Ee),Fn(o,ys+"move",se),N.isEnabled=N.isPressed=N.isDragging=!1,ze&&ze(N))},N.kill=N.revert=function(){N.disable();var de=ya.indexOf(N);de>=0&&ya.splice(de,1),Er===N&&(Er=0)},ya.push(N),J&&Eo(o)&&(Er=N),N.enable(g)},sx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Qt.version="3.15.0";Qt.create=function(r){return new Qt(r)};Qt.register=R_;Qt.getAll=function(){return ya.slice()};Qt.getById=function(r){return ya.filter(function(e){return e.vars.id===r})[0]};E_()&&Sn.registerPlugin(Qt);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ue,_a,ft,Mt,ui,St,Pf,xc,Wo,wo,fo,ol,Cn,Ic,oh,Vn,Id,Nd,ga,C_,Zc,P_,zn,lh,L_,D_,Kr,ch,Lf,wa,Df,Ao,uh,Jc,ll=1,Pn=Date.now,Qc=Pn(),Di=0,po=0,Ud=function(e,t,n){var i=oi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Fd=function(e,t){return t&&(!oi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},lx=function r(){return po&&requestAnimationFrame(r)},Od=function(){return Ic=1},Bd=function(){return Ic=0},ji=function(e){return e},mo=function(e){return Math.round(e*1e5)/1e5||0},I_=function(){return typeof window<"u"},N_=function(){return Ue||I_()&&(Ue=window.gsap)&&Ue.registerPlugin&&Ue},Us=function(e){return!!~Pf.indexOf(e)},U_=function(e){return(e==="Height"?Df:ft["inner"+e])||ui["client"+e]||St["client"+e]},F_=function(e){return ss(e,"getBoundingClientRect")||(Us(e)?function(){return tc.width=ft.innerWidth,tc.height=Df,tc}:function(){return br(e)})},cx=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=ss(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?U_(s):e["client"+s])||0}},ux=function(e,t){return!t||~or.indexOf(e)?F_(e):function(){return tc}},rr=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=ss(e,n))?a()-F_(e)()[s]:Us(e)?(ui[n]||St[n])-U_(i):e[n]-e["offset"+i])},cl=function(e,t){for(var n=0;n<ga.length;n+=3)(!t||~t.indexOf(ga[n+1]))&&e(ga[n],ga[n+1],ga[n+2])},oi=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},_o=function(e){return typeof e=="number"},Ss=function(e){return typeof e=="object"},Ja=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Ks=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},$s=Math.abs,O_="left",B_="top",If="right",Nf="bottom",Ds="width",Is="height",Ro="Right",Co="Left",Po="Top",Lo="Bottom",rn="padding",Ei="margin",Oa="Width",Uf="Height",cn="px",wi=function(e){return ft.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},hx=function(e){var t=wi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},kd=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},br=function(e,t){var n=t&&wi(e)[oh]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ue.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},vc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},k_=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},fx=function(e){return function(t){return Ue.utils.snap(k_(e),t)}},Ff=function(e){var t=Ue.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},dx=function(e){return function(t,n){return Ff(k_(e))(t,n.direction)}},ul=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},gn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},hl=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},zd={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fl={toggleActions:"play",anticipatePin:0},yc={top:0,left:0,center:.5,bottom:1,right:1},Jl=function(e,t){if(oi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in yc?yc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},dl=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,h=s.indent,d=s.fontWeight,p=Mt.createElement("div"),g=Us(n)||ss(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,_=g?St:n.tagName==="IFRAME"?n.contentDocument.body:n,T=e.indexOf("start")!==-1,w=T?c:u,v="border-color:"+w+";font-size:"+f+";color:"+w+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(v+=(i===un?If:Nf)+":"+(a+parseFloat(h))+"px;"),o&&(v+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),p._isStart=T,p.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),p.style.cssText=v,p.innerText=t||t===0?e+"-"+t:e,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],Ql(p,0,i,T),p},Ql=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+Oa]=1,s["border"+o+Oa]=0,s[n.p]=t+"px",Ue.set(e,s)},ut=[],hh={},Xo,Vd=function(){return Pn()-Di>34&&(Xo||(Xo=requestAnimationFrame(Rr)))},Zs=function(){(!zn||!zn.isPressed||zn.startX>St.clientWidth)&&(dt.cache++,zn?Xo||(Xo=requestAnimationFrame(Rr)):Rr(),Di||Os("scrollStart"),Di=Pn())},jc=function(){D_=ft.innerWidth,L_=ft.innerHeight},go=function(e){dt.cache++,(e===!0||!Cn&&!P_&&!Mt.fullscreenElement&&!Mt.webkitFullscreenElement&&(!lh||D_!==ft.innerWidth||Math.abs(ft.innerHeight-L_)>ft.innerHeight*.25))&&xc.restart(!0)},Fs={},px=[],z_=function r(){return gn(st,"scrollEnd",r)||ws(!0)},Os=function(e){return Fs[e]&&Fs[e].map(function(t){return t()})||px},ai=[],V_=function(e){for(var t=0;t<ai.length;t+=5)(!e||ai[t+4]&&ai[t+4].query===e)&&(ai[t].style.cssText=ai[t+1],ai[t].getBBox&&ai[t].setAttribute("transform",ai[t+2]||""),ai[t+3].uncache=1)},H_=function(){return dt.forEach(function(e){return Dn(e)&&++e.cacheID&&(e.rec=e())})},Of=function(e,t){var n;for(Vn=0;Vn<ut.length;Vn++)n=ut[Vn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Ao=!0,t&&V_(t),t||Os("revert")},G_=function(e,t){dt.cache++,(t||!Hn)&&dt.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),oi(e)&&(ft.history.scrollRestoration=Lf=e)},Hn,Ns=0,Hd,mx=function(){if(Hd!==Ns){var e=Hd=Ns;requestAnimationFrame(function(){return e===Ns&&ws(!0)})}},W_=function(){St.appendChild(wa),Df=!zn&&wa.offsetHeight||ft.innerHeight,St.removeChild(wa)},Gd=function(e){return Wo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ws=function(e,t){if(ui=Mt.documentElement,St=Mt.body,Pf=[ft,Mt,ui,St],Di&&!e&&!Ao){vn(st,"scrollEnd",z_);return}W_(),Hn=st.isRefreshing=!0,Ao||H_();var n=Os("refreshInit");C_&&st.sort(),t||Of(),dt.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ut.slice(0).forEach(function(i){return i.refresh()}),Ao=!1,ut.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),uh=1,Gd(!0),ut.forEach(function(i){var s=rr(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),Gd(!1),uh=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),dt.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),G_(Lf,1),xc.pause(),Ns++,Hn=2,Rr(2),ut.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Hn=st.isRefreshing=!1,Os("refresh")},fh=0,jl=1,Do,Rr=function(e){if(e===2||!Hn&&!Ao){st.isUpdating=!0,Do&&Do.update(0);var t=ut.length,n=Pn(),i=n-Qc>=50,s=t&&ut[0].scroll();if(jl=fh>s?-1:1,Hn||(fh=s),i&&(Di&&!Ic&&n-Di>200&&(Di=0,Os("scrollEnd")),fo=Qc,Qc=n),jl<0){for(Vn=t;Vn-- >0;)ut[Vn]&&ut[Vn].update(0,i);jl=1}else for(Vn=0;Vn<t;Vn++)ut[Vn]&&ut[Vn].update(0,i);st.isUpdating=!1}Xo=0},dh=[O_,B_,Nf,If,Ei+Lo,Ei+Ro,Ei+Po,Ei+Co,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ec=dh.concat([Ds,Is,"boxSizing","max"+Oa,"max"+Uf,"position",Ei,rn,rn+Po,rn+Ro,rn+Lo,rn+Co]),_x=function(e,t,n){Aa(n);var i=e._gsap;if(i.spacerIsNative)Aa(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},eu=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=dh.length,a=t.style,o=e.style,l;s--;)l=dh[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Nf]=o[If]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ds]=vc(e,Wn)+cn,a[Is]=vc(e,un)+cn,a[rn]=o[Ei]=o[B_]=o[O_]="0",Aa(i),o[Ds]=o["max"+Oa]=n[Ds],o[Is]=o["max"+Uf]=n[Is],o[rn]=n[rn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},gx=/([A-Z])/g,Aa=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ue.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(gx,"-$1").toLowerCase())}},pl=function(e){for(var t=ec.length,n=e.style,i=[],s=0;s<t;s++)i.push(ec[s],n[ec[s]]);return i.t=e,i},xx=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},tc={left:0,top:0},Wd=function(e,t,n,i,s,a,o,l,c,u,f,h,d,p){Dn(e)&&(e=e(l)),oi(e)&&e.substr(0,3)==="max"&&(e=h+(e.charAt(4)==="="?Jl("0"+e.substr(3),n):0));var g=d?d.time():0,m,_,T;if(d&&d.seek(0),isNaN(e)||(e=+e),_o(e))d&&(e=Ue.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,h,e)),o&&Ql(o,n,i,!0);else{Dn(t)&&(t=t(l));var w=(e||"0").split(" "),v,E,S,M;T=qn(t,l)||St,v=br(T)||{},(!v||!v.left&&!v.top)&&wi(T).display==="none"&&(M=T.style.display,T.style.display="block",v=br(T),M?T.style.display=M:T.style.removeProperty("display")),E=Jl(w[0],v[i.d]),S=Jl(w[1]||"0",n),e=v[i.p]-c[i.p]-u+E+s-S,o&&Ql(o,S,i,n-S<20||o._isStart&&S>20),n-=n-S}if(p&&(l[p]=e||-.001,e<0&&(e=0)),a){var x=e+n,b=a._isStart;m="scroll"+i.d2,Ql(a,x,i,b&&x>20||!b&&(f?Math.max(St[m],ui[m]):a.parentNode[m])<=x+1),f&&(c=br(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+cn))}return d&&T&&(m=br(T),d.seek(h),_=br(T),d._caScrollDist=m[i.p]-_[i.p],e=e/d._caScrollDist*h),d&&d.seek(g),d?e:Math.round(e)},vx=/(webkit|moz|length|cssText|inset)/i,Xd=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===St){e._stOrig=s.cssText,o=wi(e);for(a in o)!+a&&!vx.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ue.core.getCache(e).uncache=1,t.appendChild(e)}},X_=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},ml=function(e,t,n){var i={};i[t.p]="+="+n,Ue.set(e,i)},qd=function(e,t){var n=cs(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var h=a.tween,d=l.onComplete,p={};c=c||n();var g=X_(n,c,function(){h.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,h&&h.kill(),l[i]=o,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+u*h.ratio+f*h.ratio*h.ratio)},l.onUpdate=function(){dt.cache++,a.tween&&Rr()},l.onComplete=function(){a.tween=0,d&&d.call(h)},h=a.tween=Ue.to(e,l),h};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},vn(e,"wheel",n.wheelHandler),st.isTouch&&vn(e,"touchmove",n.wheelHandler),s},st=(function(){function r(t,n){_a||r.register(Ue)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),ch(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!po){this.update=this.refresh=this.kill=ji;return}n=kd(oi(n)||_o(n)||n.nodeType?{trigger:n}:n,fl);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,h=s.trigger,d=s.pin,p=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,_=s.onScrubComplete,T=s.onSnapComplete,w=s.once,v=s.snap,E=s.pinReparent,S=s.pinSpacer,M=s.containerAnimation,x=s.fastScrollEnd,b=s.preventOverlaps,R=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Wn:un,P=!f&&f!==0,D=qn(n.scroller||ft),V=Ue.core.getCache(D),z=Us(D),U=("pinType"in n?n.pinType:ss(D,"pinType")||z&&"fixed")==="fixed",k=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],I=P&&n.toggleActions.split(" "),J="markers"in n?n.markers:fl.markers,ie=z?0:parseFloat(wi(D)["border"+R.p2+Oa])||0,L=this,he=n.onRefreshInit&&function(){return n.onRefreshInit(L)},_e=cx(D,z,R),ze=ux(D,z),Xe=0,He=0,j=0,fe=cs(D,R),oe,O,ae,te,Le,pe,H,K,q,N,le,Ae,Ie,De,tt,B,Ft,Qe,C,y,W,$,ee,ve,ge,ne,re,Me,Fe,be,Se,xe,Ge,Ye,F,ye,se,Te,Ee;if(L._startClamp=L._endClamp=!1,L._dir=R,m*=45,L.scroller=D,L.scroll=M?M.time.bind(M):fe,te=fe(),L.vars=n,i=i||n.animation,"refreshPriority"in n&&(C_=1,n.refreshPriority===-9999&&(Do=L)),V.tweenScroll=V.tweenScroll||{top:qd(D,un),left:qd(D,Wn)},L.tweenTo=oe=V.tweenScroll[R.p],L.scrubDuration=function(me){Ge=_o(me)&&me,Ge?xe?xe.duration(me):xe=Ue.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:Ge,paused:!0,onComplete:function(){return _&&_(L)}}):(xe&&xe.progress(1).kill(),xe=0)},i&&(i.vars.lazy=!1,i._initted&&!L.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),L.animation=i.pause(),i.scrollTrigger=L,L.scrubDuration(f),be=0,l||(l=i.vars.id)),v&&((!Ss(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in St.style&&Ue.set(z?[St,ui]:D,{scrollBehavior:"auto"}),dt.forEach(function(me){return Dn(me)&&me.target===(z?Mt.scrollingElement||ui:D)&&(me.smooth=!1)}),ae=Dn(v.snapTo)?v.snapTo:v.snapTo==="labels"?fx(i):v.snapTo==="labelsDirectional"?dx(i):v.directional!==!1?function(me,$e){return Ff(v.snapTo)(me,Pn()-He<500?0:$e.direction)}:Ue.utils.snap(v.snapTo),Ye=v.duration||{min:.1,max:2},Ye=Ss(Ye)?wo(Ye.min,Ye.max):wo(Ye,Ye),F=Ue.delayedCall(v.delay||Ge/2||.1,function(){var me=fe(),$e=Pn()-He<500,Oe=oe.tween;if(($e||Math.abs(L.getVelocity())<10)&&!Oe&&!Ic&&Xe!==me){var et=(me-pe)/De,en=i&&!P?i.totalProgress():et,ht=$e?0:(en-Se)/(Pn()-fo)*1e3||0,Ot=Ue.utils.clamp(-et,1-et,$s(ht/2)*ht/.185),pn=et+(v.inertia===!1?0:Ot),Bt,Rt,gt=v,Nn=gt.onStart,Nt=gt.onInterrupt,Tn=gt.onComplete;if(Bt=ae(pn,L),_o(Bt)||(Bt=pn),Rt=Math.max(0,Math.round(pe+Bt*De)),me<=H&&me>=pe&&Rt!==me){if(Oe&&!Oe._initted&&Oe.data<=$s(Rt-me))return;v.inertia===!1&&(Ot=Bt-et),oe(Rt,{duration:Ye($s(Math.max($s(pn-en),$s(Bt-en))*.185/ht/.05||0)),ease:v.ease||"power3",data:$s(Rt-me),onInterrupt:function(){return F.restart(!0)&&Nt&&Ks(L,Nt)},onComplete:function(){L.update(),Xe=fe(),i&&!P&&(xe?xe.resetTo("totalProgress",Bt,i._tTime/i._tDur):i.progress(Bt)),be=Se=i&&!P?i.totalProgress():L.progress,T&&T(L),Tn&&Ks(L,Tn)}},me,Ot*De,Rt-me-Ot*De),Nn&&Ks(L,Nn,oe.tween)}}else L.isActive&&Xe!==me&&F.restart(!0)}).pause()),l&&(hh[l]=L),h=L.trigger=qn(h||d!==!0&&d),Ee=h&&h._gsap&&h._gsap.stRevert,Ee&&(Ee=Ee(L)),d=d===!0?h:qn(d),oi(o)&&(o={targets:h,className:o}),d&&(p===!1||p===Ei||(p=!p&&d.parentNode&&d.parentNode.style&&wi(d.parentNode).display==="flex"?!1:rn),L.pin=d,O=Ue.core.getCache(d),O.spacer?tt=O.pinState:(S&&(S=qn(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),O.spacerIsNative=!!S,S&&(O.spacerState=pl(S))),O.spacer=Qe=S||Mt.createElement("div"),Qe.classList.add("pin-spacer"),l&&Qe.classList.add("pin-spacer-"+l),O.pinState=tt=pl(d)),n.force3D!==!1&&Ue.set(d,{force3D:!0}),L.spacer=Qe=O.spacer,Fe=wi(d),ve=Fe[p+R.os2],y=Ue.getProperty(d),W=Ue.quickSetter(d,R.a,cn),eu(d,Qe,Fe),Ft=pl(d)),J){Ae=Ss(J)?kd(J,zd):zd,N=dl("scroller-start",l,D,R,Ae,0),le=dl("scroller-end",l,D,R,Ae,0,N),C=N["offset"+R.op.d2];var ce=qn(ss(D,"content")||D);K=this.markerStart=dl("start",l,ce,R,Ae,C,0,M),q=this.markerEnd=dl("end",l,ce,R,Ae,C,0,M),M&&(Te=Ue.quickSetter([K,q],R.a,cn)),!U&&!(or.length&&ss(D,"fixedMarkers")===!0)&&(hx(z?St:D),Ue.set([N,le],{force3D:!0}),ne=Ue.quickSetter(N,R.a,cn),Me=Ue.quickSetter(le,R.a,cn))}if(M){var de=M.vars.onUpdate,ue=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){L.update(0,0,1),de&&de.apply(M,ue||[])})}if(L.previous=function(){return ut[ut.indexOf(L)-1]},L.next=function(){return ut[ut.indexOf(L)+1]},L.revert=function(me,$e){if(!$e)return L.kill(!0);var Oe=me!==!1||!L.enabled,et=Cn;Oe!==L.isReverted&&(Oe&&(ye=Math.max(fe(),L.scroll.rec||0),j=L.progress,se=i&&i.progress()),K&&[K,q,N,le].forEach(function(en){return en.style.display=Oe?"none":"block"}),Oe&&(Cn=L,L.update(Oe)),d&&(!E||!L.isActive)&&(Oe?_x(d,Qe,tt):eu(d,Qe,wi(d),ge)),Oe||L.update(Oe),Cn=et,L.isReverted=Oe)},L.refresh=function(me,$e,Oe,et){if(!((Cn||!L.enabled)&&!$e)){if(d&&me&&Di){vn(r,"scrollEnd",z_);return}!Hn&&he&&he(L),Cn=L,oe.tween&&!Oe&&(oe.tween.kill(),oe.tween=0),xe&&xe.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(Re){return Re.vars.immediateRender&&Re.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),L.isReverted||L.revert(!0,!0),L._subPinOffset=!1;var en=_e(),ht=ze(),Ot=M?M.duration():rr(D,R),pn=De<=.01||!De,Bt=0,Rt=et||0,gt=Ss(Oe)?Oe.end:n.end,Nn=n.endTrigger||h,Nt=Ss(Oe)?Oe.start:n.start||(n.start===0||!h?0:d?"0 0":"0 100%"),Tn=L.pinnedContainer=n.pinnedContainer&&qn(n.pinnedContainer,L),Un=h&&Math.max(0,ut.indexOf(L))||0,tn=Un,Xt,ln,qi,Ws,mn,Kt,yi,A,G,Q,Y,Z,we;for(J&&Ss(Oe)&&(Z=Ue.getProperty(N,R.p),we=Ue.getProperty(le,R.p));tn-- >0;)Kt=ut[tn],Kt.end||Kt.refresh(0,1)||(Cn=L),yi=Kt.pin,yi&&(yi===h||yi===d||yi===Tn)&&!Kt.isReverted&&(Q||(Q=[]),Q.unshift(Kt),Kt.revert(!0,!0)),Kt!==ut[tn]&&(Un--,tn--);for(Dn(Nt)&&(Nt=Nt(L)),Nt=Ud(Nt,"start",L),pe=Wd(Nt,h,en,R,fe(),K,N,L,ht,ie,U,Ot,M,L._startClamp&&"_startClamp")||(d?-.001:0),Dn(gt)&&(gt=gt(L)),oi(gt)&&!gt.indexOf("+=")&&(~gt.indexOf(" ")?gt=(oi(Nt)?Nt.split(" ")[0]:"")+gt:(Bt=Jl(gt.substr(2),en),gt=oi(Nt)?Nt:(M?Ue.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,pe):pe)+Bt,Nn=h)),gt=Ud(gt,"end",L),H=Math.max(pe,Wd(gt||(Nn?"100% 0":Ot),Nn,en,R,fe()+Bt,q,le,L,ht,ie,U,Ot,M,L._endClamp&&"_endClamp"))||-.001,Bt=0,tn=Un;tn--;)Kt=ut[tn]||{},yi=Kt.pin,yi&&Kt.start-Kt._pinPush<=pe&&!M&&Kt.end>0&&(Xt=Kt.end-(L._startClamp?Math.max(0,Kt.start):Kt.start),(yi===h&&Kt.start-Kt._pinPush<pe||yi===Tn)&&isNaN(Nt)&&(Bt+=Xt*(1-Kt.progress)),yi===d&&(Rt+=Xt));if(pe+=Bt,H+=Bt,L._startClamp&&(L._startClamp+=Bt),L._endClamp&&!Hn&&(L._endClamp=H||-.001,H=Math.min(H,rr(D,R))),De=H-pe||(pe-=.01)&&.001,pn&&(j=Ue.utils.clamp(0,1,Ue.utils.normalize(pe,H,ye))),L._pinPush=Rt,K&&Bt&&(Xt={},Xt[R.a]="+="+Bt,Tn&&(Xt[R.p]="-="+fe()),Ue.set([K,q],Xt)),d&&!(uh&&L.end>=rr(D,R)))Xt=wi(d),Ws=R===un,qi=fe(),$=parseFloat(y(R.a))+Rt,!Ot&&H>1&&(Y=(z?Mt.scrollingElement||ui:D).style,Y={style:Y,value:Y["overflow"+R.a.toUpperCase()]},z&&wi(St)["overflow"+R.a.toUpperCase()]!=="scroll"&&(Y.style["overflow"+R.a.toUpperCase()]="scroll")),eu(d,Qe,Xt),Ft=pl(d),ln=br(d,!0),A=U&&cs(D,Ws?Wn:un)(),p?(ge=[p+R.os2,De+Rt+cn],ge.t=Qe,tn=p===rn?vc(d,R)+De+Rt:0,tn&&(ge.push(R.d,tn+cn),Qe.style.flexBasis!=="auto"&&(Qe.style.flexBasis=tn+cn)),Aa(ge),Tn&&ut.forEach(function(Re){Re.pin===Tn&&Re.vars.pinSpacing!==!1&&(Re._subPinOffset=!0)}),U&&fe(ye)):(tn=vc(d,R),tn&&Qe.style.flexBasis!=="auto"&&(Qe.style.flexBasis=tn+cn)),U&&(mn={top:ln.top+(Ws?qi-pe:A)+cn,left:ln.left+(Ws?A:qi-pe)+cn,boxSizing:"border-box",position:"fixed"},mn[Ds]=mn["max"+Oa]=Math.ceil(ln.width)+cn,mn[Is]=mn["max"+Uf]=Math.ceil(ln.height)+cn,mn[Ei]=mn[Ei+Po]=mn[Ei+Ro]=mn[Ei+Lo]=mn[Ei+Co]="0",mn[rn]=Xt[rn],mn[rn+Po]=Xt[rn+Po],mn[rn+Ro]=Xt[rn+Ro],mn[rn+Lo]=Xt[rn+Lo],mn[rn+Co]=Xt[rn+Co],B=xx(tt,mn,E),Hn&&fe(0)),i?(G=i._initted,Zc(1),i.render(i.duration(),!0,!0),ee=y(R.a)-$+De+Rt,re=Math.abs(De-ee)>1,U&&re&&B.splice(B.length-2,2),i.render(0,!0,!0),G||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Zc(0)):ee=De,Y&&(Y.value?Y.style["overflow"+R.a.toUpperCase()]=Y.value:Y.style.removeProperty("overflow-"+R.a));else if(h&&fe()&&!M)for(ln=h.parentNode;ln&&ln!==St;)ln._pinOffset&&(pe-=ln._pinOffset,H-=ln._pinOffset),ln=ln.parentNode;Q&&Q.forEach(function(Re){return Re.revert(!1,!0)}),L.start=pe,L.end=H,te=Le=Hn?ye:fe(),!M&&!Hn&&(te<ye&&fe(ye),L.scroll.rec=0),L.revert(!1,!0),He=Pn(),F&&(Xe=-1,F.restart(!0)),Cn=0,i&&P&&(i._initted||se)&&i.progress()!==se&&i.progress(se||0,!0).render(i.time(),!0,!0),(pn||j!==L.progress||M||g||i&&!i._initted)&&(i&&!P&&(i._initted||j||i.vars.immediateRender!==!1)&&i.totalProgress(M&&pe<-.001&&!j?Ue.utils.normalize(pe,H,0):j,!0),L.progress=pn||(te-pe)/De===j?0:j),d&&p&&(Qe._pinOffset=Math.round(L.progress*ee)),xe&&xe.invalidate(),isNaN(Z)||(Z-=Ue.getProperty(N,R.p),we-=Ue.getProperty(le,R.p),ml(N,R,Z),ml(K,R,Z-(et||0)),ml(le,R,we),ml(q,R,we-(et||0))),pn&&!Hn&&L.update(),u&&!Hn&&!Ie&&(Ie=!0,u(L),Ie=!1)}},L.getVelocity=function(){return(fe()-Le)/(Pn()-fo)*1e3||0},L.endAnimation=function(){Ja(L.callbackAnimation),i&&(xe?xe.progress(1):i.paused()?P||Ja(i,L.direction<0,1):Ja(i,i.reversed()))},L.labelToScroll=function(me){return i&&i.labels&&(pe||L.refresh()||pe)+i.labels[me]/i.duration()*De||0},L.getTrailing=function(me){var $e=ut.indexOf(L),Oe=L.direction>0?ut.slice(0,$e).reverse():ut.slice($e+1);return(oi(me)?Oe.filter(function(et){return et.vars.preventOverlaps===me}):Oe).filter(function(et){return L.direction>0?et.end<=pe:et.start>=H})},L.update=function(me,$e,Oe){if(!(M&&!Oe&&!me)){var et=Hn===!0?ye:L.scroll(),en=me?0:(et-pe)/De,ht=en<0?0:en>1?1:en||0,Ot=L.progress,pn,Bt,Rt,gt,Nn,Nt,Tn,Un;if($e&&(Le=te,te=M?fe():et,v&&(Se=be,be=i&&!P?i.totalProgress():ht)),m&&d&&!Cn&&!ll&&Di&&(!ht&&pe<et+(et-Le)/(Pn()-fo)*m?ht=1e-4:ht===1&&H>et+(et-Le)/(Pn()-fo)*m&&(ht=.9999)),ht!==Ot&&L.enabled){if(pn=L.isActive=!!ht&&ht<1,Bt=!!Ot&&Ot<1,Nt=pn!==Bt,Nn=Nt||!!ht!=!!Ot,L.direction=ht>Ot?1:-1,L.progress=ht,Nn&&!Cn&&(Rt=ht&&!Ot?0:ht===1?1:Ot===1?2:3,P&&(gt=!Nt&&I[Rt+1]!=="none"&&I[Rt+1]||I[Rt],Un=i&&(gt==="complete"||gt==="reset"||gt in i))),b&&(Nt||Un)&&(Un||f||!i)&&(Dn(b)?b(L):L.getTrailing(b).forEach(function(qi){return qi.endAnimation()})),P||(xe&&!Cn&&!ll?(xe._dp._time-xe._start!==xe._time&&xe.render(xe._dp._time-xe._start),xe.resetTo?xe.resetTo("totalProgress",ht,i._tTime/i._tDur):(xe.vars.totalProgress=ht,xe.invalidate().restart())):i&&i.totalProgress(ht,!!(Cn&&(He||me)))),d){if(me&&p&&(Qe.style[p+R.os2]=ve),!U)W(mo($+ee*ht));else if(Nn){if(Tn=!me&&ht>Ot&&H+1>et&&et+1>=rr(D,R),E)if(!me&&(pn||Tn)){var tn=br(d,!0),Xt=et-pe;Xd(d,St,tn.top+(R===un?Xt:0)+cn,tn.left+(R===un?0:Xt)+cn)}else Xd(d,Qe);Aa(pn||Tn?B:Ft),re&&ht<1&&pn||W($+(ht===1&&!Tn?ee:0))}}v&&!oe.tween&&!Cn&&!ll&&F.restart(!0),o&&(Nt||w&&ht&&(ht<1||!Jc))&&Wo(o.targets).forEach(function(qi){return qi.classList[pn||w?"add":"remove"](o.className)}),a&&!P&&!me&&a(L),Nn&&!Cn?(P&&(Un&&(gt==="complete"?i.pause().totalProgress(1):gt==="reset"?i.restart(!0).pause():gt==="restart"?i.restart(!0):i[gt]()),a&&a(L)),(Nt||!Jc)&&(c&&Nt&&Ks(L,c),k[Rt]&&Ks(L,k[Rt]),w&&(ht===1?L.kill(!1,1):k[Rt]=0),Nt||(Rt=ht===1?1:3,k[Rt]&&Ks(L,k[Rt]))),x&&!pn&&Math.abs(L.getVelocity())>(_o(x)?x:2500)&&(Ja(L.callbackAnimation),xe?xe.progress(1):Ja(i,gt==="reverse"?1:!ht,1))):P&&a&&!Cn&&a(L)}if(Me){var ln=M?et/M.duration()*(M._caScrollDist||0):et;ne(ln+(N._isFlipped?1:0)),Me(ln)}Te&&Te(-et/M.duration()*(M._caScrollDist||0))}},L.enable=function(me,$e){L.enabled||(L.enabled=!0,vn(D,"resize",go),z||vn(D,"scroll",Zs),he&&vn(r,"refreshInit",he),me!==!1&&(L.progress=j=0,te=Le=Xe=fe()),$e!==!1&&L.refresh())},L.getTween=function(me){return me&&oe?oe.tween:xe},L.setPositions=function(me,$e,Oe,et){if(M){var en=M.scrollTrigger,ht=M.duration(),Ot=en.end-en.start;me=en.start+Ot*me/ht,$e=en.start+Ot*$e/ht}L.refresh(!1,!1,{start:Fd(me,Oe&&!!L._startClamp),end:Fd($e,Oe&&!!L._endClamp)},et),L.update()},L.adjustPinSpacing=function(me){if(ge&&me){var $e=ge.indexOf(R.d)+1;ge[$e]=parseFloat(ge[$e])+me+cn,ge[1]=parseFloat(ge[1])+me+cn,Aa(ge)}},L.disable=function(me,$e){if(me!==!1&&L.revert(!0,!0),L.enabled&&(L.enabled=L.isActive=!1,$e||xe&&xe.pause(),ye=0,O&&(O.uncache=1),he&&gn(r,"refreshInit",he),F&&(F.pause(),oe.tween&&oe.tween.kill()&&(oe.tween=0)),!z)){for(var Oe=ut.length;Oe--;)if(ut[Oe].scroller===D&&ut[Oe]!==L)return;gn(D,"resize",go),z||gn(D,"scroll",Zs)}},L.kill=function(me,$e){L.disable(me,$e),xe&&!$e&&xe.kill(),l&&delete hh[l];var Oe=ut.indexOf(L);Oe>=0&&ut.splice(Oe,1),Oe===Vn&&jl>0&&Vn--,Oe=0,ut.forEach(function(et){return et.scroller===L.scroller&&(Oe=1)}),Oe||Hn||(L.scroll.rec=0),i&&(i.scrollTrigger=null,me&&i.revert({kill:!1}),$e||i.kill()),K&&[K,q,N,le].forEach(function(et){return et.parentNode&&et.parentNode.removeChild(et)}),Do===L&&(Do=0),d&&(O&&(O.uncache=1),Oe=0,ut.forEach(function(et){return et.pin===d&&Oe++}),Oe||(O.spacer=0)),n.onKill&&n.onKill(L)},ut.push(L),L.enable(!1,!1),Ee&&Ee(L),i&&i.add&&!De){var Ke=L.update;L.update=function(){L.update=Ke,dt.cache++,pe||H||L.refresh()},Ue.delayedCall(.01,L.update),De=.01,pe=H=0}else L.refresh();d&&mx()},r.register=function(n){return _a||(Ue=n||N_(),I_()&&window.document&&r.enable(),_a=po),_a},r.defaults=function(n){if(n)for(var i in n)fl[i]=n[i];return fl},r.disable=function(n,i){po=0,ut.forEach(function(a){return a[i?"kill":"disable"](n)}),gn(ft,"wheel",Zs),gn(Mt,"scroll",Zs),clearInterval(ol),gn(Mt,"touchcancel",ji),gn(St,"touchstart",ji),ul(gn,Mt,"pointerdown,touchstart,mousedown",Od),ul(gn,Mt,"pointerup,touchend,mouseup",Bd),xc.kill(),cl(gn);for(var s=0;s<dt.length;s+=3)hl(gn,dt[s],dt[s+1]),hl(gn,dt[s],dt[s+2])},r.enable=function(){if(ft=window,Mt=document,ui=Mt.documentElement,St=Mt.body,Ue){if(Wo=Ue.utils.toArray,wo=Ue.utils.clamp,ch=Ue.core.context||ji,Zc=Ue.core.suppressOverwrites||ji,Lf=ft.history.scrollRestoration||"auto",fh=ft.pageYOffset||0,Ue.core.globals("ScrollTrigger",r),St){po=1,wa=document.createElement("div"),wa.style.height="100vh",wa.style.position="absolute",W_(),lx(),Qt.register(Ue),r.isTouch=Qt.isTouch,Kr=Qt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),lh=Qt.isTouch===1,vn(ft,"wheel",Zs),Pf=[ft,Mt,ui,St],Ue.matchMedia?(r.matchMedia=function(u){var f=Ue.matchMedia(),h;for(h in u)f.add(h,u[h]);return f},Ue.addEventListener("matchMediaInit",function(){H_(),Of()}),Ue.addEventListener("matchMediaRevert",function(){return V_()}),Ue.addEventListener("matchMedia",function(){ws(0,1),Os("matchMedia")}),Ue.matchMedia().add("(orientation: portrait)",function(){return jc(),jc})):console.warn("Requires GSAP 3.11.0 or later"),jc(),vn(Mt,"scroll",Zs);var n=St.hasAttribute("style"),i=St.style,s=i.borderTopStyle,a=Ue.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=br(St),un.m=Math.round(o.top+un.sc())||0,Wn.m=Math.round(o.left+Wn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(St.setAttribute("style",""),St.removeAttribute("style")),ol=setInterval(Vd,250),Ue.delayedCall(.5,function(){return ll=0}),vn(Mt,"touchcancel",ji),vn(St,"touchstart",ji),ul(vn,Mt,"pointerdown,touchstart,mousedown",Od),ul(vn,Mt,"pointerup,touchend,mouseup",Bd),oh=Ue.utils.checkPrefix("transform"),ec.push(oh),_a=Pn(),xc=Ue.delayedCall(.2,ws).pause(),ga=[Mt,"visibilitychange",function(){var u=ft.innerWidth,f=ft.innerHeight;Mt.hidden?(Id=u,Nd=f):(Id!==u||Nd!==f)&&go()},Mt,"DOMContentLoaded",ws,ft,"load",ws,ft,"resize",go],cl(vn),ut.forEach(function(u){return u.enable(0,1)}),l=0;l<dt.length;l+=3)hl(gn,dt[l],dt[l+1]),hl(gn,dt[l],dt[l+2])}else if(Mt){var c=function u(){r.enable(),Mt.removeEventListener("DOMContentLoaded",u)};Mt.addEventListener("DOMContentLoaded",c)}}},r.config=function(n){"limitCallbacks"in n&&(Jc=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ol)||(ol=i)&&setInterval(Vd,i),"ignoreMobileResize"in n&&(lh=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(cl(gn)||cl(vn,n.autoRefreshEvents||"none"),P_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=qn(n),a=dt.indexOf(s),o=Us(s);~a&&dt.splice(a,o?6:2),i&&(o?or.unshift(ft,i,St,i,ui,i):or.unshift(s,i))},r.clearMatchMedia=function(n){ut.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(oi(n)?qn(n):n).getBoundingClientRect(),o=a[s?Ds:Is]*i||0;return s?a.right-o>0&&a.left+o<ft.innerWidth:a.bottom-o>0&&a.top+o<ft.innerHeight},r.positionInViewport=function(n,i,s){oi(n)&&(n=qn(n));var a=n.getBoundingClientRect(),o=a[s?Ds:Is],l=i==null?o/2:i in yc?yc[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/ft.innerWidth:(a.top+l)/ft.innerHeight},r.killAll=function(n){if(ut.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Fs.killAll||[];Fs={},i.forEach(function(s){return s()})}},r})();st.version="3.15.0";st.saveStyles=function(r){return r?Wo(r).forEach(function(e){if(e&&e.style){var t=ai.indexOf(e);t>=0&&ai.splice(t,5),ai.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ue.core.getCache(e),ch())}}):ai};st.revert=function(r,e){return Of(!r,e)};st.create=function(r,e){return new st(r,e)};st.refresh=function(r){return r?go(!0):(_a||st.register())&&ws(!0)};st.update=function(r){return++dt.cache&&Rr(r===!0?2:0)};st.clearScrollMemory=G_;st.maxScroll=function(r,e){return rr(r,e?Wn:un)};st.getScrollFunc=function(r,e){return cs(qn(r),e?Wn:un)};st.getById=function(r){return hh[r]};st.getAll=function(){return ut.filter(function(r){return r.vars.id!=="ScrollSmoother"})};st.isScrolling=function(){return!!Di};st.snapDirectional=Ff;st.addEventListener=function(r,e){var t=Fs[r]||(Fs[r]=[]);~t.indexOf(e)||t.push(e)};st.removeEventListener=function(r,e){var t=Fs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};st.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],h=[],d=Ue.delayedCall(i,function(){u(f,h),f=[],h=[]}).pause();return function(p){f.length||d.restart(!0),f.push(p.trigger),h.push(p),s<=f.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Dn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Dn(s)&&(s=s(),vn(st,"refresh",function(){return s=e.batchMax()})),Wo(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push(st.create(c))}),t};var Yd=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},tu=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Qt.isTouch?" pinch-zoom":""):"none",e===ui&&r(St,t)},_l={auto:1,scroll:1},yx=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ue.core.getCache(s),o=Pn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==St&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_l[(l=wi(s)).overflowY]||_l[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!Us(s)&&(_l[(l=wi(s)).overflowY]||_l[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},q_=function(e,t,n,i){return Qt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&yx,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&vn(Mt,Qt.eventTypes[0],$d,!1,!0)},onDisable:function(){return gn(Mt,Qt.eventTypes[0],$d,!0)}})},Sx=/(input|label|select|textarea)/i,Kd,$d=function(e){var t=Sx.test(e.target.tagName);(t||Kd)&&(e._gsapAllow=!0,Kd=t)},Mx=function(e){Ss(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=qn(e.target)||ui,u=Ue.core.globals().ScrollSmoother,f=u&&u.get(),h=Kr&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),d=cs(c,un),p=cs(c,Wn),g=1,m=(Qt.isTouch&&ft.visualViewport?ft.visualViewport.scale*ft.visualViewport.width:ft.outerWidth)/ft.innerWidth,_=0,T=Dn(i)?function(){return i(o)}:function(){return i||2.8},w,v,E=q_(c,e.type,!0,s),S=function(){return v=!1},M=ji,x=ji,b=function(){l=rr(c,un),x=wo(Kr?1:0,l),n&&(M=wo(0,rr(c,Wn))),w=Ns},R=function(){h._gsap.y=mo(parseFloat(h._gsap.y)+d.offset)+"px",h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(h._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(v){requestAnimationFrame(S);var J=mo(o.deltaY/2),ie=x(d.v-J);if(h&&ie!==d.v+d.offset){d.offset=ie-d.v;var L=mo((parseFloat(h&&h._gsap.y)||0)-d.offset);h.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+L+", 0, 1)",h._gsap.y=L+"px",d.cacheID=dt.cache,Rr()}return!0}d.offset&&R(),v=!0},D,V,z,U,k=function(){b(),D.isActive()&&D.vars.scrollY>l&&(d()>l?D.progress(1)&&d(l):D.resetTo("scrollY",l))};return h&&Ue.set(h,{y:"+=0"}),e.ignoreCheck=function(I){return Kr&&I.type==="touchmove"&&P()||g>1.05&&I.type!=="touchstart"||o.isGesturing||I.touches&&I.touches.length>1},e.onPress=function(){v=!1;var I=g;g=mo((ft.visualViewport&&ft.visualViewport.scale||1)/m),D.pause(),I!==g&&tu(c,g>1.01?!0:n?!1:"x"),V=p(),z=d(),b(),w=Ns},e.onRelease=e.onGestureStart=function(I,J){if(d.offset&&R(),!J)U.restart(!0);else{dt.cache++;var ie=T(),L,he;n&&(L=p(),he=L+ie*.05*-I.velocityX/.227,ie*=Yd(p,L,he,rr(c,Wn)),D.vars.scrollX=M(he)),L=d(),he=L+ie*.05*-I.velocityY/.227,ie*=Yd(d,L,he,rr(c,un)),D.vars.scrollY=x(he),D.invalidate().duration(ie).play(.01),(Kr&&D.vars.scrollY>=l||L>=l-1)&&Ue.to({},{onUpdate:k,duration:ie})}a&&a(I)},e.onWheel=function(){D._ts&&D.pause(),Pn()-_>1e3&&(w=0,_=Pn())},e.onChange=function(I,J,ie,L,he){if(Ns!==w&&b(),J&&n&&p(M(L[2]===J?V+(I.startX-I.x):p()+J-L[1])),ie){d.offset&&R();var _e=he[2]===ie,ze=_e?z+I.startY-I.y:d()+ie-he[1],Xe=x(ze);_e&&ze!==Xe&&(z+=Xe-ze),d(Xe)}(ie||J)&&Rr()},e.onEnable=function(){tu(c,n?!1:"x"),st.addEventListener("refresh",k),vn(ft,"resize",k),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=p.smooth=!1),E.enable()},e.onDisable=function(){tu(c,!0),gn(ft,"resize",k),st.removeEventListener("refresh",k),E.kill()},e.lockAxis=e.lockAxis!==!1,o=new Qt(e),o.iOS=Kr,Kr&&!d()&&d(1),Kr&&Ue.ticker.add(ji),U=o._dc,D=Ue.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:X_(d,d(),function(){return D.pause()})},onUpdate:Rr,onComplete:U.vars.onComplete}),o};st.sort=function(r){if(Dn(r))return ut.sort(r);var e=ft.pageYOffset||0;return st.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+ft.innerHeight}),ut.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};st.observe=function(r){return new Qt(r)};st.normalizeScroll=function(r){if(typeof r>"u")return zn;if(r===!0&&zn)return zn.enable();if(r===!1){zn&&zn.kill(),zn=r;return}var e=r instanceof Qt?r:Mx(r);return zn&&zn.target===e.target&&zn.kill(),Us(e.target)&&(zn=e),e};st.core={_getVelocityProp:ah,_inputObserver:q_,_scrollers:dt,_proxies:or,bridge:{ss:function(){Di||Os("scrollStart"),Di=Pn()},ref:function(){return Cn}}};N_()&&Ue.registerPlugin(st);var Zd="1.3.26";function Y_(r,e,t){return Math.max(r,Math.min(e,t))}function bx(r,e,t){return(1-t)*r+t*e}function Tx(r,e,t,n){return bx(r,e,1-Math.exp(-t*n))}function Ex(r,e){return(r%e+e)%e}var wx=class{constructor(){ke(this,"isRunning",!1);ke(this,"value",0);ke(this,"from",0);ke(this,"to",0);ke(this,"currentTime",0);ke(this,"lerp");ke(this,"duration");ke(this,"easing");ke(this,"onUpdate")}advance(r){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const n=Y_(0,this.currentTime/this.duration,1);e=n>=1;const i=e?1:this.easing(n);this.value=this.from+(this.to-this.from)*i}else this.lerp?(this.value=Tx(this.value,this.to,this.lerp*60,r),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function Ax(r,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(this,n)},e)}}var Rx=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){ke(this,"width",0);ke(this,"height",0);ke(this,"scrollHeight",0);ke(this,"scrollWidth",0);ke(this,"debouncedResize");ke(this,"wrapperResizeObserver");ke(this,"contentResizeObserver");ke(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});ke(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});ke(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=r,this.content=e,t&&(this.debouncedResize=Ax(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var r,e;(r=this.wrapperResizeObserver)==null||r.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},K_=class{constructor(){ke(this,"events",{})}emit(r,...e){var n;const t=this.events[r]||[];for(let i=0,s=t.length;i<s;i++)(n=t[i])==null||n.call(t,...e)}on(r,e){return this.events[r]?this.events[r].push(e):this.events[r]=[e],()=>{var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}}off(r,e){var t;this.events[r]=(t=this.events[r])==null?void 0:t.filter(n=>e!==n)}destroy(){this.events={}}};const Cx=100/6,kr={passive:!1};function Jd(r,e){return r===1?Cx:r===2?e:1}var Px=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){ke(this,"touchStart",{x:0,y:0});ke(this,"lastDelta",{x:0,y:0});ke(this,"window",{width:0,height:0});ke(this,"emitter",new K_);ke(this,"onTouchStart",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})});ke(this,"onTouchMove",r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})});ke(this,"onTouchEnd",r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})});ke(this,"onWheel",r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=Jd(n,this.window.width),s=Jd(n,this.window.height);e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})});ke(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,kr),this.element.addEventListener("touchstart",this.onTouchStart,kr),this.element.addEventListener("touchmove",this.onTouchMove,kr),this.element.addEventListener("touchend",this.onTouchEnd,kr)}on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,kr),this.element.removeEventListener("touchstart",this.onTouchStart,kr),this.element.removeEventListener("touchmove",this.onTouchMove,kr),this.element.removeEventListener("touchend",this.onTouchEnd,kr)}};const Qd=r=>Math.min(1,1.001-2**(-10*r));var Lx=class{constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:h=f==="horizontal"?"both":"vertical",touchMultiplier:d=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:m,virtualScroll:_,overscroll:T=!0,autoRaf:w=!1,anchors:v=!1,autoToggle:E=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:M=!1,naiveDimensions:x=M,stopInertiaOnNavigate:b=!1,respectReducedMotion:R=!0}={}){ke(this,"_isScrolling",!1);ke(this,"_isStopped",!1);ke(this,"_isLocked",!1);ke(this,"_preventNextNativeScrollEvent",!1);ke(this,"_resetVelocityTimeout",null);ke(this,"_rafId",null);ke(this,"_isDraggingSelection",!1);ke(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));ke(this,"isTouching");ke(this,"isIos");ke(this,"time",0);ke(this,"userData",{});ke(this,"lastVelocity",0);ke(this,"velocity",0);ke(this,"direction",0);ke(this,"options");ke(this,"targetScroll");ke(this,"animatedScroll");ke(this,"animate",new wx);ke(this,"emitter",new K_);ke(this,"dimensions");ke(this,"virtualScroll");ke(this,"onScrollEnd",r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()});ke(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});ke(this,"onTransitionEnd",r=>{var e;(e=r.propertyName)!=null&&e.includes("overflow")&&r.target===this.rootElement&&this.checkOverflow()});ke(this,"onClick",r=>{const e=r.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),t=new URL(window.location.href);if(this.options.anchors){const n=e.find(i=>t.host===i.host&&t.pathname===i.pathname&&i.hash);if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(n.hash);this.scrollTo(s,i);return}}if(this.options.stopInertiaOnNavigate&&e.some(n=>t.host===n.host&&t.pathname!==n.pathname)){this.reset();return}});ke(this,"onPointerDown",r=>{r.button===1&&this.reset()});ke(this,"onVirtualScroll",r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));const c=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(l.find(p=>{var g,m,_,T,w;return p instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(p))||((g=p.hasAttribute)==null?void 0:g.call(p,"data-lenis-prevent"))||u==="vertical"&&((m=p.hasAttribute)==null?void 0:m.call(p,"data-lenis-prevent-vertical"))||u==="horizontal"&&((_=p.hasAttribute)==null?void 0:_.call(p,"data-lenis-prevent-horizontal"))||i&&((T=p.hasAttribute)==null?void 0:T.call(p,"data-lenis-prevent-touch"))||s&&((w=p.hasAttribute)==null?void 0:w.call(p,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,d=i&&n.type==="touchend";d&&(f=Math.sign(f)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...h?{lerp:d?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});ke(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});ke(this,"raf",r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Zd,window.lenis||(window.lenis={}),window.lenis.version=Zd,f==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=Qd:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:h,orientation:f,touchMultiplier:d,wheelMultiplier:p,autoResize:g,prevent:m,virtualScroll:_,overscroll:T,autoRaf:w,anchors:v,autoToggle:E,allowNestedScroll:S,naiveDimensions:x,stopInertiaOnNavigate:b,respectReducedMotion:R},this.dimensions=new Rx(r,e,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Px(t,{touchMultiplier:d,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}get overflow(){const r=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[r]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}isTouchOnSelectionHandle(r){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=r.targetTouches[0]??r.changedTouches[0];if(!t)return!1;const n=e.getRangeAt(0).getClientRects();if(n.length===0)return!1;const i=n[0],s=n[n.length-1],a=40,o=Math.hypot(t.clientX-i.left,t.clientY-i.top)<=a,l=Math.hypot(t.clientX-s.right,t.clientY-s.bottom)<=a;return o||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:i=!0,lerp:s=i?this.options.lerp:void 0,duration:a=i?this.options.duration:void 0,easing:o=i?this.options.easing:void 0,onStart:l,onComplete:c,force:u=!1,userData:f}={}){if(this.prefersReducedMotion&&(i?t=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!u)return;let h=r,d=e;if(typeof h=="string"&&["top","left","start","#"].includes(h))h=0;else if(typeof h=="string"&&["bottom","right","end"].includes(h))h=this.limit;else{let p=null;if(typeof h=="string"?(p=h.startsWith("#")?document.getElementById(h.slice(1)):document.querySelector(h),p||(h==="#top"?h=0:console.warn("Lenis: Target not found",h))):h instanceof HTMLElement&&(h!=null&&h.nodeType)&&(p=h),p){if(this.options.wrapper!==window){const v=this.rootElement.getBoundingClientRect();d-=this.isHorizontal?v.left:v.top}const g=p.getBoundingClientRect(),m=getComputedStyle(p),_=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),T=getComputedStyle(this.rootElement),w=this.isHorizontal?Number.parseFloat(T.scrollPaddingLeft):Number.parseFloat(T.scrollPaddingTop);h=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(w)?0:w)}}if(typeof h=="number"){if(h+=d,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;const p=h-this.animatedScroll;p>this.limit/2?h-=this.limit:p<-this.limit/2&&(h+=this.limit)}}else h=Y_(0,h,this.limit);if(h===this.targetScroll){l==null||l(this),c==null||c(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=h,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=h),typeof a=="number"&&typeof o!="function"?o=Qd:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,h,{duration:a,easing:o,lerp:s,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l==null||l(this)},onUpdate:(p,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),g||this.emit(),g&&(this.reset(),this.emit(),c==null||c(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now();r._lenis||(r._lenis={});const i=r._lenis;let s,a,o,l,c,u,f,h,d,p;if(n-(i.time??0)>2e3){i.time=Date.now();const S=window.getComputedStyle(r);if(i.computedStyle=S,s=["auto","overlay","scroll"].includes(S.overflowX),a=["auto","overlay","scroll"].includes(S.overflowY),c=["auto"].includes(S.overscrollBehaviorX),u=["auto"].includes(S.overscrollBehaviorY),i.hasOverflowX=s,i.hasOverflowY=a,!(s||a))return!1;f=r.scrollWidth,h=r.scrollHeight,d=r.clientWidth,p=r.clientHeight,o=f>d,l=h>p,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=f,i.scrollHeight=h,i.clientWidth=d,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=u}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,f=i.scrollWidth,h=i.scrollHeight,d=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,u=i.hasOverscrollBehaviorY;if(!(s&&o||a&&l))return!1;const g=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let m,_,T,w,v,E;if(g==="horizontal")m=Math.round(r.scrollLeft),_=f-d,T=e,w=s,v=o,E=c;else if(g==="vertical")m=Math.round(r.scrollTop),_=h-p,T=t,w=a,v=l,E=u;else return!1;return!E&&(m>=_||m<=0)?!0:(T>0?m<_:m>0)&&w&&v}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?Ex(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(r=>{this.rootElement.classList.add(r)})}cleanUpClassName(){for(const r of Array.from(this.rootElement.classList))(r==="lenis"||r.startsWith("lenis-"))&&this.rootElement.classList.remove(r)}};const zr={brand:"Maison",nav:[["#piece","La visite"],["#contact","Rendez-vous"]],cta:{label:"Prendre rendez-vous",href:"#contact"},footer:"Fabriqué en petites séries. Livré monté."},nu={kicker:"Collection 2026",title:["Une maison vide.","Habitez-la."],text:"Faites défiler : la caméra traverse les pièces et les objets arrivent un à un. Cliquez sur l’un d’eux pour le composer, le déplacer, le tourner."},Js=(r=0)=>[{name:"Cognac",hex:"#b8703e"},{name:"Noir fumé",hex:"#2a2723"},{name:"Sauge",hex:"#8a9a82",price:r},{name:"Crème",hex:"#d9cbb3",price:r}],yt=(r=0)=>[{name:"Chêne clair",hex:"#d8bd95"},{name:"Noyer",hex:"#6d4a33",price:r},{name:"Noir",hex:"#2b2622",price:r}],wn=(r=0)=>[{name:"Laiton",hex:"#c9a86a"},{name:"Acier noir",hex:"#33312e",price:r},{name:"Argent",hex:"#cfcfcf",price:r}],Qs=(r=0)=>[{name:"Lin naturel",hex:"#c9bda6"},{name:"Ardoise",hex:"#4b525a",price:r},{name:"Ocre",hex:"#b7893f",price:r},{name:"Vert forêt",hex:"#3d5a48",price:r}],pr=()=>[{name:"Sable",hex:"#d8c9b1"},{name:"Céladon",hex:"#9fb8a5"},{name:"Terre",hex:"#a9683f"},{name:"Nuit",hex:"#2f3540"}],gl=(r=0)=>[{name:"Teck huilé",hex:"#a97845"},{name:"Teck grisé",hex:"#9a978c",price:r},{name:"Noyer",hex:"#6d4a33",price:r}],Ki=(r=40)=>[{name:"Blanc cassé",hex:"#e8e2d6"},{name:"Sauge",hex:"#8a9a82",price:r},{name:"Terre",hex:"#a9683f",price:r},{name:"Ardoise",hex:"#4b525a",price:r}],xn=[{id:"salon",name:"Le salon",video:"/video/room.mp4",poster:"/images/room.jpg",track:"/video/room-track.json",night:{video:"/video/room-night.mp4",poster:"/images/room-night.jpg",track:"/video/room-night-track.json",sun:{pos:[-5,3.4,-4.5],color:"#7d8fc4",intensity:.35},lights:[{pos:[3.3,1.45,-6.6],color:"#ffc98a",intensity:9,distance:7},{pos:[.4,2.7,-6.2],color:"#ffd9ae",intensity:5,distance:8}]},camera:{fov:76,height:1.4,pitch:2.2,yaw:16,roll:0},sun:{pos:[-5,3.4,-4.5],color:"#ffe3c2",intensity:2.4},items:[{id:"sofa",at:.05,model:"/models/sofa_02/sofa_02_1k.gltf",name:"Banquette Loire",price:3900,pos:[-2.7,0,-6.9],rot:.35,caption:["D’abord","la banquette"],text:"Hêtre sculpté, capitonnage main. On la chine, on la restaure, on la retapisse dans le tissu que vous choisissez.",tint:[{material:"sofa_02",label:"Tissu",options:[{name:"Vert forêt",hex:"#3d5a48"},{name:"Ardoise",hex:"#4b525a"},{name:"Ocre",hex:"#b7893f",price:200},{name:"Lin naturel",hex:"#c9bda6",price:200}],patterns:!0}],variants:[{name:"Canapé Frangé",model:"/models/sofa_03/sofa_03_1k.gltf",price:4200,tint:[{material:"sofa_03",label:"Tissu",options:Qs(120),patterns:!0}]},{name:"Canapé Club",model:"/models/Sofa_01/Sofa_01_1k.gltf",price:3400,tint:[{material:"Sofa_01",label:"Cuir",options:Js(140)}]}]},{id:"chair",at:.12,model:"/models/modern_arm_chair_01/modern_arm_chair_01_2k.gltf",name:"Fauteuil Ormeau",price:2450,pos:[.77,0,-6.12],rot:-.35,caption:["Le fauteuil","que l’on garde"],text:"Chêne massif, cuir pleine fleur, quarante heures d’atelier.",tint:[{material:"modern_arm_chair_01_pillow",label:"Cuir",options:Js(120)},{material:"modern_arm_chair_01_legs",label:"Bois",options:yt(180)}],variants:[{name:"Fauteuil Repos",model:"/models/mid_century_lounge_chair/mid_century_lounge_chair_1k.gltf",price:1750,tint:[{material:"mid_century_lounge_chair",label:"Cuir",options:Js(120)}]},{name:"Fauteuil Bergère",model:"/models/ArmChair_01/ArmChair_01_1k.gltf",price:1900,tint:[{material:"Armchair_01",label:"Tissu",options:Qs(90),patterns:!0}]},{name:"Fauteuil Vert",model:"/models/GreenChair_01/GreenChair_01_1k.gltf",price:1450,tint:[{material:"GreenChair_01",label:"Tissu",options:Qs(60),patterns:!0}]},{name:"Rocking-chair",model:"/models/Rockingchair_01/Rockingchair_01_1k.gltf",price:980,tint:[{material:"Rockingchair_01",label:"Bois",options:yt(0)}]}]},{id:"ottoman",at:.18,model:"/models/Ottoman_01/Ottoman_01_1k.gltf",name:"Repose-pieds Ormeau",price:690,pos:[1.19,0,-5.02],rot:-.2,caption:["Et de quoi","poser les pieds"],text:"Même cuir, même tannage, il vieillit avec le fauteuil.",tint:[{material:"Ottoman_01",label:"Cuir",options:Js(60)}]},{id:"side",at:.24,model:"/models/side_table_01/side_table_01_1k.gltf",name:"Guéridon Aube",price:420,pos:[-1.02,0,-6.29],rot:.3,caption:["Un guéridon","à portée de main"],text:"Deux plateaux tournés dans la masse, rien à visser.",tint:[{material:"side_table_01",label:"Bois",options:yt(90)}],variants:[{name:"Guéridon Bas",model:"/models/small_wooden_table_01/small_wooden_table_01_1k.gltf",price:390,tint:[{material:"small_wooden_table_01",label:"Bois",options:yt(0)}]},{name:"Chevet Classique",model:"/models/ClassicNightstand_01/ClassicNightstand_01_1k.gltf",price:520,tint:[{material:"ClassicNightstand_01",label:"Bois",options:yt(0)}]}]},{id:"vase",at:.28,model:"/models/ceramic_vase_02/ceramic_vase_02_1k.gltf",name:"Vase Grès",price:140,on:"side",pos:[-1.02,.55,-6.29],rot:0,caption:["Et quelque chose","dessus"],text:"Grès émaillé, tourné à Vallauris.",tint:[{material:"ceramic_vase_02",label:"Émail",options:pr()}],variants:[{name:"Vase Col",model:"/models/ceramic_vase_04/ceramic_vase_04_1k.gltf",price:120,tint:[{material:"ceramic_vase_04",label:"Émail",options:pr()}]},{name:"Vase Boule",model:"/models/ceramic_vase_01/ceramic_vase_01_1k.gltf",price:130,tint:[{material:"ceramic_vase_01",label:"Émail",options:pr()}]},{name:"Vase Antique",model:"/models/antique_ceramic_vase_01/antique_ceramic_vase_01_1k.gltf",price:260,tint:[]},{name:"Vase Laiton",model:"/models/brass_vase_01/brass_vase_01_1k.gltf",price:210,tint:[{material:"brass_vase_001",label:"Métal",options:wn(0)}]}]},{id:"camera",at:.32,model:"/models/Camera_01/Camera_01_1k.gltf",name:"Appareil Argentique",price:0,on:"side",pos:[-.8,.55,-6.06],rot:.9,caption:["Un souvenir","à portée de main"],text:"Celui du grand-père, il ne fonctionne plus, mais on ne le range pas.",tint:[]},{id:"coffee",at:.39,model:"/models/modern_coffee_table_01/modern_coffee_table_01_1k.gltf",name:"Table basse Lisse",price:1180,pos:[2.2,0,-6.3],rot:.15,caption:["Une table basse","qui tient sa place"],text:"Plateau pierre, structure chêne, hauteur 39 cm.",tint:[{material:"modern_coffee_table_01",label:"Finition",options:[{name:"Naturel",hex:"#d9cbb8"},{name:"Fumé",hex:"#8c7461",price:140}]}],variants:[{name:"Table basse Carrée",model:"/models/modern_coffee_table_02/modern_coffee_table_02_1k.gltf",price:1350,tint:[{material:"modern_coffee_table_02_wood",label:"Bois",options:yt(0)},{material:"modern_coffee_table_02_base",label:"Piètement",options:wn(0)}]},{name:"Table basse Ronde",model:"/models/coffee_table_round_01/coffee_table_round_01_1k.gltf",price:1290,tint:[{material:"coffee_table_round_01",label:"Bois",options:yt(0)}]},{name:"Table basse Atelier",model:"/models/CoffeeTable_01/CoffeeTable_01_1k.gltf",price:1490,tint:[{material:"CoffeeTable_01",label:"Bois",options:yt(0)}]}]},{id:"books",at:.45,model:"/models/book_encyclopedia_set_01/book_encyclopedia_set_01_1k.gltf",name:"Encyclopédie",price:0,on:"coffee",pos:[2.1,.39,-6.15],rot:.3,caption:["De quoi","lire"],text:"Douze volumes, reliés main, en dépôt chez nous.",tint:[]},{id:"lamp",at:.5,model:"/models/desk_lamp_arm_01/desk_lamp_arm_01_1k.gltf",name:"Lampe Bras",price:390,pos:[2.4,0,-7.4],rot:-2.2,glow:{y:.86,color:"#ffc98a",intensity:4,distance:4},caption:["La lumière","du soir"],text:"Bras articulé, laiton ou acier laqué.",tint:[{material:"desk_lamp_arm_01",label:"Métal",options:wn(0)}]},{id:"brass",at:.64,model:"/models/brass_vase_01/brass_vase_01_1k.gltf",name:"Vase Laiton",price:210,on:"coffee",pos:[2.45,.39,-6.5],rot:0,caption:["Et au centre","un éclat"],text:"Laiton martelé, patine libre.",tint:[{material:"brass_vase_001",label:"Métal",options:wn(60)}],variants:[{name:"Vase Laiton haut",model:"/models/brass_vase_02/brass_vase_02_1k.gltf",price:240,tint:[{material:"brass_vase_02",label:"Métal",options:wn(0)}]},{name:"Petit Laiton",model:"/models/brass_vase_03/brass_vase_03_1k.gltf",price:90,tint:[{material:"brass_vase_03",label:"Métal",options:wn(0)}]},{name:"Soliflore",model:"/models/ceramic_vase_03/ceramic_vase_03_1k.gltf",price:70,tint:[{material:"ceramic_vase_03",label:"Émail",options:pr()}]}]},{id:"plant",at:.72,model:"/models/potted_plant_02/potted_plant_02_1k.gltf",name:"Monstera",price:0,pos:[3.1,0,-6.9],rot:.4,caption:["Il ne manquait","que le vivant"],text:"Offert avec toute commande. Elle tient l’angle et supporte l’ombre.",tint:[],variants:[{name:"Laurier en pot",model:"/models/potted_plant_01/potted_plant_01_1k.gltf",price:0,tint:[]},{name:"Anthurium",model:"/models/anthurium_botany_01/anthurium_botany_01_1k.gltf",price:0,tint:[]},{name:"Succulente",model:"/models/potted_plant_04/potted_plant_04_1k.gltf",price:0,tint:[]}]}]},{id:"cuisine",name:"La cuisine",video:"/video/kitchen.mp4",poster:"/images/kitchen.jpg",track:"/video/kitchen-track.json",night:{video:"/video/kitchen-night.mp4",poster:"/images/kitchen-night.jpg",track:"/video/kitchen-night-track.json",sun:{pos:[-6,3.2,-3.5],color:"#7d8fc4",intensity:.3},lights:[{pos:[1.5,1.05,-5.3],color:"#ffc27a",intensity:8,distance:6},{pos:[4.2,1.05,-5.6],color:"#ffc27a",intensity:6,distance:5},{pos:[0,2.7,-4],color:"#ffe0bd",intensity:4,distance:8}]},camera:{fov:76,height:1.25,pitch:-1.5,yaw:4,roll:0},sun:{pos:[-6,3.2,-3.5],color:"#ffe9cd",intensity:2.6},items:[{id:"ktable",at:.05,model:"/models/wooden_table_02/wooden_table_02_1k.gltf",name:"Table Établi",price:1450,pos:[-.5,0,-4.6],rot:.15,caption:["Une table","pour tous les jours"],text:"Chêne massif, plateau épais, 113 cm : elle tient dans une cuisine et encaisse tout.",tint:[{material:"wooden_table_02",label:"Bois",options:yt(180)}]},{id:"kchair1",at:.12,model:"/models/painted_wooden_chair_01/painted_wooden_chair_01_1k.gltf",name:"Chaise Sillon",price:340,pos:[-1.35,0,-3.9],rot:.6,caption:["Des chaises","qui ne grincent pas"],text:"Hêtre massif, dossier cintré à la vapeur, peinture à l’huile.",tint:[{material:"painted_wooden_chair_01",label:"Peinture",options:Ki(),patterns:!0}],variants:[{name:"Chaise Sillon haute",model:"/models/painted_wooden_chair_02/painted_wooden_chair_02_1k.gltf",price:380,tint:[{material:"painted_wooden_chair_02",label:"Peinture",options:Ki(),patterns:!0}]},{name:"Chaise Bistrot",model:"/models/dining_chair_02/dining_chair_02_1k.gltf",price:290,tint:[{material:"dining_chair_02",label:"Bois",options:yt(0)}]},{name:"Chaise d’école",model:"/models/SchoolChair_01/SchoolChair_01_1k.gltf",price:210,tint:[{material:"SchoolChair_01",label:"Bois",options:yt(0)}]}]},{id:"kchair2",at:.17,model:"/models/painted_wooden_chair_01/painted_wooden_chair_01_1k.gltf",name:"Chaise Sillon",price:340,pos:[.35,0,-3.8],rot:-.5,caption:["Et une","deuxième"],text:"Vendue à l’unité, jamais par lot.",tint:[{material:"painted_wooden_chair_01",label:"Peinture",options:Ki(),patterns:!0}],variants:[{name:"Chaise Sillon haute",model:"/models/painted_wooden_chair_02/painted_wooden_chair_02_1k.gltf",price:380,tint:[{material:"painted_wooden_chair_02",label:"Peinture",options:Ki(),patterns:!0}]},{name:"Chaise Bistrot",model:"/models/dining_chair_02/dining_chair_02_1k.gltf",price:290,tint:[{material:"dining_chair_02",label:"Bois",options:yt(0)}]},{name:"Chaise d’école",model:"/models/SchoolChair_01/SchoolChair_01_1k.gltf",price:210,tint:[{material:"SchoolChair_01",label:"Bois",options:yt(0)}]}]},{id:"bowl",at:.24,model:"/models/wooden_bowl_01/wooden_bowl_01_1k.gltf",name:"Saladier Bois",price:85,pos:[-.75,.79,-4.6],rot:0,caption:["Sur la table","un saladier"],text:"Tourné dans un seul bloc de frêne.",tint:[{material:"wooden_bowl_01",label:"Bois",options:yt(0)}]},{id:"apple",at:.27,model:"/models/food_apple_01/food_apple_01_1k.gltf",name:"Pomme",price:0,pos:[-.75,.85,-4.6],rot:0,caption:["Et une pomme,","forcément"],text:"Elle est vraie, à peu près.",tint:[]},{id:"tea",at:.32,model:"/models/tea_set_01/tea_set_01_1k.gltf",name:"Service à thé",price:190,pos:[-.05,.79,-4.75],rot:.4,caption:["Un service","pour le matin"],text:"Porcelaine blanche, six tasses, la théière tient un litre.",tint:[]},{id:"board",at:.39,model:"/models/wooden_cutting_board/wooden_cutting_board_1k.gltf",name:"Planche Billot",price:95,pos:[2,.9,-5.1],rot:.2,caption:["Sur le plan","de travail"],text:"Hêtre debout, huilée, elle se ponce et repart.",tint:[{material:"wooden_cutting_board",label:"Bois",options:yt(0)}]},{id:"kettle",at:.46,model:"/models/vintage_electric_kettle/vintage_electric_kettle_1k.gltf",name:"Bouilloire Sifflet",price:260,pos:[2.85,.9,-5.35],rot:-.6,caption:["La bouilloire","du matin"],text:"Acier étamé, elle siffle encore.",tint:[{material:"vintage_electric_kettle",label:"Métal",options:wn(0)}]},{id:"pot",at:.51,model:"/models/brass_pot_01/brass_pot_01_1k.gltf",name:"Fait-tout Laiton",price:310,pos:[3.65,.9,-5.6],rot:0,caption:["Et de quoi","cuire"],text:"Laiton étamé, fond épais, il va au four.",tint:[{material:"brass_pot_01",label:"Métal",options:wn(0)}]},{id:"pan",at:.56,model:"/models/brass_pan_01/brass_pan_01_1k.gltf",name:"Poêle Laiton",price:180,pos:[4.4,.9,-5.8],rot:.5,caption:["La poêle","qui va avec"],text:"Même laiton, même atelier, manche riveté.",tint:[{material:"brass_pan_01",label:"Métal",options:wn(0)}]},{id:"stool2",at:.63,model:"/models/bar_chair_round_01/bar_chair_round_01_1k.gltf",name:"Tabouret Haut",price:290,pos:[4.1,0,-3.05],rot:.4,caption:["Un tabouret","pour le comptoir"],text:"Assise cuir, piètement acier, 75 cm.",tint:[{material:"Bar Chair",label:"Cuir",options:Js(40)}],variants:[{name:"Tabouret Bas",model:"/models/wooden_stool_01/wooden_stool_01_1k.gltf",price:120,tint:[{material:"wooden_stool_01",label:"Bois",options:yt(0)}]},{name:"Tabouret Métal haut",model:"/models/metal_stool_01/metal_stool_01_1k.gltf",price:190,tint:[{material:"metal_stool_01",label:"Métal",options:wn(0)}]},{name:"Tabouret Peint",model:"/models/painted_wooden_stool/painted_wooden_stool_1k.gltf",price:160,tint:[{material:"painted_wooden_stool",label:"Peinture",options:Ki(),patterns:!0}]}]},{id:"basket",at:.72,model:"/models/wicker_basket_01/wicker_basket_01_1k.gltf",name:"Corbeille Osier",price:70,pos:[3.4,0,-3.4],rot:.2,caption:["Et une corbeille","pour le pain"],text:"Osier tressé main, 38 cm.",tint:[],variants:[{name:"Seau Bois",model:"/models/wooden_bucket_01/wooden_bucket_01_1k.gltf",price:60,tint:[{material:"wooden_bucket_01",label:"Bois",options:yt(0)}]},{name:"Cagette",model:"/models/wooden_crate_01/wooden_crate_01_1k.gltf",price:40,tint:[{material:"wooden_crate_01",label:"Bois",options:yt(0)}]},{name:"Panier Rond",model:"/models/wicker_basket_02/wicker_basket_02_1k.gltf",price:45,tint:[]}]}]},{id:"chambre",name:"La chambre",video:"/video/bedroom.mp4",poster:"/images/bedroom.jpg",track:"/video/bedroom-track.json",night:{video:"/video/bedroom-night.mp4",poster:"/images/bedroom-night.jpg",track:"/video/bedroom-night-track.json",sun:{pos:[-5.5,3.2,-3.5],color:"#7d8fc4",intensity:.35},lights:[{pos:[-2.3,1.4,-3.3],color:"#ffc98a",intensity:8,distance:6},{pos:[.3,2.6,-3.8],color:"#ffe0bd",intensity:5,distance:8}]},camera:{fov:76,height:1.35,pitch:-3,yaw:6,roll:0},sun:{pos:[-5.5,3.2,-3.5],color:"#ffeed8",intensity:2.2},items:[{id:"bed",at:.05,model:"/models/vintage_day_bed/vintage_day_bed_1k.gltf",name:"Lit de jour Anse",price:2600,pos:[.35,0,-3.7],rot:.1,caption:["Un lit","de jour"],text:"Hêtre cintré, sommier à lattes, matelas laine.",tint:[{material:"vintage_day_bed",label:"Teinte",options:[{name:"Noyer",hex:"#6d4a33"},{name:"Chêne clair",hex:"#d8bd95",price:200},{name:"Noir",hex:"#2b2622",price:200}]}]},{id:"pillows",at:.13,model:"/models/throw_pillows_01/throw_pillows_01_1k.gltf",name:"Coussins Lin",price:95,pos:[-.35,.36,-3.65],rot:.6,caption:["Des coussins","en lin lavé"],text:"Housse déhoussable, garnissage plumes.",tint:[{material:"throw_pillows_01",label:"Tissu",options:Qs(0),patterns:!0}]},{id:"night1",at:.22,model:"/models/painted_wooden_nightstand/painted_wooden_nightstand_1k.gltf",name:"Chevet Aube",price:480,pos:[-1.5,0,-3.6],rot:.2,caption:["Un chevet","de chaque côté"],text:"Un tiroir, une niche, peinture à l’huile.",tint:[{material:"painted_wooden_nightstand",label:"Peinture",options:Ki(),patterns:!0}],variants:[{name:"Chevet Classique",model:"/models/ClassicNightstand_01/ClassicNightstand_01_1k.gltf",price:520,tint:[{material:"ClassicNightstand_01",label:"Bois",options:yt(0)}]},{name:"Chevet Bas",model:"/models/small_wooden_table_01/small_wooden_table_01_1k.gltf",price:390,tint:[{material:"small_wooden_table_01",label:"Bois",options:yt(0)}]}]},{id:"lantern",at:.28,model:"/models/Lantern_01/Lantern_01_1k.gltf",name:"Lanterne",price:160,on:"night1",pos:[-1.57,.66,-3.65],rot:.4,glow:{y:.18,color:"#ffb866",intensity:2.5,distance:3},caption:["Une lumière","douce"],text:"Laiton et verre soufflé.",tint:[{material:"Lantern_01_brass",label:"Métal",options:wn(0)}]},{id:"clock",at:.35,model:"/models/alarm_clock_01/alarm_clock_01_1k.gltf",name:"Réveil",price:60,on:"night1",pos:[-1.35,.66,-3.47],rot:.9,caption:["Et l’heure","qu’il est"],text:"Mécanique, il sonne fort.",tint:[]},{id:"lounge",at:.46,model:"/models/mid_century_lounge_chair/mid_century_lounge_chair_1k.gltf",name:"Fauteuil Repos",price:1750,pos:[2.1,0,-4.1],rot:-.6,caption:["Un fauteuil","pour lire"],text:"Noyer, cuir, dossier incliné à 105°.",tint:[{material:"mid_century_lounge_chair",label:"Cuir",options:Js(120)}],variants:[{name:"Fauteuil Bergère",model:"/models/ArmChair_01/ArmChair_01_1k.gltf",price:1900,tint:[{material:"Armchair_01",label:"Tissu",options:Qs(90),patterns:!0}]},{name:"Fauteuil Vert",model:"/models/GreenChair_01/GreenChair_01_1k.gltf",price:1450,tint:[{material:"GreenChair_01",label:"Tissu",options:Qs(60),patterns:!0}]},{name:"Rocking-chair",model:"/models/Rockingchair_01/Rockingchair_01_1k.gltf",price:980,tint:[{material:"Rockingchair_01",label:"Bois",options:yt(0)}]}]},{id:"pedestal",at:.55,model:"/models/side_table_tall_01/side_table_tall_01_1k.gltf",name:"Sellette Brin",price:380,pos:[2.6,0,-4.2],rot:.3,caption:["Une sellette","contre le fauteuil"],text:"Chêne tourné, 76 cm, le plateau fait juste la place d’une tasse.",tint:[{material:"side_table_tall_01",label:"Bois",options:yt(60)}],variants:[{name:"Chevet Classique",model:"/models/ClassicNightstand_01/ClassicNightstand_01_1k.gltf",price:520,tint:[{material:"ClassicNightstand_01",label:"Bois",options:yt(0)}]},{name:"Sellette Peinte",model:"/models/painted_wooden_stool/painted_wooden_stool_1k.gltf",price:160,tint:[{material:"painted_wooden_stool",label:"Peinture",options:Ki(),patterns:!0}]}]},{id:"vase3",at:.62,model:"/models/ceramic_vase_04/ceramic_vase_04_1k.gltf",name:"Vase Col",price:120,on:"pedestal",pos:[2.6,.76,-4.2],rot:0,caption:["Et un vase","au col étroit"],text:"Grès blanc, une tige suffit.",tint:[],variants:[{name:"Vase Col",model:"/models/ceramic_vase_04/ceramic_vase_04_1k.gltf",price:120,tint:[{material:"ceramic_vase_04",label:"Émail",options:pr()}]},{name:"Vase Boule",model:"/models/ceramic_vase_01/ceramic_vase_01_1k.gltf",price:130,tint:[{material:"ceramic_vase_01",label:"Émail",options:pr()}]},{name:"Vase Antique",model:"/models/antique_ceramic_vase_01/antique_ceramic_vase_01_1k.gltf",price:260,tint:[]},{name:"Vase Laiton",model:"/models/brass_vase_01/brass_vase_01_1k.gltf",price:210,tint:[{material:"brass_vase_001",label:"Métal",options:wn(0)}]}]},{id:"plant2",at:.72,model:"/models/calathea_orbifolia_01/calathea_orbifolia_01_1k.gltf",name:"Calathea",price:0,pos:[-1.85,0,-4.35],rot:0,caption:["Et du","vivant"],text:"Offert avec toute commande. Elle aime la lumière filtrée du rideau.",tint:[]}]},{id:"sdb",name:"La salle de bain",video:"/video/bath.mp4",poster:"/images/bath.jpg",track:"/video/bath-track.json",night:{video:"/video/bath-night.mp4",poster:"/images/bath-night.jpg",track:"/video/bath-night-track.json",sun:{pos:[-4.5,3,-3],color:"#7d8fc4",intensity:.3},lights:[{pos:[.2,2.5,-3.2],color:"#ffd9ae",intensity:6,distance:7},{pos:[-.9,1.8,-3.9],color:"#ffc98a",intensity:4,distance:5}]},camera:{fov:76,height:1.2,pitch:-2.5,yaw:2,roll:0},sun:{pos:[-4.5,3,-3],color:"#ffeede",intensity:2},items:[{id:"bench",at:.05,model:"/models/painted_wooden_bench/painted_wooden_bench_1k.gltf",name:"Banc Vestiaire",price:520,pos:[.1,0,-3.6],rot:.1,caption:["Un banc","pour s’asseoir"],text:"Pin peint à l’huile, il ne craint ni l’eau ni la vapeur.",tint:[{material:"painted_wooden_bench",label:"Peinture",options:Ki(),patterns:!0}]},{id:"basket2",at:.15,model:"/models/wicker_basket_02/wicker_basket_02_1k.gltf",name:"Boîte d’osier",price:45,on:"bench",pos:[.1,.6,-3.55],rot:.2,caption:["Une boîte","sur le banc"],text:"Osier tressé, couvercle plein, 23 cm.",tint:[]},{id:"stool3",at:.25,model:"/models/folding_wooden_stool/folding_wooden_stool_1k.gltf",name:"Tabouret Pliant",price:240,pos:[1.6,0,-3.2],rot:.5,caption:["Un tabouret","qui se plie"],text:"Teck huilé, il vit dehors comme dedans et se range à plat.",tint:[{material:"folding_wooden_stool",label:"Bois",options:yt(0)}],variants:[{name:"Tabouret Bas",model:"/models/wooden_stool_01/wooden_stool_01_1k.gltf",price:120,tint:[{material:"wooden_stool_01",label:"Bois",options:yt(0)}]},{name:"Tabouret Métal",model:"/models/metal_stool_02/metal_stool_02_1k.gltf",price:150,tint:[{material:"metal_stool_02",label:"Métal",options:wn(0)}]},{name:"Tabouret Peint",model:"/models/painted_wooden_stool/painted_wooden_stool_1k.gltf",price:160,tint:[{material:"painted_wooden_stool",label:"Peinture",options:Ki(),patterns:!0}]}]},{id:"bowl2",at:.33,model:"/models/wooden_bowl_02/wooden_bowl_02_1k.gltf",name:"Coupelle Frêne",price:35,on:"stool3",pos:[1.6,.44,-3.2],rot:0,caption:["Et une coupelle","pour le savon"],text:"Frêne huilé, tourné dans la masse.",tint:[{material:"wooden_bowl_02",label:"Bois",options:yt(0)}]},{id:"candles",at:.42,model:"/models/brass_candleholders/brass_candleholders_1k.gltf",name:"Bougeoirs",price:140,pos:[2.4,0,-3.6],rot:.3,glow:{y:.8,color:"#ffb266",intensity:3,distance:3.5,variants:[{name:"Bougeoir Bois",model:"/models/wooden_candlestick/wooden_candlestick_1k.gltf",price:35,tint:[{material:"wooden_candlestick",label:"Bois",options:yt(0)}]}]},caption:["Et des","bougies"],text:"Laiton, trois hauteurs, la plus grande fait 84 cm.",tint:[]},{id:"clay",at:.53,model:"/models/planter_pot_clay/planter_pot_clay_1k.gltf",name:"Pot de terre",price:40,pos:[3,0,-3.35],rot:0,caption:["Un pot","de terre cuite"],text:"Terre cuite non émaillée, elle boit l’eau et sèche seule.",tint:[],variants:[{name:"Pot Céramique",model:"/models/ceramic_pot/ceramic_pot_1k.gltf",price:60,tint:[]},{name:"Pot Émaillé",model:"/models/pot_enamel_01/pot_enamel_01_1k.gltf",price:50,tint:[]}]},{id:"succulent",at:.6,model:"/models/potted_plant_04/potted_plant_04_1k.gltf",name:"Succulente",price:0,pos:[2.7,0,-3.15],rot:0,caption:["Et quelque chose","de vivant"],text:"Offerte avec toute commande, dans son cache-pot. Elle se contente de la vapeur.",tint:[]},{id:"vase2",at:.72,model:"/models/ceramic_vase_02/ceramic_vase_02_1k.gltf",name:"Vase Grès",price:140,pos:[.95,0,-3.35],rot:0,caption:["Et un vase","au sol"],text:"Grès émaillé, tourné à Vallauris. Le même qu’au salon, en plus grand.",tint:[{material:"ceramic_vase_02",label:"Émail",options:pr()}],variants:[{name:"Vase Col",model:"/models/ceramic_vase_04/ceramic_vase_04_1k.gltf",price:120,tint:[{material:"ceramic_vase_04",label:"Émail",options:pr()}]},{name:"Vase Boule",model:"/models/ceramic_vase_01/ceramic_vase_01_1k.gltf",price:130,tint:[{material:"ceramic_vase_01",label:"Émail",options:pr()}]},{name:"Vase Antique",model:"/models/antique_ceramic_vase_01/antique_ceramic_vase_01_1k.gltf",price:260,tint:[]},{name:"Vase Laiton",model:"/models/brass_vase_01/brass_vase_01_1k.gltf",price:210,tint:[{material:"brass_vase_001",label:"Métal",options:wn(0)}]}]}]},{id:"terrasse",name:"La terrasse",video:"/video/pool.mp4",poster:"/images/pool.jpg",track:"/video/pool-track.json",night:{video:"/video/pool-night.mp4",poster:"/images/pool-night.jpg",track:"/video/pool-night-track.json",sun:{pos:[7,3.5,-9],color:"#6f83bd",intensity:.45},lights:[{pos:[-1.6,.5,-6.2],color:"#ffb866",intensity:5,distance:5},{pos:[2.6,.5,-6.6],color:"#ffb866",intensity:5,distance:5},{pos:[-3.5,.1,-5.5],color:"#5fd6e0",intensity:6,distance:7}]},camera:{fov:62,height:.8,pitch:-4.5,yaw:0,roll:0},sun:{pos:[7,3.5,-9],color:"#ffdfb8",intensity:2.4},items:[{id:"garden",at:.05,model:"/models/outdoor_table_chair_set_01/outdoor_table_chair_set_01_1k.gltf",name:"Table Terrasse",price:1650,pos:[.6,0,-5],rot:.2,caption:["Dehors aussi,","une table"],text:"Teck massif et acier laqué, les chaises se plient. Vendue avec les deux.",tint:[{material:"outdoor_table_chair_set_01_table",label:"Bois",options:gl(160)},{material:"outdoor_table_chair_set_01_chair",label:"Assise",options:gl(0),patterns:!0}]},{id:"bowl3",at:.14,model:"/models/wooden_bowl_01/wooden_bowl_01_1k.gltf",name:"Saladier Bois",price:85,pos:[.6,.73,-5],rot:.5,caption:["Le même saladier","qu’à la cuisine"],text:"Frêne huilé. Il passe de la table à la terrasse et revient.",tint:[{material:"wooden_bowl_01",label:"Bois",options:yt(0)}]},{id:"goblets",at:.23,model:"/models/brass_goblets/brass_goblets_1k.gltf",name:"Gobelets Laiton",price:160,pos:[.48,.73,-5.14],rot:.3,caption:["De quoi","trinquer"],text:"Laiton massif, quatre pièces, ils tiennent le froid.",tint:[]},{id:"bottles2",at:.31,model:"/models/wine_bottles_01/wine_bottles_01_1k.gltf",name:"Bouteilles",price:0,pos:[.7,.73,-5.11],rot:.4,caption:["Et de quoi","les remplir"],text:"Les vôtres, on ne fournit toujours pas.",tint:[]},{id:"stool4",at:.41,model:"/models/folding_wooden_stool/folding_wooden_stool_1k.gltf",name:"Tabouret Pliant",price:240,pos:[1.3,0,-3.9],rot:-.4,caption:["Celui-là,","vous le connaissez"],text:"Le tabouret de la salle de bain. Teck huilé : on l’avait dit, il vit dehors comme dedans.",tint:[{material:"folding_wooden_stool",label:"Bois",options:gl(0)}],variants:[{name:"Tabouret Bas",model:"/models/wooden_stool_01/wooden_stool_01_1k.gltf",price:120,tint:[{material:"wooden_stool_01",label:"Bois",options:yt(0)}]},{name:"Tabouret Métal",model:"/models/metal_stool_02/metal_stool_02_1k.gltf",price:150,tint:[{material:"metal_stool_02",label:"Métal",options:wn(0)}]},{name:"Tabouret Peint",model:"/models/painted_wooden_stool/painted_wooden_stool_1k.gltf",price:160,tint:[{material:"painted_wooden_stool",label:"Peinture",options:Ki(),patterns:!0}]}]},{id:"planter",at:.52,model:"/models/planter_box_02/planter_box_02_1k.gltf",name:"Jardinière",price:320,pos:[2.5,0,-4.4],rot:.15,caption:["Une jardinière","qui fait muret"],text:"Douves de mélèze, doublure zinc, 125 cm. Elle grise, et on la laisse griser.",tint:[{material:"planter_box_02",label:"Bois",options:gl(0)}],variants:[{name:"Jardinière Courte",model:"/models/planter_box_01/planter_box_01_1k.gltf",price:240,tint:[{material:"planter_box_01",label:"Bois",options:yt(0)}]},{name:"Jardinière Haute",model:"/models/planter_box_03/planter_box_03_1k.gltf",price:380,tint:[{material:"planter_box_03",label:"Bois",options:yt(0)}]}]},{id:"tree",at:.62,model:"/models/potted_plant_01/potted_plant_01_1k.gltf",name:"Laurier en pot",price:0,pos:[3.3,0,-4.7],rot:0,caption:["Et de l’ombre","à venir"],text:"Offert avec toute commande. Feuillage persistant, il passe l’hiver dehors.",tint:[],variants:[{name:"Pachira",model:"/models/pachira_aquatica_01/pachira_aquatica_01_1k.gltf",price:0,tint:[]},{name:"Monstera",model:"/models/potted_plant_02/potted_plant_02_1k.gltf",price:0,tint:[]}]},{id:"can",at:.72,model:"/models/watering_can_metal_01/watering_can_metal_01_1k.gltf",name:"Arrosoir Zinc",price:75,pos:[2.3,0,-3.5],rot:.6,caption:["Et de quoi","s’en occuper"],text:"Zinc soudé, pomme amovible, 5 litres.",tint:[{material:"watering_can_metal_01",label:"Métal",options:wn(0)}]}]}],Ci={video:"/video/hall.mp4",poster:"/images/hall.jpg",night:{video:"/video/hall-night.mp4",poster:"/images/hall-night.jpg"}},js={kicker:"Rendez-vous",title:["Venez","vous asseoir"],text:"Le showroom est ouvert sur rendez-vous, du mardi au samedi. On vous prête un fauteuil quinze jours avant de décider.",mail:"bonjour@maison.example",address:"14 rue des Tanneurs, Lyon"},Dx="./".replace(/\/$/,""),li=r=>typeof r=="string"&&r.startsWith("/")?Dx+r:r;for(const r of xn){r.video=li(r.video),r.poster=li(r.poster),r.track=li(r.track),r.night.video=li(r.night.video),r.night.poster=li(r.night.poster),r.night.track=li(r.night.track);for(const e of r.items)e.model=li(e.model),(e.variants||[]).forEach(t=>{t.model=li(t.model)})}Ci.video=li(Ci.video);Ci.poster=li(Ci.poster);Ci.night.video=li(Ci.night.video);Ci.night.poster=li(Ci.night.poster);const Ix=li("/hdri/brown_photostudio_02_1k.hdr");function kt(r,e={},...t){const n=document.createElement(r);for(const[i,s]of Object.entries(e))s!=null&&(i==="class"?n.className=s:i==="text"?n.textContent=s:i==="dataset"?Object.assign(n.dataset,s):i==="style"?n.style.cssText=s:n.setAttribute(i,s));for(const i of t.flat())i!=null&&n.append(i instanceof Node?i:document.createTextNode(String(i)));return n}function Bf(r){for(;r.firstChild;)r.removeChild(r.firstChild)}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const kf="185",Nx=0,jd=1,Ux=2,nc=1,$_=2,xo=3,Ir=0,jn=1,nr=2,Cr=0,Ra=1,ep=2,tp=3,np=4,Fx=5,bs=100,Ox=101,Bx=102,kx=103,zx=104,Vx=200,Hx=201,Gx=202,Wx=203,ph=204,mh=205,Xx=206,qx=207,Yx=208,Kx=209,$x=210,Zx=211,Jx=212,Qx=213,jx=214,_h=0,gh=1,xh=2,Ba=3,vh=4,yh=5,Sh=6,Mh=7,Z_=0,ev=1,tv=2,lr=0,J_=1,Q_=2,j_=3,zf=4,eg=5,tg=6,ng=7,ip="attached",nv="detached",ig=300,Bs=301,ka=302,iu=303,ru=304,Nc=306,za=1e3,Pi=1001,Sc=1002,hn=1003,rg=1004,vo=1005,It=1006,ic=1007,sr=1008,di=1009,sg=1010,ag=1011,qo=1012,Vf=1013,hr=1014,Kn=1015,Ii=1016,Hf=1017,Gf=1018,Yo=1020,og=35902,lg=35899,cg=1021,ug=1022,Li=1023,Nr=1026,As=1027,Wf=1028,Xf=1029,ks=1030,qf=1031,Yf=1033,rc=33776,sc=33777,ac=33778,oc=33779,bh=35840,Th=35841,Eh=35842,wh=35843,Ah=36196,Rh=37492,Ch=37496,Ph=37488,Lh=37489,Mc=37490,Dh=37491,Ih=37808,Nh=37809,Uh=37810,Fh=37811,Oh=37812,Bh=37813,kh=37814,zh=37815,Vh=37816,Hh=37817,Gh=37818,Wh=37819,Xh=37820,qh=37821,Yh=36492,Kh=36494,$h=36495,Zh=36283,Jh=36284,bc=36285,Qh=36286,Ko=2300,$o=2301,su=2302,rp=2303,sp=2400,ap=2401,op=2402,iv=2500,rv=0,hg=1,jh=2,sv=3200,ef=0,av=1,Zr="",an="srgb",ti="srgb-linear",Tc="linear",bt="srgb",ea=7680,lp=519,ov=512,lv=513,cv=514,Kf=515,uv=516,hv=517,$f=518,fv=519,tf=35044,cp="300 es",ar=2e3,Zo=2001;function dv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function pv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Jo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function mv(){const r=Jo("canvas");return r.style.display="block",r}const up={};function Ec(...r){const e="THREE."+r.shift();console.log(e,...r)}function fg(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function Ve(...r){r=fg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function Ze(...r){r=fg(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Ca(...r){const e=r.join(" ");e in up||(up[e]=!0,Ve(...r))}function _v(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const gv={[_h]:gh,[xh]:Sh,[vh]:Mh,[Ba]:yh,[gh]:_h,[Sh]:xh,[Mh]:vh,[yh]:Ba};class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const An=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let hp=1234567;const Io=Math.PI/180,Va=180/Math.PI;function Hi(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(An[r&255]+An[r>>8&255]+An[r>>16&255]+An[r>>24&255]+"-"+An[e&255]+An[e>>8&255]+"-"+An[e>>16&15|64]+An[e>>24&255]+"-"+An[t&63|128]+An[t>>8&255]+"-"+An[t>>16&255]+An[t>>24&255]+An[n&255]+An[n>>8&255]+An[n>>16&255]+An[n>>24&255]).toLowerCase()}function pt(r,e,t){return Math.max(e,Math.min(t,r))}function Zf(r,e){return(r%e+e)%e}function xv(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function vv(r,e,t){return r!==e?(t-r)/(e-r):0}function No(r,e,t){return(1-t)*r+t*e}function yv(r,e,t,n){return No(r,e,1-Math.exp(-t*n))}function Sv(r,e=1){return e-Math.abs(Zf(r,e*2)-e)}function Mv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function bv(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Tv(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ev(r,e){return r+Math.random()*(e-r)}function wv(r){return r*(.5-Math.random())}function Av(r){r!==void 0&&(hp=r);let e=hp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Rv(r){return r*Io}function Cv(r){return r*Va}function Pv(r){return(r&r-1)===0&&r!==0}function Lv(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Dv(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Iv(r,e,t,n,i){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),f=s((e-n)/2),h=a((e-n)/2),d=s((n-e)/2),p=a((n-e)/2);switch(i){case"XYX":r.set(o*u,l*f,l*h,o*c);break;case"YZY":r.set(l*h,o*u,l*f,o*c);break;case"ZXZ":r.set(l*f,l*h,o*u,o*c);break;case"XZX":r.set(o*u,l*p,l*d,o*c);break;case"YXY":r.set(l*d,o*u,l*p,o*c);break;case"ZYZ":r.set(l*p,l*d,o*u,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Tt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ms={DEG2RAD:Io,RAD2DEG:Va,generateUUID:Hi,clamp:pt,euclideanModulo:Zf,mapLinear:xv,inverseLerp:vv,lerp:No,damp:yv,pingpong:Sv,smoothstep:Mv,smootherstep:bv,randInt:Tv,randFloat:Ev,randFloatSpread:wv,seededRandom:Av,degToRad:Rv,radToDeg:Cv,isPowerOfTwo:Pv,ceilPowerOfTwo:Lv,floorPowerOfTwo:Dv,setQuaternionFromProperEuler:Iv,normalize:Tt,denormalize:ki},ld=class ld{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ld.prototype.isVector2=!0;let at=ld;class Ur{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],h=s[a+0],d=s[a+1],p=s[a+2],g=s[a+3];if(f!==g||l!==h||c!==d||u!==p){let m=l*h+c*d+u*p+f*g;m<0&&(h=-h,d=-d,p=-p,g=-g,m=-m);let _=1-o;if(m<.9995){const T=Math.acos(m),w=Math.sin(T);_=Math.sin(_*T)/w,o=Math.sin(o*T)/w,l=l*_+h*o,c=c*_+d*o,u=u*_+p*o,f=f*_+g*o}else{l=l*_+h*o,c=c*_+d*o,u=u*_+p*o,f=f*_+g*o;const T=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=T,c*=T,u*=T,f*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],h=s[a+1],d=s[a+2],p=s[a+3];return e[t]=o*p+u*f+l*d-c*h,e[t+1]=l*p+u*h+c*f-o*d,e[t+2]=c*p+u*d+o*h-l*f,e[t+3]=u*p-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),h=l(n/2),d=l(i/2),p=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"YXZ":this._x=h*u*f+c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"ZXY":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f-h*d*p;break;case"ZYX":this._x=h*u*f-c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f+h*d*p;break;case"YZX":this._x=h*u*f+c*d*p,this._y=c*d*f+h*u*p,this._z=c*u*p-h*d*f,this._w=c*u*f-h*d*p;break;case"XZY":this._x=h*u*f-c*d*p,this._y=c*d*f-h*u*p,this._z=c*u*p+h*d*f,this._w=c*u*f+h*d*p;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=n+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-i)*d}else if(n>o&&n>f){const d=2*Math.sqrt(1+n-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-n-f);this._w=(s-c)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-n-o);this._w=(a-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(pt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cd=class cd{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(fp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(fp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return au.copy(this).projectOnVector(e),this.sub(au)}reflect(e){return this.sub(au.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(pt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cd.prototype.isVector3=!0;let X=cd;const au=new X,fp=new Ur,ud=class ud{constructor(e,t,n,i,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],h=n[2],d=n[5],p=n[8],g=i[0],m=i[3],_=i[6],T=i[1],w=i[4],v=i[7],E=i[2],S=i[5],M=i[8];return s[0]=a*g+o*T+l*E,s[3]=a*m+o*w+l*S,s[6]=a*_+o*v+l*M,s[1]=c*g+u*T+f*E,s[4]=c*m+u*w+f*S,s[7]=c*_+u*v+f*M,s[2]=h*g+d*T+p*E,s[5]=h*m+d*w+p*S,s[8]=h*_+d*v+p*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,p=t*f+n*h+i*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/p;return e[0]=f*g,e[1]=(i*c-u*n)*g,e[2]=(o*n-i*a)*g,e[3]=h*g,e[4]=(u*t-i*l)*g,e[5]=(i*s-o*t)*g,e[6]=d*g,e[7]=(n*l-c*t)*g,e[8]=(a*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ca("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ou.makeScale(e,t)),this}rotate(e){return Ca("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ou.makeRotation(-e)),this}translate(e,t){return Ca("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ou.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ud.prototype.isMatrix3=!0;let nt=ud;const ou=new nt,dp=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pp=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Nv(){const r={enabled:!0,workingColorSpace:ti,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===bt&&(i.r=Pr(i.r),i.g=Pr(i.g),i.b=Pr(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===bt&&(i.r=Pa(i.r),i.g=Pa(i.g),i.b=Pa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Zr?Tc:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ti]:{primaries:e,whitePoint:n,transfer:Tc,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:an},outputColorSpaceConfig:{drawingBufferColorSpace:an}},[an]:{primaries:e,whitePoint:n,transfer:bt,toXYZ:dp,fromXYZ:pp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:an}}}),r}const _t=Nv();function Pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Pa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ta;class Uv{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ta===void 0&&(ta=Jo("canvas")),ta.width=e.width,ta.height=e.height;const i=ta.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ta}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Jo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Pr(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pr(t[n]/255)*255):t[n]=Pr(t[n]);return{data:t,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fv=0;class Jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fv++}),this.uuid=Hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(lu(i[a].image)):s.push(lu(i[a]))}else s=lu(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function lu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Uv.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let Ov=0;const cu=new X;class on extends Hs{constructor(e=on.DEFAULT_IMAGE,t=on.DEFAULT_MAPPING,n=Pi,i=Pi,s=It,a=sr,o=Li,l=di,c=on.DEFAULT_ANISOTROPY,u=Zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ov++}),this.uuid=Hi(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(cu).x}get height(){return this.source.getSize(cu).y}get depth(){return this.source.getSize(cu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ve(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ve(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ig)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case Pi:e.x=e.x<0?0:1;break;case Sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case Pi:e.y=e.y<0?0:1;break;case Sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=ig;on.DEFAULT_ANISOTROPY=1;const hd=class hd{constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,v=(d+1)/2,E=(_+1)/2,S=(u+h)/4,M=(f+g)/4,x=(p+m)/4;return w>v&&w>E?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=S/n,s=M/n):v>E?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=x/i):E<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(E),n=M/s,i=x/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-p)*(m-p)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-p)/T,this.y=(f-g)/T,this.z=(h-u)/T,this.w=Math.acos((c+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=pt(this.x,e.x,t.x),this.y=pt(this.y,e.y,t.y),this.z=pt(this.z,e.z,t.z),this.w=pt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=pt(this.x,e,t),this.y=pt(this.y,e,t),this.z=pt(this.z,e,t),this.w=pt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(pt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hd.prototype.isVector4=!0;let At=hd;class Bv extends Hs{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new on(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Jf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cr extends Bv{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dg extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kv extends on{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Cc=class Cc{constructor(e,t,n,i,s,a,o,l,c,u,f,h,d,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,h,d,p,g,m)}set(e,t,n,i,s,a,o,l,c,u,f,h,d,p,g,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=i,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=d,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Cc().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/na.setFromMatrixColumn(e,0).length(),s=1/na.setFromMatrixColumn(e,1).length(),a=1/na.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,p=o*u,g=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+p*c,t[5]=h-g*c,t[9]=-o*l,t[2]=g-h*c,t[6]=p+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,p=c*u,g=c*f;t[0]=h+g*o,t[4]=p*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-p,t[6]=g+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,p=c*u,g=c*f;t[0]=h-g*o,t[4]=-a*f,t[8]=p+d*o,t[1]=d+p*o,t[5]=a*u,t[9]=g-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,p=o*u,g=o*f;t[0]=l*u,t[4]=p*c-d,t[8]=h*c+g,t[1]=l*f,t[5]=g*c+h,t[9]=d*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,p=o*l,g=o*c;t[0]=l*u,t[4]=g-h*f,t[8]=p*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+p,t[10]=h-g*f}else if(e.order==="XZY"){const h=a*l,d=a*c,p=o*l,g=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+g,t[5]=a*u,t[9]=d*f-p,t[2]=p*f-d,t[6]=o*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zv,e,Vv)}lookAt(e,t,n){const i=this.elements;return ri.subVectors(e,t),ri.lengthSq()===0&&(ri.z=1),ri.normalize(),Vr.crossVectors(n,ri),Vr.lengthSq()===0&&(Math.abs(n.z)===1?ri.x+=1e-4:ri.z+=1e-4,ri.normalize(),Vr.crossVectors(n,ri)),Vr.normalize(),xl.crossVectors(ri,Vr),i[0]=Vr.x,i[4]=xl.x,i[8]=ri.x,i[1]=Vr.y,i[5]=xl.y,i[9]=ri.y,i[2]=Vr.z,i[6]=xl.z,i[10]=ri.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],h=n[9],d=n[13],p=n[2],g=n[6],m=n[10],_=n[14],T=n[3],w=n[7],v=n[11],E=n[15],S=i[0],M=i[4],x=i[8],b=i[12],R=i[1],P=i[5],D=i[9],V=i[13],z=i[2],U=i[6],k=i[10],I=i[14],J=i[3],ie=i[7],L=i[11],he=i[15];return s[0]=a*S+o*R+l*z+c*J,s[4]=a*M+o*P+l*U+c*ie,s[8]=a*x+o*D+l*k+c*L,s[12]=a*b+o*V+l*I+c*he,s[1]=u*S+f*R+h*z+d*J,s[5]=u*M+f*P+h*U+d*ie,s[9]=u*x+f*D+h*k+d*L,s[13]=u*b+f*V+h*I+d*he,s[2]=p*S+g*R+m*z+_*J,s[6]=p*M+g*P+m*U+_*ie,s[10]=p*x+g*D+m*k+_*L,s[14]=p*b+g*V+m*I+_*he,s[3]=T*S+w*R+v*z+E*J,s[7]=T*M+w*P+v*U+E*ie,s[11]=T*x+w*D+v*k+E*L,s[15]=T*b+w*V+v*I+E*he,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],p=e[3],g=e[7],m=e[11],_=e[15],T=l*d-c*h,w=o*d-c*f,v=o*h-l*f,E=a*d-c*u,S=a*h-l*u,M=a*f-o*u;return t*(g*T-m*w+_*v)-n*(p*T-m*E+_*S)+i*(p*w-g*E+_*M)-s*(p*v-g*S+m*M)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(s*u-o*l)+i*(s*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],p=e[12],g=e[13],m=e[14],_=e[15],T=t*o-n*a,w=t*l-i*a,v=t*c-s*a,E=n*l-i*o,S=n*c-s*o,M=i*c-s*l,x=u*g-f*p,b=u*m-h*p,R=u*_-d*p,P=f*m-h*g,D=f*_-d*g,V=h*_-d*m,z=T*V-w*D+v*P+E*R-S*b+M*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/z;return e[0]=(o*V-l*D+c*P)*U,e[1]=(i*D-n*V-s*P)*U,e[2]=(g*M-m*S+_*E)*U,e[3]=(h*S-f*M-d*E)*U,e[4]=(l*R-a*V-c*b)*U,e[5]=(t*V-i*R+s*b)*U,e[6]=(m*v-p*M-_*w)*U,e[7]=(u*M-h*v+d*w)*U,e[8]=(a*D-o*R+c*x)*U,e[9]=(n*R-t*D-s*x)*U,e[10]=(p*S-g*v+_*T)*U,e[11]=(f*v-u*S-d*T)*U,e[12]=(o*b-a*P-l*x)*U,e[13]=(t*P-n*b+i*x)*U,e[14]=(g*w-p*E-m*T)*U,e[15]=(u*E-f*w+h*T)*U,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,p=s*f,g=a*u,m=a*f,_=o*f,T=l*c,w=l*u,v=l*f,E=n.x,S=n.y,M=n.z;return i[0]=(1-(g+_))*E,i[1]=(d+v)*E,i[2]=(p-w)*E,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(h+_))*S,i[6]=(m+T)*S,i[7]=0,i[8]=(p+w)*M,i[9]=(m-T)*M,i[10]=(1-(h+g))*M,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=na.set(i[0],i[1],i[2]).length();const o=na.set(i[4],i[5],i[6]).length(),l=na.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Ui.copy(this);const c=1/a,u=1/o,f=1/l;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=u,Ui.elements[5]*=u,Ui.elements[6]*=u,Ui.elements[8]*=f,Ui.elements[9]*=f,Ui.elements[10]*=f,t.setFromRotationMatrix(Ui),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=ar,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(l)p=s/(a-s),g=a*s/(a-s);else if(o===ar)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===Zo)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=ar,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),h=-(t+e)/(t-e),d=-(n+i)/(n-i);let p,g;if(l)p=1/(a-s),g=a/(a-s);else if(o===ar)p=-2/(a-s),g=-(a+s)/(a-s);else if(o===Zo)p=-1/(a-s),g=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Cc.prototype.isMatrix4=!0;let ot=Cc;const na=new X,Ui=new ot,zv=new X(0,0,0),Vv=new X(1,1,1),Vr=new X,xl=new X,ri=new X,mp=new ot,_p=new Ur;class us{constructor(e=0,t=0,n=0,i=us.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-pt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(pt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-pt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return mp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _p.setFromEuler(this),this.setFromQuaternion(_p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}us.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hv=0;const gp=new X,ia=new Ur,mr=new ot,vl=new X,Qa=new X,Gv=new X,Wv=new Ur,xp=new X(1,0,0),vp=new X(0,1,0),yp=new X(0,0,1),Sp={type:"added"},Xv={type:"removed"},ra={type:"childadded",child:null},uu={type:"childremoved",child:null};class Vt extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hv++}),this.uuid=Hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new X,t=new us,n=new Ur,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ot},normalMatrix:{value:new nt}}),this.matrix=new ot,this.matrixWorld=new ot,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.multiply(ia),this}rotateOnWorldAxis(e,t){return ia.setFromAxisAngle(e,t),this.quaternion.premultiply(ia),this}rotateX(e){return this.rotateOnAxis(xp,e)}rotateY(e){return this.rotateOnAxis(vp,e)}rotateZ(e){return this.rotateOnAxis(yp,e)}translateOnAxis(e,t){return gp.copy(e).applyQuaternion(this.quaternion),this.position.add(gp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(xp,e)}translateY(e){return this.translateOnAxis(vp,e)}translateZ(e){return this.translateOnAxis(yp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vl.copy(e):vl.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mr.lookAt(Qa,vl,this.up):mr.lookAt(vl,Qa,this.up),this.quaternion.setFromRotationMatrix(mr),i&&(mr.extractRotation(i.matrixWorld),ia.setFromRotationMatrix(mr),this.quaternion.premultiply(ia.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sp),ra.child=e,this.dispatchEvent(ra),ra.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xv),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sp),ra.child=e,this.dispatchEvent(ra),ra.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,Gv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,Wv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),p.length>0&&(n.nodes=p)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Vt.DEFAULT_UP=new X(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vi extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const qv={type:"move"};class hu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,p=.005;c.inputState.pinching&&h>d+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qv)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const pg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function fu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=an){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=_t.workingColorSpace){if(e=Zf(e,1),t=pt(t,0,1),n=pt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=fu(a,s,e+1/3),this.g=fu(a,s,e),this.b=fu(a,s,e-1/3)}return _t.colorSpaceToWorking(this,i),this}setStyle(e,t=an){function n(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ve("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=an){const n=pg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Pa(e.r),this.g=Pa(e.g),this.b=Pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=an){return _t.workingToColorSpace(Rn.copy(this),e),Math.round(pt(Rn.r*255,0,255))*65536+Math.round(pt(Rn.g*255,0,255))*256+Math.round(pt(Rn.b*255,0,255))}getHexString(e=an){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Rn.copy(this),t);const n=Rn.r,i=Rn.g,s=Rn.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Rn.copy(this),t),e.r=Rn.r,e.g=Rn.g,e.b=Rn.b,e}getStyle(e=an){_t.workingToColorSpace(Rn.copy(this),e);const t=Rn.r,n=Rn.g,i=Rn.b;return e!==an?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(yl);const n=No(Hr.h,yl.h,t),i=No(Hr.s,yl.s,t),s=No(Hr.l,yl.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Rn=new Je;Je.NAMES=pg;class Mp extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new us,this.environmentIntensity=1,this.environmentRotation=new us,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Fi=new X,_r=new X,du=new X,gr=new X,sa=new X,aa=new X,bp=new X,pu=new X,mu=new X,_u=new X,gu=new At,xu=new At,vu=new At;class zi{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Fi.subVectors(e,t),i.cross(Fi);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Fi.subVectors(i,t),_r.subVectors(n,t),du.subVectors(e,t);const a=Fi.dot(Fi),o=Fi.dot(_r),l=Fi.dot(du),c=_r.dot(_r),u=_r.dot(du),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const h=1/f,d=(c*l-o*u)*h,p=(a*u-o*l)*h;return s.set(1-d-p,p,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,gr)===null?!1:gr.x>=0&&gr.y>=0&&gr.x+gr.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,gr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gr.x),l.addScaledVector(a,gr.y),l.addScaledVector(o,gr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return gu.setScalar(0),xu.setScalar(0),vu.setScalar(0),gu.fromBufferAttribute(e,t),xu.fromBufferAttribute(e,n),vu.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(gu,s.x),a.addScaledVector(xu,s.y),a.addScaledVector(vu,s.z),a}static isFrontFacing(e,t,n,i){return Fi.subVectors(n,t),_r.subVectors(e,t),Fi.cross(_r).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),_r.subVectors(this.a,this.b),Fi.cross(_r).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return zi.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return zi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;sa.subVectors(i,n),aa.subVectors(s,n),pu.subVectors(e,n);const l=sa.dot(pu),c=aa.dot(pu);if(l<=0&&c<=0)return t.copy(n);mu.subVectors(e,i);const u=sa.dot(mu),f=aa.dot(mu);if(u>=0&&f<=u)return t.copy(i);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(sa,a);_u.subVectors(e,s);const d=sa.dot(_u),p=aa.dot(_u);if(p>=0&&d<=p)return t.copy(s);const g=d*c-l*p;if(g<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(aa,o);const m=u*p-d*f;if(m<=0&&f-u>=0&&d-p>=0)return bp.subVectors(s,i),o=(f-u)/(f-u+(d-p)),t.copy(i).addScaledVector(bp,o);const _=1/(m+g+h);return a=g*_,o=h*_,t.copy(n).addScaledVector(sa,a).addScaledVector(aa,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ni{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Oi):Oi.fromBufferAttribute(s,a),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sl.copy(n.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),Ml.subVectors(this.max,ja),oa.subVectors(e.a,ja),la.subVectors(e.b,ja),ca.subVectors(e.c,ja),Gr.subVectors(la,oa),Wr.subVectors(ca,la),ps.subVectors(oa,ca);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-ps.z,ps.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,ps.z,0,-ps.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-ps.y,ps.x,0];return!yu(t,oa,la,ca,Ml)||(t=[1,0,0,0,1,0,0,0,1],!yu(t,oa,la,ca,Ml))?!1:(bl.crossVectors(Gr,Wr),t=[bl.x,bl.y,bl.z],yu(t,oa,la,ca,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xr=[new X,new X,new X,new X,new X,new X,new X,new X],Oi=new X,Sl=new Ni,oa=new X,la=new X,ca=new X,Gr=new X,Wr=new X,ps=new X,ja=new X,Ml=new X,bl=new X,ms=new X;function yu(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){ms.fromArray(r,s);const o=i.x*Math.abs(ms.x)+i.y*Math.abs(ms.y)+i.z*Math.abs(ms.z),l=e.dot(ms),c=t.dot(ms),u=n.dot(ms);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Tr=Yv();function Yv(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function Kv(r){Math.abs(r)>65504&&Ve("DataUtils.toHalfFloat(): Value out of range."),r=pt(r,-65504,65504),Tr.floatView[0]=r;const e=Tr.uint32View[0],t=e>>23&511;return Tr.baseTable[t]+((e&8388607)>>Tr.shiftTable[t])}function $v(r){const e=r>>10;return Tr.uint32View[0]=Tr.mantissaTable[Tr.offsetTable[e]+(r&1023)]+Tr.exponentTable[e],Tr.floatView[0]}class Tl{static toHalfFloat(e){return Kv(e)}static fromHalfFloat(e){return $v(e)}}const nn=new X,El=new at;let Zv=0;class Xn extends Hs{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zv++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=tf,this.updateRanges=[],this.gpuType=Kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)El.fromBufferAttribute(this,t),El.applyMatrix3(e),this.setXY(t,El.x,El.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix3(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyMatrix4(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.applyNormalMatrix(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)nn.fromBufferAttribute(this,t),nn.transformDirection(e),this.setXYZ(t,nn.x,nn.y,nn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tf&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class mg extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _g extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gi extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Jv=new Ni,eo=new X,Su=new X;class fr{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Jv.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(eo,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Su)),this.expandByPoint(eo.copy(e.center).sub(Su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qv=0;const Mi=new ot,Mu=new Vt,ua=new X,si=new Ni,to=new Ni,_n=new X;class ni extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qv++}),this.uuid=Hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dv(e)?_g:mg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new nt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,t,n){return Mi.makeTranslation(e,t,n),this.applyMatrix4(Mi),this}scale(e,t,n){return Mi.makeScale(e,t,n),this.applyMatrix4(Mi),this}lookAt(e){return Mu.lookAt(e),Mu.updateMatrix(),this.applyMatrix4(Mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ua).negate(),this.translate(ua.x,ua.y,ua.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new gi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];si.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,si.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,si.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(si.min),this.boundingBox.expandByPoint(si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(si.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];to.setFromBufferAttribute(o),this.morphTargetsRelative?(_n.addVectors(si.min,to.min),si.expandByPoint(_n),_n.addVectors(si.max,to.max),si.expandByPoint(_n)):(si.expandByPoint(to.min),si.expandByPoint(to.max))}si.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)_n.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(_n));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_n.fromBufferAttribute(o,c),l&&(ua.fromBufferAttribute(e,c),_n.add(ua)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new X,l[x]=new X;const c=new X,u=new X,f=new X,h=new at,d=new at,p=new at,g=new X,m=new X;function _(x,b,R){c.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,R),h.fromBufferAttribute(s,x),d.fromBufferAttribute(s,b),p.fromBufferAttribute(s,R),u.sub(c),f.sub(c),d.sub(h),p.sub(h);const P=1/(d.x*p.y-p.x*d.y);isFinite(P)&&(g.copy(u).multiplyScalar(p.y).addScaledVector(f,-d.y).multiplyScalar(P),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-p.x).multiplyScalar(P),o[x].add(g),o[b].add(g),o[R].add(g),l[x].add(m),l[b].add(m),l[R].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,b=T.length;x<b;++x){const R=T[x],P=R.start,D=R.count;for(let V=P,z=P+D;V<z;V+=3)_(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const w=new X,v=new X,E=new X,S=new X;function M(x){E.fromBufferAttribute(i,x),S.copy(E);const b=o[x];w.copy(b),w.sub(E.multiplyScalar(E.dot(b))).normalize(),v.crossVectors(S,b);const P=v.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,P)}for(let x=0,b=T.length;x<b;++x){const R=T[x],P=R.start,D=R.count;for(let V=P,z=P+D;V<z;V+=3)M(e.getX(V+0)),M(e.getX(V+1)),M(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let h=0,d=e.count;h<d;h+=3){const p=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,p),s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,p=0;for(let g=0,m=l.length;g<m;g++){o.isInterleavedBufferAttribute?d=l[g]*o.data.stride+o.offset:d=l[g]*u;for(let _=0;_<u;_++)h[p++]=c[d++]}return new Xn(h,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=tf,this.updateRanges=[],this.version=0,this.uuid=Hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const On=new X;class jf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyMatrix4(e),this.setXYZ(t,On.x,On.y,On.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.applyNormalMatrix(e),this.setXYZ(t,On.x,On.y,On.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)On.fromBufferAttribute(this,t),On.transformDirection(e),this.setXYZ(t,On.x,On.y,On.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Tt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Tt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Tt(t,this.array),n=Tt(n,this.array),i=Tt(i,this.array),s=Tt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Ec("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Xn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new jf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Ec("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let ey=0;class Gi extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ey++}),this.uuid=Hi(),this.name="",this.type="Material",this.blending=Ra,this.side=Ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ph,this.blendDst=mh,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ea,this.stencilZFail=ea,this.stencilZPass=ea,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ve(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){Ve(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ra&&(n.blending=this.blending),this.side!==Ir&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ph&&(n.blendSrc=this.blendSrc),this.blendDst!==mh&&(n.blendDst=this.blendDst),this.blendEquation!==bs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ba&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ea&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ea&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ea&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new at().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vr=new X,bu=new X,wl=new X,Xr=new X,Tu=new X,Al=new X,Eu=new X;class il{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){bu.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(bu);const s=e.distanceTo(t)*.5,a=-this.direction.dot(wl),o=Xr.dot(this.direction),l=-Xr.dot(wl),c=Xr.lengthSq(),u=Math.abs(1-a*a);let f,h,d,p;if(u>0)if(f=a*l-o,h=a*o-l,p=s*u,f>=0)if(h>=-p)if(h<=p){const g=1/u;f*=g,h*=g,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-p?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=p?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(bu).addScaledVector(wl,h),d}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const n=vr.dot(this.direction),i=vr.dot(vr)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,i=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,i=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,n,i,s){Tu.subVectors(t,e),Al.subVectors(n,e),Eu.crossVectors(Tu,Al);let a=this.direction.dot(Eu),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xr.subVectors(this.origin,e);const l=o*this.direction.dot(Al.crossVectors(Xr,Al));if(l<0)return null;const c=o*this.direction.dot(Tu.cross(Xr));if(c<0||l+c>a)return null;const u=-o*Xr.dot(Eu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wr extends Gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.combine=Z_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tp=new ot,_s=new il,Rl=new fr,Ep=new X,Cl=new X,Pl=new X,Ll=new X,wu=new X,Dl=new X,wp=new X,Il=new X;class bn extends Vt{constructor(e=new ni,t=new wr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Dl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(wu.fromBufferAttribute(f,e),a?Dl.addScaledVector(wu,u):Dl.addScaledVector(wu.sub(t),u))}t.add(Dl)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(s),_s.copy(e.ray).recast(e.near),!(Rl.containsPoint(_s.origin)===!1&&(_s.intersectSphere(Rl,Ep)===null||_s.origin.distanceToSquared(Ep)>(e.far-e.near)**2))&&(Tp.copy(s).invert(),_s.copy(e.ray).applyMatrix4(Tp),!(n.boundingBox!==null&&_s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_s)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,g=h.length;p<g;p++){const m=h[p],_=a[m.materialIndex],T=Math.max(m.start,d.start),w=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,E=w;v<E;v+=3){const S=o.getX(v),M=o.getX(v+1),x=o.getX(v+2);i=Nl(this,_,e,n,c,u,f,S,M,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(o.count,d.start+d.count);for(let m=p,_=g;m<_;m+=3){const T=o.getX(m),w=o.getX(m+1),v=o.getX(m+2);i=Nl(this,a,e,n,c,u,f,T,w,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,g=h.length;p<g;p++){const m=h[p],_=a[m.materialIndex],T=Math.max(m.start,d.start),w=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=T,E=w;v<E;v+=3){const S=v,M=v+1,x=v+2;i=Nl(this,_,e,n,c,u,f,S,M,x),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const p=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let m=p,_=g;m<_;m+=3){const T=m,w=m+1,v=m+2;i=Nl(this,a,e,n,c,u,f,T,w,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function ty(r,e,t,n,i,s,a,o){let l;if(e.side===jn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===Ir,o),l===null)return null;Il.copy(o),Il.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:r}}function Nl(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Cl),r.getVertexPosition(l,Pl),r.getVertexPosition(c,Ll);const u=ty(r,e,t,n,Cl,Pl,Ll,wp);if(u){const f=new X;zi.getBarycoord(wp,Cl,Pl,Ll,f),i&&(u.uv=zi.getInterpolatedAttribute(i,o,l,c,f,new at)),s&&(u.uv1=zi.getInterpolatedAttribute(s,o,l,c,f,new at)),a&&(u.normal=zi.getInterpolatedAttribute(a,o,l,c,f,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new X,materialIndex:0};zi.getNormal(Cl,Pl,Ll,h.normal),u.face=h,u.barycoord=f}return u}const no=new At,Ap=new At,Rp=new At,ny=new At,Cp=new ot,Ul=new X,Au=new fr,Pp=new ot,Ru=new il;class iy extends bn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ip,this.bindMatrix=new ot,this.bindMatrixInverse=new ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ni),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ul),this.boundingBox.expandByPoint(Ul)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new fr),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Ul),this.boundingSphere.expandByPoint(Ul)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Au.copy(this.boundingSphere),Au.applyMatrix4(i),e.ray.intersectsSphere(Au)!==!1&&(Pp.copy(i).invert(),Ru.copy(e.ray).applyMatrix4(Pp),!(this.boundingBox!==null&&Ru.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ru)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new At,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ip?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===nv?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ve("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ap.fromBufferAttribute(i.attributes.skinIndex,e),Rp.fromBufferAttribute(i.attributes.skinWeight,e),t.isVector4?(no.copy(t),t.set(0,0,0,0)):(no.set(...t,1),t.set(0,0,0)),no.applyMatrix4(this.bindMatrix);for(let s=0;s<4;s++){const a=Rp.getComponent(s);if(a!==0){const o=Ap.getComponent(s);Cp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(ny.copy(no).applyMatrix4(Cp),a)}}return t.isVector4&&(t.w=no.w),t.applyMatrix4(this.bindMatrixInverse)}}class gg extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Qo extends on{constructor(e=null,t=1,n=1,i,s,a,o,l,c=hn,u=hn,f,h){super(null,a,o,l,c,u,i,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lp=new ot,ry=new ot;class ed{constructor(e=[],t=[]){this.uuid=Hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Ve("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new ot)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ot;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:ry;Lp.multiplyMatrices(o,t[s]),Lp.toArray(n,s*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ed(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Qo(t,e,e,Li,Kn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const s=e.bones[n];let a=t[s];a===void 0&&(Ve("Skeleton: No bone found with UUID:",s),a=new gg),this.bones.push(a),this.boneInverses.push(new ot().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,s=t.length;i<s;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class nf extends Xn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ha=new ot,Dp=new ot,Fl=[],Ip=new Ni,sy=new ot,io=new bn,ro=new fr;class ay extends bn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,sy)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ni),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ha),Ip.copy(e.boundingBox).applyMatrix4(ha),this.boundingBox.union(Ip)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ha),ro.copy(e.boundingSphere).applyMatrix4(ha),this.boundingSphere.union(ro)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ro.copy(this.boundingSphere),ro.applyMatrix4(n),e.ray.intersectsSphere(ro)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ha),Dp.multiplyMatrices(n,ha),io.matrixWorld=Dp,io.raycast(e,Fl);for(let a=0,o=Fl.length;a<o;a++){const l=Fl[a];l.instanceId=s,l.object=this,t.push(l)}Fl.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new nf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qo(new Float32Array(i*this.count),i,this.count,Wf,Kn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;return s[l]=o,s.set(n,l+1),this}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Cu=new X,oy=new X,ly=new nt;class $r{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Cu.subVectors(n,t).cross(oy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Cu),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||ly.getNormalMatrix(e),i=this.coplanarPoint(Cu).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new fr,cy=new at(.5,.5),Ol=new X;class td{constructor(e=new $r,t=new $r,n=new $r,i=new $r,s=new $r,a=new $r){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ar,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],h=s[6],d=s[7],p=s[8],g=s[9],m=s[10],_=s[11],T=s[12],w=s[13],v=s[14],E=s[15];if(i[0].setComponents(c-a,d-u,_-p,E-T).normalize(),i[1].setComponents(c+a,d+u,_+p,E+T).normalize(),i[2].setComponents(c+o,d+f,_+g,E+w).normalize(),i[3].setComponents(c-o,d-f,_-g,E-w).normalize(),n)i[4].setComponents(l,h,m,v).normalize(),i[5].setComponents(c-l,d-h,_-m,E-v).normalize();else if(i[4].setComponents(c-l,d-h,_-m,E-v).normalize(),t===ar)i[5].setComponents(c+l,d+h,_+m,E+v).normalize();else if(t===Zo)i[5].setComponents(l,h,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=cy.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ol.x=i.normal.x>0?e.max.x:e.min.x,Ol.y=i.normal.y>0?e.max.y:e.min.y,Ol.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uc extends Gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const wc=new X,Ac=new X,Np=new ot,so=new il,Bl=new fr,Pu=new X,Up=new X;class Fc extends Vt{constructor(e=new ni,t=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)wc.fromBufferAttribute(t,i-1),Ac.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=wc.distanceTo(Ac);e.setAttribute("lineDistance",new gi(n,1))}else Ve("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(i),Bl.radius+=s,e.ray.intersectsSphere(Bl)===!1)return;Np.copy(i).invert(),so.copy(e.ray).applyMatrix4(Np);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,m=p-1;g<m;g+=c){const _=u.getX(g),T=u.getX(g+1),w=kl(this,e,so,l,_,T,g);w&&t.push(w)}if(this.isLineLoop){const g=u.getX(p-1),m=u.getX(d),_=kl(this,e,so,l,g,m,p-1);_&&t.push(_)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=d,m=p-1;g<m;g+=c){const _=kl(this,e,so,l,g,g+1,g);_&&t.push(_)}if(this.isLineLoop){const g=kl(this,e,so,l,p-1,d,p-1);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kl(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(wc.fromBufferAttribute(o,i),Ac.fromBufferAttribute(o,s),t.distanceSqToSegment(wc,Ac,Pu,Up)>n)return;Pu.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Pu);if(!(c<e.near||c>e.far))return{distance:c,point:Up.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}const Fp=new X,Op=new X;class xg extends Fc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)Fp.fromBufferAttribute(t,i),Op.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fp.distanceTo(Op);e.setAttribute("lineDistance",new gi(n,1))}else Ve("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class uy extends Fc{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vg extends Gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Bp=new ot,rf=new il,zl=new fr,Vl=new X;class hy extends Vt{constructor(e=new ni,t=new vg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zl.copy(n.boundingSphere),zl.applyMatrix4(i),zl.radius+=s,e.ray.intersectsSphere(zl)===!1)return;Bp.copy(i).invert(),rf.copy(e.ray).applyMatrix4(Bp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=h,g=d;p<g;p++){const m=c.getX(p);Vl.fromBufferAttribute(f,m),kp(Vl,m,l,i,e,t,this)}}else{const h=Math.max(0,a.start),d=Math.min(f.count,a.start+a.count);for(let p=h,g=d;p<g;p++)Vl.fromBufferAttribute(f,p),kp(Vl,p,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function kp(r,e,t,n,i,s,a){const o=rf.distanceSqToPoint(r);if(o<t){const l=new X;rf.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class fy extends on{constructor(e,t,n,i,s=It,a=It,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isVideoTexture=!0,this.generateMipmaps=!1,this._requestVideoFrameCallbackId=0;const u=this;function f(){u.needsUpdate=!0,u._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f)}"requestVideoFrameCallback"in e&&(this._requestVideoFrameCallbackId=e.requestVideoFrameCallback(f))}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}dispose(){this._requestVideoFrameCallbackId!==0&&(this.source.data.cancelVideoFrameCallback(this._requestVideoFrameCallbackId),this._requestVideoFrameCallbackId=0),super.dispose()}}class yg extends on{constructor(e=[],t=Bs,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jo extends on{constructor(e,t,n,i,s,a,o,l,c){super(e,t,n,i,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ha extends on{constructor(e,t,n=hr,i,s,a,o=hn,l=hn,c,u=Nr,f=1){if(u!==Nr&&u!==As)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class dy extends Ha{constructor(e,t=hr,n=Bs,i,s,a=hn,o=hn,l,c=Nr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Sg extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Wa extends ni{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,i,a,2),p("x","z","y",1,-1,e,n,-t,i,a,3),p("x","y","z",1,-1,e,t,n,i,s,4),p("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new gi(c,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(f,2));function p(g,m,_,T,w,v,E,S,M,x,b){const R=v/M,P=E/x,D=v/2,V=E/2,z=S/2,U=M+1,k=x+1;let I=0,J=0;const ie=new X;for(let L=0;L<k;L++){const he=L*P-V;for(let _e=0;_e<U;_e++){const ze=_e*R-D;ie[g]=ze*T,ie[m]=he*w,ie[_]=z,c.push(ie.x,ie.y,ie.z),ie[g]=0,ie[m]=0,ie[_]=S>0?1:-1,u.push(ie.x,ie.y,ie.z),f.push(_e/M),f.push(1-L/x),I+=1}}for(let L=0;L<x;L++)for(let he=0;he<M;he++){const _e=h+he+U*L,ze=h+he+U*(L+1),Xe=h+(he+1)+U*(L+1),He=h+(he+1)+U*L;l.push(_e,ze,He),l.push(ze,Xe,He),J+=6}o.addGroup(d,J,b),d+=J,h+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class zs extends ni{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,h=t/l,d=[],p=[],g=[],m=[];for(let _=0;_<u;_++){const T=_*h-a;for(let w=0;w<c;w++){const v=w*f-s;p.push(v,-T,0),g.push(0,0,1),m.push(w/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let T=0;T<o;T++){const w=T+c*_,v=T+c*(_+1),E=T+1+c*(_+1),S=T+1+c*_;d.push(w,v,S),d.push(v,E,S)}this.setIndex(d),this.setAttribute("position",new gi(p,3)),this.setAttribute("normal",new gi(g,3)),this.setAttribute("uv",new gi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class py extends Gi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Je(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Ga(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(zp(i))i.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(zp(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function kn(r){const e={};for(let t=0;t<r.length;t++){const n=Ga(r[t]);for(const i in n)e[i]=n[i]}return e}function zp(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function my(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Mg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const _y={clone:Ga,merge:kn};var gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends Gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gy,this.fragmentShader=xy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ga(e.uniforms),this.uniformsGroups=my(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Je().setHex(i.value);break;case"v2":this.uniforms[n].value=new at().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new At().fromArray(i.value);break;case"m3":this.uniforms[n].value=new nt().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ot().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class vy extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class nd extends Gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new us,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dr extends nd{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class yy extends Gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Sy extends Gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function Hl(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function My(r){function e(i,s){return r[i]-r[s]}const t=r.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Vp(r,e,t){const n=r.length,i=new r.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)i[a++]=r[o+l]}return i}function by(r,e,t,n){let i=1,s=r[0];for(;s!==void 0&&s[n]===void 0;)s=r[i++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push(...a)),s=r[i++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=r[i++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=r[i++];while(s!==void 0)}class Xa{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let a=0;a!==i;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}}class Ty extends Xa{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sp,endingEnd:sp}}intervalChanged_(e,t,n){const i=this.parameterPositions;let s=e-2,a=e+1,o=i[s],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ap:s=e,o=2*t-n;break;case op:s=i.length-2,o=t+i[s]-i[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ap:a=e,l=2*n-t;break;case op:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,p=(n-t)/(i-t),g=p*p,m=g*p,_=-h*m+2*h*g-h*p,T=(1+h)*m+(-1.5-2*h)*g+(-.5+h)*p+1,w=(-1-d)*m+(1.5+d)*g+.5*p,v=d*m-d*g;for(let E=0;E!==o;++E)s[E]=_*a[u+E]+T*a[c+E]+w*a[l+E]+v*a[f+E];return s}}class Ey extends Xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(i-t),f=1-u;for(let h=0;h!==o;++h)s[h]=a[c+h]*f+a[l+h]*u;return s}}class wy extends Xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ay extends Xa{interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){const p=(n-t)/(i-t),g=1-p;for(let m=0;m!==o;++m)s[m]=a[c+m]*g+a[l+m]*p;return s}const h=o*2,d=e-1;for(let p=0;p!==o;++p){const g=a[c+p],m=a[l+p],_=d*h+p*2,T=f[_],w=f[_+1],v=e*h+p*2,E=u[v],S=u[v+1];let M=(n-t)/(i-t),x,b,R,P,D;for(let V=0;V<8;V++){x=M*M,b=x*M,R=1-M,P=R*R,D=P*R;const U=D*t+3*P*M*T+3*R*x*E+b*i-n;if(Math.abs(U)<1e-10)break;const k=3*P*(T-t)+6*R*M*(E-T)+3*x*(i-E);if(Math.abs(k)<1e-10)break;M=M-U/k,M=Math.max(0,Math.min(1,M))}s[p]=D*g+3*P*M*w+3*R*x*S+b*m}return s}}class Xi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hl(t,this.TimeBufferType),this.values=Hl(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hl(e.times,Array),values:Hl(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new wy(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ey(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ty(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new Ay(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ko:t=this.InterpolantFactoryMethodDiscrete;break;case $o:t=this.InterpolantFactoryMethodLinear;break;case su:t=this.InterpolantFactoryMethodSmooth;break;case rp:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ve("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return $o;case this.InterpolantFactoryMethodSmooth:return su;case this.InterpolantFactoryMethodBezier:return rp}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let s=0,a=i-1;for(;s!==i&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,s=n.length;s===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&pv(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===su,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(i)l=!0;else{const f=o*n,h=f-n,d=f+n;for(let p=0;p!==n;++p){const g=t[f+p];if(g!==t[h+p]||g!==t[d+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const f=o*n,h=a*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Xi.prototype.ValueTypeName="";Xi.prototype.TimeBufferType=Float32Array;Xi.prototype.ValueBufferType=Float32Array;Xi.prototype.DefaultInterpolation=$o;class qa extends Xi{constructor(e,t,n){super(e,t,n)}}qa.prototype.ValueTypeName="bool";qa.prototype.ValueBufferType=Array;qa.prototype.DefaultInterpolation=Ko;qa.prototype.InterpolantFactoryMethodLinear=void 0;qa.prototype.InterpolantFactoryMethodSmooth=void 0;class bg extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}bg.prototype.ValueTypeName="color";class el extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}el.prototype.ValueTypeName="number";class Ry extends Xa{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Ur.slerpFlat(s,0,a,c-o,a,c,l);return s}}class tl extends Xi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new Ry(this.times,this.values,this.getValueSize(),e)}}tl.prototype.ValueTypeName="quaternion";tl.prototype.InterpolantFactoryMethodSmooth=void 0;class Ya extends Xi{constructor(e,t,n){super(e,t,n)}}Ya.prototype.ValueTypeName="string";Ya.prototype.ValueBufferType=Array;Ya.prototype.DefaultInterpolation=Ko;Ya.prototype.InterpolantFactoryMethodLinear=void 0;Ya.prototype.InterpolantFactoryMethodSmooth=void 0;class Rc extends Xi{constructor(e,t,n,i){super(e,t,n,i)}}Rc.prototype.ValueTypeName="vector";class Cy{constructor(e="",t=-1,n=[],i=iv){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Hi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Ly(n[a]).scale(i));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,a=n.length;s!==a;++s)t.push(Xi.toJSON(n[s]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=My(l);l=Vp(l,1,u),c=Vp(c,1,u),!i&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new el(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let h=i[f];h||(i[f]=h=[]),h.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function Py(r){switch(r.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return el;case"vector":case"vector2":case"vector3":case"vector4":return Rc;case"color":return bg;case"quaternion":return tl;case"bool":case"boolean":return qa;case"string":return Ya}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+r)}function Ly(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Py(r.type);if(r.times===void 0){const t=[],n=[];by(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const Ar={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(Hp(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!Hp(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function Hp(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Dy{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],p=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Iy=new Dy;class Gs{constructor(e){this.manager=e!==void 0?e:Iy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Gs.DEFAULT_MATERIAL_NAME="__DEFAULT";const yr={};class Ny extends Error{constructor(e,t){super(e),this.response=t}}class id extends Gs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Ar.get(`file:${e}`);if(s!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0);return}if(yr[e]!==void 0){yr[e].push({onLoad:t,onProgress:n,onError:i});return}yr[e]=[],yr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ve("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=yr[e],f=c.body.getReader(),h=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),d=h?parseInt(h):0,p=d!==0;let g=0;const m=new ReadableStream({start(_){T();function T(){f.read().then(({done:w,value:v})=>{if(w)_.close();else{g+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:p,loaded:g,total:d});for(let S=0,M=u.length;S<M;S++){const x=u[S];x.onProgress&&x.onProgress(E)}_.enqueue(v),T()}},w=>{_.error(w)})}}});return new Response(m)}else throw new Ny(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(o),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return c.arrayBuffer().then(p=>d.decode(p))}}}).then(c=>{Ar.add(`file:${e}`,c);const u=yr[e];delete yr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(c)}}).catch(c=>{const u=yr[e];if(u===void 0)throw this.manager.itemError(e),c;delete yr[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const fa=new WeakMap;class Uy extends Gs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ar.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let f=fa.get(a);f===void 0&&(f=[],fa.set(a,f)),f.push({onLoad:t,onError:i})}return a}const o=Jo("img");function l(){u(),t&&t(this);const f=fa.get(this)||[];for(let h=0;h<f.length;h++){const d=f[h];d.onLoad&&d.onLoad(this)}fa.delete(this),s.manager.itemEnd(e)}function c(f){u(),i&&i(f),Ar.remove(`image:${e}`);const h=fa.get(this)||[];for(let d=0;d<h.length;d++){const p=h[d];p.onError&&p.onError(f)}fa.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ar.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class Fy extends Gs{constructor(e){super(e)}load(e,t,n,i){const s=this,a=new Qo,o=new id(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){i!==void 0?i(u):Ze(u);return}s._applyTexData(a,c),t&&t(a,c)},n,i),a}createDataTexture(e){const t=new Qo;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Pi,e.wrapT=t.wrapT!==void 0?t.wrapT:Pi,e.magFilter=t.magFilter!==void 0?t.magFilter:It,e.minFilter=t.minFilter!==void 0?t.minFilter:It,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=sr),t.mipmapCount===1&&(e.minFilter=It),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}}class Oy extends Gs{constructor(e){super(e)}load(e,t,n,i){const s=new on,a=new Uy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class Oc extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class By extends Oc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Lu=new ot,Gp=new X,Wp=new X;class rd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=di,this.map=null,this.mapPass=null,this.matrix=new ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new td,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gp),Wp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Wp),t.updateMatrixWorld(),Lu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lu,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Zo||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Gl=new X,Wl=new Ur,$i=new X;class sd extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ot,this.projectionMatrix=new ot,this.projectionMatrixInverse=new ot,this.coordinateSystem=ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gl,Wl,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,$i.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Gl,Wl,$i),$i.x===1&&$i.y===1&&$i.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gl,Wl,$i.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const qr=new X,Xp=new at,qp=new at;class Gn extends sd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Va*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Va*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){qr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(qr.x,qr.y).multiplyScalar(-e/qr.z),qr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qr.x,qr.y).multiplyScalar(-e/qr.z)}getViewSize(e,t){return this.getViewBounds(e,Xp,qp),t.subVectors(qp,Xp)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ky extends rd{constructor(){super(new Gn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Va*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||i!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=i,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class zy extends Oc{constructor(e,t,n=0,i=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new ky}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class Vy extends rd{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class sf extends Oc{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Vy}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Bc extends sd{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Hy extends rd{constructor(){super(new Bc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tg extends Oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new Hy}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Uo{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const Du=new WeakMap;class Gy extends Gs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ve("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ve("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Ar.get(`image-bitmap:${e}`);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{Du.has(a)===!0?(i&&i(Du.get(a)),s.manager.itemError(e),s.manager.itemEnd(e)):(t&&t(c),s.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);return}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Ar.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){i&&i(c),Du.set(l,c),Ar.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Ar.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const da=-90,pa=1;class Wy extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Gn(da,pa,e,t);i.layers=this.layers,this.add(i);const s=new Gn(da,pa,e,t);s.layers=this.layers,this.add(s);const a=new Gn(da,pa,e,t);a.layers=this.layers,this.add(a);const o=new Gn(da,pa,e,t);o.layers=this.layers,this.add(o);const l=new Gn(da,pa,e,t);l.layers=this.layers,this.add(l);const c=new Gn(da,pa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===ar)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Xy extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const ad="\\[\\]\\.:\\/",qy=new RegExp("["+ad+"]","g"),od="[^"+ad+"]",Yy="[^"+ad.replace("\\.","")+"]",Ky=/((?:WC+[\/:])*)/.source.replace("WC",od),$y=/(WCOD+)?/.source.replace("WCOD",Yy),Zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",od),Jy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",od),Qy=new RegExp("^"+Ky+$y+Zy+Jy+"$"),jy=["material","materials","bones","map"];class eS{constructor(e,t,n){const i=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Et{constructor(e,t,n){this.path=t,this.parsedPath=n||Et.parseTrackName(t),this.node=Et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Et.Composite(e,t,n):new Et(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(qy,"")}static parseTrackName(e){const t=Qy.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const s=n.nodeName.substring(i+1);jy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let s=t.propertyIndex;if(e||(e=Et.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ve("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Et.Composite=eS;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Yp=new ot;class tS{constructor(e,t,n=0,i=1/0){this.ray=new il(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new Qf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Yp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yp),this}intersectObject(e,t=!0,n=[]){return af(e,this,n,t),n.sort(Kp),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)af(e[i],this,n,t);return n.sort(Kp),n}}function Kp(r,e){return r.distance-e.distance}function af(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)af(s[a],e,t,!0)}}const fd=class fd{constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}};fd.prototype.isMatrix2=!0;let $p=fd;class nS extends xg{constructor(e=10,t=10,n=4473924,i=8947848){n=new Je(n),i=new Je(i);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let h=0,d=0,p=-o;h<=t;h++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const g=h===s?n:i;g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3,g.toArray(c,d),d+=3}const u=new ni;u.setAttribute("position",new gi(l,3)),u.setAttribute("color",new gi(c,3));const f=new Uc({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Zp(r,e,t,n){const i=iS(n);switch(t){case cg:return r*e;case Wf:return r*e/i.components*i.byteLength;case Xf:return r*e/i.components*i.byteLength;case ks:return r*e*2/i.components*i.byteLength;case qf:return r*e*2/i.components*i.byteLength;case ug:return r*e*3/i.components*i.byteLength;case Li:return r*e*4/i.components*i.byteLength;case Yf:return r*e*4/i.components*i.byteLength;case rc:case sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ac:case oc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Th:case wh:return Math.max(r,16)*Math.max(e,8)/4;case bh:case Eh:return Math.max(r,8)*Math.max(e,8)/2;case Ah:case Rh:case Ph:case Lh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ch:case Mc:case Dh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Uh:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Bh:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case kh:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vh:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xh:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qh:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Yh:case Kh:case $h:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Zh:case Jh:return Math.ceil(r/4)*Math.ceil(e/4)*8;case bc:case Qh:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function iS(r){switch(r){case di:case sg:return{byteLength:1,components:1};case qo:case ag:case Ii:return{byteLength:2,components:1};case Hf:case Gf:return{byteLength:2,components:4};case hr:case Vf:case Kn:return{byteLength:4,components:1};case og:case lg:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kf}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Eg(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function rS(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,h=r.createBuffer();r.bindBuffer(l,h),r.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((d,p)=>d.start-p.start);let h=0;for(let d=1;d<f.length;d++){const p=f[h],g=f[d];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++h,f[h]=g)}f.length=h+1;for(let d=0,p=f.length;d<p;d++){const g=f[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var sS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,aS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,pS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_S=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,SS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,MS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,TS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ES=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,wS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,AS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,RS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,CS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,PS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,LS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,DS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,NS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,US="gl_FragColor = linearToOutputTexel( gl_FragColor );",FS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,BS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,kS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,VS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,HS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,GS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,WS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,YS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$S=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,JS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,QS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,eM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,iM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,sM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,aM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,lM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,vM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,SM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,TM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,EM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,RM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,CM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,NM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,UM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,FM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,OM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,BM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,VM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,HM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,XM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,YM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,KM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ZM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,JM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,jM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ab=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ob=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ub=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,db=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bb=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Eb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ab=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rb=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Db=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ub=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ob=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:sS,alphahash_pars_fragment:aS,alphamap_fragment:oS,alphamap_pars_fragment:lS,alphatest_fragment:cS,alphatest_pars_fragment:uS,aomap_fragment:hS,aomap_pars_fragment:fS,batching_pars_vertex:dS,batching_vertex:pS,begin_vertex:mS,beginnormal_vertex:_S,bsdfs:gS,iridescence_fragment:xS,bumpmap_pars_fragment:vS,clipping_planes_fragment:yS,clipping_planes_pars_fragment:SS,clipping_planes_pars_vertex:MS,clipping_planes_vertex:bS,color_fragment:TS,color_pars_fragment:ES,color_pars_vertex:wS,color_vertex:AS,common:RS,cube_uv_reflection_fragment:CS,defaultnormal_vertex:PS,displacementmap_pars_vertex:LS,displacementmap_vertex:DS,emissivemap_fragment:IS,emissivemap_pars_fragment:NS,colorspace_fragment:US,colorspace_pars_fragment:FS,envmap_fragment:OS,envmap_common_pars_fragment:BS,envmap_pars_fragment:kS,envmap_pars_vertex:zS,envmap_physical_pars_fragment:JS,envmap_vertex:VS,fog_vertex:HS,fog_pars_vertex:GS,fog_fragment:WS,fog_pars_fragment:XS,gradientmap_pars_fragment:qS,lightmap_pars_fragment:YS,lights_lambert_fragment:KS,lights_lambert_pars_fragment:$S,lights_pars_begin:ZS,lights_toon_fragment:QS,lights_toon_pars_fragment:jS,lights_phong_fragment:eM,lights_phong_pars_fragment:tM,lights_physical_fragment:nM,lights_physical_pars_fragment:iM,lights_fragment_begin:rM,lights_fragment_maps:sM,lights_fragment_end:aM,lightprobes_pars_fragment:oM,logdepthbuf_fragment:lM,logdepthbuf_pars_fragment:cM,logdepthbuf_pars_vertex:uM,logdepthbuf_vertex:hM,map_fragment:fM,map_pars_fragment:dM,map_particle_fragment:pM,map_particle_pars_fragment:mM,metalnessmap_fragment:_M,metalnessmap_pars_fragment:gM,morphinstance_vertex:xM,morphcolor_vertex:vM,morphnormal_vertex:yM,morphtarget_pars_vertex:SM,morphtarget_vertex:MM,normal_fragment_begin:bM,normal_fragment_maps:TM,normal_pars_fragment:EM,normal_pars_vertex:wM,normal_vertex:AM,normalmap_pars_fragment:RM,clearcoat_normal_fragment_begin:CM,clearcoat_normal_fragment_maps:PM,clearcoat_pars_fragment:LM,iridescence_pars_fragment:DM,opaque_fragment:IM,packing:NM,premultiplied_alpha_fragment:UM,project_vertex:FM,dithering_fragment:OM,dithering_pars_fragment:BM,roughnessmap_fragment:kM,roughnessmap_pars_fragment:zM,shadowmap_pars_fragment:VM,shadowmap_pars_vertex:HM,shadowmap_vertex:GM,shadowmask_pars_fragment:WM,skinbase_vertex:XM,skinning_pars_vertex:qM,skinning_vertex:YM,skinnormal_vertex:KM,specularmap_fragment:$M,specularmap_pars_fragment:ZM,tonemapping_fragment:JM,tonemapping_pars_fragment:QM,transmission_fragment:jM,transmission_pars_fragment:eb,uv_pars_fragment:tb,uv_pars_vertex:nb,uv_vertex:ib,worldpos_vertex:rb,background_vert:sb,background_frag:ab,backgroundCube_vert:ob,backgroundCube_frag:lb,cube_vert:cb,cube_frag:ub,depth_vert:hb,depth_frag:fb,distance_vert:db,distance_frag:pb,equirect_vert:mb,equirect_frag:_b,linedashed_vert:gb,linedashed_frag:xb,meshbasic_vert:vb,meshbasic_frag:yb,meshlambert_vert:Sb,meshlambert_frag:Mb,meshmatcap_vert:bb,meshmatcap_frag:Tb,meshnormal_vert:Eb,meshnormal_frag:wb,meshphong_vert:Ab,meshphong_frag:Rb,meshphysical_vert:Cb,meshphysical_frag:Pb,meshtoon_vert:Lb,meshtoon_frag:Db,points_vert:Ib,points_frag:Nb,shadow_vert:Ub,shadow_frag:Fb,sprite_vert:Ob,sprite_frag:Bb},Ce={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},er={basic:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:kn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:kn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:kn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new Je(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:kn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:kn([Ce.points,Ce.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:kn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:kn([Ce.common,Ce.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:kn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:kn([Ce.sprite,Ce.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:kn([Ce.common,Ce.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:kn([Ce.lights,Ce.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};er.physical={uniforms:kn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Xl={r:0,b:0,g:0},kb=new ot,wg=new nt;wg.set(-1,0,0,0,1,0,0,0,1);function zb(r,e,t,n,i,s){const a=new Je(0);let o=i===!0?0:1,l,c,u=null,f=0,h=null;function d(T){let w=T.isScene===!0?T.background:null;if(w&&w.isTexture){const v=T.backgroundBlurriness>0;w=e.get(w,v)}return w}function p(T){let w=!1;const v=d(T);v===null?m(a,o):v&&v.isColor&&(m(v,1),w=!0);const E=r.xr.getEnvironmentBlendMode();E==="additive"?t.buffers.color.setClear(0,0,0,1,s):E==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(T,w){const v=d(w);v&&(v.isCubeTexture||v.mapping===Nc)?(c===void 0&&(c=new bn(new Wa(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:Ga(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=v,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(kb.makeRotationFromEuler(w.backgroundRotation)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(wg),c.material.toneMapped=_t.getTransfer(v.colorSpace)!==bt,(u!==v||f!==v.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,h=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new bn(new zs(2,2),new Wi({name:"BackgroundMaterial",uniforms:Ga(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:Ir,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=_t.getTransfer(v.colorSpace)!==bt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,h=r.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function m(T,w){T.getRGB(Xl,Mg(r)),t.buffers.color.setClear(Xl.r,Xl.g,Xl.b,w,s)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,w=1){a.set(T),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,m(a,o)},render:p,addToRenderList:g,dispose:_}}function Vb(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(P,D,V,z,U){let k=!1;const I=f(P,z,V,D);s!==I&&(s=I,c(s.object)),k=d(P,z,V,U),k&&p(P,z,V,U),U!==null&&e.update(U,r.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,v(P,D,V,z),U!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return r.createVertexArray()}function c(P){return r.bindVertexArray(P)}function u(P){return r.deleteVertexArray(P)}function f(P,D,V,z){const U=z.wireframe===!0;let k=n[D.id];k===void 0&&(k={},n[D.id]=k);const I=P.isInstancedMesh===!0?P.id:0;let J=k[I];J===void 0&&(J={},k[I]=J);let ie=J[V.id];ie===void 0&&(ie={},J[V.id]=ie);let L=ie[U];return L===void 0&&(L=h(l()),ie[U]=L),L}function h(P){const D=[],V=[],z=[];for(let U=0;U<t;U++)D[U]=0,V[U]=0,z[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:z,object:P,attributes:{},index:null}}function d(P,D,V,z){const U=s.attributes,k=D.attributes;let I=0;const J=V.getAttributes();for(const ie in J)if(J[ie].location>=0){const he=U[ie];let _e=k[ie];if(_e===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(_e=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(_e=P.instanceColor)),he===void 0||he.attribute!==_e||_e&&he.data!==_e.data)return!0;I++}return s.attributesNum!==I||s.index!==z}function p(P,D,V,z){const U={},k=D.attributes;let I=0;const J=V.getAttributes();for(const ie in J)if(J[ie].location>=0){let he=k[ie];he===void 0&&(ie==="instanceMatrix"&&P.instanceMatrix&&(he=P.instanceMatrix),ie==="instanceColor"&&P.instanceColor&&(he=P.instanceColor));const _e={};_e.attribute=he,he&&he.data&&(_e.data=he.data),U[ie]=_e,I++}s.attributes=U,s.attributesNum=I,s.index=z}function g(){const P=s.newAttributes;for(let D=0,V=P.length;D<V;D++)P[D]=0}function m(P){_(P,0)}function _(P,D){const V=s.newAttributes,z=s.enabledAttributes,U=s.attributeDivisors;V[P]=1,z[P]===0&&(r.enableVertexAttribArray(P),z[P]=1),U[P]!==D&&(r.vertexAttribDivisor(P,D),U[P]=D)}function T(){const P=s.newAttributes,D=s.enabledAttributes;for(let V=0,z=D.length;V<z;V++)D[V]!==P[V]&&(r.disableVertexAttribArray(V),D[V]=0)}function w(P,D,V,z,U,k,I){I===!0?r.vertexAttribIPointer(P,D,V,U,k):r.vertexAttribPointer(P,D,V,z,U,k)}function v(P,D,V,z){g();const U=z.attributes,k=V.getAttributes(),I=D.defaultAttributeValues;for(const J in k){const ie=k[J];if(ie.location>=0){let L=U[J];if(L===void 0&&(J==="instanceMatrix"&&P.instanceMatrix&&(L=P.instanceMatrix),J==="instanceColor"&&P.instanceColor&&(L=P.instanceColor)),L!==void 0){const he=L.normalized,_e=L.itemSize,ze=e.get(L);if(ze===void 0)continue;const Xe=ze.buffer,He=ze.type,j=ze.bytesPerElement,fe=He===r.INT||He===r.UNSIGNED_INT||L.gpuType===Vf;if(L.isInterleavedBufferAttribute){const oe=L.data,O=oe.stride,ae=L.offset;if(oe.isInstancedInterleavedBuffer){for(let te=0;te<ie.locationSize;te++)_(ie.location+te,oe.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let te=0;te<ie.locationSize;te++)m(ie.location+te);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let te=0;te<ie.locationSize;te++)w(ie.location+te,_e/ie.locationSize,He,he,O*j,(ae+_e/ie.locationSize*te)*j,fe)}else{if(L.isInstancedBufferAttribute){for(let oe=0;oe<ie.locationSize;oe++)_(ie.location+oe,L.meshPerAttribute);P.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=L.meshPerAttribute*L.count)}else for(let oe=0;oe<ie.locationSize;oe++)m(ie.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let oe=0;oe<ie.locationSize;oe++)w(ie.location+oe,_e/ie.locationSize,He,he,_e*j,_e/ie.locationSize*oe*j,fe)}}else if(I!==void 0){const he=I[J];if(he!==void 0)switch(he.length){case 2:r.vertexAttrib2fv(ie.location,he);break;case 3:r.vertexAttrib3fv(ie.location,he);break;case 4:r.vertexAttrib4fv(ie.location,he);break;default:r.vertexAttrib1fv(ie.location,he)}}}}T()}function E(){b();for(const P in n){const D=n[P];for(const V in D){const z=D[V];for(const U in z){const k=z[U];for(const I in k)u(k[I].object),delete k[I];delete z[U]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;const D=n[P.id];for(const V in D){const z=D[V];for(const U in z){const k=z[U];for(const I in k)u(k[I].object),delete k[I];delete z[U]}}delete n[P.id]}function M(P){for(const D in n){const V=n[D];for(const z in V){const U=V[z];if(U[P.id]===void 0)continue;const k=U[P.id];for(const I in k)u(k[I].object),delete k[I];delete U[P.id]}}}function x(P){for(const D in n){const V=n[D],z=P.isInstancedMesh===!0?P.id:0,U=V[z];if(U!==void 0){for(const k in U){const I=U[k];for(const J in I)u(I[J].object),delete I[J];delete U[k]}delete V[z],Object.keys(V).length===0&&delete n[D]}}}function b(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:R,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:M,initAttributes:g,enableAttribute:m,disableUnusedAttributes:T}}function Hb(r,e,t){let n;function i(l){n=l}function s(l,c){r.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(r.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Gb(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(M){return!(M!==Li&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(M){const x=M===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==di&&n.convert(M)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==Kn&&!x)}function l(M){if(M==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),E=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:v,maxSamples:E,samples:S}}function Wb(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new $r,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const p=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,_=r.get(f);if(!i||p===null||p.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,w=T*4;let v=_.clippingState||null;l.value=v,v=u(p,h,w,d);for(let E=0;E!==w;++E)v[E]=t[E];_.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,p){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,p!==!0||m===null){const _=d+g*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<_)&&(m=new Float32Array(_));for(let w=0,v=d;w!==g;++w,v+=4)a.copy(f[w]).applyMatrix4(T,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}const ns=4,Jp=[.125,.215,.35,.446,.526,.582],Ts=20,Xb=256,ao=new Bc,Qp=new Je;let Iu=null,Nu=0,Uu=0,Fu=!1;const qb=new X;class of{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=qb}=s;Iu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Iu,Nu,Uu),this._renderer.xr.enabled=Fu,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===ka?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Iu=this._renderer.getRenderTarget(),Nu=this._renderer.getActiveCubeFace(),Uu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:It,minFilter:It,generateMipmaps:!1,type:Ii,format:Li,colorSpace:ti,depthBuffer:!1},i=jp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Yb(s)),this._blurMaterial=$b(s,e,t),this._ggxMaterial=Kb(s,e,t)}return i}_compileMaterial(e){const t=new bn(new ni,e);this._renderer.compile(t,ao)}_sceneToCubeUV(e,t,n,i,s){const l=new Gn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Qp),f.toneMapping=lr,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bn(new Wa,new wr({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1})));const g=this._backgroundBox,m=g.material;let _=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,_=!0):(m.color.copy(Qp),_=!0);for(let w=0;w<6;w++){const v=w%3;v===0?(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[w],s.y,s.z)):v===1?(l.up.set(0,0,c[w]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[w],s.z)):(l.up.set(0,c[w],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[w]));const E=this._cubeSize;ma(i,v*E,w>2?E:0,E,E),f.setRenderTarget(i),_&&f.render(g,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Bs||e.mapping===ka;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=em());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ma(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,ao)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=0+c*1.25,d=f*h,{_lodMax:p}=this,g=this._sizeLods[n],m=3*g*(n>p-ns?n-p+ns:0),_=4*(this._cubeSize-g);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=p-t,ma(s,m,_,3*g,2*g),i.setRenderTarget(s),i.render(o,ao),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=p-n,ma(e,m,_,3*g,2*g),i.setRenderTarget(e),i.render(o,ao)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ze("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const h=c.uniforms,d=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ts-1),g=s/p,m=isFinite(s)?1+Math.floor(u*g):Ts;m>Ts&&Ve(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ts}`);const _=[];let T=0;for(let M=0;M<Ts;++M){const x=M/g,b=Math.exp(-x*x/2);_.push(b),M===0?T+=b:M<m&&(T+=2*b)}for(let M=0;M<_.length;M++)_[M]=_[M]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:w}=this;h.dTheta.value=p,h.mipInt.value=w-n;const v=this._sizeLods[i],E=3*v*(i>w-ns?i-w+ns:0),S=4*(this._cubeSize-v);ma(t,E,S,3*v,2*v),l.setRenderTarget(t),l.render(f,ao)}}function Yb(r){const e=[],t=[],n=[];let i=r;const s=r-ns+1+Jp.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-ns?l=Jp[a-r+ns-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,p=6,g=3,m=2,_=1,T=new Float32Array(g*p*d),w=new Float32Array(m*p*d),v=new Float32Array(_*p*d);for(let S=0;S<d;S++){const M=S%3*2/3-1,x=S>2?0:-1,b=[M,x,0,M+2/3,x,0,M+2/3,x+1,0,M,x,0,M+2/3,x+1,0,M,x+1,0];T.set(b,g*p*S),w.set(h,m*p*S);const R=[S,S,S,S,S,S];v.set(R,_*p*S)}const E=new ni;E.setAttribute("position",new Xn(T,g)),E.setAttribute("uv",new Xn(w,m)),E.setAttribute("faceIndex",new Xn(v,_)),n.push(new bn(E,null)),i>ns&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function jp(r,e,t){const n=new cr(r,e,t);return n.texture.mapping=Nc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Kb(r,e,t){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Xb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function $b(r,e,t){const n=new Float32Array(Ts),i=new X(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:Ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function em(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function tm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cr,depthTest:!1,depthWrite:!1})}function kc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Ag extends cr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yg(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Wa(5,5,5),s=new Wi({name:"CubemapFromEquirect",uniforms:Ga(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:jn,blending:Cr});s.uniforms.tEquirect.value=t;const a=new bn(i,s),o=t.minFilter;return t.minFilter===sr&&(t.minFilter=It),new Wy(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function Zb(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,d=!1){return h==null?null:d?a(h):s(h)}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===iu||d===ru)if(e.has(h)){const p=e.get(h).texture;return o(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new Ag(p.height);return g.fromEquirectangularTexture(r,h),e.set(h,g),h.addEventListener("dispose",c),o(g.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const d=h.mapping,p=d===iu||d===ru,g=d===Bs||d===ka;if(p||g){let m=t.get(h);const _=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==_)return n===null&&(n=new of(r)),m=p?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const T=h.image;return p&&T&&T.height>0||g&&T&&l(T)?(n===null&&(n=new of(r)),m=p?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===iu?h.mapping=Bs:d===ru&&(h.mapping=ka),h}function l(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function c(h){const d=h.target;d.removeEventListener("dispose",c);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(h){const d=h.target;d.removeEventListener("dispose",u);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:f}}function Jb(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ca("WebGLRenderer: "+n+" extension not supported."),i}}}function Qb(r,e,t,n){const i={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const p in h.attributes)e.remove(h.attributes[p]);h.removeEventListener("dispose",a),delete i[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const d in h)e.update(h[d],r.ARRAY_BUFFER)}function c(f){const h=[],d=f.index,p=f.attributes.position;let g=0;if(p===void 0)return;if(d!==null){const T=d.array;g=d.version;for(let w=0,v=T.length;w<v;w+=3){const E=T[w+0],S=T[w+1],M=T[w+2];h.push(E,S,S,M,M,E)}}else{const T=p.array;g=p.version;for(let w=0,v=T.length/3-1;w<v;w+=3){const E=w+0,S=w+1,M=w+2;h.push(E,S,S,M,M,E)}}const m=new(p.count>=65535?_g:mg)(h,1);m.version=g;const _=s.get(f);_&&e.remove(_),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function jb(r,e,t){let n;function i(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,h){r.drawElements(n,h,s,f*a),t.update(h,n,1)}function c(f,h,d){d!==0&&(r.drawElementsInstanced(n,h,s,f*a,d),t.update(h,n,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,f,0,d);let g=0;for(let m=0;m<d;m++)g+=h[m];t.update(g,n,1)}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function eT(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function tT(r,e,t){const n=new WeakMap,i=new At;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let R=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var d=R;h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,_=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let v=0;p===!0&&(v=1),g===!0&&(v=2),m===!0&&(v=3);let E=o.attributes.position.count*v,S=1;E>e.maxTextureSize&&(S=Math.ceil(E/e.maxTextureSize),E=e.maxTextureSize);const M=new Float32Array(E*S*4*f),x=new dg(M,E,S,f);x.type=Kn,x.needsUpdate=!0;const b=v*4;for(let P=0;P<f;P++){const D=_[P],V=T[P],z=w[P],U=E*S*4*P;for(let k=0;k<D.count;k++){const I=k*b;p===!0&&(i.fromBufferAttribute(D,k),M[U+I+0]=i.x,M[U+I+1]=i.y,M[U+I+2]=i.z,M[U+I+3]=0),g===!0&&(i.fromBufferAttribute(V,k),M[U+I+4]=i.x,M[U+I+5]=i.y,M[U+I+6]=i.z,M[U+I+7]=0),m===!0&&(i.fromBufferAttribute(z,k),M[U+I+8]=i.x,M[U+I+9]=i.y,M[U+I+10]=i.z,M[U+I+11]=z.itemSize===4?i.w:1)}}h={count:f,texture:x,size:new at(E,S)},n.set(o,h),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function nT(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(s.get(h)!==u&&(e.update(h),s.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return h}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const iT={[J_]:"LINEAR_TONE_MAPPING",[Q_]:"REINHARD_TONE_MAPPING",[j_]:"CINEON_TONE_MAPPING",[zf]:"ACES_FILMIC_TONE_MAPPING",[tg]:"AGX_TONE_MAPPING",[ng]:"NEUTRAL_TONE_MAPPING",[eg]:"CUSTOM_TONE_MAPPING"};function rT(r,e,t,n,i,s){const a=new cr(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,depthTexture:i?new Ha(e,t):void 0}),o=new cr(e,t,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),l=new ni;l.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new gi([0,2,0,0,2,0],2));const c=new vy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new bn(l,c),f=new Bc(-1,1,1,-1,0,1);let h=null,d=null,p=!1,g,m=null,_=[],T=!1;this.setSize=function(w,v){a.setSize(w,v),o.setSize(w,v);for(let E=0;E<_.length;E++){const S=_[E];S.setSize&&S.setSize(w,v)}},this.setEffects=function(w){_=w,T=_.length>0&&_[0].isRenderPass===!0;const v=a.width,E=a.height;for(let S=0;S<_.length;S++){const M=_[S];M.setSize&&M.setSize(v,E)}},this.begin=function(w,v){if(p||w.toneMapping===lr&&_.length===0)return!1;if(m=v,v!==null){const E=v.width,S=v.height;(a.width!==E||a.height!==S)&&this.setSize(E,S)}return T===!1&&w.setRenderTarget(a),g=w.toneMapping,w.toneMapping=lr,!0},this.hasRenderPass=function(){return T},this.end=function(w,v){w.toneMapping=g,p=!0;let E=a,S=o;for(let M=0;M<_.length;M++){const x=_[M];if(x.enabled!==!1&&(x.render(w,S,E,v),x.needsSwap!==!1)){const b=E;E=S,S=b}}if(h!==w.outputColorSpace||d!==w.toneMapping){h=w.outputColorSpace,d=w.toneMapping,c.defines={},_t.getTransfer(h)===bt&&(c.defines.SRGB_TRANSFER="");const M=iT[d];M&&(c.defines[M]=""),c.needsUpdate=!0}c.uniforms.tDiffuse.value=E.texture,w.setRenderTarget(m),w.render(u,f),m=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.depthTexture&&a.depthTexture.dispose(),a.dispose(),o.dispose(),l.dispose(),c.dispose()}}const Rg=new on,lf=new Ha(1,1),Cg=new dg,Pg=new kv,Lg=new yg,nm=[],im=[],rm=new Float32Array(16),sm=new Float32Array(9),am=new Float32Array(4);function Ka(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=nm[i];if(s===void 0&&(s=new Float32Array(i),nm[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function fn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function dn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function zc(r,e){let t=im[e];t===void 0&&(t=new Int32Array(e),im[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function sT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function aT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2fv(this.addr,e),dn(t,e)}}function oT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;r.uniform3fv(this.addr,e),dn(t,e)}}function lT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4fv(this.addr,e),dn(t,e)}}function cT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;am.set(n),r.uniformMatrix2fv(this.addr,!1,am),dn(t,n)}}function uT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;sm.set(n),r.uniformMatrix3fv(this.addr,!1,sm),dn(t,n)}}function hT(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;rm.set(n),r.uniformMatrix4fv(this.addr,!1,rm),dn(t,n)}}function fT(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function dT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2iv(this.addr,e),dn(t,e)}}function pT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3iv(this.addr,e),dn(t,e)}}function mT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4iv(this.addr,e),dn(t,e)}}function _T(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function gT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;r.uniform2uiv(this.addr,e),dn(t,e)}}function xT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;r.uniform3uiv(this.addr,e),dn(t,e)}}function vT(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;r.uniform4uiv(this.addr,e),dn(t,e)}}function yT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(lf.compareFunction=t.isReversedDepthBuffer()?$f:Kf,s=lf):s=Rg,t.setTexture2D(e||s,i)}function ST(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Pg,i)}function MT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Lg,i)}function bT(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Cg,i)}function TT(r){switch(r){case 5126:return sT;case 35664:return aT;case 35665:return oT;case 35666:return lT;case 35674:return cT;case 35675:return uT;case 35676:return hT;case 5124:case 35670:return fT;case 35667:case 35671:return dT;case 35668:case 35672:return pT;case 35669:case 35673:return mT;case 5125:return _T;case 36294:return gT;case 36295:return xT;case 36296:return vT;case 35678:case 36198:case 36298:case 36306:case 35682:return yT;case 35679:case 36299:case 36307:return ST;case 35680:case 36300:case 36308:case 36293:return MT;case 36289:case 36303:case 36311:case 36292:return bT}}function ET(r,e){r.uniform1fv(this.addr,e)}function wT(r,e){const t=Ka(e,this.size,2);r.uniform2fv(this.addr,t)}function AT(r,e){const t=Ka(e,this.size,3);r.uniform3fv(this.addr,t)}function RT(r,e){const t=Ka(e,this.size,4);r.uniform4fv(this.addr,t)}function CT(r,e){const t=Ka(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function PT(r,e){const t=Ka(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function LT(r,e){const t=Ka(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function DT(r,e){r.uniform1iv(this.addr,e)}function IT(r,e){r.uniform2iv(this.addr,e)}function NT(r,e){r.uniform3iv(this.addr,e)}function UT(r,e){r.uniform4iv(this.addr,e)}function FT(r,e){r.uniform1uiv(this.addr,e)}function OT(r,e){r.uniform2uiv(this.addr,e)}function BT(r,e){r.uniform3uiv(this.addr,e)}function kT(r,e){r.uniform4uiv(this.addr,e)}function zT(r,e,t){const n=this.cache,i=e.length,s=zc(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=lf:a=Rg;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function VT(r,e,t){const n=this.cache,i=e.length,s=zc(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Pg,s[a])}function HT(r,e,t){const n=this.cache,i=e.length,s=zc(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Lg,s[a])}function GT(r,e,t){const n=this.cache,i=e.length,s=zc(t,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Cg,s[a])}function WT(r){switch(r){case 5126:return ET;case 35664:return wT;case 35665:return AT;case 35666:return RT;case 35674:return CT;case 35675:return PT;case 35676:return LT;case 5124:case 35670:return DT;case 35667:case 35671:return IT;case 35668:case 35672:return NT;case 35669:case 35673:return UT;case 5125:return FT;case 36294:return OT;case 36295:return BT;case 36296:return kT;case 35678:case 36198:case 36298:case 36306:case 35682:return zT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return HT;case 36289:case 36303:case 36311:case 36292:return GT}}class XT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=TT(t.type)}}class qT{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=WT(t.type)}}class YT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Ou=/(\w+)(\])?(\[|\.)?/g;function om(r,e){r.seq.push(e),r.map[e.id]=e}function KT(r,e,t){const n=r.name,i=n.length;for(Ou.lastIndex=0;;){const s=Ou.exec(n),a=Ou.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){om(t,c===void 0?new XT(o,r,e):new qT(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new YT(o),om(t,f)),t=f}}}class lc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);KT(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function lm(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const $T=37297;let ZT=0;function JT(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const cm=new nt;function QT(r){_t._getMatrix(cm,_t.workingColorSpace,r);const e=`mat3( ${cm.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(r)){case Tc:return[e,"LinearTransferOETF"];case bt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function um(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+JT(r.getShaderSource(e),o)}else return s}function jT(r,e){const t=QT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const eE={[J_]:"Linear",[Q_]:"Reinhard",[j_]:"Cineon",[zf]:"ACESFilmic",[tg]:"AgX",[ng]:"Neutral",[eg]:"Custom"};function tE(r,e){const t=eE[e];return t===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ql=new X;function nE(){_t.getLuminanceCoefficients(ql);const r=ql.x.toFixed(4),e=ql.y.toFixed(4),t=ql.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iE(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function rE(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sE(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function yo(r){return r!==""}function hm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aE=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(r){return r.replace(aE,lE)}const oE=new Map;function lE(r,e){let t=lt[e];if(t===void 0){const n=oE.get(e);if(n!==void 0)t=lt[n],Ve('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return cf(t)}const cE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dm(r){return r.replace(cE,uE)}function uE(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function pm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const hE={[nc]:"SHADOWMAP_TYPE_PCF",[xo]:"SHADOWMAP_TYPE_VSM"};function fE(r){return hE[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dE={[Bs]:"ENVMAP_TYPE_CUBE",[ka]:"ENVMAP_TYPE_CUBE",[Nc]:"ENVMAP_TYPE_CUBE_UV"};function pE(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":dE[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const mE={[ka]:"ENVMAP_MODE_REFRACTION"};function _E(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":mE[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const gE={[Z_]:"ENVMAP_BLENDING_MULTIPLY",[ev]:"ENVMAP_BLENDING_MIX",[tv]:"ENVMAP_BLENDING_ADD"};function xE(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":gE[r.combine]||"ENVMAP_BLENDING_NONE"}function vE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function yE(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=fE(t),c=pE(t),u=_E(t),f=xE(t),h=vE(t),d=iE(t),p=rE(s),g=i.createProgram();let m,_,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(yo).join(`
`),m.length>0&&(m+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(yo).join(`
`),_.length>0&&(_+=`
`)):(m=[pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),_=[pm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?lt.tonemapping_pars_fragment:"",t.toneMapping!==lr?tE("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,jT("linearToOutputTexel",t.outputColorSpace),nE(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yo).join(`
`)),a=cf(a),a=hm(a,t),a=fm(a,t),o=cf(o),o=hm(o,t),o=fm(o,t),a=dm(a),o=dm(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===cp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=T+m+a,v=T+_+o,E=lm(i,i.VERTEX_SHADER,w),S=lm(i,i.FRAGMENT_SHADER,v);i.attachShader(g,E),i.attachShader(g,S),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function M(P){if(r.debug.checkShaderErrors){const D=i.getProgramInfoLog(g)||"",V=i.getShaderInfoLog(E)||"",z=i.getShaderInfoLog(S)||"",U=D.trim(),k=V.trim(),I=z.trim();let J=!0,ie=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,E,S);else{const L=um(i,E,"vertex"),he=um(i,S,"fragment");Ze("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+L+`
`+he)}else U!==""?Ve("WebGLProgram: Program Info Log:",U):(k===""||I==="")&&(ie=!1);ie&&(P.diagnostics={runnable:J,programLog:U,vertexShader:{log:k,prefix:m},fragmentShader:{log:I,prefix:_}})}i.deleteShader(E),i.deleteShader(S),x=new lc(i,g),b=sE(i,g)}let x;this.getUniforms=function(){return x===void 0&&M(this),x};let b;this.getAttributes=function(){return b===void 0&&M(this),b};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(g,$T)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ZT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=E,this.fragmentShader=S,this}let SE=0;class ME{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new bE(e),t.set(e,n)),n}}class bE{constructor(e){this.id=SE++,this.code=e,this.usedTimes=0}}function TE(r){return r===ks||r===Mc||r===bc}function EE(r,e,t,n,i,s){const a=new Qf,o=new ME,l=new Set,c=[],u=new Map,f=n.logarithmicDepthBuffer;let h=n.precision;const d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,b,R,P,D,V){const z=P.fog,U=D.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,I=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||k,I),ie=J&&J.mapping===Nc?J.image.height:null,L=d[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const he=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,_e=he!==void 0?he.length:0;let ze=0;U.morphAttributes.position!==void 0&&(ze=1),U.morphAttributes.normal!==void 0&&(ze=2),U.morphAttributes.color!==void 0&&(ze=3);let Xe,He,j,fe;if(L){const ue=er[L];Xe=ue.vertexShader,He=ue.fragmentShader}else{Xe=x.vertexShader,He=x.fragmentShader;const ue=o.getVertexShaderStage(x),Ke=o.getFragmentShaderStage(x);o.update(x,ue,Ke),j=ue.id,fe=Ke.id}const oe=r.getRenderTarget(),O=r.state.buffers.depth.getReversed(),ae=D.isInstancedMesh===!0,te=D.isBatchedMesh===!0,Le=!!x.map,pe=!!x.matcap,H=!!J,K=!!x.aoMap,q=!!x.lightMap,N=!!x.bumpMap&&x.wireframe===!1,le=!!x.normalMap,Ae=!!x.displacementMap,Ie=!!x.emissiveMap,De=!!x.metalnessMap,tt=!!x.roughnessMap,B=x.anisotropy>0,Ft=x.clearcoat>0,Qe=x.dispersion>0,C=x.iridescence>0,y=x.sheen>0,W=x.transmission>0,$=B&&!!x.anisotropyMap,ee=Ft&&!!x.clearcoatMap,ve=Ft&&!!x.clearcoatNormalMap,ge=Ft&&!!x.clearcoatRoughnessMap,ne=C&&!!x.iridescenceMap,re=C&&!!x.iridescenceThicknessMap,Me=y&&!!x.sheenColorMap,Fe=y&&!!x.sheenRoughnessMap,be=!!x.specularMap,Se=!!x.specularColorMap,xe=!!x.specularIntensityMap,Ge=W&&!!x.transmissionMap,Ye=W&&!!x.thicknessMap,F=!!x.gradientMap,ye=!!x.alphaMap,se=x.alphaTest>0,Te=!!x.alphaHash,Ee=!!x.extensions;let ce=lr;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ce=r.toneMapping);const de={shaderID:L,shaderType:x.type,shaderName:x.name,vertexShader:Xe,fragmentShader:He,defines:x.defines,customVertexShaderID:j,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:te,batchingColor:te&&D._colorsTexture!==null,instancing:ae,instancingColor:ae&&D.instanceColor!==null,instancingMorph:ae&&D.morphTexture!==null,outputColorSpace:oe===null?r.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Le,matcap:pe,envMap:H,envMapMode:H&&J.mapping,envMapCubeUVHeight:ie,aoMap:K,lightMap:q,bumpMap:N,normalMap:le,displacementMap:Ae,emissiveMap:Ie,normalMapObjectSpace:le&&x.normalMapType===av,normalMapTangentSpace:le&&x.normalMapType===ef,packedNormalMap:le&&x.normalMapType===ef&&TE(x.normalMap.format),metalnessMap:De,roughnessMap:tt,anisotropy:B,anisotropyMap:$,clearcoat:Ft,clearcoatMap:ee,clearcoatNormalMap:ve,clearcoatRoughnessMap:ge,dispersion:Qe,iridescence:C,iridescenceMap:ne,iridescenceThicknessMap:re,sheen:y,sheenColorMap:Me,sheenRoughnessMap:Fe,specularMap:be,specularColorMap:Se,specularIntensityMap:xe,transmission:W,transmissionMap:Ge,thicknessMap:Ye,gradientMap:F,opaque:x.transparent===!1&&x.blending===Ra&&x.alphaToCoverage===!1,alphaMap:ye,alphaTest:se,alphaHash:Te,combine:x.combine,mapUv:Le&&p(x.map.channel),aoMapUv:K&&p(x.aoMap.channel),lightMapUv:q&&p(x.lightMap.channel),bumpMapUv:N&&p(x.bumpMap.channel),normalMapUv:le&&p(x.normalMap.channel),displacementMapUv:Ae&&p(x.displacementMap.channel),emissiveMapUv:Ie&&p(x.emissiveMap.channel),metalnessMapUv:De&&p(x.metalnessMap.channel),roughnessMapUv:tt&&p(x.roughnessMap.channel),anisotropyMapUv:$&&p(x.anisotropyMap.channel),clearcoatMapUv:ee&&p(x.clearcoatMap.channel),clearcoatNormalMapUv:ve&&p(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&p(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&p(x.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(x.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(x.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&p(x.sheenRoughnessMap.channel),specularMapUv:be&&p(x.specularMap.channel),specularColorMapUv:Se&&p(x.specularColorMap.channel),specularIntensityMapUv:xe&&p(x.specularIntensityMap.channel),transmissionMapUv:Ge&&p(x.transmissionMap.channel),thicknessMapUv:Ye&&p(x.thicknessMap.channel),alphaMapUv:ye&&p(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(le||B),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!U.attributes.uv&&(Le||ye),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&le===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:O,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ze,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ce,decodeVideoTexture:Le&&x.map.isVideoTexture===!0&&_t.getTransfer(x.map.colorSpace)===bt,decodeVideoTextureEmissive:Ie&&x.emissiveMap.isVideoTexture===!0&&_t.getTransfer(x.emissiveMap.colorSpace)===bt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===nr,flipSided:x.side===jn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ee&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ee&&x.extensions.multiDraw===!0||te)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return de.vertexUv1s=l.has(1),de.vertexUv2s=l.has(2),de.vertexUv3s=l.has(3),l.clear(),de}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)b.push(R),b.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(_(b,x),T(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function _(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function T(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){const b=d[x.type];let R;if(b){const P=er[b];R=_y.clone(P.uniforms)}else R=x.uniforms;return R}function v(x,b){let R=u.get(b);return R!==void 0?++R.usedTimes:(R=new yE(r,b,x,i),c.push(R),u.set(b,R)),R}function E(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function M(){o.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:w,acquireProgram:v,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:M}}function wE(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function AE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function mm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function _m(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,p,g,m,_){let T=r[e];return T===void 0?(T={id:h.id,object:h,geometry:d,material:p,materialVariant:a(h),groupOrder:g,renderOrder:h.renderOrder,z:m,group:_},r[e]=T):(T.id=h.id,T.object=h,T.geometry=d,T.material=p,T.materialVariant=a(h),T.groupOrder=g,T.renderOrder=h.renderOrder,T.z=m,T.group=_),e++,T}function l(h,d,p,g,m,_){const T=o(h,d,p,g,m,_);p.transmission>0?n.push(T):p.transparent===!0?i.push(T):t.push(T)}function c(h,d,p,g,m,_){const T=o(h,d,p,g,m,_);p.transmission>0?n.unshift(T):p.transparent===!0?i.unshift(T):t.unshift(T)}function u(h,d,p){t.length>1&&t.sort(h||AE),n.length>1&&n.sort(d||mm),i.length>1&&i.sort(d||mm),p&&(t.reverse(),n.reverse(),i.reverse())}function f(){for(let h=e,d=r.length;h<d;h++){const p=r[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:f,sort:u}}function RE(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new _m,r.set(n,[a])):i>=s.length?(a=new _m,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function CE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new Je};break;case"SpotLight":t={position:new X,direction:new X,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function PE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let LE=0;function DE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function IE(r){const e=new CE,t=PE(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new ot,a=new ot;function o(c){let u=0,f=0,h=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,p=0,g=0,m=0,_=0,T=0,w=0,v=0,E=0,S=0,M=0;c.sort(DE);for(let b=0,R=c.length;b<R;b++){const P=c[b],D=P.color,V=P.intensity,z=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===ks?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=D.r*V,f+=D.g*V,h+=D.b*V;else if(P.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(P.sh.coefficients[k],V);M++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const I=P.shadow,J=t.get(P);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,n.directionalShadow[d]=J,n.directionalShadowMap[d]=U,n.directionalShadowMatrix[d]=P.shadow.matrix,T++}n.directional[d]=k,d++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(D).multiplyScalar(V),k.distance=z,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,n.spot[g]=k;const I=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,I.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[g]=I.matrix,P.castShadow){const J=t.get(P);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,n.spotShadow[g]=J,n.spotShadowMap[g]=U,v++}g++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(D).multiplyScalar(V),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const I=P.shadow,J=t.get(P);J.shadowIntensity=I.intensity,J.shadowBias=I.bias,J.shadowNormalBias=I.normalBias,J.shadowRadius=I.radius,J.shadowMapSize=I.mapSize,J.shadowCameraNear=I.camera.near,J.shadowCameraFar=I.camera.far,n.pointShadow[p]=J,n.pointShadowMap[p]=U,n.pointShadowMatrix[p]=P.shadow.matrix,w++}n.point[p]=k,p++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(V),k.groundColor.copy(P.groundColor).multiplyScalar(V),n.hemi[_]=k,_++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=h;const x=n.hash;(x.directionalLength!==d||x.pointLength!==p||x.spotLength!==g||x.rectAreaLength!==m||x.hemiLength!==_||x.numDirectionalShadows!==T||x.numPointShadows!==w||x.numSpotShadows!==v||x.numSpotMaps!==E||x.numLightProbes!==M)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=m,n.point.length=p,n.hemi.length=_,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+E-S,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=M,x.directionalLength=d,x.pointLength=p,x.spotLength=g,x.rectAreaLength=m,x.hemiLength=_,x.numDirectionalShadows=T,x.numPointShadows=w,x.numSpotShadows=v,x.numSpotMaps=E,x.numLightProbes=M,n.version=LE++)}function l(c,u){let f=0,h=0,d=0,p=0,g=0;const m=u.matrixWorldInverse;for(let _=0,T=c.length;_<T;_++){const w=c[_];if(w.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(w.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),i.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(w.isRectAreaLight){const v=n.rectArea[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(w.isPointLight){const v=n.point[h];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),h++}else if(w.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function gm(r){const e=new IE(r),t=[],n=[],i=[];function s(h){f.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function l(h){i.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}const f={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function NE(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new gm(r),e.set(i,[o])):s>=a.length?(o=new gm(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const UE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,OE=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],BE=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],xm=new ot,oo=new X,Bu=new X;function kE(r,e,t){let n=new td;const i=new at,s=new at,a=new At,o=new yy,l=new Sy,c={},u=t.maxTextureSize,f={[Ir]:jn,[jn]:Ir,[nr]:nr},h=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:UE,fragmentShader:FE}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const p=new ni;p.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new bn(p,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let _=this.type;this.render=function(S,M,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===$_&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nc);const b=r.getRenderTarget(),R=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Cr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const V=_!==this.type;V&&M.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(U=>U.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,U=S.length;z<U;z++){const k=S[z],I=k.shadow;if(I===void 0){Ve("WebGLShadowMap:",k,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;i.copy(I.mapSize);const J=I.getFrameExtents();i.multiply(J),s.copy(I.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/J.x),i.x=s.x*J.x,I.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/J.y),i.y=s.y*J.y,I.mapSize.y=s.y));const ie=r.state.buffers.depth.getReversed();if(I.camera._reversedDepth=ie,I.map===null||V===!0){if(I.map!==null&&(I.map.depthTexture!==null&&(I.map.depthTexture.dispose(),I.map.depthTexture=null),I.map.dispose()),this.type===xo){if(k.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}I.map=new cr(i.x,i.y,{format:ks,type:Ii,minFilter:It,magFilter:It,generateMipmaps:!1}),I.map.texture.name=k.name+".shadowMap",I.map.depthTexture=new Ha(i.x,i.y,Kn),I.map.depthTexture.name=k.name+".shadowMapDepth",I.map.depthTexture.format=Nr,I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=hn,I.map.depthTexture.magFilter=hn}else k.isPointLight?(I.map=new Ag(i.x),I.map.depthTexture=new dy(i.x,hr)):(I.map=new cr(i.x,i.y),I.map.depthTexture=new Ha(i.x,i.y,hr)),I.map.depthTexture.name=k.name+".shadowMap",I.map.depthTexture.format=Nr,this.type===nc?(I.map.depthTexture.compareFunction=ie?$f:Kf,I.map.depthTexture.minFilter=It,I.map.depthTexture.magFilter=It):(I.map.depthTexture.compareFunction=null,I.map.depthTexture.minFilter=hn,I.map.depthTexture.magFilter=hn);I.camera.updateProjectionMatrix()}const L=I.map.isWebGLCubeRenderTarget?6:1;for(let he=0;he<L;he++){if(I.map.isWebGLCubeRenderTarget)r.setRenderTarget(I.map,he),r.clear();else{he===0&&(r.setRenderTarget(I.map),r.clear());const _e=I.getViewport(he);a.set(s.x*_e.x,s.y*_e.y,s.x*_e.z,s.y*_e.w),D.viewport(a)}if(k.isPointLight){const _e=I.camera,ze=I.matrix,Xe=k.distance||_e.far;Xe!==_e.far&&(_e.far=Xe,_e.updateProjectionMatrix()),oo.setFromMatrixPosition(k.matrixWorld),_e.position.copy(oo),Bu.copy(_e.position),Bu.add(OE[he]),_e.up.copy(BE[he]),_e.lookAt(Bu),_e.updateMatrixWorld(),ze.makeTranslation(-oo.x,-oo.y,-oo.z),xm.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),I._frustum.setFromProjectionMatrix(xm,_e.coordinateSystem,_e.reversedDepth)}else I.updateMatrices(k);n=I.getFrustum(),v(M,x,I.camera,k,this.type)}I.isPointLightShadow!==!0&&this.type===xo&&T(I,x),I.needsUpdate=!1}_=this.type,m.needsUpdate=!1,r.setRenderTarget(b,R,P)};function T(S,M){const x=e.update(g);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new cr(i.x,i.y,{format:ks,type:Ii})),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(M,null,x,h,g,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(M,null,x,d,g,null)}function w(S,M,x,b){let R=null;const P=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)R=P;else if(R=x.isPointLight===!0?l:o,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0||M.alphaToCoverage===!0){const D=R.uuid,V=M.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let U=z[V];U===void 0&&(U=R.clone(),z[V]=U,M.addEventListener("dispose",E)),R=U}if(R.visible=M.visible,R.wireframe=M.wireframe,b===xo?R.side=M.shadowSide!==null?M.shadowSide:M.side:R.side=M.shadowSide!==null?M.shadowSide:f[M.side],R.alphaMap=M.alphaMap,R.alphaTest=M.alphaToCoverage===!0?.5:M.alphaTest,R.map=M.map,R.clipShadows=M.clipShadows,R.clippingPlanes=M.clippingPlanes,R.clipIntersection=M.clipIntersection,R.displacementMap=M.displacementMap,R.displacementScale=M.displacementScale,R.displacementBias=M.displacementBias,R.wireframeLinewidth=M.wireframeLinewidth,R.linewidth=M.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const D=r.properties.get(R);D.light=x}return R}function v(S,M,x,b,R){if(S.visible===!1)return;if(S.layers.test(M.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===xo)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);const V=e.update(S),z=S.material;if(Array.isArray(z)){const U=V.groups;for(let k=0,I=U.length;k<I;k++){const J=U[k],ie=z[J.materialIndex];if(ie&&ie.visible){const L=w(S,ie,b,R);S.onBeforeShadow(r,S,M,x,V,L,J),r.renderBufferDirect(x,null,V,L,S,J),S.onAfterShadow(r,S,M,x,V,L,J)}}}else if(z.visible){const U=w(S,z,b,R);S.onBeforeShadow(r,S,M,x,V,U,null),r.renderBufferDirect(x,null,V,U,S,null),S.onAfterShadow(r,S,M,x,V,U,null)}}const D=S.children;for(let V=0,z=D.length;V<z;V++)v(D[V],M,x,b,R)}function E(S){S.target.removeEventListener("dispose",E);for(const x in c){const b=c[x],R=S.target.uuid;R in b&&(b[R].dispose(),delete b[R])}}}function zE(r,e){function t(){let F=!1;const ye=new At;let se=null;const Te=new At(0,0,0,0);return{setMask:function(Ee){se!==Ee&&!F&&(r.colorMask(Ee,Ee,Ee,Ee),se=Ee)},setLocked:function(Ee){F=Ee},setClear:function(Ee,ce,de,ue,Ke){Ke===!0&&(Ee*=ue,ce*=ue,de*=ue),ye.set(Ee,ce,de,ue),Te.equals(ye)===!1&&(r.clearColor(Ee,ce,de,ue),Te.copy(ye))},reset:function(){F=!1,se=null,Te.set(-1,0,0,0)}}}function n(){let F=!1,ye=!1,se=null,Te=null,Ee=null;return{setReversed:function(ce){if(ye!==ce){const de=e.get("EXT_clip_control");ce?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),ye=ce;const ue=Ee;Ee=null,this.setClear(ue)}},getReversed:function(){return ye},setTest:function(ce){ce?oe(r.DEPTH_TEST):O(r.DEPTH_TEST)},setMask:function(ce){se!==ce&&!F&&(r.depthMask(ce),se=ce)},setFunc:function(ce){if(ye&&(ce=gv[ce]),Te!==ce){switch(ce){case _h:r.depthFunc(r.NEVER);break;case gh:r.depthFunc(r.ALWAYS);break;case xh:r.depthFunc(r.LESS);break;case Ba:r.depthFunc(r.LEQUAL);break;case vh:r.depthFunc(r.EQUAL);break;case yh:r.depthFunc(r.GEQUAL);break;case Sh:r.depthFunc(r.GREATER);break;case Mh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Te=ce}},setLocked:function(ce){F=ce},setClear:function(ce){Ee!==ce&&(Ee=ce,ye&&(ce=1-ce),r.clearDepth(ce))},reset:function(){F=!1,se=null,Te=null,Ee=null,ye=!1}}}function i(){let F=!1,ye=null,se=null,Te=null,Ee=null,ce=null,de=null,ue=null,Ke=null;return{setTest:function(me){F||(me?oe(r.STENCIL_TEST):O(r.STENCIL_TEST))},setMask:function(me){ye!==me&&!F&&(r.stencilMask(me),ye=me)},setFunc:function(me,$e,Oe){(se!==me||Te!==$e||Ee!==Oe)&&(r.stencilFunc(me,$e,Oe),se=me,Te=$e,Ee=Oe)},setOp:function(me,$e,Oe){(ce!==me||de!==$e||ue!==Oe)&&(r.stencilOp(me,$e,Oe),ce=me,de=$e,ue=Oe)},setLocked:function(me){F=me},setClear:function(me){Ke!==me&&(r.clearStencil(me),Ke=me)},reset:function(){F=!1,ye=null,se=null,Te=null,Ee=null,ce=null,de=null,ue=null,Ke=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},h={},d=new WeakMap,p=[],g=null,m=!1,_=null,T=null,w=null,v=null,E=null,S=null,M=null,x=new Je(0,0,0),b=0,R=!1,P=null,D=null,V=null,z=null,U=null;const k=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,J=0;const ie=r.getParameter(r.VERSION);ie.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ie)[1]),I=J>=1):ie.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),I=J>=2);let L=null,he={};const _e=r.getParameter(r.SCISSOR_BOX),ze=r.getParameter(r.VIEWPORT),Xe=new At().fromArray(_e),He=new At().fromArray(ze);function j(F,ye,se,Te){const Ee=new Uint8Array(4),ce=r.createTexture();r.bindTexture(F,ce),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let de=0;de<se;de++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(ye,0,r.RGBA,1,1,Te,0,r.RGBA,r.UNSIGNED_BYTE,Ee):r.texImage2D(ye+de,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Ee);return ce}const fe={};fe[r.TEXTURE_2D]=j(r.TEXTURE_2D,r.TEXTURE_2D,1),fe[r.TEXTURE_CUBE_MAP]=j(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[r.TEXTURE_2D_ARRAY]=j(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),fe[r.TEXTURE_3D]=j(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(r.DEPTH_TEST),a.setFunc(Ba),N(!1),le(jd),oe(r.CULL_FACE),K(Cr);function oe(F){u[F]!==!0&&(r.enable(F),u[F]=!0)}function O(F){u[F]!==!1&&(r.disable(F),u[F]=!1)}function ae(F,ye){return h[F]!==ye?(r.bindFramebuffer(F,ye),h[F]=ye,F===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ye),F===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ye),!0):!1}function te(F,ye){let se=p,Te=!1;if(F){se=d.get(ye),se===void 0&&(se=[],d.set(ye,se));const Ee=F.textures;if(se.length!==Ee.length||se[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,de=Ee.length;ce<de;ce++)se[ce]=r.COLOR_ATTACHMENT0+ce;se.length=Ee.length,Te=!0}}else se[0]!==r.BACK&&(se[0]=r.BACK,Te=!0);Te&&r.drawBuffers(se)}function Le(F){return g!==F?(r.useProgram(F),g=F,!0):!1}const pe={[bs]:r.FUNC_ADD,[Ox]:r.FUNC_SUBTRACT,[Bx]:r.FUNC_REVERSE_SUBTRACT};pe[kx]=r.MIN,pe[zx]=r.MAX;const H={[Vx]:r.ZERO,[Hx]:r.ONE,[Gx]:r.SRC_COLOR,[ph]:r.SRC_ALPHA,[$x]:r.SRC_ALPHA_SATURATE,[Yx]:r.DST_COLOR,[Xx]:r.DST_ALPHA,[Wx]:r.ONE_MINUS_SRC_COLOR,[mh]:r.ONE_MINUS_SRC_ALPHA,[Kx]:r.ONE_MINUS_DST_COLOR,[qx]:r.ONE_MINUS_DST_ALPHA,[Zx]:r.CONSTANT_COLOR,[Jx]:r.ONE_MINUS_CONSTANT_COLOR,[Qx]:r.CONSTANT_ALPHA,[jx]:r.ONE_MINUS_CONSTANT_ALPHA};function K(F,ye,se,Te,Ee,ce,de,ue,Ke,me){if(F===Cr){m===!0&&(O(r.BLEND),m=!1);return}if(m===!1&&(oe(r.BLEND),m=!0),F!==Fx){if(F!==_||me!==R){if((T!==bs||E!==bs)&&(r.blendEquation(r.FUNC_ADD),T=bs,E=bs),me)switch(F){case Ra:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ep:r.blendFunc(r.ONE,r.ONE);break;case tp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case np:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ze("WebGLState: Invalid blending: ",F);break}else switch(F){case Ra:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ep:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case tp:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case np:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",F);break}w=null,v=null,S=null,M=null,x.set(0,0,0),b=0,_=F,R=me}return}Ee=Ee||ye,ce=ce||se,de=de||Te,(ye!==T||Ee!==E)&&(r.blendEquationSeparate(pe[ye],pe[Ee]),T=ye,E=Ee),(se!==w||Te!==v||ce!==S||de!==M)&&(r.blendFuncSeparate(H[se],H[Te],H[ce],H[de]),w=se,v=Te,S=ce,M=de),(ue.equals(x)===!1||Ke!==b)&&(r.blendColor(ue.r,ue.g,ue.b,Ke),x.copy(ue),b=Ke),_=F,R=!1}function q(F,ye){F.side===nr?O(r.CULL_FACE):oe(r.CULL_FACE);let se=F.side===jn;ye&&(se=!se),N(se),F.blending===Ra&&F.transparent===!1?K(Cr):K(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const Te=F.stencilWrite;o.setTest(Te),Te&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?oe(r.SAMPLE_ALPHA_TO_COVERAGE):O(r.SAMPLE_ALPHA_TO_COVERAGE)}function N(F){P!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),P=F)}function le(F){F!==Nx?(oe(r.CULL_FACE),F!==D&&(F===jd?r.cullFace(r.BACK):F===Ux?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):O(r.CULL_FACE),D=F}function Ae(F){F!==V&&(I&&r.lineWidth(F),V=F)}function Ie(F,ye,se){F?(oe(r.POLYGON_OFFSET_FILL),(z!==ye||U!==se)&&(z=ye,U=se,a.getReversed()&&(ye=-ye),r.polygonOffset(ye,se))):O(r.POLYGON_OFFSET_FILL)}function De(F){F?oe(r.SCISSOR_TEST):O(r.SCISSOR_TEST)}function tt(F){F===void 0&&(F=r.TEXTURE0+k-1),L!==F&&(r.activeTexture(F),L=F)}function B(F,ye,se){se===void 0&&(L===null?se=r.TEXTURE0+k-1:se=L);let Te=he[se];Te===void 0&&(Te={type:void 0,texture:void 0},he[se]=Te),(Te.type!==F||Te.texture!==ye)&&(L!==se&&(r.activeTexture(se),L=se),r.bindTexture(F,ye||fe[F]),Te.type=F,Te.texture=ye)}function Ft(){const F=he[L];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Qe(){try{r.compressedTexImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function y(){try{r.texSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function W(){try{r.texSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function ee(){try{r.compressedTexSubImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function ve(){try{r.texStorage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function ge(){try{r.texStorage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function ne(){try{r.texImage2D(...arguments)}catch(F){Ze("WebGLState:",F)}}function re(){try{r.texImage3D(...arguments)}catch(F){Ze("WebGLState:",F)}}function Me(F){return f[F]!==void 0?f[F]:r.getParameter(F)}function Fe(F,ye){f[F]!==ye&&(r.pixelStorei(F,ye),f[F]=ye)}function be(F){Xe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),Xe.copy(F))}function Se(F){He.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),He.copy(F))}function xe(F,ye){let se=c.get(ye);se===void 0&&(se=new WeakMap,c.set(ye,se));let Te=se.get(F);Te===void 0&&(Te=r.getUniformBlockIndex(ye,F.name),se.set(F,Te))}function Ge(F,ye){const Te=c.get(ye).get(F);l.get(ye)!==Te&&(r.uniformBlockBinding(ye,Te,F.__bindingPointIndex),l.set(ye,Te))}function Ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},f={},L=null,he={},h={},d=new WeakMap,p=[],g=null,m=!1,_=null,T=null,w=null,v=null,E=null,S=null,M=null,x=new Je(0,0,0),b=0,R=!1,P=null,D=null,V=null,z=null,U=null,Xe.set(0,0,r.canvas.width,r.canvas.height),He.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:O,bindFramebuffer:ae,drawBuffers:te,useProgram:Le,setBlending:K,setMaterial:q,setFlipSided:N,setCullFace:le,setLineWidth:Ae,setPolygonOffset:Ie,setScissorTest:De,activeTexture:tt,bindTexture:B,unbindTexture:Ft,compressedTexImage2D:Qe,compressedTexImage3D:C,texImage2D:ne,texImage3D:re,pixelStorei:Fe,getParameter:Me,updateUBOMapping:xe,uniformBlockBinding:Ge,texStorage2D:ve,texStorage3D:ge,texSubImage2D:y,texSubImage3D:W,compressedTexSubImage2D:$,compressedTexSubImage3D:ee,scissor:be,viewport:Se,reset:Ye}}function VE(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,u=new WeakMap,f=new Set;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):Jo("canvas")}function m(C,y,W){let $=1;const ee=Qe(C);if((ee.width>W||ee.height>W)&&($=W/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const ve=Math.floor($*ee.width),ge=Math.floor($*ee.height);h===void 0&&(h=g(ve,ge));const ne=y?g(ve,ge):h;return ne.width=ve,ne.height=ge,ne.getContext("2d").drawImage(C,0,0,ve,ge),Ve("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ve+"x"+ge+")."),ne}else return"data"in C&&Ve("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function _(C){return C.generateMipmaps}function T(C){r.generateMipmap(C)}function w(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(C,y,W,$,ee,ve=!1){if(C!==null){if(r[C]!==void 0)return r[C];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ge;$&&(ge=e.get("EXT_texture_norm16"),ge||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=y;if(y===r.RED&&(W===r.FLOAT&&(ne=r.R32F),W===r.HALF_FLOAT&&(ne=r.R16F),W===r.UNSIGNED_BYTE&&(ne=r.R8),W===r.UNSIGNED_SHORT&&ge&&(ne=ge.R16_EXT),W===r.SHORT&&ge&&(ne=ge.R16_SNORM_EXT)),y===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ne=r.R8UI),W===r.UNSIGNED_SHORT&&(ne=r.R16UI),W===r.UNSIGNED_INT&&(ne=r.R32UI),W===r.BYTE&&(ne=r.R8I),W===r.SHORT&&(ne=r.R16I),W===r.INT&&(ne=r.R32I)),y===r.RG&&(W===r.FLOAT&&(ne=r.RG32F),W===r.HALF_FLOAT&&(ne=r.RG16F),W===r.UNSIGNED_BYTE&&(ne=r.RG8),W===r.UNSIGNED_SHORT&&ge&&(ne=ge.RG16_EXT),W===r.SHORT&&ge&&(ne=ge.RG16_SNORM_EXT)),y===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ne=r.RG8UI),W===r.UNSIGNED_SHORT&&(ne=r.RG16UI),W===r.UNSIGNED_INT&&(ne=r.RG32UI),W===r.BYTE&&(ne=r.RG8I),W===r.SHORT&&(ne=r.RG16I),W===r.INT&&(ne=r.RG32I)),y===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ne=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ne=r.RGB16UI),W===r.UNSIGNED_INT&&(ne=r.RGB32UI),W===r.BYTE&&(ne=r.RGB8I),W===r.SHORT&&(ne=r.RGB16I),W===r.INT&&(ne=r.RGB32I)),y===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ne=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ne=r.RGBA16UI),W===r.UNSIGNED_INT&&(ne=r.RGBA32UI),W===r.BYTE&&(ne=r.RGBA8I),W===r.SHORT&&(ne=r.RGBA16I),W===r.INT&&(ne=r.RGBA32I)),y===r.RGB&&(W===r.UNSIGNED_SHORT&&ge&&(ne=ge.RGB16_EXT),W===r.SHORT&&ge&&(ne=ge.RGB16_SNORM_EXT),W===r.UNSIGNED_INT_5_9_9_9_REV&&(ne=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ne=r.R11F_G11F_B10F)),y===r.RGBA){const re=ve?Tc:_t.getTransfer(ee);W===r.FLOAT&&(ne=r.RGBA32F),W===r.HALF_FLOAT&&(ne=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ne=re===bt?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT&&ge&&(ne=ge.RGBA16_EXT),W===r.SHORT&&ge&&(ne=ge.RGBA16_SNORM_EXT),W===r.UNSIGNED_SHORT_4_4_4_4&&(ne=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ne=r.RGB5_A1)}return(ne===r.R16F||ne===r.R32F||ne===r.RG16F||ne===r.RG32F||ne===r.RGBA16F||ne===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function E(C,y){let W;return C?y===null||y===hr||y===Yo?W=r.DEPTH24_STENCIL8:y===Kn?W=r.DEPTH32F_STENCIL8:y===qo&&(W=r.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===hr||y===Yo?W=r.DEPTH_COMPONENT24:y===Kn?W=r.DEPTH_COMPONENT32F:y===qo&&(W=r.DEPTH_COMPONENT16),W}function S(C,y){return _(C)===!0||C.isFramebufferTexture&&C.minFilter!==hn&&C.minFilter!==It?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function M(C){const y=C.target;y.removeEventListener("dispose",M),b(y),y.isVideoTexture&&u.delete(y),y.isHTMLTexture&&f.delete(y)}function x(C){const y=C.target;y.removeEventListener("dispose",x),P(y)}function b(C){const y=n.get(C);if(y.__webglInit===void 0)return;const W=C.source,$=d.get(W);if($){const ee=$[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(C),Object.keys($).length===0&&d.delete(W)}n.remove(C)}function R(C){const y=n.get(C);r.deleteTexture(y.__webglTexture);const W=C.source,$=d.get(W);delete $[y.__cacheKey],a.memory.textures--}function P(C){const y=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(y.__webglFramebuffer[$]))for(let ee=0;ee<y.__webglFramebuffer[$].length;ee++)r.deleteFramebuffer(y.__webglFramebuffer[$][ee]);else r.deleteFramebuffer(y.__webglFramebuffer[$]);y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer[$])}else{if(Array.isArray(y.__webglFramebuffer))for(let $=0;$<y.__webglFramebuffer.length;$++)r.deleteFramebuffer(y.__webglFramebuffer[$]);else r.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&r.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&r.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let $=0;$<y.__webglColorRenderbuffer.length;$++)y.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(y.__webglColorRenderbuffer[$]);y.__webglDepthRenderbuffer&&r.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const W=C.textures;for(let $=0,ee=W.length;$<ee;$++){const ve=n.get(W[$]);ve.__webglTexture&&(r.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(W[$])}n.remove(C)}let D=0;function V(){D=0}function z(){return D}function U(C){D=C}function k(){const C=D;return C>=i.maxTextures&&Ve("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function I(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function J(C,y){const W=n.get(C);if(C.isVideoTexture&&B(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&W.__version!==C.version){const $=C.image;if($===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{O(W,C,y);return}}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+y)}function ie(C,y){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){O(W,C,y);return}else C.isExternalTexture&&(W.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+y)}function L(C,y){const W=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&W.__version!==C.version){O(W,C,y);return}t.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+y)}function he(C,y){const W=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&W.__version!==C.version){ae(W,C,y);return}t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+y)}const _e={[za]:r.REPEAT,[Pi]:r.CLAMP_TO_EDGE,[Sc]:r.MIRRORED_REPEAT},ze={[hn]:r.NEAREST,[rg]:r.NEAREST_MIPMAP_NEAREST,[vo]:r.NEAREST_MIPMAP_LINEAR,[It]:r.LINEAR,[ic]:r.LINEAR_MIPMAP_NEAREST,[sr]:r.LINEAR_MIPMAP_LINEAR},Xe={[ov]:r.NEVER,[fv]:r.ALWAYS,[lv]:r.LESS,[Kf]:r.LEQUAL,[cv]:r.EQUAL,[$f]:r.GEQUAL,[uv]:r.GREATER,[hv]:r.NOTEQUAL};function He(C,y){if(y.type===Kn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===It||y.magFilter===ic||y.magFilter===vo||y.magFilter===sr||y.minFilter===It||y.minFilter===ic||y.minFilter===vo||y.minFilter===sr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,_e[y.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,_e[y.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,_e[y.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,ze[y.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,ze[y.minFilter]),y.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,Xe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===hn||y.minFilter!==vo&&y.minFilter!==sr||y.type===Kn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,i.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function j(C,y){let W=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",M));const $=y.source;let ee=d.get($);ee===void 0&&(ee={},d.set($,ee));const ve=I(y);if(ve!==C.__cacheKey){ee[ve]===void 0&&(ee[ve]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ee[ve].usedTimes++;const ge=ee[C.__cacheKey];ge!==void 0&&(ee[C.__cacheKey].usedTimes--,ge.usedTimes===0&&R(y)),C.__cacheKey=ve,C.__webglTexture=ee[ve].texture}return W}function fe(C,y,W){return Math.floor(Math.floor(C/W)/y)}function oe(C,y,W,$){const ve=C.updateRanges;if(ve.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,y.width,y.height,W,$,y.data);else{ve.sort((Fe,be)=>Fe.start-be.start);let ge=0;for(let Fe=1;Fe<ve.length;Fe++){const be=ve[ge],Se=ve[Fe],xe=be.start+be.count,Ge=fe(Se.start,y.width,4),Ye=fe(be.start,y.width,4);Se.start<=xe+1&&Ge===Ye&&fe(Se.start+Se.count-1,y.width,4)===Ge?be.count=Math.max(be.count,Se.start+Se.count-be.start):(++ge,ve[ge]=Se)}ve.length=ge+1;const ne=t.getParameter(r.UNPACK_ROW_LENGTH),re=t.getParameter(r.UNPACK_SKIP_PIXELS),Me=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,y.width);for(let Fe=0,be=ve.length;Fe<be;Fe++){const Se=ve[Fe],xe=Math.floor(Se.start/4),Ge=Math.ceil(Se.count/4),Ye=xe%y.width,F=Math.floor(xe/y.width),ye=Ge,se=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Ye),t.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,Ye,F,ye,se,W,$,y.data)}C.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,ne),t.pixelStorei(r.UNPACK_SKIP_PIXELS,re),t.pixelStorei(r.UNPACK_SKIP_ROWS,Me)}}function O(C,y,W){let $=r.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),y.isData3DTexture&&($=r.TEXTURE_3D);const ee=j(C,y),ve=y.source;t.bindTexture($,C.__webglTexture,r.TEXTURE0+W);const ge=n.get(ve);if(ve.version!==ge.__version||ee===!0){if(t.activeTexture(r.TEXTURE0+W),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const se=_t.getPrimaries(_t.workingColorSpace),Te=y.colorSpace===Zr?null:_t.getPrimaries(y.colorSpace),Ee=y.colorSpace===Zr||se===Te?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment);let re=m(y.image,!1,i.maxTextureSize);re=Ft(y,re);const Me=s.convert(y.format,y.colorSpace),Fe=s.convert(y.type);let be=v(y.internalFormat,Me,Fe,y.normalized,y.colorSpace,y.isVideoTexture);He($,y);let Se;const xe=y.mipmaps,Ge=y.isVideoTexture!==!0,Ye=ge.__version===void 0||ee===!0,F=ve.dataReady,ye=S(y,re);if(y.isDepthTexture)be=E(y.format===As,y.type),Ye&&(Ge?t.texStorage2D(r.TEXTURE_2D,1,be,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,be,re.width,re.height,0,Me,Fe,null));else if(y.isDataTexture)if(xe.length>0){Ge&&Ye&&t.texStorage2D(r.TEXTURE_2D,ye,be,xe[0].width,xe[0].height);for(let se=0,Te=xe.length;se<Te;se++)Se=xe[se],Ge?F&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Se.width,Se.height,Me,Fe,Se.data):t.texImage2D(r.TEXTURE_2D,se,be,Se.width,Se.height,0,Me,Fe,Se.data);y.generateMipmaps=!1}else Ge?(Ye&&t.texStorage2D(r.TEXTURE_2D,ye,be,re.width,re.height),F&&oe(y,re,Me,Fe)):t.texImage2D(r.TEXTURE_2D,0,be,re.width,re.height,0,Me,Fe,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,be,xe[0].width,xe[0].height,re.depth);for(let se=0,Te=xe.length;se<Te;se++)if(Se=xe[se],y.format!==Li)if(Me!==null)if(Ge){if(F)if(y.layerUpdates.size>0){const Ee=Zp(Se.width,Se.height,y.format,y.type);for(const ce of y.layerUpdates){const de=Se.data.subarray(ce*Ee/Se.data.BYTES_PER_ELEMENT,(ce+1)*Ee/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,ce,Se.width,Se.height,1,Me,de)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,re.depth,Me,Se.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,se,be,Se.width,Se.height,re.depth,0,Se.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,se,0,0,0,Se.width,Se.height,re.depth,Me,Fe,Se.data):t.texImage3D(r.TEXTURE_2D_ARRAY,se,be,Se.width,Se.height,re.depth,0,Me,Fe,Se.data)}else{Ge&&Ye&&t.texStorage2D(r.TEXTURE_2D,ye,be,xe[0].width,xe[0].height);for(let se=0,Te=xe.length;se<Te;se++)Se=xe[se],y.format!==Li?Me!==null?Ge?F&&t.compressedTexSubImage2D(r.TEXTURE_2D,se,0,0,Se.width,Se.height,Me,Se.data):t.compressedTexImage2D(r.TEXTURE_2D,se,be,Se.width,Se.height,0,Se.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Se.width,Se.height,Me,Fe,Se.data):t.texImage2D(r.TEXTURE_2D,se,be,Se.width,Se.height,0,Me,Fe,Se.data)}else if(y.isDataArrayTexture)if(Ge){if(Ye&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ye,be,re.width,re.height,re.depth),F)if(y.layerUpdates.size>0){const se=Zp(re.width,re.height,y.format,y.type);for(const Te of y.layerUpdates){const Ee=re.data.subarray(Te*se/re.data.BYTES_PER_ELEMENT,(Te+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Te,re.width,re.height,1,Me,Fe,Ee)}y.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,Fe,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,be,re.width,re.height,re.depth,0,Me,Fe,re.data);else if(y.isData3DTexture)Ge?(Ye&&t.texStorage3D(r.TEXTURE_3D,ye,be,re.width,re.height,re.depth),F&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,Fe,re.data)):t.texImage3D(r.TEXTURE_3D,0,be,re.width,re.height,re.depth,0,Me,Fe,re.data);else if(y.isFramebufferTexture){if(Ye)if(Ge)t.texStorage2D(r.TEXTURE_2D,ye,be,re.width,re.height);else{let se=re.width,Te=re.height;for(let Ee=0;Ee<ye;Ee++)t.texImage2D(r.TEXTURE_2D,Ee,be,se,Te,0,Me,Fe,null),se>>=1,Te>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in r){const se=r.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),f.add(y),se.onpaint=Te=>{const Ee=Te.changedElements;for(const ce of f)Ee.includes(ce.image)&&(ce.needsUpdate=!0)},se.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,re);else{const Ee=r.RGBA,ce=r.RGBA,de=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,Ee,ce,de,re)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(xe.length>0){if(Ge&&Ye){const se=Qe(xe[0]);t.texStorage2D(r.TEXTURE_2D,ye,be,se.width,se.height)}for(let se=0,Te=xe.length;se<Te;se++)Se=xe[se],Ge?F&&t.texSubImage2D(r.TEXTURE_2D,se,0,0,Me,Fe,Se):t.texImage2D(r.TEXTURE_2D,se,be,Me,Fe,Se);y.generateMipmaps=!1}else if(Ge){if(Ye){const se=Qe(re);t.texStorage2D(r.TEXTURE_2D,ye,be,se.width,se.height)}F&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Fe,re)}else t.texImage2D(r.TEXTURE_2D,0,be,Me,Fe,re);_(y)&&T($),ge.__version=ve.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function ae(C,y,W){if(y.image.length!==6)return;const $=j(C,y),ee=y.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+W);const ve=n.get(ee);if(ee.version!==ve.__version||$===!0){t.activeTexture(r.TEXTURE0+W);const ge=_t.getPrimaries(_t.workingColorSpace),ne=y.colorSpace===Zr?null:_t.getPrimaries(y.colorSpace),re=y.colorSpace===Zr||ge===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const Me=y.isCompressedTexture||y.image[0].isCompressedTexture,Fe=y.image[0]&&y.image[0].isDataTexture,be=[];for(let ce=0;ce<6;ce++)!Me&&!Fe?be[ce]=m(y.image[ce],!0,i.maxCubemapSize):be[ce]=Fe?y.image[ce].image:y.image[ce],be[ce]=Ft(y,be[ce]);const Se=be[0],xe=s.convert(y.format,y.colorSpace),Ge=s.convert(y.type),Ye=v(y.internalFormat,xe,Ge,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,ye=ve.__version===void 0||$===!0,se=ee.dataReady;let Te=S(y,Se);He(r.TEXTURE_CUBE_MAP,y);let Ee;if(Me){F&&ye&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,Ye,Se.width,Se.height);for(let ce=0;ce<6;ce++){Ee=be[ce].mipmaps;for(let de=0;de<Ee.length;de++){const ue=Ee[de];y.format!==Li?xe!==null?F?se&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de,0,0,ue.width,ue.height,xe,ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de,Ye,ue.width,ue.height,0,ue.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de,0,0,ue.width,ue.height,xe,Ge,ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de,Ye,ue.width,ue.height,0,xe,Ge,ue.data)}}}else{if(Ee=y.mipmaps,F&&ye){Ee.length>0&&Te++;const ce=Qe(be[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Te,Ye,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(Fe){F?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,be[ce].width,be[ce].height,xe,Ge,be[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,be[ce].width,be[ce].height,0,xe,Ge,be[ce].data);for(let de=0;de<Ee.length;de++){const Ke=Ee[de].image[ce].image;F?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de+1,0,0,Ke.width,Ke.height,xe,Ge,Ke.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de+1,Ye,Ke.width,Ke.height,0,xe,Ge,Ke.data)}}else{F?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,xe,Ge,be[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ye,xe,Ge,be[ce]);for(let de=0;de<Ee.length;de++){const ue=Ee[de];F?se&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de+1,0,0,xe,Ge,ue.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,de+1,Ye,xe,Ge,ue.image[ce])}}}_(y)&&T(r.TEXTURE_CUBE_MAP),ve.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function te(C,y,W,$,ee,ve){const ge=s.convert(W.format,W.colorSpace),ne=s.convert(W.type),re=v(W.internalFormat,ge,ne,W.normalized,W.colorSpace),Me=n.get(y),Fe=n.get(W);if(Fe.__renderTarget=y,!Me.__hasExternalTextures){const be=Math.max(1,y.width>>ve),Se=Math.max(1,y.height>>ve);ee===r.TEXTURE_3D||ee===r.TEXTURE_2D_ARRAY?t.texImage3D(ee,ve,re,be,Se,y.depth,0,ge,ne,null):t.texImage2D(ee,ve,re,be,Se,0,ge,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),tt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,ee,Fe.__webglTexture,0,De(y)):(ee===r.TEXTURE_2D||ee>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,ee,Fe.__webglTexture,ve),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Le(C,y,W){if(r.bindRenderbuffer(r.RENDERBUFFER,C),y.depthBuffer){const $=y.depthTexture,ee=$&&$.isDepthTexture?$.type:null,ve=E(y.stencilBuffer,ee),ge=y.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;tt(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De(y),ve,y.width,y.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,De(y),ve,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,ve,y.width,y.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,C)}else{const $=y.textures;for(let ee=0;ee<$.length;ee++){const ve=$[ee],ge=s.convert(ve.format,ve.colorSpace),ne=s.convert(ve.type),re=v(ve.internalFormat,ge,ne,ve.normalized,ve.colorSpace);tt(y)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,De(y),re,y.width,y.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,De(y),re,y.width,y.height):r.renderbufferStorage(r.RENDERBUFFER,re,y.width,y.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(C,y,W){const $=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ee=n.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",M)),ee.__webglTexture===void 0){ee.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),He(r.TEXTURE_CUBE_MAP,y.depthTexture);const Me=s.convert(y.depthTexture.format),Fe=s.convert(y.depthTexture.type);let be;y.depthTexture.format===Nr?be=r.DEPTH_COMPONENT24:y.depthTexture.format===As&&(be=r.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,be,y.width,y.height,0,Me,Fe,null)}}else J(y.depthTexture,0);const ve=ee.__webglTexture,ge=De(y),ne=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,re=y.depthTexture.format===As?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(y.depthTexture.format===Nr)tt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ne,ve,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,re,ne,ve,0);else if(y.depthTexture.format===As)tt(y)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,re,ne,ve,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,re,ne,ve,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function H(C){const y=n.get(C),W=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),$){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=$}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(W)for(let $=0;$<6;$++)pe(y.__webglFramebuffer[$],C,$);else{const $=C.texture.mipmaps;$&&$.length>0?pe(y.__webglFramebuffer[0],C,0):pe(y.__webglFramebuffer,C,0)}else if(W){y.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[$]),y.__webglDepthbuffer[$]===void 0)y.__webglDepthbuffer[$]=r.createRenderbuffer(),Le(y.__webglDepthbuffer[$],C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=y.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,ve)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=r.createRenderbuffer(),Le(y.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=y.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,ee,r.RENDERBUFFER,ve)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function K(C,y,W){const $=n.get(C);y!==void 0&&te($.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&H(C)}function q(C){const y=C.texture,W=n.get(C),$=n.get(y);C.addEventListener("dispose",x);const ee=C.textures,ve=C.isWebGLCubeRenderTarget===!0,ge=ee.length>1;if(ge||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=y.version,a.memory.textures++),ve){W.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer[ne]=[];for(let re=0;re<y.mipmaps.length;re++)W.__webglFramebuffer[ne][re]=r.createFramebuffer()}else W.__webglFramebuffer[ne]=r.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){W.__webglFramebuffer=[];for(let ne=0;ne<y.mipmaps.length;ne++)W.__webglFramebuffer[ne]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(ge)for(let ne=0,re=ee.length;ne<re;ne++){const Me=n.get(ee[ne]);Me.__webglTexture===void 0&&(Me.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&tt(C)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ne=0;ne<ee.length;ne++){const re=ee[ne];W.__webglColorRenderbuffer[ne]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[ne]);const Me=s.convert(re.format,re.colorSpace),Fe=s.convert(re.type),be=v(re.internalFormat,Me,Fe,re.normalized,re.colorSpace,C.isXRRenderTarget===!0),Se=De(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,be,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,W.__webglColorRenderbuffer[ne])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Le(W.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ve){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),He(r.TEXTURE_CUBE_MAP,y);for(let ne=0;ne<6;ne++)if(y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)te(W.__webglFramebuffer[ne][re],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else te(W.__webglFramebuffer[ne],C,y,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);_(y)&&T(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let ne=0,re=ee.length;ne<re;ne++){const Me=ee[ne],Fe=n.get(Me);let be=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(be,Fe.__webglTexture),He(be,Me),te(W.__webglFramebuffer,C,Me,r.COLOR_ATTACHMENT0+ne,be,0),_(Me)&&T(be)}t.unbindTexture()}else{let ne=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ne=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),He(ne,y),y.mipmaps&&y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)te(W.__webglFramebuffer[re],C,y,r.COLOR_ATTACHMENT0,ne,re);else te(W.__webglFramebuffer,C,y,r.COLOR_ATTACHMENT0,ne,0);_(y)&&T(ne),t.unbindTexture()}C.depthBuffer&&H(C)}function N(C){const y=C.textures;for(let W=0,$=y.length;W<$;W++){const ee=y[W];if(_(ee)){const ve=w(C),ge=n.get(ee).__webglTexture;t.bindTexture(ve,ge),T(ve),t.unbindTexture()}}}const le=[],Ae=[];function Ie(C){if(C.samples>0){if(tt(C)===!1){const y=C.textures,W=C.width,$=C.height;let ee=r.COLOR_BUFFER_BIT;const ve=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(C),ne=y.length>1;if(ne)for(let Me=0;Me<y.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);const re=C.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Me=0;Me<y.length;Me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=r.STENCIL_BUFFER_BIT)),ne){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);const Fe=n.get(y[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Fe,0)}r.blitFramebuffer(0,0,W,$,0,0,W,$,ee,r.NEAREST),l===!0&&(le.length=0,Ae.length=0,le.push(r.COLOR_ATTACHMENT0+Me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(le.push(ve),Ae.push(ve),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ae)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,le))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ne)for(let Me=0;Me<y.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Me]);const Fe=n.get(y[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,Fe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[y])}}}function De(C){return Math.min(i.maxSamples,C.samples)}function tt(C){const y=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(C){const y=a.render.frame;u.get(C)!==y&&(u.set(C,y),C.update())}function Ft(C,y){const W=C.colorSpace,$=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||W!==ti&&W!==Zr&&(_t.getTransfer(W)===bt?($!==Li||ee!==di)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",W)),y}function Qe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=V,this.getTextureUnits=z,this.setTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=ie,this.setTexture3D=L,this.setTextureCube=he,this.rebindTextures=K,this.setupRenderTarget=q,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=te,this.useMultisampledRTT=tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function HE(r,e){function t(n,i=Zr){let s;const a=_t.getTransfer(i);if(n===di)return r.UNSIGNED_BYTE;if(n===Hf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Gf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===og)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lg)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===sg)return r.BYTE;if(n===ag)return r.SHORT;if(n===qo)return r.UNSIGNED_SHORT;if(n===Vf)return r.INT;if(n===hr)return r.UNSIGNED_INT;if(n===Kn)return r.FLOAT;if(n===Ii)return r.HALF_FLOAT;if(n===cg)return r.ALPHA;if(n===ug)return r.RGB;if(n===Li)return r.RGBA;if(n===Nr)return r.DEPTH_COMPONENT;if(n===As)return r.DEPTH_STENCIL;if(n===Wf)return r.RED;if(n===Xf)return r.RED_INTEGER;if(n===ks)return r.RG;if(n===qf)return r.RG_INTEGER;if(n===Yf)return r.RGBA_INTEGER;if(n===rc||n===sc||n===ac||n===oc)if(a===bt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===rc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===rc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===sc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ac)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bh||n===Th||n===Eh||n===wh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===bh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Th)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ah||n===Rh||n===Ch||n===Ph||n===Lh||n===Mc||n===Dh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Ah||n===Rh)return a===bt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ch)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ph)return s.COMPRESSED_R11_EAC;if(n===Lh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Mc)return s.COMPRESSED_RG11_EAC;if(n===Dh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ih||n===Nh||n===Uh||n===Fh||n===Oh||n===Bh||n===kh||n===zh||n===Vh||n===Hh||n===Gh||n===Wh||n===Xh||n===qh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ih)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Nh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===kh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Hh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qh)return a===bt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yh||n===Kh||n===$h)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Yh)return a===bt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===$h)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zh||n===Jh||n===bc||n===Qh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Zh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Jh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Yo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const GE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Sg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Wi({vertexShader:GE,fragmentShader:WE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bn(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qE extends Hs{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,p=null;const g=typeof XRWebGLBinding<"u",m=new XE,_={},T=t.getContextAttributes();let w=null,v=null;const E=[],S=[],M=new at;let x=null;const b=new Gn;b.viewport=new At;const R=new Gn;R.viewport=new At;const P=[b,R],D=new Xy;let V=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let fe=E[j];return fe===void 0&&(fe=new hu,E[j]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(j){let fe=E[j];return fe===void 0&&(fe=new hu,E[j]=fe),fe.getGripSpace()},this.getHand=function(j){let fe=E[j];return fe===void 0&&(fe=new hu,E[j]=fe),fe.getHandSpace()};function U(j){const fe=S.indexOf(j.inputSource);if(fe===-1)return;const oe=E[fe];oe!==void 0&&(oe.update(j.inputSource,j.frame,c||a),oe.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",I);for(let j=0;j<E.length;j++){const fe=S[j];fe!==null&&(S[j]=null,E[j].disconnect(fe))}V=null,z=null,m.reset();for(const j in _)delete _[j];e.setRenderTarget(w),d=null,h=null,f=null,i=null,v=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&g&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(w=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",k),i.addEventListener("inputsourceschange",I),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(M),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,O=null,ae=null;T.depth&&(ae=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=T.stencil?As:Nr,O=T.stencil?Yo:hr);const te={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=this.getBinding(),h=f.createProjectionLayer(te),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new cr(h.textureWidth,h.textureHeight,{format:Li,type:di,depthTexture:new Ha(h.textureWidth,h.textureHeight,O,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new cr(d.framebufferWidth,d.framebufferHeight,{format:Li,type:di,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),He.setContext(i),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function I(j){for(let fe=0;fe<j.removed.length;fe++){const oe=j.removed[fe],O=S.indexOf(oe);O>=0&&(S[O]=null,E[O].disconnect(oe))}for(let fe=0;fe<j.added.length;fe++){const oe=j.added[fe];let O=S.indexOf(oe);if(O===-1){for(let te=0;te<E.length;te++)if(te>=S.length){S.push(oe),O=te;break}else if(S[te]===null){S[te]=oe,O=te;break}if(O===-1)break}const ae=E[O];ae&&ae.connect(oe)}}const J=new X,ie=new X;function L(j,fe,oe){J.setFromMatrixPosition(fe.matrixWorld),ie.setFromMatrixPosition(oe.matrixWorld);const O=J.distanceTo(ie),ae=fe.projectionMatrix.elements,te=oe.projectionMatrix.elements,Le=ae[14]/(ae[10]-1),pe=ae[14]/(ae[10]+1),H=(ae[9]+1)/ae[5],K=(ae[9]-1)/ae[5],q=(ae[8]-1)/ae[0],N=(te[8]+1)/te[0],le=Le*q,Ae=Le*N,Ie=O/(-q+N),De=Ie*-q;if(fe.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(De),j.translateZ(Ie),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),ae[10]===-1)j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const tt=Le+Ie,B=pe+Ie,Ft=le-De,Qe=Ae+(O-De),C=H*pe/B*tt,y=K*pe/B*tt;j.projectionMatrix.makePerspective(Ft,Qe,C,y,tt,B),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function he(j,fe){fe===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(fe.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let fe=j.near,oe=j.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),D.near=R.near=b.near=fe,D.far=R.far=b.far=oe,(V!==D.near||z!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),V=D.near,z=D.far),D.layers.mask=j.layers.mask|6,b.layers.mask=D.layers.mask&-5,R.layers.mask=D.layers.mask&-3;const O=j.parent,ae=D.cameras;he(D,O);for(let te=0;te<ae.length;te++)he(ae[te],O);ae.length===2?L(D,b,R):D.projectionMatrix.copy(b.projectionMatrix),_e(j,D,O)};function _e(j,fe,oe){oe===null?j.matrix.copy(fe.matrixWorld):(j.matrix.copy(oe.matrixWorld),j.matrix.invert(),j.matrix.multiply(fe.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(fe.projectionMatrix),j.projectionMatrixInverse.copy(fe.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Va*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function(j){return _[j]};let ze=null;function Xe(j,fe){if(u=fe.getViewerPose(c||a),p=fe,u!==null){const oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let O=!1;oe.length!==D.cameras.length&&(D.cameras.length=0,O=!0);for(let pe=0;pe<oe.length;pe++){const H=oe[pe];let K=null;if(d!==null)K=d.getViewport(H);else{const N=f.getViewSubImage(h,H);K=N.viewport,pe===0&&(e.setRenderTargetTextures(v,N.colorTexture,N.depthStencilTexture),e.setRenderTarget(v))}let q=P[pe];q===void 0&&(q=new Gn,q.layers.enable(pe),q.viewport=new At,P[pe]=q),q.matrix.fromArray(H.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(H.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(K.x,K.y,K.width,K.height),pe===0&&(D.matrix.copy(q.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),O===!0&&D.cameras.push(q)}const ae=i.enabledFeatures;if(ae&&ae.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){f=n.getBinding();const pe=f.getDepthInformation(oe[0]);pe&&pe.isValid&&pe.texture&&m.init(pe,i.renderState)}if(ae&&ae.includes("camera-access")&&g){e.state.unbindTexture(),f=n.getBinding();for(let pe=0;pe<oe.length;pe++){const H=oe[pe].camera;if(H){let K=_[H];K||(K=new Sg,_[H]=K);const q=f.getCameraImage(H);K.sourceTexture=q}}}}for(let oe=0;oe<E.length;oe++){const O=S[oe],ae=E[oe];O!==null&&ae!==void 0&&ae.update(O,fe,c||a)}ze&&ze(j,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),p=null}const He=new Eg;He.setAnimationLoop(Xe),this.setAnimationLoop=function(j){ze=j},this.dispose=function(){}}}const YE=new ot,Dg=new nt;Dg.set(-1,0,0,0,1,0,0,0,1);function KE(r,e){function t(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,Mg(r)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,T,w,v){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?s(m,_):_.isMeshLambertMaterial?(s(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(s(m,_),f(m,_)):_.isMeshPhongMaterial?(s(m,_),u(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(s(m,_),h(m,_),_.isMeshPhysicalMaterial&&d(m,_,v)):_.isMeshMatcapMaterial?(s(m,_),p(m,_)):_.isMeshDepthMaterial?s(m,_):_.isMeshDistanceMaterial?(s(m,_),g(m,_)):_.isMeshNormalMaterial?s(m,_):_.isLineBasicMaterial?(a(m,_),_.isLineDashedMaterial&&o(m,_)):_.isPointsMaterial?l(m,_,T,w):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function s(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,t(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===jn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,t(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===jn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,t(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,t(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);const T=e.get(_),w=T.envMap,v=T.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(YE.makeRotationFromEuler(v)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Dg),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,m.aoMapTransform))}function a(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform))}function o(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,T,w){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*T,m.scale.value=w*.5,_.map&&(m.map.value=_.map,t(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,t(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,t(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function u(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function f(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function h(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function d(m,_,T){m.ior.value=_.ior,_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===jn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){const T=e.get(_).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function $E(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,E){const S=E.program;n.uniformBlockBinding(v,S)}function c(v,E){let S=i[v.id];S===void 0&&(m(v),S=u(v),i[v.id]=S,v.addEventListener("dispose",T));const M=E.program;n.updateUBOMapping(v,M);const x=e.render.frame;s[v.id]!==x&&(h(v),s[v.id]=x)}function u(v){const E=f();v.__bindingPointIndex=E;const S=r.createBuffer(),M=v.__size,x=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,S),r.bufferData(r.UNIFORM_BUFFER,M,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,S),S}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return Ze("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const E=i[v.id],S=v.uniforms,M=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let x=0,b=S.length;x<b;x++){const R=S[x];if(Array.isArray(R))for(let P=0,D=R.length;P<D;P++)d(R[P],x,P,M);else d(R,x,0,M)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(v,E,S,M){if(g(v,E,S,M)===!0){const x=v.__offset,b=v.value;if(Array.isArray(b)){let R=0;for(let P=0;P<b.length;P++){const D=b[P],V=_(D);p(D,v.__data,R),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,v.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,v.__data)}}function p(v,E,S){typeof v=="number"||typeof v=="boolean"?E[0]=v:v.isMatrix3?(E[0]=v.elements[0],E[1]=v.elements[1],E[2]=v.elements[2],E[3]=0,E[4]=v.elements[3],E[5]=v.elements[4],E[6]=v.elements[5],E[7]=0,E[8]=v.elements[6],E[9]=v.elements[7],E[10]=v.elements[8],E[11]=0):ArrayBuffer.isView(v)?E.set(new v.constructor(v.buffer,v.byteOffset,E.length)):v.toArray(E,S)}function g(v,E,S,M){const x=v.value,b=E+"_"+S;if(M[b]===void 0)return typeof x=="number"||typeof x=="boolean"?M[b]=x:ArrayBuffer.isView(x)?M[b]=x.slice():M[b]=x.clone(),!0;{const R=M[b];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return M[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(v){const E=v.uniforms;let S=0;const M=16;for(let b=0,R=E.length;b<R;b++){const P=Array.isArray(E[b])?E[b]:[E[b]];for(let D=0,V=P.length;D<V;D++){const z=P[D],U=Array.isArray(z.value)?z.value:[z.value];for(let k=0,I=U.length;k<I;k++){const J=U[k],ie=_(J),L=S%M,he=L%ie.boundary,_e=L+he;S+=he,_e!==0&&M-_e<ie.storage&&(S+=M-_e),z.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=ie.storage}}}const x=S%M;return x>0&&(S+=M-x),v.__size=S,v.__cache={},this}function _(v){const E={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(E.boundary=4,E.storage=4):v.isVector2?(E.boundary=8,E.storage=8):v.isVector3||v.isColor?(E.boundary=16,E.storage=12):v.isVector4?(E.boundary=16,E.storage=16):v.isMatrix3?(E.boundary=48,E.storage=48):v.isMatrix4?(E.boundary=64,E.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(E.boundary=16,E.storage=v.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",v),E}function T(v){const E=v.target;E.removeEventListener("dispose",T);const S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function w(){for(const v in i)r.deleteBuffer(i[v]);a=[],i={},s={}}return{bind:l,update:c,dispose:w}}const ZE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zi=null;function JE(){return Zi===null&&(Zi=new Qo(ZE,16,16,ks,Ii),Zi.name="DFG_LUT",Zi.minFilter=It,Zi.magFilter=It,Zi.wrapS=Pi,Zi.wrapT=Pi,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}class QE{constructor(e={}){const{canvas:t=mv(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=di}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=d,m=new Set([Yf,qf,Xf]),_=new Set([di,hr,qo,Yo,Hf,Gf]),T=new Uint32Array(4),w=new Int32Array(4),v=new X;let E=null,S=null;const M=[],x=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let P=!1,D=null,V=null,z=null,U=null;this._outputColorSpace=an;let k=0,I=0,J=null,ie=-1,L=null;const he=new At,_e=new At;let ze=null;const Xe=new Je(0);let He=0,j=t.width,fe=t.height,oe=1,O=null,ae=null;const te=new At(0,0,j,fe),Le=new At(0,0,j,fe);let pe=!1;const H=new td;let K=!1,q=!1;const N=new ot,le=new X,Ae=new At,Ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let De=!1;function tt(){return J===null?oe:1}let B=n;function Ft(A,G){return t.getContext(A,G)}try{const A={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kf}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",me,!1),t.addEventListener("webglcontextcreationerror",$e,!1),B===null){const G="webgl2";if(B=Ft(G,A),B===null)throw Ft(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ze("WebGLRenderer: "+A.message),A}let Qe,C,y,W,$,ee,ve,ge,ne,re,Me,Fe,be,Se,xe,Ge,Ye,F,ye,se,Te,Ee,ce;function de(){Qe=new Jb(B),Qe.init(),Te=new HE(B,Qe),C=new Gb(B,Qe,e,Te),y=new zE(B,Qe),C.reversedDepthBuffer&&h&&y.buffers.depth.setReversed(!0),V=B.createFramebuffer(),z=B.createFramebuffer(),U=B.createFramebuffer(),W=new eT(B),$=new wE,ee=new VE(B,Qe,y,$,C,Te,W),ve=new Zb(R),ge=new rS(B),Ee=new Vb(B,ge),ne=new Qb(B,ge,W,Ee),re=new nT(B,ne,ge,Ee,W),F=new tT(B,C,ee),xe=new Wb($),Me=new EE(R,ve,Qe,C,Ee,xe),Fe=new KE(R,$),be=new RE,Se=new NE(Qe),Ye=new zb(R,ve,y,re,p,l),Ge=new kE(R,re,C),ce=new $E(B,W,C,y),ye=new Hb(B,Qe,W),se=new jb(B,Qe,W),W.programs=Me.programs,R.capabilities=C,R.extensions=Qe,R.properties=$,R.renderLists=be,R.shadowMap=Ge,R.state=y,R.info=W}de(),g!==di&&(b=new rT(g,t.width,t.height,o,i,s));const ue=new qE(R,B);this.xr=ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize(j,fe,!1))},this.getSize=function(A){return A.set(j,fe)},this.setSize=function(A,G,Q=!0){if(ue.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}j=A,fe=G,t.width=Math.floor(A*oe),t.height=Math.floor(G*oe),Q===!0&&(t.style.width=A+"px",t.style.height=G+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,A,G)},this.getDrawingBufferSize=function(A){return A.set(j*oe,fe*oe).floor()},this.setDrawingBufferSize=function(A,G,Q){j=A,fe=G,oe=Q,t.width=Math.floor(A*Q),t.height=Math.floor(G*Q),this.setViewport(0,0,A,G)},this.setEffects=function(A){if(g===di){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let G=0;G<A.length;G++)if(A[G].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(he)},this.getViewport=function(A){return A.copy(te)},this.setViewport=function(A,G,Q,Y){A.isVector4?te.set(A.x,A.y,A.z,A.w):te.set(A,G,Q,Y),y.viewport(he.copy(te).multiplyScalar(oe).round())},this.getScissor=function(A){return A.copy(Le)},this.setScissor=function(A,G,Q,Y){A.isVector4?Le.set(A.x,A.y,A.z,A.w):Le.set(A,G,Q,Y),y.scissor(_e.copy(Le).multiplyScalar(oe).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){y.setScissorTest(pe=A)},this.setOpaqueSort=function(A){O=A},this.setTransparentSort=function(A){ae=A},this.getClearColor=function(A){return A.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor(...arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha(...arguments)},this.clear=function(A=!0,G=!0,Q=!0){let Y=0;if(A){let Z=!1;if(J!==null){const we=J.texture.format;Z=m.has(we)}if(Z){const we=J.texture.type,Re=_.has(we),Pe=Ye.getClearColor(),Be=Ye.getClearAlpha(),We=Pe.r,it=Pe.g,ct=Pe.b;Re?(T[0]=We,T[1]=it,T[2]=ct,T[3]=Be,B.clearBufferuiv(B.COLOR,0,T)):(w[0]=We,w[1]=it,w[2]=ct,w[3]=Be,B.clearBufferiv(B.COLOR,0,w))}else Y|=B.COLOR_BUFFER_BIT}G&&(Y|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&B.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",me,!1),t.removeEventListener("webglcontextcreationerror",$e,!1),Ye.dispose(),be.dispose(),Se.dispose(),$.dispose(),ve.dispose(),re.dispose(),Ee.dispose(),ce.dispose(),Me.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Bt),ue.removeEventListener("sessionend",Rt),gt.stop()};function Ke(A){A.preventDefault(),Ec("WebGLRenderer: Context Lost."),P=!0}function me(){Ec("WebGLRenderer: Context Restored."),P=!1;const A=W.autoReset,G=Ge.enabled,Q=Ge.autoUpdate,Y=Ge.needsUpdate,Z=Ge.type;de(),W.autoReset=A,Ge.enabled=G,Ge.autoUpdate=Q,Ge.needsUpdate=Y,Ge.type=Z}function $e(A){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Oe(A){const G=A.target;G.removeEventListener("dispose",Oe),et(G)}function et(A){en(A),$.remove(A)}function en(A){const G=$.get(A).programs;G!==void 0&&(G.forEach(function(Q){Me.releaseProgram(Q)}),A.isShaderMaterial&&Me.releaseShaderCache(A))}this.renderBufferDirect=function(A,G,Q,Y,Z,we){G===null&&(G=Ie);const Re=Z.isMesh&&Z.matrixWorld.determinantAffine()<0,Pe=mn(A,G,Q,Y,Z);y.setMaterial(Y,Re);let Be=Q.index,We=1;if(Y.wireframe===!0){if(Be=ne.getWireframeAttribute(Q),Be===void 0)return;We=2}const it=Q.drawRange,ct=Q.attributes.position;let qe=it.start*We,wt=(it.start+it.count)*We;we!==null&&(qe=Math.max(qe,we.start*We),wt=Math.min(wt,(we.start+we.count)*We)),Be!==null?(qe=Math.max(qe,0),wt=Math.min(wt,Be.count)):ct!=null&&(qe=Math.max(qe,0),wt=Math.min(wt,ct.count));const $t=wt-qe;if($t<0||$t===1/0)return;Ee.setup(Z,Y,Pe,Q,Be);let qt,Ct=ye;if(Be!==null&&(qt=ge.get(Be),Ct=se,Ct.setIndex(qt)),Z.isMesh)Y.wireframe===!0?(y.setLineWidth(Y.wireframeLinewidth*tt()),Ct.setMode(B.LINES)):Ct.setMode(B.TRIANGLES);else if(Z.isLine){let En=Y.linewidth;En===void 0&&(En=1),y.setLineWidth(En*tt()),Z.isLineSegments?Ct.setMode(B.LINES):Z.isLineLoop?Ct.setMode(B.LINE_LOOP):Ct.setMode(B.LINE_STRIP)}else Z.isPoints?Ct.setMode(B.POINTS):Z.isSprite&&Ct.setMode(B.TRIANGLES);if(Z.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))Ct.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const En=Z._multiDrawStarts,Ne=Z._multiDrawCounts,ii=Z._multiDrawCount,vt=Be?ge.get(Be).bytesPerElement:1,Si=$.get(Y).currentProgram.getUniforms();for(let Yi=0;Yi<ii;Yi++)Si.setValue(B,"_gl_DrawID",Yi),Ct.render(En[Yi]/vt,Ne[Yi])}else if(Z.isInstancedMesh)Ct.renderInstances(qe,$t,Z.count);else if(Q.isInstancedBufferGeometry){const En=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ne=Math.min(Q.instanceCount,En);Ct.renderInstances(qe,$t,Ne)}else Ct.render(qe,$t)};function ht(A,G,Q){A.transparent===!0&&A.side===nr&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,Xt(A,G,Q),A.side=Ir,A.needsUpdate=!0,Xt(A,G,Q),A.side=nr):Xt(A,G,Q)}this.compile=function(A,G,Q=null){Q===null&&(Q=A),S=Se.get(Q),S.init(G),x.push(S),Q.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),A!==Q&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(G.layers)&&(S.pushLight(Z),Z.castShadow&&S.pushShadow(Z))}),S.setupLights();const Y=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const we=Z.material;if(we)if(Array.isArray(we))for(let Re=0;Re<we.length;Re++){const Pe=we[Re];ht(Pe,Q,Z),Y.add(Pe)}else ht(we,Q,Z),Y.add(we)}),S=x.pop(),Y},this.compileAsync=function(A,G,Q=null){const Y=this.compile(A,G,Q);return new Promise(Z=>{function we(){if(Y.forEach(function(Re){$.get(Re).currentProgram.isReady()&&Y.delete(Re)}),Y.size===0){Z(A);return}setTimeout(we,10)}Qe.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ot=null;function pn(A){Ot&&Ot(A)}function Bt(){gt.stop()}function Rt(){gt.start()}const gt=new Eg;gt.setAnimationLoop(pn),typeof self<"u"&&gt.setContext(self),this.setAnimationLoop=function(A){Ot=A,ue.setAnimationLoop(A),A===null?gt.stop():gt.start()},ue.addEventListener("sessionstart",Bt),ue.addEventListener("sessionend",Rt),this.render=function(A,G){if(G!==void 0&&G.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(A,G);const Q=ue.enabled===!0&&ue.isPresenting===!0,Y=b!==null&&(J===null||Q)&&b.begin(R,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(G),G=ue.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,G,J),S=Se.get(A,x.length),S.init(G),S.state.textureUnits=ee.getTextureUnits(),x.push(S),N.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),H.setFromProjectionMatrix(N,ar,G.reversedDepth),q=this.localClippingEnabled,K=xe.init(this.clippingPlanes,q),E=be.get(A,M.length),E.init(),M.push(E),ue.enabled===!0&&ue.isPresenting===!0){const Re=R.xr.getDepthSensingMesh();Re!==null&&Nn(Re,G,-1/0,R.sortObjects)}Nn(A,G,0,R.sortObjects),E.finish(),R.sortObjects===!0&&E.sort(O,ae,G.reversedDepth),De=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,De&&Ye.addToRenderList(E,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),K===!0&&xe.beginShadows();const Z=S.state.shadowsArray;if(Ge.render(Z,A,G),K===!0&&xe.endShadows(),(Y&&b.hasRenderPass())===!1){const Re=E.opaque,Pe=E.transmissive;if(S.setupLights(),G.isArrayCamera){const Be=G.cameras;if(Pe.length>0)for(let We=0,it=Be.length;We<it;We++){const ct=Be[We];Tn(Re,Pe,A,ct)}De&&Ye.render(A);for(let We=0,it=Be.length;We<it;We++){const ct=Be[We];Nt(E,A,ct,ct.viewport)}}else Pe.length>0&&Tn(Re,Pe,A,G),De&&Ye.render(A),Nt(E,A,G)}J!==null&&I===0&&(ee.updateMultisampleRenderTarget(J),ee.updateRenderTargetMipmap(J)),Y&&b.end(R),A.isScene===!0&&A.onAfterRender(R,A,G),Ee.resetDefaultState(),ie=-1,L=null,x.pop(),x.length>0?(S=x[x.length-1],ee.setTextureUnits(S.state.textureUnits),K===!0&&xe.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,M.pop(),M.length>0?E=M[M.length-1]:E=null,D!==null&&D.renderEnd()};function Nn(A,G,Q,Y){if(A.visible===!1)return;if(A.layers.test(G.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(G);else if(A.isLightProbeGrid)S.pushLightProbeGrid(A);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||H.intersectsSprite(A)){Y&&Ae.setFromMatrixPosition(A.matrixWorld).applyMatrix4(N);const Re=re.update(A),Pe=A.material;Pe.visible&&E.push(A,Re,Pe,Q,Ae.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||H.intersectsObject(A))){const Re=re.update(A),Pe=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ae.copy(A.boundingSphere.center)):(Re.boundingSphere===null&&Re.computeBoundingSphere(),Ae.copy(Re.boundingSphere.center)),Ae.applyMatrix4(A.matrixWorld).applyMatrix4(N)),Array.isArray(Pe)){const Be=Re.groups;for(let We=0,it=Be.length;We<it;We++){const ct=Be[We],qe=Pe[ct.materialIndex];qe&&qe.visible&&E.push(A,Re,qe,Q,Ae.z,ct)}}else Pe.visible&&E.push(A,Re,Pe,Q,Ae.z,null)}}const we=A.children;for(let Re=0,Pe=we.length;Re<Pe;Re++)Nn(we[Re],G,Q,Y)}function Nt(A,G,Q,Y){const{opaque:Z,transmissive:we,transparent:Re}=A;S.setupLightsView(Q),K===!0&&xe.setGlobalState(R.clippingPlanes,Q),Y&&y.viewport(he.copy(Y)),Z.length>0&&Un(Z,G,Q),we.length>0&&Un(we,G,Q),Re.length>0&&Un(Re,G,Q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Tn(A,G,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){const qe=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new cr(1,1,{generateMipmaps:!0,type:qe?Ii:di,minFilter:sr,samples:Math.max(4,C.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const we=S.state.transmissionRenderTarget[Y.id],Re=Y.viewport||he;we.setSize(Re.z*R.transmissionResolutionScale,Re.w*R.transmissionResolutionScale);const Pe=R.getRenderTarget(),Be=R.getActiveCubeFace(),We=R.getActiveMipmapLevel();R.setRenderTarget(we),R.getClearColor(Xe),He=R.getClearAlpha(),He<1&&R.setClearColor(16777215,.5),R.clear(),De&&Ye.render(Q);const it=R.toneMapping;R.toneMapping=lr;const ct=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),K===!0&&xe.setGlobalState(R.clippingPlanes,Y),Un(A,Q,Y),ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let wt=0,$t=G.length;wt<$t;wt++){const qt=G[wt],{object:Ct,geometry:En,material:Ne,group:ii}=qt;if(Ne.side===nr&&Ct.layers.test(Y.layers)){const vt=Ne.side;Ne.side=jn,Ne.needsUpdate=!0,tn(Ct,Q,Y,En,Ne,ii),Ne.side=vt,Ne.needsUpdate=!0,qe=!0}}qe===!0&&(ee.updateMultisampleRenderTarget(we),ee.updateRenderTargetMipmap(we))}R.setRenderTarget(Pe,Be,We),R.setClearColor(Xe,He),ct!==void 0&&(Y.viewport=ct),R.toneMapping=it}function Un(A,G,Q){const Y=G.isScene===!0?G.overrideMaterial:null;for(let Z=0,we=A.length;Z<we;Z++){const Re=A[Z],{object:Pe,geometry:Be,group:We}=Re;let it=Re.material;it.allowOverride===!0&&Y!==null&&(it=Y),Pe.layers.test(Q.layers)&&tn(Pe,G,Q,Be,it,We)}}function tn(A,G,Q,Y,Z,we){A.onBeforeRender(R,G,Q,Y,Z,we),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,G,Q,Y,A,we),Z.transparent===!0&&Z.side===nr&&Z.forceSinglePass===!1?(Z.side=jn,Z.needsUpdate=!0,R.renderBufferDirect(Q,G,Y,Z,A,we),Z.side=Ir,Z.needsUpdate=!0,R.renderBufferDirect(Q,G,Y,Z,A,we),Z.side=nr):R.renderBufferDirect(Q,G,Y,Z,A,we),A.onAfterRender(R,G,Q,Y,Z,we)}function Xt(A,G,Q){G.isScene!==!0&&(G=Ie);const Y=$.get(A),Z=S.state.lights,we=S.state.shadowsArray,Re=Z.state.version,Pe=Me.getParameters(A,Z.state,we,G,Q,S.state.lightProbeGridArray),Be=Me.getProgramCacheKey(Pe);let We=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?G.environment:null,Y.fog=G.fog;const it=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=ve.get(A.envMap||Y.environment,it),Y.envMapRotation=Y.environment!==null&&A.envMap===null?G.environmentRotation:A.envMapRotation,We===void 0&&(A.addEventListener("dispose",Oe),We=new Map,Y.programs=We);let ct=We.get(Be);if(ct!==void 0){if(Y.currentProgram===ct&&Y.lightsStateVersion===Re)return qi(A,Pe),ct}else Pe.uniforms=Me.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Q,Pe),A.onBeforeCompile(Pe,R),ct=Me.acquireProgram(Pe,Be),We.set(Be,ct),Y.uniforms=Pe.uniforms;const qe=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qe.clippingPlanes=xe.uniform),qi(A,Pe),Y.needsLights=yi(A),Y.lightsStateVersion=Re,Y.needsLights&&(qe.ambientLightColor.value=Z.state.ambient,qe.lightProbe.value=Z.state.probe,qe.directionalLights.value=Z.state.directional,qe.directionalLightShadows.value=Z.state.directionalShadow,qe.spotLights.value=Z.state.spot,qe.spotLightShadows.value=Z.state.spotShadow,qe.rectAreaLights.value=Z.state.rectArea,qe.ltc_1.value=Z.state.rectAreaLTC1,qe.ltc_2.value=Z.state.rectAreaLTC2,qe.pointLights.value=Z.state.point,qe.pointLightShadows.value=Z.state.pointShadow,qe.hemisphereLights.value=Z.state.hemi,qe.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qe.spotLightMatrix.value=Z.state.spotLightMatrix,qe.spotLightMap.value=Z.state.spotLightMap,qe.pointShadowMatrix.value=Z.state.pointShadowMatrix),Y.lightProbeGrid=S.state.lightProbeGridArray.length>0,Y.currentProgram=ct,Y.uniformsList=null,ct}function ln(A){if(A.uniformsList===null){const G=A.currentProgram.getUniforms();A.uniformsList=lc.seqWithValue(G.seq,A.uniforms)}return A.uniformsList}function qi(A,G){const Q=$.get(A);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Ws(A,G){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;v.setFromMatrixPosition(G.matrixWorld);for(let Q=0,Y=A.length;Q<Y;Q++){const Z=A[Q];if(Z.texture!==null&&Z.boundingBox.containsPoint(v))return Z}return null}function mn(A,G,Q,Y,Z){G.isScene!==!0&&(G=Ie),ee.resetTextureUnits();const we=G.fog,Re=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?G.environment:null,Pe=J===null?R.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:_t.workingColorSpace,Be=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,We=ve.get(Y.envMap||Re,Be),it=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ct=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),qe=!!Q.morphAttributes.position,wt=!!Q.morphAttributes.normal,$t=!!Q.morphAttributes.color;let qt=lr;Y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(qt=R.toneMapping);const Ct=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,En=Ct!==void 0?Ct.length:0,Ne=$.get(Y),ii=S.state.lights;if(K===!0&&(q===!0||A!==L)){const Ut=A===L&&Y.id===ie;xe.setState(Y,A,Ut)}let vt=!1;Y.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==ii.state.version||Ne.outputColorSpace!==Pe||Z.isBatchedMesh&&Ne.batching===!1||!Z.isBatchedMesh&&Ne.batching===!0||Z.isBatchedMesh&&Ne.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Ne.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Ne.instancing===!1||!Z.isInstancedMesh&&Ne.instancing===!0||Z.isSkinnedMesh&&Ne.skinning===!1||!Z.isSkinnedMesh&&Ne.skinning===!0||Z.isInstancedMesh&&Ne.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ne.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Ne.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Ne.instancingMorph===!1&&Z.morphTexture!==null||Ne.envMap!==We||Y.fog===!0&&Ne.fog!==we||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==xe.numPlanes||Ne.numIntersection!==xe.numIntersection)||Ne.vertexAlphas!==it||Ne.vertexTangents!==ct||Ne.morphTargets!==qe||Ne.morphNormals!==wt||Ne.morphColors!==$t||Ne.toneMapping!==qt||Ne.morphTargetsCount!==En||!!Ne.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(vt=!0):(vt=!0,Ne.__version=Y.version);let Si=Ne.currentProgram;vt===!0&&(Si=Xt(Y,G,Z),D&&Y.isNodeMaterial&&D.onUpdateProgram(Y,Si,Ne));let Yi=!1,Fr=!1,Xs=!1;const Pt=Si.getUniforms(),Zt=Ne.uniforms;if(y.useProgram(Si.program)&&(Yi=!0,Fr=!0,Xs=!0),Y.id!==ie&&(ie=Y.id,Fr=!0),Ne.needsLights){const Ut=Ws(S.state.lightProbeGridArray,Z);Ne.lightProbeGrid!==Ut&&(Ne.lightProbeGrid=Ut,Fr=!0)}if(Yi||L!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Pt.setValue(B,"projectionMatrix",A.projectionMatrix),Pt.setValue(B,"viewMatrix",A.matrixWorldInverse);const Br=Pt.map.cameraPosition;Br!==void 0&&Br.setValue(B,le.setFromMatrixPosition(A.matrixWorld)),C.logarithmicDepthBuffer&&Pt.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Pt.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),L!==A&&(L=A,Fr=!0,Xs=!0)}if(Ne.needsLights&&(ii.state.directionalShadowMap.length>0&&Pt.setValue(B,"directionalShadowMap",ii.state.directionalShadowMap,ee),ii.state.spotShadowMap.length>0&&Pt.setValue(B,"spotShadowMap",ii.state.spotShadowMap,ee),ii.state.pointShadowMap.length>0&&Pt.setValue(B,"pointShadowMap",ii.state.pointShadowMap,ee)),Z.isSkinnedMesh){Pt.setOptional(B,Z,"bindMatrix"),Pt.setOptional(B,Z,"bindMatrixInverse");const Ut=Z.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),Pt.setValue(B,"boneTexture",Ut.boneTexture,ee))}Z.isBatchedMesh&&(Pt.setOptional(B,Z,"batchingTexture"),Pt.setValue(B,"batchingTexture",Z._matricesTexture,ee),Pt.setOptional(B,Z,"batchingIdTexture"),Pt.setValue(B,"batchingIdTexture",Z._indirectTexture,ee),Pt.setOptional(B,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Pt.setValue(B,"batchingColorTexture",Z._colorsTexture,ee));const Or=Q.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0)&&F.update(Z,Q,Si),(Fr||Ne.receiveShadow!==Z.receiveShadow)&&(Ne.receiveShadow=Z.receiveShadow,Pt.setValue(B,"receiveShadow",Z.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&G.environment!==null&&(Zt.envMapIntensity.value=G.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=JE()),Fr){if(Pt.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ne.needsLights&&Kt(Zt,Xs),we&&Y.fog===!0&&Fe.refreshFogUniforms(Zt,we),Fe.refreshMaterialUniforms(Zt,Y,oe,fe,S.state.transmissionRenderTarget[A.id]),Ne.needsLights&&Ne.lightProbeGrid){const Ut=Ne.lightProbeGrid;Zt.probesSH.value=Ut.texture,Zt.probesMin.value.copy(Ut.boundingBox.min),Zt.probesMax.value.copy(Ut.boundingBox.max),Zt.probesResolution.value.copy(Ut.resolution)}lc.upload(B,ln(Ne),Zt,ee)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(lc.upload(B,ln(Ne),Zt,ee),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Pt.setValue(B,"center",Z.center),Pt.setValue(B,"modelViewMatrix",Z.modelViewMatrix),Pt.setValue(B,"normalMatrix",Z.normalMatrix),Pt.setValue(B,"modelMatrix",Z.matrixWorld),Y.uniformsGroups!==void 0){const Ut=Y.uniformsGroups;for(let Br=0,qs=Ut.length;Br<qs;Br++){const dd=Ut[Br];ce.update(dd,Si),ce.bind(dd,Si)}}return Si}function Kt(A,G){A.ambientLightColor.needsUpdate=G,A.lightProbe.needsUpdate=G,A.directionalLights.needsUpdate=G,A.directionalLightShadows.needsUpdate=G,A.pointLights.needsUpdate=G,A.pointLightShadows.needsUpdate=G,A.spotLights.needsUpdate=G,A.spotLightShadows.needsUpdate=G,A.rectAreaLights.needsUpdate=G,A.hemisphereLights.needsUpdate=G}function yi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,G,Q){const Y=$.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=G,$.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,G){const Q=$.get(A);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(A,G=0,Q=0){J=A,k=G,I=Q;let Y=null,Z=!1,we=!1;if(A){const Pe=$.get(A);if(Pe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,Pe.__webglFramebuffer),he.copy(A.viewport),_e.copy(A.scissor),ze=A.scissorTest,y.viewport(he),y.scissor(_e),y.setScissorTest(ze),ie=-1;return}else if(Pe.__webglFramebuffer===void 0)ee.setupRenderTarget(A);else if(Pe.__hasExternalTextures)ee.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const it=A.depthTexture;if(Pe.__boundDepthTexture!==it){if(it!==null&&$.has(it)&&(A.width!==it.image.width||A.height!==it.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(A)}}const Be=A.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(we=!0);const We=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(We[G])?Y=We[G][Q]:Y=We[G],Z=!0):A.samples>0&&ee.useMultisampledRTT(A)===!1?Y=$.get(A).__webglMultisampledFramebuffer:Array.isArray(We)?Y=We[Q]:Y=We,he.copy(A.viewport),_e.copy(A.scissor),ze=A.scissorTest}else he.copy(te).multiplyScalar(oe).floor(),_e.copy(Le).multiplyScalar(oe).floor(),ze=pe;if(Q!==0&&(Y=V),y.bindFramebuffer(B.FRAMEBUFFER,Y)&&y.drawBuffers(A,Y),y.viewport(he),y.scissor(_e),y.setScissorTest(ze),Z){const Pe=$.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Pe.__webglTexture,Q)}else if(we){const Pe=G;for(let Be=0;Be<A.textures.length;Be++){const We=$.get(A.textures[Be]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Be,We.__webglTexture,Q,Pe)}}else if(A!==null&&Q!==0){const Pe=$.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Pe.__webglTexture,Q)}ie=-1},this.readRenderTargetPixels=function(A,G,Q,Y,Z,we,Re,Pe=0){if(!(A&&A.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Be=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Be=Be[Re]),Be){y.bindFramebuffer(B.FRAMEBUFFER,Be);try{const We=A.textures[Pe],it=We.format,ct=We.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),!C.textureFormatReadable(it)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!C.textureTypeReadable(ct)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=A.width-Y&&Q>=0&&Q<=A.height-Z&&B.readPixels(G,Q,Y,Z,Te.convert(it),Te.convert(ct),we)}finally{const We=J!==null?$.get(J).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(A,G,Q,Y,Z,we,Re,Pe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Be=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Re!==void 0&&(Be=Be[Re]),Be)if(G>=0&&G<=A.width-Y&&Q>=0&&Q<=A.height-Z){y.bindFramebuffer(B.FRAMEBUFFER,Be);const We=A.textures[Pe],it=We.format,ct=We.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Pe),!C.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!C.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const qe=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.bufferData(B.PIXEL_PACK_BUFFER,we.byteLength,B.STREAM_READ),B.readPixels(G,Q,Y,Z,Te.convert(it),Te.convert(ct),0);const wt=J!==null?$.get(J).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,wt);const $t=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await _v(B,$t,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,qe),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,we),B.deleteBuffer(qe),B.deleteSync($t),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,G=null,Q=0){const Y=Math.pow(2,-Q),Z=Math.floor(A.image.width*Y),we=Math.floor(A.image.height*Y),Re=G!==null?G.x:0,Pe=G!==null?G.y:0;ee.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,Q,0,0,Re,Pe,Z,we),y.unbindTexture()},this.copyTextureToTexture=function(A,G,Q=null,Y=null,Z=0,we=0){let Re,Pe,Be,We,it,ct,qe,wt,$t;const qt=A.isCompressedTexture?A.mipmaps[we]:A.image;if(Q!==null)Re=Q.max.x-Q.min.x,Pe=Q.max.y-Q.min.y,Be=Q.isBox3?Q.max.z-Q.min.z:1,We=Q.min.x,it=Q.min.y,ct=Q.isBox3?Q.min.z:0;else{const Zt=Math.pow(2,-Z);Re=Math.floor(qt.width*Zt),Pe=Math.floor(qt.height*Zt),A.isDataArrayTexture?Be=qt.depth:A.isData3DTexture?Be=Math.floor(qt.depth*Zt):Be=1,We=0,it=0,ct=0}Y!==null?(qe=Y.x,wt=Y.y,$t=Y.z):(qe=0,wt=0,$t=0);const Ct=Te.convert(G.format),En=Te.convert(G.type);let Ne;G.isData3DTexture?(ee.setTexture3D(G,0),Ne=B.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(ee.setTexture2DArray(G,0),Ne=B.TEXTURE_2D_ARRAY):(ee.setTexture2D(G,0),Ne=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const ii=y.getParameter(B.UNPACK_ROW_LENGTH),vt=y.getParameter(B.UNPACK_IMAGE_HEIGHT),Si=y.getParameter(B.UNPACK_SKIP_PIXELS),Yi=y.getParameter(B.UNPACK_SKIP_ROWS),Fr=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,qt.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,qt.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,We),y.pixelStorei(B.UNPACK_SKIP_ROWS,it),y.pixelStorei(B.UNPACK_SKIP_IMAGES,ct);const Xs=A.isDataArrayTexture||A.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(A.isDepthTexture){const Zt=$.get(A),Or=$.get(G),Ut=$.get(Zt.__renderTarget),Br=$.get(Or.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,Ut.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,Br.__webglFramebuffer);for(let qs=0;qs<Be;qs++)Xs&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(A).__webglTexture,Z,ct+qs),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,$.get(G).__webglTexture,we,$t+qs)),B.blitFramebuffer(We,it,Re,Pe,qe,wt,Re,Pe,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||$.has(A)){const Zt=$.get(A),Or=$.get(G);y.bindFramebuffer(B.READ_FRAMEBUFFER,z),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,U);for(let Ut=0;Ut<Be;Ut++)Xs?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Zt.__webglTexture,Z,ct+Ut):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Zt.__webglTexture,Z),Pt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Or.__webglTexture,we,$t+Ut):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Or.__webglTexture,we),Z!==0?B.blitFramebuffer(We,it,Re,Pe,qe,wt,Re,Pe,B.COLOR_BUFFER_BIT,B.NEAREST):Pt?B.copyTexSubImage3D(Ne,we,qe,wt,$t+Ut,We,it,Re,Pe):B.copyTexSubImage2D(Ne,we,qe,wt,We,it,Re,Pe);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Pt?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Ne,we,qe,wt,$t,Re,Pe,Be,Ct,En,qt.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(Ne,we,qe,wt,$t,Re,Pe,Be,Ct,qt.data):B.texSubImage3D(Ne,we,qe,wt,$t,Re,Pe,Be,Ct,En,qt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,we,qe,wt,Re,Pe,Ct,En,qt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,we,qe,wt,qt.width,qt.height,Ct,qt.data):B.texSubImage2D(B.TEXTURE_2D,we,qe,wt,Re,Pe,Ct,En,qt);y.pixelStorei(B.UNPACK_ROW_LENGTH,ii),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,vt),y.pixelStorei(B.UNPACK_SKIP_PIXELS,Si),y.pixelStorei(B.UNPACK_SKIP_ROWS,Yi),y.pixelStorei(B.UNPACK_SKIP_IMAGES,Fr),we===0&&G.generateMipmaps&&B.generateMipmap(Ne),y.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&ee.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ee.setTextureCube(A,0):A.isData3DTexture?ee.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ee.setTexture2DArray(A,0):ee.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){k=0,I=0,J=null,y.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}function vm(r,e){if(e===rv)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),r;if(e===jh||e===hg){let t=r.getIndex();if(t===null){const a=[],o=r.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);r.setIndex(a),t=r.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),r}const n=t.count-2,i=[];if(e===jh)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=r.clone();return s.setIndex(i),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),r}function jE(r){const e=new Map,t=new Map,n=r.clone();return Ig(r,n,function(i,s){e.set(s,i),t.set(i,s)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const s=i,a=e.get(i),o=a.skeleton.bones;s.skeleton=a.skeleton.clone(),s.bindMatrix.copy(a.bindMatrix),s.skeleton.bones=o.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),n}function Ig(r,e,t){t(r,e);for(let n=0;n<r.children.length;n++)Ig(r.children[n],e.children[n],t)}class e1 extends Gs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new s1(t)}),this.register(function(t){return new a1(t)}),this.register(function(t){return new m1(t)}),this.register(function(t){return new _1(t)}),this.register(function(t){return new g1(t)}),this.register(function(t){return new l1(t)}),this.register(function(t){return new c1(t)}),this.register(function(t){return new u1(t)}),this.register(function(t){return new h1(t)}),this.register(function(t){return new r1(t)}),this.register(function(t){return new f1(t)}),this.register(function(t){return new o1(t)}),this.register(function(t){return new p1(t)}),this.register(function(t){return new d1(t)}),this.register(function(t){return new n1(t)}),this.register(function(t){return new ym(t,mt.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ym(t,mt.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new x1(t)})}load(e,t,n,i){const s=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=Uo.extractUrlBase(e);a=Uo.resolveURL(c,this.path)}else a=Uo.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new id(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ng){try{a[mt.KHR_BINARY_GLTF]=new v1(e)}catch(f){i&&i(f);return}s=JSON.parse(a[mt.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new D1(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],h=s.extensionsRequired||[];switch(f){case mt.KHR_MATERIALS_UNLIT:a[f]=new i1;break;case mt.KHR_DRACO_MESH_COMPRESSION:a[f]=new y1(s,this.dracoLoader);break;case mt.KHR_TEXTURE_TRANSFORM:a[f]=new S1;break;case mt.KHR_MESH_QUANTIZATION:a[f]=new M1;break;default:h.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,s){n.parse(e,t,i,s)})}}function t1(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}function jt(r,e,t){const n=r.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}const mt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class n1{constructor(e){this.parser=e,this.name=mt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Je(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],ti);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Tg(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new sf(u),c.distance=f;break;case"spot":c=new zy(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class i1{constructor(){this.name=mt.KHR_MATERIALS_UNLIT}getMaterialType(){return wr}extendParams(e,t,n){const i=[];e.color=new Je(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],ti),e.opacity=a[3]}s.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",s.baseColorTexture,an))}return Promise.all(i)}}class r1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}}class s1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(i.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){const s=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new at(s,s)}return Promise.all(i)}}class a1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}}class o1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(i)}}class l1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SHEEN}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];if(t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){const s=n.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],ti)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,an)),n.sheenRoughnessTexture!==void 0&&i.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(i)}}class c1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&i.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(i)}}class u1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_VOLUME}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&i.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;const s=n.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(s[0],s[1],s[2],ti),Promise.all(i)}}class h1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_IOR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}}class f1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));const s=n.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(s[0],s[1],s[2],ti),n.specularColorTexture!==void 0&&i.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,an)),Promise.all(i)}}class d1{constructor(e){this.parser=e,this.name=mt.EXT_MATERIALS_BUMP}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&i.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(i)}}class p1{constructor(e){this.parser=e,this.name=mt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return jt(this.parser,e,this.name)!==null?dr:null}extendMaterialParams(e,t){const n=jt(this.parser,e,this.name);if(n===null)return Promise.resolve();const i=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&i.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(i)}}class m1{constructor(e){this.parser=e,this.name=mt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class _1{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class g1{constructor(e){this.parser=e,this.name=mt.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return n.loadTextureImage(e,a.source,l)}}class ym{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],s=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,f=i.byteStride,h=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,f,h,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*f);return a.decodeGltfBuffer(new Uint8Array(d),u,f,h,i.mode,i.filter),d})})}else return null}}class x1{constructor(e){this.name=mt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ti.TRIANGLES&&c.mode!==Ti.TRIANGLE_STRIP&&c.mode!==Ti.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],h=c[0].count,d=[];for(const p of f){const g=new ot,m=new X,_=new Ur,T=new X(1,1,1),w=new ay(p.geometry,p.material,h);for(let v=0;v<h;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&_.fromBufferAttribute(l.ROTATION,v),l.SCALE&&T.fromBufferAttribute(l.SCALE,v),w.setMatrixAt(v,g.compose(m,_,T));for(const v in l)if(v==="_COLOR_0"){const E=l[v];w.instanceColor=new nf(E.array,E.itemSize,E.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&p.geometry.setAttribute(v,l[v]);Vt.prototype.copy.call(w,p),this.parser.assignFinalMaterial(w),d.push(w)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const Ng="glTF",lo=12,Sm={JSON:1313821514,BIN:5130562};class v1{constructor(e){this.name=mt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,lo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ng)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-lo,s=new DataView(e,lo);let a=0;for(;a<i;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===Sm.JSON){const c=new Uint8Array(e,lo+a,o);this.content=n.decode(c)}else if(l===Sm.BIN){const c=lo+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class y1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=mt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const f=uf[u]||u.toLowerCase();o[f]=a[u]}for(const u in e.attributes){const f=uf[u]||u.toLowerCase();if(a[u]!==void 0){const h=n.accessors[e.attributes[u]],d=La[h.componentType];c[f]=d.name,l[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f,h){i.decodeDracoFile(u,function(d){for(const p in d.attributes){const g=d.attributes[p],m=l[p];m!==void 0&&(g.normalized=m)}f(d)},o,c,ti,h)})})}}class S1{constructor(){this.name=mt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class M1{constructor(){this.name=mt.KHR_MESH_QUANTIZATION}}class Ug extends Xa{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,i){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=i-t,f=(n-t)/u,h=f*f,d=h*f,p=e*c,g=p-c,m=-2*d+3*h,_=d-h,T=1-m,w=_-h+f;for(let v=0;v!==o;v++){const E=a[g+v+o],S=a[g+v+l]*u,M=a[p+v+o],x=a[p+v]*u;s[v]=T*E+w*S+m*M+_*x}return s}}const b1=new Ur;class T1 extends Ug{interpolate_(e,t,n,i){const s=super.interpolate_(e,t,n,i);return b1.fromArray(s).normalize().toArray(s),s}}const Ti={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},La={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Mm={9728:hn,9729:It,9984:rg,9985:ic,9986:vo,9987:sr},bm={33071:Pi,33648:Sc,10497:za},ku={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},uf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Yr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},E1={CUBICSPLINE:void 0,LINEAR:$o,STEP:Ko},zu={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function w1(r){return r.DefaultMaterial===void 0&&(r.DefaultMaterial=new nd({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ir})),r.DefaultMaterial}function xs(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(r,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(r.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function A1(r,e,t){let n=!1,i=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(i=!0),f.COLOR_0!==void 0&&(s=!0),n&&i&&s)break}if(!n&&!i&&!s)return Promise.resolve(r);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):r.attributes.position;a.push(h)}if(i){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):r.attributes.normal;o.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):r.attributes.color;l.push(h)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],h=c[2];return n&&(r.morphAttributes.position=u),i&&(r.morphAttributes.normal=f),s&&(r.morphAttributes.color=h),r.morphTargetsRelative=!0,r})}function R1(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function C1(r){let e;const t=r.extensions&&r.extensions[mt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Vu(t.attributes):e=r.indices+":"+Vu(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Vu(r.targets[n]);return e}function Vu(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function hf(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function P1(r){return r.search(/\.jpe?g($|\?)/i)>0||r.search(/^data\:image\/jpeg/)===0?"image/jpeg":r.search(/\.webp($|\?)/i)>0||r.search(/^data\:image\/webp/)===0?"image/webp":r.search(/\.ktx2($|\?)/i)>0||r.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const L1=new ot;class D1{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new t1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,s=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,s=o.indexOf("Firefox")>-1,a=s?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||s&&a<98?this.textureLoader=new Oy(this.options.manager):this.textureLoader=new Gy(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new id(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return xs(s,o,i),Ji(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,s=t.length;i<s;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,s=e.length;i<s;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const s=e(t[i]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":i=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[mt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(s,a){n.load(Uo.resolveURL(t.uri,i.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ku[i.type],o=La[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Xn(c,a,l))}const s=[];return i.bufferView!==void 0?s.push(this.getDependency("bufferView",i.bufferView)):s.push(null),i.sparse!==void 0&&(s.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=ku[i.type],c=La[i.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,h=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,p=i.normalized===!0;let g,m;if(d&&d!==f){const _=Math.floor(h/d),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+_+":"+i.count;let w=t.cache.get(T);w||(g=new c(o,_*d,i.count*d/u),w=new jv(g,d/u),t.cache.add(T,w)),m=new jf(w,l,h%d/u,p)}else o===null?g=new c(i.count*l):g=new c(o,h,i.count*l),m=new Xn(g,l,p);if(i.sparse!==void 0){const _=ku.SCALAR,T=La[i.sparse.indices.componentType],w=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,E=new T(a[1],w,i.sparse.count*_),S=new c(a[2],v,i.sparse.count*l);o!==null&&(m=new Xn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let M=0,x=E.length;M<x;M++){const b=E[M];if(m.setX(b,S[M*l]),l>=2&&m.setY(b,S[M*l+1]),l>=3&&m.setZ(b,S[M*l+2]),l>=4&&m.setW(b,S[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=p}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const i=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const h=(s.samplers||{})[a.sampler]||{};return u.magFilter=Mm[h.magFilter]||It,u.minFilter=Mm[h.minFilter]||sr,u.wrapS=bm[h.wrapS]||za,u.wrapT=bm[h.wrapT]||za,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==hn&&u.minFilter!==It,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(f){c=!0;const h=new Blob([f],{type:a.mimeType});return l=o.createObjectURL(h),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(h,d){let p=h;t.isImageBitmapLoader===!0&&(p=function(g){const m=new on(g);m.needsUpdate=!0,h(m)}),t.load(Uo.resolveURL(f,s.path),p,void 0,d)})}).then(function(f){return c===!0&&o.revokeObjectURL(l),Ji(f,a),f.userData.mimeType=a.mimeType||P1(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[mt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[mt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[mt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new vg,Gi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Uc,Gi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||s||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return nd}loadMaterial(e){const t=this,n=this.json,i=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[mt.KHR_MATERIALS_UNLIT]){const f=i[mt.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),c.push(f.extendParams(o,s,t))}else{const f=s.pbrMetallicRoughness||{};if(o.color=new Je(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;o.color.setRGB(h[0],h[1],h[2],ti),o.opacity=h[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",f.baseColorTexture,an)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=nr);const u=s.alphaMode||zu.OPAQUE;if(u===zu.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===zu.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==wr&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new at(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;o.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&a!==wr&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==wr){const f=s.emissiveFactor;o.emissive=new Je().setRGB(f[0],f[1],f[2],ti)}return s.emissiveTexture!==void 0&&a!==wr&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,an)),Promise.all(c).then(function(){const f=new a(o);return s.name&&(f.name=s.name),Ji(f,s),t.associations.set(f,{materials:e}),s.extensions&&xs(i,f,s),f})}createUniqueName(e){const t=Et.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function s(o){return n[mt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Tm(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=C1(c),f=i[u];if(f)a.push(f.promise);else{let h;c.extensions&&c.extensions[mt.KHR_DRACO_MESH_COMPRESSION]?h=s(c):h=Tm(new ni,c,t),i[u]={primitive:c,promise:h},a.push(h)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?w1(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let d=0,p=u.length;d<p;d++){const g=u[d],m=a[d];let _;const T=c[d];if(m.mode===Ti.TRIANGLES||m.mode===Ti.TRIANGLE_STRIP||m.mode===Ti.TRIANGLE_FAN||m.mode===void 0)_=s.isSkinnedMesh===!0?new iy(g,T):new bn(g,T),_.isSkinnedMesh===!0&&_.normalizeSkinWeights(),m.mode===Ti.TRIANGLE_STRIP?_.geometry=vm(_.geometry,hg):m.mode===Ti.TRIANGLE_FAN&&(_.geometry=vm(_.geometry,jh));else if(m.mode===Ti.LINES)_=new xg(g,T);else if(m.mode===Ti.LINE_STRIP)_=new Fc(g,T);else if(m.mode===Ti.LINE_LOOP)_=new uy(g,T);else if(m.mode===Ti.POINTS)_=new hy(g,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(_.geometry.morphAttributes).length>0&&R1(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),Ji(_,s),m.extensions&&xs(i,_,m),t.assignFinalMaterial(_),f.push(_)}for(let d=0,p=f.length;d<p;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return s.extensions&&xs(i,f[0],s),f[0];const h=new Vi;s.extensions&&xs(i,h,s),t.associations.set(h,{meshes:e});for(let d=0,p=f.length;d<p;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gn(Ms.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Bc(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,s=t.joints.length;i<s;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const s=i.pop(),a=i,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const f=a[c];if(f){o.push(f);const h=new ot;s!==null&&h.fromArray(s.array,c*16),l.push(h)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ed(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],s=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let f=0,h=i.channels.length;f<h;f++){const d=i.channels[f],p=i.samplers[d.sampler],g=d.target,m=g.node,_=i.parameters!==void 0?i.parameters[p.input]:p.input,T=i.parameters!==void 0?i.parameters[p.output]:p.output;g.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",_)),l.push(this.getDependency("accessor",T)),c.push(p),u.push(g))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const h=f[0],d=f[1],p=f[2],g=f[3],m=f[4],_=[];for(let w=0,v=h.length;w<v;w++){const E=h[w],S=d[w],M=p[w],x=g[w],b=m[w];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();const R=n._createAnimationTracks(E,S,M,x,b);if(R)for(let P=0;P<R.length;P++)_.push(R[P])}const T=new Cy(s,void 0,_);return Ji(T,i),T})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,i.mesh,s);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],f=c[1],h=c[2];h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,L1)});for(let d=0,p=f.length;d<p;d++)u.add(f[d]);if(u.userData.pivot!==void 0&&f.length>0){const d=u.userData.pivot,p=f[0];u.pivot=new X().fromArray(d),u.position.x-=d[0],u.position.y-=d[1],u.position.z-=d[2],p.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?i.createUniqueName(s.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(i.getDependency("camera",s.camera).then(function(c){return i._getNodeRef(i.cameraCache,s.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new gg:c.length>1?u=new Vi:c.length===1?u=c[0]:u=new Vt,u!==c[0])for(let f=0,h=c.length;f<h;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=a),Ji(u,s),s.extensions&&xs(n,u,s),s.matrix!==void 0){const f=new ot;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);if(!i.associations.has(u))i.associations.set(u,{});else if(s.mesh!==void 0&&i.meshCache.refs[s.mesh]>1){const f=i.associations.get(u);i.associations.set(u,{...f})}return i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,s=new Vi;n.name&&(s.name=i.createUniqueName(n.name)),Ji(s,n),n.extensions&&xs(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,f=l.length;u<f;u++){const h=l[u];h.parent!==null?s.add(jE(h)):s.add(h)}const c=u=>{const f=new Map;for(const[h,d]of i.associations)(h instanceof Gi||h instanceof on)&&f.set(h,d);return u.traverse(h=>{const d=i.associations.get(h);d!=null&&f.set(h,d)}),f};return i.associations=c(s),s})}_createAnimationTracks(e,t,n,i,s){const a=[],o=e.name?e.name:e.uuid,l=[];function c(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}Yr[s.path]===Yr.weights?(c(e),e.isGroup&&e.children.forEach(c)):l.push(o);let u;switch(Yr[s.path]){case Yr.weights:u=el;break;case Yr.rotation:u=tl;break;case Yr.translation:case Yr.scale:u=Rc;break;default:switch(n.itemSize){case 1:u=el;break;case 2:case 3:default:u=Rc;break}break}const f=i.interpolation!==void 0?E1[i.interpolation]:$o,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new u(l[d]+"."+Yr[s.path],t.array,h,f);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=hf(t.constructor),i=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)i[s]=t[s]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof tl?T1:Ug;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function I1(r,e,t){const n=e.attributes,i=new Ni;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new X(l[0],l[1],l[2]),new X(c[0],c[1],c[2])),o.normalized){const u=hf(La[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new X,l=new X;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,p=h.max;if(d!==void 0&&p!==void 0){if(l.setX(Math.max(Math.abs(d[0]),Math.abs(p[0]))),l.setY(Math.max(Math.abs(d[1]),Math.abs(p[1]))),l.setZ(Math.max(Math.abs(d[2]),Math.abs(p[2]))),h.normalized){const g=hf(La[h.componentType]);l.multiplyScalar(g)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}r.boundingBox=i;const a=new fr;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,r.boundingSphere=a}function Tm(r,e,t){const n=e.attributes,i=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){r.setAttribute(o,l)})}for(const a in n){const o=uf[a]||a.toLowerCase();o in r.attributes||i.push(s(n[a],o))}if(e.indices!==void 0&&!r.index){const a=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(a)}return _t.workingColorSpace!==ti&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${_t.workingColorSpace}" not supported.`),Ji(r,e),I1(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?A1(r,e.targets,t):r})}class N1 extends Fy{constructor(e){super(e),this.type=Ii}parse(e){const a=function(x,b){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(b||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(b||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(b||""))}},f=function(x,b,R){b=b||1024;let D=x.pos,V=-1,z=0,U="",k=String.fromCharCode.apply(null,new Uint16Array(x.subarray(D,D+128)));for(;0>(V=k.indexOf(`
`))&&z<b&&D<x.byteLength;)U+=k,z+=k.length,D+=128,k=String.fromCharCode.apply(null,new Uint16Array(x.subarray(D,D+128)));return-1<V?(x.pos+=z+V+1,U+k.slice(0,V)):!1},h=function(x){const b=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,V=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let U,k;for((x.pos>=x.byteLength||!(U=f(x)))&&a(1,"no header found"),(k=U.match(b))||a(3,"bad initial token"),z.valid|=1,z.programtype=k[1],z.string+=U+`
`;U=f(x),U!==!1;){if(z.string+=U+`
`,U.charAt(0)==="#"){z.comments+=U+`
`;continue}if((k=U.match(R))&&(z.gamma=parseFloat(k[1])),(k=U.match(P))&&(z.exposure=parseFloat(k[1])),(k=U.match(D))&&(z.valid|=2,z.format=k[1]),(k=U.match(V))&&(z.valid|=4,z.height=parseInt(k[1],10),z.width=parseInt(k[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||a(3,"missing format specifier"),z.valid&4||a(3,"missing image size specifier"),z},d=function(x,b,R){const P=b;if(P<8||P>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);P!==(x[2]<<8|x[3])&&a(3,"wrong scanline width");const D=new Uint8Array(4*b*R);D.length||a(4,"unable to allocate buffer space");let V=0,z=0;const U=4*P,k=new Uint8Array(4),I=new Uint8Array(U);let J=R;for(;J>0&&z<x.byteLength;){z+4>x.byteLength&&a(1),k[0]=x[z++],k[1]=x[z++],k[2]=x[z++],k[3]=x[z++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=P)&&a(3,"bad rgbe scanline format");let ie=0,L;for(;ie<U&&z<x.byteLength;){L=x[z++];const _e=L>128;if(_e&&(L-=128),(L===0||ie+L>U)&&a(3,"bad scanline data"),_e){const ze=x[z++];for(let Xe=0;Xe<L;Xe++)I[ie++]=ze}else I.set(x.subarray(z,z+L),ie),ie+=L,z+=L}const he=P;for(let _e=0;_e<he;_e++){let ze=0;D[V]=I[_e+ze],ze+=P,D[V+1]=I[_e+ze],ze+=P,D[V+2]=I[_e+ze],ze+=P,D[V+3]=I[_e+ze],V+=4}J--}return D},p=function(x,b,R,P){const D=x[b+3],V=Math.pow(2,D-128)/255;R[P+0]=x[b+0]*V,R[P+1]=x[b+1]*V,R[P+2]=x[b+2]*V,R[P+3]=1},g=function(x,b,R,P){const D=x[b+3],V=Math.pow(2,D-128)/255;R[P+0]=Tl.toHalfFloat(Math.min(x[b+0]*V,65504)),R[P+1]=Tl.toHalfFloat(Math.min(x[b+1]*V,65504)),R[P+2]=Tl.toHalfFloat(Math.min(x[b+2]*V,65504)),R[P+3]=Tl.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const _=h(m),T=_.width,w=_.height,v=d(m.subarray(m.pos),T,w);let E,S,M;switch(this.type){case Kn:M=v.length/4;const x=new Float32Array(M*4);for(let R=0;R<M;R++)p(v,R*4,x,R*4);E=x,S=Kn;break;case Ii:M=v.length/4;const b=new Uint16Array(M*4);for(let R=0;R<M;R++)g(v,R*4,b,R*4);E=b,S=Ii;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:T,height:w,data:E,header:_.string,gamma:_.gamma,exposure:_.exposure,type:S,colorSpace:ti,minFilter:It,magFilter:It,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}class U1 extends N1{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}}const Hu=16/9,F1=new e1,O1={vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0., 1.); }",fragmentShader:`
    precision highp float;
    uniform sampler2D uVideo, uVideoB;
    uniform vec2 uRes, uPan, uPanB;
    uniform float uAsp, uZoom, uZoomB, uMix, uDim, uReady, uAlpha;
    varying vec2 vUv;
    vec3 layer(sampler2D tex, vec2 pan, float zoom){
      vec2 uv = .5 + (vUv - .5 - pan) / zoom;
      float a = uRes.x / uRes.y;
      if (a > uAsp) uv.y = .5 + (uv.y - .5) * (uAsp / a); else uv.x = .5 + (uv.x - .5) * (a / uAsp);
      return texture2D(tex, uv).rgb;
    }
    void main(){
      vec3 col = layer(uVideo, uPan, uZoom);
      if (uMix > .001) col = mix(col, layer(uVideoB, uPanB, uZoomB), uMix);
      float vig = smoothstep(.5, 1.3, length(vUv - .5) * 1.5);
      col *= 1. - vig * .25 - uDim;
      gl_FragColor = vec4(col * uReady, uAlpha);
    }`};function B1(r){const e=r.image;if(!e||!e.width)return r;const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0);const i=n.getImageData(0,0,t.width,t.height),s=i.data;let a=0;for(let c=0;c<s.length;c+=4)a+=.299*s[c]+.587*s[c+1]+.114*s[c+2];a/=s.length/4;const o=205/Math.max(1,a);for(let c=0;c<s.length;c+=4){const u=Math.min(255,205+((.299*s[c]+.587*s[c+1]+.114*s[c+2])*o-205)*.55);s[c]=s[c+1]=s[c+2]=u}n.putImageData(i,0,0);const l=new jo(t);return l.colorSpace=r.colorSpace,l.flipY=r.flipY,l.wrapS=r.wrapS,l.wrapT=r.wrapT,l.anisotropy=r.anisotropy,l.userData.luma=t,l}const Fg={uni:null,rayures:(r,e)=>{const t=e/16;for(let n=0;n<16;n+=2)r.fillRect(n*t,0,t,e)},chevrons:(r,e)=>{const t=e/8;r.lineWidth=t*.42,r.strokeStyle=r.fillStyle;for(let n=-e;n<e*2;n+=t){r.beginPath();for(let i=0;i<=e;i+=t)r.lineTo(i,n+(i/t%2?0:t*.7));r.stroke()}},damier:(r,e)=>{const t=e/10;for(let n=0;n<10;n++)for(let i=0;i<10;i++)(n+i)%2&&r.fillRect(n*t,i*t,t,t)},pois:(r,e)=>{const t=e/8;for(let n=0;n<8;n++)for(let i=0;i<8;i++)r.beginPath(),r.arc(n*t+t/2+(i%2?t/2:0),i*t+t/2,t*.17,0,Math.PI*2),r.fill()}};function k1(r,e,t){const i=document.createElement("canvas");i.width=i.height=1024;const s=i.getContext("2d");s.fillStyle="#fff",s.fillRect(0,0,1024,1024),s.fillStyle="rgba(0,0,0,.42)",Fg[e](s,1024);const a=document.createElement("canvas");a.width=r.width,a.height=r.height;const o=a.getContext("2d");o.drawImage(r,0,0),o.globalCompositeOperation="multiply";const l=3,c=a.width/l,u=a.height/l;for(let h=0;h<l;h++)for(let d=0;d<l;d++)o.drawImage(i,h*c,d*u,c,u);const f=new jo(a);return f.colorSpace=t.colorSpace,f.flipY=t.flipY,f.wrapS=t.wrapS,f.wrapT=t.wrapT,f.anisotropy=t.anisotropy,f.userData.luma=r,f}function z1(r,e=.45){const t=document.createElement("canvas");t.width=t.height=256;const n=t.getContext("2d"),i=n.createRadialGradient(128,128,8,128,128,128);i.addColorStop(0,"rgba(0,0,0,1)"),i.addColorStop(.5,"rgba(0,0,0,.4)"),i.addColorStop(1,"rgba(0,0,0,0)"),n.fillStyle=i,n.fillRect(0,0,256,256);const s=new bn(new zs(r*2,r*2),new wr({map:new jo(t),transparent:!0,opacity:e,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.y=.003,s.renderOrder=1,s}function V1(r){const e=new Ni().setFromObject(r);r.position.y-=e.min.y;const t=e.getSize(new X),n=e.getCenter(new X);return r.position.x-=n.x,r.position.z-=n.z,t}async function H1(r,{rooms:e,videos:t,links:n=[],tracks:i,hdri:s="/hdri/brown_photostudio_02_1k.hdr",onProgress:a=()=>{}}){let o=!1;const l=new URLSearchParams(location.search),c=new QE({canvas:r,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:l.has("capture")});c.setPixelRatio(Math.min(devicePixelRatio,1.75)),c.outputColorSpace=an,c.toneMapping=zf,c.toneMappingExposure=1,c.shadowMap.enabled=!0,c.shadowMap.type=$_,c.autoClear=!1;const u=new of(c),f=await new Promise((H,K)=>new U1().load(s,q=>{H(u.fromEquirectangular(q).texture),q.dispose()},void 0,K));a(.1);const h=H=>{const K=new fy(H);return K.colorSpace=an,K.minFilter=K.magFilter=It,K.generateMipmaps=!1,K};let d=[...t.map(h),...n.map(h)];const p={zoom:1,panX:0,panY:0},g={zoom:1,panX:0,panY:0},m=new Mp,_=new sd,T=new bn(new zs(2,2),new Wi({...O1,transparent:!0,depthTest:!1,depthWrite:!1,uniforms:{uVideo:{value:d[0]},uVideoB:{value:d[0]},uRes:{value:new at(1,1)},uPan:{value:new at},uPanB:{value:new at},uAsp:{value:Hu},uZoom:{value:1},uZoomB:{value:1},uMix:{value:0},uDim:{value:0},uReady:{value:0},uAlpha:{value:1}}}));T.frustumCulled=!1,m.add(T);const w=T.material.uniforms,v=new Mp;v.environment=f,v.environmentIntensity=.55;const E=new Gn(60,1,.05,60),S=new bn(new zs(30,30),new py({opacity:.32}));S.rotation.x=-Math.PI/2,S.receiveShadow=!0,v.add(S);const M=new Tg(16777215,2);M.castShadow=!0,M.target.position.set(.5,0,-7),v.add(M.target),M.shadow.mapSize.set(2048,2048),M.shadow.camera.left=M.shadow.camera.bottom=-6,M.shadow.camera.right=M.shadow.camera.top=6,M.shadow.camera.far=24,M.shadow.bias=-4e-4,M.shadow.radius=3;const x=new By(16773858,11047034,.35);v.add(M,x);const b=new Vi;if(v.add(b),l.has("calib")){const H=new nS(14,14,16720384,16746564);H.position.z=-6,v.add(H);const K=(N,le,Ae)=>new Fc(new ni().setFromPoints([N,le]),new Uc({color:Ae})),q=new Vi;v.add(q);for(const[N,le]of[[-2.5,-3],[0,-5],[2.5,-3],[0,-8]]){const Ae=new bn(new Wa(1,1,1),new wr({color:65416,wireframe:!0}));Ae.position.set(N,.5,le),q.add(Ae)}q.add(K(new X(-60,0,-60),new X(60,0,-60),43775)),q.add(K(new X(-900,0,-900),new X(900,0,-900),16776960))}const R=[],P=e.flatMap((H,K)=>H.items.map(q=>({...q,room:K})));let D=0,V=P.reduce((H,K)=>H+1+(K.variants||[]).length,0);async function z(H,K){let q;try{q=await new Promise((Ie,De)=>F1.load(H.model,tt=>Ie(tt.scene),void 0,De))}catch(Ie){return console.warn("modèle illisible, ignoré :",H.model,Ie.message),null}const N=V1(q),le={},Ae=(K.pos[1]||0)<.25;return q.traverse(Ie=>{Ie.isMesh&&(Ie.castShadow=Ae,Ie.receiveShadow=!0,Ie.userData.item=K,le[Ie.material.name]=Ie.material,Ie.material.envMapIntensity=1)}),(H.tint||[]).forEach(Ie=>{const De=le[Ie.material];if(De){if(De.map)De.map=B1(De.map),De.needsUpdate=!0;else if(Ie.patterns){const tt=document.createElement("canvas");tt.width=tt.height=512;const B=tt.getContext("2d");B.fillStyle="#ccc",B.fillRect(0,0,512,512),De.map=new jo(tt),De.map.colorSpace=an,De.map.userData.luma=tt,De.needsUpdate=!0}De.color.set(Ie.options[0].hex)}}),{spec:H,m:q,mats:le,size:N}}V=P.length,await Promise.all(P.map(async H=>{const K=await z(H,H);if(D++,a(.1+.9*D/V),!K)return;const q=[K,...(H.variants||[]).map(De=>({spec:De,m:null,mats:null,size:null,pending:null}))],N=new Vi;N.position.set(...H.pos),N.rotation.y=H.rot||0;const le=new Vi;le.add(K.m),N.add(le);const Ae=z1(Math.max(K.size.x,K.size.z)*.8);Ae.material.opacity=0,N.add(Ae);let Ie=null;H.glow&&(Ie=new sf(H.glow.color,0,H.glow.distance||3,1.4),Ie.position.y=H.glow.y||K.size.y,N.add(Ie)),N.visible=!1,v.add(N),R.push({...H,group:N,inner:le,shadow:Ae,mats:K.mats,size:K.size,shown:!1,glowLight:Ie,variants:q,current:0})}));async function U(H,K){const q=H.variants[K];return q?q.m?q:(q.pending||(q.pending=z(q.spec,H).then(N=>N?(Object.assign(q,N),q):(q.broken=!0,null))),q.pending):null}let k=-1,I={...e[0].camera},J=1;const ie=l.has("room")?+l.get("room"):0;function L(H){H!==k&&(k=H,I={...e[H].camera},H===ie&&["fov","height","pitch","yaw","roll"].forEach(K=>{l.has(K)&&(I[K]=parseFloat(l.get(K)))}),E.position.set(0,I.height,0),J=1920/2/Math.tan(Ms.degToRad(I.fov)/2),w.uVideo.value=d[H],he(),R.forEach(K=>{K.room!==H&&(K.shown=!1,K.group.visible=!1,K.shadow.material.opacity=0)}),te())}function he(){const H=e[k],K=o&&H.night?H.night.sun:H.sun;M.position.set(...K.pos),M.color.set(K.color),M.intensity=K.intensity,x.color.set(o?5595786:16773858),x.groundColor.set(o?2760472:11047034),x.intensity=o?.08:.35,v.environmentIntensity=o?.06:.55,c.toneMappingExposure=o?.9:1,S.material.opacity=o?.22:.32,b.clear(),o&&H.night&&H.night.lights.forEach(q=>{const N=new sf(q.color,q.intensity*1.6,q.distance,1.4);N.position.set(...q.pos),b.add(N)}),R.forEach(q=>{q.glowLight&&(q.glowLight.intensity=o?q.glow.intensity*1.8:0)})}let _e=!1,ze=0;const Xe={v:0},He=new tS,j=new at;let fe=null;const oe=new X,O={zoom:1,panX:0,panY:0};function ae(){const H=r.clientWidth||innerWidth,K=r.clientHeight||innerHeight;c.setSize(H,K,!1),w.uRes.value.set(H,K),E.aspect=H/K,te()}function te(){const H=r.clientWidth||innerWidth,K=r.clientHeight||innerHeight,q=Math.tan(Ms.degToRad(I.fov)/2),N=H/K,le=N>=Hu?q/N:q/Hu;E.fov=Ms.radToDeg(2*Math.atan(le/p.zoom)),E.setViewOffset(H,K,-p.panX*H,p.panY*K,H,K),E.updateProjectionMatrix(),w.uZoom.value=p.zoom,w.uPan.value.set(p.panX,p.panY),w.uZoomB.value=g.zoom,w.uPanB.value.set(g.panX,g.panY)}addEventListener("resize",ae),ae(),L(0);function Le(){const H=i[k],K=t[k];if(!K)return;let q=0,N=0;if(H&&H.track.length){const le=Math.min(Math.max(K.currentTime*H.fps,0),H.track.length-1),Ae=Math.floor(le),Ie=le-Ae,De=Math.min(Ae+1,H.track.length-1);q=H.track[Ae][0]+(H.track[De][0]-H.track[Ae][0])*Ie,N=H.track[Ae][1]+(H.track[De][1]-H.track[Ae][1])*Ie}E.rotation.set(Ms.degToRad(I.pitch)+Math.atan(N/J),Ms.degToRad(I.yaw)+Math.atan(q/J),Ms.degToRad(I.roll),"YXZ")}const pe=H=>R.find(K=>K.id===H);return{camera:E,setRoom:L,ready(){w.uReady.value=1},setFootage(H){o=!!H.night,t=H.videos,n=H.links||[],i=H.tracks,d.forEach(K=>K.dispose()),d=[...t.map(h),...n.map(h)],w.uVideo.value=d[k],w.uVideoB.value=d[k],he()},tick(){const H=_e?1:.06;p.zoom+=(O.zoom-p.zoom)*H,p.panX+=(O.panX-p.panX)*H,p.panY+=(O.panY-p.panY)*H,w.uDim.value=Xe.v+ze,te(),Le(),c.clear(),w.uAlpha.value=1,c.render(m,_),c.render(v,E),w.uMix.value>.002&&(w.uAlpha.value=w.uMix.value,c.render(m,_))},setDolly(H,K=0,q=0,N=!1){O.zoom=H,O.panX=K,O.panY=q,_e=N},setBlend(H,K,q=1,N=0,le=0,Ae=0){w.uMix.value=K,ze=Ae,H>=0&&d[H]&&(w.uVideoB.value=d[H]),g.zoom=q,g.panX=N,g.panY=le},setDim(H,K=.8){je.to(Xe,{v:H,duration:K,overwrite:!0})},show(H,K){const q=pe(H);!q||q.shown===K||(q.shown=K,K?(q.group.visible=!0,je.killTweensOf([q.inner.position,q.inner.scale,q.shadow.material]),q.inner.position.y=.55,q.inner.scale.setScalar(.92),je.to(q.inner.position,{y:0,duration:1.1,ease:"bounce.out"}),je.to(q.inner.scale,{x:1,y:1,z:1,duration:.9,ease:"power3.out"}),je.to(q.shadow.material,{opacity:.45,duration:.9,delay:.3})):(je.killTweensOf([q.inner.position,q.inner.scale,q.shadow.material]),je.to(q.inner.position,{y:.6,duration:.5,ease:"power2.in",onComplete:()=>{q.group.visible=!1}}),je.to(q.inner.scale,{x:.9,y:.9,z:.9,duration:.5,ease:"power2.in"}),je.to(q.shadow.material,{opacity:0,duration:.3})))},anchor(H){const K=pe(H),q=new Ni().setFromObject(K.group);return oe.set((q.min.x+q.max.x)/2,q.max.y,(q.min.z+q.max.z)/2).project(E),{x:(oe.x+1)/2,y:(1-oe.y)/2,visible:K.shown}},focusDolly(H){const K=pe(H),q=new Ni().setFromObject(K.group),N=p.zoom,le=p.panX,Ae=p.panY;p.zoom=1,p.panX=0,p.panY=0,te(),q.getCenter(oe).project(E),p.zoom=N,p.panX=le,p.panY=Ae,te();const Ie=1.5,De=oe.x/2,tt=oe.y/2,B=innerWidth>760?-.16:0;O.zoom=Ie,O.panX=-(De*Ie)+B,O.panY=-(tt*Ie)-(innerWidth>760?.02:.12)},hover(H,K){j.set(H/innerWidth*2-1,-(K/innerHeight)*2+1),He.setFromCamera(j,E);const q=He.intersectObjects(R.filter(le=>le.shown).map(le=>le.group),!0).find(le=>le.object.userData.item),N=q?q.object.userData.item:null;return N!==fe&&(R.forEach(le=>Object.values(le.mats).forEach(Ae=>je.to(Ae.emissive,{r:0,g:0,b:0,duration:.35}))),N&&Object.values(pe(N.id).mats).forEach(le=>je.to(le.emissive,{r:.16,g:.09,b:.04,duration:.35})),fe=N),N?pe(N.id):null},floorPoint(H,K){j.set(H/innerWidth*2-1,-(K/innerHeight)*2+1),He.setFromCamera(j,E);const q=new X;return He.ray.intersectPlane(new $r(new X(0,1,0),0),q)?q:null},moveTo(H,K,q){const N=pe(H);N.group.position.x=K,N.group.position.z=q},positionOf(H){return pe(H).group.position},rotate(H,K){pe(H).group.rotation.y+=K},prepare(H){const K=pe(H);K&&K.variants.forEach((q,N)=>U(K,N))},async setVariant(H,K){const q=pe(H);if(!q||!q.variants[K]||!await U(q,K))return null;if(K!==q.current){const N=q.variants[q.current],le=q.variants[K];q.current=K,q.mats=le.mats,q.size=le.size;const Ae=N.m;je.to(Ae.scale,{x:.86,y:.86,z:.86,duration:.3,ease:"power2.in"}),je.to(Ae.position,{y:Ae.position.y+.25,duration:.3,ease:"power2.in",onComplete:()=>{q.inner.remove(Ae),Ae.scale.setScalar(1),Ae.position.y-=.25}});const Ie=Math.max(le.size.x,le.size.z)/Math.max(N.size.x,N.size.z);je.to(q.shadow.scale,{x:q.shadow.scale.x*Ie,y:q.shadow.scale.y*Ie,duration:.6,delay:.25}),le.m.scale.setScalar(.9),le.m.position.y=.5,je.delayedCall(.22,()=>{q.inner.add(le.m),je.to(le.m.position,{y:0,duration:1,ease:"bounce.out"}),je.to(le.m.scale,{x:1,y:1,z:1,duration:.8,ease:"power3.out"})}),R.filter(De=>De.on===q.id).forEach(De=>je.to(De.group.position,{y:le.size.y,duration:.9,delay:.25,ease:"power3.out"}))}return q.variants[K].spec},setPattern(H,K,q){const N=pe(H),le=N&&N.mats[K];if(!le||!le.map||!le.map.userData.luma)return;const Ae=le.map.userData.luma,Ie=le.map;Fg[q]?le.map=k1(Ae,q,Ie):(le.map=new jo(Ae),le.map.colorSpace=Ie.colorSpace,le.map.flipY=Ie.flipY,le.map.wrapS=Ie.wrapS,le.map.wrapT=Ie.wrapT,le.map.anisotropy=Ie.anisotropy,le.map.userData.luma=Ae),Ie.dispose(),le.needsUpdate=!0},setTint(H,K,q){const N=pe(H),le=N&&N.mats[K];le&&je.to(le.color,{...new Je(q),duration:.6,ease:"power2.out"})}}}async function Em({clips:r,links:e=[],onProgress:t=()=>{}}){const n=document.createElement("div");n.className="scrub",document.body.prepend(n);let i=0;const s=async(S,M)=>{const x=await fetch(S.src,{method:"HEAD"}).catch(()=>null);if(!x||!x.ok||!(x.headers.get("content-type")||"").startsWith("video"))return console.warn("clip absent, ignoré :",S.src),i++,t(i/r.length),null;const b=document.createElement("video");b.muted=!0,b.playsInline=!0,b.preload="auto",b.defaultMuted=!0,b.className="scrub-video",S.poster&&(b.poster=S.poster);const R=window.innerWidth<900&&S.src.endsWith(".mp4")?S.src.replace(/\.mp4$/,".720.mp4"):null,D=await(await(R?fetch(R).then(V=>V.ok&&(V.headers.get("content-type")||"").startsWith("video")?V:fetch(S.src)):fetch(S.src))).blob();return b.src=URL.createObjectURL(D),await new Promise(V=>{b.addEventListener("loadedmetadata",V,{once:!0}),b.load()}),i++,t(i/r.length),b.dataset.clip=M,b},a=[...r,...e],o=(await Promise.all(a.map(s))).filter(Boolean),l=o.filter(S=>+S.dataset.clip<r.length),c=o.filter(S=>+S.dataset.clip>=r.length);o.forEach(S=>n.append(S));const u=l.map(S=>r[+S.dataset.clip].duration||S.duration),f=u.reduce((S,M)=>S+M,0),h=()=>{o.forEach(S=>{S.play().then(()=>S.pause()).catch(()=>{})}),window.removeEventListener("touchstart",h)};window.addEventListener("touchstart",h,{passive:!0}),await Promise.all(o.map(S=>new Promise(M=>{if(S.readyState>=2&&S.currentTime>0)return M();const x=()=>{S.removeEventListener("seeked",x),M()};S.addEventListener("seeked",x),setTimeout(x,1500),S.currentTime=.04})));let d=0,p=0,g=0,m=0;const _=S=>{S!==g&&(l[g].classList.remove("on"),l[S].classList.add("on"),g=S)};l[0].classList.add("on"),o.forEach(S=>{S.dataset.busy="0",S.addEventListener("seeked",()=>{S.dataset.busy="0"})});let T=0;const w=(S,M)=>{const x=Math.min(Math.max(M,0),S.duration-.04);S.dataset.busy==="1"&&performance.now()-T>300&&(S.dataset.busy="0"),!(S.dataset.busy==="1"||S.seeking)&&Math.abs(S.currentTime-x)>.012&&(S.dataset.busy="1",T=performance.now(),S.currentTime=x)},v=S=>{let M=0,x=S;for(;M<u.length-1&&x>u[M];)x-=u[M],M++;_(M),w(l[M],Math.min(x,u[M]-.04))},E=()=>{d+=(p-d)*.12,Math.abs(p-d)<.002&&(d=p),v(d),m=requestAnimationFrame(E)};return m=requestAnimationFrame(E),{total:f,durations:u,videos:l,linkVideos:c,seekLink(S,M){const x=c[S];x&&w(x,Math.min(Math.max(M,0),1)*(x.duration-.05))},seek(S){p=Math.min(Math.max(S,0),1)*f},jump(S){p=d=S*f,v(d)},time:()=>d,destroy(){cancelAnimationFrame(m),l.forEach(S=>URL.revokeObjectURL(S.src)),n.remove()}}}je.registerPlugin(st);const rt=r=>document.getElementById(r),Gu=(r,e)=>(Bf(r),e.forEach(t=>r.append(kt("span",{class:"ln"},kt("i",{text:t})))),r),G1=r=>`${r.toLocaleString("fr-FR")} €`,cc=xn.flatMap((r,e)=>r.items.map(t=>({...t,room:e})));function W1(){document.title=zr.brand,rt("loader-brand").textContent=zr.brand,rt("brand").textContent=zr.brand,zr.nav.forEach(([e,t])=>rt("nav").append(kt("a",{href:e,text:t}))),rt("cta").textContent=zr.cta.label,rt("cta").href=zr.cta.href,rt("hero-kicker").textContent=nu.kicker,Gu(rt("hero-title"),nu.title),rt("hero-text").textContent=nu.text,cc.forEach(e=>rt("captions").append(kt("div",{class:"caption",id:`cap-${e.id}`},kt("i"),kt("div",{},Gu(kt("h2",{class:"ctitle"}),e.caption),kt("p",{text:e.text}))))),xn.forEach((e,t)=>rt("rooms-nav").append(kt("button",{type:"button",text:e.name,dataset:{room:t}}))),rt("ct-kicker").textContent=js.kicker,Gu(rt("ct-title"),js.title),rt("ct-text").textContent=js.text;const r=rt("ct-mail");r.textContent=js.mail,r.href=`mailto:${js.mail}`,rt("ct-address").textContent=js.address,rt("foot").append(kt("span",{text:`© ${new Date().getFullYear()} ${zr.brand}`}),kt("span",{text:zr.footer}))}function X1(r){const e=rt("room-index");Bf(e),xn[r].items.forEach(t=>e.append(kt("button",{type:"button",text:t.name,dataset:{id:t.id}})))}function q1(){const r=rt("cursor"),e=rt("cursor-label"),t={x:innerWidth/2,y:innerHeight/2},n={x:t.x,y:t.y};let i=null;return addEventListener("pointermove",s=>{t.x=s.clientX,t.y=s.clientY},{passive:!0}),je.ticker.add(()=>{let s=t.x,a=t.y;if(i){const o=i.getBoundingClientRect();s=o.left+o.width/2+(t.x-o.left-o.width/2)*.35,a=o.top+o.height/2+(t.y-o.top-o.height/2)*.35}n.x+=(s-n.x)*.22,n.y+=(a-n.y)*.22,r.style.transform=`translate(${n.x}px, ${n.y}px) translate(-50%, -50%)`}),document.querySelectorAll("[data-magnet]").forEach(s=>{s.addEventListener("pointerenter",()=>{i=s,r.classList.add("hide"),je.to(s,{scale:1.06,duration:.4,ease:"power3.out"})}),s.addEventListener("pointermove",a=>{const o=s.getBoundingClientRect();je.to(s,{x:(a.clientX-o.left-o.width/2)*.25,y:(a.clientY-o.top-o.height/2)*.25,duration:.5,ease:"power3.out"})}),s.addEventListener("pointerleave",()=>{i=null,r.classList.remove("hide"),je.to(s,{x:0,y:0,scale:1,duration:.7,ease:"elastic.out(1, .5)"})})}),{setLabel(s){e.textContent=s,r.classList.toggle("big",!!s)}}}function Y1(){document.querySelectorAll(".contact .display").forEach(r=>je.from(r.querySelectorAll(".ln i"),{yPercent:105,duration:1.2,ease:"expo.out",stagger:.09,scrollTrigger:{trigger:r,start:"top 85%",once:!0}})),document.querySelectorAll(".contact .kicker, .contact .lead, .mail, .address").forEach(r=>je.from(r,{y:24,opacity:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:r,start:"top 90%",once:!0}}))}W1();const co=q1(),Vc=new Lx({lerp:.085,smoothWheel:!0});Vc.on("scroll",st.update);je.ticker.add(r=>Vc.raf(r*1e3));je.ticker.lagSmoothing(0);document.querySelectorAll('a[href^="#"]').forEach(r=>r.addEventListener("click",e=>{const t=document.querySelector(r.getAttribute("href"));t&&(e.preventDefault(),Vc.scrollTo(t,{duration:1.5}))}));(async()=>{const r=rt("loader-bar");let[e,t]=await Promise.all([Em({clips:xn.map(O=>({src:O.video,poster:O.poster})),links:[{src:Ci.video,poster:Ci.poster}],onProgress:O=>je.to(r,{scaleX:O*.3,duration:.4})}),Promise.all(xn.map(O=>fetch(O.track).then(ae=>ae.json())))]);const n=await H1(rt("gl"),{rooms:xn,videos:e.videos,links:e.linkVideos,tracks:t,hdri:Ix,onProgress:O=>je.to(r,{scaleX:.3+O*.7,duration:.4})}),i={scrub:e,tracks:t},s=xn.length;e.jump(.002/xn.length+.003);let a=0,o=null,l=null,c=-1;const u=rt("top");let f=!0;const h=Object.fromEntries(cc.map(O=>[O.id,rt(`cap-${O.id}`)]));Object.values(h).forEach(O=>{je.set(O,{autoAlpha:0}),je.set(O.querySelectorAll(".ln i"),{yPercent:105})});let d=null;function p(O){O!==d&&(d&&(je.to(h[d],{autoAlpha:0,duration:.4,overwrite:!0}),je.to(h[d].querySelectorAll(".ln i"),{yPercent:-105,duration:.4,overwrite:!0})),d=O,O&&(je.fromTo(h[O],{autoAlpha:0,y:14},{autoAlpha:1,y:0,duration:.8,delay:.35,ease:"power3.out",overwrite:!0}),je.fromTo(h[O].querySelectorAll(".ln i"),{yPercent:105},{yPercent:0,duration:1,delay:.35,ease:"expo.out",stagger:.08,overwrite:!0})))}const g=rt("room-title"),m=rt("rt-name"),_=rt("rt-kicker"),T=.16,w=.9,v=1.05,E=1.2,S=[.48,.4],M=O=>Math.min(Math.max(O,0),1),x=(O,ae,te)=>{const Le=M((te-O)/(ae-O));return Le*Le*(3-2*Le)},b=O=>({zoom:1.18+.04*O,panX:.09-.18*O,panY:-.01});function R(O){const ae=O*e.total;let te=0,Le=0;for(;te<e.durations.length-1&&ae>Le+e.durations[te];)Le+=e.durations[te],te++;return{i:te,pl:Math.min(Math.max((ae-Le)/e.durations[te],0),1)}}function P(O){a=O;const ae=O<.012;ae!==f&&(f=ae,je.to(u,{autoAlpha:ae?1:0,y:ae?0:-30,duration:ae?.9:.6,ease:ae?"expo.out":"power2.in",overwrite:!0}));const{i:te,pl:Le}=R(O);te!==c&&(c=te,n.setRoom(te),X1(te),_e(),rt("rooms-nav").querySelectorAll("button").forEach(le=>le.classList.toggle("on",+le.dataset.room===te)));const pe=xn[te];let H=null;pe.items.forEach(le=>{const Ae=Le>=le.at;n.show(le.id,Ae),Ae&&(H=le)}),H!==l&&(l=H,o&&(!H||pe.items.indexOf(o)>pe.items.indexOf(H))&&_e());const K=te<xn.length-1?M((Le-(1-T))/T):0,q=te>0?M(1-Le/T):0,N=K>0?K*.5:q>0?1-q*.5:-1;if(p(H&&Le-H.at<.11&&!o&&N<0?H.id:null),N<0)n.setBlend(-1,0),o||n.setDolly(1.18+.04*Le,.09-.18*Le,-.01),g.style.opacity=0,g.style.visibility="hidden",rt("room-index").style.opacity="";else{const le=(K>0?x(0,.42,N):1-x(.78,1,N))*w,Ae=b(Le);n.setDolly(Ae.zoom+le,Ae.panX,Ae.panY,!0);const Ie=x(.1,.34,N)*(1-x(.8,.96,N)),De=x(.46,.8,N),tt=v+E*De;n.setBlend(s,Ie,tt,(.5-S[0])*tt*De,(S[1]-.5)*tt*De),e.seekLink(0,x(.1,.78,N));const B=K>0?xn[te+1]:xn[te];m.textContent=B.name,_.textContent="Vous entrez dans";const Ft=x(.28,.46,N)*(1-x(.62,.82,N));g.style.opacity=Ft,g.style.visibility=Ft>.01?"visible":"hidden",rt("room-index").style.opacity=String(1-x(0,.3,N))}e.seek(O)}st.create({trigger:".room",start:"top top",end:`+=${1e3*xn.length}%`,pin:!0,scrub:!0,onUpdate:O=>P(O.progress),onLeave:()=>n.setDim(.4),onEnterBack:()=>n.setDim(0)}),je.ticker.add(()=>{if(!document.hidden){if(d){const O=h[d];O.classList.remove("flip"),O.style.left="",O.style.top=""}n.tick()}});const D=()=>st.getAll().find(O=>O.pin),V=(O,ae)=>{const te=D();Vc.scrollTo(te.start+O*(te.end-te.start),{duration:1.6,onComplete:ae})},z=O=>e.durations.slice(0,O).reduce((ae,te)=>ae+te,0)/e.total;rt("rooms-nav").addEventListener("click",O=>{const ae=O.target.closest("button");ae&&V(z(+ae.dataset.room)+.01)});const U=rt("hit"),k=rt("panel"),I={on:!1,mode:null,x0:0,y0:0,moved:!1,off:null};U.addEventListener("pointermove",O=>{if(I.on&&I.moved)return;const ae=n.hover(O.clientX,O.clientY);co.setLabel(ae?o&&o.id===ae.id?"Déplacer":"Composer":o?"Tourner":"")}),U.addEventListener("pointerleave",()=>co.setLabel(""));const J=O=>O.variant?O.variants[O.variant-1]:O,ie=[["uni","Uni"],["rayures","Rayures"],["chevrons","Chevrons"],["damier","Damier"],["pois","Pois"]];function L(O,ae=!0){o=O;const te=J(O);rt("panel-name").textContent=te.name;const Le=rt("panel-rows");if(Bf(Le),O.variants&&O.variants.length){const H=kt("div",{class:"swatch-row"},kt("span",{class:"lab",text:"Modèle"}));[O,...O.variants].forEach((K,q)=>H.append(kt("button",{class:`opt${(O.variant||0)===q?" on":""}`,type:"button",text:K.name,dataset:{variant:q}}))),Le.append(H)}O.chosenBy=O.chosenBy||{},O.patternBy=O.patternBy||{};const pe=O.variant||0;O.chosen=O.chosenBy[pe]=O.chosenBy[pe]||te.tint.map(()=>0),O.pattern=O.patternBy[pe]=O.patternBy[pe]||te.tint.map(()=>"uni"),te.tint.forEach((H,K)=>{const q=kt("div",{class:"swatch-row"},kt("span",{class:"lab",text:H.label}));if(H.options.forEach((N,le)=>q.append(kt("button",{class:`swatch${O.chosen[K]===le?" on":""}`,type:"button","aria-label":N.name,dataset:{row:K,i:le}},kt("i",{style:`--sw:${N.hex}`})))),q.append(kt("span",{class:"swatch-name",text:H.options[O.chosen[K]].name})),Le.append(q),H.patterns){const N=kt("div",{class:"swatch-row"},kt("span",{class:"lab",text:"Motif"}));ie.forEach(([le,Ae])=>N.append(kt("button",{class:`opt${O.pattern[K]===le?" on":""}`,type:"button",text:Ae,dataset:{row:K,pattern:le}}))),Le.append(N)}}),!te.tint.length&&!(O.variants&&O.variants.length)&&Le.append(kt("p",{class:"panel-note",text:"Pas d’option, il est parfait comme ça."})),he(),k.setAttribute("aria-hidden","false"),ae&&je.fromTo(k,{autoAlpha:0,x:24},{autoAlpha:1,x:0,duration:.6,ease:"power3.out",overwrite:!0}),ae&&(n.focusDolly(O.id),n.prepare(O.id)),rt("room-index").querySelectorAll("button").forEach(H=>H.classList.toggle("on",H.dataset.id===O.id)),je.to("#room-index, #hint, #rooms-nav",{autoAlpha:0,duration:.3}),je.to("#panel-hint",{autoAlpha:1,duration:.5,delay:.3}),p(null),co.setLabel("")}function he(){const O=o;if(!O)return;const ae=J(O),te=ae.price+ae.tint.reduce((Le,pe,H)=>Le+(pe.options[O.chosen[H]].price||0),0);rt("panel-price").textContent=ae.price?G1(te):"Offert"}function _e(){o&&(o=null,k.setAttribute("aria-hidden","true"),je.to(k,{autoAlpha:0,x:24,duration:.4,ease:"power2.in",overwrite:!0}),rt("room-index").querySelectorAll("button").forEach(O=>O.classList.remove("on")),je.to("#room-index, #hint, #rooms-nav",{autoAlpha:1,duration:.4}),je.to("#panel-hint",{autoAlpha:0,duration:.2}),P(a))}U.addEventListener("pointerdown",O=>{if(I.on=!0,I.moved=!1,I.x0=O.clientX,I.y0=O.clientY,I.mode=null,o){const ae=n.hover(O.clientX,O.clientY);if(ae&&ae.id===o.id){const te=n.floorPoint(O.clientX,O.clientY),Le=n.positionOf(o.id);I.mode="move",I.off=te?{x:Le.x-te.x,z:Le.z-te.z}:{x:0,z:0}}else I.mode="rotate"}U.setPointerCapture(O.pointerId)}),U.addEventListener("pointermove",O=>{if(I.on&&(Math.hypot(O.clientX-I.x0,O.clientY-I.y0)>4&&(I.moved=!0),!(!I.moved||!o)))if(I.mode==="move"){const ae=n.floorPoint(O.clientX,O.clientY);ae&&n.moveTo(o.id,ae.x+I.off.x,ae.z+I.off.z),co.setLabel("Déplacer")}else I.mode==="rotate"&&(n.rotate(o.id,(O.clientX-I.x0)*.012),I.x0=O.clientX,co.setLabel("Tourner"))});const ze=O=>{if(!I.on)return;if(I.on=!1,I.moved){o&&n.focusDolly(o.id);return}const ae=n.hover(O.clientX,O.clientY);ae?L(cc.find(te=>te.id===ae.id)):o&&_e()};U.addEventListener("pointerup",ze),U.addEventListener("pointercancel",ze),rt("panel-close").addEventListener("click",_e),addEventListener("keydown",O=>{O.key==="Escape"&&_e()}),rt("room-index").addEventListener("click",O=>{const ae=O.target.closest("button");if(!ae)return;const te=cc.find(H=>H.id===ae.dataset.id),{i:Le,pl:pe}=R(a);Le!==te.room||pe<te.at?V(z(te.room)+(te.at+.02)*e.durations[te.room]/e.total,()=>L(te)):L(te)}),rt("panel-rows").addEventListener("click",O=>{if(!o)return;const ae=O.target.closest(".opt");if(ae&&ae.dataset.variant!==void 0){const K=+ae.dataset.variant,q=o;if(K===(q.variant||0))return;ae.classList.add("busy"),n.setVariant(q.id,K).then(N=>{ae.classList.remove("busy"),!(!N||o!==q)&&(q.variant=K,L(q,!1),J(q).tint.forEach((le,Ae)=>{n.setTint(q.id,le.material,le.options[q.chosen[Ae]].hex),le.patterns&&n.setPattern(q.id,le.material,q.pattern[Ae])}))});return}if(ae&&ae.dataset.pattern){const K=+ae.dataset.row,q=J(o).tint[K];o.pattern[K]=ae.dataset.pattern,ae.parentElement.querySelectorAll(".opt").forEach(N=>N.classList.toggle("on",N===ae)),n.setPattern(o.id,q.material,ae.dataset.pattern);return}const te=O.target.closest(".swatch");if(!te)return;const Le=+te.dataset.row,pe=+te.dataset.i,H=J(o).tint[Le];o.chosen[Le]=pe,te.parentElement.querySelectorAll(".swatch").forEach(K=>K.classList.toggle("on",K===te)),te.parentElement.querySelector(".swatch-name").textContent=H.options[pe].name,n.setTint(o.id,H.material,H.options[pe].hex),he()});const Xe=rt("mode");let He=!1,j=null;async function fe(){const[O,ae]=await Promise.all([Em({clips:xn.map(te=>({src:te.night.video,poster:te.night.poster})),links:[{src:Ci.night.video,poster:Ci.night.poster}]}),Promise.all(xn.map(te=>fetch(te.night.track).then(Le=>Le.json()).catch(()=>null)))]);if(O.videos.length!==xn.length||!O.linkVideos.length){console.warn("jeu de nuit incomplet, bascule désactivée");return}O.jump(.002/xn.length+.003),j={scrub:O,tracks:ae},Xe.disabled=!1}function oe(O){O===He||O&&!j||(He=O,Xe.setAttribute("aria-pressed",String(O)),Xe.querySelector("span").textContent=O?"Jour":"Nuit",_e(),n.setDim(1,.35),je.delayedCall(.4,()=>{document.body.classList.toggle("night",O);const ae=O?j:i;e=ae.scrub,t=ae.tracks,e.jump(a),n.setFootage({videos:e.videos,links:e.linkVideos,tracks:t,night:O}),c=-1,P(a),n.setDim(0,.9)}))}Xe.addEventListener("click",()=>oe(!He)),Y1(),st.refresh(),P(0),je.timeline().to(r,{scaleX:1,duration:.3}).call(()=>n.ready()).to(".loader",{opacity:0,duration:1,ease:"power2.inOut"},"+=0.2").set(".loader",{display:"none"}).from(".top",{y:-14,opacity:0,duration:.9,ease:"power3.out"},"-=0.5").from("#hero-kicker",{opacity:0,y:10,duration:.8},"-=0.6").from("#hero-title .ln i",{yPercent:105,duration:1.3,ease:"expo.out",stagger:.1},"-=0.7").from("#hero-text, .scroll-hint, #hint, #rooms-nav",{opacity:0,duration:.8},"-=0.5").call(fe)})();
