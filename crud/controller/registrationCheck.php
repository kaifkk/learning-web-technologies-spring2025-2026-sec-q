<?php
    session_start();

    if(!isset($_SESSION['users'])) {
        $_SESSION['users'] = [];
    }

    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $type = $_POST['type'];

        if($username == '' || $password == '' || $type == '#') {
            echo "fill all the fields";
            exit();
        }

        if($_SESSION['users'][$username]) {
            echo "user already exists";
            exit();
        }

        $_SESSION['users'][$username] = [
            'username' => $username,
            'password' => $password,
            'type' => $type
        ];

        echo "Registration successfull";
        header("Location: ../view/login.html");
    }
?>