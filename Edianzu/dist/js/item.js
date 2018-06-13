"use strict";function commonHtml(){this.header=$("#com-header"),this.footer=$("#com-footer")}$.extend(commonHtml.prototype,{init:function(){this.header.html(headerContent),this.footer.html(footerContent)}});var headerContent='\n\t\x3c!-- 咨询--\x3e\n\t<div id="fixed_right">\n\t\t<a href="##"></a>\n\t\t<a href="##" class=\'step\'>\n\t\t\t<span>租机步骤</span>\n\t\t</a>\n\t\t<a href="##" class=\'ewm\'>\n\t\t\t<img src="../img/erweima.png" alt="">\n\t\t</a>\n\t\t<a href="##" class=\'ew\'>\n\t\t\t<img src="../img/ew.png" alt="">\n\t\t</a>\n\t\t<a href="##"></a>\n\t</div>\n\t\x3c!-- 顶部 --\x3e\n\t<div id="wrapper_top">\n\t\t<div id="top" class="content">\n\t\t\t<div class="topLeft">\n\t\t\t\t<li>您好，欢迎来到易点租</li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href="login.html">登录</a>\n\t\t\t\t\t<a href="register.html">注册</a>\n\t\t\t\t</li>\n\t\t\t</div>\n\t\t\t<div class="topRight">\n\t\t\t\t<li>销售热线： <span>400-810-9528</span></li>\n\t\t\t\t<li>客服热线： <span>400-886-9528</span></li>\n\t\t\t\t<li>\n\t\t\t\t\t<a href="##">服务中心</a>\n\t\t\t\t</li>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\x3c!-- 头部 --\x3e\n\t<div id="header" class="content clearfix">\n\t\t<a href="##" id="logo">易点租</a>\n\t\t<div  id="form">\n\t\t\t<form action="" method="">\n\t\t\t\t<input type="text" id="txt" placeholder="免押金租电脑">\n\t\t\t\t<div id="txtBox">\n\t\t\t\t</div>\n\t\t\t\t<a href="short.html" id="sub">搜索<i class="search"></i></a>\n\t\t\t</form>\n\t\t\t<ul>\n\t\t\t\t<li><a href="##">T420</a></li>\n\t\t\t\t<li><a href="##">苹果笔记本</a></li>\n\t\t\t\t<li><a href="##">X230</a></li>\n\t\t\t\t<li><a href="##">E470</a></li>\n\t\t\t\t<li><a href="##">戴尔笔记本</a></li>\n\t\t\t\t<li><a href="##">Office</a></li>\n\t\t\t\t<li><a href="##">净化器</a></li>\n\t\t\t\t<li><a href="##">惠普</a></li>\n\t\t\t\t<li><a href="##">小米</a></li>\n\t\t\t</ul>\n\t\t</div>\n\t\t<a href="shopping.html"><div id="shopping"><i class="shopping"></i>购物车<span>></span><i id="sum">0</i></div></a>\n\t</div>\n\t\x3c!-- 导航 --\x3e\n\t<div id="wrapper_nav">\n\t<div id="nav" class="content">\n\t\t<li><i class="icon_menu"></i>商品分类<i class="icon_down"></i>\n\t\t\t<div class="menu">\n\t\t\t<dl>\n\t\t\t\t<h2><i class="icon_computer"></i>办公电脑</h2>\n\t\t\t\t<p><a href="##">笔记本</a>\n\t\t\t\t\t<a href="##">台式机</a>\n\t\t\t\t\t<a href="##">一体机</a>\n\t\t\t\t\t<a href="##">主机</a>\n\t\t\t\t</p>\n\t\t\t</dl>\n\t\t\t<dl>\n\t\t\t\t<h2><i class="icon_peripheral"></i>办公外设</h2>\n\t\t\t\t<p><a href="##">投影仪</a>\n\t\t\t\t\t<a href="##">显示器</a>\n\t\t\t\t\t<a href="##">平板</a>\n\t\t\t\t\t<a href="##">手机</a>\n\t\t\t\t\t<a href="##">电视</a>\n\t\t\t\t\t<a href="##">配件</a>\n\t\t\t\t</p>\n\t\t\t</dl>\n\t\t\t<dl>\n\t\t\t\t<h2><i class="icon_software"></i>增值服务</h2>\n\t\t\t\t<p><a href="##">无忧服务</a>\n\t\t\t\t\t<a href="##">驻场服务</a>\n\t\t\t\t\t<a href="##">企业回收</a>\n\t\t\t\t\t<a href="##">计次上门服务</a>\n\t\t\t\t\t<a href="##">软件定制服务</a>\n\t\t\t\t</p>\n\t\t\t</dl>\n\t\t\t<dl>\n\t\t\t\t<h2><i class="icon_server"></i>办公电脑</h2>\n\t\t\t\t<p><a href="##">网络部署</a>\n\t\t\t\t\t<a href="##">服务器</a>\n\t\t\t\t\t<a href="##">工作站</a><br>\n\t\t\t\t\t<a href="##">打印机</a>\n\t\t\t\t\t<a href="##">净化器</a>\n\t\t\t\t\t<a href="##">Office</a>\n\t\t\t\t</p>\n\t\t\t</dl>\n\t\t\t</div>\n\t\t</li>\n\t\t<li><a href="../../index.html">首页</a></li>\n\t\t<li class="grab"><i class="icon_grab"></i><a href="promotion.html">限量特惠</a></li>\n\t\t<li class="new"><i class="icon_new"></i><a href="short.html">我要短租</a></li>\n\t\t<li><a href="service.html">增值服务</a></li>\n\t\t<li><a href="##">企业回收</a></li>\n\t\t<li><a href="##">客户说</a></li>\n\t\t<li><a href="##">资产管理</a></li>\n\t</div>\n\t</div>',footerContent='<div id="footer_top" class="clearfix content">\n\t\t<ul>\n\t\t\t<li>\n\t\t\t\t<h3>关于易点租</h3>\n\t\t\t\t<a href="##">公司概况</a>\n\t\t\t\t<a href="##">商务合作</a>\n\t\t\t\t<a href="##">加入我们</a>\n\t\t\t\t<a href="##">联系我们</a>\n\t\t\t\t<a href="##">媒体报道</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<h3>租机预订说明</h3>\n\t\t\t\t<a href="##">什么是免押金租赁</a>\n\t\t\t\t<a href="##">租机流程</a>\n\t\t\t\t<a href="##">租金缴付</a>\n\t\t\t\t<a href="##">租赁方式</a>\n\t\t\t\t<a href="##">租赁协议</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<h3>租机费用及结算</h3>\n\t\t\t\t<a href="##">集团账号登录</a>\n\t\t\t\t<a href="##">服务中心</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<h3>企业服务</h3>\n\t\t\t\t<a href="##">集团账号登录</a>\n\t\t\t\t<a href="##">服务中心</a>\n\t\t\t</li>\n\t\t</ul>\n\t\t<div class="f_logo">\n\t\t\t<img src="../img/f_logo.jpg" alt=""><br>\n\t\t\t<span>400-886-9528</span><br>\n\t\t\t<b>周一至周日(9:00-18:00)</b>\n\t\t</div>\n\t</div>\n\t<div id="footer_bottom">\n\t\t© Copyright Reserved 2014-2018　|  <i class="icon_jh"></i>京公网安备 11010102002019号   |　京ICP备14057387号-1　|　北京易点淘网络技术有限公司<br>\n\t\t办公地址： 北京市海淀区西二旗大街39号融通高科大厦二层 易点租\n\t</div>';function common(){this.local=window.localStorage,this.sum=$("#sum")}function itemHtml(t,i,n){this.main=$("#main"),this.data=t,this.name=i,this.num=n,this.itemContent(),this.increase=$("#increase"),this.decrease=$("#decrease"),this.val=$("#item_val"),this.shop=$("#shop"),this.sum=$("#sum")}function Magnifier(){this.small=$("#img_small img"),this.middle=$("#img>img"),this.box=$("#img"),this.min=$("#box_small"),this.max=$("#img_large"),this.mImg=$("#img_large img")}$.extend(common.prototype,{init:function(){0!=this.local.length?this.sum.html(this.local.sum):this.sum.html(0)}}),$.extend(itemHtml.prototype,{init:function(){console.log(this.increase),this.increase.on("click",$.proxy(this.increases,this)),this.decrease.on("click",$.proxy(this.decreases,this)),this.shop.on("click",$.proxy(this.skip,this))},itemContent:function(){this.main.html('<div id="box" class=\'content\'>\n\t\t\t<div class="b_left">\n\t\t\t\t<div id="img">\t\n\t\t\t\t\t<img src="../'+this.data[this.name][this.num].img+'" alt="">\n\t\t\t\t\t<div id="box_small"></div>\n\t\t\t\t</div>\n\t\t\t\t<div id="img_small">\n\t\t\t\t\t<img src="../'+this.data[this.name][this.num].img+'" alt="">\n\t\t\t\t\t<img src="../img/item_img2.jpg" alt="">\n\t\t\t\t\t<img src="../img/item_img3.jpg" alt="">\n\t\t\t\t\t<img src="../img/item_img4.jpg" alt="">\n\t\t\t\t</div>\n\t\t\t\t<div id="img_large">\n\t\t\t\t\t<img src="../'+this.data[this.name][this.num].img+'" alt="">\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class="b_right">\n\t\t\t\t<div class=\'right_top\'>\n\t\t\t\t\t<p>'+this.data[this.name][this.num].txt+"</p>\n\t\t\t\t\t<p>特价促销，数量有限！</p>\n\t\t\t\t\t<p><span>月租金</span>:"+this.data[this.name][this.num].price+' <span>全新设备</span></p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\'right_middle\'>\n\t\t\t\t\t<p>选择配置：</p>\n\t\t\t\t\t<p>增值保障：</p>\n\t\t\t\t\t<p>起租日期：</p>\n\t\t\t\t\t<p>数量：\n\t\t\t\t\t\t<button id="decrease">-</button><input type="text" id="item_val" value=\'1\'><button id=\'increase\'>+</button>\n\t\t\t\t\t</p>\n\t\t\t\t\t<p>押金：\n设备押金:<span>￥2500</span>， 可免除押金:<span>￥0</span>， 需支付押金:<span>￥2500</span></p>\n\t\t\t\t<div>\n\t\t\t\t<div class="right_bottom">\n\t\t\t\t\t<p>合计首期租金：<span>'+this.data[this.name][this.num].price+'</span></p>\n\t\t\t\t\t<a href="shopping.html"><input type="button" value=\'立即下单\'></a>\n\t\t\t\t\t<input type="button" value=\'加入购物车\' id=\'shop\'>\n\t\t\t\t\t<a href="">什么是免押金租赁？</a>\n\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>')},increases:function(){var t=parseInt(this.val.val());t++,this.val.val(t)},decreases:function(){var t=parseInt(this.val.val());--t<=1?t=1:t--,this.val.val(t)},skip:function(){var t=window.localStorage;if(0!=t.length){var i=JSON.parse(t.date);t.sum=parseInt(t.sum)+parseInt(this.val.val()),alert("添加成功,赶快去下单吧！")}else i={},t.sum=parseInt(this.val.val());(new common).init(),this.sum.html(t.sum);var n=this.data[this.name][this.num].id,a=i[n];a?a+=parseInt(this.val.val()):a=parseInt(this.val.val()),i[n]=a,t.date=JSON.stringify(i)}}),$.extend(Magnifier.prototype,{init:function(){this.small.on("mouseover",$.proxy(this.Inits,this)),this.move()},Inits:function(t){this.middle.attr({src:t.target.src}),this.mImg.attr({src:t.target.src})},move:function(){this.box.on("mousemove",$.proxy(this.moves,this)),this.box.on("mouseout",$.proxy(this.handleOut,this))},moves:function(t){this.min.show(),this.max.show();var i=t.pageX-this.min.outerWidth()/2-this.box.offset().left,n=t.pageY-this.min.outerHeight()/2-this.box.offset().top,a=this.box.outerWidth()-this.min.outerWidth(),e=this.box.outerHeight()-this.min.outerHeight();i=a-10<i?a-10:i<10?10:i,n=e<n?e:n<0?0:n,this.min.css({left:i,top:n}),this.mImg.css({left:-2*i,top:-2*n})},handleOut:function(){this.min.hide(),this.max.hide()}});var p1=new Promise(function(i,t){$.ajax({url:"../js/product.json",dataType:"json",success:function(t){i(t)},error:function(){$("#main").html("<img src='../img/404.jpg'/>")}})});p1.then(function(t){var i=location.href.split("-"),n=i[1],a=6*(i[2]-1)+parseInt(i[3]-1);(new commonHtml).init(),new itemHtml(t,n,a).init(),(new common).init(),(new Magnifier).init()});var txt=$("#txt"),box=$("#txtBox");function handel(t){box.show(),box.html("");for(var i=0;i<5;i++){var n=$("<li></li>");n.html(t.s[i]),box.append(n)}box.on("click",function(t){target=t.target,"LI"==target.tagName&&(txt.val($(target).html()),box.hide())})}$(document).on("click",function(){box.hide()}),txt.on("input",function(){var t=txt.val(),i=$('<script src="http://suggestion.baidu.com/su?cb=handel&wd='+t+'"><\/script>');$("body").append(i),$(i).remove()});