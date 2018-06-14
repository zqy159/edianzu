function floor(){
this.fixed=$('#fixed_left')
this.floorBtn=$('#fixed_left>a')
}
$.extend(floor.prototype,{
	init:function(){
		this.scroll()
	},
	scroll:function(){
		$(window).on('scroll',$.proxy(this.scrolls,this))
	},
	scrolls:function(){
		const top=$(window).scrollTop()
		top>500?this.fixed.show():this.fixed.hide()
		index=parseInt(top/500)-1
		for(var i=0;i<this.floorBtn.length;i++){
			this.floorBtn.eq(index).addClass('floorActive').siblings().removeClass('floorActive')
			this.floorBtn.eq(index).html(this.f1[index])
			this.floorBtn.eq(i).html(this.f2[i])
		}
	},
	f1:{0:'热销',1:'行政',2:'技术',3:'商务',4:'图形',5:'外设',6:'合作'},
	f2:{0:'Hot',1:'F1',2:'F2',3:'F3',4:'F4',5:'F5',6:'合作'}
})
	
