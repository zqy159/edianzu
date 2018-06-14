function cutepage(data){
	this.main=$('#main')
	this.cutLeft=$('#cutLeft')
	this.cutRight=$('#cutRight')
	this.cutpage=$('.cutpage')
	this.cutpages=$('.cutpages')
	this.data=data
	this.next=0
}
$.extend(cutepage.prototype,{
	init(){
		this.creatBtn()
		this.shortHtml()
		this.left()
		this.right()
		this.btn()
	},
	shortHtml(){
		let [shortContent,k]=['<div class="products"><ul>',this.next*8]
		while(k<Math.min((this.next+1)*8,this.data.short.length)){
			shortContent+=`<a href="##"><li >
					<img src=../${this.data.short[k].img} width=230 height=230  alt="" class='product' data-productId='${this.data.short[k].id}'>	
					<p class='product' data-productId='${this.data.short[k].id}'>${this.data.short[k].txt}</>
					<span>
					<b>${this.data.short[k].price}</b>/月
					</span>
					</li></a>`
			k++
		}
		shortContent+=`</ul></div>`
		this.main.html(shortContent)
	},
	creatBtn(){
		let k=1
		while(k<=Math.ceil(this.data.short.length/8)){
			this.cutpage.append(`<a href='##'>${k}</a>`)
			this.cutpages.css({'width':k*50+80})
			k++
		}
		this.cutBtn=$('.cutpage>a')
		this.cutBtn.eq(0).addClass('pageActive')
	},
	toimg(){
		this.cutBtn.eq(this.next).addClass('pageActive').siblings().removeClass('pageActive')
		this.shortHtml()
	},
	left(){
		this.cutLeft.on('click',$.proxy(this.lefts,this))
	},
	lefts(){
		if(this.next==0){
			this.next=this.cutBtn.length-1
		}else{
			this.next--
		}
		this.toimg()
	},
	right(){
		this.cutRight.on('click',$.proxy(this.rights,this))
	},
	rights(){
		if(this.next==this.cutBtn.length-1){
			this.next=0
		}else{
			this.next++
		}
		this.toimg()
	},
	btn(){
		this.cutBtn.on('click',(event)=>{this.next=$(event.target).index();this.toimg()})
	}
})