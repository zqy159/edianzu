function register(){
	this.username=$('#username')
	this.password=$('#password')
	this.phone=$('#phone')
	this.input=$('input')
	this.box=$('#box')
	this.txyam=$('#txyam')
	this.dxyaz=$('#dxyaz')
	this.btn=$('#btn')
	_this=this
}
$.extend(register.prototype,{
	init(){
		this.username.on('blur',$.proxy(this.usernames,this))
		this.password.on('blur',$.proxy(this.passwords,this))
		this.phone.on('blur',$.proxy(this.phones,this))	
		this.btn.on('click',$.proxy(this.btns,this))
		this.input.on('click',$.proxy(this.inputs))
	},
	inputs(){
		$(this).parent().css('box-shadow','0 0 2px #37a3ff')
	},
	usernames(e){
		target=e.target
		$.ajax({
			url:'../php/select.php',
			data:{uname:_this.username.val()},
			dataType:'json',
			success(d){
				if(reg.username.test(_this.username.val())){
					if(!d.status){
						$(target).val('')
						$(target).next().show().find('span').html(d.info)
					}else{
						$(target).next().hide()
						$(target).parent().css('border','0')
					}
				}
				else{
					$(target).val('')
					$(target).parent().css('border','1px solid #f00')
					$(target).next().show().find('span').html('格式错误（要求5-18首为字母与数字特殊字符的组合）')
				}
			}
		})
	},
	passwords(){
		if(!reg.password.test(this.password.val())){
			this.password.val('')
			this.password.parent().css('border','1px solid #f00')
			this.password.next().show().find('span').html('格式错误（要求6-18英文数字特殊字符的组合）')
		}else{
			this.password.next().hide()
			this.password.parent().css('border','0')
		}
	},
	phones(){
		if(!reg.phone.test(this.phone.val())){
			this.phone.val('')
			this.phone.parent().css('border','1px solid #f00')
			this.phone.next().show().find('span').html(' 手机号码格式不正确')
		}else{
			this.phone.next().hide()
			this.phone.parent().css('border','0')
		}
	},
	btns(){
		if(this.username.val() && this.password.val() && this.phone.val()){
			$.ajax({
			url:'../php/register.php',
			data:{uname:_this.username.val(),upwd:_this.password.val(),uphone:_this.phone.val()},
			dataType:'json',
			success(d){
				alert(d.info)
				d.status?location.href='login.html':null	
				}
			})
		}else{
			alert('请把信息填完整')
		}
	}
})
new register().init()