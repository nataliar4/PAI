<?php
  $currentDir = getcwd();
  $uploadDirectory = "/zdjecia/";
  $fileName = $_FILES['myfile']['name'];
  $fileSize = $_FILES['myfile']['size'];
  $fileTmpName = $_FILES['myfile']['tmp_name'];
  $fileType = $_FILES['myfile']['type'];

  if ($fileName != "" and
      ($fileType == 'image/png' 
      or $fileType == 'image/jpeg' 
      or $fileType == 'image/JPEG' 
      or $fileType = 'image/PNG' 
      or $fileType == 'image/jpg' 
      or $fileType = 'image/JPG')) {
      $uploadPath = $currentDir . $uploadDirectory . "zdjecie.jpg";
      if (move_uploaded_file($fileTmpName, $uploadPath)) {
          header("Location: user.php");
          echo "Zdjecie załadowane";

      }
  }

  header("Location: user.php");
?>