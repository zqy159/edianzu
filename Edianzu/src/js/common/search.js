txt=$('#txt')
box=$('#txtBox')
function handel(data) {
		box.show()
		box.html('')
		for(var i=0;i<5;i++){
			li=$('<li></li>')
			li.html(data.s[i])
			box.append(li);
		}
		box.on('click',function(e){
			target=e.target
			if(target.tagName=='LI'){
				txt.val($(target).html())
				box.hide()
			}
		})
}
$(document).on('click',function(){
	box.hide()
})
txt.on("input",function(){
	val=txt.val()
	var script=$(`<script src="http://suggestion.baidu.com/su?cb=handel&wd=${val}"></script>`)
	$('body').append(script)
	$(script).remove()
})
