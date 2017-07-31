<!DOCTYPE html>
<html lang="de">

<head>
	<title>WELCHE ZUKUNFT - PROTO</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
	<link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">
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
</head>
<?php require './nl.php';?>
<body>
	<script type='text/javascript' src='js/spinner.js'></script>
	<div id="topmenu" class="foreground">
		<input class="burger-check" id="burger-check" type="checkbox">
		<label for="burger-check" class="burger">⇳</label>
		<label class="left" for="burger-check" >WHICH FUTURE?!</label>
		<label class="center">16. September 2017 at Deutsches Theater Berlin</label>
		<label class="right"><a href="#anmeldung" class="undeco">Register now</a></label>
		<nav id="navigation1" class="navigation">
		<ul>
			<li><a href="#container_section" onclick="setstatus(true);reset_ws();">Start</a></li>
			<li><a href="#info" onclick="setstatus(false);">The Project</a></li>
			<li class="li-box"><span class="menu">The Laboratory</span>
				<ul>
					<li><a href="#labor" onclick="setstatus(false);">Laboratory</a>
					<li><a href="#workshops" onclick="setstatus(false);">Workshops</a>
					<li><a href="#plenum" onclick="setstatus(false);">Plenary</a>
				</ul>
			</li>
			<li><a href="#anmeldung" class="pseudo anmeldung" onclick="setstatus(false);">Registration</a></li>
			<li><a href="#team" onclick="setstatus(false);">Team & Partner</a></li>
			<li><a href="#kontakt" onclick="setstatus(false);">Contact</a></li>
			<li><a href="evolveline.php">Deutsch</a></li>
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
			<h1>WHICH FUTURE?!</h1>
			<p class="italic">Helicopters hover over the kurhaus in Heiligendamm, Germany. Police boats are patrolling the baltic shores, black headed gulls huddle on the narrow beach. Inside, in the hall of the Grandhotel, the heads of state of the G 12 group have gathered. It is Feb. 9th 2028 and this is the first gathering since the global financial meltdown of 2026. The host, chancellor von der Leyen steps up to the microphone to welcome the guests. Her speech is short, informal and ends on an urgent plea. </p>
			<p class="italic">„This is the last chance to save our democracy. The people of the world have lost their faith in us, in the political class. We, the governments of the industrialised nations, have failed. We have done too little, too late. Now we must act, and we must act now, without any further delay.“ </p>
			<p class="italic">The heads of state gathered at the baltic shore will not act. They will, however, install an investigative committee. While outside in the cities barricades burn and the unemployed are looting the high streets, an international panel meets in the Villa Perle to investigate the causes for the crash of the global economy, which began 2026 and threw the world in a deep depression with no end in sight.  </p>
			<p>Admittedly: the future might look completely different. It might be bright. The crisis will be averted. The global economy recovers. HBO commissions the 17th season of Games of Thrones. The Berlin airport opens. We do not know.  </p>
			<p>But: if we knew - if we were absolutely certain the party would be over in 2026 - that a bank or an algorithm or a nation would crash the global economy… What would we do? Here and now - what would we do? </p>
			<p>„Which Future?!“ is an interdisciplinary, participatory research and theatre project, dedicated to finding answers to these questions: What can we do to avert the next financial crisis, which would finally knock us off our feet for good. </p>
		<h2>Course of events</h2>
		<p>„Which Future?!“ is a research and theatre project, an event-cycle running over the course of two years. Together with scientists the audience we will be invited to explore the correlation of knowledge, prediction and design. Somewhere between agora, science fiction, math-based modeling and coincidence we can pinpoint the story of the future. Do we at least need an idea of what the future brings, if we want to have some influnce? </p>
		<p>The goal is to instigate a debate on our future, to leave the gridlock behind, find an exit from the permanent presence. Because unless we take action, we will continue our existence as history’s crashtest-dummies, continuously driving straight into the same wall at full speed. </p>
		<p>Three <a href="#workshopthemen" onclick="setstatus(false);">workshops</a> will be conducted in english. Simultaneous translation will be offered for the bilingual plenaries.  </p>
		<p>The project structure is based on four events: </p>
		<h2>Laboratory </h2>
		<p>The Laboratory on Sept. 16th 2017 at Deutsches Theatre Berlin is the kickoff for the two-year event cycle. Based on studies, research projects, prognosis and scenario planning with experts we will be creating a narrative for the next 10 years. The full day of collaborative writing in workshops and plenaries at the Deutsches Theater in Berlin.  </p>
		<p><a href="#labor" onclick="setstatus(false);">>> more about the Lab</a></p>
		<h2>Symposium </h2>
		<p>In March 2018 the Symposium together with Stiftung Humboldt Forum im Berliner Schloss continues and substantiates the work that has begun in the laboratory. Scientists from various disciplines give lectures, talks and debate the issues surrounding the narrative of our future. </p>
		<h2>Stage play</h2>
		<p>The results from the laboratory and the symposium will be the building blocks for a stage play, which will be performed in September 2018 at Deutsches Theater Berlin. It will be staged as an investigational hearing, where the question of accountability for the events leading up to the crisis of 2026 will be raised. How did certain decisions come about? Who could have averted the crisis? Experts, actors, lawmakers and politicians will gather for the hearing. There will be no vote on guilt, no judgement or punishment suggested. It will be an exploration into action and consequence. </p>
		<h2>Conclusion </h2>
		<p>How to move on from here?! Which future… is it going to be?! The fourth and last event will be a conference in autumn 2019, together with the Stiftung Humboldt Forum im Berliner Schloss. We will attempt to draw conclusions from two years of collaborative exploration. We will try to develop actual concepts for a - dare we say it? - better future. What could be the political and social strongholds that would safeguard us? How could an economic system operate that serves the people, rather than forcing people under its doctrine? Where financial assets are not only utilised to create profit but also applied where they are needed? <br>
		Similar to the laboratory and the symposium collaborative  and interdisciplinary processes are as important as the content that is being negotiated.<p>
		<p class=italic>„Which Future?!“ is a coproduction of Deutsches Theater Berlin with the Stiftung Humboldt Forum im Berliner Schloss, funded by the German Federal Government Commissioner for Culture and the Media according to a vote of the German parliament. </p>
			<div class=logos>
			<a href="https://www.deutschestheater.de" target="_blank"><img src="image0.png" alt="logo"></a>
			<a href="http://humboldtforum.com/de-DE/" target="_blank"><img src="image2.png" alt="logo"></a>
			<a href="https://www.bundesregierung.de/Webs/Breg/DE/Bundesregierung/BeauftragtefuerKulturundMedien/beauftragte-fuer-kultur-und-medien.html" target="_blank"><img src="image1.png" alt="logo"></a>
			</div><!-- logos -->
			<p><span class=italic>Media partner:</span></p>
			<div class=logos>
			<a href="http://www.deutschlandfunkkultur.de" target="_blank"><img src="image3.png" alt="logo"></a>
			</div>	
		</div><!-- paper --> </div><!-- flex --> </section><!-- intro -->
		<section id="labor"> <div class="flex"> <div class="paper">
		<h2>LABORATORY</h2>
		<p>The laboratory on September 16th. 2017 at Deutsches Theater Berlin will be the kick off for the two-year project. We are inviting experts and citizens to collaboratively create the story of the next ten years - a plausible scenario of the future. We will negotiate facts, knowledge and models - but also our fears, hopes and wishes. </p>
		<p>The narrative will be based on a fictitious event- a global financial meltdown in the year 2026 followed by a great depression. The possible chain of events leading up to it raise questions of responsibility, measures and counter measures. A space to speculate and ponder the future is created - we will have to decide, if this is the kind of future we want. And if not, we should change the customs settings in the lab that is our life. Sooner, rather than later. </p> 
		<p>The laboratory will be a participatory process, where we generate and share knowledge. 250 people come together in 13 <a href="#workshops" onclick="setstatus(false);">Workshops</a> to create future scenarios and confront the crisis face on. </p>
		<p>Three workshops will be conducted in english. Simultaneous translation will be offered for the bilingual plenaries. </p>
		<p>
		„Which Future?!“-Laboratory <br>
		Saturday, September 16. 2017<br>
		Deutsches Theater Berlin <br>
		From 10am  to 8pm followed by chill out with music and drinks <br>
		<a href="#anmeldung" onclick="setstatus(false);">Register now  </a></p>
		</div><!-- paper --> </div><!-- flex --> </section><!-- ablauf -->
		


		<section id="workshops"> <div class="flex"> <div class="paper">	
			<h2>WORKSHOPS</h2>
			<p>In 13 Workshops 250 participants collaborate on  <a href="#workshopthemen" onclick="setstatus(false);">issues</a> like economy, society, climate and identity. The workshops are open to all, it helps to prepare with the texts provided after registration, no other specialised knowledge is required. Participation is free, but <a href="#anmeldung" onclick="setstatus(false);">registration</a> is mandatory - first come, first serve.</p>
			<p>In two workshop sessions of 90 min. each, participants and experts will develop scenarios for the turn of events over the course of the next 10 years in their particular field of interest. </p>
			<p>The scenarios presented in the <a href="#container_section" onclick="setstatus(true);reset_ws();">workshop descriptions</a> are suggestions, inspirations. Everything is possible: An election victory for Front National causes a banking crisis, the EU dissolves, the rightwing populist party will take over the government, the German Mark returns, the Chinese real estate bubble bursts, a new VR game stops people from going to work, new medication conquers cancer, the oil industry saves the climate and Daniel Libeskind builds the capitol of reunited Korea in the demilitarised zone. </p>
			<p>But if everything is possible - what do we consider most likely, most plausible and what should we prepare for? </p>
			<p>Moderators collect the results and present them in the <a href="#plenum" onclick="setstatus(false);">plenary</a> - where they are being discussed. Every workshop has 20 participants, every voice counts.</p>
			<p>Three workshops will be conducted in English the others in German. </p> 
			<a href="#container_section" onclick="setstatus(true);reset_ws();">>> Workshop overview</a><br>
			<a href="#anmeldung" onclick="setstatus(false);">>> Register</a>
			</div><!-- paper --> </div><!-- flex --> </section><!-- workshops -->
			
			<section id="workshopthemen"> <div class="flex"> <div class="paper">	
			<h2>LABORATORY – Workshops</h2>
			<h3>Economy: Fiscal and other twilights of the Gods </h3>
			<p class="workshop">The social and economic crises’s originate in misguided politics. The catastrophe will catch up with us eventually-come what may. </p>
			<p class="workshop">Expert: Prof. Dr. Rudolph Hickel (Institute for labour and economy)</p>

			<h3>Economy: Patient Zero: Index patient Deutsche Bank?</h3>
			<p class="workshop">Too big to fail - or: How dangerous is Deutsche Bank? The workshop focuses on the role of banks in the system. </p>
			<p class="workshop">Expert: Dieter Hein (fairesearch)</p>
			
			<h3>Economy: Armageddon</h3>
			<p class="workshop">One day,  the German chancellor will be a AfD-member of the (German UKIP)… The workshop explores protectionism, deflation and currency crisis’ as hypothetical triggers for the 2026 meltdown.  </p>
			<p class="workshop">Experts: Prof Dr. Bofinger (University of Würzburg) und Dr. Dirk Ehnts (University of Chemnitz)</p>

			<h3>Economy: The road to hell is paved with good intentions </h3>
			<p class="workshop">What if regulation enhances the processes it was implemented to avert?</p>
			<p class="workshop">Expert: Dr. Armin Haas (Institute for Advanced Sustainability Studies in Potsdam)</p>
			
			<h3>Law and order: Loosing state?!</h3>
			<p class="workshop">State bankruptcy is only the last step along a long and winding path littered with loss. What are the rules amidst chaos and who will be left to enforce them? </p>
			<p class="workshop">Expert: Prof. Dr. Kai von Lewinski (Professor for Public Law, University of Passau)</p>
			
			<h3>Risk management: Keep calm… and your supplies well stocked</h3>
			<p class="workshop">Can I buy an insurance policy against systemic risk? What’s the best way to prepare for disaster?</p>
			<p class="workshop">Expert: Prof. Dr. Volker Deville (former Allianz Insurance Group, now University of Bayreuth)</p>

			<h3>Energy transitions (in english)</h3>
			<p class="workshop">After Oil – but not in the dark ages.</p>
			<p class="workshop">Experts: Dr. Cho Khong and Geraldine Wessing (Royal Dutch Shell, London)</p>
			
			<h3>Weather: A new normal</h3>
			<p class="workshop">What’s the role of the individual in a chaotic system?</p>
			<p class="workshop">Experts: Jascha Lehmann, Marlene Kretschmer, Kai Kornhuber,  Sonja Molnos (Potsdam Institute for Climate Change Impact)</p>

			
			<h3>Geopolitics: Intersections (in english)</h3>
			<p class="workshop">War and peace and who can afford it?</p>
			<p class="workshop">Rodger Baker (Stratfor/Texas (USA))</p>
			
			
			<h3>Labour: Will there be any employers left to fight?</h3>
			<p class="workshop">Holacracy, automation, flexible hours, virtual teams, local production, the cult of less, poverty or self-denial? The workshop explores future trends for the way we work … and play.</p>
			<p class="workshop">Expert: Cornelia Daheim (Future Impacts)</p>
			
			<h3>Identities: Hot Air</h3>
			<p class="workshop">History is not repeated literally, but as farce.</p>
			<p class="workshop">Experte: Martin Burckhardt (author and cultural theorist)</p>
			

			<h3>Elites & democracy: The wheel keeps turning – backwards</h3>
			<p class="workshop">In most countries the elites could not - or did not want to - accept the causes for the last financial crisis.  </p>
			<p class="workshop">Expert: Michael Hartmann (Prof. i.R. für Sociology, TU Darmstadt)</p>

			<h3>Agriculture: Coffee shortage and other inconveniences (in english)</h3>
			<p class="workshop">How far off are we from a time when people go hungry in Europe? </p>
			<p class="workshop">Experts: Dr. Ariella Helfgott, Dr. George Garbutt & Patrick O’Reilly (University of Oxford)</p>
		</div><!-- paper --> </div><!-- flex --> </section><!-- workshopthemen -->
		
		<section id="plenum"> <div class="flex"> <div class="paper">	
			<h2>PLENARY</h2>
			<p>Twice, all participants of the laboratory meet in a plenary. Ulrike Hermann and Adrian Taylor will moderate the panel in charge of bringing the results together on one continuous timeline. Here, we will arrange and rearrange the narrative fragments and thesis’ until one plausible, relevant story is written. History is being made… The scenarios will not always be final or definite, but overall the events need to be in plausible order.  </p>
			<p>While experts and moderators present and debate, the audience can comment, question and veto events while they unfold.  </p>
			<p>The plenaries will be bilingual. English simultaneous translation will be provided. </p>
			<h3>At the critic’s table: Prof. Dr. Joseph Vogl </h3>
			<p class="italic">„The increase of speaking engagements in academic, non formatted areas is an invitation to the production of nonsense“ *</p>
			<p>Joseph Vogl teaches literature, culture and media studies at Humboldt University and is considered one of the most astute analysts of current economical teaching. In his recent books „The ghost of capitalism“ and „The sovereignty effect“ he questions the widely established belief in the invisible hand of the market and the power structures in current financial regimes.  
			 <br><br>
			At the same time Vogl is an avid critic of „rhetorical cavernous bodies“. The production of punchlines, convenient thesis’ or aggravation constantly makes him feel guilty. <br><br>
			Joseph Vogl will be our critical observer for the laboratory and offer his conclusions and recommendations for the next steps at the end of the day.  </p>
			<p class="italic">*Moritz von Uslar in conversation with Joseph Vogl. from: Die ZEIT Nr 20 / 2017 May 14th.
			</p>
			</div><!-- paper --> </div><!-- flex --> </section><!-- plenum -->	
			
			<section id="moderatoren"> <div class="flex"> <div class="paper">
			<h2>Plenary moderators on September 16th</h2>
			<p><b>Ulrike Herrmann</b><br><br>After her apprenticeship as a bank clerk,Ulrike Herrmann attended the Henri Nannen School for Journalism. She then moved on to study economic history and philosophy at the Free University of Berlin. Since 2000, she is the economic correspondent at the taz newspaper, Berlin. Here, she also reported from parliament and headed the editorials. She is a board member of the taz publishers’ cooperative.</p>
			<p><b>Adrian Taylor</b> <br><br>Founder 4Sing Foresight to Strategy for Security and Sustainability in Governance. His role is that of providing content input, process design as well as workshop moderation especially in security and sustainability related issues.  Adrian has previously been a junior officer in the British Army, a lobbyist on EU matters, a scenario planner in a joint venture with Global Business Network and Desk Officer for India at the European Commission, before joining the European School of Governance (eusg) –  He was also President of the European Open Source Intelligence Forum. His education includes: Degree in Philosophy, Politics and Economics Trinity College Oxford, and a License Spéciale (Masters) in European Studies. Adrian was born and raised in England and lived in Gibraltar, Brussels, Atlanta, Zurich, New York, and Munich before settling in Hamburg.</p>
		</div><!-- paper --> </div><!-- flex --> </section><!-- moderatoren -->
		
		<section id="anmeldung"> <div class="flex"> <div class="paper">
			<div class="formular">
			
				<div class="formmenu">
					<p id="signup" class="hl_form">Registration</p>
					<p id="getinfos" class="hl_form">Information</p>
					<p id="getnews" class="hl_form">Newsletter</p>
				</div><!-- formmenu -->
				
				<div id="anmeldeformular">
					<form method="POST" action="/adduser/" id="anmeldung_form">
						<p>Registration deadline: September 9. 2017, 12 pm<br>
						Final confirmation: September 10. - 13. 2017<br>
						Waiting list succession: September 14.-15. 2017<br>
						<br>
						Participation in the laboratory is free of charge. The number of participants is limited to between 10 and 25 places for the respective workshops. We therefor urgently ask you to commit to the day and/or inform us asap should you change your plans. Thank you.</p>
						<br>
						<label >I want to register for the following workshop:</label>
						<select id="wunsch_ws" name="workshopId" size="1">
							<option disabled selected value> Please select </option>
							<option value='14'>Olympic spirit - I don’t care, which workshop I’m allocated to</option>
						</select>
						<input type="hidden" name="list" id="list" value="">
						<div id="sprache">
							<label>I'm speaking the following language(s):</label>
							<select size="1" name="sprache">
								<option value="DEUTSCH">german</option>
								<option value="ENGLISH">english</option>
								<option value="BEIDE">both</option>
							</select>
						</div><!-- sprache -->
						<label >First name </label>
						<input type="text" name="vorname" id="vorname" value="">
						<label >Name</label>
						<input type="text" name="nachname" id="name" value="">
						<label >E-mail</label>
						<input type="text" name="mail" id="mailadresse" value="">
						<label >Confirm e-mail</label>
						<input type="text" name="mailConfirm" value="">
						<label >Contribute a future scenario </label>
						<p>Contribute one possible scenario or event, which that might occur within next 10 years.</p>
						<textarea name="motivation" rows="15"></textarea>
						<br>
						<input name="agb" type="hidden" value="NO">
						<input name="agb" class="agb_check" type="checkbox" value="YES">
						<label class="agbs">I have read and agreed to the general<a href="#agb_area" onclick="showagbs(true);">terms and conditions.</a></label>


						<button type="submit">Register now</button>
						<label id="form_result" class="result" style=""></label>

					</form><!-- anmeldung -->
				</div><!-- anmeldeformular -->
				<div id="anmeldeinfos" class="anmeldeinfos"><br>
					Information on your registration :<br><br>
					1. Fill in your online form: You can register only once. Choose the workshop you wish to attend on Sept. 16th the entire day. Unfortunately, „workshop hopping“ will not be possible. <br><br>
					2. Access is: „first come first serve“. Should the workshop of your choosing already be booked out, you can either choose to join the waiting list or register with a different workshop. Those of you who like to take it in their stride choose: „Olympic spirit - I don’t care, which workshop I’m allocated to“. We will surprise you … <br><br>
					3. You will receive an automatically generated mail with a confirmation request. Only then will you be registered, for either the workshop or the waiting list. However, this mail will not guarantee you a place unless you return to confirm a couple of days before the event. (see 6/7)  <br><br>
					4. After registration, you will be allocated to the workshop you have requested or allocated by us, if you wish. You will receive a personalised confirmation or be informed on your status on the waiting list.  <br><br>
					5. From now on you will be part of the community of your respective workshop and receive reading material and recommendations. This material is only for your personal use and must not be passed on or published. (You will also receive this material, should you be on the waiting list.)<br><br>
					6. On September 9. all participants will be asked to confirm attendance - deadline for this confirmation will be September 13. and mandatory for your participation. <br><br>
					7. Free waiting list positions will be raffled on September 14. and allocated to those on the list. <br><br>
				</div><!-- anmeldeinfos -->
				<div id="newsletter">
				<form method="POST" id="nl_form" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
					<input type="hidden" name="list" id="list" value="newsletter">
					<label >To keep in touch with current events of the project, please register here. Workshop participants receive information automatically.</label>
					<br>
					<label >First name </label>
					<input type="text" name="vorname" value="<?php echo $name_first;?>">
					<label >Name</label>
					<input type="text" name="nachname" value="<?php echo $name_last;?>">
					<label >E-Mailadresse</label>
					<input type="text" name="mail" value="<?php echo $sub_mail;?>">
					<br>
					<input name="agb" type="hidden" value="NO">
					<input name="agb" class="agb_check" type="checkbox" value="YES">
					<label class="agbs">I have read and agreed to the general <a href="#agb_area" onclick="showagbs(true);">terms and conditions.</a></label>
					<button type="submit">Subscribe</button>
					<label id="nl_form_result" class="result" style="<?php echo $result_display;?>"><?php echo $feedback;?></label>
				</form>
				</div>
					<section id="agb_area">
						<div id="agbs" class="agbtext">
						<label ><a href="#anmeldung" onclick="showagbs(false);">close terms and conditions</a></label>
						<p >
						Collection and use of your personal data during workshop registration <br><br>
						The data you provide during the registration process will be stored on the „Which Future?!“ server. Mandatory fields will be: name, e-mail address , your chosen workshop and language (in case you do not specify, which workshop you choose). Writing your own future scenario is voluntary. It will be used as the foundation for the workshop, together with the scenarios provided by each workshop expert. <br> Your data will be treated in confidence and only used for organisational and informational purposes. We will provide information material and programme details to prepare the laboratory. Your data will only be saved as long as it is necessary to organise the laboratory and will be deleted in November 2017 at the latest. By unsubscribing from the workshop, your user data will be deleted six weeks later at the latest. If you want continue to follow updates of the „Which Future?!“ project you are welcome to subscribe to our Newsletter. 
						<br><br>
						Video and sound recording during the laboratory <br><br>
						During the laboratory employees of the Deutsches Theater Berlin will produce sound recordings of the workshops and video recordings of the plenaries. The footage produced here will be edited and published in the context of the project. By attending workshops and plenary, you agree to this publication. 
						<br><br>
						Newsletter<br><br>
						When you subscribe to our mailing list, we will require one valid e-mail address. All other information is voluntary and will only be used to address you personally. We will only post e-mails if you have confirmed your registration with a link you will receive from us. This way we can confirm that only you yourself can register under the provided e-mail address. Your confirmation reply needs to be posted within a week, otherwise your mailing list registration will be deleted automatically from our database. <br> You can unsubscribe from the mailing list via the link at the end of each mail. 
						<br><br>
						Protocols <br><br>
						By default the server of this website records protocol entries of your visits. Those will not be evaluated or utilised in any way.</p>
						</div>
						</section>
			</div>
		</div><!-- paper --> </div><!-- flex --> </section><!-- anmeldung -->

		<section id="team"> <div class="flex"> <div class="paper">
			<h2>TEAM & PARTNER</h2>
			<h3>TEAM</h3>
			<p>Concept and execution: Andres Veiel, Jutta Doberstein, Ulrich Beck, Daniel Hengst, Julia Kaschlinski, Michaela Barth, Luisa Männel</p>
			<h3>PARTNER</h3>
			<p class=italic>„Which Future?!“ is a coproduction of Deutsches Theater Berlin with the Stiftung Humboldt Forum im Berliner Schloss, funded by the German Federal Government Commissioner for Culture and the Media according to a vote of the German parliament. </p>
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

		<section id="kontakt"> <div class="flex"> <div class="paper">
			<h2>CONTACT</h2>
			<p>Deutsches Theater<br>
			Schumannstraße 13 A<br>
			10117 Berlin<br>
			Fon: +49 30 28441-0<br>
			<a href="mailto:service@deutschestheater.de">service@deutschestheater.de</a><br>
			<a href="https://www.deutschestheater.de">www.deutschestheater.de</a><br><br>

			For questions regarding the project, website or registration please contact <a href="mailto:info@deutschestheater.de">info@welchezukunft.org</a></p>
			<p><span class=bold>Contact press:</span><br>
			Katharina Wenzel <br>
			Head of media and communication<br>
			+49 30 28441234<br>
			<a href="mailto:wenzel@deutschestheater.de">wenzel@deutschestheater.de</a><br>
			During theatre holidays, July 19. - August 28.:<br>
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
		Fon : +49 30 28441-0<br>
		service@deutschestheater.de<br>
		www.deutschestheater.de<br><br>

		For questions please contact info@welchezukunft.org<br><br>

		Director<br>
		Ulrich Khuon<br><br>

		Managing director <br>
		Klaus Steppat<br><br>

		VAT ID No according to § 27 a Value added tax act <br>
		VAT.-ID-No:  DE811984292<br><br>

		Person responsible for content per § 6 MDStV<br>
		Communication/Dramaturgy<br><br>


		Disclaimer:<br><br>

		Content of this internet service <br>
		Deutsches Theater Berlin does everything in its power to ensure that its promotion offer is always up to date, correct with respect to content and complete. Nevertheless, the occurrence of errors cannot be completely ruled out.<br>
		Deutsches Theater Berlin does not give any warranty in respect of the timelines, accuracy or completeness of material published unless the errors were made deliberately or by gross negligence. <br>
		This refers to (material or non-material) loss or damage incurred by third parties arising from the use of content obtained from the web site.<br><br>

		Copyright<br>
		The layout of the homepage, graphics and pictures used and the collection of individual contributions are protected by copyright.<br><br>

		External references and links<br>
		The Deutsches Theater Berlin does not have any influence on the design and the contents of external internet pages. Deutsches Theater therefore dissociates itself from all those contents, even if there are links from the pages of the Deutsches Theater Berlin to this external page.<br><br>

		This declaration is valid for all links listed on our website and for the entire contents of the websites to which the banners and links registered with us may lead.<br><br>

		Privacy<br>
		If this internet service offers the possibility of entering personal or business data (e-mail addresses, names, addresses), the input of these data takes place expressly on a voluntary basis. The Deutsches Theater Berlin expressly declares that the information submitted will not be passed on to third parties.<br><br>

		Validity<br>
		This disclaimer is part of the internet service of Deutsches Theater Berlin. Insofar as individual formulations or parts of this text should no longer or no longer fully comply with the current law, the remaining parts shall remain in legal effect.<br><br>

		Concept and technical implementation<br>
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
	<script> var handle_pos = {"x":0, "y":0, "z":0}; var language="eng";</script>
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
	<script type='text/javascript' src='js/form_submit.js'></script>
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
	<script type='text/javascript' src='js/evolveline.js'></script>
	<script type='text/javascript' src='js/jquery-ui/jquery-ui.min.js'></script>
	<script type='text/javascript' src='js/jquery.ui.touch-punch.min.js'></script>
</body>
</html>
