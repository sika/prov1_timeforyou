<?php
if (isset($_POST['submit'])) {
    //To timeforyou
    $company = $_POST['company']; //company name of author
    $name = $_POST['name']; //name of author
    $from = $_POST['email']; //email of author
    $msgToAdmin = $_POST['feedback']; //message from author
    $msgToAdmin .= "\n\nCompany: {$company}\nName: {$name}\nEmail: {$from}";
    $timeforyou = 'simon.workemail@gmail.com';
    $subject = $_POST['company'];

    //To author
    $simonWorkEmail = "simon.workemail@gmail.com";
    $to = $_POST['email']; //email of author;
    $subjectAuthor = "Autosvar: timeforyou.tk";
    $msgToAuthor = "Hej!\n\nJag har mottagit ditt meddelande och återkommer snart.\n\nHälsningar,\nSimon";
    $headers = "From: {$timeforyou}\r\nReply-to: {$simonWorkEmail}";
    $parameters = "f{$timeforyou}";

    //sending emails to me and author. 
    session_start();
    $_SESSION['admin'] = mail($timeforyou, $subject, $msgToAdmin, 'From: ' . $timeforyou); //If mail is sent, true (int value) will be returned; if mail not sent, false will be returned. This will be used in the contactConfPhp.php
    $_SESSION['author'] = mail($to, $subjectAuthor, $msgToAuthor, $headers, $parameters);
    header('Location: contactConfirm.php'); //open new page
} else {
    echo "something went wrong";
    exit(0);
}
?>