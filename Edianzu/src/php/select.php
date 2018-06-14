<?php
	include "public.php";
	$uname = $_REQUEST["uname"];
	$sql="SELECT * FROM `user` WHERE uname='$uname'";
	$rows = mysqli_query($conn,$sql);
	//获取关联数组
	$arr = mysqli_fetch_assoc($rows);
	if($arr['uname']){
		echo json_encode(array("status"=>0,"info"=>"该用户名已经被注册"));
	}else{
		echo json_encode(array("status"=>1,"info"=>"该用户名符合要求"));
	}
	
?>