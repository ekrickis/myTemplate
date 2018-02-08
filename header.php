<?php require_once ("assets/custom_functions.php"); ?>
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<title>MTC Project</title>

	<link rel="stylesheet" type="text/css" href="assets/styles/style.min.css">
	<script src="assets/scripts/jquery.min.js"></script>
	<script src="assets/scripts/slick.min.js"></script>
	<script src="assets/scripts/scripts.min.js"></script>

</head>

<body>
	<header class="header">
		<div class="top-bar">
			<div class="top-bar__desktop show-for-large">
				<?php require_once ('parts/top-bar-services.php'); ?>			
				<?php require_once ('parts/top-bar-main.php'); ?>			
				<?php require_once ('parts/top-bar-nav.php'); ?>	
			</div>		

			<div class="top-bar__mobile hide-for-large">				
				<?php require_once ('parts/top-bar-mobile.php'); ?>			
			</div>
		</div>
	</header>