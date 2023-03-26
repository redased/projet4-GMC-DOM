
<?php
 $ip="109.106.251.67";
$username="appredon_reda";
 $password="plusMYSQL1500";
$database="appredon_samha"; $con=mysqli_connect($ip, $username, $password,$database);

 $query="INSERT INTO appred(visite)      VALUES('OUI')";

 mysqli_query($con,$query) or die(mysqli_error($con));


?>
<!DOCTYPE html>

<html lang="en">
	
	<head>

		 <meta charset="UTF-8">
		 <meta http-equiv="X-UA-Compatible" content="IE=edge">
		 <meta name="viewport" content="width=device-width, initial-scale=1.0">

		 <META Http-Equiv="Cache-Control" Content="no-cache">
		 <META Http-Equiv="Pragma" Content="no-cache">
		<META Http-Equiv="Expires" Content="0">

		
		<title>Info & Dev</title>
		<link rel="stylesheet" href="css/nav.css">
		<link rel="stylesheet" href="css/main.css">

		 <link rel="icon" type="image/png" sizes="32x32" href="res/img/logo_appred.ico">
		
		<script src="https://accounts.google.com/gsi/client" async defer> </script>
		</head>
	
	<body>
		
		<header id="banner">

			
			<nav class="navigation">
				<img id="nav-logo" src="res/img/logo.png" alt="coffee logo">

				<p class="citation">Developing your ideas without limits or almost
				<!--<div id="g_id_onload"
			 data-client_id="1098950188310-vb7iedtvmmh4l7oqo2qv76hdtbr6gcg4.apps.googleusercontent.com"
				 data-context="signup"
				 data-login_uri="appred.online/inscription.php"
				data-auto_select="true"
				 data-itp_support="true">
				 </div>
				 <div id="g_id_onload"
				 data-client_id="1098950188310-vb7iedtvmmh4l7oqo2qv76hdtbr6gcg4.apps.googleusercontent.com"
				data-context="signup"
				data-ux_mode="popup"
				 data-login_uri="appred.online"
				data-nonce=""
				 data-auto_prompt="false">
				</div>

				<div style="width:250px;" class="g_id_signin"
				data-type="standard"
				data-shape="rectangular"
				data-theme="outline"
				 data-text="signin_with"
				 data-size="large"
				 data-logo_alignment="left">
				 </div>

				 <div id="g_id_onload"
				 data-client_id="1098950188310-vb7iedtvmmh4l7oqo2qv76hdtbr6gcg4.apps.googleusercontent.com"
				data-context="signup"
				 data-ux_mode="popup"
				 data-login_uri="appred.online/inscription.php"
				 data-auto_select="true"
				data-itp_support="true">
				</div>

				 <div class="g_id_signin"
				 data-type="standard"
				data-shape="rectangular"
				data-theme="outline"
				 data-text="signin_with"
				 data-size="large"
				 data-logo_alignment="left">
				 </div>-->
				 </nav>

			
			<section id="contact">

				 <!--  <form>
				<label for="name">Name:<br>
				 <input type="text" class="contact-form" id="name" name="name" ></label><br>
				 <label for="email">Email:<br>
				<input type="text" class="contact-form" id="email" name="email"></label><br>
				<label for="message">Message:<br>
				<textarea id="message" class="contact-form message-form" name="message" ></textarea></label><br>
				 <input type="submit" id="send" class="contact-form" value="Send">
				 </form> -->
				
				<form>
					<label for="name">Connexion:<br>

					
					<div id="g_id_onload"
						 data-client_id="1098950188310-vb7iedtvmmh4l7oqo2qv76hdtbr6gcg4.apps.googleusercontent.com"
						 data-context="signup"
						 data-ux_mode="popup"
						 data-login_uri="https://appred.online"
						 data-auto_select="true"
						data-itp_support="true">
						</div>

					
					<div class="g_id_signin"
						 data-type="standard"
						data-shape="pill"
						 data-theme="filled_black"
						data-text="signin_with"
						data-size="large"
						data-logo_alignment="left">
						</div>

					<!--<div id="g_id_onload"
					 data-client_id="1098950188310-vb7iedtvmmh4l7oqo2qv76hdtbr6gcg4.apps.googleusercontent.com"
					data-context="signup"
					data-login_uri="https://appred.online"
					data-auto_select="true"
					data-itp_support="true">
					</div><br>-->

					</form>



				
				<h1>
					 How the information transform the developement?
					</h1>

				
				<p>Coming soon</p>
				 </section>
			
			<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
				<input type="hidden" name="cmd" value="_s-xclick">
				 <input type="hidden" name="hosted_button_id" value="HS33FAN8VKEUA">
				<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
				<img alt="" border="0" src="https://www.paypalobjects.com/fr_XC/i/scr/pixel.gif" width="1" height="1">
				</form>


			
			<div id="smart-button-container">
				
				<div style="text-align: center;">
					
					<div id="paypal-button-container"></div>
					</div>
				</div>

			 </header>




		
		<footer>





			</footer>

		</body>
	 </html>


<div id="smart-button-container">
	
	<div style="text-align: center;">
		
		<div id="paypal-button-container"></div>
		 </div>
	</div>

<script src="https://www.paypal.com/sdk/js?client-id=sb&enable-funding=venmo&currency=EUR" data-sdk-integration-source="button-factory"> </script>
 <script>
	 function initPayPalButton()
	 {
	 paypal.Buttons({
	 style: {
	shape: 'rect',
	 color: 'gold',
	layout: 'vertical',
	label: 'pay',

	 },

	 createOrder: function(data, actions) {
	return actions.order.create({
	purchase_units: [{"description":"Formation complète PHP MYSQL à votre demande  à seulement 10 euro","amount":{"currency_code":"EUR","value":10}}]
	});
	 },

	 onApprove: function(data, actions) {
	 return actions.order.capture().then(function(orderData) {

	Full available details
	console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));

	Show a success message within this page, e.g.
	const element = document.getElementById('paypal-button-container');
	 element.innerHTML = '';
	element.innerHTML = '<h3>Thank you for your payment!</h3>';

	Or go to another URL:  actions.redirect('thank_you.html');

	 });
	// },

	 onError: function(err) {
	 console.log(err);
	}
	}).render('#paypal-button-container');
	}
	 initPayPalButton();
	</script>




