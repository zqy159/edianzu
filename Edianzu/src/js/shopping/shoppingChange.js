function shopping() {
	this.main=$('#main')
	this.all=$('#all')
	this.rall=$('#rall')
	this.checkMin=$(".check")
	this.increase=$('.increase')
	this.result=0
	this.price=$('.k')
	this.cum=$('.n')
	this.sumprice=$('#sumPrice')
	this.del=$('.del')
	this.sum=$('#sum')
	this.m=JSON.parse(local.date)
	this.local=window.localStorage
}
$.extend(shopping.prototype,{
	init(){
		this.btn()
		this.sumPrice()
		this.sum.html(this.local.sum)
	},
	sumPrice(){
		this.result=0
		for(let i=0;i<this.cum.length;i++){
			if(this.checkMin.eq(i).prop('checked')){
				this.result+=parseInt(this.cum.eq(i).val()*this.price.eq(i).html().slice(1))
			}
		}
		this.sumprice.html('￥'+this.result)
	},
	btn(){
		this.main.on('click',$.proxy(this.btns,this))
	},
	btns(event){
		let target=event.target
		this.checkMin=$(".check")
		this.targetId=$(target).parent().parent().attr('data-id')
		//全选
		if(target.id=='all'){
			this.checkMin.prop({'checked':this.all.prop('checked')?true:false})
			this.rall.prop({'checked':false})
		}
		// 反选
		if(target.id=='rall'){
			for(let i=0;i<this.checkMin.length;i++){
			this.checkMin.eq(i).prop({'checked':this.checkMin.eq(i).prop('checked')?false:true})
			}
			this.all.prop({'checked':false})
		}
		//子选项改变主选项
		if(target.className=='check'){
			for(let i=0;i<this.checkMin.length;i++){
				if(!this.checkMin[i].checked){
					$('#all').prop({'checked':false})
					break
				}else{
					$('#all').prop({'checked':true})
					this.rall.prop({'checked':false})
				}
			}
		}
		// 改变输入框的值
		if(target.id=='mum'){
			$(target).on('blur',()=>{
				this.m[this.targetId]=$(target).val()
			})
		}
		// 增加
		if(target.className=="increase"){
			let num=$(target).prev().val()
			num++
			this.m[this.targetId]++
			$(target).prev().val(num)
		}
		// 减少
		if(target.className=="decrease"){
			let num=$(target).next().val()
			if(num<=1){num=1}else{num--;this.m[this.targetId]--}
			$(target).next().val(num)
		}
		// 删除
		if(target.className=='del'){
			delete this.m[this.targetId]
			$(target).parent().parent().remove()
			this.cum=$('.n')
			this.price=$('.k')
		}
		this.local.sum=0
		for(let i in this.m){
			this.local.sum=parseInt(this.local.sum)+parseInt(this.m[i])
		}
		this.sumPrice()
		this.sum.html(this.local.sum)
		this.local.date=JSON.stringify(this.m)	
	}
})