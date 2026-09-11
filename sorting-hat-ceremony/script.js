/* ==========================================================================
   THE HOGWARTS ARCHIVE — engine
   --------------------------------------------------------------------------
   This file has two parts:
     1. QUESTION BANK  — an array of question objects. Add more objects here
        any time; nothing else needs to change. See README.md for the schema.
     2. ENGINE          — mode config, quiz flow, scoring, results, DOM glue.
   ========================================================================== */

/* -------------------------------------------------------------------------
   1. QUESTION BANK
   Fields:
     id         unique string
     cat        category label (shown as a tag + used for the breakdown)
     diff       1 = O.W.L., 2 = N.E.W.T., 3 = Headmaster's Trial
     q          question text
     options    array of 4 answer strings
     answer     index (0-3) of the correct option, BEFORE shuffling
     explain    1-3 sentences of story context / why the answer is correct
     src        "book" | "film" | "both"  — where this detail is drawn from
   ------------------------------------------------------------------------- */
const QUESTIONS = [

  /* ================= O.W.L. — difficulty 1 ================= */
  { id:"o1", cat:"Characters", diff:1,
    q:"What form does Hermione Granger's Patronus take?",
    options:["An otter","A horse","A terrier","A swan"], answer:0,
    explain:"Hermione's Patronus is an otter, first cast successfully in her fifth year during Dumbledore's Army meetings in the Room of Requirement.",
    src:"both" },

  { id:"o2", cat:"Spells & Charms", diff:1,
    q:"Which spell is used to force an opponent to drop whatever they are holding?",
    options:["Protego","Expelliarmus","Stupefy","Expecto Patronum"], answer:1,
    explain:"Expelliarmus is the Disarming Charm. Harry becomes known for relying on it in duels, and it is famously the spell that saves his life against Voldemort in the graveyard and beyond.",
    src:"both" },

  { id:"o3", cat:"Potions", diff:1,
    q:"In Polyjuice Potion, what must be added to make the drinker transform into a specific person?",
    options:["A tear from that person","A piece of that person (such as a hair)","A drop of that person's blood","A photograph of that person"], answer:1,
    explain:"A physical piece of the target — commonly a hair — is stirred into the potion so the drinker temporarily takes on that person's appearance.",
    src:"both" },

  { id:"o4", cat:"Creatures", diff:1,
    q:"What is the name of Hagrid's giant, talking spider?",
    options:["Norbert","Fang","Aragog","Buckbeak"], answer:2,
    explain:"Aragog is the Acromantula Hagrid raised in secret as a student, later living deep in the Forbidden Forest with his own colony.",
    src:"both" },

  { id:"o5", cat:"History & Founders", diff:1,
    q:"Which of the four founders established Gryffindor house?",
    options:["Salazar Slytherin","Godric Gryffindor","Rowena Ravenclaw","Helga Hufflepuff"], answer:1,
    explain:"Godric Gryffindor founded the house that famously prizes courage, and his sword later plays a key role in the series.",
    src:"both" },

  { id:"o6", cat:"Places & Objects", diff:1,
    q:"What is the name of the bank run by goblins in Diagon Alley?",
    options:["Gringotts","Flourish and Blotts","Ollivanders","Eeylops"], answer:0,
    explain:"Gringotts Wizarding Bank, run by goblins, holds the vaults of most wizarding families, including the Potters' and the Lestranges'.",
    src:"both" },

  { id:"o7", cat:"Quidditch", diff:1,
    q:"How many players make up a full Quidditch team?",
    options:["6","7","8","11"], answer:1,
    explain:"A Quidditch team has seven players: three Chasers, two Beaters, one Keeper, and one Seeker.",
    src:"both" },

  { id:"o8", cat:"Wizarding Culture", diff:1,
    q:"What is the name of the wizarding world's most widely read newspaper?",
    options:["The Quibbler","The Daily Prophet","Witch Weekly","The Evening Owl"], answer:1,
    explain:"The Daily Prophet is the standard wizarding newspaper, whose reporting (and misreporting) shapes public opinion throughout the series.",
    src:"both" },

  { id:"o9", cat:"Characters", diff:1,
    q:"Who is revealed to be the 'Half-Blood Prince'?",
    options:["Voldemort","Horace Slughorn","Severus Snape","Albus Dumbledore"], answer:2,
    explain:"Snape's mother, Eileen Prince, gives him the nickname he wrote in his old Potions textbook, which Harry uses in his sixth year.",
    src:"both" },

  { id:"o10", cat:"Spells & Charms", diff:1,
    q:"Which of the three Unforgivable Curses causes excruciating pain without leaving a physical mark?",
    options:["Avada Kedavra","Imperius Curse","Cruciatus Curse","Sectumsempra"], answer:2,
    explain:"The Cruciatus Curse is one of the three Unforgivable Curses, used by Death Eaters (and briefly attempted by Harry) to inflict pure agony.",
    src:"both" },

  { id:"o11", cat:"Potions", diff:1,
    q:"What potion grants the drinker extraordinary luck for a limited time?",
    options:["Amortentia","Felix Felicis","Veritaserum","Draught of Living Death"], answer:1,
    explain:"Felix Felicis, nicknamed 'liquid luck', is won by Harry in Slughorn's class and later used to help secure a crucial memory from him.",
    src:"both" },

  { id:"o12", cat:"Creatures", diff:1,
    q:"What is distinctive about a Boggart's 'true' appearance?",
    options:["It has no true form; it becomes the viewer's worst fear","It always appears as a black dog","It is invisible until struck","It looks like a shadow of the caster"], answer:0,
    explain:"A Boggart has no shape of its own — it transforms into whatever the person facing it fears most, which is why the charm against it is 'Riddikulus'.",
    src:"both" },

  { id:"o13", cat:"Places & Objects", diff:1,
    q:"What is the name of the dense forest bordering the Hogwarts grounds?",
    options:["The Forbidden Forest","Wistman's Wood","The Whomping Wood","Dean Forest"], answer:0,
    explain:"The Forbidden Forest is home to centaurs, Acromantulas, Thestrals, and other creatures, and is explicitly off-limits to students.",
    src:"both" },

  { id:"o14", cat:"Characters", diff:1,
    q:"Who is Harry Potter's godfather?",
    options:["Remus Lupin","Sirius Black","Severus Snape","Alastor Moody"], answer:1,
    explain:"Sirius Black, James Potter's best friend, is Harry's godfather, escaping Azkaban in Harry's third year in part to protect him.",
    src:"both" },

  { id:"o15", cat:"Spells & Charms", diff:1,
    q:"Which levitation charm is one of the first spells taught to first-years, memorably mispronounced by Ron Weasley?",
    options:["Wingardium Leviosa","Locomotor","Alohomora","Mobiliarbus"], answer:0,
    explain:"Wingardium Leviosa is the Levitation Charm, taught by Professor Flitwick, with the swish-and-flick technique Hermione corrects Ron on.",
    src:"both" },

  { id:"o16", cat:"Wizarding Culture", diff:1,
    q:"What is the name of Harry's pet snowy owl?",
    options:["Errol","Pigwidgeon","Hedwig","Trevor"], answer:2,
    explain:"Hedwig is the snowy owl Hagrid buys Harry as an eleventh birthday present, and she serves as his messenger throughout the series.",
    src:"both" },

  { id:"o17", cat:"History & Founders", diff:1,
    q:"Which Hogwarts house is traditionally associated with loyalty and hard work?",
    options:["Ravenclaw","Slytherin","Hufflepuff","Gryffindor"], answer:2,
    explain:"Hufflepuff, founded by Helga Hufflepuff, values hard work, patience, loyalty, and fair play above the traits prized by the other houses.",
    src:"both" },

  { id:"o18", cat:"Quidditch", diff:1,
    q:"What is the name of the small, winged golden ball that ends a Quidditch match when caught?",
    options:["The Quaffle","The Bludger","The Golden Snitch","The Golden Bludger"], answer:2,
    explain:"Catching the Golden Snitch ends the match and earns the Seeker's team 150 points.",
    src:"both" },

  { id:"o19", cat:"Places & Objects", diff:1,
    q:"Which platform at King's Cross Station do students use to board the Hogwarts Express?",
    options:["Platform 9¾","Platform 13","Platform 6½","Platform 10¾"], answer:0,
    explain:"Platform Nine and Three-Quarters is reached by walking through the barrier between platforms nine and ten.",
    src:"both" },

  { id:"o20", cat:"Creatures", diff:1,
    q:"What magical creature does Hagrid illegally hatch from an egg in his first year teaching?",
    options:["A dragon named Norbert","A Hippogriff named Buckbeak","A Thestral","A Basilisk"], answer:0,
    explain:"Hagrid hatches a Norwegian Ridgeback he names Norbert, which Ron's brother Charlie later arranges to have collected and relocated to Romania.",
    src:"both" },

  { id:"o21", cat:"Characters", diff:1,
    q:"What was the original name of Ron Weasley's pet rat, later revealed to be an Animagus in disguise?",
    options:["Scabbers","Trevor","Errol","Pigwidgeon"], answer:0,
    explain:"Scabbers turns out to be Peter Pettigrew, hiding as a rat for twelve years, exposed in Prisoner of Azkaban.",
    src:"both" },

  { id:"o22", cat:"Creatures", diff:1,
    q:"What kind of creature is Fawkes, Dumbledore's companion?",
    options:["A Hippogriff","A phoenix","A Basilisk","A Niffler"], answer:1,
    explain:"Fawkes is a phoenix, a bird that bursts into flame and is reborn from its own ashes, and whose tears have healing powers.",
    src:"both" },

  { id:"o23", cat:"Wizarding Culture", diff:1,
    q:"What tracks each Hogwarts house's standing in the House Cup competition throughout the year?",
    options:["Four hourglasses filled with colored gems","A magical scoreboard in the Great Hall","The prefects' badges","The house ghosts' votes"], answer:0,
    explain:"Four giant hourglasses in the entrance hall hold jewels that appear or vanish as points are awarded or lost, tallying the House Cup race.",
    src:"both" },

  { id:"o24", cat:"Spells & Charms", diff:1,
    q:"Which spell unlocks non-magically sealed doors?",
    options:["Reducto","Alohomora","Finite Incantatem","Colloportus"], answer:1,
    explain:"Alohomora is the Unlocking Charm, used often by Hermione when the trio need to get through a locked door quickly.",
    src:"both" },

  { id:"o25", cat:"Places & Objects", diff:1,
    q:"What magical mirror shows Harry his parents, and the deepest desire of his heart, in his first year?",
    options:["The Foe-Glass","The Mirror of Erised","The Sorting Hat","The Pensieve"], answer:1,
    explain:"The Mirror of Erised shows 'the deepest, most desperate desire of our hearts' — for Harry, that's his family, alive and together.",
    src:"both" },

  { id:"o26", cat:"Characters", diff:1,
    q:"Who is the Head of Gryffindor House and teaches Transfiguration?",
    options:["Pomona Sprout","Filius Flitwick","Minerva McGonagall","Sybill Trelawney"], answer:2,
    explain:"Minerva McGonagall heads Gryffindor and is Hogwarts' formidable Transfiguration teacher (and later Headmistress).",
    src:"both" },

  { id:"o27", cat:"Quidditch", diff:1,
    q:"What position does Harry Potter play on the Gryffindor Quidditch team?",
    options:["Chaser","Keeper","Seeker","Beater"], answer:2,
    explain:"Harry plays Seeker, the position responsible for catching the Golden Snitch — the youngest House player in a century when he joins.",
    src:"both" },

  { id:"o28", cat:"Places & Objects", diff:1,
    q:"On what street in Little Whinging do the Dursleys live?",
    options:["Spinner's End","Privet Drive","Diagon Alley","Wisteria Walk"], answer:1,
    explain:"Number four, Privet Drive is the Dursleys' address, and Harry's home (in name only) for most of his childhood.",
    src:"both" },

  { id:"o29", cat:"Places & Objects", diff:1,
    q:"How does the Sorting Hat decide which house a new student belongs in?",
    options:["It measures their raw magical power","It reads their thoughts and qualities","It asks them ten trivia questions","It is chosen randomly by lottery"], answer:1,
    explain:"The Sorting Hat looks into a student's mind and weighs their qualities and preferences before announcing a house — sometimes, as with Harry, even taking a request into account.",
    src:"both" },

  { id:"o30", cat:"Characters", diff:1,
    q:"What are the names of Draco Malfoy's two large, dim-witted henchmen?",
    options:["Crabbe and Goyle","Nott and Zabini","Flint and Bole","Pucey and Warrington"], answer:0,
    explain:"Vincent Crabbe and Gregory Goyle follow Draco everywhere, more muscle than mind.",
    src:"both" },

  { id:"o31", cat:"Spells & Charms", diff:1,
    q:"What does the spell 'Lumos' do?",
    options:["Extinguishes a wand's light","Lights the tip of a wand","Locks a door","Levitates an object"], answer:1,
    explain:"Lumos lights the wand's tip like a torch; its counter-spell, Nox, puts the light out again.",
    src:"both" },

  { id:"o32", cat:"Wizarding Culture", diff:1,
    q:"What term describes a person with no magical ability, born to non-magical parents?",
    options:["A Squib","A Muggle","A half-blood","A Metamorphmagus"], answer:1,
    explain:"A Muggle is a non-magical person; the term 'Squib' is reserved for someone born to magical parents but lacking magical ability themselves.",
    src:"both" },

  { id:"o33", cat:"Places & Objects", diff:1,
    q:"What hidden shopping street, reached through the Leaky Cauldron, is the main wizarding hub in London?",
    options:["Knockturn Alley","Diagon Alley","Horizont Alley","Charing Cross Row"], answer:1,
    explain:"Diagon Alley holds Gringotts, Ollivanders, Flourish and Blotts, and most of the shops wizarding families rely on.",
    src:"both" },

  { id:"o34", cat:"Creatures", diff:1,
    q:"What kind of magical creature is Buckbeak?",
    options:["A Griffin","A Thestral","A Hippogriff","A Phoenix"], answer:2,
    explain:"Buckbeak is a Hippogriff — part eagle, part horse — first introduced in Hagrid's Care of Magical Creatures class.",
    src:"both" },

  { id:"o35", cat:"Places & Objects", diff:1,
    q:"What does a Remembrall do when its owner has forgotten something?",
    options:["It turns red","It plays a warning sound","It shatters","It whispers the forgotten thing aloud"], answer:0,
    explain:"A Remembrall fills with red smoke to signal you've forgotten something — though famously, it can't tell you what.",
    src:"both" },

  { id:"o36", cat:"Quidditch", diff:1,
    q:"Which Weasley brothers open a joke shop, Weasleys' Wizard Wheezes, in Diagon Alley?",
    options:["Bill and Charlie","Percy and Ron","Fred and George","Fred and Ron"], answer:2,
    explain:"Fred and George Weasley use their Triwizard winnings (given by Harry) to launch their famously successful joke shop.",
    src:"both" },

  { id:"o37", cat:"Spells & Charms", diff:1,
    q:"Which Unforgivable Curse causes instant death?",
    options:["Crucio","Imperio","Avada Kedavra","Sectumsempra"], answer:2,
    explain:"Avada Kedavra, the Killing Curse, is instantly fatal and blocked by no known shield — it's the curse that killed Harry's parents.",
    src:"both" },

  { id:"o38", cat:"Places & Objects", diff:1,
    q:"What is the name of Sirius Black's family home, later used as Order of the Phoenix headquarters?",
    options:["The Burrow","12 Grimmauld Place","Malfoy Manor","Spinner's End"], answer:1,
    explain:"Number twelve, Grimmauld Place — hidden by the Fidelius Charm — is the gloomy Black family townhouse Sirius inherits and later offers to the Order.",
    src:"both" },

  { id:"o39", cat:"Characters", diff:1,
    q:"Who is the Hogwarts groundskeeper and Care of Magical Creatures professor?",
    options:["Argus Filch","Rubeus Hagrid","Remus Lupin","Alastor Moody"], answer:1,
    explain:"Rubeus Hagrid is Hogwarts' gamekeeper, later also its Care of Magical Creatures teacher, and a loyal friend to Harry from the very start.",
    src:"both" },

  { id:"o40", cat:"Creatures", diff:1,
    q:"What species is Aragog, Hagrid's enormous pet from his school days?",
    options:["Basilisk","Acromantula","Manticore","Runespoor"], answer:1,
    explain:"Aragog is an Acromantula — a giant, talking spider — raised secretly by Hagrid before living out his days deep in the Forbidden Forest.",
    src:"both" },

  { id:"o41", cat:"Wizarding Culture", diff:1,
    q:"What is the name of the wizarding prison guarded, for most of the series, by Dementors?",
    options:["Nurmengard","Azkaban","The Ministry Holding Cells","Little Hangleton Vaults"], answer:1,
    explain:"Azkaban, an island fortress, holds the wizarding world's most dangerous criminals — including, for a time, an innocent Sirius Black.",
    src:"both" },

  { id:"o42", cat:"Places & Objects", diff:1,
    q:"What happens when a Howler is opened and not read quickly?",
    options:["It shouts its message at full volume","It explodes harmlessly into confetti","It turns invisible","It repeats forever until destroyed"], answer:0,
    explain:"A Howler bellows its sender's message at top volume — as Ron discovers to his horror when his mother sends one after his flying car incident.",
    src:"both" },

  { id:"o43", cat:"Characters", diff:1,
    q:"What is the name of Neville Longbottom's toad, well known for wandering off?",
    options:["Trevor","Scabbers","Crookshanks","Errol"], answer:0,
    explain:"Trevor the toad goes missing so often that searching for him becomes a running joke throughout Neville's early years at Hogwarts.",
    src:"both" },

  { id:"o44", cat:"Spells & Charms", diff:1,
    q:"Which spell fully immobilizes a target, locking their body rigid ('the full body-bind')?",
    options:["Petrificus Totalus","Stupefy","Impedimenta","Immobulus"], answer:0,
    explain:"Petrificus Totalus is the Full Body-Bind Curse — Hermione uses it on Neville in the trio's first year to stop him getting in their way.",
    src:"both" },

  /* ================= N.E.W.T. — difficulty 2 ================= */
  { id:"n1", cat:"Characters", diff:2,
    q:"What creature provided the core of Harry Potter's original wand?",
    options:["Dragon heartstring","Unicorn tail hair","Phoenix feather","Veela hair"], answer:2,
    explain:"Harry's holly wand contains a phoenix feather — and, significantly, the same phoenix (Fawkes) also gave the feather in Voldemort's wand.",
    src:"both" },

  { id:"n2", cat:"Spells & Charms", diff:2,
    q:"What is the incantation for the curse Snape invented, which Harry uses on Draco Malfoy in the sixth-year bathroom duel?",
    options:["Levicorpus","Sectumsempra","Confringo","Diffindo"], answer:1,
    explain:"Sectumsempra, found scrawled in the Half-Blood Prince's old textbook, slashes the target as if with an invisible sword; only Snape's own counter-spell can close the wounds.",
    src:"both" },

  { id:"n3", cat:"Potions", diff:2,
    q:"What is distinctive about the smell of Amortentia to each person who encounters it?",
    options:["It smells the same to everyone","It has no smell at all","It smells different to each person, based on what attracts them","It smells like the drinker's own blood"], answer:2,
    explain:"Amortentia, the most powerful love potion, smells different to everyone who catches its scent, reflecting what that person finds most attractive.",
    src:"both" },

  { id:"n4", cat:"Creatures", diff:2,
    q:"What is the title of the textbook, written by Newt Scamander, that lists magical creatures for Care of Magical Creatures students?",
    options:["The Monster Book of Monsters","Fantastic Beasts and Where to Find Them","Magical Theory","The Dark Forces: A Guide to Self-Protection"], answer:1,
    explain:"Fantastic Beasts and Where to Find Them is Newt Scamander's standard reference work, required reading at Hogwarts.",
    src:"both" },

  { id:"n5", cat:"History & Founders", diff:2,
    q:"The 'Bloody Baron' is the resident ghost of which Hogwarts house?",
    options:["Gryffindor","Hufflepuff","Ravenclaw","Slytherin"], answer:3,
    explain:"The Bloody Baron haunts Slytherin house and is the only figure said to be able to control Peeves the Poltergeist.",
    src:"both" },

  { id:"n6", cat:"Places & Objects", diff:2,
    q:"What is the name of the Weasley family's home?",
    options:["The Burrow","Shell Cottage","Grimmauld Place","Ottery St Catchpole Hall"], answer:0,
    explain:"The Burrow is the Weasleys' ramshackle, much-loved house near Ottery St Catchpole, held together as much by magic as by carpentry.",
    src:"both" },

  { id:"n7", cat:"Quidditch", diff:2,
    q:"What position does Viktor Krum play for both Durmstrang and Bulgaria's national team?",
    options:["Chaser","Keeper","Seeker","Beater"], answer:2,
    explain:"Krum is an internationally renowned Seeker, famous enough that his presence at Hogwarts during the Triwizard Tournament causes a stir.",
    src:"both" },

  { id:"n8", cat:"Wizarding Culture", diff:2,
    q:"What must a witch or wizard legally do after successfully learning to become an Animagus?",
    options:["Take a NEWT examination in Transfiguration","Register with the Ministry of Magic","Notify the Muggle Prime Minister","Nothing; no registration is required"], answer:1,
    explain:"Animagi are required to register with the Ministry; Rita Skeeter's unregistered beetle form is a crime that Hermione later uses as leverage against her.",
    src:"book" },

  { id:"n9", cat:"Characters", diff:2,
    q:"What was the name of Severus Snape's mother, from whom his 'Prince' nickname derives?",
    options:["Merope Gaunt","Eileen Prince","Andromeda Black","Bathilda Bagshot"], answer:1,
    explain:"Eileen Prince was a witch from the Prince family who married the Muggle Tobias Snape; their son took her maiden name for his self-styled title.",
    src:"book" },

  { id:"n10", cat:"Spells & Charms", diff:2,
    q:"What is required to successfully cast a corporeal Patronus?",
    options:["A single strong, happy memory","Intense anger at the target","A wand made of holly","A lock of hair from a loved one"], answer:0,
    explain:"The Patronus Charm demands total concentration on one genuinely happy memory; without it, the charm fails or produces only a weak, incorporeal shield.",
    src:"both" },

  { id:"n11", cat:"Potions", diff:2,
    q:"According to the recipe referenced in the books, how long must lacewing flies stew before Polyjuice Potion is ready?",
    options:["7 days","14 days","21 days","30 days"], answer:2,
    explain:"Hermione notes the lacewing flies need three weeks to stew, which is why the trio's second-year plan to interrogate Malfoy takes so long to prepare.",
    src:"book" },

  { id:"n12", cat:"Creatures", diff:2,
    q:"What must a wizard do before approaching a Hippogriff, according to Hagrid's first lesson?",
    options:["Offer it food", "Bow, and wait for it to bow back", "Avoid eye contact entirely", "Speak to it only in Mermish"], answer:1,
    explain:"Hippogriffs are proud creatures; you must bow and wait for the Hippogriff to bow back before it's safe to approach, as Buckbeak demonstrates with Harry.",
    src:"both" },

  { id:"n13", cat:"History & Founders", diff:2,
    q:"Which object belonging to Rowena Ravenclaw was turned into one of Voldemort's Horcruxes?",
    options:["Her locket","Her diadem","Her wand","Her cup"], answer:1,
    explain:"Ravenclaw's lost diadem, said to grant wisdom to its wearer, is hidden in the Room of Requirement and turned into a Horcrux.",
    src:"both" },

  { id:"n14", cat:"Places & Objects", diff:2,
    q:"What is the name of the rough, less reputable pub in Hogsmeade, distinct from the Three Broomsticks?",
    options:["Madam Puddifoot's","The Leaky Cauldron","The Hog's Head","The Hanged Man"], answer:2,
    explain:"The Hog's Head, run by Aberforth Dumbledore, is a grimier alternative to the Three Broomsticks and hosts the first meeting of Dumbledore's Army.",
    src:"both" },

  { id:"n15", cat:"Quidditch", diff:2,
    q:"In the 1994 Quidditch World Cup Final, which team won the match even though the opposing Seeker caught the Snitch?",
    options:["Bulgaria","Ireland","England","France"], answer:1,
    explain:"Krum catches the Snitch for Bulgaria, ending the match, but Ireland has already scored enough points to win overall.",
    src:"both" },

  { id:"n16", cat:"Wizarding Culture", diff:2,
    q:"What is the minimum age requirement to enter the Triwizard Tournament as established in Goblet of Fire?",
    options:["Sixteen","Seventeen (of age)","Eighteen","Fifteen"], answer:1,
    explain:"An age line set by Dumbledore restricts entry to students who are seventeen or older, which is why Fred and George's attempt fails.",
    src:"both" },

  { id:"n17", cat:"Characters", diff:2,
    q:"Who originally gives Harry the Marauder's Map?",
    options:["Sirius Black and Remus Lupin","Fred and George Weasley","Argus Filch","Professor McGonagall"], answer:1,
    explain:"Fred and George, having 'borrowed' the map from Filch's office, pass it to Harry in his third year, telling him it once belonged to Filch.",
    src:"both" },

  { id:"n18", cat:"Spells & Charms", diff:2,
    q:"What does the (fictional) Homorphus Charm claim to do, according to Gilderoy Lockhart's boastful account?",
    options:["Detect hidden objects","Reverse a werewolf's transformation","Unlock any door","Silence an opponent"], answer:1,
    explain:"Lockhart falsely claims to have used the Homorphus Charm to force a village werewolf back into human form — one of his many fabricated exploits.",
    src:"book" },

  { id:"n19", cat:"Potions", diff:2,
    q:"What is said to allow a sufficiently skilled wizard to resist the effects of Veritaserum?",
    options:["A strong will and skill at Occlumency","Drinking a bezoar beforehand","Casting Protego silently","Nothing can resist it"], answer:0,
    explain:"Snape notes that a talented Occlumens can shield their mind well enough to resist even Veritaserum, though the potion is otherwise extremely reliable.",
    src:"book" },

  { id:"n20", cat:"Creatures", diff:2,
    q:"What does a Dementor's Kiss do to its victim?",
    options:["Removes all their memories","Sucks out their soul, leaving them alive but empty","Turns them into a Dementor","Freezes them permanently"], answer:1,
    explain:"The Dementor's Kiss is considered a fate worse than death: the soul is extracted, leaving the body alive but empty of self.",
    src:"both" },

  { id:"n21", cat:"Creatures", diff:2,
    q:"What is the name of Hagrid's giant half-brother, whom he brings to live in the Forbidden Forest?",
    options:["Golgomath","Grawp","Karkus","Norbert"], answer:1,
    explain:"Grawp is Hagrid's half-brother on his mother's side — a giant Hagrid brings back from his mission to the giants and hides in the Forbidden Forest.",
    src:"book" },

  { id:"n22", cat:"Spells & Charms", diff:2,
    q:"What is the incantation for the Summoning Charm, used by Harry to call his broom in the Triwizard Tournament's First Task?",
    options:["Accio","Wingardium Leviosa","Alohomora","Expelliarmus"], answer:0,
    explain:"'Accio Firebolt!' brings Harry's broom soaring to him during the First Task, letting him outfly a Hungarian Horntail.",
    src:"both" },

  { id:"n23", cat:"Potions", diff:2,
    q:"What potion must a werewolf take in the days around the full moon to keep their mind while transformed?",
    options:["Skele-Gro","Pepperup Potion","Wolfsbane Potion","Girding Potion"], answer:2,
    explain:"The Wolfsbane Potion, brewed for Remus Lupin by Snape in Prisoner of Azkaban, doesn't stop the transformation but lets the werewolf keep their human mind.",
    src:"both" },

  { id:"n24", cat:"Creatures", diff:2,
    q:"What creature guards the deepest vaults at Gringotts, as seen when the trio break in during Deathly Hallows?",
    options:["A Basilisk","A partially blinded dragon","An Acromantula","A Sphinx"], answer:1,
    explain:"A dragon, kept half-blind and conditioned with pain to guard the high-security vaults, is what the trio ultimately free and escape on.",
    src:"both" },

  { id:"n25", cat:"Characters", diff:2,
    q:"What subject did Dolores Umbridge teach at Hogwarts before becoming High Inquisitor?",
    options:["Muggle Studies","History of Magic","Defence Against the Dark Arts","Divination"], answer:2,
    explain:"Umbridge is installed as the Ministry's Defence Against the Dark Arts teacher in Order of the Phoenix, deliberately teaching no practical spellwork.",
    src:"both" },

  { id:"n26", cat:"Places & Objects", diff:2,
    q:"What Hogwarts room only appears to someone who walks past its hidden location three times while thinking of what they need?",
    options:["The Chamber of Secrets","The Room of Requirement","The Astronomy Tower","The Shrieking Shack"], answer:1,
    explain:"The Room of Requirement, also called the Come and Go Room, transforms to fit the seeker's need — from Dumbledore's Army's training hall to a hiding place for the lost Diadem Horcrux.",
    src:"both" },

  { id:"n27", cat:"Wizarding Culture", diff:2,
    q:"Who is the Minister for Magic through most of Order of the Phoenix, in denial about Voldemort's return?",
    options:["Rufus Scrimgeour","Cornelius Fudge","Pius Thicknesse","Kingsley Shacklebolt"], answer:1,
    explain:"Cornelius Fudge's refusal to accept Voldemort's return — and his attempts to discredit Harry and Dumbledore instead — defines the Ministry's failures that year.",
    src:"both" },

  { id:"n28", cat:"Places & Objects", diff:2,
    q:"What device allows Hermione to attend more classes than fit into a normal timetable during her third year?",
    options:["A Time-Turner","The Marauder's Map","A Portkey","A Pensieve"], answer:0,
    explain:"McGonagall lends Hermione a Time-Turner so she can double up on classes — which later proves crucial to saving Sirius and Buckbeak.",
    src:"both" },

  { id:"n29", cat:"Creatures", diff:2,
    q:"What creatures pull the Hogwarts carriages, visible only to those who have witnessed death?",
    options:["Hippogriffs","Abraxan horses","Thestrals","Nifflers"], answer:2,
    explain:"Thestrals are skeletal, winged horses invisible to anyone who hasn't seen death — which is why Harry only sees them starting in his fifth year.",
    src:"both" },

  { id:"n30", cat:"Wizarding Culture", diff:2,
    q:"What organization does Hermione found to campaign for house-elf rights?",
    options:["D.A. (Dumbledore's Army)","S.P.E.W. (Society for the Promotion of Elfish Welfare)","The Elf Liberation Front","The Ministry Office for Elf Affairs"], answer:1,
    explain:"S.P.E.W. is Hermione's (largely unsuccessful) campaign to win rights and fair treatment for house-elves, badges and all.",
    src:"book" },

  { id:"n31", cat:"Characters", diff:2,
    q:"Who is appointed Minister for Magic near the very end of the series, after the Battle of Hogwarts?",
    options:["Arthur Weasley","Percy Weasley","Kingsley Shacklebolt","Rufus Scrimgeour"], answer:2,
    explain:"Kingsley Shacklebolt, a level-headed Order member and Auror, becomes Minister for Magic in the aftermath of Voldemort's defeat.",
    src:"both" },

  { id:"n32", cat:"Places & Objects", diff:2,
    q:"What does the Deluminator, left to Ron in Dumbledore's will, do?",
    options:["Removes and can later restore light from a source","Reveals invisible ink","Detects nearby Dark magic","Silently disables surveillance spells"], answer:0,
    explain:"The Deluminator sucks light out of its surroundings with a click — and, Ron discovers, can also guide him back to Harry and Hermione by following a swallowed ball of light.",
    src:"both" },

  { id:"n33", cat:"Characters", diff:2,
    q:"What is the name of Neville Longbottom's toad, notorious for repeatedly going missing?",
    options:["Scabbers","Trevor","Crookshanks","Errol"], answer:1,
    explain:"Trevor the toad's constant disappearances become a running joke through Neville's early years at Hogwarts.",
    src:"both" },

  { id:"n34", cat:"Spells & Charms", diff:2,
    q:"What shield-conjuring spell does Dumbledore's Army practice extensively under Harry's teaching?",
    options:["Protego","Sectumsempra","Legilimens","Finite Incantatem"], answer:0,
    explain:"Protego, the Shield Charm, is one of the defensive spells the D.A. drills most, giving members real protection when the Ministry offers none.",
    src:"both" },

  { id:"n35", cat:"Places & Objects", diff:2,
    q:"In which village do the Riddle House and the ruined Gaunt family shack both stand?",
    options:["Godric's Hollow","Little Hangleton","Ottery St Catchpole","Upper Flagley"], answer:1,
    explain:"Little Hangleton is home to both the grand Riddle House and the squalid Gaunt shack nearby — the two sides of Voldemort's parentage.",
    src:"both" },

  { id:"n36", cat:"History & Founders", diff:2,
    q:"Why, according to Hogwarts history, did Salazar Slytherin ultimately leave the school he helped found?",
    options:["He believed only pure-blood students should be admitted","He wanted to found a rival school","He was expelled for practicing Dark magic","He died in battle defending Hogwarts"], answer:0,
    explain:"Slytherin's insistence on admitting only pure-blood students put him at odds with the other three founders, leading to his departure — and, secretly, the hidden Chamber.",
    src:"both" },

  { id:"n37", cat:"Wizarding Culture", diff:2,
    q:"What term describes a witch or wizard born to non-magical (Muggle) parents?",
    options:["Half-blood","Muggle-born","Squib","Pure-blood"], answer:1,
    explain:"Muggle-born describes someone with magical ability born to two non-magical parents — a term Death Eaters twist into the slur 'Mudblood.'",
    src:"both" },

  { id:"n38", cat:"Places & Objects", diff:2,
    q:"What map, created by four student friends nicknamed Prongs, Padfoot, Moony, and Wormtail, reveals everyone's location in Hogwarts?",
    options:["The Pensieve","The Foe-Glass","The Marauder's Map","The Sorting Hat"], answer:2,
    explain:"The Marauder's Map shows every person moving through Hogwarts in real time, made by James Potter, Sirius Black, Remus Lupin, and Peter Pettigrew as students.",
    src:"both" },

  { id:"n39", cat:"Characters", diff:2,
    q:"Which four students, by their animal-themed nicknames, created the Marauder's Map?",
    options:["James Potter, Sirius Black, Remus Lupin, and Peter Pettigrew","James Potter, Remus Lupin, Frank Longbottom, and Peter Pettigrew","Sirius Black, Regulus Black, Remus Lupin, and James Potter","James Potter, Sirius Black, Severus Snape, and Peter Pettigrew"], answer:0,
    explain:"Prongs (James), Padfoot (Sirius), Moony (Remus), and Wormtail (Peter) — the Marauders — made the map during their own school years.",
    src:"both" },

  { id:"n40", cat:"Quidditch", diff:2,
    q:"What broom does Harry receive as an anonymous gift in his third year, later confirmed to be from Sirius Black?",
    options:["Nimbus 2000","Comet 260","Firebolt","Cleansweep Eleven"], answer:2,
    explain:"The Firebolt, an unbeatable racing broom, arrives with no note, is confiscated for safety checks, and turns out to be a gift from Sirius.",
    src:"both" },

  { id:"n41", cat:"Places & Objects", diff:2,
    q:"What is the name of Argus Filch's cat, an unpopular fixture of Hogwarts corridors?",
    options:["Crookshanks","Mrs. Norris","Fang","Trevor"], answer:1,
    explain:"Mrs. Norris patrols the corridors alongside Filch, seemingly always ready to catch students out of bed.",
    src:"both" },

  { id:"n42", cat:"History & Founders", diff:2,
    q:"Who teaches History of Magic at Hogwarts, notable for being the only teacher who is also a ghost?",
    options:["The Bloody Baron","Nearly Headless Nick","Professor Cuthbert Binns","The Grey Lady"], answer:2,
    explain:"Professor Binns is so absent-minded he simply got up and left his body behind one day, and has taught History of Magic as a ghost ever since.",
    src:"both" },

  { id:"n43", cat:"Characters", diff:2,
    q:"Who becomes Hogwarts Headmistress after the Battle of Hogwarts, having long served as Deputy Headmistress?",
    options:["Pomona Sprout","Filius Flitwick","Minerva McGonagall","Horace Slughorn"], answer:2,
    explain:"Minerva McGonagall steps into the Headmistress role after years as Deputy Headmistress and Head of Gryffindor.",
    src:"both" },

  { id:"n44", cat:"Potions", diff:2,
    q:"What potion did Harry win from Slughorn's class and later slip to Ron before a Quidditch match, letting Ron believe (wrongly) he'd been dosed?",
    options:["Felix Felicis","Amortentia","Veritaserum","Draught of Peace"], answer:0,
    explain:"Harry pretends to spike Ron's drink with Felix Felicis before a match; Ron plays brilliantly purely on the placebo confidence of believing he has.",
    src:"both" },

  /* ================= HEADMASTER'S TRIAL — difficulty 3 ================= */
  { id:"t1", cat:"Characters", diff:3,
    q:"What is the name of Albus Dumbledore's younger brother?",
    options:["Percival Dumbledore","Aberforth Dumbledore","Ariana Dumbledore","Elphias Doge"], answer:1,
    explain:"Aberforth Dumbledore, keeper of the Hog's Head, is Albus's estranged younger brother, with their sister Ariana at the centre of the family's tragedy.",
    src:"both" },

  { id:"t2", cat:"History & Founders", diff:3,
    q:"Which headmaster of Hogwarts served in the role immediately before Albus Dumbledore?",
    options:["Phineas Nigellus Black","Armando Dippet","Everard","Dilys Derwent"], answer:1,
    explain:"Armando Dippet was headmaster of Hogwarts before Dumbledore, and it was Dippet who declined to close the school when the Chamber of Secrets first opened.",
    src:"book" },

  { id:"t3", cat:"Characters", diff:3,
    q:"What was the name of Voldemort's Muggle father?",
    options:["Marvolo Gaunt","Morfin Gaunt","Tom Riddle Sr.","Frank Bryce"], answer:2,
    explain:"Tom Riddle Sr. was the wealthy Muggle whom Merope Gaunt enchanted and married; he abandoned her upon the charm's failure, and Voldemort later murders him.",
    src:"both" },

  { id:"t4", cat:"Places & Objects", diff:3,
    q:"What sets the Sword of Gryffindor apart from most magical objects, as demonstrated when Harry pulls it from the Sorting Hat?",
    options:["It can only be wielded by a Gryffindor by blood","It takes in only that which makes it stronger","It can only be summoned with Parseltongue","It cannot be used to destroy Horcruxes"], answer:1,
    explain:"The Sorting Hat explains the sword 'takes in only that which makes it stronger' — which is how it absorbs Basilisk venom and becomes able to destroy Horcruxes.",
    src:"both" },

  { id:"t5", cat:"History & Founders", diff:3,
    q:"In the Tale of the Three Brothers, which brother received the wand that would become known as the Elder Wand?",
    options:["Antioch Peverell","Cadmus Peverell","Ignotus Peverell","There is no eldest brother in the tale"], answer:0,
    explain:"Antioch, the eldest of the three Peverell brothers, requests an unbeatable wand from Death and is the first owner of what becomes the Elder Wand.",
    src:"both" },

  { id:"t6", cat:"Potions", diff:3,
    q:"What potion does Dumbledore drink to fake a deathlike state as part of the plan involving Snape in Half-Blood Prince?",
    options:["Dreamless Sleep Potion","Draught of Living Death","Draught of Peace","Elixir to Induce Euphoria"], answer:1,
    explain:"The Draught of Living Death, the same near-fatal sleeping potion Harry is examined on in class, is central to the arrangement between Dumbledore and Snape.",
    src:"book" },

  { id:"t7", cat:"Characters", diff:3,
    q:"Which goblin assists Harry, Ron, and Hermione in breaking into Gringotts during Deathly Hallows?",
    options:["Bogrod","Ragnok","Griphook","Gornuk"], answer:2,
    explain:"Griphook, once employed at Gringotts, agrees to help the trio break into the Lestranges' vault in exchange for the Sword of Gryffindor.",
    src:"both" },

  { id:"t8", cat:"Characters", diff:3,
    q:"Who is Bellatrix Lestrange's husband?",
    options:["Rabastan Lestrange","Rodolphus Lestrange","Barty Crouch Jr.","Lucius Malfoy"], answer:1,
    explain:"Rodolphus Lestrange is Bellatrix's husband; his brother Rabastan is imprisoned in Azkaban alongside them both after the first war.",
    src:"book" },

  { id:"t9", cat:"Creatures", diff:3,
    q:"What is the terrible cost of drinking unicorn blood to survive, according to Firenze's warning to Harry?",
    options:["The drinker is cursed with bad luck forever","The drinker will live, but with a half-life, a cursed life","The drinker turns permanently silver-haired","The drinker loses the ability to cast Patronuses"], answer:1,
    explain:"Firenze explains that killing a unicorn for its blood keeps you alive even at the point of death, but at a terrible price: 'a half-life, a cursed life'.",
    src:"both" },

  { id:"t10", cat:"Spells & Charms", diff:3,
    q:"What form does Severus Snape's Patronus take, revealing a key connection to Lily Potter?",
    options:["A stag","A doe","An otter","A phoenix"], answer:1,
    explain:"Snape's Patronus is a doe, matching Lily's, silently confirming to Harry (and the reader) the depth and endurance of Snape's love for her.",
    src:"both" },

  { id:"t11", cat:"Places & Objects", diff:3,
    q:"What magical object does Dumbledore use to store and later revisit memories?",
    options:["The Mirror of Erised","The Pensieve","The Marauder's Map","The Sorting Hat"], answer:1,
    explain:"The Pensieve allows memories to be extracted from the mind, stored, and viewed again, as Harry does repeatedly to learn about Voldemort's past.",
    src:"both" },

  { id:"t12", cat:"History & Founders", diff:3,
    q:"In the Tale of the Three Brothers, what did the second brother ask Death for?",
    options:["An unbeatable wand","A stone to bring back the dead","A cloak of invisibility","Eternal life"], answer:1,
    explain:"The second brother requests a stone with the power to recall the dead — what eventually becomes the Resurrection Stone.",
    src:"both" },

  { id:"t13", cat:"Characters", diff:3,
    q:"Which real Hogwarts professor did Barty Crouch Jr. impersonate for an entire school year using Polyjuice Potion?",
    options:["Severus Snape","Remus Lupin","Alastor 'Mad-Eye' Moody","Gilderoy Lockhart"], answer:2,
    explain:"Crouch Jr. kept the real Moody imprisoned and impersonated him as 'Mad-Eye Moody' throughout Goblet of Fire, secretly working to help Voldemort return.",
    src:"both" },

  { id:"t14", cat:"Wizarding Culture", diff:3,
    q:"Whose prophecy, made years before Harry's birth, named 'the one with the power to vanquish the Dark Lord'?",
    options:["Firenze","Sybill Trelawney","Cassandra Trelawney","Albus Dumbledore"], answer:1,
    explain:"Sybill Trelawney delivered the prophecy about Harry and Voldemort to Dumbledore during her job interview, unaware Snape overheard part of it.",
    src:"both" },

  { id:"t15", cat:"Creatures", diff:3,
    q:"What is the name of Voldemort's snake, kept close for most of the series and eventually revealed as a Horcrux?",
    options:["Nagaina","Nagini","Basilisco","Nini"], answer:1,
    explain:"Nagini serves Voldemort as both companion and living Horcrux, ultimately killed by Neville Longbottom during the Battle of Hogwarts.",
    src:"both" },

  { id:"t16", cat:"Creatures", diff:3,
    q:"What creature did Salazar Slytherin secretly leave sealed within the Chamber of Secrets?",
    options:["A Basilisk","An Acromantula","A Dementor","A Thestral"], answer:0,
    explain:"A giant Basilisk lies hidden in the Chamber, meant by Slytherin to be unleashed by his 'true heir' to purge the school of Muggle-borns.",
    src:"both" },

  { id:"t17", cat:"Characters", diff:3,
    q:"What is Professor 'Mad-Eye' Moody's actual first name?",
    options:["Alphard","Alastor","Aberforth","Amos"], answer:1,
    explain:"Alastor Moody is the real Auror impersonated for a year by Barty Crouch Jr. using Polyjuice Potion.",
    src:"both" },

  { id:"t18", cat:"History & Founders", diff:3,
    q:"How many objects (not counting Voldemort's own body) did Voldemort deliberately turn into Horcruxes?",
    options:["Four","Five","Six","Seven"], answer:2,
    explain:"Voldemort deliberately created six Horcruxes — the diary, ring, locket, cup, diadem, and Nagini — splitting his soul across each in his quest for immortality.",
    src:"both" },

  { id:"t19", cat:"Places & Objects", diff:3,
    q:"In which village were James and Lily Potter killed, and where their graves — and Harry's childhood home — can still be found?",
    options:["Little Hangleton","Godric's Hollow","Ottery St Catchpole","Spinner's End"], answer:1,
    explain:"Godric's Hollow is where the Potters lived and died, and where Harry and Hermione visit the family graves in Deathly Hallows.",
    src:"both" },

  { id:"t20", cat:"Characters", diff:3,
    q:"What is Petunia Dursley's maiden name, shared with her sister Lily?",
    options:["Prince","Evans","Prewett","Fawley"], answer:1,
    explain:"Petunia and Lily were both born Evans; Petunia's bitterness toward magic stems partly from being the sister left behind as a Muggle.",
    src:"both" },

  { id:"t21", cat:"Characters", diff:3,
    q:"Which Weasley sibling is secretly possessed via Tom Riddle's diary during her first year at Hogwarts?",
    options:["Ginny Weasley","Percy Weasley","Fred Weasley","Ron Weasley"], answer:0,
    explain:"Ginny, given the diary by Lucius Malfoy, is gradually possessed by the memory of Tom Riddle preserved within it, and later opens the Chamber unknowingly.",
    src:"both" },

  { id:"t22", cat:"Characters", diff:3,
    q:"Which Hogwarts professor and Death Eater is ultimately revealed to have remained secretly loyal to Dumbledore all along?",
    options:["Igor Karkaroff","Severus Snape","Peter Pettigrew","Lucius Malfoy"], answer:1,
    explain:"Snape's true loyalty to Dumbledore — rooted in his love for Lily — is only fully revealed through his memories after his death.",
    src:"both" },

  { id:"t23", cat:"Places & Objects", diff:3,
    q:"What does the Resurrection Stone, one of the three Deathly Hallows, allow its holder to do?",
    options:["Turn completely invisible","Summon the shades of the dead","Win any duel automatically","Heal any fatal wound"], answer:1,
    explain:"The Resurrection Stone can call back the shades of the dead to speak with the living — as Harry uses it to summon his parents, Sirius, and Lupin before walking into the forest.",
    src:"both" },

  { id:"t24", cat:"History & Founders", diff:3,
    q:"Which Peverell brother, owner of the Invisibility Cloak in the Tale of the Three Brothers, is considered an ancestor of Harry Potter?",
    options:["Antioch Peverell","Cadmus Peverell","Ignotus Peverell","Cygnus Peverell"], answer:2,
    explain:"Ignotus Peverell, the humble youngest brother who asked Death for a means to hide rather than power, is the Potter family's ancestor.",
    src:"both" },

  { id:"t25", cat:"Characters", diff:3,
    q:"What is the name of the house-elf who serves the Malfoy family before Harry tricks Lucius into freeing him?",
    options:["Kreacher","Dobby","Winky","Hokey"], answer:1,
    explain:"Dobby serves the Malfoys until Harry slips a sock into a book handed back to Lucius, forcing his unwitting master to free him.",
    src:"both" },

  { id:"t26", cat:"Characters", diff:3,
    q:"What is the name of the house-elf bound for generations to the Black family, later inherited by Harry?",
    options:["Dobby","Winky","Kreacher","Hokey"], answer:2,
    explain:"Kreacher serves the Black family at Grimmauld Place, passing to Harry after Sirius's death, and eventually becoming a loyal ally.",
    src:"both" },

  { id:"t27", cat:"History & Founders", diff:3,
    q:"What is the name of Dumbledore's close friend in his youth, with whom he shared dangerous ideas about wizard dominance before a bitter falling-out?",
    options:["Igor Karkaroff","Newt Scamander","Gellert Grindelwald","Nicolas Flamel"], answer:2,
    explain:"Gellert Grindelwald and a young Dumbledore plotted together as teenagers, before a duel involving Dumbledore's sister Ariana ended their friendship in tragedy.",
    src:"both" },

  { id:"t28", cat:"Places & Objects", diff:3,
    q:"What legendary object, sought after in the first book, can transform any metal into gold and produce the Elixir of Life?",
    options:["The Resurrection Stone","The Mirror of Erised","The Philosopher's (Sorcerer's) Stone","The Goblet of Fire"], answer:2,
    explain:"The Philosopher's Stone, created by Nicolas Flamel, is what Quirrell (possessed by Voldemort) attempts to steal in Harry's first year.",
    src:"both" },

  { id:"t29", cat:"Characters", diff:3,
    q:"Who is Nicolas Flamel's wife, mentioned as co-owner of the Philosopher's Stone?",
    options:["Bathilda Bagshot","Perenelle Flamel","Augusta Longbottom","Griselda Marchbanks"], answer:1,
    explain:"Perenelle Flamel shares ownership of the Stone with her husband Nicolas, and both agree to see it destroyed to keep it from Voldemort.",
    src:"book" },

  { id:"t30", cat:"History & Founders", diff:3,
    q:"Who is the author of 'Hogwarts, A History' and Dumbledore's own neighbor in Godric's Hollow, later a source Rita Skeeter exploits?",
    options:["Griselda Marchbanks","Cuthbert Binns","Bathilda Bagshot","Adalbert Waffling"], answer:2,
    explain:"Bathilda Bagshot, an elderly historian living in Godric's Hollow, is manipulated by Rita Skeeter into a tell-all book about Dumbledore's past.",
    src:"book" },

  { id:"t31", cat:"Creatures", diff:3,
    q:"What is the name of the three-headed dog guarding the trapdoor to the Philosopher's Stone in Harry's first year?",
    options:["Fluffy","Fang","Norbert","Aragog"], answer:0,
    explain:"Fluffy, purchased by Hagrid from 'a Greek chappie,' guards the trapdoor and can be lulled to sleep with music.",
    src:"both" },

  { id:"t32", cat:"History & Founders", diff:3,
    q:"What rallying phrase did the young Dumbledore and Grindelwald use to justify wizard rule over Muggles?",
    options:["Toujours Pur","For the Greater Good","Magic is Might","Fidelity, Bravery, Chastity"], answer:1,
    explain:"'For the Greater Good' was the phrase Dumbledore and Grindelwald used as teenagers to justify their plans — later engraved, with dark irony, above Nurmengard's gate.",
    src:"both" },

  { id:"t33", cat:"Places & Objects", diff:3,
    q:"What manor house, owned by the Malfoy family, becomes a Death Eater stronghold and prison in Deathly Hallows?",
    options:["Riddle House","Malfoy Manor","Grimmauld Place","Spinner's End"], answer:1,
    explain:"Malfoy Manor becomes Voldemort's base of operations and a holding cell for prisoners, including Ollivander, Luna, and briefly Harry's friends.",
    src:"both" },

  { id:"t34", cat:"Places & Objects", diff:3,
    q:"What is the name of Snape's childhood home, later used as a Death Eater base in Deathly Hallows?",
    options:["Malfoy Manor","Spinner's End","Godric's Hollow","Little Whinging"], answer:1,
    explain:"Spinner's End, a house on a run-down street, is where Snape grew up and where Voldemort's inner circle meets at the start of Half-Blood Prince.",
    src:"both" },

  { id:"t35", cat:"Characters", diff:3,
    q:"Which member of the Order of the Phoenix is a Metamorphmagus, able to change her appearance at will?",
    options:["Emmeline Vance","Hestia Jones","Nymphadora Tonks","Mundungus Fletcher"], answer:2,
    explain:"Tonks can reshape her own face and body at will, a rare and highly prized magical talent, though it deserts her briefly during a bout of depression.",
    src:"both" },

  { id:"t36", cat:"Creatures", diff:3,
    q:"What does a Metamorphmagus not need in order to change their appearance, unlike other witches and wizards?",
    options:["A wand or potion","Sunlight","A full moon","A mirror"], answer:0,
    explain:"A Metamorphmagus changes shape purely through will and innate talent, with no wand-work or Polyjuice Potion required.",
    src:"book" },

  { id:"t37", cat:"Wizarding Culture", diff:3,
    q:"What is the general name for the Ministry law restricting underage witches and wizards from performing magic outside school?",
    options:["The International Statute of Secrecy","The Decree for the Reasonable Restriction of Underage Sorcery","The Wizengamot Charter","The Ministry Registration Act"], answer:1,
    explain:"This decree is what nearly gets Harry expelled after the incident with Dobby's hovering cake, and again after casting a Patronus in front of Dudley.",
    src:"book" },

  { id:"t38", cat:"Characters", diff:3,
    q:"Who was Head of Slytherin House and Potions Master before Snape took over the Defence Against the Dark Arts post in Half-Blood Prince?",
    options:["Horace Slughorn (returning to the role)","Severus Snape himself, throughout","Igor Karkaroff","Amycus Carrow"], answer:0,
    explain:"Slughorn is coaxed out of retirement to teach Potions again in Half-Blood Prince, freeing Snape to finally take the Defence Against the Dark Arts post he'd long wanted.",
    src:"both" },
];

/* -------------------------------------------------------------------------
   2. MODE CONFIG
   Each mode pulls only from its own difficulty tier, so the three trials are
   genuinely different in content and toughness, not just different lengths
   of the same list.
   ------------------------------------------------------------------------- */
const MODES = {
  owl: {
    key: "owl",
    name: "O.W.L. Examination",
    level: "Ordinary Wizarding Level",
    desc: "A fair test of core knowledge every student should carry through their years at Hogwarts. Straightforward — but not obvious.",
    diff: 1,
    count: 20,
    seconds: 45,
    est: "8–10 min"
  },
  newt: {
    key: "newt",
    name: "N.E.W.T. Examination",
    level: "Nastily Exhausting Wizarding Test",
    desc: "Advanced material for those who've done the reading closely. Expect finer detail, and questions with more than one plausible answer.",
    diff: 2,
    count: 50,
    seconds: 35,
    est: "20–25 min"
  },
  trial: {
    key: "trial",
    name: "Headmaster's Trial",
    level: "Restricted Section clearance required",
    desc: "The deepest questions in the Archive — obscure history, background characters, and details easy to miss even on a careful reading.",
    diff: 3,
    count: 100,
    seconds: 25,
    est: "35–45 min"
  }
};

const GRADES = [
  { min: 0.90, grade: "O", name: "Outstanding" },
  { min: 0.75, grade: "E", name: "Exceeds Expectations" },
  { min: 0.60, grade: "A", name: "Acceptable" },
  { min: 0.45, grade: "P", name: "Poor" },
  { min: 0.25, grade: "D", name: "Dreadful" },
  { min: 0,    grade: "T", name: "Troll" }
];

/* -------------------------------------------------------------------------
   STATE
   ------------------------------------------------------------------------- */
let state = {
  mode: null,
  timerOn: false,
  quizQuestions: [],   // the questions chosen for this run (with shuffled options)
  index: 0,
  correctCount: 0,
  perCategory: {},      // cat -> {correct, total}
  timerInterval: null,
  timeLeft: 0,
  answered: false
};

/* -------------------------------------------------------------------------
   HELPERS
   ------------------------------------------------------------------------- */
function shuffle(arr){
  const a = arr.slice();
  for(let i = a.length - 1; i > 0; i--){
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function buildQuizSet(mode){
  const pool = shuffle(QUESTIONS.filter(q => q.diff === mode.diff));
  let picked;
  if(pool.length >= mode.count){
    picked = pool.slice(0, mode.count);
  } else {
    // bank not yet large enough to fill the mode without repeats — cycle through
    picked = [];
    while(picked.length < mode.count){
      const remaining = mode.count - picked.length;
      picked = picked.concat(pool.slice(0, Math.min(remaining, pool.length)));
    }
  }
  // shuffle each question's answer order, tracking the correct string
  return picked.map(q => {
    const correctText = q.options[q.answer];
    const shuffledOptions = shuffle(q.options);
    return { ...q, shuffledOptions, correctText };
  });
}

function diffLabel(diff){
  return diff === 1 ? "O.W.L." : diff === 2 ? "N.E.W.T." : "Headmaster's Trial";
}

function sourceLabel(src){
  if(src === "book") return "📖 From the books";
  if(src === "film") return "🎬 From the films";
  return "📖🎬 Books & films agree";
}

/* -------------------------------------------------------------------------
   SCREEN SWITCHING
   ------------------------------------------------------------------------- */
function showScreen(id){
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("screen--active"));
  document.getElementById(id).classList.add("screen--active");
  window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
}

/* -------------------------------------------------------------------------
   SCREEN 1: LETTER
   ------------------------------------------------------------------------- */
document.getElementById("envelope").addEventListener("click", openLetter);
document.getElementById("envelope").setAttribute("tabindex", "0");
document.getElementById("envelope").addEventListener("keydown", e => {
  if(e.key === "Enter" || e.key === " "){ e.preventDefault(); openLetter(); }
});

function openLetter(){
  const envelope = document.getElementById("envelope");
  if(envelope.classList.contains("envelope--opening")) return;
  envelope.classList.add("envelope--opening");
  setTimeout(() => {
    envelope.hidden = true;
    document.getElementById("letter").hidden = false;
  }, 550);
}

document.getElementById("btn-reveal-modes").addEventListener("click", () => {
  renderModeGrid();
  showScreen("screen-modes");
});

/* -------------------------------------------------------------------------
   SCREEN 2: MODE SELECT
   ------------------------------------------------------------------------- */
function renderModeGrid(){
  const grid = document.getElementById("mode-grid");
  grid.innerHTML = "";
  Object.values(MODES).forEach(mode => {
    const card = document.createElement("div");
    card.className = "mode-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <div class="mode-card__level">${mode.level}</div>
      <h3 class="mode-card__name">${mode.name}</h3>
      <p class="mode-card__desc">${mode.desc}</p>
      <div class="mode-card__meta">
        <span>${mode.count} questions</span>
        <span>~${mode.est}</span>
      </div>
    `;
    card.addEventListener("click", () => beginQuiz(mode));
    card.addEventListener("keydown", e => { if(e.key === "Enter"){ beginQuiz(mode); } });
    grid.appendChild(card);
  });
}

/* -------------------------------------------------------------------------
   SCREEN 3: QUIZ
   ------------------------------------------------------------------------- */
function beginQuiz(mode){
  state.mode = mode;
  state.timerOn = document.getElementById("toggle-timer").checked;
  state.quizQuestions = buildQuizSet(mode);
  state.index = 0;
  state.correctCount = 0;
  state.perCategory = {};
  state.answered = false;

  document.getElementById("quiz-mode-name").textContent = mode.name;
  document.getElementById("quiz-timer").hidden = !state.timerOn;

  showScreen("screen-quiz");
  renderQuestion();
}

function renderQuestion(){
  const total = state.quizQuestions.length;
  const q = state.quizQuestions[state.index];
  state.answered = false;

  document.getElementById("quiz-progress-text").textContent = `Question ${state.index + 1} of ${total}`;
  document.getElementById("progress-fill").style.width = `${(state.index / total) * 100}%`;

  document.getElementById("q-category").textContent = q.cat;
  document.getElementById("q-difficulty").textContent = diffLabel(q.diff);
  document.getElementById("q-text").textContent = q.q;

  const optionsWrap = document.getElementById("q-options");
  optionsWrap.innerHTML = "";
  q.shuffledOptions.forEach(optText => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optText;
    btn.addEventListener("click", () => handleAnswer(optText, btn));
    optionsWrap.appendChild(btn);
  });

  if(state.timerOn) startTimer(state.mode.seconds);
}

function startTimer(seconds){
  clearInterval(state.timerInterval);
  state.timeLeft = seconds;
  const ring = document.getElementById("timer-ring-fg");
  const label = document.getElementById("timer-seconds");
  const circumference = 97.4;
  const update = () => {
    label.textContent = state.timeLeft;
    const pct = state.timeLeft / seconds;
    ring.style.strokeDashoffset = String(circumference * (1 - pct));
    ring.style.stroke = pct < 0.25 ? "var(--maroon-bright)" : "var(--gold-bright)";
  };
  update();
  state.timerInterval = setInterval(() => {
    state.timeLeft -= 1;
    if(state.timeLeft <= 0){
      clearInterval(state.timerInterval);
      if(!state.answered) handleAnswer(null, null); // time's up: counts as wrong
    } else {
      update();
    }
  }, 1000);
}

function handleAnswer(chosenText, chosenBtn){
  if(state.answered) return;
  state.answered = true;
  clearInterval(state.timerInterval);

  const q = state.quizQuestions[state.index];
  const isCorrect = chosenText === q.correctText;

  // lock all option buttons, mark correct/wrong/dimmed
  document.querySelectorAll(".option-btn").forEach(btn => {
    btn.disabled = true;
    if(btn.textContent === q.correctText){
      btn.classList.add("is-correct");
    } else if(btn === chosenBtn){
      btn.classList.add("is-wrong");
    } else {
      btn.classList.add("is-dimmed");
    }
  });

  // tally
  if(!state.perCategory[q.cat]) state.perCategory[q.cat] = { correct: 0, total: 0 };
  state.perCategory[q.cat].total += 1;
  if(isCorrect){
    state.correctCount += 1;
    state.perCategory[q.cat].correct += 1;
  }

  // feedback overlay
  const verdict = document.getElementById("feedback-verdict");
  verdict.textContent = isCorrect ? "CORRECT" : "INCORRECT";
  verdict.className = "feedback-verdict " + (isCorrect ? "correct" : "wrong");
  document.getElementById("feedback-answer-text").textContent = q.correctText;
  document.getElementById("feedback-explain").textContent = q.explain;
  document.getElementById("feedback-source").textContent = sourceLabel(q.src);

  const feedback = document.getElementById("feedback");
  feedback.hidden = false;
}

document.getElementById("btn-continue").addEventListener("click", () => {
  document.getElementById("feedback").hidden = true;
  state.index += 1;
  if(state.index >= state.quizQuestions.length){
    showResults();
  } else {
    renderQuestion();
  }
});

/* -------------------------------------------------------------------------
   SCREEN 4: RESULTS
   ------------------------------------------------------------------------- */
function computeGrade(pct){
  return GRADES.find(g => pct >= g.min);
}

function showResults(){
  document.getElementById("progress-fill").style.width = "100%";
  const total = state.quizQuestions.length;
  const pct = total ? state.correctCount / total : 0;
  const gradeInfo = computeGrade(pct);

  document.getElementById("grade-seal").textContent = gradeInfo.grade;
  document.getElementById("grade-name").textContent = gradeInfo.name;
  document.getElementById("grade-score").textContent =
    `${state.correctCount} / ${total} correct — ${Math.round(pct * 100)}%`;

  // category breakdown
  const breakdown = document.getElementById("category-breakdown");
  breakdown.innerHTML = "";
  const cats = Object.entries(state.perCategory).sort((a,b) => (b[1].correct/b[1].total) - (a[1].correct/a[1].total));
  cats.forEach(([cat, stat]) => {
    const catPct = Math.round((stat.correct / stat.total) * 100);
    const row = document.createElement("div");
    row.className = "cat-row";
    row.innerHTML = `
      <span>${cat}</span>
      <span class="cat-row__bar"><span class="cat-row__fill" style="width:${catPct}%"></span></span>
      <span>${catPct}%</span>
    `;
    breakdown.appendChild(row);
  });

  // strongest / weakest
  if(cats.length){
    const strongest = cats[0];
    const weakest = cats[cats.length - 1];
    document.getElementById("report-strongest").textContent =
      `${strongest[0]} (${strongest[1].correct}/${strongest[1].total} correct) — the Archive is confident in your grasp of this subject.`;
    document.getElementById("report-weakest").textContent =
      `${weakest[0]} (${weakest[1].correct}/${weakest[1].total} correct) — worth another look before your next trial.`;
  } else {
    document.getElementById("report-strongest").textContent = "—";
    document.getElementById("report-weakest").textContent = "—";
  }

  // achievements
  const achievements = [];
  if(pct === 1) achievements.push({icon:"🏆", text:"Perfect Memory — full marks, no notes"});
  if(state.timerOn) achievements.push({icon:"⏳", text:"No Fear — completed under the countdown"});
  cats.forEach(([cat, stat]) => {
    if(stat.total >= 3 && stat.correct === stat.total){
      achievements.push({icon:"✒️", text:`${cat} Specialist — perfect in this category`});
    }
  });
  if(state.mode.key === "trial" && pct >= 0.5) achievements.push({icon:"🔑", text:"Restricted Section Cleared"});
  if(pct < 0.25) achievements.push({icon:"🐴", text:"Back to the books — the Archive believes in you next time"});
  if(!achievements.length) achievements.push({icon:"📜", text:"Trial Completed"});

  const achWrap = document.getElementById("achievements");
  achWrap.innerHTML = "";
  achievements.forEach(a => {
    const el = document.createElement("div");
    el.className = "achievement";
    el.innerHTML = `<span class="achievement__icon">${a.icon}</span><span>${a.text}</span>`;
    achWrap.appendChild(el);
  });

  showScreen("screen-results");
}

document.getElementById("btn-retry-mode").addEventListener("click", () => beginQuiz(state.mode));
document.getElementById("btn-choose-again").addEventListener("click", () => {
  renderModeGrid();
  showScreen("screen-modes");
});
