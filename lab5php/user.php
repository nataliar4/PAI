<?php session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
    <title>PHP</title>
    <meta charset='UTF-8' />
  </head>
  <body>
    <?php 
      require_once "funkcje.php";
      if ($_SESSION['zalogowany'] != 1 or !isset($_SESSION['zalogowany'])) {
        header("Location: index.php");
      } else {
        echo "<h2>Dzień dobry, ";
        echo $_SESSION['zalogowanyImie'];
        echo "</h2>";
      }
    ?>
    <a href="index.php">Wróć do strony logowania</a>

    <form action="index.php" method="post">
      <input type="submit" name="wyloguj" value="wyloguj"/>
    </form>

    <form action='dodajZdjecie.php' method='POST' enctype='multipart/form-data'>
      <fieldset>
        <legend>Dodawanie i wyświetlanie zdjęcia</legend>
        <input type="file" name="myfile">
        <br><br>
        <input type="submit" name="addmyfile">
      </fieldset>
    </form>

    <img src="/zdjecia/zdjecie.jpg?"
         alt="Brak zdjęcia" width="100%">
  </body>
</html>