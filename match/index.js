var t=require("preact"),e=require("preact-router");function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}var n=function(t){var r,n;function a(){return t.apply(this,arguments)||this}n=t,(r=a).prototype=Object.create(n.prototype),r.prototype.constructor=r,r.__proto__=n;var s=a.prototype;return s.componentDidMount=function(){var t=this;this.update=function(e){t.nextUrl=e,t.setState({})},e.subscribers.push(this.update)},s.componentWillUnmount=function(){e.subscribers.splice(e.subscribers.indexOf(this.update)>>>0,1)},s.render=function(t){var r=this.nextUrl||e.getCurrentUrl(),n=r.replace(/\?.+$/,"");return this.nextUrl=null,t.children({url:r,path:n,matches:!1!==e.exec(n,t.path,{})})},a}(t.Component);n.Link=function(a){var s=a.class,o=a.className,i=a.activeClass,c=a.activeClassName,u=a.path,l=function(t,e){if(null==t)return{};var r,n,a={},s=Object.keys(t);for(n=0;n<s.length;n++)e.indexOf(r=s[n])>=0||(a[r]=t[r]);return a}(a,["class","className","activeClass","activeClassName","path"]),p=[s,o].filter(Boolean).join(" "),h=[s,o,i,c].filter(Boolean).join(" ");return t.h(n,{path:u||l.href},function(n){return t.h(e.Link,r({},l,{class:n.matches?h:p}))})},module.exports=n;
