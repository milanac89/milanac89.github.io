<?php
function var_dump_($var){echo '<pre>'; var_dump($var); die('</pre>');}
header('Content-Type: text/html; charset=utf-8');

//Переменные формы
if (isset($_POST['apartments'])) {$cf = $_POST['apartments'];} //апартаменты отправителя

if (isset($_POST['name'])) {$nf = $_POST['name'];} //имя отправителя
if (isset($_POST['email'])) {$ef = $_POST['email'];} //email отправителя
if (isset($_POST['tel'])) {$tf = $_POST['tel'];} //телефон отправителя
if (isset($_POST['whatform'])) {$wf = $_POST['whatform'];} //с какой формы

if (isset($_POST['utm_source'])) {$utm_source = urldecode($_POST['utm_source']);}
if (isset($_POST['utm_medium'])) {$utm_medium = urldecode($_POST['utm_medium']);}
if (isset($_POST['utm_campaign'])) {$utm_campaign = urldecode($_POST['utm_campaign']);}
if (isset($_POST['utm_content'])) {$utm_content = urldecode($_POST['utm_content']);}
if (isset($_POST['phrase'])) {$phrase = urldecode($_POST['phrase']);}
if (isset($_POST['utm_term'])) {$utm_term = urldecode($_POST['utm_term']);}

//Заголовок письма (техническая часть)
$headers = "Content-type:text/html; charset = utf-8\r\n";

//Email, с которого якобы пришло сообщение
$from = "zakaz@yandex.ru";

//Тема письма
switch ($wf) {
  case "call":
    $subject = "перезвонить";
    break;
  case "reserve":
    $subject = "бронирование";
    break;
}

//Сообщение, отправляемое на почту
$message = "<table>
<tr><td width='200'><b>Имя:</b></td><td>$nf</td></tr>
<tr><td width='200'><b>Сопроводительный текст:</b></td><td>$ef</td></tr>
<tr><td width='200'><b>Телефон:</b></td><td>$tf</td></tr>
<tr><td width='200'><b>Аппартаменты:</b></td><td>$cf</td></tr>
<tr><td width='200'><Br /><b>Реферальный хвост</b><br /></td><td></td></tr>
<tr><td width='200'>utm_source:</td><td>$utm_source</td></tr>
<tr><td width='200'>utm_medium:</td><td>$utm_medium</td></tr>
<tr><td width='200'>utm_campaign:</td><td>$utm_campaign</td></tr>
<tr><td width='200'>utm_content:</td><td>$utm_content</td></tr>
<tr><td width='200'>phrase:</td><td>$phrase</td></tr>
<tr><td width='200'>utm_term:</td><td>$utm_term</td></tr>
</table>";


//Режим отладки
$debug = false; //TRUE - включено, FALSE - выключено

if ($debug == true) {
  $testemail = "sterx@rl6.ru";
  // $testemail = "256ottenkov@gmail.com"; //почта для отладки
  $sendmail = mail ($testemail,$subject,$message,$headers."From:$from");
  if ($sendmail) {echo "Спасибо! Мы обязательно Вам перезвоним!";}
  else {echo "Ошибка. Сообщение не отправлено!";}
} else {
  $to1 = array("milanac89@yandex.ru");
  foreach ($to1 as $to) {
  $send = mail ($to,$subject,$message,$headers."From:$from");
  }
  if ($send) {echo "Спасибо! Мы обязательно Вам перезвоним!";}
  else {echo "Ошибка. Сообщение не отправлено!";}
}

?>