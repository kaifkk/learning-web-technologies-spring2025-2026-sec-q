<!DOCTYPE html>
<html lang="en">
<head>
    <title>Login</title>
</head>
<body>
        <form method="post" action="../controller/registrationCheck.php" enctype="multipart/form-data">
            <fieldset>
                <legend>Signin</legend>
                Username:   <input type="text" name="username" value=""> <br>
                Password:   <input type="password" name="password" value=""> <br>
                Type:   <select value="type">
                            <option value="#">select a login type</option>
                            <option value="admin">admin</option>
                            <option value="user">user</option>
                        </select>
                        <br>
                        <input type="submit" name="submit" value="Registration">
            </fieldset>
        </form>
</body>
</html>