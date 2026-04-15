<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <div class="container">
        <div class="navBarParent">
            <div>
                <h1>X Company</h1>
            </div>
            <div class="links">
                <a href="index.php">Home</a>
                <a href="login.php">Login</a>
                <a href="registration.php">Registration</a>
            </div>
        </div>

        <div>
            <?php
                session_start();
                if (!isset($_SESSION["current_user"])) {
                    header("Location: login.php");
                    exit();
                }

                $username = $_SESSION['current_user'];
                echo "welcome: " . $username;
            ?>
        </div>

        <footer>
            <p>Copyright © 2017</p>
        </footer>
    </div>
</body>
</html>