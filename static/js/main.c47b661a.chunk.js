(this.webpackJsonpneon_snake=this.webpackJsonpneon_snake||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(8),s=n.n(a),u=(n.p,n(13),n(3)),i=n(0),o=function(e){var t=e.entity,n=e.size,c={width:n,height:n,left:t.x*n,top:t.y*n},r="fieldContent ".concat(t.type);return Object(i.jsx)("div",{className:"field",style:c,children:Object(i.jsx)("div",{className:r})})},j=function(e){var t=e.gameSize,n=e.entities,c=500/t,r={width:500,height:500};return Object(i.jsx)("div",{className:"displayFrame",children:Object(i.jsx)("div",{className:"display",style:r,children:function(e){return e.map((function(e){return Object(i.jsx)(o,{entity:e,size:c})}))}(n)})})},b=function(e){var t=e.message,n=e.snakeLength;return Object(i.jsxs)("div",{className:"statusBar neonText",children:[Object(i.jsxs)("div",{className:"messageBox",children:[Object(i.jsx)("div",{className:"biggerText",children:t.top}),Object(i.jsx)("div",{children:t.bottom})]}),Object(i.jsxs)("div",{children:["SNAKE LENGTH: ",n]})]})},O=function(){return Object(i.jsx)("div",{className:"header neonText",children:"Neon Snake"})},d=function(e,t){var n=Object(c.useState)(!1),r=Object(u.a)(n,2),a=r[0],s=r[1],i=Object(c.useState)(0),o=Object(u.a)(i,2),j=o[0],b=o[1];return Object(c.useEffect)((function(){a&&(t(),setTimeout((function(){b(j+1)}),e))}),[a,j]),{switchPlayStop:function(){s(!a)},running:a}},f=function(){var e=Object(c.useState)({code:""}),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useRef)([]),s=function(e){e.preventDefault(),a.current.includes(e.code)||(a.current.push(e.code),r(e))},i=function(e){e.preventDefault();var t=a.current.indexOf(e.code);t>-1&&a.current.splice(t,1)};return Object(c.useEffect)((function(){return window.addEventListener("keyup",i),window.addEventListener("keydown",s),function(){window.removeEventListener("keyup",i),window.removeEventListener("keydown",s)}}),[n]),n},p=n(2),l=n(4),y=function(e){var t=Object(c.useState)(0),n=Object(u.a)(t,2),r=n[0],a=n[1],s=Object(c.useRef)(!0),i=[{x:2,y:0,type:"snakeEmpty"},{x:1,y:0,type:"snakeEmpty"},{x:0,y:0,type:"snakeEmpty"}],o=Object(c.useRef)(i),j=Object(c.useRef)("RIGHT"),b=Object(c.useRef)(null),O=Object(c.useState)(Object(l.a)(o.current)),d=Object(u.a)(O,2),f=d[0],y=d[1],h=Object(c.useState)({gameOver:!1,snakeLength:o.current.length}),v=Object(u.a)(h,2),m=v[0],x=v[1],k=function(){var t=[],n=[];o.current.forEach((function(e){n.push("".concat(e.x,":").concat(e.y))}));for(var c=0;c<e;c++)for(var r=0;r<e;r++){var a="".concat(c,":").concat(r);n.includes(a)||t.push(a)}var s=t[Math.floor(Math.random()*t.length)];s=s.split(":");var u={x:parseInt(s[0]),y:parseInt(s[1]),type:"food"};b.current=u};Object(c.useEffect)((function(){(function(){var t=!1;return(o.current[0].x<0||o.current[0].x>e-1||o.current[0].y<0||o.current[0].y>e-1)&&(t=!0),t})()||function(){var e=!1,t=Object(l.a)(o.current),n=t.shift();return t.forEach((function(t){t.x===n.x&&t.y===n.y&&(e=!0)})),e}()?(s.current=!1,x(Object(p.a)(Object(p.a)({},m),{},{gameOver:!0}))):(b.current||k(),o.current[0].x===b.current.x&&o.current[0].y===b.current.y&&(k(),o.current[0].type="snakeFull"),y([].concat(Object(l.a)(o.current),[b.current])),x(Object(p.a)(Object(p.a)({},m),{},{snakeLength:o.current.length})))}),[r]);return{updateSnakeDirection:function(e){"RIGHT"===e&&o.current[0].x>=o.current[1].x&&(j.current=e),"LEFT"===e&&o.current[0].x<=o.current[1].x&&(j.current=e),"DOWN"===e&&o.current[0].y>=o.current[1].y&&(j.current=e),"UP"===e&&o.current[0].y<=o.current[1].y&&(j.current=e)},entities:f,updateGame:function(){s.current&&(!function(){var e,t=o.current[0],n=function(e){var t=Object(l.a)(o.current);t.unshift(e);var n=t.pop();"snakeFull"===n.type&&(n.type="snakeEmpty",t.push(n)),o.current=t};switch(j.current){case"RIGHT":(e=Object(p.a)(Object(p.a)({},t),{},{type:"snakeEmpty"})).x++,n(e);break;case"LEFT":(e=Object(p.a)(Object(p.a)({},t),{},{type:"snakeEmpty"})).x--,n(e);break;case"UP":(e=Object(p.a)(Object(p.a)({},t),{},{type:"snakeEmpty"})).y--,n(e);break;case"DOWN":(e=Object(p.a)(Object(p.a)({},t),{},{type:"snakeEmpty"})).y++,n(e)}}(),a(r+1))},gameRestart:function(){b.current=null,o.current=i,j.current="RIGHT",s.current=!0,y(Object(l.a)(o.current)),x({gameOver:!1,snakeLength:o.current.length})},gameStatus:m}},h=function(){return Object(i.jsxs)("div",{className:"infoBox neonText",children:[Object(i.jsx)("div",{children:"HOW TO PLAY:"}),Object(i.jsx)("div",{children:"ARROW KEYS - moving the snake"}),Object(i.jsx)("div",{children:"SPACEBAR - play/pause"}),Object(i.jsx)("div",{children:"ENTER - restart game after lose"})]})},v=function(){var e=f(),t=y(25),n=t.updateSnakeDirection,r=t.entities,a=t.updateGame,s=t.gameRestart,o=t.gameStatus,p=d(125,a),l=p.switchPlayStop,v=p.running,m=Object(c.useState)({top:"",bottom:""}),x=Object(u.a)(m,2),k=x[0],g=x[1];Object(c.useEffect)((function(){o.gameOver?g({top:"GAME-OVER",bottom:"press enter to restart"}):g(v?{top:"",bottom:""}:{top:"PAUSED",bottom:"press space to play"})}),[v,o]);return Object(c.useEffect)((function(){switch(e.code){case"ArrowRight":n("RIGHT");break;case"ArrowLeft":n("LEFT");break;case"ArrowUp":n("UP");break;case"ArrowDown":n("DOWN");break;case"Space":l();break;case"Enter":o.gameOver&&s()}}),[e]),Object(i.jsxs)("div",{className:"app",children:[Object(i.jsx)(O,{}),Object(i.jsx)(b,{message:k,snakeLength:o.snakeLength}),Object(i.jsx)(j,{gameSize:25,entities:r}),Object(i.jsx)(h,{})]})};s.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(v,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.c47b661a.chunk.js.map