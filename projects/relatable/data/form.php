<?php
header('Content-Type: text/html; charset=utf-8');

//Переменные формы
if (isset($_POST['name'])) {$nf = $_POST['name'];} //имя отправителя
if (isset($_POST['email'])) {$ef = $_POST['email'];} //email отправителя
if (isset($_POST['tel'])) {$tf = $_POST['tel'];} //телефон отправителя
if (isset($_POST['email'])) {$cf = $_POST['textarea'];} //город отправителя
if (isset($_POST['whatform'])) {$wf = $_POST['whatform'];} //с какой формы
if (isset($_POST['ref'])) {$rf = urldecode($_POST['ref']);} //реферальный хвост

//Заголовок письма (техническая часть)
$headers = "Content-type:text/html; charset = utf-8\r\n";

//Email, с которого якобы пришло сообщение
$from = "Order";

//Тема письма
switch ($wf) {
  case "mail-top":
    $subject = "Top form";
    break;  
  case "mail-bottom":
    $subject = "Bottom form";
    break;	
}

//Сообщение, отправляемое на почту
$message = "<b>Email:</b> $tf";

//Режим отладки
$debug = false; //TRUE - включено, FALSE - выключено

if ($debug == true) {
  $testemail = "zakaz@virtualhr.ru"; //почта для отладки
  $sendmail = mail ($testemail,$subject,$message,$headers."From:$from");
  if ($sendmail) {echo "Спасибо! Мы обязательно Вам перезвоним!";}
  else {echo "Ошибка. Сообщение не отправлено!";}  
} else {
  $to1 = "miranda.a.guo@gmail.com";       
  
  $send1 = mail ($to1,$subject,$message,$headers."From:$from");
  if ($send1 && $send2) {echo "Спасибо! Мы обязательно Вам перезвоним!";}
  else {echo "Ошибка. Сообщение не отправлено!";}
}

?>