<?php

	if($_SERVER["REQUEST_METHOD"] == "POST") {
		$myPassword    = $_POST["mypassword"];
		if($myPassword=="0103") {
			$myfile = fopen("data.txt","r") or die("Something went wrong.");
			while(!feof($myfile)) {
				echo fgets($myfile)."<br>";
			}
			fclose($myfile);	
		} else {
			echo "Wrong Password.";
		}

		
	}

?>