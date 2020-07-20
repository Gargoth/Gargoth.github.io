function updateLetter() {
    letterHandler.innerHTML = letters[currentLetter] + " - " + currentLetter;
}

function next() {
    currentLetter++;
    if (currentLetter >= letters.length) {
        currentLetter = 0
    }
    pic.setAttribute("src", "./pics/pic" + currentLetter +".jpg");
    updateLetter();
    updateButtons();
}

function back() {
    currentLetter--;
    if (currentLetter < 0) {
        currentLetter = letters.length - 1;
    }
    pic.setAttribute("src", "./pics/pic" + currentLetter +".jpg");
    updateLetter();
    updateButtons();
}

function updateButtons() {
    if (currentLetter == 0) {
        backButton.style.display = "none";
    } else if (currentLetter == letters.length - 1) {
        console.log("last item");
        nextButton.innerHTML = '<a href="./closing.html">Continue</a>'
    } else {
        backButton.style.display = "inline-block";
        nextButton.innerHTML = "Next";
    }
}

console.log("functions loaded");

var letters = [
    'ANGELAAAAAAA<br>' + '<br>' + 'It’s been 2 years since nagkakilala tayo. I remember first time natin mag meet nung ISAC tas katabi mo nun si Lei. Naghahanap ako talaga ng classmates nun kasi syempre takot ako since new school tas si cyrus lang kilala ko sa SanVi nun. Akala ko nung nagkakilala tayo na di tayo magiging close kasi yung interest mo is art and musicals. Meanwhile, I like…just plain movies. Totally innocent. Not rated R. Di ko rin talaga alam yung FSOG. Di ko rin talaga fave song ung Heaven by Julia Michaels from the OST. Pero look where we are now. We send so much random things to each other. We have become closer despite having a lot of different interests. I’m so thankful na we have built this friendship and made it stronger as time passed by. I know na magiging mas mahirap na buhay natin kasi we’re going to be in college already (yak kadiri. Di naman tayo mukhang college pa rin.). Don’t worry… Papahirapan kita lalo kasi kukulitin kita always HAHAHHAHAHA.<br>' + '<br>' + '<br>' + 'I remember back in grade 11 nung di ka pa nagpapakita ng pagka-sabog mo, I saw you as this person that perseveres so much and loves doing art. Nakikita ko yung doodles and calligraphy mo and I was like, “B*tch, I could never.” Honestly, big fan. TAPOS THE ART DID NOT STOP THERE. YOU JUST HAD TO GO AND MAKE PINS TOO. YOU ALSO MADE YOUR OWN PROPS FOR TD. Beh, dami mong time. Dorm na lang kaya ako?<br>' + '<br>' + '<br>' + 'And then we started spending more time together kasi we became research groupmates and then we started doing sleepovers sa bahay ni Sam. I was able to get to know the wackier side of Angela Baticulon Napenas (idk how to enye lmao). I met the Angela na loves taking selfies sa unsuspecting phones. The Angela na badass pala sa Just Dance. The Angela na g na g for samgyup. Gurl, you were so wacky, I thought you were coming after my brand. Jk HAHAHAHAHAHA. But you made me think na damn, this is who I should aspire to be.<br>' + '<br>' + '<br>' + 'I’m sorry na I haven’t been the best friend. Also, I’m sorry na I’m not the best research groupmate. I know na I’m still lacking in terms of how much I should pay attention to my friends. I’m sorry din na inuto ka namin ni Anton and Mikki HAHAHAHAHAH. LABYU TALAGA. Funny mo talaga nung nauto ka pero sorry pa rin na inuto ka namin…twice. <br>' + '<br>' + '<br>' + 'Thank you for being a sensible friend na sabog din at the same time. I’m looking forward to making more memories with you. I love you always and take care.<br>',
    'Hi AngelaaaAa! So, medyo di na ako kinakabahan sa pagsulat nito dahil wala naman akong masyadong kagaguhang gagawin dito HAHAHAHAHAAAAA. Maybe? Sana?<br>' + '<br>' + 'I may have the memory of a goldfish, pero di ko malilimutan yung first day of classes nung nakaarrange na tayo by seat number tapos nakatabi ko kita. Napaisip ako sa sarili ko “Aba, may mas maliit pa pala saken???!!” Dejk. Pero medyo nagrerecover pa ako noon from the bullying and stuff at medyo hindi pa ako marunong makipagusap sa ibang mga tao. Hanggang ngayon medyo di pa ako marunong makipagusap sa ibang tao. Luckily I was able to stumble upon an loving, supportive (and sometimes awkward) friend such as you!<br>' + '<br>' + 'Hindi ko alam kung paano madescribe yung nararamdaman ko, pero parang paminsan-minsan nadedetach ako sa sarili ko. Nawawalan ako ng pakielam sa mundo, natatakot akong tumingin sa messages ko, at gusto ko nalang magtago sa bahay. Alangan, hindi ko ito ipapakita sa iba dahil ayoko silang madamay sa nararamdaman ko. Pero sa mga panahon na natatandaan ko kayo, gumagaan ang loob at pakiramdam ko. <br>' + '<br>' + 'Natatandaan mo yung christmas party ng SanVi? <br>' + '<br>' + 'Madalas kapag christmas, yung natatanging bagay lang na nagugustuhan ko is yung christmas break. Nung bininyagan kasi ako medyo malayo sa probinsya kaya wala akong masyadong mga ninong at ninang, kaya kapag oras na ng pasko, nakikita ko nalang yung ibang mga bata pati yung mga kapatid ko nakakakuha ng regalo, pera, pagmamahal, at naiiwan nalang ako sa bahay. Napapaisip ako na isa ba akong nilalang na karapat-dapat talagang bigyan ng pagmamahal?<br>' + '<br>' + 'Pero nung christmas party, ni isang beses ay hindi ko yon napagisipan dahil sa inyo, dahil sayo! Buong gabi natatawa nalang ako kasama niyo, may jingle bells rendition pa nga diba?<br>' + '<br>' + 'Ang dami nating kalokohan ginawa at natutuwa, natatawa at napapangiti ako sa mga beses na natatandaan ko to, at naiisip ko nalang sa sarili ko na baka maging masaya yung buhay kapag kasama ko kayo?<br>' + '<br>' + 'Nagpapasalamat ako talaga na nakasama ko kita sa ashs, dahil sa totoo lang, napasaya mo talaga ako. Nararamdaman ko na may pamilya talaga ako sa inyo.<br>' + '<br>' + 'At hindi lang ako! Namamangha ako dahil napasaya mo rin yung mga tao na nasa paligid mo! Binubuhos mo yung pagmamahal mo sa iba, tignan mo nga ikaw pa nga nagorganize ng suprise! Lakas talaga ng auwra mo beh!<br>' + '<br>' + 'Magaling, mabait, at medyo maganda kang tao at nireremind ko lang kita dahil minsan nakakalimutan mo yon! Magkakajowa rin tayo siz, laban lang!<br>' + '<br>' + 'Alam kong paminsan minsan nagdududa ka sa mga bagay na ginagawa mo, sa pinaglalaban mo, at pati na rin sa sarili mo. Nakakakaba gumawa ng mga desisyon na alam mong magiging dulot ng kinabukasan mo. Nakakapagod at nakakastress minsan mabuhay, no?<br>' + '<br>' + 'Pero ok lang yon. Ok lang yon dahil nandito kami para sayo. Ok lang yon dahil kahit nakakatakot ang buhay, college, future and whatnot, susuportahan at sasamahan ka namin. Ok lang yon dahil alam kong malakas ka, mabuti kang tao at alam kong maliwanag yung kinabukasan mo. Kasingliwanag ng ulo ni Sir Cheo. Very bright. WAY too bright... charoott<br>' + '<br>' + 'Show them that great things really do sometimes come in small packages.<br>' + '<br>' + 'You may be a small person, pero malaking blessing ka sa amin. Mahal ka namin at huwag na huwag mo yung kakalimutan! HAPPY 19TH BIRTHDAY ATE ANGELAAAAAA!!!!!<br>' + '<br>' + '(Nagtedtalk na ako ng magulo soryy talaga huhuhu ;-;)<br>' + '<br>' + '<br>',
    'Time check: 6:07 pm, 19 July 2020.<br>' + 'Context: mga one hour ago mula nung paliguan mo mga aso niyo HAHA<br>' + '<br>' + 'Angela Napeñas<br>' + 'Somewhere in Calamba, Laguna 4027<br>' + '<br>' + 'Greetings!<br>' + '<br>' + '<br>' + 'I am Harvey Felipe, an incoming freshman student, and I am writing to you today to extend my congratulations on reaching the milestone of your 19th birth anniversary. Truly an event that calls for a celebration, such as providing food and refreshments to your friends free of charge. I hope this email finds you well, and thank you for your time!<br>' + '<br>' + 'Medyo nagka-start na ako sa letter kanina sa messenger yata haha. Pero ayun naman siguro yung pinaka-important na part kaya okay lang. But before all that: HAPPY BIRTHDAY, ANGELA!! 🎉🎉<br>' + '<br>' + 'For the record, hindi to palanca, kasi egh HAHA. Habang nagpre-prepare kami para dito, naglook-back ako sa lahat ng shared pics natin mula nung una tayong magkakilala, so last year HAHA. Nagulat ako na one year pa lang tayo friends (and hindi pa nga ganun ka-close nung una), pero ang dami nang naipon na pictures haha. Naa-appreciate ko talaga, kung alam mo lang. Ang special sa pakiramdam nung na-realize ko yung dami HAHA, kasi parang naging basis ko na yung mga details na ganun sa wholeness ng friendship. Yung pag-trust mo sa pagsend ng pics (at ang pagreply ko ng madilim na pics HAHA).<br>' + '<br>' + 'Pagkatapos ng senior high, ngayon lang bumalik sakin yung mga pagpunta natin sa ebais, yung Christmas mass sa Gesu, yung mga kalokohan sa meetings sa SINAG HAHA. Pati yung mga stories gaya ng bet mo kay Jose na di ka iinom ng alak habang senior high ka. HAHA ACTUALLY SHARE KO NA RIN, nung debut ni Trisha, naalala ko yun kaya nakisama na rin ako. So moral of the story naging role model ka YIEEEE.<br>' + '<br>' + 'Nakita ko rin ulit yung mga artworks na ginawa mo. Yung pins na grabe nakakagalit hmp, professionally made na yun seryoso haha, yung pin, yung packaging, lahat. Tapos yung mga doodles mo lang, pati yung mga animals dinagdag nga namin sa design ng website HAHA. And wag na natin isama yung chem poster ng atomic timeline kasi maiiyak na ako penge creativity :”)<br>' + '<br>' + 'Hindi ko talaga maalala kung paano tayo naging close, pero grateful na grateful talaga ako na ngayon nagsusulat ako ng letter para sa birthday mo HAHA. Salamat sa lahat ng memories, lahat ng gala, lahat ng pag-tolerate sa rants, lahat ng random kwentos. And even though hindi ako maka-reply nang maayos since quarantine (i am sorry ;-;), palagi mong tatandaan na I’ll always do my best to be there for you kapag kailangan mo ng medyo gumagana, pero unadvisable na advice and support sa life (kapag may stocks na tayo ganun WAHAHA). Tapos lilibre mo ko Big Bad Wolf gamit yung earnings syempre ;).<br>' + '<br>' + 'Thank you for everything, Angela! I hope you have an amazing birthday, and God bless always.<br>' + '<br>' + '<br>' + '<br>' + '<br>' + 'Sincerely,<br>' + 'Harvey D. Felipe<br>' + '<br>' + '<br>',
    'Angela BaticULOGNE napenyuss<br>' + '<br>' + 'There are a lot of things that come to mind when I say that name. Some days I look back to that first message you ever sent me about the precalc homework. Other days I remember that time where I talked to you right before Julius Caesar in front of the Mother Mary statue. Most days I just look back to the crazy beautiful insane moments of fun, sweaters, cRUshES (ugh men suck), jess&pats, button pins, and sitting on your table (or even sitting on YOU sksksksk). And of course, who could forget the ICONIQUE moment where we turned SanVi into a musical that one recess screaming the lyrics of Satisfied at each other at the top of our lungs. But most important of all, I’d always think to myself how different I’d be if I never met Angela Napeñas. <br>' + '<br>' + 'I don’t think I’d like BonChon half as much if we didn’t go there all the time. I don’t think I would’ve been pushed to join Sibol if I didn’t see you pouring your absolute heart out into BTTA the year before. I think I’d have been an even worse groupmate in SHS if you never tried to set me straight. I look into a world where I wasn’t your friend or we never had any of these moments together and honestly I see a worse version of myself. And I can never thank you enough for the light you’ve brought into my life Angela. You’ve really changed me in so many ways, big and small. Not just me but so many of the people you’ve become friends with here in the ASHS. And thats a fockin superpower :><br>' + '<br>' + 'You told me in your birthday message to me that you feel like we met each other at the right place and at the right time. And I couldn’t agree more :> I’ve learned so many things from being with you that came when I really needed to learn them. Like UGH Jesus & the universe rlly have their ways. I’ve made a lot of mistakes and for those, you know I’m really really fucking sorry :< but each time I slip up you always stick by me and see it through to help make me a better person :> And that’s the best thing I could ever ask for in a friendship. Thank you for letting me grow with you through these past 2 years :>><br>' + '<br>' + 'COLLEGE IS REALLY FRIKIN SCARY :<< I know both of us are in a really uncertain place but I want you to know that I couldn’t be happier to have you and CJ here with me as we go on this journey together. I hope you know you’ll have me all the way and though our courses may all be different you best bet I will be devoting time to you guys :>. I’m ready for ALL those BonChon days and Samgyups and all the new kainans and places we can explore. And wherever the wind takes us, just know I’ll always be here for you in any way I can :>><br>' + '<br>' + '<br>' + 'Thank you for everything luv. Thank you for all the hugs, the laughs, the tears, the button pins, the late nights, the pictures u take on my phone, the songs, the screams, the Pu$$Y moments, all of it. And thank you for being someone I can call a friend and mean it :>> And I hope you’re ready for me to stick a round a lil while. Or maybe forever :>><br>' + '<br>' + 'Luv u old bitch<br>' + 'A lesbian<br>' + '<br>' + '<br>',
    "Dear Angela it is eleven twenty six<br>" + "Take out seven from the mix<br>" + "And you get eleven nineteen<br>" + "The eighth prime number is nineteen<br>" + "Potassium is nineteen<br>" + "Covid is nineteen<br>" + "Lil pump is nineteen<br>" + "You are not nineteen<br>" + "As of writing this anyway<br>" + "But you will be on Monday<br>" + "So happy birthday<br>" + "<br>" + "Yo tbh I wrote the thing on top thinking it was going to be read by a google voice thing but apparently I misinterpreted the higher-ups. I am a bad employee sorry. But i guess you can enjoy the sick rhymes.<br>" + "<br>" + "Speaking of rhymes, you were the one soul I could talk to about the 21st century rhyme depression. I found solace in the fact I was not alone in a world full of dissimilar-sounding syllables. Angela, you were an intellectual who understood the the forgotten values essential to the building of a new utopia. There is always time for a good rhyme.<br>" + "<br>" + "And yet, you were so much more than a rhyme in my and many other lives. (Though a good rhyme is a compliment in it of itself) No, you were a song, complete with rhyming lyrics, a sweet melody, and dynamic contours comparable to the passionate, ever-piercing gaze of the Mona Lisa, or the timeless resilence of the Great Pyramids themselves. Yeah, you have it all, musical, scientific and artistic ability. Not to mention, your drive to succeed and love for humanity. But of course, you already knew that.<br>" + "<br>" + "I admire how you always put yourself out there with your acads and extra currics, even with all the stress it brings you. Though they may not all be perfect, I can say that you've always made great outputs. Iba ka talaga boss.<br>" + "<br>" + "I think I've already said this in your palanca but I'll say it again cus u deserve that much. Thank you for being a great friend who was funny, comforting, strong and most importantly sleepless whenever we were together. You were a great part of my 2 years in SHS.<br>" + "<br>" + "I only want you to succeed in life. Go face the new chapter called college fearlessly like David did Goliath. Yes, that was a short joke HHAHHAHAH. Hey, you made it this far, what's another 4 years? Anyway, happy birthday, stay safe and may the Lawd bless ya soul! Hopefully, we have a get-together irl soon hehe.<br>" + "<br>" + "Sincerely,<br>" + "The hottest Hoe you know<br>" + "<br>" + "<br>" ,
    "Table: exists <br>" + "Angela subconsciously: I should definitely sit on that owo <br>" + "<br>" + "This is just one of the many smol, adorable habits i noticed that u had during our two years together in senior high school. <br>" + "<br>" + "It’s been 2 years since I sat beside someone who was almost as smol as I was amidst all the tol people in the class. Two years since we first had lunch at bon chon with the others. Two whole years. And as cheesy as it sounds, it feels like I’ve known you for so much longer than that. Cuz you know It’s not everyday you meet someone you vibe with agad HAHAHA Someone who also happens to love button pins and stationery and ethereal asian men <3 <br>" + "<br>" + "Nothing I do or write will ever be able to fully express the love and thankfulness I feel towards you. If I had a platonic soulmate it would most probably be you :(( <br>" + "<br>" + "From crying over recs, to cram studying for that big calc exam at ebais, you were part of some of  the most memorable moments in my time at the ashs. <br>" + "<br>" + "Those two years of transitioning were really rough for me mentally and emotionally, and I’m 100% that without you, I would have pushed through with my plan to leave in the middle of the school year. I’m so glad I didn’t. Cus I was able to spend another full year with you and the others <3 <br>" + "<br>" + "Thank you, for also trusting me enough to text me at 12:00AM just to talk about whatever’s on your mind. It’s in times like those where I most appreciate my wack sleep schedule HEHEHEHE. <br>" + "<br>" + "Thank you for teaching me to see the best in people, even if all I see is the bad sometimes. Thank you for showing me that it’s okay to take a break and that my self worth isn’t grounded in wot I can do. Thank you for showing me and reassuring me  that I’m worthy of love in the times I feel worthless. Thank you for inspiring me and showing me that truly, even the smolest of hoomans can make a great impact <3 <br>" + "<br>" + "Cuz the impact that you’ve made in my life is much too big to comprehend. <br>" + "<br>" + "Even though we’ll be separated in college, know that I will do everything in my human capability to call you or text you if you need me! :))  <br>" + "<br>" + "I love you sosososososoososososososoosos mucccccccccchhhhhhhh!!! :(((((((( from Common Room to Los Banos and beyond <3 here’s too more years of friendship ghorlie <3 <br>" + "<br>" + "I’m so so excited to see where the Lord is going to lead you as we enter into this new period in our lives! Be it in Ateneo, UP, kahit san man yan, I will always, always be here to listen to your rants, spill tea, and make art together hehehe! <br>" + "<br>" + "T00dle3s, <br>" + "<br>" + "Mimi ( BTHC FINALLY DECIDED ON A NICKNAME FOR COLLEGE HAHAHA) <br>" + "<br>" + "PS. <br>" + "Feel free to come over sa bahay even if I’m not there :)) Mommy, Biboy, and the ates will always be there to welcome you :)) <br>" + "<br>" + "P.P.S<br>" + "TAPOS i’LL BE SENDIN UR PALANCA SOON HEHEHE <br>" + "<br>" + "<br>",
    "hello angeluh 🥺💗<br>" + "<br>" + "today, you turn one year older, one year wiser, one ye ar more creative, one year more hardworking, one year more beautiful. as if that’s still possible! but you do! you keep getting better and better each day.<br>" + "<br>" + "the blessing of having you as my class number-mate is something i’ve neglected. i now know i took that for granted because you are an awesome, amazing, blessing of a human in every way. i’m glad, despite all that, we still ended up good friends. <br>" + "<br>" + "you are absolutely a ray of sunshine. everything you do is just amazing, and everyone just stands in the sidelines in awe. your work ethic, talent, beauty are all just so admirable. i hope you know we all love you so dearly.<br>" + "<br>" + "here’s to seeing more amazing stuff from you and awesome memories, LOVE U ANGELA HAPPY BIRTHDAY<br>" + "<br>",
    "MISS ANGELA NAPEÑAS!<br>" + "<br>" + "Happy, happy birthday bb gorl!!! 🥺 This litol gorl  is now 19 years old!!! BIG power from such a smol bean like you! 🤩🤩🤩<br>" + "<br>" + "As one of your first friends in ASHS, I am so glad and proud to see your growth and achievements in literally all aspects of school life and whatnot. Socializing? Orgs? STEM? The dorm life? You conquered them all! I still remember how shy we were in SanVi during the first few days, sticking together and having lunch with some other new friends. We met a lot of fellow scholars who made us feel welcome despite the new environment in a new school. You were such a great TD partner, which really motivated me and had me going through every session despite the tiredness we experience. Even in the latter part of Grade 11, when we both discovered new circles of friends, you and I were never truly apart. I was given the privilege to witness every step you took in this new school and be a proud friend cheering you on from the sidelines. <br>" + "<br>" + "Being your friend has made me a better person, one way or another. Even though you’re not aware of it, you taught me how to be more humble and grateful of the little things life has blessed me with. You taught me to be more courageous and seize the opportunities thrown at me, without minding the fear of judgement. You showed me that I can be more independent and responsible of myself. Truly, sky’s the limit for someone like you, and I am so grateful that you influence others to be the same. <br>" + "<br>" + "Angela, I want you to know that you are such a precious human being that is a blessing to me and to everyone you’ve met. Do not be fooled by other people who think otherwise. I know and I’m sure that every single person you’ve come across has something to thank you for, big or small. That is how much impact you’ve made us feel. <br>" + "<br>" + "Although we weren’t really able to bond much during Grade 12, please do know that I was and I still am supporting you from afar. The friendship we’ve formed in Grade 11 is still the same as what we have now. Yes, we do not talk as much as we did back then, and we may have grown close to different people, but please know that I never felt any different for you. You are still my OG best friend, and I know that you and I will continue to be there for each other. <br>" + "<br>" + "Thanks again for everything, Angela! You really live up to your name—an angel. I miss you so much, and please promise me that we’ll do a lot of catching up once all this mess in 2020 is over hehe. Please enjoy your birthday in quarantine! We’ll be celebrating with you in spirit ✨ I love you so much ♥️<br>" + "<br>",
    "An Acrostic Poem for Miss Angela Napeñas: <br>" + "<br>" + "Among the haze in my mind that are those two years<br>" + "<br>" + "Nothing else shines as bright as this girl whose smile reaches her ears<br>" + "<br>" + "Given that even though she barely reaches five feet<br>" + "<br>" + "Everyone could see that the love she gives runs miles deep<br>" + "<br>" + "Love and care were the two things she surrounded us with<br>" + "<br>" + "And I could only hope that there was more I can give<br>" + "<br>" + "<br>" + "<br>" + "Not only has she been a fresh breath of air when the walls felt like closing in<br>" + "<br>" + "Astounded and amazed were also the state she often left us in<br>" + "<br>" + "Pulling all the stops in every aspect of her life<br>" + "<br>" + "Everything from acads to caring about her friends to even stepping out of her comfort zone, more than once or twice<br>" + "<br>" + "No words I can say can ever encompass the force that is brave, virtuous woman <br>" + "<br>" + "Angela Napeñas, the truest friend anyone could ever hope to have and , well, the cutest little bun 👉👈<br>" + "<br>" + "Stay amazing. Stay kind. Stay being the you that touches so many people’s lives and never fails to see the best in them. <br>" + "Show the world what else you can do. <br>" + "<br>" + "We’ll be right here beside you. <br>" + "<br>" + "——<br>" + "<br>" + "HAPPY 19TH BIRTHDAY GIRL. <br>" + "<br>" + "I cant say thank you enough for everything youve done for me in these 2 years. It may seem insignificant to you, but youve made a huge impact on me. Everyone is so lucky to have you in their life. I admire you so much and the way youre not afraid to dive in headfirst into everything that you do. <br>" + "<br>" + "Ive said before that I can’t wait for the world to see more of you. And that still rings true. <br>" + "<br>" + "I love you girl, happiest birthday. ❤️<br>" + "<br>" + "Daniiiiiii<br>",
    "Ey! What's up, kooky, cookie! You're small and old lol. Thanks for being a person that made a lot of people happy and joy-py. Hope you have a great and blessed day you pogo doggo. I know you like rats. So have 19 rats as pets! Yehey! Happy birthday sayo",
    'Hi Angela! Happy birthday hihihi (Insert I hope you enjoyed your day and more birthdays to come message awshshsa) You'+"'"+'re 19 now awwww ❤. I love you, and I miss you, and I hope we get to see each other soon.<br>' + '<br>' + 'Fun Fact: Did you know that I like your dumps a lot? CHoz. Please chismis with me the ongoings of your life, what you think are dramatic nonsensical musings, and your random thoughts. Also don'+"'"+'t forget the memes and selfies. I want you to know that you got a friend (in me? Choz) that you could rely on, be honest to, and feel accepted. Let us conquer the big sadt energy from our personal issues together hahaha. I hope your good days very much outnumber your bad days. But if minsan talaga bullshit ang buhay, let us refer to a random quote I saw on fb: "Don'+"'"+'t calm the storm. Calm yourself and let the storm pass," Imn love you. Imn miss you. Imn cryy hnggg. Happy birthday!!<br>',
    "Heyy it's your favorite person in the ASHS here! So yeah, lots of stuff going on, I hope you're enjoying your birthday as well as what we've prepared for you HUEHUEHUE! (especially the website i worked hard on it, buti na lang tumulong si harvey goddamn im so proud of that website. especially the whole 'pink' aesthetic grrrr and the pixel art fbasndjkdfhjkd i hope you like slime-chan as much as i do HAHAHDJAHSKJHSJS it been worked on for at least 3 days)<br>" + "<br>" + "HAAAPPYYYYY BIIIRTTHHHDAYYYY SA IYOO SEEEENGGBOSSSSS! ATEEE ANGELAAA!<br>" + "<br>" + "You've always been someone who kept me coming back to school, it just do be like that you know? I mean ofc, I really had no choice but to go back to school, that's just how it works, but i have spent A LOT of my recess and lunch times going to Walpole (and getting mildly disappointed because you are a busy hamster). Those after school kwentuhans at the food place near your dorms were always something I looked forward to even when they are unplanned, it's usually just a feeling na 'uy mukhang kakain ulit kami ni angela ah' ya know? I ain't sure if it's just me who gets that feeling HAHAHAHA.<br>" + "<br>" + "Wala ako masyadong kausap talaga dito sa condo so I think and look back on the days when di ako nauubusan ng kausap HAHAHAHA, and madalas ko talaga naaalala yung walang katapusang inside jokes natin, the heavy stuff we once worried so much about, etc (usually ginagamit ko 'etc' kapag wala na akong maisip na ibang example pero sadyang marami lang talaga dito HAHAHAHAH). Yea so what I wanted to say in this paragraph is that the time I spent with you was just really fun even if it was just two short years. Time is wack ya know, it's so fast when you're having fun or when you're looking back on experiences from the future, parang isang 'WOAH PARE' lang tapos na agad Ateneo life natin woah pare.<br>" + "<br>" + "So yeaaa, IT EEZ WHAT IT EEZ, you do be old sometimes. Relatively, you are an ancient one. Right now you can finally look down on us, standing atop your pedestal of old age, seemingly one or more units higher than what the rest of us have. HAPPY BIRTHDAY ULIT HOPE WE STILL MEET UP A LOT IN UPD (ofc after quarantine na HEKHEKHEKHEK)!<br>"
]

var images = [] // src for small pics

console.log("letters loaded");

var letterHandler = document.getElementsByClassName("letter-handler")[0];
var backButton = document.getElementsByClassName("back-button")[0];
var nextButton = document.getElementsByClassName("next-button")[0];
var pic = document.getElementsByClassName("idPicture")[0];
var currentLetter = 0;

console.log("vars loaded")

updateLetter();
updateButtons();

console.log("elements updated");