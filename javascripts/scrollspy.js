/**
 * Extend jquery with a scrollspy plugin.
 * This watches the window scroll and fires events when elements are scrolled into viewport.
 *
 * throttle() and getTime() taken from Underscore.js
 * https://github.com/jashkenas/underscore
 *
 * @author Copyright 2013 John Smart
 * @license https://raw.github.com/thesmart/jquery-scrollspy/master/LICENSE
 * @see https://github.com/thesmart
 * @version 0.1.2
 */
!function(t){function n(n,e,o,r){var l=t();return t.each(i,function(t,i){var u=i.offset().top,c=i.offset().left,f=c+i.width(),a=u+i.height(),s=!(c>e||r>f||u>o||n>a);s&&l.push(i)}),l}function e(){++f;var e=l.scrollTop(),o=l.scrollLeft(),r=o+l.width(),i=e+l.height(),c=n(e+a.top,r+a.right,i+a.bottom,o+a.left);t.each(c,function(t,n){var e=n.data("scrollSpy:ticks");"number"!=typeof e&&n.triggerHandler("scrollSpy:enter"),n.data("scrollSpy:ticks",f)}),t.each(u,function(t,n){var e=n.data("scrollSpy:ticks");"number"==typeof e&&e!==f&&(n.triggerHandler("scrollSpy:exit"),n.data("scrollSpy:ticks",null))}),u=c}function o(){l.trigger("scrollSpy:winSize")}function r(t,n,e){var o,r,l,i=null,u=0;e||(e={});var c=function(){u=e.leading===!1?0:s(),i=null,l=t.apply(o,r),o=r=null};return function(){var f=s();u||e.leading!==!1||(u=f);var a=n-(f-u);return o=this,r=arguments,0>=a?(clearTimeout(i),i=null,u=f,l=t.apply(o,r),o=r=null):i||e.trailing===!1||(i=setTimeout(c,a)),l}}var l=t(window),i=[],u=[],c=!1,f=0,a={top:0,right:0,bottom:0,left:0},s=Date.now||function(){return(new Date).getTime()};t.scrollSpy=function(n,o){n=t(n),n.each(function(n,e){i.push(t(e))}),o=o||{throttle:100},a.top=o.offsetTop||0,a.right=o.offsetRight||0,a.bottom=o.offsetBottom||0,a.left=o.offsetLeft||0;var u=r(e,o.throttle||100),f=function(){t(document).ready(u)};return c||(l.on("scroll",f),l.on("resize",f),c=!0),setTimeout(f,0),n},t.winSizeSpy=function(n){return t.winSizeSpy=function(){return l},n=n||{throttle:100},l.on("resize",r(o,n.throttle||100))},t.fn.scrollSpy=function(n){return t.scrollSpy(t(this),n)}}(jQuery);