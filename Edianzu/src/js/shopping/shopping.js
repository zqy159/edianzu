let p1=new Promise(function(resolve,reject){
	$.ajax({
		url:'../js/product.json',
		dataType:'json',
		success:function(data){
			resolve(data)
		}
	})
})

p1.then(function(data){
	local=window.localStorage
	if(local.length!=0){
		new shoppingHtml(data,local).init()
		new shopping().init()
		//购物车行为
	}else{
		alert('购物车空空如也，你要是够了!')
	}
})
	