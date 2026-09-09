/* =========================================
   HOGWARTS SORTING CEREMONY
   JAVASCRIPT
========================================= */


/* =========================================
   QUESTIONS
========================================= */

const questions = [

    {
        question: "You discover a locked door deep inside Hogwarts. What do you do?",
        answers: [
            { text: "Try to open it immediately. Secrets are meant to be uncovered.", house: "G" },
            { text: "Study the lock and surrounding clues before touching anything.", house: "R" },
            { text: "Wonder who might be protecting what lies beyond it.", house: "S" },
            { text: "Look around to make sure nobody could be harmed by opening it.", house: "H" }
        ]
    },

    {
        question: "Which quality do you value most in another person?",
        answers: [
            { text: "Courage", house: "G" },
            { text: "Intelligence", house: "R" },
            { text: "Loyalty", house: "H" },
            { text: "Ambition", house: "S" }
        ]
    },

    {
        question: "You are offered a chance to become extremely powerful. What matters most?",
        answers: [
            { text: "Using the power to protect people.", house: "G" },
            { text: "Understanding exactly how the power works.", house: "R" },
            { text: "Making sure the people you love benefit too.", house: "H" },
            { text: "Making sure nobody can ever take that power from you.", house: "S" }
        ]
    },

    {
        question: "A friend has betrayed you. Your first instinct is to...",
        answers: [
            { text: "Confront them directly.", house: "G" },
            { text: "Figure out why they did it.", house: "R" },
            { text: "Give them a chance to explain themselves.", house: "H" },
            { text: "Remember it and change how much power you give them.", house: "S" }
        ]
    },

    {
        question: "Which sounds most appealing?",
        answers: [
            { text: "Being remembered as someone who stood up for others.", house: "G" },
            { text: "Discovering something nobody else has discovered.", house: "R" },
            { text: "Having a small circle of people who truly love you.", house: "H" },
            { text: "Building a life where you answer to nobody.", house: "S" }
        ]
    },

    {
        question: "You make a serious mistake. What bothers you most?",
        answers: [
            { text: "That someone got hurt because of you.", house: "G" },
            { text: "That you failed to see the problem beforehand.", house: "R" },
            { text: "That you disappointed someone who trusted you.", house: "H" },
            { text: "That the mistake made you look weak.", house: "S" }
        ]
    },

    {
        question: "What kind of challenge excites you?",
        answers: [
            { text: "One that requires bravery.", house: "G" },
            { text: "One that requires solving something difficult.", house: "R" },
            { text: "One that requires patience and persistence.", house: "H" },
            { text: "One where there is something significant to win.", house: "S" }
        ]
    },

    {
        question: "You are underestimated by someone. What do you do?",
        answers: [
            { text: "Prove them wrong immediately.", house: "G" },
            { text: "Let your results speak for themselves.", house: "R" },
            { text: "Shrug it off unless it affects someone you care about.", house: "H" },
            { text: "Use their underestimation to your advantage.", house: "S" }
        ]
    },

    {
        question: "Which fear would be hardest for you to live with?",
        answers: [
            { text: "Being unable to protect someone.", house: "G" },
            { text: "Never understanding your own potential.", house: "R" },
            { text: "Being abandoned by the people you love.", house: "H" },
            { text: "Having no control over your own life.", house: "S" }
        ]
    },

    {
        question: "When making a difficult decision, you trust...",
        answers: [
            { text: "My courage and instincts.", house: "G" },
            { text: "Evidence and reasoning.", house: "R" },
            { text: "What feels right for everyone involved.", house: "H" },
            { text: "What will put me in the strongest position.", house: "S" }
        ]
    },

    {
        question: "What would you rather receive?",
        answers: [
            { text: "Respect", house: "G" },
            { text: "Knowledge", house: "R" },
            { text: "Love", house: "H" },
            { text: "Influence", house: "S" }
        ]
    },

    {
        question: "Someone insults you publicly. What is your instinct?",
        answers: [
            { text: "Stand up for yourself immediately.", house: "G" },
            { text: "Wonder what insecurity made them say it.", house: "R" },
            { text: "Ignore it unless they hurt someone else.", house: "H" },
            { text: "Make sure they regret underestimating you.", house: "S" }
        ]
    },

    {
        question: "You have an entire day completely free. You would rather...",
        answers: [
            { text: "Go somewhere spontaneous.", house: "G" },
            { text: "Read, learn or explore an unusual subject.", house: "R" },
            { text: "Spend it with people you care about.", house: "H" },
            { text: "Work toward something that improves your future.", house: "S" }
        ]
    },

    {
        question: "Which compliment would mean the most?",
        answers: [
            { text: "You are incredibly brave.", house: "G" },
            { text: "You see things other people miss.", house: "R" },
            { text: "People can always count on you.", house: "H" },
            { text: "You know exactly what you want.", house: "S" }
        ]
    },

    {
        question: "You see someone being treated unfairly. You...",
        answers: [
            { text: "Step in, even if it puts you at risk.", house: "G" },
            { text: "Work out the smartest way to expose the injustice.", house: "R" },
            { text: "Stay beside the person who is being hurt.", house: "H" },
            { text: "Look for the person with enough influence to change things.", house: "S" }
        ]
    },

    {
        question: "What is your greatest strength?",
        answers: [
            { text: "Fearlessness", house: "G" },
            { text: "Curiosity", house: "R" },
            { text: "Reliability", house: "H" },
            { text: "Determination", house: "S" }
        ]
    },

    {
        question: "Which weakness are you most likely to have?",
        answers: [
            { text: "Acting before thinking.", house: "G" },
            { text: "Overthinking.", house: "R" },
            { text: "Putting others before yourself.", house: "H" },
            { text: "Wanting too much control.", house: "S" }
        ]
    },

    {
        question: "If you could master one magical ability instantly, which would you choose?",
        answers: [
            { text: "Protective magic.", house: "G" },
            { text: "Ancient magical knowledge.", house: "R" },
            { text: "Healing magic.", house: "H" },
            { text: "Powerful defensive or offensive magic.", house: "S" }
        ]
    },

    {
        question: "Your ideal reputation would be...",
        answers: [
            { text: "Fearless.", house: "G" },
            { text: "Brilliant.", house: "R" },
            { text: "Kind.", house: "H" },
            { text: "Powerful.", house: "S" }
        ]
    },

    {
        question: "You find a mysterious magical object. What comes first?",
        answers: [
            { text: "Touch it and see what happens.", house: "G" },
            { text: "Research it before using it.", house: "R" },
            { text: "Make sure nobody is endangered by it.", house: "H" },
            { text: "Consider how it could benefit you.", house: "S" }
        ]
    },

    {
        question: "When you lose an argument, you usually...",
        answers: [
            { text: "Move on quickly.", house: "G" },
            { text: "Replay the argument in your head.", house: "R" },
            { text: "Care more about whether feelings were hurt.", house: "H" },
            { text: "Remember exactly what happened.", house: "S" }
        ]
    },

    {
        question: "What motivates you most?",
        answers: [
            { text: "Doing what is right.", house: "G" },
            { text: "Understanding the world.", house: "R" },
            { text: "Taking care of your people.", house: "H" },
            { text: "Creating the life you want.", house: "S" }
        ]
    },

    {
        question: "If someone you love makes a terrible decision, you...",
        answers: [
            { text: "Tell them bluntly that they are making a mistake.", house: "G" },
            { text: "Explain the consequences logically.", house: "R" },
            { text: "Stay beside them regardless.", house: "H" },
            { text: "Help them fix it while protecting yourself.", house: "S" }
        ]
    },

    {
        question: "Which environment would you thrive in?",
        answers: [
            { text: "A place full of action and adventure.", house: "G" },
            { text: "A quiet library full of mysteries.", house: "R" },
            { text: "A warm room surrounded by friends.", house: "H" },
            { text: "A place where ambitious people compete.", house: "S" }
        ]
    },

    {
        question: "You are given one chance to change the past. You would...",
        answers: [
            { text: "Save someone you could not save.", house: "G" },
            { text: "Learn something you were never able to know.", house: "R" },
            { text: "Repair a relationship.", house: "H" },
            { text: "Change one decision that limited your future.", house: "S" }
        ]
    },

    {
        question: "What makes someone truly admirable?",
        answers: [
            { text: "Standing up when everyone else is afraid.", house: "G" },
            { text: "Thinking independently.", house: "R" },
            { text: "Remaining loyal when it is difficult.", house: "H" },
            { text: "Turning ambition into achievement.", house: "S" }
        ]
    },

    {
        question: "What would you rather avoid?",
        answers: [
            { text: "Cowardice.", house: "G" },
            { text: "Ignorance.", house: "R" },
            { text: "Cruelty.", house: "H" },
            { text: "Helplessness.", house: "S" }
        ]
    },

    {
        question: "A close friend is being attacked verbally. You...",
        answers: [
            { text: "Immediately defend them.", house: "G" },
            { text: "Disarm the attacker with a clever response.", house: "R" },
            { text: "Stay beside your friend and comfort them.", house: "H" },
            { text: "Make a mental note of who the attacker is.", house: "S" }
        ]
    },

    {
        question: "Which sentence feels closest to you?",
        answers: [
            { text: "I'd rather try and fail than never try.", house: "G" },
            { text: "There is always more to learn.", house: "R" },
            { text: "People matter more than achievements.", house: "H" },
            { text: "I want more from life, and I am willing to work for it.", house: "S" }
        ]
    },

    {
        question: "If Hogwarts gave you a secret mission, you would want it to involve...",
        answers: [
            { text: "Danger.", house: "G" },
            { text: "A mystery.", house: "R" },
            { text: "Helping someone.", house: "H" },
            { text: "Something valuable.", house: "S" }
        ]
    },

    {
        question: "How do you react when plans suddenly change?",
        answers: [
            { text: "Adapt and improvise.", house: "G" },
            { text: "Ask why the change happened.", house: "R" },
            { text: "Make sure everyone is okay.", house: "H" },
            { text: "Figure out the new advantage.", house: "S" }
        ]
    },

    {
        question: "Which would be hardest to forgive?",
        answers: [
            { text: "Cowardice when courage was needed.", house: "G" },
            { text: "Deliberate ignorance.", house: "R" },
            { text: "Betrayal.", house: "H" },
            { text: "Trying to control or manipulate you.", house: "S" }
        ]
    },

    {
        question: "What do you secretly want people to understand about you?",
        answers: [
            { text: "I am stronger than I look.", house: "G" },
            { text: "There is much more going on in my head than people realize.", house: "R" },
            { text: "I care more deeply than I show.", house: "H" },
            { text: "I know what I am capable of.", house: "S" }
        ]
    },

    {
        question: "Which kind of person would you distrust most?",
        answers: [
            { text: "Someone who refuses to act.", house: "G" },
            { text: "Someone who refuses to think.", house: "R" },
            { text: "Someone who abandons people when things get difficult.", house: "H" },
            { text: "Someone who pretends to be harmless while manipulating everyone.", house: "S" }
        ]
    },

    {
        question: "You are competing against someone you admire. You...",
        answers: [
            { text: "Give everything you have.", house: "G" },
            { text: "Study how they approach the challenge.", house: "R" },
            { text: "Enjoy the experience regardless of who wins.", house: "H" },
            { text: "Find the strategy that gives you the edge.", house: "S" }
        ]
    },

    {
        question: "What kind of legacy would satisfy you?",
        answers: [
            { text: "People remember that I was brave.", house: "G" },
            { text: "People build on something I discovered.", house: "R" },
            { text: "People remember that I made their lives better.", house: "H" },
            { text: "People remember what I achieved.", house: "S" }
        ]
    },

    {
        question: "When you are hurt emotionally, you tend to...",
        answers: [
            { text: "Confront the situation.", house: "G" },
            { text: "Analyze every detail.", house: "R" },
            { text: "Seek comfort from someone trusted.", house: "H" },
            { text: "Become more guarded.", house: "S" }
        ]
    },

    {
        question: "Which would you choose for your Hogwarts common room?",
        answers: [
            { text: "A roaring fireplace and legendary stories.", house: "G" },
            { text: "Books, telescopes and quiet corners.", house: "R" },
            { text: "Plants, warm lights and comfortable chairs.", house: "H" },
            { text: "Ancient stone, mystery and privacy.", house: "S" }
        ]
    },

    {
        question: "If you could ask the Sorting Hat one question, what would it be?",
        answers: [
            { text: "What am I capable of when I am brave?", house: "G" },
            { text: "What does it know that I don't?", house: "R" },
            { text: "Where will I find people who truly belong with me?", house: "H" },
            { text: "What could I become if I stopped holding myself back?", house: "S" }
        ]
    },

    {
        question: "Someone challenges your beliefs. Your response is to...",
        answers: [
            { text: "Defend what you believe.", house: "G" },
            { text: "Question whether your beliefs are correct.", house: "R" },
            { text: "Listen and understand where they are coming from.", house: "H" },
            { text: "Decide whether their opinion actually matters to you.", house: "S" }
        ]
    },

    {
        question: "Which magical creature would you most want as a companion?",
        answers: [
            { text: "A loyal Hippogriff.", house: "G" },
            { text: "An intelligent Raven.", house: "R" },
            { text: "A gentle Niffler.", house: "H" },
            { text: "A mysterious Serpent.", house: "S" }
        ]
    },

    {
        question: "What is more important: being liked or being respected?",
        answers: [
            { text: "Respected.", house: "G" },
            { text: "It depends on the person.", house: "R" },
            { text: "Liked.", house: "H" },
            { text: "Respected by the right people.", house: "S" }
        ]
    },

    {
        question: "When you imagine your ideal future, what matters most?",
        answers: [
            { text: "Adventure and meaningful experiences.", house: "G" },
            { text: "Freedom to explore and learn.", house: "R" },
            { text: "A loving home and close relationships.", house: "H" },
            { text: "Success on your own terms.", house: "S" }
        ]
    },

    {
        question: "If you had to choose one word to guide your life, it would be...",
        answers: [
            { text: "Courage.", house: "G" },
            { text: "Truth.", house: "R" },
            { text: "Loyalty.", house: "H" },
            { text: "Ambition.", house: "S" }
        ]
    },

    {
        question: "You discover that someone powerful has been lying to everyone. You...",
        answers: [
            { text: "Expose them.", house: "G" },
            { text: "Collect proof first.", house: "R" },
            { text: "Think about who could be harmed by exposing them.", house: "H" },
            { text: "Decide how the information could be used strategically.", house: "S" }
        ]
    },

    {
        question: "What kind of magic would you never want to use?",
        answers: [
            { text: "Magic that requires harming an innocent person.", house: "G" },
            { text: "Magic that destroys knowledge.", house: "R" },
            { text: "Magic that permanently damages someone you love.", house: "H" },
            { text: "Magic that makes you completely powerless.", house: "S" }
        ]
    },

    {
        question: "Your greatest temptation would probably be...",
        answers: [
            { text: "Proving yourself.", house: "G" },
            { text: "Knowing everything.", house: "R" },
            { text: "Keeping everyone happy.", house: "H" },
            { text: "Having complete control.", house: "S" }
        ]
    },

    {
        question: "Which statement describes you best?",
        answers: [
            { text: "I can be impulsive, but I care deeply.", house: "G" },
            { text: "My mind rarely stops asking questions.", house: "R" },
            { text: "I remember how people make me feel.", house: "H" },
            { text: "I rarely show people everything I am thinking.", house: "S" }
        ]
    },

    {
        question: "If you could master one area of magic, what would you choose?",
        answers: [
            { text: "Defence Against the Dark Arts.", house: "G" },
            { text: "Transfiguration.", house: "R" },
            { text: "Herbology and healing.", house: "H" },
            { text: "Potions and advanced magical strategy.", house: "S" }
        ]
    },

    {
        question: "At your core, what do you want most?",
        answers: [
            { text: "To be brave enough to live fully.", house: "G" },
            { text: "To understand who you really are.", house: "R" },
            { text: "To love and be loved deeply.", house: "H" },
            { text: "To become everything you know you could be.", house: "S" }
        ]
    }

];


/* =========================================
   HOUSE DATA
========================================= */

const houses = {

    G: {
        name: "GRYFFINDOR",
        title: "The Courageous Heart",
        secondary: "Ravenclaw",
        colour: "var(--gryffindor)"
    },

    R: {
        name: "RAVENCLAW",
        title: "The Searching Mind",
        secondary: "Slytherin",
        colour: "var(--ravenclaw)"
    },

    H: {
        name: "HUFFLEPUFF",
        title: "The Loyal Heart",
        secondary: "Gryffindor",
        colour: "var(--hufflepuff)"
    },

    S: {
        name: "SLYTHERIN",
        title: "The Determined Mind",
        secondary: "Ravenclaw",
        colour: "var(--slytherin)"
    }

};


/* =========================================
   STATE
========================================= */

let selectedMode = 50;

let currentQuestion = 0;

let answersGiven = [];

let scores = {
    G: 0,
    R: 0,
    H: 0,
    S: 0
};


/* =========================================
   HELPERS
========================================= */

function $(id) {

    return document.getElementById(id);

}


function showScreen(id) {

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    const screen = $(id);

    if (screen) {

        screen.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

}


/* =========================================
   INITIAL PAGE STATE
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const hogwartsIntro = $("hogwartsIntro");

    const enterHogwartsBtn =
        $("enterHogwartsBtn");

    const letterScreen =
        $("letterScreen");


    /*
        Hide every normal screen at startup.
        This guarantees Hogwarts is the first
        visible screen.
    */

    document
        .querySelectorAll(".screen")
        .forEach(screen => {

            screen.classList.remove("active");

        });


    /*
        Make Hogwarts visible.
    */

    if (hogwartsIntro) {

        hogwartsIntro.classList.remove("hidden");

    }


    /*
        ENTER HOGWARTS
    */

    if (enterHogwartsBtn) {

        enterHogwartsBtn.addEventListener(
            "click",
            () => {

                hogwartsIntro.classList.add("hidden");


                /*
                    Wait for the Hogwarts fade-out.
                */

                setTimeout(() => {

                    if (letterScreen) {

                        letterScreen.classList.add("active");

                    }

                }, 1000);

            }
        );

    }

});


/* =========================================
   LETTER
========================================= */

const openLetter =
    $("openLetter");

const envelope =
    $("envelope");

const letterPrompt =
    $("letterPrompt");

const letterReveal =
    $("letterReveal");


if (openLetter) {

    openLetter.addEventListener(
        "click",
        () => {

            if (envelope) {

                envelope.classList.add("opened");

            }


            if (letterPrompt) {

                letterPrompt.textContent =
                    "The letter has been opened.";

            }


            openLetter.classList.add("hidden");


            if (letterReveal) {

                letterReveal.classList.remove("hidden");

            }

        }
    );

}


/* =========================================
   BEGIN SORTING
========================================= */

const openSorting =
    $("openSorting");


if (openSorting) {

    openSorting.addEventListener(
        "click",
        () => {

            showScreen("modeScreen");

        }
    );

}


/* =========================================
   MODE SELECTION
========================================= */

const modeCards =
    document.querySelectorAll(".mode-card");


modeCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            selectedMode =
                Number(card.dataset.mode);


            currentQuestion = 0;

            answersGiven = [];


            scores = {
                G: 0,
                R: 0,
                H: 0,
                S: 0
            };


            showScreen("quizScreen");

            renderQuestion();

        }
    );

});


/* =========================================
   RENDER QUESTION
========================================= */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    if (!question) {

        finishSorting();

        return;

    }


    const number =
        currentQuestion + 1;


    $("questionNumber").textContent =
        `Question ${number} of ${selectedMode}`;


    $("progressBar").style.width =
        `${(number / selectedMode) * 100}%`;


    $("questionText").textContent =
        question.question;


    const answersContainer =
        $("answersContainer");


    answersContainer.innerHTML = "";


    question.answers.forEach(
        (answer, index) => {

            const button =
                document.createElement("button");


            button.className =
                "answer-button";


            button.textContent =
                answer.text;


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        answer,
                        index
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );


    $("backButton").style.visibility =
        currentQuestion === 0
            ? "hidden"
            : "visible";

}


/* =========================================
   SELECT ANSWER
========================================= */

function selectAnswer(answer, index) {

    answersGiven[currentQuestion] = {
        answer: answer,
        index: index
    };


    scores[answer.house]++;


    currentQuestion++;


    if (currentQuestion >= selectedMode) {

        finishSorting();

        return;

    }


    renderQuestion();

}


/* =========================================
   BACK BUTTON
========================================= */

const backButton =
    $("backButton");


if (backButton) {

    backButton.addEventListener(
        "click",
        () => {

            if (currentQuestion <= 0) {

                return;

            }


            /*
                Remove the previous answer's score.
            */

            const previous =
                answersGiven[currentQuestion - 1];


            if (previous) {

                scores[
                    previous.answer.house
                ]--;

            }


            currentQuestion--;


            renderQuestion();

        }
    );

}


/* =========================================
   CALCULATE SCORES
========================================= */

function calculateScores() {

    scores = {
        G: 0,
        R: 0,
        H: 0,
        S: 0
    };


    answersGiven.forEach(item => {

        if (item && item.answer) {

            scores[item.answer.house]++;

        }

    });

}


/* =========================================
   DETERMINE HOUSE
========================================= */

function determineHouse() {

    calculateScores();


    const order = [
        "G",
        "R",
        "H",
        "S"
    ];


    let winningHouse = order[0];


    order.forEach(house => {

        if (
            scores[house] >
            scores[winningHouse]
        ) {

            winningHouse = house;

        }

    });


    return winningHouse;

}


/* =========================================
   SECONDARY HOUSE
========================================= */

function determineSecondary(primary) {

    const order = [
        "G",
        "R",
        "H",
        "S"
    ];


    const remaining =
        order.filter(
            house => house !== primary
        );


    remaining.sort(
        (a, b) =>
            scores[b] - scores[a]
    );


    return remaining[0];

}


/* =========================================
   PERSONALITY
========================================= */

function getPersonality(house) {

    const personalities = {

        G:
            "You are driven by courage, instinct and the refusal to stand quietly when something matters.",

        R:
            "You possess a restless mind, a hunger for understanding and a tendency to notice what others overlook.",

        H:
            "You value loyalty, emotional connection and the quiet strength of being there when people need you.",

        S:
            "You are determined, strategic and deeply aware of what you want. You rarely reveal your entire hand."

    };


    return personalities[house];

}


/* =========================================
   SORTING HAT MONOLOGUE
========================================= */

function getMonologue(
    house,
    secondary
) {

    const monologues = {

        G: `
            Ahhh... now this is interesting.

            There is fire here. Not merely the loud,
            reckless sort of courage, but the kind that
            appears when something truly matters.

            You may doubt yourself. You may hesitate.
            But when the moment finally arrives, some part
            of you still wants to stand up.

            You value people. You value meaning.
            And somewhere beneath everything else,
            there is a stubborn refusal to let fear
            make your decisions for you.

            Yes... I know exactly where to put you.

            <strong>GRYFFINDOR!</strong>
        `,

        R: `
            Hmm...

            A fascinating mind.

            You do not simply accept the world as it is.
            You question it. Examine it. Turn it around
            until you understand another side.

            Curiosity is not merely an interest for you.
            It is part of how you navigate life.

            And yet there is more here than intelligence.
            There is independence. A desire to understand
            yourself as much as the world around you.

            Yes...

            <strong>RAVENCLAW!</strong>
        `,

        H: `
            Ahhh...

            What a heart.

            You notice people. You remember what they said,
            what they needed, and sometimes even what they
            never managed to say.

            There is strength in that, although you may
            occasionally underestimate it.

            Loyalty matters enormously to you.
            You want people to feel safe with you,
            and you want somewhere in this enormous world
            where you can feel safe too.

            There is no question.

            <strong>HUFFLEPUFF!</strong>
        `,

        S: `
            Well, well...

            Now here is someone who knows there is more
            waiting for them.

            You possess ambition, but it is not simply
            about collecting power. You want freedom,
            achievement and the ability to shape your
            own life.

            You understand that the world does not always
            reward innocence. You observe. You remember.
            And when necessary, you adapt.

            There is determination here.

            Quite unmistakable.

            <strong>SLYTHERIN!</strong>
        `

    };


    return monologues[house];

}


/* =========================================
   FINISH SORTING
========================================= */

function finishSorting() {

    showScreen("thinkingScreen");


    const thinkingTitle =
        $("thinkingTitle");

    const thinkingText =
        $("thinkingText");


    const messages = [

        [
            "Hmm...",
            "Interesting..."
        ],

        [
            "Very interesting...",
            "There is rather more to you than first appears."
        ],

        [
            "I see...",
            "Your choices are beginning to tell me something."
        ],

        [
            "Oh my...",
            "This is becoming quite clear."
        ]

    ];


    let index = 0;


    const interval =
        setInterval(
            () => {

                thinkingTitle.textContent =
                    messages[index][0];

                thinkingText.textContent =
                    messages[index][1];

                index++;


                if (index >= messages.length) {

                    clearInterval(interval);

                }

            },
            900
        );


    setTimeout(
        () => {

            clearInterval(interval);

            revealResult();

        },
        5000
    );

}


/* =========================================
   REVEAL RESULT
========================================= */

function revealResult() {

    const primary =
        determineHouse();


    const secondary =
        determineSecondary(primary);


    const house =
        houses[primary];


    $("resultHouse").textContent =
        house.name;


    $("resultPersonality").textContent =
        house.title;


    $("resultSecondary").textContent =
        `Your secondary house is ${houses[secondary].name}.`;


    $("hatMonologue").innerHTML =
        getMonologue(
            primary,
            secondary
        );


    /*
        Personality sentence
        appears above the Hat monologue.
    */

    const personality =
        getPersonality(primary);


    $("resultPersonality").textContent =
        personality;


    const total =
        selectedMode;


    const percentages = {

        G:
            Math.round(
                (scores.G / total) * 100
            ),

        R:
            Math.round(
                (scores.R / total) * 100
            ),

        H:
            Math.round(
                (scores.H / total) * 100
            ),

        S:
            Math.round(
                (scores.S / total) * 100
            )

    };


    $("scoreG").style.width =
        `${percentages.G}%`;

    $("scoreR").style.width =
        `${percentages.R}%`;

    $("scoreH").style.width =
        `${percentages.H}%`;

    $("scoreS").style.width =
        `${percentages.S}%`;


    $("scoreGText").textContent =
        `${percentages.G}%`;

    $("scoreRText").textContent =
        `${percentages.R}%`;

    $("scoreHText").textContent =
        `${percentages.H}%`;

    $("scoreSText").textContent =
        `${percentages.S}%`;


    showScreen("resultScreen");

}


/* =========================================
   SHARE RESULT
========================================= */

const shareResult =
    $("shareResult");


if (shareResult) {

    shareResult.addEventListener(
        "click",
        async () => {

            const house =
                $("resultHouse").textContent;


            const text =
                `The Sorting Hat has placed me in ${house}! ✨\n\nTake the Hogwarts Sorting Ceremony yourself.`;


            if (
                navigator.share
            ) {

                try {

                    await navigator.share({
                        title:
                            "My Hogwarts Sorting",
                        text:
                            text
                    });

                }
                catch (error) {

                    /*
                        User cancelled sharing.
                    */

                }

            }
            else {

                try {

                    await navigator.clipboard.writeText(
                        text
                    );

                    shareResult.textContent =
                        "Copied!";

                    setTimeout(
                        () => {

                            shareResult.textContent =
                                "Share My Sorting";

                        },
                        1800
                    );

                }
                catch (error) {

                    alert(text);

                }

            }

        }
    );

}


/* =========================================
   RESTART
========================================= */

const restartSorting =
    $("restartSorting");


if (restartSorting) {

    restartSorting.addEventListener(
        "click",
        () => {

            currentQuestion = 0;

            answersGiven = [];

            scores = {
                G: 0,
                R: 0,
                H: 0,
                S: 0
            };


            showScreen("modeScreen");

        }
    );

}


/* =========================================
   PREVENT ACCIDENTAL PAGE LEAVE
========================================= */

window.addEventListener(
    "beforeunload",
    () => {

        /*
            Intentionally left empty.
            This keeps the application simple
            and compatible with GitHub Pages.
        */

    }
);
