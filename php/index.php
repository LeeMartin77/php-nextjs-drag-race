<!DOCTYPE html>
<html>
<body>

<?php
$myfile = fopen("mockdata.json", "r");
$json = fread($myfile,filesize("mockdata.json"));
 $data = json_decode($json);
 foreach ($data as $item) {
  echo '<div>' . $item->description . '</div>';
}

?>

</body>
</html> 