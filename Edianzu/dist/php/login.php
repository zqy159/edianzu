<?php
	include "public.php";
	$uname = $_REQUEST["uname"];
	$upwd= $_REQUEST["upwd"];
	$sql="SELECT * FROM `user` WHERE uname='$uname'";
	$rows = mysqli_query($conn,$sql);
	//获取关联数组
	$arr = mysqli_fetch_assoc($rows);
	if($arr['uname']){
		if($arr["upwd"] == $upwd ){
			echo json_encode(["status"=>1,"info"=>'登录成功']);
		}else{
			echo json_encode(array("status"=>2,"info"=>"密码错误"));
		}
	}
	else{
		echo json_encode(array("status"=>0,"info"=>"用户名错误"));
	}
	
?>