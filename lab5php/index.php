<?php session_start(); ?>
<!DOCTYPE html>
<html>
  <head>
    <title>PHP</title>
    <meta charset='UTF-8' />
  </head>
  <body>
    <?php
      echo("<h1>Nasz system</h1>");
      $_SESSION['zalogowany'] = 0;
    ?>
    <form action="logowanie.php" method="post">
      <fieldset>
        <legend>Logowanie</legend>

        <label for="f_login">Login: </label>
        <input type="text" name="f_login">
        <br>
        <br>
        <label for="f_password">Hasło: </label>
        <input type="password" name="f_password">
        <br>
        <br>
        <input type="submit" name="f_zaloguj" value="Zaloguj">
      </fieldset>
    </form>

    <a href="user.php">Go to user</a>
    <br>
    <br>
    
    <form action="cookie.php" method="get">
      <fieldset>
        <legend>Ciasteczko</legend>
        <label for="czas">Czas życia ciasteczka: </label>
        <input type="number" name="czas">
        <br>
        <input type="submit" name="utworzCookie" value="utwórz ciasteczko">
        <br>
        <?php
        if (isset($_COOKIE['ciasteczko'])) {
          echo "Jest sobie ciasteczko " . $_COOKIE['ciasteczko'];
        } else {
            echo "Nie ma ciasteczka";
        }
        ?>
      </fieldset>
    </form>

  </body>
</html>