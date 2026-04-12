<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assessment Task</title>
</head>
<body>
    <fieldset>
        <legend>EMAIL</legend>
        <form method="post" action="handler.php">
            <input type="email" name="emailA" /> <br/>
            <hr/>
            <input type="submit" name="submitA" value="submit A" />
        </form>
        <br/>
        <form method="post">
            <input type="email" name="emailB" /> <br/>
            <hr/>
            <input type="submit" name="submitB" value="Submit B" />
        </form>
        <br/>

        <?php $emailC = $_POST["emailC"] ?>

        <form method="post">
            <input type="email" name="emailC" value="<?php echo $emailC; ?>"/> <br/>
            <hr/>
            <input type="submit" name="submitC" value="Submit C" />
        </form>
    </fieldset>

    <?php
        if (isset($_POST["emailB"])) {
            $usernameB = $_POST["emailB"];

            if (!empty($usernameB)) {
                echo "email B is " . $usernameB;
            }
        }
    ?>

    <?php
        if (isset($_POST["emailC"])) {
            $usernameC = $_POST["emailC"];

            if(!empty($usernameC)) {
                echo "email C is " . $usernameC;
            }
        }
    ?>
</body>
</html>