<?php
    session_start();

    if(isset($_POST['submit'])) {
        $username = $_POST['username'];
        $password = $_POST['password'];
        $type = $_POST['type'];

        if($username == "" || $password == "" || $type == "#") {
            echo "fill all the fields";
            exit();
        }

        if(isset($_SESSION['users'][$username])) {
            $storedUser = $_SESSION['users'][$username];

            if($storedUser['password'] == $password && $storedUser['type'] == $type) {
                $_SESSION['current_user'] = $storedUser;

                header("Location: ../view/home.php");
                exit();

            } else {
                echo "invalid username/password/type";
            }
        } else {
            echo "User not found";
        }
    } else {
        header("Location: ../view/login.html");
        exit();
    }
?>