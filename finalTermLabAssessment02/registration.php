<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
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
                <a href="#">Login</a>
                <a href="registration.php">Registration</a>
            </div>
        </div>

    <div class="content">
        <fieldset>
            <legend>REGISTRATION</legend>

            <form>

                <table>
                    <tr>
                        <td>Name</td>
                        <td>:</td>
                        <td><input type="text"></td>
                    </tr>
                </table>
                <hr>

                <table>
                    <tr>
                        <td>Email</td>
                        <td>:</td>
                        <td><input type="email"></td>
                    </tr>
                </table>
                <hr>

                <table>
                    <tr>
                        <td>User Name</td>
                        <td>:</td>
                        <td><input type="text"></td>
                    </tr>
                </table>
                <hr>

                <table>
                    <tr>
                        <td>Password</td>
                        <td>:</td>
                        <td><input type="password"></td>
                    </tr>
                </table>
                <hr>

                <table>
                    <tr>
                        <td>Confirm Password</td>
                        <td>:</td>
                        <td><input type="password"></td>
                    </tr>
                </table>
                <hr>

                <fieldset>
                    <legend>Gender</legend>
                    <input type="radio" name="gender"> Male
                    <input type="radio" name="gender"> Female
                    <input type="radio" name="gender"> Other
                </fieldset>


                <fieldset>
                    <legend>Date of Birth</legend>
                    <input type="text"> /
                    <input type="text"> /
                    <input type="text">
                    <span>(dd/mm/yyyy)</span>
                </fieldset>

                <br>


                <br><hr>

                <input type="submit" value="Submit">
                <input type="reset" value="Reset">

            </form>

        </fieldset>

    </div>
        <footer>
            <p>Copyright © 2017</p>
        </footer>
    </div>
</body>
</html>