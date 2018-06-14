function itemHtml(data,name,num){
	this.main=$('#main')
	this.data=data
	this.name=name
	this.num=num
	//内容
	this.itemContent()
	this.increase=$('#increase')
	this.decrease=$('#decrease')
	this.val=$('#item_val')
	this.shop=$('#shop')
	this.sum=$('#sum')
	
}
$.extend(itemHtml.prototype,{
	init:function(){
		//增加删除
		console.log(this.increase)
		this.increase.on('click',$.proxy(this.increases,this))
		this.decrease.on('click',$.proxy(this.decreases,this))
		this.shop.on('click',$.proxy(this.skip,this))
	},
	itemContent(){
		this.main.html(`<div id="box" class='content'>
			<div class="b_left">
				<div id="img">	
					<img src="../${this.data[this.name][this.num].img}" alt="">
					<div id="box_small"></div>
				</div>
				<div id="img_small">
					<img src="../${this.data[this.name][this.num].img}" alt="">
					<img src="../img/item_img2.jpg" alt="">
					<img src="../img/item_img3.jpg" alt="">
					<img src="../img/item_img4.jpg" alt="">
				</div>
				<div id="img_large">
					<img src="../${this.data[this.name][this.num].img}" alt="">
				</div>
			</div>
			<div class="b_right">
				<div class='right_top'>
					<p>${this.data[this.name][this.num].txt}</p>
					<p>特价促销，数量有限！</p>
					<p><span>月租金</span>:${this.data[this.name][this.num].price} <span>全新设备</span></p>
				</div>
				<div class='right_middle'>
					<p>选择配置：</p>
					<p>增值保障：</p>
					<p>起租日期：</p>
					<p>数量：
						<button id="decrease">-</button><input type="text" id="item_val" value='1'><button id='increase'>+</button>
					</p>
					<p>押金：
设备押金:<span>￥2500</span>， 可免除押金:<span>￥0</span>， 需支付押金:<span>￥2500</span></p>
				<div>
				<div class="right_bottom">
					<p>合计首期租金：<span>${this.data[this.name][this.num].price}</span></p>
					<a href="shopping.html"><input type="button" value='立即下单'></a>
					<input type="button" value='加入购物车' id='shop'>
					<a href="">什么是免押金租赁？</a>
				</div>
				</div>
			</div>
		</div>
	</div>`)
	},
	increases:function(){
		let m=parseInt(this.val.val())
		m++
		this.val.val(m)
	},
	decreases:function(){
		let m=parseInt(this.val.val())
		m--
		m<=1?m=1:m--
		this.val.val(m)
	},
	skip:function(){
		const local=window.localStorage
		if(local.length!=0){
			var da=JSON.parse(local.date)
			local.sum=parseInt(local.sum)+parseInt(this.val.val())
			alert('添加成功,赶快去下单吧！');
		}else{
			da={}
			local.sum=parseInt(this.val.val())
		}	
		new common().init()
		this.sum.html(local.sum)
		const m=this.data[this.name][this.num].id
			n=da[m]
			n?n+=parseInt(this.val.val()):n=parseInt(this.val.val())
			da[m]=n
			local.date=JSON.stringify(da)
	},
})