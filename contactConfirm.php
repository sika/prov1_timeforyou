<html>
    <head>
        <title>Time for you</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="stylesheet.css">
        <?php echo "<link rel='stylesheet' type='text/css' href='stylesheet.css' media='all'/>";?>
    </head>

    <body>
        <div id="wrapper">
            <div class="topHeader">
                <p style="position:absolute; top:50%; right:0px;transform:translate(0,-50%); margin-right:10px">
                    Call us at: <a id="linkInsideTopHeader" href="tel:+460702131527">0702131527</a>
                </p>
            </div>
            <div class="middleHeader">
            </div>
            <div class="bottomHeader">
            </div>
             <nav>
                <ul>
                    <li>
                        <a href="index.html">Home</a> 
                    </li>
                    <li>
                        <a href="services.html">Services</a>
                    </li>
                    <li>
                        <a href="facilities.html">Facilities</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                    <li>
                        <a href="gettinghere.html">Getting here</a>
                    </li>
                </ul>
            </nav>
            <div style="height: 600px;">
                <?php
                session_start();
                $admin = $_SESSION['admin']; //retrieving session data from "process.php"
                $author = $_SESSION['author'];
                ?>
                <?php if ($admin == true AND $author == true) { ?> <!--if statement for outcomes in process.php, depends on success of mails sent--> 
                    <p id="confirmationText"><? echo "Thank you for your message! <br>You should have received a confirmation email. We will contact you soon."; ?></p>
                   <?php } ?>
                   <?php if ($admin == true && $author == false) { ?>
                    <p id="confirmationText"><? echo "Something went wrong! <br>Your message was likely delivered to us but no confirmation email was sent to you."; ?></p>
                <?php } ?>
                <?php if ($admin == false AND $author == true) { ?>
                    <p id="confirmationText"><? echo "Something went wrong! <br>Your message was not delivered even though a confirmation letter was likely sent to you.<br>Try emailingus directly: simon.workemail@gmail.com";?></p>
                <?php } ?>
                <?php if ($admin == false AND $author == false) { ?>
                    <p id="confirmationText"><? echo "Something went wrong! <br>Your message was not delivered.<br>Try emailingus directly: simon.workemail@gmail.com";?></p>
                <?php } ?>
            </div>
            <footer>
                <div class="footerContent" style="text-align: left;">
                    <p><b>Contact</b></p>
                    <p>Telephone: 0702131527</p>
                    <p>Email: <a href="mailto:simon.workemail@gmail.com" target="_top">simon.workemail@gmail.com</a></p>
                </div>

                <div class="footerContent">
                    <ul>
                        <li><a href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Ftimeforyou.tk&t=Time%20for%20you" target="_blank"><img src="images/facebook1small.png" alt="Facebook"></a></li>
                        <li><img src="images/googleplusSmall.png" alt="Google+"></li>
                        <li><img src="images/twitter1Small.png" alt="Twitter"></li>
                    </ul>
                </div>                

                <div class="footerContent" style="font-style: italic;">
                    <p>Time for you </p>
                    <p>Copyright &copy; 2015</p>
                </div>

            </footer>
        </div>
        <script src="js/jquery-1.11.2.min.js"></script>
        <script src="js/jquery.validate.min.js"></script>
        <script src="js/tfyFormJS.js"></script>
    </body>

</html>
<!-- -->