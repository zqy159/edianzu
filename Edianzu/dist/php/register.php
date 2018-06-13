<?php
	include "public.php";
	$uname = $_REQUEST["uname"];
	$upwd= $_REQUEST["upwd"];
	$uphone= $_REQUEST["uphone"];
	$sql = "INSERT INTO `user`(`uname`, `upwd`, `uphone`) VALUES ('$uname','$upwd','$uphone')";

	//执行sql语句
	$rows = mysqli_query($conn,$sql);

	if($rows){
		echo json_encode(array("status"=>1,"info"=>"注册成功"));
	}else{
		echo json_encode(array("status"=>0,"info"=>"失败"));
	}



?>