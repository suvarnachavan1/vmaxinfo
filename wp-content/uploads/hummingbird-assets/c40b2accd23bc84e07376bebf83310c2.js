/**handles:sticky-sidebar**/
!function(h){h.fn.theiaStickySidebar=function(i){var t;function o(i,t){var o,a,e,d,n;s(i,t)||(console.log("TST: Body width smaller than options.minWidth. Init is delayed."),h(document).scroll((d=i,n=t,function(i){var t;s(d,n)&&h(this).unbind(i)})),h(window).resize((a=i,e=t,function(i){var t;s(a,e)&&h(this).unbind(i)})))}function s(i,t){return!0===i.initialized||!(h("body").width()<i.minWidth)&&(a(i,t),!0)}function a(g,i){g.initialized=!0,h("head").append(h('<style>.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),i.each(function(){var i={};i.sidebar=h(this),i.options=g||{},i.container=h(i.options.containerSelector),0==i.container.size()&&(i.container=i.sidebar.parent()),i.sidebar.parents().css("-webkit-transform","none"),i.sidebar.css({position:"relative",overflow:"visible","-webkit-box-sizing":"border-box","-moz-box-sizing":"border-box","box-sizing":"border-box"}),i.stickySidebar=i.sidebar.find(".theiaStickySidebar"),0==i.stickySidebar.length&&(i.sidebar.find("script").remove(),i.stickySidebar=h("<div>").addClass("theiaStickySidebar").append(i.sidebar.children()),i.sidebar.append(i.stickySidebar)),i.marginTop=parseInt(i.sidebar.css("margin-top")),i.marginBottom=parseInt(i.sidebar.css("margin-bottom")),i.paddingTop=parseInt(i.sidebar.css("padding-top")),i.paddingBottom=parseInt(i.sidebar.css("padding-bottom"));var t=i.stickySidebar.offset().top,o=i.stickySidebar.outerHeight(),a,e;function b(){i.fixedScrollTop=0,i.sidebar.css({"min-height":"1px"}),i.stickySidebar.css({position:"static",width:""})}function l(i){var t=i.height();return i.children().each(function(){t=Math.max(t,h(this).height())}),t}i.stickySidebar.css("padding-top",1),i.stickySidebar.css("padding-bottom",1),t-=i.stickySidebar.offset().top,o=i.stickySidebar.outerHeight()-o-t,0==t?(i.stickySidebar.css("padding-top",0),i.stickySidebarPaddingTop=0):i.stickySidebarPaddingTop=1,0==o?(i.stickySidebar.css("padding-bottom",0),i.stickySidebarPaddingBottom=0):i.stickySidebarPaddingBottom=1,i.previousScrollTop=null,i.fixedScrollTop=0,b(),i.onScroll=function(i){if(i.stickySidebar.is(":visible"))if(h("body").width()<i.options.minWidth)b();else{var t;if(i.options.disableOnResponsiveLayouts)if(i.sidebar.outerWidth("none"==i.sidebar.css("float"))+50>i.container.width())return void b();var o=h(document).scrollTop(),a="static",e,d,n,s,r,c,p,c,e,d,n,s,n,d,a,c;o>=i.container.offset().top+(i.paddingTop+i.marginTop-i.options.additionalMarginTop)&&(e=i.paddingTop+i.marginTop+g.additionalMarginTop,d=i.paddingBottom+i.marginBottom+g.additionalMarginBottom,n=i.container.offset().top,s=i.container.offset().top+l(i.container),r=0+g.additionalMarginTop,c=i.stickySidebar.outerHeight()+e+d<h(window).height()?r+i.stickySidebar.outerHeight():h(window).height()-i.marginBottom-i.paddingBottom-g.additionalMarginBottom,e=n-o+i.paddingTop+i.marginTop,d=s-o-i.paddingBottom-i.marginBottom,n=i.stickySidebar.offset().top-o,s=i.previousScrollTop-o,"fixed"==i.stickySidebar.css("position")&&"modern"==i.options.sidebarBehavior&&(n+=s),"stick-to-top"==i.options.sidebarBehavior&&(n=g.additionalMarginTop),"stick-to-bottom"==i.options.sidebarBehavior&&(n=c-i.stickySidebar.outerHeight()),n=0<s?Math.min(n,r):Math.max(n,c-i.stickySidebar.outerHeight()),n=Math.max(n,e),n=Math.min(n,d-i.stickySidebar.outerHeight()),a=((d=i.container.height()==i.stickySidebar.outerHeight())||n!=r)&&(d||n!=c-i.stickySidebar.outerHeight())?o+n-i.sidebar.offset().top-i.paddingTop<=g.additionalMarginTop?"static":"absolute":"fixed"),"fixed"==a?i.stickySidebar.css({position:"fixed",width:i.sidebar.width(),top:n,left:i.sidebar.offset().left+parseInt(i.sidebar.css("padding-left"))}):"absolute"==a?(c={},"absolute"!=i.stickySidebar.css("position")&&(c.position="absolute",c.top=o+n-i.sidebar.offset().top-i.stickySidebarPaddingTop-i.stickySidebarPaddingBottom),c.width=i.sidebar.width(),c.left="",i.stickySidebar.css(c)):"static"==a&&b(),"static"!=a&&1==i.options.updateSidebarHeight&&i.sidebar.css({"min-height":i.stickySidebar.outerHeight()+i.stickySidebar.offset().top-i.sidebar.offset().top+i.paddingBottom}),i.previousScrollTop=o}},i.onScroll(i),h(document).scroll((a=i,function(){a.onScroll(a)})),h(window).resize((e=i,function(){e.stickySidebar.css({position:"static"}),e.onScroll(e)}))})}(i=h.extend({containerSelector:"",additionalMarginTop:0,additionalMarginBottom:0,updateSidebarHeight:!0,minWidth:0,disableOnResponsiveLayouts:!0,sidebarBehavior:"modern"},i)).additionalMarginTop=parseInt(i.additionalMarginTop)||0,i.additionalMarginBottom=parseInt(i.additionalMarginBottom)||0,o(i,this)}}(jQuery);