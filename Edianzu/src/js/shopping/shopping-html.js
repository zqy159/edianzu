function shoppingHtml(data,local){
	this.data=data
	this.local=local
	this.box_wrapper=$('#box_wrapper')
}
$.extend(shoppingHtml.prototype,{
	init(){
		for(var key in JSON.parse(this.local.date)){
			name=key.split('-')[1]
			mum=(key.split('-')[2]-1)*6+parseInt(key.split('-')[3]-1)
		this.box_wrapper.append(`
			<div id="box" data-id="${this.data[name][mum].id}">
			<input type="checkbox" checked="checked" class='check'>
			<img src="../${this.data[name][mum].img}" alt="">
			<a href="#">${this.data[name][mum].txt}</a>
			<span>¥ 203</span>
			<span class="k">${this.data[name][mum].price}</span>
			<span class="select">
				<button class="decrease">-</button>
				<input type="text" value="${JSON.parse(this.local.date)[key]}" id="mum" class="n">
				<button class="increase">+</button>
			</span>
			<span><a href="#" class="del">删除</a><br/>
				<a href="#" class="col">转到我的收藏</a>
			</span>
		</div>
		</div>
			`)
	}
}
})