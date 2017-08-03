<?php
  setlocale(LC_CTYPE, 'en_US.UTF-8');

  // config
  $domain = 'mail.welchezukunft.org';
  $log_dir = '/var/newsletter';
  $err_sub_mail_missing = 'Bitte geben Sie eine Email-Adresse an.';
  $ok_sent_data_success = 'Daten erfolgreich übermittelt.' . "\r\n" .
    'Bitte bestätigen Sie die Email, welche Sie in Kürze von uns erhalten. //' . "\r\n" .
    'Data sent succesfully. Please confirm the email you should receive shortly.';
  $err_sent_data_failed = 'Fehler bei der Übermittlung der Daten. //' . "\r\n" .
    'Error sending data.';
  $ok_sub_confirmed = 'Eintragung in den Workshop/Newsletter erfolgreich bestätigt. //' . "\r\n" .
    'Subscription to workshop/newsletter succesfully confirmed.';
  $ok_unsub_confirmed = 'Austragung aus dem Workshop/Newsletter erfolgreich bestätigt. //' . "\r\n" .
    'Unsubscription from workshop/newsletter succesfully confirmed.';
  $err_unknown_action = 'Keine oder unbekannte Anweisung.';
  $err_agb_unaccepted = 'Sie müssen den AGB zustimmen. //' . "\r\n" .
    'You must accept the conditions.';

  // define variables and set to empty values
  //// given via GET
  $subject = $action = $unsub_mail = $ml = "";
  //// given via POST
  $sub_mail = $name_first = $name_last = $agb = "";
  //// used in form
  $feedback = $result_display = "";
  //// used only here
  $mail_address = $mail_subject = $mail_msg = $return_value = "";
  $return_value_log = "";

  // functions

  //// input validation

  function isAscii($data) {
    return mb_check_encoding($data, 'ASCII');
  }

  function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }

  //// storing names along side address
  //// TODO

  //// mail

  function _mail($adr, $subj, $msg) {
    global $domain;
    $return_value = mail($adr.'@'.$domain, $subj, $msg);
    return $return_value;
  }

  // sub form logic if POST
  // otherwise GET stuff

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
      // validate input and put into vars
      $ml_name = test_input($_POST["list"]);
      $log_file = $log_dir.'/'.$ml_name;
      $sub_mail = test_input($_POST["mail"]);
      $name_first = test_input($_POST["vorname"]);
      $name_last = test_input($_POST["nachname"]);
      $agb = test_input($_POST["agb"]);
    // start doing sub stuff if mail address is provided
    // else throw error
    if (filter_var($sub_mail, FILTER_VALIDATE_EMAIL) && $agb == "YES") {
      // set vars for mail to send
      //// we must replace '@' of the users address so we can mail ist to ezmlm
      $sub_mail_ezmlm = str_replace('@', '=', "$sub_mail");
      $adr = $ml_name.'-subscribe-'.$sub_mail_ezmlm;
      $subj = "";
      $msg = "";
      $sub_log = $sub_mail . " \"" . $name_first . " " . $name_last ."\"\r\n";
      $return_value = _mail($adr, $subj, $msg);
      $return_value_log = file_put_contents($log_file, $sub_log, FILE_APPEND | LOCK_EX);
      if ($return_value == TRUE && $return_value_log != FALSE) {
        $feedback = $ok_sent_data_success;
      } else {
        $feedback = $err_sent_data_failed;
      }
    } else {
      $feedback = $err_sub_mail_missing;
    }
    // Check for accepted conditions
    if ($agb != "YES") {
      $feedback = $err_agb_unaccepted;
    }
    if (empty($feedback)) {
      $result_display = 'display:none;';
    } else {
      $result_display = 'display:block;';
    }
    echo $feedback;
  } else {
    // GET stuff
    if (!empty($_GET["ml"])) {
      $ml_name = test_input($_GET["ml"]);
    } else {
      $ml_name = 'newsletter';
    }

    // confirmations
    if (!empty($_GET["subject"])) {
      $action = test_input($_GET["action"]);
      $adr = $ml_name.'-request';
      $subj = test_input($_GET["subject"]);
      $msg = "";

      $return_value = _mail($adr, $subj, $msg);
      if ($return_value == TRUE) {
        switch ($action) {
          case 'sub':
            $feedback = $ok_sub_confirmed;
            break;
          case 'unsub':
            $feedback = $ok_unsub_confirmed;
            break;
          default:
            $feedback = $err_unknown_action;
            break;
        }
      } else {
        $feedback = $err_sent_data_failed;
      }
      echo("<p>$feedback</p>");
     }
    // unsub
    if (!empty($_GET["unsub"])) {
      $unsub_mail = test_input($_GET["unsub"]);
      //// we must replace '@' of the users address so we can mail ist to ezmlm
      $unsub_mail_ezmlm = str_replace('@', '=', "$unsub_mail");
      $adr = $ml_name.'-unsubscribe-'.$unsub_mail_ezmlm;
      $subj = "";
      $msg = "";

      $return_value = _mail($adr, $subj, $msg);
      if ($return_value == TRUE) {
        $feedback = $ok_sent_data_success;
      } else {
        $feedback = $err_sent_data_failed;
      }
      echo("<p>$feedback</p>");
     }
  }
?>

