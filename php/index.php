<!DOCTYPE html>
<html>
<body>

        <div>
          <?php echo rand(0, 1000) ?>
        </div>
<?php
$myfile = fopen("mockdata.json", "r");
$json = fread($myfile,filesize("mockdata.json"));
$data = json_decode($json);
foreach ($data as $item) {
?>

  <div>
          <h1><?php echo $item->dob; ?></h1>
          <h2><?php echo $item->salary; ?></h2>
          <p><?php echo $item->description; ?></p>
          <ul>
            <li><?php echo $item->address->street; ?></li>
            <li><?php echo $item->address->town; ?></li>
            <li><?php echo $item->address->postode; ?></li>
          </ul>
          <button><?php echo $item->verified == true ? "Yes" : "No"; ?></button>
        </div>
<?php
}
?>

</body>
</html> 