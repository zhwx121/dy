!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n;$(function(){$(".h-open").click(function(){var e;e=JSON.parse(localStorage.getItem("h-list")||"[]").reverse().map(e=>`<li><span class="oi oi-video"></span> <a href="./?play=${e}" class="nice-c">${e}</a></li>`).join(""),$(".h-list").empty().append(e),$(".history").removeClass("d-none"),$(this).hide()}),$(".h-close").click(function(){$(".history").addClass("d-none"),$(".h-open").show()}),$(".clear-history").click(function(){localStorage.removeItem("h-list"),$(".h-list").empty(),$(".history").addClass("d-none"),$(".h-open").show()}),$("#video-url").focusin(function(){n=$(this).val(),$(this).val("")}).focusout(function(){$(this).val(n)}).change(function(){$(this).val().length>0&&(n=$(this).val())}),$(".play").click(function(){var e=$("#video-url").val(),t=videojs("#player");t.src(e),t.play(),function(){var e=JSON.parse(localStorage.getItem("h-list")||"[]"),t=videojs("#player").src(),n=e.indexOf(t);n>-1&&e.splice(n,1);e.push(t),localStorage.setItem("h-list",JSON.stringify(e))}(),history.pushState(null,"","./?play="+e)})})}]);