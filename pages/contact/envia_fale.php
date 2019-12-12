<?

$destinatario = "jackeline_nascimento@hotmail.com.br";

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$comment = $_REQUEST['comment'];

$body = "===================================" . "\n";
$body = $body . "ENTRE EM CONTATO -MEUBAZARONLINE" . "\n";
$body = $body . "===================================" . "\n\n";
$body = $body . "Nome: " . $name . "\n";
$body = $body . "Email: " . $email . "\n";
$body = $body . "Comentario: " . $comment . "\n\n";
$body = $body . "===================================" . "\n";


mail($destinatario, $assunto , $body, "From: $email\r\n");

header("location:contato.html");

?>