<!DOCTYPE html>
<html lang="de">
	<head>
		<title>WELCHE ZUKUNFT?!</title>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width">
		<link href="https://fonts.googleapis.com/css?family=Zilla+Slab" rel="stylesheet"> 
		<style>

			body {
				font-family: 'Zilla Slab', serif;
				background-color: rgb(238, 238, 238);
				margin: 0px;
				font-size: 15px;
			}
			article {
				margin-left: 30px;
				margin-right: 2ch;
			}
			article, #banner {
				max-width: 90ch;
			}
			#banner {
				width: 100%;
				max-width: calc( 90ch + 30px );
			}
.marquee {
 overflow: hidden;
 position: relative;
}
.marquee span {
 margin-top: 1ch;
 font-style: italic;
 font-size: 2em;
 position: absolute;
 width: auto; /* needed for correct starting point */
 white-space: nowrap;
 line-height: 50px;
 text-align: center;
 /* Starting position */
 -moz-transform:translateX(808px);
 -webkit-transform:translateX(808px);
 transform:translateX(808px);
 /* Apply animation to this element */
 -moz-animation: scroll-left 10s linear infinite;
 -webkit-animation: scroll-left 10s linear infinite;
 animation: scroll-left 10s linear infinite;
}
/* Move it (define the animation) */
@-moz-keyframes scroll-left {
 0%   { -moz-transform: translateX(808px); }
 100% { -moz-transform: translateX(-1053px); }
}
@-webkit-keyframes scroll-left {
 0%   { -webkit-transform: translateX(808px); }
 100% { -webkit-transform: translateX(-1053px); }
}
@keyframes scroll-left {
 0%   {
 -moz-transform: translateX(808px); /* Browser bug fix */
 -webkit-transform: translateX(808px); /* Browser bug fix */
 transform: translateX(808px);
 }
 100% {
 -moz-transform: translateX(-1053px); /* Browser bug fix */
 -webkit-transform: translateX(-1053px); /* Browser bug fix */
 transform: translateX(-1053px);
 }
}


@media screen and (max-width: 808px) {

.marquee span {
 /* Starting position */
 -moz-transform:translateX(100vw);
 -webkit-transform:translateX(100vw);
 transform:translateX(100vwpx);
}

/* Move it (define the animation) */
@-moz-keyframes scroll-left {
 0%   { -moz-transform: translateX(100vw); }
 100% { -moz-transform: translateX(-1053px); }
}
@-webkit-keyframes scroll-left {
 0%   { -webkit-transform: translateX(100vw); }
 100% { -webkit-transform: translateX(-1053px); }
}

@keyframes scroll-left {
 0%   {
 -moz-transform: translateX(100vw); /* Browser bug fix */
 -webkit-transform: translateX(100vw); /* Browser bug fix */
 transform: translateX(100vw);
 }
 100% {
 -moz-transform: translateX(-1053px); /* Browser bug fix */
 -webkit-transform: translateX(-1053px); /* Browser bug fix */
 transform: translateX(-1053px);
 }
}

}

			#info {
				position: absolute;
				top: 0px;
				width: 100%;
				padding: 5px;
				font-family:'Questrial', sans-serif;
				font-size:43px;
				text-align:left;
				color: #ffffff;
			}
			h1 {
				font-size:44px;
				margin-top:35px;
				margin-bottom: 0;
			}
			h2 {
				margin-top:5px;
				font-size:14px;
			}
			h4 {
				text-decoration:underline;
				color: rgb(204, 103, 91);
				margin-bottom:0px;
			}
			img {
				max-width: 100%;
				max-height: 100%;
			}
			.blue {
				color: rgb(204, 103, 91);
			}
			
			.bold {
				font-weight:bold;
			}
			
			.ul{
				text-decoration:underline;
			}
			.italic {
				font-style:italic;
			}
			a {
				color: #9dbaa1;
			}
			p {
				line-height:22px;
			}
			.workshop {
				margin-top: 0px;
			}
			form {
			    max-width: 500px;
				padding: 10px 20px;
				background: #f4f7f8;
				margin: 10px 0px;
				padding: 20px;
				background: #f4f7f8;
				border-radius: 8px;
			
			}
			form fieldset{
				border: none;
			}
			form legend {
				font-size: 1.4em;
				margin-bottom: 10px;
			}
			form label {
				display: block;
				margin-bottom: 8px;
			}
			
			form button
			{
				position: relative;
				display: block;
				padding: 12px 39px 12px 39px;
				color: #FFF;
				margin: 0 auto;
				background: #9dbaa1;
				font-size: 18px;
				text-align: center;
				font-style: normal;
				width: 100%;
				border: 1px solid #9dbaa1;
				border-width: 1px 1px 3px;
				margin-bottom: 10px;
			}
			
			form  input
			{
			background: rgba(255,255,255,.1);
			border: none;
			border-radius: 4px;
			font-size: 16px;
			margin: 0;
			outline: 0;
			padding: 7px;
			width: 100%;
			box-sizing: border-box;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			background-color: #e8eeef;
			color:#8a97a0;
			-webkit-box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
			box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
			margin-bottom: 30px;
			}
			
			.result{
			text-align: center;
			padding: 12px 77px 12px 77px;
			color: rgb(204, 103, 91);
			display: none;
			}
			
			.impressum {
			color: #d3d3d3;
			text-decoration: none;
			font-style:italic;
			}
			
			.logos {
				display: flex;
				align-items: center;
			}
			.logos img{
				margin-right: 30px;
				width: 40%;
				max-width:191px;
			}
			
		</style>
		<link href="css/contentboxes.css" rel="stylesheet">

	</head>
		<?php require './nl.php';?>
		<body>
		<div id="banner">
			<div class="marquee">
				<span>+++ diese Seite befindet sich im Aufbau +++ die Zukunft befindet sich im Aufbau +++</span>
			<img id="headerimg" src="underconstruction_web4.jpg" alt="Welche Zukunft - under construction">
			</div>
		</div><!--banner-->
		<article>
		<h1>Welche Zukunft?! </h1>
		<h2>Von Andres Veiel und Jutta Doberstein </h2>
		<h2>am 16. September 2017, Deutsches Theater Berlin</h2>
		<br>
		<p><span class="italic">Eurokrise, Robotik, Staatsbankrott, Dürrekatastrophen. Oder: Bedingungsloses Grundeinkommen, Energiewende, globale Grundrechte. Was steht uns bevor? Kommt die Zukunft über uns und wir sind nur die Crash-Test Dummies der Geschichte?<br><br>Oder können wir selbst gestalten und wählen?</span> </p>
		<p>Auf Grundlage von Studien, Forschungsprojekten, Prognosen und Szenarien entwirft <span class=bold>Welche Zukunft?!</span> eine mögliche Geschichte von unserer Zukunft – und blickt dann von dort zurück in jene Zeit, in der man „das Schlimmste hätte verhindern können“: ins Heute.</p>
		<p>Am <span class=bold>Deutschen Theater Berlin</span> entwickeln Film- und Theaterregisseur <span class=bold>Andres Veiel</span> (<span class=italic>Beuys, Das Himbeerreich</span>) und <span class=bold>Jutta Doberstein</span> mit hochkarätigen Experten und dem Publikum ein mögliches Zukunftsszenario für die kommenden 10 Jahre. Einen ganzen Tag lang, in Workshops und Panels, am Samstag, dem <span class=bold>16. September</span>, im ganzen Haus des Deutschen Theaters.</span></p>
		<p>Geleitet werden die Workshops von Vertretern namenhafter Institute: PIK, IASS, Universität Oxford, Stratfor, Royal Dutch Shell, die Universitäten Passau, Würzburg, Bremen, Fairesearch usw. Das Publikum wird zum aktiven Mitgestalter. Besucher melden sich im Vorfeld für einen der Workshops an, an dem sie den ganzen Tag teilnehmen und zusammen mit den Experten verschiedene Szenarien entwerfen. Im gemeinsamen Plenum werden diese Entwürfe schließlich zu einer plausiblen, faktenbasierten Science Fiction Erzählung zusammengetragen.</p>
		<p>Die Ergebnisse des <span class=bold>Welche Zukunft?!</span>-Labors fließen in ein gleichnamiges Theaterstück ein, das im September 2018, am Deutschen Theater uraufgeführt wird: In einem Untersuchungsausschuss wird diese Zukunft auf den Prüfstand gestellt. Zeugen und Verantwortliche werden einbestellt und wir fragen: Was hätten wir wissen können, wenn wir es hätten wissen wollen? Was hätten wir verhindern können?  </p>
		
		<p>Workshop- und Paneltag<br>
		Samstag, 16. September 2017<br>
		Deutsches Theater Berlin (im ganzen Haus)<br>
		Von 10:00 bis 20:15 Uhr </p>

		<p><span class="blue">Diese Seite befindet sich im Aufbau, detaillierte Informationen und die Möglichkeit zur Anmeldung gibt es ab 1. August 2017 </span></p>
		
		<hr>
		<p><span class=italic>Koproduktion des Deutschen Theaters Berlin mit der Stiftung Humboldt Forum im Berliner Schloss, gefördert von der Beauftragten der Bundesregierung für Kultur und Medien aufgrund eines Beschlusses des Deutschen Bundestages.</span></p>
		<div class=logos>
		<img src="image1.png" alt="logo">
		<img src="image2.png" alt="logo">
		</div>
		<hr>
		
		
		<h3>Die Workshops</h3>
		<p>Je 20 WorkshopteilnehmerInnen werden mit den ExpertInnen zusammen Szenarien entwerfen.</p>
		
		<h4>Ökonomie I</h4>
		<p class="workshop">Die Geister von Reagan und Thatcher... <span class=bold>Prof. Dr. Rudolph Hickel</span> vom Lehrstuhl für Politische Ökonomie in Bremen untersucht, wie sich die Deregulierung der US Banken durch Trump auf das weltweite Finanzsystem auswirken wird.  

		<h4>Ökonomie II</h4>
		<p class="workshop">Too big to fail? Können Deutsche Bank, Goldman-Sachs oder Credit Suisse die Weltwirtschaft lahmlegen? <span class=bold>Dr. Dieter Hein</span> vom unabhängigen Analyse-Institut Fairesearch entwickelt ein Szenario, in dem die Banken die Politik zum nächsten Bail-out zwingen. </p> 

		<h4>Ökonomie III</h4>
		<p class="workshop">Retten wir den Euro, und lassen dafür Italien und Griechenland über die Klinge springen? <span class=bold>Prof. Dr. Peter Bofinger</span>, dienstältestes Mitglied des Sachverständigenrates für Wirtschaft und <span class=bold>Dr. Dirk Ehnts</span>, Spezialist für Makroökonomie an der TU Chemnitz erforschen unsere Zukunft in einem Weltmarkt, der aus den Fugen gerät und in dem uns auch die D-Mark nicht mehr retten kann. </p>  

		<h4>Nachhaltige Ökonomie</h4>
		<p class="workshop">Können unsere sozialen Protokolle mit den Algorithmen mithalten? <span class=bold>Dr. Armin Haas</span> vom Institute for Advanced Sustainability Studies, Potsdam forscht zu viraler Ansteckung im Markt und fragt, wie viel uns die Geschichte des Marktes über seine Zukunft verrät. </p>  

		<h4>Staatsbankrott </h4>
		<p class="workshop">Was, wenn Italien, Griechenland und Portugal den Bankrott erklären und Deutschland auf den Schulden sitzen bleibt? Wenn die Polizei nicht mehr zur Arbeit kommt? <span class=bold>Prof. Dr. Kai von Lewinski</span> lehrt Öffentliches Recht an der Universität Passau und kann die Folgen des Bankrott für unsere Gesellschaft anschaulich beschreiben. War es das, was die Neo-Cons mit: „weniger Staat“ gemeint haben?  </p>  

		<h4>Risikomanagement</h4>
		<p class="workshop"><span class=bold>Prof. Dr. Volker Deville</span> von der Allianz Versicherung spielt mit Wild Cards: Ein Ausbruch der Phlegräischen Felder in Italien oder ein Durchbruch bei der Tumorforschung, der das Rentensystem endgültig zum Erliegen bringt. Die Versicherer sind Experten für das Unerwartete, dafür entwickeln sie Modelle. Sind die Versicherer die neuen Auguren?</p>  

		<h4>Energieversorgung</h4>
		<p class="workshop">Transnationale Korporationen betrachten die Zukunft nüchtern, analytisch. Es wird Krieg geben, oder nicht - wer weiß das schon? Aber die Energiewende ist sicher. <span class=bold>Dr. Cho-On Khong</span> ist Chief Analyst für Royal Dutch Shell. Von London aus entwirft 
		er Szenarien für die radikalen Umwälzungen, die der Firma - und damit auch uns - bevorstehen.</p>  

		<h4>Extremwetter</h4>
		<p class="workshop">Alle reden vom Klima - <span class=bold>Kai Kornhuber und Marlene Kretschmer</span> aus der Arbeitsgruppe Earth Systems Analysis am PIK reden vom Wetter. Extreme Sommer, extreme Winter - die Vorboten des Klimawandels. Wann ist der „Point of No Return“? Wann ist Extrem-Wetter Normalität und wir treten den geordneten Rückzug ins Binnenland an?</p>

		<h4>Geopolitik</h4>
		<p class="workshop">Geopolitik - die Politik des Raumes. Ist der Traum der Welt ohne Grenzen bereits ausgeträumt und wir reden wieder von lokalen Hegemonialmächten, Zugang zu Wasserwegen und einem Weltkrieg, der im Weltall ausgetragen wird? <span class=bold>Dr. Rodger Baker</span> von Stratfor berät Regierungen, Geheimdienste und Konzerne, die über Krieg und Frieden entscheiden müssen.</p>  

		<h4>Arbeit I</h4>
		<p class="workshop">In 10 Jahren wird es keine Arbeitsplätze im Bereich von Logistik und Retail geben. Und das ist nur die Robotik. Was passiert mit den Juristen, Bankangestellten und Medizinern, wenn künstliche Intelligenz den Markt übernimmt? Können wir uns darauf vorbereiten? <span class=bold>Cornelia Daheim</span> von Future Impacts leitet die deutsche Vertretung des „Millenium Project“, das jährlich den „State of the Future“ Report zur Zukunft der Arbeit veröffentlicht.</p>  
		<h4>Arbeit II</h4>
		<p class="workshop"><span class=bold>Dr. Martin Burckhardt</span> hat mit „Score“ seine eigene Vision von einer Gesellschaft entworfen, in der Spiel und Arbeit identisch sind. Nach dem Zusammenbruch der Weltwirtschaft wird unsere Identität Sinnstiftung und Währung zugleich. Können wir konsumieren, was wir nicht produzieren?</p>
		<h4>Umweltveränderungen</h4>
		<p class="workshop">Wie viele Menschen können wir ernähren, wenn die Äcker und Obstgärten durch Klimawandel und Überdüngung vernichtet sind - wo sind die Anbauflächen der Zukunft und wem gehören sie? <span class=bold>Dr. Monika Zurek</span> erforscht diese Fragen in der Food Systems Group am Environmental Change Institute der University of Oxford. Es geht um unser Überleben, aber auch darum, wem die Weinberge im Norden Schottlands gehören werden und wer sie jetzt schon plant.  </p>  
		<h4>Elite & Demokratie</h4>
		<p class="workshop">Soziologe <span class=bold>Michael Hartmann</span> forscht zu der Rolle der bundesrepublikanischen und europäischen Leistungselite. Bleiben angesichts der Selbstrekrutierung dieser Führungszirkel Chancengleichheit und Verteilungsgerechtigkeit leere Versprechen? Und wie verstärkt die von Hartmann konstituierte soziale Immobilität eine neue Wirtschafts- und Finanzkrise? Oder ist sie sogar einer ihrer Ursachen? </p>

		<p>Detaillierte Informationen und Anmeldung:</p>  
		<p>Ab  1. August 2017 unter <a href="http://www.welchezukunft.org">www.welchezukunft.org</a></p> 

		<form method="POST" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>#newsletter" id="newsletter">
			<label >Um über das Projekt auf dem laufenden zu bleiben, tragen Sie hier bitte ihren Namen und ihre Mailadresse ein.</label> 
			<br>
			<label >Vorname</label> 
			<input type="text" name="vorname" id="vorname" value="<?php echo $name_first;?>">
			<label >Name</label> 
			<input type="text" name="name" id="name" value="<?php echo $name_last;?>">
			<label >E-Mailadresse</label> 
			<input type="text" name="mailadresse" id="mailadresse" value="<?php echo $sub_mail;?>">
			<br>
			<button type="submit">Newsletter abonnieren</button>
			<label class="result" style="<?php echo $result_display;?>"><?php echo $feedback;?></label>
		</form>
		
		<p><span class=bold>Pressekontakt:</span><br>
		Katharina Wenzel <br>
		Leitung Presse und Kommunikation <br>
		030-28441234<br>
		<a href="mailto:wenzel@deutschestheater.de">wenzel@deutschestheater.de</a><br>
		In den Theaterferien zwischen 19. Juli und 28. August:<br>
		Luisa Männel <br>
		<a href="mailto:maennel@welchezukunft.org">maennel@welchezukunft.org</a><br></p>
		<br><br>
		<p ><a class=impressum href="impressum.html">Impressum</a></p>
		<br><br>
		</article>
		</body>
</html>






