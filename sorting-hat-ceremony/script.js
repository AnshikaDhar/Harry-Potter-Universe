/* =========================================================
   HOGWARTS SORTING CEREMONY
   ========================================================= */


/* =========================================================
   QUESTIONS
   ========================================================= */

const questions = [

    {
        q: "You discover a locked door in Hogwarts that you have never seen before. What do you do?",
        a: [
            ["Try to open it immediately.", "G"],
            ["Study the lock and figure out how it works.", "R"],
            ["Find out who owns the room before entering.", "H"],
            ["Look for a way to use whatever is inside to your advantage.", "S"]
        ]
    },

    {
        q: "Which quality matters most in a person?",
        a: [
            ["Courage", "G"],
            ["Intelligence", "R"],
            ["Loyalty", "H"],
            ["Ambition", "S"]
        ]
    },

    {
        q: "A friend is being treated unfairly. You...",
        a: [
            ["Step in immediately.", "G"],
            ["Work out the smartest way to challenge it.", "R"],
            ["Stay beside your friend no matter what.", "H"],
            ["Make sure the person responsible regrets it.", "S"]
        ]
    },

    {
        q: "You are given one extraordinary magical ability. Which do you choose?",
        a: [
            ["Fearlessness", "G"],
            ["Perfect memory", "R"],
            ["Healing", "H"],
            ["Influence over others", "S"]
        ]
    },

    {
        q: "When making an important decision, you trust...",
        a: [
            ["Your instincts", "G"],
            ["Evidence and reasoning", "R"],
            ["Your values", "H"],
            ["Your long-term goals", "S"]
        ]
    },

    {
        q: "Which would frustrate you most?",
        a: [
            ["Someone refusing to stand up for themselves.", "G"],
            ["Someone confidently spreading misinformation.", "R"],
            ["Someone betraying a friend.", "H"],
            ["Someone wasting a valuable opportunity.", "S"]
        ]
    },

    {
        q: "What would you rather be remembered for?",
        a: [
            ["Being brave.", "G"],
            ["Being brilliant.", "R"],
            ["Being kind.", "H"],
            ["Being successful.", "S"]
        ]
    },

    {
        q: "You fail at something important. Your first reaction is...",
        a: [
            ["Try again immediately.", "G"],
            ["Figure out exactly what went wrong.", "R"],
            ["Talk to someone you trust.", "H"],
            ["Find another route to the same goal.", "S"]
        ]
    },

    {
        q: "Someone underestimates you. What do you do?",
        a: [
            ["Prove them wrong openly.", "G"],
            ["Let your ability speak for itself.", "R"],
            ["Ignore them and stay grounded.", "H"],
            ["Remember it and use it as motivation.", "S"]
        ]
    },

    {
        q: "Which environment appeals to you most?",
        a: [
            ["A lively common room full of stories.", "G"],
            ["A vast library with hidden knowledge.", "R"],
            ["A warm room surrounded by friends.", "H"],
            ["A private room with a view of the castle.", "S"]
        ]
    },

    {
        q: "If rules prevent you from doing what you believe is right...",
        a: [
            ["Break them.", "G"],
            ["Question whether the rule actually makes sense.", "R"],
            ["Find a peaceful solution.", "H"],
            ["Find a loophole.", "S"]
        ]
    },

    {
        q: "What kind of challenge attracts you?",
        a: [
            ["Something dangerous.", "G"],
            ["Something intellectually difficult.", "R"],
            ["Something requiring patience.", "H"],
            ["Something that could change your future.", "S"]
        ]
    },

    {
        q: "Your greatest strength is probably...",
        a: [
            ["Boldness", "G"],
            ["Curiosity", "R"],
            ["Reliability", "H"],
            ["Determination", "S"]
        ]
    },

    {
        q: "Which flaw would you most dislike having?",
        a: [
            ["Cowardice", "G"],
            ["Ignorance", "R"],
            ["Disloyalty", "H"],
            ["Powerlessness", "S"]
        ]
    },

    {
        q: "You have one free evening at Hogwarts. You...",
        a: [
            ["Explore somewhere forbidden.", "G"],
            ["Read about an obscure magical subject.", "R"],
            ["Spend it with friends.", "H"],
            ["Work toward a personal goal.", "S"]
        ]
    },

    {
        q: "A powerful person offers you an opportunity. You...",
        a: [
            ["Ask what you can accomplish with it.", "G"],
            ["Ask how it works.", "R"],
            ["Ask whether it is fair.", "H"],
            ["Ask what it could lead to.", "S"]
        ]
    },

    {
        q: "What scares you more?",
        a: [
            ["Being unable to act.", "G"],
            ["Never understanding something important.", "R"],
            ["Losing people you love.", "H"],
            ["Never reaching your potential.", "S"]
        ]
    },

    {
        q: "When someone you care about makes a terrible decision...",
        a: [
            ["Tell them directly.", "G"],
            ["Explain why their reasoning is flawed.", "R"],
            ["Support them while they recover.", "H"],
            ["Help them turn the situation around.", "S"]
        ]
    },

    {
        q: "Which sentence sounds most like you?",
        a: [
            ["Someone has to be willing to act.", "G"],
            ["There is always more to learn.", "R"],
            ["People matter more than winning.", "H"],
            ["I want more from life.", "S"]
        ]
    },

    {
        q: "If you could witness one moment from history...",
        a: [
            ["A legendary battle.", "G"],
            ["A great discovery.", "R"],
            ["An important human reunion.", "H"],
            ["The rise of a powerful leader.", "S"]
        ]
    },

    {
        q: "You are placed in charge of a group. Your instinct is to...",
        a: [
            ["Lead from the front.", "G"],
            ["Create the best strategy.", "R"],
            ["Make sure everyone is heard.", "H"],
            ["Set ambitious goals.", "S"]
        ]
    },

    {
        q: "What makes someone truly impressive?",
        a: [
            ["They remain brave under pressure.", "G"],
            ["They can understand things others cannot.", "R"],
            ["They remain good despite hardship.", "H"],
            ["They can turn ambition into results.", "S"]
        ]
    },

    {
        q: "You find a mysterious magical object. You...",
        a: [
            ["Touch it.", "G"],
            ["Research it.", "R"],
            ["Ask whether it could hurt anyone.", "H"],
            ["Wonder what it could be worth.", "S"]
        ]
    },

    {
        q: "Which compliment would mean the most?",
        a: [
            ["You are fearless.", "G"],
            ["You are exceptionally clever.", "R"],
            ["You are someone I can always count on.", "H"],
            ["You are going places.", "S"]
        ]
    },

    {
        q: "What do you do when you disagree with someone?",
        a: [
            ["Say what you think.", "G"],
            ["Debate the reasoning.", "R"],
            ["Try to understand their side.", "H"],
            ["Choose your battles carefully.", "S"]
        ]
    },

    {
        q: "Your ideal victory is...",
        a: [
            ["Winning against the odds.", "G"],
            ["Solving the impossible.", "R"],
            ["Everyone succeeding together.", "H"],
            ["Achieving something nobody expected.", "S"]
        ]
    },

    {
        q: "Which magical subject would you enjoy most?",
        a: [
            ["Defence Against the Dark Arts.", "G"],
            ["Ancient Runes.", "R"],
            ["Herbology.", "H"],
            ["Potions.", "S"]
        ]
    },

    {
        q: "When faced with uncertainty, you usually...",
        a: [
            ["Take the leap.", "G"],
            ["Gather more information.", "R"],
            ["Wait until you feel secure.", "H"],
            ["Calculate the risk.", "S"]
        ]
    },

    {
        q: "Which matters more?",
        a: [
            ["Freedom", "G"],
            ["Truth", "R"],
            ["Belonging", "H"],
            ["Achievement", "S"]
        ]
    },

    {
        q: "Someone insults you publicly. You...",
        a: [
            ["Confront them.", "G"],
            ["Give them a devastatingly logical response.", "R"],
            ["Refuse to give them power over you.", "H"],
            ["Remember it and move strategically.", "S"]
        ]
    },

    {
        q: "If you had to choose one motto...",
        a: [
            ["Fortune favours the brave.", "G"],
            ["Knowledge is power.", "R"],
            ["No one gets left behind.", "H"],
            ["Make your own destiny.", "S"]
        ]
    },

    {
        q: "What kind of person do you admire?",
        a: [
            ["Someone who risks everything for others.", "G"],
            ["Someone who thinks differently.", "R"],
            ["Someone who never abandons people.", "H"],
            ["Someone who builds something extraordinary.", "S"]
        ]
    },

    {
        q: "You have discovered a secret. You...",
        a: [
            ["Tell someone who needs to know.", "G"],
            ["Investigate it further.", "R"],
            ["Protect the people involved.", "H"],
            ["Keep it until the right moment.", "S"]
        ]
    },

    {
        q: "Which would you choose?",
        a: [
            ["A dangerous adventure.", "G"],
            ["A mysterious puzzle.", "R"],
            ["A peaceful evening with people you love.", "H"],
            ["A rare opportunity for advancement.", "S"]
        ]
    },

    {
        q: "What makes a good leader?",
        a: [
            ["Courage", "G"],
            ["Wisdom", "R"],
            ["Empathy", "H"],
            ["Vision", "S"]
        ]
    },

    {
        q: "You are faced with an impossible task. Your response?",
        a: [
            ["I'll try anyway.", "G"],
            ["There must be a solution.", "R"],
            ["I'll find someone to help.", "H"],
            ["I'll find a different approach.", "S"]
        ]
    },

    {
        q: "Which temptation would be hardest to resist?",
        a: [
            ["The chance to prove yourself.", "G"],
            ["Forbidden knowledge.", "R"],
            ["Helping someone you care about.", "H"],
            ["Unlimited influence.", "S"]
        ]
    },

    {
        q: "What do you value most in friendship?",
        a: [
            ["Someone who stands beside you.", "G"],
            ["Someone who challenges your thinking.", "R"],
            ["Someone who never leaves.", "H"],
            ["Someone who pushes you to grow.", "S"]
        ]
    },

    {
        q: "When you enter a new room, you notice...",
        a: [
            ["What could be dangerous.", "G"],
            ["Interesting details.", "R"],
            ["Who looks comfortable or uncomfortable.", "H"],
            ["Who seems important.", "S"]
        ]
    },

    {
        q: "What would you rather possess?",
        a: [
            ["Courage that never fails.", "G"],
            ["Infinite knowledge.", "R"],
            ["A loyal circle of people.", "H"],
            ["The ability to shape your destiny.", "S"]
        ]
    },

    {
        q: "When plans suddenly change...",
        a: [
            ["Adapt and move.", "G"],
            ["Figure out why.", "R"],
            ["Make sure everyone is okay.", "H"],
            ["Look for a better opportunity.", "S"]
        ]
    },

    {
        q: "What is more dangerous?",
        a: [
            ["Fear", "G"],
            ["Ignorance", "R"],
            ["Indifference", "H"],
            ["Lack of ambition", "S"]
        ]
    },

    {
        q: "You get one chance to change something about yourself. You choose...",
        a: [
            ["Become more fearless.", "G"],
            ["Become more knowledgeable.", "R"],
            ["Become more patient.", "H"],
            ["Become more powerful.", "S"]
        ]
    },

    {
        q: "What would you defend even at great personal cost?",
        a: [
            ["Someone innocent.", "G"],
            ["The truth.", "R"],
            ["Someone you love.", "H"],
            ["Something you have worked years to build.", "S"]
        ]
    },

    {
        q: "How do you react to competition?",
        a: [
            ["Bring it on.", "G"],
            ["Study your opponent.", "R"],
            ["Keep things friendly.", "H"],
            ["Find a way to win.", "S"]
        ]
    },

    {
        q: "Which quality would you secretly like more of?",
        a: [
            ["Boldness", "G"],
            ["Confidence in your knowledge.", "R"],
            ["Patience", "H"],
            ["Influence", "S"]
        ]
    },

    {
        q: "What kind of legacy matters?",
        a: [
            ["Stories people tell about your courage.", "G"],
            ["Ideas that outlive you.", "R"],
            ["People whose lives you improved.", "H"],
            ["Something significant that you built.", "S"]
        ]
    },

    {
        q: "When you are completely alone, what do you naturally do?",
        a: [
            ["Plan your next adventure.", "G"],
            ["Think deeply or read.", "R"],
            ["Think about people you care about.", "H"],
            ["Think about your future.", "S"]
        ]
    },

    {
        q: "If you could ask the Sorting Hat one question, what would it be?",
        a: [
            ["Am I brave enough?", "G"],
            ["What do you see that I don't?", "R"],
            ["Where will I belong?", "H"],
            ["What am I capable of becoming?", "S"]
        ]
    },

    {
        q: "What do you think people misunderstand about you?",
        a: [
            ["They mistake courage for recklessness.", "G"],
            ["They mistake thoughtfulness for detachment.", "R"],
            ["They mistake kindness for weakness.", "H"],
            ["They mistake ambition for selfishness.", "S"]
        ]
    },

    {
        q: "At the end of your Hogwarts years, what would you want to say?",
        a: [
            ["I dared to do things.", "G"],
            ["I learned something extraordinary.", "R"],
            ["I found people who became family.", "H"],
            ["I became the person I wanted to be.", "S"]
        ]
    },

    {
        q: "Finally, what guides you most?",
        a: [
            ["My heart.", "G"],
            ["My mind.", "R"],
            ["My people.", "H"],
            ["My ambition.", "S"]
        ]
    }

];


/* =========================================================
   STATE
   ========================================================= */

let selectedMode = 50;

let currentQuestion = 0;

let answersGiven = [];

let scores = {
    G: 0,
    R: 0,
    H: 0,
    S: 0
};


/* =========================================================
   HELPER
   ========================================================= */

const $ = (id) =>
    document.getElementById(id);


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


/* =========================================================
   INITIAL LOAD
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        document
            .querySelectorAll(".screen")
            .forEach(screen => {

                screen.classList.remove("active");

            });


        const intro =
            $("hogwartsIntro");


        if (intro) {

            intro.classList.remove("hidden");

        }


        /* ENTER HOGWARTS */

        const enterButton =
            $("enterHogwartsBtn");


        if (enterButton) {

            enterButton.addEventListener(
                "click",
                () => {

                    intro.classList.add("hidden");


                    setTimeout(
                        () => {

                            showScreen(
                                "letterScreen"
                            );

                        },
                        900
                    );

                }
            );

        }


        /* =================================================
           OPEN LETTER
        ================================================= */

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

                    if (!envelope) {
                        return;
                    }


                    if (
                        envelope.classList.contains(
                            "opened"
                        )
                    ) {
                        return;
                    }


                    /* Open flap */
                    envelope.classList.add(
                        "opened"
                    );


                    if (letterPrompt) {

                        letterPrompt.textContent =
                            "The letter has been opened.";

                    }


                    /* Hide open button */
                    openLetter.classList.add(
                        "hidden"
                    );


                    /* Reveal sorting button */
                    setTimeout(
                        () => {

                            if (letterReveal) {

                                letterReveal.classList.remove(
                                    "hidden"
                                );

                            }

                        },
                        850
                    );

                }
            );

        }


        /* BEGIN SORTING */

        const openSorting =
            $("openSorting");


        if (openSorting) {

            openSorting.addEventListener(
                "click",
                () => {

                    showScreen(
                        "modeScreen"
                    );

                }
            );

        }


        /* MODE SELECTION */

        document
            .querySelectorAll(".mode-card")
            .forEach(card => {

                card.addEventListener(
                    "click",
                    () => {

                        selectedMode =
                            Number(
                                card.dataset.mode
                            );

                        startSorting();

                    }
                );

            });


        /* BACK */

        const backButton =
            $("backButton");


        if (backButton) {

            backButton.addEventListener(
                "click",
                () => {

                    if (
                        currentQuestion <= 0
                    ) {
                        return;
                    }


                    const previousAnswer =
                        answersGiven[
                            currentQuestion - 1
                        ];


                    if (previousAnswer) {

                        scores[
                            previousAnswer
                        ]--;

                        answersGiven[
                            currentQuestion - 1
                        ] = null;

                    }


                    currentQuestion--;

                    renderQuestion();

                }
            );

        }


        /* SHARE */

        const shareButton =
            $("shareResult");


        if (shareButton) {

            shareButton.addEventListener(
                "click",
                shareResult
            );

        }


        /* RESTART */

        const restartButton =
            $("restartSorting");


        if (restartButton) {

            restartButton.addEventListener(
                "click",
                () => {

                    resetSorting();

                    showScreen(
                        "modeScreen"
                    );

                }
            );

        }

    }
);


/* =========================================================
   START SORTING
   ========================================================= */

function startSorting() {

    currentQuestion = 0;

    answersGiven = [];

    scores = {
        G: 0,
        R: 0,
        H: 0,
        S: 0
    };

    showScreen(
        "quizScreen"
    );

    renderQuestion();

}


/* =========================================================
   RENDER QUESTION
   ========================================================= */

function renderQuestion() {

    const question =
        questions[currentQuestion];


    if (!question) {

        finishSorting();

        return;

    }


    const questionNumber =
        $("questionNumber");

    const questionText =
        $("questionText");

    const answersContainer =
        $("answersContainer");

    const progressBar =
        $("progressBar");


    questionNumber.textContent =
        `Question ${currentQuestion + 1} of ${selectedMode}`;


    questionText.textContent =
        question.q;


    answersContainer.innerHTML =
        "";


    const progress =
        (
            currentQuestion /
            selectedMode
        ) * 100;


    progressBar.style.width =
        `${progress}%`;


    question.a.forEach(
        answer => {

            const button =
                document.createElement(
                    "button"
                );


            button.className =
                "answer-button";


            button.textContent =
                answer[0];


            button.addEventListener(
                "click",
                () => {

                    selectAnswer(
                        answer[1]
                    );

                }
            );


            answersContainer.appendChild(
                button
            );

        }
    );

}


/* =========================================================
   ANSWER
   ========================================================= */

function selectAnswer(house) {

    scores[house]++;

    answersGiven[
        currentQuestion
    ] = house;

    currentQuestion++;


    if (
        currentQuestion >=
        selectedMode
    ) {

        finishSorting();

    } else {

        renderQuestion();

    }

}


/* =========================================================
   FINISH
   ========================================================= */

function finishSorting() {

    $("progressBar").style.width =
        "100%";


    showScreen(
        "thinkingScreen"
    );


    const thinkingTitles = [

        "Hmm...",

        "Interesting...",

        "Very interesting...",

        "I see...",

        "There is more here than meets the eye...",

        "Your choices tell me quite a lot..."

    ];


    const thinkingTexts = [

        "I see something rather interesting...",

        "There are qualities here worth considering...",

        "Your instincts have spoken...",

        "Not everything is quite as simple as it first appears...",

        "Let me look a little deeper...",

        "Ah... now I begin to understand..."

    ];


    let index = 0;


    const thinkingInterval =
        setInterval(
            () => {

                $("thinkingTitle").textContent =
                    thinkingTitles[
                        index %
                        thinkingTitles.length
                    ];


                $("thinkingText").textContent =
                    thinkingTexts[
                        index %
                        thinkingTexts.length
                    ];


                index++;

            },
            750
        );


    setTimeout(
        () => {

            clearInterval(
                thinkingInterval
            );

            revealResult();

        },
        4300
    );

}


/* =========================================================
   DETERMINE HOUSE
   ========================================================= */

function determineHouse() {

    const entries =
        Object.entries(scores);


    const order =
        ["G", "R", "H", "S"];


    entries.sort(
        (a, b) => {

            if (
                b[1] !== a[1]
            ) {

                return b[1] - a[1];

            }


            return (
                order.indexOf(a[0]) -
                order.indexOf(b[0])
            );

        }
    );


    return entries[0][0];

}


function determineSecondary(primary) {

    const entries =
        Object.entries(scores)
            .filter(
                ([house]) =>
                    house !== primary
            )
            .sort(
                (a, b) =>
                    b[1] - a[1]
            );


    return entries[0][0];

}


/* =========================================================
   HOUSE DATA
   ========================================================= */

const houseNames = {

    G: "GRYFFINDOR",

    R: "RAVENCLAW",

    H: "HUFFLEPUFF",

    S: "SLYTHERIN"

};


const personalities = {

    G: "The Courageous Heart",

    R: "The Brilliant Mind",

    H: "The Loyal Heart",

    S: "The Ambitious Mind"

};


const monologues = {

    G: [

        "Ah... courage. Not the absence of fear, no. Something more interesting than that. You feel fear and still move forward. You have a tendency to act when others hesitate, and though that may sometimes get you into trouble, it is also what makes you remarkable.",

        "There is fire in you. You care deeply, and when something matters to you, you find it difficult to remain on the sidelines. You may question yourself afterwards, but in the moment that matters, you are capable of choosing the brave path."

    ],

    R: [

        "Curious. Very curious. Your mind does not simply accept the world as it is presented to you. You examine it, question it, turn it over and look at it from another angle. You seek understanding, not merely answers.",

        "There is a quiet hunger for knowledge here. You notice patterns, inconsistencies and details others overlook. You may spend longer thinking than acting, but when you finally move, you usually know exactly why."

    ],

    H: [

        "Ah, loyalty. A quality often underestimated by those who have never truly needed it. You understand that people matter. You remember kindness, you remember betrayal, and once someone has earned a place in your heart, you do not surrender it easily.",

        "There is warmth beneath your choices. You value trust, consistency and genuine connection. You may not always demand the spotlight, but you are often the person others quietly depend upon."

    ],

    S: [

        "Ambition. There it is. You know there is more you could become, and the idea of settling for less does not sit comfortably with you. You are strategic, observant and considerably more determined than you sometimes let people see.",

        "You understand that wanting something is only the beginning. You think about timing, opportunity and consequences. Some may mistake that calculation for coldness, but I see something else: a refusal to leave your potential unused."

    ]

};


/* =========================================================
   RESULT
   ========================================================= */

function revealResult() {

    const primary =
        determineHouse();


    const secondary =
        determineSecondary(
            primary
        );


    $("resultHouse").textContent =
        houseNames[primary];


    $("resultPersonality").textContent =
        personalities[primary];


    $("resultSecondary").textContent =
        `Your secondary house is ${houseNames[secondary]}.`;


    const options =
        monologues[primary];


    const monologue =
        options[
            Math.floor(
                Math.random() *
                options.length
            )
        ];


    $("hatMonologue").textContent =
        monologue;


    updateScore(
        "G",
        "scoreG",
        "scoreGText"
    );

    updateScore(
        "R",
        "scoreR",
        "scoreRText"
    );

    updateScore(
        "H",
        "scoreH",
        "scoreHText"
    );

    updateScore(
        "S",
        "scoreSText"
    );


    showScreen(
        "resultScreen"
    );

}


/* =========================================================
   SCORE
   ========================================================= */

function updateScore(
    house,
    barId,
    textId
) {

    const total =
        Object.values(scores)
            .reduce(
                (sum, value) =>
                    sum + value,
                0
            );


    let percentage = 0;


    if (total > 0) {

        percentage =
            Math.round(
                (
                    scores[house] /
                    total
                ) * 100
            );

    }


    setTimeout(
        () => {

            $(barId).style.width =
                `${percentage}%`;

        },
        250
    );


    $(textId).textContent =
        `${percentage}%`;

}


/* =========================================================
   SHARE
   ========================================================= */

function shareResult() {

    const house =
        $("resultHouse")
            .textContent;


    const text =
        `The Sorting Hat has sorted me into ${house}!`;


    if (
        navigator.share
    ) {

        navigator.share({

            title:
                "My Hogwarts Sorting",

            text:
                text

        }).catch(
            () => {}
        );

    } else {

        navigator
            .clipboard
            .writeText(text)
            .then(
                () => {

                    alert(
                        "Your Sorting result has been copied!"
                    );

                }
            )
            .catch(
                () => {

                    alert(text);

                }
            );

    }

}


/* =========================================================
   RESET
   ========================================================= */

function resetSorting() {

    currentQuestion = 0;

    answersGiven = [];

    scores = {
        G: 0,
        R: 0,
        H: 0,
        S: 0
    };


    $("scoreG").style.width =
        "0%";

    $("scoreR").style.width =
        "0%";

    $("scoreH").style.width =
        "0%";

    $("scoreS").style.width =
        "0%";

}
