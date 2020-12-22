<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$subscription = $_POST['subscription-input'];
$modalTitle = $_POST['direction'];
$modalMessage = $_POST['modal-window-message'];
$modalEmail = $_POST['input-email'];
$comment = $_POST['comments-section-form'];

$titleSub = "Подписка Universal - веб разработка";
$bodySub = "
Данный пользователь <b>$subscription</b> хотел бы оформить новостную подписку!
";

$titleModal = "Новое обращение Universal - веб разработка";
$bodyModal = "
<h2>Новое обращение</h2>
<b>Тема обращения:</b> $modalTitle<br>
<b>E-mail:</b> $modalEmail<br><br>
<b>Сообщение:</b><br>$modalMessage
";

$titleComment = "Новое сообщение Universal - Новый налоговый режим для фрилансеров — налог на проф. доход";
$bodyComment = "
<h2>Новое сообщение</h2>
<b>Сообщение:</b><br>$comment
";

function sendMessage($title,$body){
    // Настройки PHPMailer
    $mail = new PHPMailer\PHPMailer\PHPMailer();
    try {
        $mail->isSMTP();   
        $mail->CharSet = "UTF-8";
        $mail->SMTPAuth   = true;
        //$mail->SMTPDebug = 2;
        $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

        // Настройки вашей почты
        $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
        $mail->Username   = 'kseniia.timoshenko.0220@gmail.com'; // Логин на почте
        $mail->Password   = '@choOl55'; // Пароль на почте
        $mail->SMTPSecure = 'ssl';
        $mail->Port       = 465;
        $mail->setFrom('kseniia.timoshenko.0220@gmail.com', 'Kseniia Timoshenko'); // Адрес самой почты и имя отправителя
        // Получатель письма
        $mail->addAddress('timoshenko.ksenia.1998@gmail.com');  
        // Отправка сообщения
        $mail->isHTML(true);
        $mail->Subject = $title;
        $mail->Body = $body;    

        // Проверяем отравленность сообщения
        if ($mail->send()) {$result = "success";} 
        else {$result = "error";}

    } catch (Exception $e) {
        $result = "error";
        $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
    }

}

$action = $_POST["action"];
if ($action == "subscribe") {
    sendMessage($titleSub, $bodySub);
    header('Location: subscribe.php');
} elseif ($action == "modal-window") {
    sendMessage($titleModal, $bodyModal);
    header('Location: ticket.php');
} elseif ($action == "comments-section") {
    sendMessage($titleComment, $bodyComment);
    header('Location: comment.php');
} else {
    echo "Error";
}
