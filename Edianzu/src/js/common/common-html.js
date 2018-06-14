
	function commonHtml() {
		this.header=$("#com-header")
		this.footer=$("#com-footer")
	}
	$.extend(commonHtml.prototype,{
		init(){
			this.header.html(headerContent)
			this.footer.html(footerContent)
		}
	})
const [headerContent,footerContent]=[`
	<!-- 咨询-->
	<div id="fixed_right">
		<a href="##"></a>
		<a href="##"></a>
		<a href="##"></a>
		<a href="##"></a>
		<a href="##"></a>
	</div>
	<!-- 顶部 -->
	<div id="wrapper_top">
		<div id="top" class="content">
			<div class="topLeft">
				<li>您好，欢迎来到易点租</li>
				<li>
					<a href="login.html">登录</a>
					<a href="register.html">注册</a>
				</li>
			</div>
			<div class="topRight">
				<li>销售热线： <span>400-810-9528</span></li>
				<li>客服热线： <span>400-886-9528</span></li>
				<li>
					<a href="##">服务中心</a>
				</li>
			</div>
		</div>
	</div>
	<!-- 头部 -->
	<div id="header" class="content clearfix">
		<a href="##" id="logo">易点租</a>
		<div  id="form">
			<form action="" method="">
				<input type="text" id="txt" placeholder="免押金租电脑">
				<div id="txtBox">
				</div>
				<a href="short.html" id="sub">搜索<i class="search"></i></a>
			</form>
			<ul>
				<li><a href="##">T420</a></li>
				<li><a href="##">苹果笔记本</a></li>
				<li><a href="##">X230</a></li>
				<li><a href="##">E470</a></li>
				<li><a href="##">戴尔笔记本</a></li>
				<li><a href="##">Office</a></li>
				<li><a href="##">净化器</a></li>
				<li><a href="##">惠普</a></li>
				<li><a href="##">小米</a></li>
			</ul>
		</div>
		<a href="shopping.html"><div id="shopping"><i class="shopping"></i>购物车<span>></span><i id="sum">0</i></div></a>
	</div>
	<!-- 导航 -->
	<div id="wrapper_nav">
	<div id="nav" class="content">
		<li><i class="icon_menu"></i>商品分类<i class="icon_down"></i>
			<div class="menu">
			<dl>
				<h2><i class="icon_computer"></i>办公电脑</h2>
				<p><a href="##">笔记本</a>
					<a href="##">台式机</a>
					<a href="##">一体机</a>
					<a href="##">主机</a>
				</p>
			</dl>
			<dl>
				<h2><i class="icon_peripheral"></i>办公外设</h2>
				<p><a href="##">投影仪</a>
					<a href="##">显示器</a>
					<a href="##">平板</a>
					<a href="##">手机</a>
					<a href="##">电视</a>
					<a href="##">配件</a>
				</p>
			</dl>
			<dl>
				<h2><i class="icon_software"></i>增值服务</h2>
				<p><a href="##">无忧服务</a>
					<a href="##">驻场服务</a>
					<a href="##">企业回收</a>
					<a href="##">计次上门服务</a>
					<a href="##">软件定制服务</a>
				</p>
			</dl>
			<dl>
				<h2><i class="icon_server"></i>办公电脑</h2>
				<p><a href="##">网络部署</a>
					<a href="##">服务器</a>
					<a href="##">工作站</a><br>
					<a href="##">打印机</a>
					<a href="##">净化器</a>
					<a href="##">Office</a>
				</p>
			</dl>
			</div>
		</li>
		<li><a href="../../index.html">首页</a></li>
		<li class="grab"><i class="icon_grab"></i><a href="promotion.html">限量特惠</a></li>
		<li class="new"><i class="icon_new"></i><a href="short.html">我要短租</a></li>
		<li><a href="service.html">增值服务</a></li>
		<li><a href="##">企业回收</a></li>
		<li><a href="##">客户说</a></li>
		<li><a href="##">资产管理</a></li>
	</div>
	</div>`
,
`<div id="footer_top" class="clearfix content">
		<ul>
			<li>
				<h3>关于易点租</h3>
				<a href="##">公司概况</a>
				<a href="##">商务合作</a>
				<a href="##">加入我们</a>
				<a href="##">联系我们</a>
				<a href="##">媒体报道</a>
			</li>
			<li>
				<h3>租机预订说明</h3>
				<a href="##">什么是免押金租赁</a>
				<a href="##">租机流程</a>
				<a href="##">租金缴付</a>
				<a href="##">租赁方式</a>
				<a href="##">租赁协议</a>
			</li>
			<li>
				<h3>租机费用及结算</h3>
				<a href="##">集团账号登录</a>
				<a href="##">服务中心</a>
			</li>
			<li>
				<h3>企业服务</h3>
				<a href="##">集团账号登录</a>
				<a href="##">服务中心</a>
			</li>
		</ul>
		<div class="f_logo">
			<img src="../img/f_logo.jpg" alt=""><br>
			<span>400-886-9528</span><br>
			<b>周一至周日(9:00-18:00)</b>
		</div>
	</div>
	<div id="footer_bottom">
		© Copyright Reserved 2014-2018　|  <i class="icon_jh"></i>京公网安备 11010102002019号   |　京ICP备14057387号-1　|　北京易点淘网络技术有限公司<br>
		办公地址： 北京市海淀区西二旗大街39号融通高科大厦二层 易点租
	</div>`]
