(()=>{"use strict";var t={62:(t,e,i)=>{var s,o;i.d(e,{bg:()=>w});var n=function(){};function h(){clearInterval(o)}function r(t){n=t}function l(t){h(),o=setInterval((function(){n()}),1e3/t)}function a(t,e,i){var s=(t.style.transform||"").split(/\) /gm),o=!1;s=s.map((function(t){return t.length&&")"!=t.charAt(t.length-1)&&(t+=")"),-1!=t.indexOf(e)?(o=!0,e+"("+i+")"):t})),o||s.push(e+"("+i+")"),t.style.transform=s.join(" ").trim()}function p(t){window.addEventListener("keydown",(function(e){return t(e.keyCode||e.which,e)}))}const u=function(){function t(t,e){void 0===t&&(t="div"),this.initParent(e&&e.parent),"object"==typeof this.parent?(this.elm=document.createElement(t),this.elm.style.opacity="1",this.parent.appendChild(this.elm)):this.elm=document.querySelector(this.parent),"input"==t&&this.elm.setAttribute("type","text"),this.isCircle=!1,this.x=0,this.y=0,this._width=0,this._height=0}return t.prototype.initParent=function(e){void 0===e&&(e=null),this.parent=e||(s instanceof t?s.elm:document.body)},t.prototype.elmType=function(){return this.elm instanceof HTMLDivElement?"div":this.elm instanceof HTMLInputElement?"input":null},t.prototype.style=function(t){return window.getComputedStyle(this.elm).getPropertyValue(t)},t.prototype.hide=function(){return this.elm.style.display="none",this},t.prototype.show=function(){return this.elm.style.display="block",this},t.prototype.text=function(t,e,i,s){return void 0===t&&(t=null),void 0===e&&(e=null),void 0===i&&(i=null),void 0===s&&(s=null),this.elm instanceof HTMLInputElement?this.elm.value=t:this.elm.innerText=t,e&&(this.elm.style.color=e),i&&(this.elm.style.fontSize="number"==typeof i?i+"px":i),s&&(this.elm.style.textAlign=s),t||e||i||s?this:{value:this.elm instanceof HTMLInputElement?this.elm.value:this.elm.innerText,color:this.elm.style.color||void 0,size:this.elm.style.fontSize||void 0,dir:this.elm.style.textAlign||void 0}},t.prototype.bg_color=function(t){return t?(this.elm.style.background=t,this):this.elm.style.background},t.prototype.width=function(){return this._width},t.prototype.setWidth=function(t,e,i){var s=this;if(void 0===e&&(e=null),void 0===i&&(i="px"),t&&!e)return this.elm.style.width="number"==typeof t?t+"px":t,this._width=this.elm.offsetWidth,this;if(t&&e){var o=this.style("transition");this.elm.style.transition="none";var n=parseFloat(this.elm.style.width),h=50*(t-n)/e;return new Promise((function(e,r){var l=function(){n+=h;try{if(Math.floor(n)>Math.floor(t)&&h>0||Math.floor(n)<Math.floor(t)&&h<0)return s.elm.style.transition=o,e(s),!0;s.elm.style.width=n+i,s._width=s.elm.offsetWidth,setTimeout(l,50)}catch(t){r(t)}};l()}))}},t.prototype.height=function(){return this._height},t.prototype.setHeight=function(t,e,i){var s=this;if(void 0===e&&(e=null),void 0===i&&(i="px"),t&&!e)return this.elm.style.height="number"==typeof t?t+"px":t,this._height=this.elm.offsetHeight,this;if(t&&e){var o=this.style("transition");this.elm.style.transition="none";var n=parseFloat(this.elm.style.height),h=50*(t-n)/e;return new Promise((function(e,r){var l=function(){n+=h;try{if(Math.floor(n)>Math.floor(t)&&h>0||Math.floor(n)<Math.floor(t)&&h<0)return s.elm.style.transition=o,e(s),!0;s.elm.style.height=n+i,s._height=s.elm.offsetHeight,setTimeout(l,50)}catch(t){r(t)}};l()}))}},t.prototype.size=function(t,e){return void 0===t&&(t=0),e||(e=t),this.elm.style.width="number"==typeof t?t+"px":t,this.elm.style.height="number"==typeof e?e+"px":e,this._width=this.elm.offsetWidth,this._height=this.elm.offsetHeight,this},t.prototype.border=function(t,e,i){var s=this;if("object"==typeof i)i.forEach((function(i){var o="";1==i?o="-top":4==i?o="-left":3==i?o="-bottom":2==i&&(o="-right"),s.elm.style["border"+o]=("number"==typeof t?t+"px":t)+" solid "+e}));else{var o="";1==i?o="-top":4==i?o="-left":3==i?o="-bottom":2==i&&(o="-right"),this.elm.style["border"+o]=("number"==typeof t?t+"px":t)+" solid "+e}return this},t.prototype.circle=function(){return this.isCircle=!0,this.elm.style.borderRadius="200em",this},t.prototype.free=function(){return this.elm.style.position="absolute",this},t.prototype.box=function(){return this.elm.style.overflow="hidden",this},t.prototype.top=function(t,e){return void 0===t&&(t=!1),void 0===e&&(e=0),!1===t?this.y:"number"==typeof t?(this.y=t+(e?this.y:0),a(this.elm,"translate",this.x+"px,"+this.y+"px"),this):void 0},t.prototype.left=function(t,e){return void 0===t&&(t=!1),void 0===e&&(e=0),!1===t?this.x:"number"==typeof t?(this.x=t+(e?this.x:0),a(this.elm,"translate",this.x+"px,"+this.y+"px"),this):void 0},t.prototype.center=function(t){var e=this.height(),i=this.width();return this.top(t.height()/2-e/2),this.left(t.width()/2-i/2),this},t.prototype.rotate=function(t){return a(this.elm,"rotate",t+"deg"),this},t.prototype.axe_center=function(t){return void 0===t&&(t=null),this.elm.style.transformOrigin=t||"0 0",this},t.prototype.attr=function(t,e){return void 0===e&&(e=null),e?(this.elm.setAttribute(t,e),this):this.elm.getAttribute(t)},t.prototype.onclick=function(t){var e=this;this.elm.addEventListener("click",(function(){return t(e)}))},t.prototype.ondclick=function(t){var e=this;this.elm.addEventListener("ondblclick",(function(){return t(e)}))},t.prototype.onmouseout=function(t){var e=this;this.elm.addEventListener("onmouseleave",(function(){return t(e)}))},t.prototype.onchange=function(t){var e=this;this.elm.addEventListener("onchange",(function(){return t(e)}))},t.prototype.remove=function(){this.elm.remove()},t}();var c=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}return t.prototype.add=function(t){return this.x+=t.x,this.y+=t.y,this},t.prototype.abc=function(t){return this.x-=t.x,this.y-=t.y,this},t.prototype.mult=function(t){return"object"==typeof t?this.x*t.y-this.y*t.x:(this.x*=t,this.y*=t,this)},t.prototype.div=function(t){return this.x/="object"==typeof t?t.x||1:t||1,this.y/="object"==typeof t?t.y||1:t||1,this},t.prototype.mag=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},t.prototype.normalise=function(){var t=this.mag();return t&&(this.x=this.x/t,this.y=this.y/t),this},t.prototype.setMag=function(t){return this.normalise(),this.x*=t,this.y*=t,this},t.prototype.update=function(t,e){return this.x=t,this.y=e,this},t.prototype.get=function(){return new t(this.x,this.y)},t.prototype.limit=function(t){var e=this.mag();return this.x=y(this.x,0,e,0,t)||this.x,this.y=y(this.y,0,e,0,t)||this.y,this},t.prototype.angle=function(t){var e=this.get().abc(t),i=0;return e.x?i=Math.acos(e.x/e.mag())*(180/Math.PI):e.y&&(i=Math.asin(e.y/e.mag())*(180/Math.PI)),this.y-t.y<0&&this.x-t.x<0&&(i+=2*(180-i)),this.y-t.y<0&&this.x-t.x>0&&(i=360-i),i},t}();function f(t,e,i,s){return Math.sqrt(Math.pow(i-t,2)+Math.pow(s-e,2))}function y(t,e,i,s,o){return 100*(t-e)/(i-e)*(o-s)/100+s}function m(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0);var s,o=i?function(t){return parseFloat(t)}:function(t){return Math.floor(t)};if("object"!=typeof t&&t<e){var n=e;e=t,t=n}var h=e<0&&(e||1),r=t<0&&(t||1);if(t="object"!=typeof t?Math.abs(t):t,e=Math.abs(e),!t)return 0;if("object"==typeof t)s=t[m(t.length-1)];else if(!r&&!h||r&&h){for(;!((s=o(Math.random()*(t+1)+e))<=t&&s>=e););r&&h&&(s*=-1)}else if(r&&0==e)s=-1*o(Math.random()*(t+1));else if(!r&&h){var l=m(t,void 0,i),a=m(e,void 0,i);s=m(1)?l:-a}return s}var d=function(){function t(t,e,i){void 0===e&&(e=0);var o=i.c,n=void 0===o?"#000":o,h=i.r,r=void 0===h?0:h;"object"==typeof t?(this.r=t.r||r,this.pos=t.pos.get(),this.color=t.color||n):(this.r=r,this.pos=new c(t,e),this.color=n),this.zoom=!0,this.parent=new Array,this.use=!0,this.r>0&&(this.elm=new u("div",{parent:s.elm}),this.elm.free().top(this.pos.y-this.r/2),this.elm.left(this.pos.x-this.r/2),this.elm.circle().size(this.r,this.r).bg_color(this.color))}return t.prototype.update=function(t){if(this.pos.x=t[0]||1,this.pos.y=t[1]||1,this.pos.x=this.pos.x,this.pos.y=this.pos.y,this.elm&&(this.elm.top(this.pos.y-this.r/2),this.elm.left(this.pos.x-this.r/2)),this.parent)for(var e=0;e<this.parent.length;e++)this.parent[e].update()},t.prototype.state=function(t,e,i,s){void 0===t&&(t=!1),void 0===i&&(i=0),void 0===s&&(s="#000"),this.use=t,t?(this.pos.x=e,this.pos.y=i,this.color=s,this.pos.x=e,this.pos.y=i,this.parent=new Array,this.r>0&&(this.elm.elm.style.display="block",this.elm.top(this.pos.y-this.r/2),this.elm.left(this.pos.x-this.r/2),this.elm.bg_color(this.color))):(this.elm.top(0),this.elm.left(0),this.elm.elm.style.display="none")},t}(),x=function(){function t(t,e,i,o){void 0===i&&(i=0),void 0===o&&(o="#000"),this.object,this.spot1=t,this.spot2=e,this.spot1.parent.push(this),this.spot2.parent.push(this),this.size=i,this.color=o,this.length=f(this.spot1.pos.x,this.spot1.pos.y,this.spot2.pos.x,this.spot2.pos.y),this.angle=0,this.axe=this.spot1.pos.mag()>this.spot2.pos.mag()?this.spot2:this.spot1,this.AntiAxe=this.axe==this.spot1?this.spot2:this.spot1,this.calc_angle(),this.size&&(this.elm=new u("div",{parent:s.elm}),this.elm.free().top(this.axe.pos.y+this.axe.r/2-this.size/2),this.elm.left(this.axe.pos.x+this.axe.r/2-this.size/2),this.elm.size(this.length,this.size).bg_color(this.color),this.elm.axe_center().rotate(this.angle))}return t.prototype.calc_angle=function(){this.length=f(this.spot1.pos.x,this.spot1.pos.y,this.spot2.pos.x,this.spot2.pos.y),this.angle=this.AntiAxe.pos.angle(this.axe.pos)},t.prototype.update=function(){this.calc_angle(),this.size&&(this.elm.free().top(this.axe.pos.y+this.axe.r/2-this.size/2),this.elm.left(this.axe.pos.x+this.axe.r/2-this.size/2),this.elm.size(this.length,this.size).bg_color(this.color),this.elm.axe_center().rotate(this.angle))},t.prototype.width=function(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=0),e&&(t+=this.length),i)s=Math.cos(180-(this.angle*(Math.PI/180)+90))*t,o=Math.sin(180-(this.angle*(Math.PI/180)+90))*t,this.spot1.update([s,o]);else{var s=Math.cos(this.angle*(Math.PI/180))*t+this.spot1.pos.x,o=Math.sin(this.angle*(Math.PI/180))*t+this.spot1.pos.y;this.spot2.update([s,o])}this.length=t},t.prototype.rotate=function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=this.axe),void 0===i&&(i=0),"number"==typeof e&&(e=1==e?this.axe:this.AntiAxe);var s=e==this.axe?this.AntiAxe:this.axe;this.calc_angle(),i&&(t+=this.angle),e==this.AntiAxe&&(t+=180);var o=t*(Math.PI/180),n=Math.cos(o)*this.length,h=Math.sin(o)*this.length;this.angle=t,s.update([n+e.pos.x,h+e.pos.y])},t.prototype.remove=function(){this.elm.remove()},t}(),v=function(){function t(t,e,i,s,o){this.elm=null,this.angle=null,"object"==typeof t?(this.pos=t,this.w=e,this.h=i,"string"==typeof s&&(this.color=s)):(this.pos=new c(t,e),this.w=i,"number"==typeof s&&(this.h=s),this.color=o),this.color&&this.show()}return t.prototype.show=function(){this.elm=new u("div",{parent:s.elm}),this.elm.free().top(this.pos.y-this.h/2),this.elm.left(this.pos.x-this.w/2),this.elm.axe_center(this.w/2+"px "+this.h/2+"px"),this.elm.border(this.w/2,"transparent",[2,4]).border(this.h,this.color,[3])},t.prototype.update=function(t){this.calc_angle(t),this.elm&&this.elm.rotate(this.angle),this.pos.x=t[0],this.pos.y=t[1],this.elm&&(this.elm.top(this.pos.y-this.h/2||0),this.elm.left(this.pos.x-this.w/2||0))},t.prototype.calc_angle=function(t){var e=new c(t[0],t[1]);if((e=this.pos.get().abc(e.get())).mag()){var i=Math.abs(Math.acos(e.y/e.mag())*(180/Math.PI));t[0]-this.pos.x<0&&(i=360-i),this.angle=i}},t}();function g(t,e){var i=t.end.get().abc(t.start),s=e.get().abc(t.start),o=Math.acos((i.x*s.x+i.y*s.y)/(s.mag()*i.mag())),n=i.get().normalise();return n.mult(Math.cos(o)*s.mag()).add(t.start),n}var w,b,M,z,_,A=function(t,e){this.column=Math.floor(t.y/(5*e.y)),this.width=Math.floor(t.x/(5*e.x)),this.zones=new Array(this.column*this.width).fill(null).map((function(){return[]}))},E=function(){function t(t,e,i,s,o,n){this.plain=t,this.zone=null,this.pos=o||new c(w.width()/2,w.height()/2),this.vol=new c(0,0),this.acc=new c(0,0),this.elm=new v(this.pos,e.x,e.y,n||"#fff"),this.max={speed:i,force:s}}return t.prototype.update=function(){this.vol.add(this.acc),this.pos.add(this.vol),this.elm.update([this.pos.x,this.pos.y]),this.acc.mult(0),(this.pos.x>w.width()||this.pos.x<0||this.pos.y>w.height()||this.pos.y<0)&&(this.pos.x=m(w.width()/2+100,w.width()/2-100),this.pos.y=m(w.height()/2+100,w.height()/2-100),this.vol.x=0,this.vol.y=0),this.updateZones()},t.prototype.updateZones=function(){null!=this.zone&&this.plain.zones[this.zone]&&this.plain.zones[this.zone].length&&this.plain.zones[this.zone].splice(this.plain.zones[this.zone].indexOf(this),1),this.zone=this.getCurrentZone(),this.plain.zones[this.zone].push(this)},t.prototype.getCurrentZone=function(){var t=Math.floor(this.pos.y*this.plain.column/w.height()),e=Math.floor(this.pos.x*this.plain.width/w.width());return t*e+e},t.prototype.getNeiborsFromSideZones=function(){var t=this,e=this.getCurrentZone(),i=[e,e-1,e+1,e+this.plain.width,e-this.plain.width],s=[];return i.forEach((function(e){t.plain.zones[e]&&s.push.apply(s,t.plain.zones[e])})),s},t.prototype.applayForce=function(t){this.acc.add(t)},t.prototype.follow=function(t,e){for(var i=null,s=[],o=null,n=this.pos.get().add(this.vol.get().setMag(this.vol.mag()+100)),h=0;h<e.lines.length;h++){var r=e.lines[h],l=r.start.x<r.end.x?r.start:r.end,a=r.end.x>r.start.x?r.end:r.start;if(n.x>l.x-150&&n.x<a.x+150){var p=(o=g(r,n)).get().abc(n);"yellow"==r.color&&p.mult(-1),(!i||i.mag()<p.mag())&&p.mag()<150&&f(o.x,o.y,l.x,l.y)<r.length&&f(o.x,o.y,a.x,a.y)<r.length?i=p:i||s.push(l)}else i||s.push(l)}var u=this.aligment(),y=this.separate(),m=new c(0,0);t=this.seek(t),i&&(m=this.seek(i.add(n).setMag(i.mag()+40))),m.mult(2.3),u.mult(2),y.mult(2),t.mult(0),this.applayForce(m),this.applayForce(y),this.applayForce(u),this.applayForce(t)},t.prototype.seek=function(t){return(t=new c(t.x,t.y)).abc(this.pos),t.setMag(this.max.speed),t.abc(this.vol),t.limit(this.max.force),t},t.prototype.separate=function(){var t=this,e=3*this.elm.h,i=new c(0,0),s=0;return this.getNeiborsFromSideZones().forEach((function(o){var n=f(t.pos.x,t.pos.y,o.pos.x,o.pos.y);n>0&&n<e&&(i.add(t.pos.get().abc(o.pos).div(n)),s++)})),s&&(i.div(s),i.normalise(),i.setMag(this.max.speed),i.abc(this.vol),i.limit(this.max.force)),i},t.prototype.aligment=function(){var t=this,e=2*this.elm.h,i=new c(0,0),s=0;return this.getNeiborsFromSideZones().forEach((function(o){var n=f(t.pos.x,t.pos.y,o.pos.x,o.pos.y);n>0&&n<e&&(i.add(o.vol),s++)})),s&&(i.div(s),i.normalise(),i.setMag(this.max.speed),i.abc(this.vol),i.limit(this.max.force)),i},t}(),j=new c(8,13),P=!1,k=[],I={start:null,lines:[]};_=function(t,e){P||z.update(t,e)},document.addEventListener("mousemove",(function(t){_(t.pageX,t.pageY)})),p((function(t){P=!P,13==t&&k.map((function(t){return t.remove()}))})),document.addEventListener("mousedown",(function(t){return function(t,e){if(I.lines.length||I.start){var i=void 0;(i=I.start?{start:I.start.pos,end:new c(t,e)}:{start:I.lines[I.lines.length-1].end,end:new c(t,e)}).length=i.start.get().abc(i.end).mag(),I.lines.push(i),k.push(new x(new d(i.start.x,i.start.y,{}),new d(i.end.x,i.end.y,{}),1,"#ddd")),I.start=null}else I.start=new d(t,e,{});M.push(new E(b,j,5,.3,new c(t,e),"#ddd"))}(t.pageX,t.pageY)}),!1),function(t,e){document.addEventListener("DOMContentLoaded",(function(i){t(),r(e),l(60),p((function(t){27==t&&h()}))}))}((function(){w=function(t,e){void 0===e&&(e="#fff");var i=new u;return i.free(),i.box(),i.bg_color(e),"object"==typeof t?i.size(t[0],t[1]):t?i.size(t,t):i.size("100%","100%"),function(t){s=t}(i),i}(),b=new A(new c(w.width(),w.height()),j);for(var t=0;t<700;t++){var e=new E(b,j,5,.3,new c(m(w.width()/2),m(w.height())),"#ddd");M.push(e)}z=new c(w.width(),w.height()),new x(new d(z.x,z.y,{}),new d(z.x,10,{c:"blue",r:1}),1,"blue")}),(function(){M.forEach((function(t){t.follow(z,I),t.update()}))}))}},e={};function i(s){if(e[s])return e[s].exports;var o=e[s]={exports:{}};return t[s](o,o.exports,i),o.exports}i.d=(t,e)=>{for(var s in e)i.o(e,s)&&!i.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},i.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),i(62)})();