
function indexHtml(data){
this.hot=$('#main')
this.floor=$('#floor')
this.data=data

}
$.extend(indexHtml.prototype,{
	init(){
		// 热点内容
		this.hotContent()
		// 楼层内容
		this.floorContent()
	},
	hotContent(){
		const indexHot=`<!-- hot --><div id="hot" class="clearfix">
			<h2><i class="icon_hotmodel"></i>热销机型</h2>
			<img src="src/img/hot.png" alt="">
			<div class="hot_left">
				<a href="##">
					<span class='product' data-productId='${this.data.hot[0].id}'>易办公QuickPC E21Pro 台式机</span><br>
					<i>卓越性能 尽情释放</i><br>
					<b>${this.data.hot[0].price}/月</b><br>
					<img src="src/${this.data.hot[0].img}" alt="" class='product' data-productId='${this.data.hot[0].id}'>
				</a>
				
				<a href="##">
					<span class='product' data-productId='${this.data.hot[1].id}'>易办公QuickPC E21Pro 台式机</span><br>
					<i>卓越性能 尽情释放</i><br>
					<b>${this.data.hot[1].price}/月</b><br>
					<img src="src/${this.data.hot[1].img}" alt="" class='product' data-productId='${this.data.hot[1].id}'>
				</a>
			</div>
			<div class="hot_center">
				<a href="##">
					<span class='product' data-productId='${this.data.hot[2].id}'>易办公QuickPC E21Pro 台式机</span><br>
					<i>卓越性能 尽情释放</i><br>
					<b>${this.data.hot[2].price}/月</b><br>
					<img src="src/${this.data.hot[2].img}" alt="" class='product' data-productId='${this.data.hot[2].id}'>
				</a>
			</div>
			<div class="hot_right">
				<a href="##">
					<span class='product' data-productId='${this.data.hot[2].id}'>ThinkPad X220 极速版</span><br>
					<i>卓越性能 尽情释放</i><br>
					<b>${this.data.hot[3].price}/月</b>
					<img src="src/${this.data.hot[3].img}" alt="" class='product' data-productId='${this.data.hot[2].id}'>
				</a>
				<a href="##">
					<span  class='product' data-productId='${this.data.hot[4].id}'>ThinkPad X220 极速版</span><br>
					<i>卓越性能 尽情释放</i><br>
					<b>${this.data.hot[4].price}/月</b>
					<img src="src/${this.data.hot[4].img}" alt="" class='product' data-productId='${this.data.hot[4].id}'>
				</a>
				<a href="##">
					<span  class='product' data-productId='${this.data.hot[5].id}'>ThinkPad X220 极速版</span><br>
					<i>卓越性能 尽情释放</i><br>
					<b>${this.data.hot[5].price}/月</b>
					<img src="src/${this.data.hot[5].img}" alt="" class='product' data-productId='${this.data.hot[5].id}'>
				</a>
			</div>
		</div>`
		this.hot.prepend(indexHot)
	},
	floorContent(){
		$(window).on('scroll',$.proxy(this.scrolls,this))
	},
	scrolls(){
		let [indexContent,next,i,j,k]=[``,parseInt($('html').scrollTop())/420-1,0,0,0]
		next=next>=5?5:next
		for(i=0;i<next;i++){
			indexContent+=`<div class="floor clearfix">
			<h2 class="f${i+1}_color"><i class="icon_floor${i+1}"></i>${this.data.floor[6*i].h1}</h2>
			<img src="src/img/floor${i+1}.jpg" alt="">
			<div id="t_right">
			<div class="floor_top clearfix">`
		for(j=0;j<=3;j++){
			indexContent+=`<a href="##">
				<dl >
				<dt><img src="src/${this.data.floor[6*i+j].img}" alt="" class='product' data-productId='${this.data.floor[6*i+j].id}'></dt>
				<dd><span class='product' data-productId='${this.data.floor[6*i+j].id}'>${this.data.floor[6*i+j].txt}</span><br>
				<b>${this.data.floor[6*i+j].price}/月</b>
				</dd>
				</dl>
				</a>`
			}
		indexContent+=`</div>
			<div class="floor_bottom clearfix">`
		for(k=4;k<=5;k++){
			indexContent+=`<a href="##">
					<dl href="##">
					<dt><img src="src/${this.data.floor[6*i+k].img}" alt="" class='product' data-productId='${this.data.floor[6*i+k].id}'></dt>
					<dd><span  class='product' data-productId='${this.data.floor[6*i+k].id}'>${this.data.floor[6*i+k].txt}</span><br>
					<b>${this.data.floor[6*i+k].price}/月</b>
					</dd>
					</dl>
				</a>`
			}
		indexContent+=`</div></div></div>`}
		this.floor.html(indexContent)
	}
})
	

