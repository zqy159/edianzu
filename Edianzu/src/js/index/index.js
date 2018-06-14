$('#main').on('click',function(e){
		var target=e.target
		if(target.className=='product'){
			target.id=target.getAttribute('data-productId')
			location.href="src/html/item.html?"+target.id
		}
})
var p1=new Promise(function(resolve,reject){
	$.ajax({
		url:'src/js/product.json',
		dataType:'json',
		success:function(data){
			resolve(data)	
		}
	})
})
p1.then(function(data){
	//页面文件
	new indexHtml(data).init()
	//公共文件
	new common().init()
	//轮播
	new banner().init()
	//楼层
	new floor().init()
})
