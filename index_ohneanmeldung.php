<!DOCTYPE html>
<html lang="de">

<head>
	<title>WELCHE ZUKUNFT?!</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">
	<link rel="shortcut icon" type="image/x-icon" href="favicon.ico">
	<style>
		body {
			font-family: 'Oxygen', sans-serif;
			background-color: #000000;
			margin: 0px;
		}´
		
	</style>
	<link href="css/spinner.css" rel="stylesheet">
	<link href="css/underconstruction2.css" rel="stylesheet">
	<link href="css/structure.css" rel="stylesheet">
	<link href="css/menu.css" rel="stylesheet">
	<link href="css/menu_ws.css" rel="stylesheet">
	<link href="css/contentboxes.css" rel="stylesheet">
	<link href="css/activity.css" rel="stylesheet">
	<link href="css/formular.css" rel="stylesheet">
	<link href="css/tooltips.css" rel="stylesheet">
	<link href="css/tutorial.css" rel="stylesheet">
	<link href="css/2dcanvas.css" rel="stylesheet">
</head>
<?php require './nl.php';?>
<body>
	<script type='text/javascript' src='js/spinner.js'></script>
	<div id="topmenu" class="foreground">
		<input class="burger-check" id="burger-check" type="checkbox">
		<label for="burger-check" class="burger">⇳</label>
		<label class="left" for="burger-check" >Welche Zukunft?!</label>
		<label class="center">16. September 2017 im Deutschen Theater Berlin</label>
		<label class="right"><a href="#anmeldung" class="undeco">Jetzt anmelden</a></label>
		<nav id="navigation1" class="navigation">
		<ul>
			<li><a href="#container_section" onclick="setstatus(true);reset_ws();">Start</a></li>
			<li><a href="#info" onclick="setstatus(false);">Das Projekt</a></li>
			<li class="li-box"><span class="menu">Das Labor</span>
				<ul>
					<li><a href="#labor" onclick="setstatus(false);">Labor</a>
					<li><a href="#workshops" onclick="setstatus(false);">Workshops</a>
					<li><a href="#plenum" onclick="setstatus(false);">Plenum</a>
				</ul>
			</li>
			<li><a href="#anmeldung" class="pseudo anmeldung" onclick="setstatus(false);">Anmeldung</a></li>
			<li><a href="#team" onclick="setstatus(false);">Team & Partner</a></li>
			<li><a href="#kontakt" onclick="setstatus(false);">Kontakt</a></li>
			<li><a href="evolveline_en.php">English</a></li>
		</ul>
		</nav>
	</div><!-- topmenu -->

<main>
	<section id="container_section">
		<div class="back" id="container">
			<!--
			<div class="scroll-up nodisplay">
				<a href="#workshops">
					<span class="arrow"><span class="left"></span><span class="right"></span></span>
				</a>
			</div> --> <!-- scroll-up -->
			<!--
			<div class="scroll-down nodisplay">
				<a href="#team">
				<span class="arrow"><span class="left"></span><span class="right"></span></span>
				</a>
			</div> --> <!-- scroll-down -->

			<div id="bottom_menus" class="foreground">
				<!--
				<div id="anmeldung_link">
					<a class="pseudo anmeldung">&lt;&lt; zur Anmeldung</a>
				</div> --> <!-- anmeldung_link -->
				<div id="tutorial" class="tutorialanimation"><span></span></div>
				<div class="handle_container foreground"></div>
				<div id="workshopmenu">
					<input class="burger-ws-check" id="burger-ws-check" type="checkbox">
					<div id="ws_labels">
						<label  id="burger_icon" class="burger-ws">⇳</label>
						<div id="ws_text_labels">
							<label class="ws_content title" id="ws_menu_title"></label>
							<label  class="ws_content subtitle" id="ws_menu_subtitle"></label>
						</div><!-- text labels -->
					</div><!-- ws_labels -->
					<div id="ws_menu_content" class="navigation paper"></div>
				</div><!-- workshopmenu -->
			</div><!-- bottom_menus -->
		  <canvas id="threejs"></canvas>
		</div> <!-- container -->
	</section> <!-- container_section -->

	<article id="articleinfos">
		<section id="info"> <div class="flex"> <div class="paper">		
		<h1>Welche Zukunft?! </h1>
		<p class="italic">Hubschrauber kreisen über dem Kurhaus von Heiligendamm, Polizeiboote patrouillieren an der Ostseeküste, Möwen frieren am Strand. Drinnen im Saal des Grandhotels haben sich die Staats- und Regierungschefs der G12 versammelt. Es ist der 9.2.2028 und dies ist das erste Treffen seit dem Crash, der 2026 die Weltwirtschaft lahmlegte. Die Gastgeberin, Kanzlerin von der Leyen, tritt vor das Mikrofon und begrüßt die Gäste. Ihre Rede ist kurz, formlos und endet mit einem eindringlichen Appell.  </p>
		<p class="italic">„Dies ist die letzte Chance, unsere Demokratie zu retten. Die Menschen haben den Glauben an uns verloren. Wir, die internationale Staatengemeinschaft, haben versagt. Wir haben zu wenig unternommen, zu spät reagiert. Nun. Müssen. Wir. Handeln.“ </p>
		<p class="italic">Die versammelten Staats- und Regierungschefs werden nicht handeln. Sie werden sich aber dazu durchringen, einen Untersuchungsausschuss einzusetzen. Während draußen in den Städten Barrikaden brennen und Supermärkte geplündert werden, versucht ein internationales Panel in der Villa Perle die Ursachen für den Zusammenbruch der Weltwirtschaft zu ermitteln, der vor zwei Jahren begonnen hat und dessen Ende nicht absehbar ist.  </p>
		<p>Zugegeben: Es kann auch anders kommen. Es kann auch gut gehen. Die Krise wird abgewendet. Die Weltwirtschaft erholt sich. Die 17. Staffel von Game of Thrones wird gedreht, der Berliner Flughafen eröffnet. Wir wissen es nicht. </p>
		<p>Aber wenn wir es wüssten – wenn wir mit Sicherheit wüssten, dass die Party im Jahr 2026 zu Ende ist, dass eine Bank oder ein Algorithmus oder ein Land die Weltwirtschaft vor die Wand fährt – was würden wir tun? Hier und jetzt, was würden wir unternehmen?  </p>
		<p>„Welche Zukunft?!“ ist ein interdisziplinäres, partizipatives Forschungs- und Theaterprojekt, das sich zur Aufgabe gestellt hat, diese Frage zu beantworten: Was können wir tun, um zu verhindern, dass uns eine nächste Finanz- und Wirtschaftskrise endgültig den Boden unter den Füßen wegzieht? </p>
		<h2>Projektverlauf</h2>
		<p>„Welche Zukunft?!“ ist auf zwei Jahre angelegt. Zusammen mit Wissenschaftler_Innen und Publikum erforschen wir gemeinsam den Zusammenhang von Wissen, Vorhersage und Gestaltung. Irgendwo zwischen Agora, Science-Fiction, mathematischem Modell und dem Zufall liegt die Geschichte der Zukunft. Müssen wir nicht zumindest eine Vorstellung von ihr haben, um sie zu ändern? </p>
		<p>Ziel ist es, aus der Stagnation heraus zu treten, die permanente Gegenwart zu verlassen und eine Debatte über unsere Zukunft anzuregen. Fahren wir als Crashtest-Dummies der Geschichte immer wieder gegen dieselbe Wand?</p>
		<p>„Welche Zukunft?!“ erzählt die Geschichte der kommenden zehn Jahre, von 2018 bis 2028. </p>
		<p>Das Projekt ist unterteilt in vier Schritte:</p>
		<h2>Labor </h2>
		<p>Das Labor am 16. September 2017 im <i>Deutschen Theater Berlin</i> bildet den Auftakt der zweijährigen Veranstaltungsreihe. Hier wird auf Grundlage von Studien, Forschungsprojekten, Prognosen und Szenarien gemeinsam mit Expert_Innen und dem Publikum ein Zukunftsszenario für die kommenden zehn Jahre entwickelt. Einen ganzen Tag lang, in Workshops und Panels, im ganzen Haus des Deutschen Theaters. </p>
		<p><a href="#labor" onclick="setstatus(false);">>> mehr über das Labor</a></p>
		<h2>Symposium </h2>
		<p>Ein im März 2018 gemeinsam mit der <i>Stiftung Humboldt Forum im Berliner Schloss</i> veranstaltetes Symposium setzt die Arbeit des Labors vertiefend fort. Wissenschaftler_Innen aus verschiedenen Disziplinen halten Vorträge, debattieren über die Ergebnisse des Labors und entwickeln sie weiter.</p>
		<h2>Theaterstück</h2>
		<p>Die Ergebnisse von Labor und Symposium fließen in ein gleichnamiges Theaterstück ein, das im September 2018 am <i>Deutschen Theater Berlin</i> uraufgeführt wird: In einem Untersuchungsausschuss wird die Frage nach der Verantwortung für die Ereignisse der Jahre 2018 bis 2028 gestellt. Warum haben wir so und nicht anders gehandelt? Wer hätte das Schlimmste verhindern können? Expert_Innen und Schauspieler_Innen, Jurist_Innen und Politiker_Innen kommen für die Befragung zusammen. Es wird nicht über Schuld abgestimmt, sondern ermittelt, welche Entscheidungen welche Konsequenzen hatten und noch haben. </p>
		<h2>Abschlusskonferenz</h2>
		<p>Wie nun weiter?! Welche Zukunft … wird es werden?! Der vierte und letzte Teil im Frühjahr 2020 versucht in einer mit der <i>Stiftung Humboldt Forum im Berliner Schloss</i> veranstalteten Abschlusskonferenz die zweijährige Arbeit zu bilanzieren. Welche ökonomischen, politischen und sozialen Barrieren können wir errichten, um die Katastrophe aufzuhalten? Oder besser noch: Wie können wir ein Wirtschaftssystem entwickeln, das dem Menschen dient und nicht umgekehrt? Ein System, in dem das Vermögen nicht  dahin fließt, wo es den meisten Ertrag bringt, sondern dahin, wo es gebraucht wird? Wie schon in Labor und Symposium sind Teilhabe und interdisziplinärer Austausch in dieser Konferenz ebenso wesentlich, wie die Inhalte, die verhandelt werden. <p>
		<p class=italic>"Welche Zukunft?!" ist eine Koproduktion des Deutschen Theaters Berlin mit der Stiftung Humboldt Forum im Berliner Schloss, gefördert von der Beauftragten der Bundesregierung für Kultur und Medien aufgrund eines Beschlusses des Deutschen Bundestages.</p>
			<div class=logos>
			<a href="https://www.deutschestheater.de" target="_blank"><img src="image0.png" alt="logo"></a>
			<a href="http://humboldtforum.com/de-DE/" target="_blank"><img src="image2.png" alt="logo"></a>
			<a href="https://www.bundesregierung.de/Webs/Breg/DE/Bundesregierung/BeauftragtefuerKulturundMedien/beauftragte-fuer-kultur-und-medien.html" target="_blank"><img src="image1.png" alt="logo"></a>
			</div><!-- logos -->
			<p><span class=italic>Medienpartner:</span></p>
			<div class=logos>
			<a href="http://www.deutschlandfunkkultur.de" target="_blank"><img src="image3.png" alt="logo"></a>
			</div>	
		</div><!-- paper --> </div><!-- flex --> </section><!-- intro -->
		<section id="labor"> <div class="flex"> <div class="paper">
		<h2>LABOR</h2>
		<p>Das Labor am 16. September 2017 im <i>Deutschen Theater Berlin</i> bildet den Auftakt der zweijährigen Veranstaltungsreihe. Wir laden Menschen ein, in diesem Experiment gemeinsam mit Expert_Innen internationaler, privater und öffentlicher Forschungsinstitute eine Geschichte der nächsten zehn Jahre zu schreiben, die möglichst plausibel erscheint. Hier verhandeln wir Fakten, Wissen und Modelle, aber auch unsere Ängste, Hoffnungen und Wünsche.  </p>
		<p>Als Ausgangspunkt setzen wir eine fiktive Krise im Jahr 2026, die die Welt in eine Depression stürzen wird. Fragen kommen auf, nach den Verantwortlichen, nach den Prozessen, die stattfinden oder abgewendet werden müssen. So entsteht ein Denkraum, in dem wir uns entscheiden können, ob wir diese Zukunft wollen – oder eben doch eine andere. Wenn sie uns nicht gefällt, müssen wir die Parameter der Laboranordnung, die unser Leben ist, verändern. Und das müssen wir jetzt tun. </p> 
		<p>Das Labor versteht sich als partizipativer Prozess, in dem Wissen geteilt und gemeinsam generiert wird. In 13 <a href="#workshops" onclick="setstatus(false);">Workshops</a> versammeln sich 250 Menschen, um Zukunftsszenarien zu entwerfen und der Krise ins Auge zu blicken.   </p>
		<p>
		Welche Zukunft?!-Labor (Workshoptag)<br>
		Samstag, 16. September 2017<br>
		Deutsches Theater Berlin (im ganzen Haus)<br>
		Von 10:00 bis 20:15 Uhr, im Anschluss Musik<br>
		<a href="#anmeldung" onclick="setstatus(false);">Jetzt anmelden! </a><br>
		Detaillierter Programmablauf folgt.</p>
		</div><!-- paper --> </div><!-- flex --> </section><!-- ablauf -->
		


		<section id="workshops"> <div class="flex"> <div class="paper">	
			<h2>LABOR - Workshops</h2>
			<p>250 Teilnehmer arbeiten in <a href="#workshopthemen" onclick="setstatus(false);">13 Workshops</a> in den Themen Wirtschaft, Gesellschaft, Klima, Ernährung und Identität. Die Teilnahme ist kostenlos. Man muss sich lediglich im Vorfeld für einen Workshop <a href="#anmeldung" onclick="setstatus(false);">anmelden</a> (first come, first serve). Die Workshops sind für alle offen, Vorwissen ist keinesfalls Bedingung. Es wird jedoch empfohlen, die Texte zu lesen, die nach der Anmeldung zur Verfügung gestellt werden. </p>
			<p>Die Arbeitssprache des Labors ist deutsch, Ausnahme sind drei Workshops in Englisch ohne Simultanübersetzung. Das Plenum wird jeweils zweisprachig sein. </p>
			<p>In zwei Workshop-Sessions à 90 Minuten entwickeln die Teilnehmer_Innen und Expert_Innen gemeinsam Szenarien für den Verlauf der kommenden zehn Jahre in ihrem jeweiligen Themenfeld. </p>
			<p>Die in den <a href="#container_section" onclick="setstatus(true);reset_ws();">Workshopbeschreibungen</a> vorgestellten Szenarien sind erste Vorschläge, Anregungen. Alles ist möglich: Die EU löst sich auf, die AfD stellt den Kanzler, die D-Mark kommt zurück, in China platzt die nächste Immobilienblase, ein neues VR-Spiel hält die Menschen davon ab, zur Arbeit zu erscheinen, ein neues Medikament besiegt den Krebs, die Öl-Industrie rettet das Klima und Daniel Libeskind baut die neue Hauptstadt des vereinigten Korea in der entmilitarisierten Zone.  </p>
			<p>Wenn aber alles möglich ist – was halten wir für wahrscheinlich und plausibel? Und worauf sollten wir uns vorbereiten? </p>
			<p>Die Ergebnisse werden von Moderatoren festgehalten und im <a href="#plenum" onclick="setstatus(false);">Plenum</a> vorgetragen und diskutiert. </p>
			<p>Jeder Workshop hat ca. 20 Teilnehmer, jede Stimme zählt.</p> 
			<a href="#container_section" onclick="setstatus(true);reset_ws();">>> Zu den Workshops</a><br>
			<a href="#anmeldung" onclick="setstatus(false);">>> Zur Anmeldung</a>
			</div><!-- paper --> </div><!-- flex --> </section><!-- workshops -->
			
			<section id="workshopthemen"> <div class="flex"> <div class="paper">	
			<h2>LABOR - Die Workshopthemen am 16. September </h2>
			<h3>Ökonomie: Fiskalische und andere Götterdämmerungen</h3>
			<p class="workshop">Soziale und ökonomische Krisen als Folge einer fehlgeleiteten Politik.</p>
			<p class="workshop">Experte: Prof. Dr. Rudolph Hickel (Institut für Arbeit und Wirtschaft in Bremen)</p>

			<h3>Ökonomie: Patient Zero – der Indexpatient Deutsche Bank</h3>
			<p class="workshop">Too big to fail oder: Wie gefährlich ist die Deutsche Bank?</p>
			<p class="workshop">Experte: Dieter Hein (Fairesearch, Frankfurt a.M.)</p>
			
			<h3>Ökonomie: Armageddon</h3>
			<p class="workshop">Wenn die AfD den Kanzler stellt… Der Workshop untersucht Protektionismus, Deflation und Währungskrisen als Treiber für den hypothetischen Zusammenbruch der Weltwirtschaft im Jahr 2026. </p>
			<p class="workshop">Experten: Prof Dr. Bofinger (Uni Würzburg; Mitglied des Sachverständigenrates der Bundesregierung) und Dr. Dirk Ehnts (Uni Chemnitz)</p>

			<h3>Ökonomie: Der Weg zur Hölle ist mit guten Vorsätzen gepflastert</h3>
			<p class="workshop">Was passiert, wenn Regulierung die Prozesse beschleunigt, die sie verhindern soll?</p>
			<p class="workshop">Experte: Dr. Armin Haas (Institute for Advanced Sustainability Studies in Potsdam)</p>
			
			<h3>Recht und Gesetz: Staatsverluste?!</h3>
			<p class="workshop">Staatsbankrott ist nur der letzte Schritt in einem langen Prozess. Welche Regeln herrschen im Chaos und wer setzt sie um? </p>
			<p class="workshop">Experte: Prof. Dr. Kai von Lewinski (Professor für Öffentliches Recht, Uni Passau)</p>
			
			<h3>Risikomanagement: Guter Rat – Notvorrat …</h3>
			<p class="workshop">Kann man sich gegen systemische Risiken versichern? Kann man sich überhaupt schützen?</p>
			<p class="workshop">Experte: Prof. Dr. Volker Deville (Uni Bayreuth; ehemals Allianz Research)</p>

			<h3>Energy transitions (in engl. Sprache)</h3>
			<p class="workshop">After Oil – but not in the dark ages.</p>
			<p class="workshop">Experts: Dr. Cho Khong and Geraldine Wessing (Royal Dutch Shell, London)</p>
			
			<h3>Wetter: Eine neue Normalität</h3>
			<p class="workshop">Welche Rolle spielt jeder Einzelne in einem chaotischen System?</p>
			<p class="workshop">Experten: Jascha Lehmann, Marlene Kretschmer, Kai Kornhuber, Sonja Molnos (Potsdam-Institut für Klimafolgenforschung)</p>

			
			<h3>Geopolitics: Intersections (in engl. Sprache)</h3>
			<p class="workshop">War and peace and who can afford it?</p>
			<p class="workshop">Rodger Baker (Stratfor/Texas (USA))</p>
			
			
			<h3>Arbeit: Zukunft ohne Arbeitgeber?</h3>
			<p class="workshop">Holokratie, Automatisierung, flexible Arbeitsformen, virtuelle Teams, lokale Produktion, Cult of Less, Armut oder Verzicht?</p>
			<p class="workshop">Expertin: Cornelia Daheim (Future Impacts, Köln)</p>
			
			<h3>Identitäten: Heiße Luft</h3>
			<p class="workshop">Geschichte wiederholt sich nicht buchstäblich, sondern als Farce.</p>
			<p class="workshop">Experte: Martin Burckhardt (Autor und Kulturtheoretiker, Berlin)</p>
			

			<h3>Elite & Demokratie: Rolle rückwärts</h3>
			<p class="workshop">Die Eliten in den meisten wichtigen Ländern haben die Ursachen der letzten Krise nicht wirklich begriffen oder begreifen wollen. </p>
			<p class="workshop">Experte: Michael Hartmann (Prof. i.R. für Soziologie, TU Darmstadt)</p>

			<h3>Agriculture: Coffee shortage and other inconveniences (in engl. Sprache)</h3>
			<p class="workshop">How far off are we from a time when people go hungry in Europe? </p>
			<p class="workshop">Experts: Dr. Ariella Helfgott, Dr. George Garbutt & Patrick O’Reilly (University of Oxford)</p>
		</div><!-- paper --> </div><!-- flex --> </section><!-- workshopthemen -->
		
		<section id="plenum"> <div class="flex"> <div class="paper">	
			<h2>LABOR - Plenum</h2>
			<p>Zwei Mal treffen sich alle Teilnehmer der Workshops zum Plenum. Moderiert von <a href="#moderatoren">Ulrike Hermann und Adrian Taylor</a> werden die Ergebnisse der Workshops zusammengetragen und am Szenarientisch auf einer interaktiven Timeline so lange arrangiert und umarrangiert, bis aus den Fragmenten und Thesen eine plausible Erzählung entsteht. Geschichte wird gemacht… Das Szenario wird nicht immer eindeutig festzulegen sein, aber insgesamt muss der Ablauf der Ereignisse nachvollziehbar werden. </p>
			<p>Die Teilnehmer beobachten, wie die Experten und Moderatoren ihre Ergebnisse verwerten, haben dabei immer die Möglichkeit, selbst zu kommentieren, zu ergänzen, Einspruch zu erheben. </p>
			<h3>Am Kritikertisch: Joseph Vogl</h3>
			<p class="italic">„Die Erhöhung von Redeangeboten in akademisch nicht formatierten Bereichen ist eine Einladung zur Produktion von Quatsch“ *</p>
			<p>Prof. Dr. Joseph Vogl, von Hause aus Literatur-, Kultur- und Medienwissenschaftler an der Humboldt-Universität zu Berlin, gilt als einer der scharfsinnigsten Analytiker der vorherrschenden ökonomischen Lehre. In seinen letzten Büchern 'Das Gespenst des Kapitals' und 'Der Souveränitätseffekt' hinterfragt er den Glauben an die unsichtbare Hand des Marktes sowie die Machtstrukturen im gegenwärtigen Finanzregime. 
			 <br><br>
			Zugleich ist Vogl auch ein Kritiker von „rhetorischen Schwellkörpern“. Ihm bereitet das Produzieren von Zuspitzungen, Pointen und handlichen Thesen grundsätzlich ein schlechtes Gewissen. <br><br>
			Joseph Vogl wird den Labortag kritisch begleiten und uns eine abschließende Keynote auf den Weg geben. </p>
			<p class="italic">* Moritz von Uslar im Gespräch mit Joseph Vogl. Aus: Die ZEIT Nr 20 / 2017 vom 14.Mai
			</p>
			</div><!-- paper --> </div><!-- flex --> </section><!-- plenum -->	
			
			<section id="moderatoren"> <div class="flex"> <div class="paper">
			<h2>LABOR – Moderatoren im Plenum am 16. September</h2>
			<p><b>Ulrike Herrmann</b> absolvierte nach einer abgeschlossenen Lehre als Bankkauffrau die Henri-Nannen-Schule. Anschließend studierte sie Wirtschaftsgeschichte und Philosophie an der Freien Universität Berlin. Seit 2000 ist sie Wirtschaftskorrespondentin bei der Berliner taz. Dort war sie auch Parlamentskorrespondentin und leitete die Meinungsredaktion. Sie gehört auch zum Vorstand der taz-Verlagsgenossenschaft. Zahlreiche Buchveröffentlichungen, u.a. Der Sieg des Kapitals. Wie der Reichtum in die Welt kam. Die Geschichte von Wachstum, Geld und Krisen (2013) und Kein Kapitalismus ist auch keine Lösung. Die Krise der heutigen Ökonomie oder Was wir von Smith, Marx und Keynes lernen können (2016) </p>
			<p><b>Adrian Taylor</b> gründete das Unternehmen 4Sing Foresight to Strategy for Security and Sustainability in Governance. Er ist spezialisiert auf inhaltliche Beratung, Prozessdesign und Workshop-Moderation in den Themen Sicherheit und Nachhaltigkeit. Adrian war Junior-Offizier in der britischen Armee, Lobbyist in EU-Angelegenheiten, Szenarien-Planer in einem Gemeinschaftsprojekt mit Global Business Network, Länderreferent für Indien bei der Europäischen Kommission, beschäftigt bei der European School of Governance und dort zugleich Präsident des European Open Source Intelligence Forums. Er absolvierte ein Studium der Philosophie, Politik und Wirtschaft und hält im Fach Europäische Studien eine Lizenz Spéciale (Master). Adrian Taylor ist in London geboren und aufgewachsen und hat in Gibraltar, Brüssel, Atlanta, Zürich, New York und München gelebt. Er wohnt derzeit in Hamburg.</p>
		</div><!-- paper --> </div><!-- flex --> </section><!-- moderatoren -->
		
		<section id="anmeldung"> <div class="flex"> <div class="paper">
			<div class="formular">
			
				<div class="formmenu">
					<p id="signup" class="hl_form">Anmeldung</p>
					
					<p id="getnews" class="hl_form">Newsletter</p>
				</div><!-- formmenu -->
				
				<div id="anmeldeformular">
					<form method="POST" action="/adduser/" id="anmeldung_form">
						<p>Der Anmeldezeitraum endete am 9. September 2017, 12 Uhr<br>
						<br>
						Am 9. September werden wir die vorläufig angemeldeten Teilnehmer/innen um eine finale Rückmeldung bitten (per Mail). Diese endgültige Bestätigung zur Teilnahme muss zwischen dem 10. und 13. September von Ihnen per Mail an uns erfolgen. Diese Rückbestätigung ist die Voraussetzung für Ihre Teilnahme am „Welche Zukunft?!“-Labor und dem jeweiligen Workshop.
						<br>
						Frei gewordene Plätze werden am 14. und 15. September per Losverfahren an Anmelder/innen aus der Warteliste vergeben. Sie werden ebenso per E-Mail benachrichtigt.<br></p>
						<br>
					</form><!-- anmeldung -->
				</div><!-- anmeldeformular -->
				<div id="newsletter">
				<form method="POST" id="nl_form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
					<input type="hidden" name="list" value="newsletter">
					<label >Um über das Projekt auf dem laufenden zu bleiben, tragen Sie hier bitte ihren Namen und ihre Mailadresse ein. Sollten sie sich für den Workshoptag angemeldet haben erhalten Sie den Newsletter automatisch.</label>
					<br>
					<label >Vorname</label>
					<input type="text" name="vorname" value="<?php echo $name_first;?>">
					<label >Name</label>
					<input type="text" name="nachname" value="<?php echo $name_last;?>">
					<label >E-Mailadresse</label>
					<input type="text" name="mail" value="<?php echo $sub_mail;?>">
					<br>
					<input name="agb" type="hidden" value="NO">
					<input name="agb" class="agb_check" type="checkbox" value="YES">
					<label class="agbs">Ich habe die <a href="#agb_area" onclick="showagbs(true);">AGBs</a> gelesen und bin damit einverstanden.</label>
					<button type="submit">Newsletter abonnieren</button>
					<label id="nl_form_result" class="result" style="<?php echo $result_display;?>"><?php echo $feedback;?></label>
				</form>
				</div>
					<section id="agb_area">
						<div id="agbs" class="agbtext">
						<label ><a href="#anmeldung" onclick="showagbs(false);">AGBs schliessen</a></label>
						<p >
						Erhebung und Verwendung Ihrer Daten bei Anmeldung zum Workshop<br><br>
						Die von Ihnen bei der Anmeldung zum Workshop eingegebenen Angaben werden auf dem Server von „Welche Zukunft?!“ gespeichert. Erforderliche Daten (Pflichtfelder) sind hierbei: Name, Mailadresse und ausgewählter Workshop. Die Angaben zu Ihrem Zukunftsszenario sind freiwillig. Sie dienen - wie die Szenarien der Experten - als Grundlage für die Arbeit im Workshop. Wir behandeln die Daten vertraulich und verwenden sie ausschließlich zu organisatorischen Zwecken (wer nimmt an welchem Workshop teil) und zu Informationszwecken zum Workshoptag. Wir werden Wissenswertes zum Ablauf des Tages oder zum Workshopthema an Ihre E-Mail-Adresse versenden. Ihre Daten werden nur so lange gespeichert, wie es zur Organisation des Workshoptages erforderlich ist und spätestens im November 2017 gelöscht. Durch Abmelden vom Workshop durch den Nutzer werden die Daten nach maximal 6 Wochen unwiderruflich gelöscht. Möchten Sie dennoch weiter im Mailing-Verteiler von „Welche Zukunft?!“ vertreten sein und Informationen durch uns erhalten, melden Sie sich einfach für den Newsletter an.
						<br><br>
						Bild- und Tonaufnahmen am Workshoptag<br><br>
						Während des "Welche Zukunft?!“-Labors am 16. September werden durch die Mitarbeiter des Deutschen Theaters Berlin Bild- und Tonaufnahmen von den Workshops und Plena angefertigt. Diese dienen der weiteren Recherche und einer späteren Veröffentlichung. Indem Sie am Labor teilnehmen, stimmen Sie dieser Veröffentlichung zu.
						<br><br>
						Newsletter<br><br>
						Um sich bei unserem E-Mail-Newsletterdienst anmelden zu können, benötigen wir mindestens Ihre E-Mail-Adresse, an die der Newsletter versendet werden soll. Etwaige weitere Angaben sind freiwillig und werden verwendet, um Sie persönlich ansprechen und den Inhalt des Newsletters persönlich ausgestalten zu können. Wir werden Ihnen erst dann den Newsletter zusenden, wenn Sie zuvor Ihre Anmeldung per von uns zugesendetem Link bestätigen. Damit möchten wir sicherstellen, dass nur Sie selbst sich als Inhaber der angegebenen E-Mail-Adresse zum Newsletter anmelden können. Ihre diesbezügliche Bestätigung muss binnen einer Woche nach Erhalt der Bestätigungs-E-Mail erfolgen, da andernfalls Ihre Newsletter-Anmeldung automatisch aus unserer Datenbank gelöscht wird. Sie können einen von Ihnen bei uns abonnierten Newsletter jederzeit abbestellen indem Sie ganz einfach über den Link am Ende des Newsletters eine Stornierung vornehmen.
						<br><br>
						Protokollierung<br><br>
						Auf dem Server der Website werden standardmäßig Protokolleinträge Ihres Zugriffs aufgezeichnet. Diese werden von uns nicht ausgewertet oder in irgend einer Art weiterverwendet. </p>
						</div>
						</section>
			</div>
		</div><!-- paper --> </div><!-- flex --> </section><!-- anmeldung -->

		<section id="team"> <div class="flex"> <div class="paper">
			<h2>TEAM & PARTNER</h2>
			<h3>TEAM</h3>
			<p>Konzeption und Durchführung: Andres Veiel, Jutta Doberstein, Ulrich Beck, Daniel Hengst, Julia Kaschlinski, Michaela Barth, Luisa Männel</p>
			<h3>PARTNER</h3>
			<p class=italic>"Welche Zukunft?!" ist eine Koproduktion des Deutschen Theaters Berlin mit der Stiftung Humboldt Forum im Berliner Schloss, gefördert von der Beauftragten der Bundesregierung für Kultur und Medien aufgrund eines Beschlusses des Deutschen Bundestages.</p>
			<div class=logos>
			<a href="https://www.deutschestheater.de" target="_blank"><img src="image0.png" alt="logo"></a>
			<a href="http://humboldtforum.com/de-DE/" target="_blank"><img src="image2.png" alt="logo"></a>
			<a href="https://www.bundesregierung.de/Webs/Breg/DE/Bundesregierung/BeauftragtefuerKulturundMedien/beauftragte-fuer-kultur-und-medien.html" target="_blank"><img src="image1.png" alt="logo"></a>
			</div><!-- logos -->
			<p><span class=italic>Medienpartner:</span></p>
			<div class=logos>
			<a href="http://www.deutschlandfunkkultur.de" target="_blank"><img src="image3.png" alt="logo"></a>
			</div>	
		</div><!-- paper --> </div><!-- flex --> </section><!-- team -->
		<section id="vita"><div class="flex"> <div class="paper">
		<b>Andres Veiel</b> gilt als einer der profiliertesten Vertreter einer politisch engagierten Kunst. Besonderes Merkmal der Arbeitsweise Veiels ist die intensive, teilweise mehrjährige Recherche als Grundlage für seine Projekte. Für seine Filme "Winternachtstraum" (1991), "Balagan" (1993), "Die Überlebenden" (1996), "Black Box BRD" (2001), "Die Spielwütigen" (2004), "Der Kick" (2006), "Wer wenn nicht wir" (2011) und "Beuys" (2017) hat er mehr als vierzig Auszeichnungen erhalten, darunter den Europäischen Filmpreis und mehrfach den Deutschen Filmpreis. Seine Theaterstücke "Der Kick" (2006) und "Das Himbeerreich" (2013) wurden unter seiner Regie am Maxim Gorki Theater und dem Deutschen Theater uraufgeführt und zu zahlreichen Gastspielen eingeladen (u.a. zum Berliner Theatertreffen). 
		<br><br>
		<b>Jutta Doberstein</b> ist freischaffende Autorin und Stoffentwicklerin im Bereich Film und Fernsehen. Neben der Realisierung fiktionaler Formate hat sie sich vor allem auf die Entwicklung dokumentarischer Stoffe und Online-Formate spezialisiert. Bei verschiedenen Filmfestivals war sie als Kuratorin und Mitglied in Auswahlkommissionen tätig. Mit Andres Veiel verbindet sie eine mehrjährige Zusammenarbeit. Jutta Doberstein arbeitet zudem regelmäßig als Übersetzerin von Spielfilmdrehbüchern und Dokumentarfilmen.
		<br><br>
		<b>Ulrich Beck</b> ist Dramaturg am Deutschen Theater Berlin. Er studierte Dramaturgie an der Hochschule für Musik und Theater ''Felix Mendelssohn Bartholdy'' Leipzig und war am Schauspiel Staatstheater Stuttgart, am Maxim Gorki Theater Berlin, am Deutschen Theater Berlin und am Burgtheater Wien tätig. Am Thalia Theater Hamburg übernahm er die Dramaturgie für Alexander Riemenschneiders Dramatisierung der Kafka-Erzählung In der Strafkolonie. Zusammen mit Peter Schwarz und Kerstin Holm kuratierte er das ukrainischen Theaterfestival "¡alles anders?" (veranstaltet von MitOst e.V.). Von 2009 bis 2011 war er als Dramaturgie-Assistent am Deutschen Theater Berlin tätig, seit der Spielzeit 2011/12 ist er dort Dramaturg. Mit Andres Veiel arbeitete er bereits bei "Das Himbeerreich" (2013) zusammen.
		<br><br>
		<b>Daniel Hengst</b> ist als freischaffender Video- und Medienkünstler für Theater, Oper, Performance- und Filmprojekte tätig. Er arbeitet an der Schnittstelle von Technologie, Film und szenischer Kunst und entwickelt Videoperformances, digitale Theaterexperimente, 3D-Animationen und Soundscapes. Bisher entstanden Arbeiten am Centraltheater Leipzig, Schauspiel & Oper Dortmund, Schauspiel Frankfurt, Sophiensaele Berlin, Theater Freiburg und am Deutschen Theater Berlin. Neben Arbeiten für die Bühne entwickelt er eigene experimentelle und künstlerische Projekte. Gemeinsam mit Malin Nagel initiierte er die Theater- und Technikforschungsreihe "Savoir Vivre I-IV" (2015) und in Zusammenarbeit mit Nina Wesemann entstand das dokumentarische VR-Projekt "My Lonesome Hologram" (2016). 2014 wurde Daniel Hengst der Nachwuchspreis des Deutschen Bühnenvereins, der Dr.Otto-Kasten-Preis, als Videokünstler verliehen.
		<br><br>
		<b>Julia Kaschlinski</b> geboren in Riga (Lettland), aufgewachsen in Berlin, studierte Architektur an der Universität der Künste Berlin und realisierte die ersten Bühnenbilder an New Yorker Off-Broadway-Theatern. Nach einer zweijährigen Bühnenbildassistenz am Thalia Theater Hamburg arbeitet sie als freie Bühnen- und Kostümbildnerin, unter anderem am Deutschen Theater Berlin, Schauspielhaus Stuttgart, Schauspiel Düsseldorf, Maxim-Gorki-Theater Berlin, Theater Basel, Theater Aachen, Schauspielhaus Bochum, u.a. Eine kontinuierliche Zusammenarbeit, zuletzt bei "Das Himbeerreich", einer Co-Produktion vom Deutschen Theater Berlin & Schauspielhaus Stuttgart, verbindet sie mit Andres Veiel.
		<br><br>
		<b>Michaela Barth</b> geboren in München, aufgewachsen in Algerien, Saudi Arabien und im Bergischen Land, machte nach dem Abitur eine Ausbildung zur Damenschneiderin und zog schließlich für das Studium an der UdK nach Berlin, wo sie seither lebt. Ab 1994 arbeitete sie als Kostümassistentin von Herbert Murauer, Philipp Stölzl, Marcel Keller, Elisabeth Rauner und Wilhelmine Bauer sowie in festem Engagement am Schauspiel Stuttgart. In Berlin betreute sie über viele Jahre Produktionen des Obdachlosentheaters Ratten 07 sowie des Gefangenentheaters "Aufbruch" in der JVA Tegel. Seit 2000 arbeitet sie regelmäßig mit Michael Thalheimer zusammen, zuletzt bei dessen Inszenierung von Kleists "Der zerbrochne Krug" am Hamburger Schauspielhaus. 2007 kreierte sie bei den Bayreuther Festspielen das Kostümbild für Katharina Wagners "Die Meistersinger von Nürnberg". Darüber hinaus entwarf sie Kostüme für die Regisseure Hans Neuenfels, Christof Loy, Armin Petras, Enrico Lübbe, Holk Freytag, Karoline Gruber, Johannes Schütz, David Hermann und andere. Nach "Das Himbeerreich" ist dies ihre zweite Produktion mit Andres Veiel.
		<br><br>
		<b>Luisa Männel</b> studierte Theaterwissenschaft, Kommunikations- und Medienwissenschaft sowie Hispanistik in Leipzig und Barcelona/Spanien. Während ihres Studiums hospitierte sie am Maxim Gorki Theater Berlin und am Centraltheater Leipzig und übernahm Regie- und Produktionsassistenzen für Theater- und Performanceprojekte. Nach ihrem Magisterabschluss arbeitete sie im Kulturprogramm des Goethe Instituts Barcelona und übernahm im Anschluss die Online-Redaktion für das Internationale Leipziger Festival für Dokumentar- und Animationsfilm, DOK Leipzig. Von 2013 bis 2016 war sie am Anhaltischen Theater Dessau, zuletzt als Leiterin der Presse- und Öffentlichkeitsarbeit tätig. Seitdem arbeitet sie freischaffend im Bereich Kommunikation u.a. für das Anhaltische Theater Dessau, die Bühnen Halle, die Stiftung Bauhaus Dessau und das Deutsche Theater Berlin.
		</div><!-- paper --> </div><!-- flex --> </section><!-- vita -->
		<section id="kontakt"> <div class="flex"> <div class="paper">
			<h2>KONTAKT</h2>
			
			<a href="https://www.facebook.com/welchezukunft" target="_blank">facebook.com/welchezukunft</a><br><br>
			<a href="https://twitter.com/welchezukunft" target="_blank">twitter.com/welchezukunft</a><br><br>
			
			
			<p>Deutsches Theater<br>
			Schumannstraße 13 A<br>
			10117 Berlin<br>
			Telefon: +49 30 28441-0<br>
			<a href="mailto:service@deutschestheater.de">service@deutschestheater.de</a><br>
			<a href="https://www.deutschestheater.de">www.deutschestheater.de</a><br><br>

			Bei Fragen zum Projekt, zur Webseite oder zur Anmeldung, wenden Sie sich bitte an <a href="mailto:info@welchezukunft.org">info@welchezukunft.org</a></p>
			<p><span class=bold>Pressekontakt:</span><br>
			Katharina Wenzel <br>
			Leitung Presse und Kommunikation <br>
			030-28441234<br>
			<a href="mailto:wenzel@deutschestheater.de">wenzel@deutschestheater.de</a><br>
			In den Theaterferien zwischen 19. Juli und 28. August:<br>
			Luisa Männel <br>
			<a href="mailto:maennel@welchezukunft.org">maennel@welchezukunft.org</a><br></p>
			<br><br>
			<p ><a href="#impressum" onclick="showimpressum(true);">Impressum</a></p>
		
		<section id="impressum">
		<div id="impressumtext">
		<label ><a href="#kontakt" onclick="showimpressum(false);">Impressum schliessen</a></label>
		<h3>Impressum</h3>
		<p>Deutsches Theater<br>
		Schumannstraße 13 A<br>
		10117 Berlin<br>
		Telefon: +49 30 28441-0<br>
		service@deutschestheater.de<br>
		www.deutschestheater.de<br><br>

		Bei Fragen zu oder Problemen mit dieser Website, wenden Sie sich bitte an info@welchezukunft.org<br><br>

		Intendant<br>
		Ulrich Khuon<br><br>

		Vertretungsberechtigter Geschäftsführer<br>
		Klaus Steppat<br><br>

		Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz<br>
		Ust.-ID-Nr.: DE811984292<br><br>

		Inhaltlich Verantwortlicher gemäß § 6 MDStV<br>
		Kommunikation/Dramaturgie<br><br>


		Haftungsausschluss:<br><br>

		Inhalt des Webangebotes<br>
		Das Deutsche Theater Berlin ist bemüht, sein Webangebot stets aktuell und inhaltlich richtig sowie vollständig anzubieten. Dennoch ist das Auftreten von Fehlern nicht völlig auszuschließen.<br>
		Das Deutsche Theater Berlin übernimmt keine Haftung für die Aktualität, die inhaltliche Richtigkeit sowie für die Vollständigkeit der in seinem Webangebot eingestellten Informationen, es sei denn die Fehler wurden vorsätzlich oder grob fahrlässig aufgenommen. Dies bezieht sich auf eventuelle Schäden materieller oder ideeller Art Dritter, die durch die Nutzung dieses Webangebotes verursacht wurden.<br><br>

		Copyright<br>
		Das Layout der Homepage, die verwendeten Grafiken und Bilder sowie die einzelnen Beiträge sind urheberrechtlich geschützt.<br><br>

		Externe Verweise und Links<br>
		Das Deutsche Theater Berlin hat keinen Einfluss auf Gestaltung und Inhalte fremder Internetseiten. Es distanziert sich daher von allen fremden Inhalten, auch wenn von Seiten des Deutschen Theaters Berlin auf diese externe Seiten ein Link gesetzt wurde.<br><br>

		Diese Erklärung gilt für alle auf unserer Website angezeigten Links und für alle Inhalte der Seiten, zu denen die bei uns angemeldeten Banner und Links führen.<br><br>

		Datenschutz<br>
		Sofern innerhalb des Internetangebotes die Möglichkeit der Eingabe von persönlichen Daten (E-Mail-Adresse, Namen, Anschriften) besteht, erfolgt diese freiwillig. Das Deutsche Theater Berlin erklärt ausdrücklich, dass es diese Daten nicht an Dritte weitergibt.<br><br>

		Rechtswirksamkeit<br>
		Dieser Haftungsausschluss ist Teil des Internetangebotes des Deutschen Theaters Berlin. Sofern einzelne Formulierungen oder Teile dieses Textes der geltenden Rechtslage nicht mehr oder nicht mehr vollständig entsprechen, bleiben die übrigen Teile dieser Erklärung davon unberührt.<br><br>

		Konzeption & Technische Umsetzung<br>
		Daniel Hengst, Alexander Hof, Lars Parmakerli<br><br>
		</p>
		</div>
		</section>
		</div><!-- paper --> 
		</div><!-- flex --> </section><!-- kontakt -->

	</article>

</main>

	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script src="js/three.js"></script>
	<script src="js/CurveExtras.js"></script>
	<script src="js/stats.min.js"></script>
	<script type='text/javascript' src='js/tween.js'></script>

	<!-- contentboxes -->
	<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script> var handle_pos = {"x":0, "y":0, "z":0}; var language="deu";</script>
	<script type='text/javascript' src='js/contentboxes.js'></script>
	<script type='text/javascript' src='js/contentboxes_line_functions.js'></script>
	<!-- contentboxes -->

	<script id="vertex" type="text/x-glsl-vert">
		  varying float vZ;
		  varying vec2 vPosition;
		  uniform float time;
		  uniform float effectAmount;
		  varying vec2 vUv;

		  void main() {
			vUv = uv;// + vec2(0,sin(time*0.01));
			vPosition = position.xy;// + vec2(0,(time));
			gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
		  }
	</script>
	<script id="fragment" type="text/x-glsl-frag">
	  varying float vZ;
	  varying vec2 vUv;
	  varying vec2 vPosition;
	  uniform float time;
	  uniform float effectAmount;
	  uniform vec2 size;
	  uniform sampler2D map;
	  uniform sampler2D map2;
	  uniform vec2 speed;

	  uniform vec2 resolution;
	  uniform vec2 amount;

	  float rand(vec2 n) {
		return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 43758.5453);
		}

		 float noise(vec2 p){
			vec2 ip = floor(p);
			vec2 u = fract(p);
			u = u*u*(3.0-2.0*u);

			 float res = mix(
				mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x+sin(speed.x*10.)+fract(sin(time/500.))),
				mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y+cos(speed.y*20.));//+fract(sin(time/1000.)));
			return res*res;
		}


	  void main() {
		float d = 1.0 / amount.x;
		float d2 = d * 5. + floor(fract(sin(time/10.))*10.);
		float ar = resolution.x / resolution.y;
		float u = floor(vPosition.x / d ) * d;
		float u2 = floor(vPosition.x / d2 ) * d2;
		d = ar / amount.y;
		d2 = (ar / amount.y) + floor(fract(cos(time/3.))*3.);
		float v = floor( vPosition.y / d ) * d;
		float v2 = floor( vPosition.y / d2 ) * d2;

		float stepx = floor(noise(vec2(u,v))*16.)/4.;
		float stepy = floor(noise(vec2(u,v))*2.*(fract(sin(time/10.)))*10.)/4.;
		
		float colstepred = floor(noise(vec2(u2,v2))*2.)/2.;
		float colstepgreen = floor(noise(vec2(u2,v2))*2.)/2.;
		
		vec3 finalcolor = vec3(0.,1.,0.);
		if(colstepred == 0. && colstepgreen == 0.){
			finalcolor = vec3(1.,1.,1.);
		}
		else if(colstepred >= 0. && colstepgreen <= 0.5){
			finalcolor = vec3(1.,0.,0.);
		}
		vec4 image = texture2D(map2,vec2((vPosition.x)/resolution.x,vPosition.y/resolution.y*-0.5));
		vec4 textureColor = texture2D(map, vUv+vec2(stepx,stepy));
		gl_FragColor = (vec4(finalcolor,1.)*vec4(textureColor.a));//*(vec4(image.xyz,1.)));
		//gl_FragColor = image;
	  }

	</script>
	<script type='text/javascript' src='js/msg_map.js?1'></script>
	<script type='text/javascript' src='js/form_submit.js?1'></script>
	<script type='text/javascript' src='js/Detector.js'></script>
	<script type='text/javascript' src='js/changeworkshop.js'></script>
	<script type='text/javascript' src='js/numbers.js'></script>
	<script type='text/javascript' src='js/triggers.js'></script>
	<script type='text/javascript' src='js/smoothscroll.js'></script>
	<script type='text/javascript' src='js/dynamiccontent.js'></script>
	<script type='text/javascript' src='js/menu_workshop.js'></script>
	<script type='text/javascript' src='js/formular.js'></script>
	<script type='text/javascript' src='js/pin.js'></script>
	<script type='text/javascript' src='js/daxes.js'></script>
	
	<script src="https://cdnjs.cloudflare.com/ajax/libs/ocanvas/2.8.9/ocanvas.min.js"></script>
	<script type='text/javascript' src='js/2dcanvas.js'></script>

	<script type='text/javascript' src='js/evolveline.js'></script>
	<script type='text/javascript' src='js/jquery-ui/jquery-ui.min.js'></script>
	<script type='text/javascript' src='js/jquery.ui.touch-punch.min.js'></script>
</body>
</html>