<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN"
"http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Jim the Chimp Media | Homepage</title>
		<meta name="keywords" content="" />
		<meta name="description=" content="Jim the Chimp Media, I am a feelance web developer based in Winchester, Hampshire.">
		<meta name="author" content=""> 
		<link rel="stylesheet" href="../styles/style.css" />
		<link rel="stylesheet" type="text/css" href="../styles/inline.css" /><!-- Contact form styles -->
		
		<script src="../js/jquery-1.5.1.min.js" type="text/javascript"></script>
		<script type="text/javascript" src="../js/plugins.js"></script>
		<script type="text/javascript" src="../js/iphorm.js"></script>
		<script type="text/javascript" src="../js/scripts.js"></script>
		<!--<script type="text/javascript"
src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.1/jquery.min.js"></script> -->
		<script type="text/javascript">
        $(document).ready(function(){
            //Set default open/close settings
            $('.menu_container').hide(); //Hide/close all containers
            $('.menulink:nth(2)').addClass('active').next().next().show(); //Add "active" class to first trigger, then show/open the immediate next container
            //On Click
            $('.menulink').click(function(){
                if ($(this).next().next().is(':hidden')) { //If immediate next container is closed...
                    $('.menulink').removeClass('active').next().next().slideUp(); //Remove all "active" state and slide up the immediate next container
                    $(this).toggleClass('active').next().next().slideDown(); //Add "active" state to clicked trigger and slide down the immediate next container
                }
                return false; //Prevent the browser jump to the link anchor
            });
        });
		
		</script>
    </head>
    <body>
    <div id="container"> <!-- Container div -->
        <div id="sidemenu"> <!-- sidemenu div -->
        	<div id="title"> <!-- title div -->
			<a href="/" title="Jim the Chimp" >
            	<h1 id="jay"><span class="jay">J</span></h1>
				<h1 id="resttitle">im the <span class="chimp">CHIMP</span></h1>
            	<h2 id="slogan">web and mobile media</h2>
			</a>
        	</div> <!-- title div -->
			<div id="menu"> <!-- menu div -->
				<h3 class="menulink"><a href="#" title="Read about my profile">Profile</a></h3>
				<hr />
				<div class="menu_container">
					<div class="block">
					<ul>
						<li class="menu_list"><a href="../profile/about.html" title="Who I am and what I do" class="menu_link">About <span class="chimp">me</span></a></li>
						<li class="menu_list"><a href="../profile/web-design.html" title="My web design and development skillset" class="menu_link">Web <span class="chimp">design and development</span></a></li>
						<li class="menu_list"><a href="../profile/android-design.html" title="My Android development skillset" class="menu_link">Mobile <span class="chimp">development</span></a></li>
						<li class="menu_list"><a href="../profile/photography.html" title="My Photography" class="menu_link">Photography</a></li>
						<li class="menu_list"><a href="../profile/index.html" title="Why the name, Jim the Chimp?" class="menu_link">What's with the <span class="chimp">name</span></a></li>
					</ul>
					</div>
				</div>
				
				<h3 class="menulink"><a href="#" title="View the projects I have worked on">Portfolio</a></h3>
				<hr />
				<div class="menu_container">
					<div class="block">
					<ul>
						<li class="menu_list"><a href="/" title="French Number plate Android game" class="menu_link">French Number Plates <span class="chimp">(Android)</span></a></li>
						<li class="menu_list"><a href="/" title="Sim Racing News Android app" class="menu_link">Sim Racing News <span class="chimp">(Android)</span></a></li>
						<li class="menu_list"><a href="/" title="Cercle Francais de Winchester website" class="menu_link">Cercle Francais de Winchester <span class="chimp">(Drupal)</span></a></li>
						<li class="menu_list"><a href="/" title="Sandy Balls website" class="menu_link">Sandy Balls <span class="chimp">(Drupal)</span></a></li>
					</ul>
					</div>
				</div>
				
				<h3 class="menulink"><a href="#" title="Find out how to get in touch">Contact</a></h3>
				<hr />
				<div class="menu_container">
					<div class="block">
					<ul>
						<li class="menu_list">James Linnell</li>
						<li class="menu_list">Tel : 07793086111</li>
						<li class="menu_address">Address :</li>
						<li class="menu_address">7 Palmerston Court</li>
						<li class="menu_address">Barnes Close</li>
						<li class="menu_address">Winchester</li>
						<li class="menu_address">Hampshire, SO23 9TS</li>
						<li class="menu_list menu_last"><a href="mailto:james.linnell@jimthechimp.co.uk" title="email" class="menu_link"><img src="../images/icon_mail.gif" alt="E-mail" />&nbsp;Email me</a></li>
					</ul>
					</div>
				</div>
			</div> <!-- menu div -->
			<div id="footer"> <!-- footer div -->
				<hr />
				<ul>
					<li class="menu_list">Jim the Chimp Media</li>
					<li class="menu_list">Winchester</li>
					<li class="menu_list">Tel : 07793086111</li>
					<li class="menu_list"><a href="mailto:james.linnell@jimthechimp.co.uk" title="email" class="menu_link"><img src="../images/icon_mail.gif" alt="E-mail" />&nbsp;Email me</a></li>
				</ul>
			</div> <!-- footer div -->
        </div> <!-- sidemenu div -->
        <div id="rightcolumn"> <!-- right column div -->
        	<div id="content"> <!-- content div -->
			<div id="main">
			<h3 class="mainheading">Contact <span class="chimp">me</span></h3>
			<!-- To copy the form HTML, start here -->
    <div class="iphorm-outer">
		<form class="iphorm" action="contact-form/process.php" method="post" enctype="multipart/form-data">
		    <div class="iphorm-wrapper">
	        <h1>iPhorm - Ajax contact form</h1>
	        <h2>Easy to install into any PHP / HTML web page</h2>
	        <div class="iphorm-inner">
	            <div class="form-title">Please get in touch</div>
                   <div class="iphorm-message"></div>
	               <div class="iphorm-container clearfix">
	                    <!-- Begin Name element -->
                        <div class="element-wrapper name-element-wrapper clearfix">
                            <label for="name">Name <span class="red">*</span></label>
                            <div class="input-wrapper name-input-wrapper">
                                <input class="name-element" id="name" type="text" name="name" />
                            </div>
                        </div>
                        <!-- End Name element -->
                        <!-- Begin Email element -->
                        <div class="element-wrapper email-element-wrapper clearfix">
                            <label for="email">Email <span class="red">*</span></label>
                            <div class="input-wrapper email-input-wrapper">
                                <input class="email-element iphorm-tooltip" id="email" type="text" name="email" title="We will never send you spam, we value your privacy as much as our own" />
                            </div>
                        </div>
                        <!-- End Email element -->
                        <!-- Begin Phone element -->
                        <div class="element-wrapper phone-element-wrapper clearfix">
                            <label for="phone">Phone</label>
                            <div class="input-wrapper phone-input-wrapper">
                                <input class="phone-element iphorm-tooltip" id="phone" type="text" name="phone" title="We will only use your phone number to contact you regarding your enquiry" />
                            </div>
                        </div>
                        <!-- End Phone element -->
                        <!-- Begin Subject element -->
                        <div class="element-wrapper subject-element-wrapper clearfix">
                            <label for="subject">Subject</label>
                            <div class="input-wrapper subject-input-wrapper clearfix">
                                <select id="subject" name="subject">
                                    <option value="General enquiry">General enquiry</option>
                                    <option value="Sales enquiry">Sales enquiry</option>
                                    <option value="Support enquiry">Support enquiry</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>
                        <!-- End Subject element -->
                        <!-- Begin Message element -->
                        <div class="element-wrapper message-element-wrapper clearfix">
                            <label for="message">Message <span class="red">*</span></label>
                            <div class="input-wrapper message-input-wrapper clearfix">
                                <textarea class="message-element" id="message" name="message" rows="7" cols="45"></textarea>
                            </div>
                        </div>
                        <!-- End Message element -->
                        <!-- Begin Captcha element -->
                        <div class="element-wrapper captcha-element-wrapper clearfix">
                            <label for="type_the_word">Type the word <span class="red">*</span></label>
                            <div class="input-wrapper captcha-input-wrapper clearfix">
                                <div class="captcha-img"><img src="contact-form/images/captcha.png" alt="" /></div>
                                <input id="type_the_word" class="captcha-element" type="text" name="type_the_word" />
                            </div>
                        </div>
                        <!-- End Captcha element -->
                        <!-- Begin Submit button -->
                        <div class="button-wrapper submit-button-wrapper clearfix">
                            <div class="loading-wrapper"><span class="loading">Please wait...</span></div>
                            <div class="button-input-wrapper submit-button-input-wrapper">
                                <input class="submit-element" type="submit" name="contact" value="Send" />
                            </div>
                        </div>
                        <!-- End Submit button -->
	               </div>
	           </div>
		   </div>
		</form>
	</div>
	<!-- To copy the form HTML, end here -->
	
<!--			
			<div id="contact_form_div">
				<?php if(isset($hasError)) { //If errors are found ?>
				<p class="error">Please check if you've filled all the fields with valid information. Thank you.</p>
				<?php } ?>
				<?php if(isset($emailSent) && $emailSent == true) { //If email is sent ?>
				<p><strong>Email Successfully Sent!</strong></p>
				<p>Thank you <strong><?php echo $name;?></strong> for using my contact form! Your email was successfully sent and I will be in touch with you soon.</p>
				<?php } ?>
				<form method="post" action="<?php echo $_SERVER['PHP_SELF'] ?>" id="contact_form">
					<div>
						<label for="contactname">Name:</label>
						<input type="text" size="31" name="contactname" id="contactname" value="" class="required"/>
					</div>
					<div>
						<label for="email">Email:</label>
						<input type="text" size="31" name="email" id="email" value="" class="required email"/>
					</div>
					<div>
						<label for="subject">Subject:</label>
						<input type="text" size="31" name="subject" id="subject" value="" class="required"/>
					</div>
					<div>
						<label for="message">Message:</label>
						<textarea rows="5" cols="35" name="message" id="message" class="required"></textarea>
					</div>
					<input id="submitform" type="submit" value="Send Message" name="submit" />
				</form>
			</div>
-->
			<div id="contact_details">
				
			</div>
			</div>
        	</div> <!-- content div -->
			<!-- This Image will resize with every window resize -->
			<img id="source-image" src="../images/JTC_background.jpg" alt="jimthechimp">

        </div> <!-- right column div -->
    </div> <!-- Container div -->
    </body>
</html>
