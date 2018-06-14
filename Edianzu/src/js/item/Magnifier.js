function Magnifier(){
	this.small=$('#img_small img')
	this.middle=$('#img>img')
	this.box=$('#img')
	this.min=$('#box_small')
	this.max=$('#img_large')
	this.mImg=$('#img_large img')
	}
$.extend(Magnifier.prototype,{
	init(){
		this.small.on('mouseover',$.proxy(this.Inits,this))
		this.move()
	},
	Inits:function(event){
		this.middle.attr({'src':event.target.src})
		this.mImg.attr({'src':event.target.src})
	},
	move(){
		this.box.on('mousemove',$.proxy(this.moves,this))
		this.box.on('mouseout',$.proxy(this.handleOut,this))
	},
	moves:function(e){
		this.min.show()
		this.max.show()
		l=e.pageX-this.min.outerWidth()/2-this.box.offset().left
		t=e.pageY-this.min.outerHeight()/2-this.box.offset().top
		bl=this.box.outerWidth()-this.min.outerWidth()
		bt=this.box.outerHeight()-this.min.outerHeight()
		l=l>bl-10?bl-10:(l<10?10:l)
		t=t>bt?bt:(t<0?0:t)
		this.min.css({left:l,top:t})
		this.mImg.css({left:-2*l,top:-2*t})
	},
	handleOut(){
		this.min.hide()
		this.max.hide()
	}
})