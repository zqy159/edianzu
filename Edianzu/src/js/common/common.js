//实时记录数量
function common(){
	this.local=window.localStorage
	this.sum=$('#sum')
}
$.extend(common.prototype,{
	init:function(){
		if(this.local.length!=0){
			this.sum.html(this.local.sum)
		}else{
			this.sum.html(0)
		}
	}
})
	



