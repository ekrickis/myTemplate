<?php 

// Returns path of the image
function get_image ($image_name, $extension = '.jpg') {
	$image_name;
	$image_path = 'assets/images/dist/' . $image_name . $extension;
	return $image_path;
}

?>