var p1=new Promise(function(resolve,reject){
	$.ajax({
		url:"../js/product.json?",
		dataType:'json',
		success:function(data){	
			resolve(data)
		}
	})
})
	$('#main').on('click',function(e){
		var target=e.target
		if(target.className=='product'){	
			target.id=target.getAttribute('data-productId')
			location.href="../html/item.html?"+target.id
			
		}
})
//公共页面
new commonHtml().init()
p1.then(function(data){
	new promotionHtml().init(data)
	//公共文件
	new common().init()
	//数据增减
})