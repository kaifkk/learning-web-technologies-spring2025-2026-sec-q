<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assessment Task</title>
</head>
<body>
    <fieldset>
        <legend>Name</legend>
        <form method="post" action="handler.php">
            <input type="text" name="usernameA" /> <br/>
            <hr/>
            <input type="submit" name="submitA" value="submit A" />
        </form>
        <br/>
        <form method="post">
            <input type="text" name="usernameB" /> <br/>
            <hr/>
            <input type="submit" name="submitB" value="Submit B" />
        </form>
        <br/>

        <?php $usernameC = $_POST["usernameC"] ?>

        <form method="post">
            <input type="text" name="usernameC" value="<?php echo $usernameC; ?>"/> <br/>
            <hr/>
            <input type="submit" name="submitC" value="Submit C" />
        </form>
    </fieldset>

    <?php
        if (isset($_POST["usernameB"])) {
            $usernameB = $_POST["usernameB"];

            if (!empty($usernameB)) {
                echo "username B is " . $usernameB;
            }
        }
    ?>

    <?php
        if (isset($_POST["usernameC"])) {
            $usernameC = $_POST["usernameC"];

            if(!empty($usernameC)) {
                echo "username C is " . $usernameC;
            }
        }
    ?>
</body>
</html>