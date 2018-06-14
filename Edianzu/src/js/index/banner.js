
	function banner(){
	this.banner=$('#banner')
	this.aLi=this.banner.find('ul li')
	this.btnLeft=$('#direction>a').eq(0)
	this.btnRight=$('#direction>a').eq(1)
	this.bn=$('#btn>a')
	this.next=0
	this.timer=null
	}
	$.extend(banner.prototype,{
		init(){
			//开始轮播
			this.autoplay()
			//左右按钮
			this.left()
			this.right()
			//分页器
			this.btn()
			//移入停止 移除开始
			this.start()
			this.stop()
		},
		autoplay(){
			this.timer=setInterval($.proxy(this.autoplays,this),2000)
		},
		autoplays(){
			if(this.next==this.aLi.length-1){
				this.next=0
				}
			else{
				this.next++
				}
			this.toimg()
		},
		toimg(){
			this.aLi.eq(this.next).stop(true).fadeIn(500).siblings().fadeOut(500)
			this.bn.eq(this.next).addClass('bannerActive').siblings().removeClass('bannerActive')
		},
		left(){
			this.btnLeft.on('click',$.proxy(this.lefts,this))
		},
		lefts(){
			if(this.next==0){
				this.next=this.aLi.length-1
			}else{
				this.next--
			}
			this.toimg()
		},
		right(){
			this.btnRight.on('click',$.proxy(this.rights,this))
		},
		rights(){
			this.autoplays()
		},
		btn(){
			this.bn.on('mouseover',$.proxy(this.btns,this))
		},
		btns(event){
			this.next=$(event.target).index()
			this.toimg()
		},
		start(){
			this.banner.on('mouseout',()=>{this.autoplay()})
		},
		stop(){
			this.banner.on('mouseover',()=>{clearInterval(this.timer)})
		}
	})