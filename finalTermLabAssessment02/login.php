<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login</title>
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

        <div class="content">
            <fieldset>
                <legend>Login</legend>
                <form method="post">
                    <table>
                        <tr>
                            <td>Username</td>
                            <td>:</td>
                            <td><input type="text"></td>
                        </tr>
                    </table>

                    <table>
                        <tr>
                            <td>Password</td>
                            <td>:</td>
                            <td><input type="password"></td>
                        </tr>
                    </table>
                    <hr>

                    <input type="submit" value="Submit" />
                    <a href="">Forgot password?</a>
                </form>
            </fieldset>

        </div>

        <footer>
            <p>Copyright © 2017</p>
        </footer>
    </div>
</body>
</html>