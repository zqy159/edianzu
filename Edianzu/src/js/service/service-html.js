function serviceHtml(){
	this.main=$('#main')
}
$.extend(serviceHtml.prototype,{
	init(data){
		let [servieceContent,i,j]=[``,0,0]
		for(i=0;i<4;i++){
		servieceContent+=`<div class="service-item">
			<p>${data.service[i*4].txt1}</p>
				<div class="service-left">
					<h4>${data.service[i*4].txt1}</h4>
					<span>${data.service[i*4].txt2}</span>
					<i></i>
					<p>${data.service[i*4].txt3}</p>
				</div>`
		for(j=1;j<4;j++){
		servieceContent+=`<div class="service-right">
					<img src="../${data.service[Math.min(i*4+j,20)].img}" alt="" width=180 height="180">
					<p>${data.service[i*4+j].txt}</p>
					<b>${data.service[i*4+j].price}</b>
					<span class='product' data-productId='${data.service[i*4+j].id}'}>立即预定</span>
				</div>`
		}
		servieceContent+=`</div>`
		this.main.html(servieceContent)
		}
	}
})
