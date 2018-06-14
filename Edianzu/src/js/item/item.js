
var p1=new Promise(function(resolve,reject){
	$.ajax({
		url:"../js/product.json",
		dataType:'json',
		success:function(data){
			resolve(data)		
		},
		error:function(){
			$('#main').html("<img src='../img/404.jpg'/>")
		}
})
})

p1.then(function(data){
	dataId=location.href.split('-')
	var name=dataId[1]
	var num=(dataId[2]-1)*6+parseInt(dataId[3]-1)
	//公共页面
	new commonHtml().init()
	//加载页面
	new itemHtml(data,name,num).init()
	//公共文件
	new common().init()
	//放大镜
	new Magnifier().init()
})
