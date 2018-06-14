function promotionHtml(){
	this.main=$('#main')
}
$.extend(promotionHtml.prototype,{
	init(data){
		let [promotionContent,j]=[``,0]
		for(j=0;j<4;j++){
			promotionContent+=`<div class="content-main">
			<div class="content-mains">
			<p>${data.promotion[j].txt}</p>
			<p>${data.promotion[j].i}</p>
			<ul>
				<li>${data.promotion[j].li1}</li>
				<li>${data.promotion[j].li2}</li>
				<li>${data.promotion[j].li3}</li>
				<li>${data.promotion[j].li4}/li>
			</ul>
			<div style="clear: both"></div>
			<p><span>月租金：</span>${data.promotion[j].price}<span>原价：${data.promotion[j].price}</span></p>
			<a href="##"  class='product' data-productId='${data.promotion[j].id}'>马上租赁</a>
			</div>
			<img src="../${data.promotion[j].img}" style="float: right;">
			</div>
			
			`
		}
		for(j=4;j<13;j++){
			promotionContent+=`
			<div class="content-main">
			<div class="content-main-divs">
			<img src="../${data.promotion[j].img}">
			<p>${data.promotion[j].txt}</p>
			<i>${data.promotion[j].prices}</i>
			<span>月租金:</span><b>${data.promotion[j].price}</b>
			<a href="##" class='product' data-productId='${data.promotion[j].id}'>马上租赁</a>
			</div>
			<div class="content-main">
			`
		}
		this.main.html(promotionContent)
	}
})

