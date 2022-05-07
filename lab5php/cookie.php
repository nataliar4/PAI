<?php session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
    <title>PHP</title>
    <meta charset='UTF-8' />
  </head>
  <body>
    <?php 
      require_once("funkcje.php");
      $cookieTime = $_GET['czas'];
      setcookie("ciasteczko", "dowolne", time()+$cookieTime, "/");
      echo "Ciasteczko";
    ?>
    <a href="index.php">Wstecz</a>
  </body>
</html>