<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $ddd = filter_input(INPUT_POST, 'ddd', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $telefone = filter_input(INPUT_POST, 'telefone', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $funcao = filter_input(INPUT_POST, 'funcao', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $cidade = filter_input(INPUT_POST, 'cidade', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $estado = filter_input(INPUT_POST, 'estado', FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $descricao = filter_input(INPUT_POST, 'descricao', FILTER_SANITIZE_FULL_SPECIAL_CHARS);

    $message = "Nome: $nome\n";
    $message .= "Email: $email\n";
    $message .= "Telefone: ($ddd) $telefone\n";
    $message .= "Função: $funcao\n";
    $message .= "Cidade: $cidade\n";
    $message .= "Estado: $estado\n";
    $message .= "Descrição: $descricao\n";

    $to = 'contato@example.com';
    $subject = 'Formulário de Cadastro';
    $headers = 'From: no-reply@example.com' . "\r\n" .
               'Reply-To: ' . $email . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'OK';
    } else {
        http_response_code(500);
        echo 'Erro ao enviar';
    }
} else {
    http_response_code(405);
    echo 'Método não permitido';
}
?>
