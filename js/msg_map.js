function msg_map(msg) {
  var result;
  var patt = new RegExp("No message available");
  if ( language == 'eng' ) {
    switch(msg) {
      case "success":
          result = 'Application successful. Please verify the email that you will receive shortly.';
          break;
      case "agb not accepted":
          result = 'The conditions must be accepted.';
          break;
      case "mail addresses do not match":
          result = 'Email addresses do not match.';
          break;
      case "not a valid mail address":
          result = 'Please fill in a valid email address.';
          break;
      case "Bitte füllen Sie das Formular aus.":
          result = 'Please fill in the whole form.';
          break;
      case "full":
          result = ' - Waiting list';
          break;
      case "free":
          result = '';
          break;
      case "data sent":
          result = 'Data sent.';
          break;
      default:
          result = 'An error occurred.';
          break;
    }
    switch(true) {
      case patt.test(msg):
          result = 'Please choose a workshop.';
          break;
    }
  } else {
    switch(msg) {
      case "success":
          result = 'Anmeldung erfolgreich. Bitte bestätigen Sie die Email, die sie in Kürze erhalten.';
          break;
      case "agb not accepted":
          result = 'Sie müssen die AGB akzeptieren.';
          break;
      case "mail addresses do not match":
          result = 'Email-Adressen stimmen nicht überein.';
          break;
      case "not a valid mail address":
          result = 'Bitte geben Sie ein gültige Email-Adresse an.';
          break;
      case "Bitte füllen Sie das Formular aus.":
          result = msg;
          break;
      case "full":
          result = ' - Warteliste';
          break;
      case "free":
          result = '';
          break;
      case "data sent":
          result = 'Daten gesendet.';
          break;
      default:
          result = 'Es ist ein Fehler aufgetreten.';
          break;
    }
    switch(true) {
      case patt.test(msg):
          result = 'Bitte wählen Sie einen Workshop.';
          break;
    }
  }
  return result;
}
