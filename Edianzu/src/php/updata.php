<?php
	include "public.php";
	$uname = $_REQUEST["uname"];
	$upwd= $_REQUEST["upwd"];
	$sql = "UPDATE `user` SET `upwd`='$upwd' WHERE uname='$uname'";

	$rows = mysqli_query($conn,$sql);

	//获取关联数组
	if($rows){
		echo json_encode(array("status"=>1,"info"=>"更改成功，祝您愉快"));
	}else{
		echo json_encode(array("status"=>0,"info"=>"用户名不存在"));
	}
?>