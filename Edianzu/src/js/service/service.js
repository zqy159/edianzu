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

p1.then(function(data){
	//内容
	new serviceHtml().init(data)
	new commonHtml().init()
	//公共页面
	new common().init()
	//数据增减
})