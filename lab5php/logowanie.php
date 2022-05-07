<?php
  session_start();
  require 'funkcje.php'; 
  $login = test_input($_POST['f_login']);
  $pass = test_input($_POST['f_password']);

  if ($login == $osoba1->login
  and $pass == $osoba1->haslo) {
    echo("user1");
    $_SESSION['zalogowanyImie'] = $osoba1->imieNazwisko;
    $_SESSION['zalogowany'] = 1;
    header("Location: user.php");
  } else if ($login == $osoba2->login
  and $pass == $osoba2->haslo) {
    echo("user2");
    $_SESSION['zalogowanyImie'] = $osoba2->imieNazwisko;
    $_SESSION['zalogowany'] = 1;
    header("Location: user.php");
  } else {
    echo("użytkownik nie istnieje");
    header("Location: index.php");
  }
  // $pass = $_POST['f_password'];
  // echo("Przesłany login: $login");
  // echo("Przesłane hasło: $pass");
?>