/* =========================================================
   HOGWARTS SORTING CEREMONY
   CLIENT-SIDE SORTING ENGINE
========================================================= */


/* =========================================================
   QUESTIONS

   Every answer has explicit deterministic House points.

   G = Gryffindor
   R = Ravenclaw
   H = Hufflepuff
   S = Slytherin

   The user never sees these scores.
========================================================= */

const questions = [

  {
    category: "COURAGE",
    text: "You see someone being publicly humiliated by a popular student. What do you do?",
    answers: [
      {
        text: "Step in immediately, even if it makes you a target.",
        score: { G: 4 }
      },
      {
        text: "Intervene calmly, using the strongest argument you can find.",
        score: { R: 3, G: 2 }
      },
      {
        text: "Stay beside the person being humiliated and make sure they aren't alone.",
        score: { H: 4 }
      },
      {
        text: "Find a way to stop the situation without putting yourself unnecessarily at risk.",
        score: { S: 3, R: 1 }
      }
    ]
  },

  {
    category: "TRUTH",
    text: "Your closest friend has done something seriously wrong, and an innocent person may take the blame. What do you do?",
    answers: [
      {
        text: "Tell the truth, even if it destroys the friendship.",
        score: { G: 4, R: 1 }
      },
      {
        text: "First establish exactly what happened before deciding what to reveal.",
        score: { R: 4 }
      },
      {
        text: "Confront your friend privately and try to make them correct it themselves.",
        score: { H: 3, G: 2 }
      },
      {
        text: "Protect your friend unless the consequences for the innocent person become severe.",
        score: { S: 2, H: 2 }
      }
    ]
  },

  {
    category: "LOYALTY",
    text: "Someone you dislike trusts you with a deeply damaging secret. What do you do?",
    answers: [
      {
        text: "Keep it completely private. Their trust is still their trust.",
        score: { H: 4 }
      },
      {
        text: "Keep it private, but remember what it tells you about them.",
        score: { R: 3 }
      },
      {
        text: "Use the information only if they later seriously threaten someone.",
        score: { S: 3, G: 1 }
      },
      {
        text: "Tell someone if keeping the secret would allow serious harm.",
        score: { G: 3, H: 1 }
      }
    ]
  },

  {
    category: "AMBITION",
    text: "Which future would tempt you most?",
    answers: [
      {
        text: "A life remembered for extraordinary courage and meaningful deeds.",
        score: { G: 4 }
      },
      {
        text: "A life of exceptional knowledge, mastery and intellectual achievement.",
        score: { R: 4 }
      },
      {
        text: "A deeply loving life surrounded by people who genuinely matter to you.",
        score: { H: 4 }
      },
      {
        text: "A life of extraordinary achievement, influence and independence.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "POWER",
    text: "You discover a spell powerful enough to reshape society. What would you do?",
    answers: [
      {
        text: "Use it to fight injustice, even if the consequences are uncertain.",
        score: { G: 4 }
      },
      {
        text: "Study it thoroughly before deciding whether it should ever be used.",
        score: { R: 4 }
      },
      {
        text: "Use it only if it can protect ordinary people from suffering.",
        score: { H: 4 }
      },
      {
        text: "Use it strategically to repair broken systems and gain the influence needed to maintain them.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "FAILURE",
    text: "You work hard for something and someone else succeeds effortlessly. What is your first instinct?",
    answers: [
      {
        text: "Try again. I refuse to let one failure define me.",
        score: { G: 4 }
      },
      {
        text: "Study exactly why they succeeded and where my approach failed.",
        score: { R: 4 }
      },
      {
        text: "Accept it and keep improving without turning it into a rivalry.",
        score: { H: 3, R: 1 }
      },
      {
        text: "Figure out what they did differently and use that knowledge to surpass the result.",
        score: { S: 3, R: 1 }
      }
    ]
  },

  {
    category: "MORALITY",
    text: "A Hogwarts rule is clearly unfair and prevents you from helping someone who has been wronged. What do you do?",
    answers: [
      {
        text: "Break the rule and help them.",
        score: { G: 4 }
      },
      {
        text: "Find evidence proving the rule is unjust and challenge it properly.",
        score: { R: 4 }
      },
      {
        text: "Help the person while minimizing the risk to everyone involved.",
        score: { H: 4 }
      },
      {
        text: "Find a legitimate loophole that gets the result without openly breaking the rule.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "RELATIONSHIPS",
    text: "What kind of friendships do you value most?",
    answers: [
      {
        text: "Friends who would stand beside me when everything goes wrong.",
        score: { G: 4 }
      },
      {
        text: "Friends with whom I can discuss ideas for hours.",
        score: { R: 4 }
      },
      {
        text: "A small circle of people who genuinely know and love me.",
        score: { H: 4 }
      },
      {
        text: "Friends who challenge me, understand my ambitions and help me grow.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "DECISIONS",
    text: "You have a major decision to make. What is your natural approach?",
    answers: [
      {
        text: "Listen to my instincts and commit.",
        score: { G: 4 }
      },
      {
        text: "Gather information and analyze every important factor.",
        score: { R: 4 }
      },
      {
        text: "Consider how the decision will affect the people I care about.",
        score: { H: 4 }
      },
      {
        text: "Compare the possible outcomes and choose the option with the strongest advantage.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "RISK",
    text: "A rare opportunity has a 30% chance of changing your life. What do you do?",
    answers: [
      {
        text: "Take it. I'd rather risk failure than wonder what could have happened.",
        score: { G: 4 }
      },
      {
        text: "Calculate whether the 30% is realistic before committing.",
        score: { R: 4 }
      },
      {
        text: "Take it only if failure won't seriously hurt the people depending on me.",
        score: { H: 4 }
      },
      {
        text: "Look for a way to increase the odds before taking the opportunity.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "KNOWLEDGE",
    text: "You accidentally discover a secret piece of information about someone. What is your instinct?",
    answers: [
      {
        text: "If it could protect someone from harm, I would act.",
        score: { G: 4 }
      },
      {
        text: "Understand exactly what the information means before doing anything.",
        score: { R: 4 }
      },
      {
        text: "It isn't mine to discuss unless someone is genuinely at risk.",
        score: { H: 4 }
      },
      {
        text: "Remember it. Information can become important later.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "CONFLICT",
    text: "Someone who hurt you sincerely apologizes. What does forgiveness mean to you?",
    answers: [
      {
        text: "I can forgive them, but I will still stand up for myself.",
        score: { G: 4 }
      },
      {
        text: "I need to understand why they did it before I can truly forgive.",
        score: { R: 4 }
      },
      {
        text: "I can forgive without necessarily trusting them again.",
        score: { H: 4 }
      },
      {
        text: "Forgiveness is fine, but trust must be earned again through actions.",
        score: { S: 3, H: 1 }
      }
    ]
  },

  {
    category: "PRESSURE",
    text: "Everything is going wrong during an important crisis. What happens inside your head?",
    answers: [
      {
        text: "I force myself forward and deal with whatever is in front of me.",
        score: { G: 4 }
      },
      {
        text: "I immediately start identifying why everything went wrong.",
        score: { R: 4 }
      },
      {
        text: "I make sure everyone is safe and emotionally stable first.",
        score: { H: 4 }
      },
      {
        text: "I look for the fastest strategic way to regain control.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "LOYALTY",
    text: "Your best friend asks you to support them, but you know they are making a terrible decision. What do you say?",
    answers: [
      {
        text: "The truth. Real friendship means saying what they need to hear.",
        score: { G: 3, H: 2 }
      },
      {
        text: "I would show them the evidence and explain exactly why I disagree.",
        score: { R: 4 }
      },
      {
        text: "I'd be honest but make sure they know I won't abandon them.",
        score: { H: 4 }
      },
      {
        text: "I'd explain the risks and help them find a better route to what they want.",
        score: { S: 3, R: 1 }
      }
    ]
  },

  {
    category: "INTEGRITY",
    text: "You and a friend contribute equally to something, but you receive almost all the credit. What do you do?",
    answers: [
      {
        text: "Correct the mistake immediately and make sure my friend receives equal credit.",
        score: { G: 3, H: 3 }
      },
      {
        text: "Explain the evidence of each person's contribution.",
        score: { R: 4 }
      },
      {
        text: "Give my friend the recognition privately and publicly.",
        score: { H: 4 }
      },
      {
        text: "Keep the recognition only if it helps both of us achieve something important.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "BRAVERY",
    text: "Which person do you consider the bravest?",
    answers: [
      {
        text: "Someone who stands against everyone because they believe something is morally wrong.",
        score: { G: 5 }
      },
      {
        text: "Someone who walks knowingly into intellectual uncertainty to discover the truth.",
        score: { R: 3, G: 1 }
      },
      {
        text: "Someone terrified but willing to protect another person.",
        score: { H: 3, G: 3 }
      },
      {
        text: "Someone who remains composed and takes control during a dangerous crisis.",
        score: { S: 3, G: 1 }
      }
    ]
  },

  {
    category: "BELONGING",
    text: "You have one extraordinary talent but nobody with whom to share your life. How would you feel?",
    answers: [
      {
        text: "Accomplishment matters, but I would eventually fight to build meaningful connections.",
        score: { G: 2, H: 2 }
      },
      {
        text: "The achievement and mastery themselves would still be deeply satisfying.",
        score: { R: 4 }
      },
      {
        text: "The loneliness would eventually outweigh almost everything else.",
        score: { H: 5 }
      },
      {
        text: "I would accept the sacrifice if the achievement made my life extraordinary.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "POWER",
    text: "You are offered enormous magical power, but using too much could slowly make you emotionally detached. What do you do?",
    answers: [
      {
        text: "Use it only when I have no other way to protect what matters.",
        score: { G: 4, H: 1 }
      },
      {
        text: "Study exactly how the power affects the mind before using it.",
        score: { R: 4 }
      },
      {
        text: "Set strict limits so I can protect people without losing myself.",
        score: { H: 3, R: 2 }
      },
      {
        text: "Accept the risk if the power gives me the ability to accomplish something extraordinary.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "KNOWLEDGE",
    text: "You discover dangerous magical knowledge. What is your response?",
    answers: [
      {
        text: "Learn enough to know whether it can be used against people.",
        score: { G: 3, R: 1 }
      },
      {
        text: "Study it carefully and slowly, understanding every risk first.",
        score: { R: 5 }
      },
      {
        text: "Avoid it unless learning it is necessary to protect someone.",
        score: { H: 4 }
      },
      {
        text: "Master it before someone else does.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "AMBITION",
    text: "Someone gets a prestigious position through favoritism rather than merit. What do you do?",
    answers: [
      {
        text: "Challenge the injustice openly.",
        score: { G: 4 }
      },
      {
        text: "Gather evidence and use the proper channels to challenge the decision.",
        score: { R: 3, G: 2 }
      },
      {
        text: "Focus first on whether anyone is actually being harmed.",
        score: { H: 4 }
      },
      {
        text: "Find the most effective way to change the outcome.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "INSTINCT",
    text: "You enter the Forbidden Forest and sense something dangerous nearby. What is your first move?",
    answers: [
      {
        text: "Prepare to face it. Running blindly would be worse.",
        score: { G: 4 }
      },
      {
        text: "Figure out what the creature is and how it behaves.",
        score: { R: 4 }
      },
      {
        text: "Make sure everyone with me is safe before doing anything.",
        score: { H: 4 }
      },
      {
        text: "Assess the terrain and find the safest tactical advantage.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "FRIENDSHIP",
    text: "You discover information that could give you and your closest friends a major advantage. What do you do?",
    answers: [
      {
        text: "Tell them. I don't want an advantage that leaves my people behind.",
        score: { G: 2, H: 3 }
      },
      {
        text: "Verify the information first before telling anyone.",
        score: { R: 4 }
      },
      {
        text: "Share it with the people I genuinely trust.",
        score: { H: 4 }
      },
      {
        text: "Use it carefully and tell only the people who can help execute the plan.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "JUDGMENT",
    text: "Two intelligent people present completely opposite arguments. What do you do?",
    answers: [
      {
        text: "Listen, then choose the position I believe is right.",
        score: { G: 3 }
      },
      {
        text: "Research both positions before deciding.",
        score: { R: 5 }
      },
      {
        text: "Consider how each position affects real people.",
        score: { H: 4 }
      },
      {
        text: "Look at which position produces the strongest practical outcome.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "IDENTITY",
    text: "Someone tells you that your opinion is wrong. What is your response?",
    answers: [
      {
        text: "I'll defend it if I believe it is right.",
        score: { G: 4 }
      },
      {
        text: "I'll explain my reasoning and listen to theirs.",
        score: { R: 4 }
      },
      {
        text: "I'll make sure disagreement doesn't damage the relationship.",
        score: { H: 4 }
      },
      {
        text: "I'll decide whether their opinion contains something useful to me.",
        score: { S: 3, R: 2 }
      }
    ]
  },

  {
    category: "SELF-KNOWLEDGE",
    text: "You discover a flaw in an argument you made publicly. What do you do?",
    answers: [
      {
        text: "Admit it. Being wrong is better than defending something false.",
        score: { G: 3, R: 2 }
      },
      {
        text: "Change my position and explain why.",
        score: { R: 5 }
      },
      {
        text: "Admit it and apologize to anyone affected.",
        score: { H: 4 }
      },
      {
        text: "Correct it quietly if the mistake has no meaningful consequences.",
        score: { S: 3 }
      }
    ]
  },

  {
    category: "RECOGNITION",
    text: "You earn an award entirely through your own work. How do you feel about accepting it?",
    answers: [
      {
        text: "Proud. Recognition for something earned is deserved.",
        score: { G: 3 }
      },
      {
        text: "Satisfied because it confirms mastery.",
        score: { R: 4 }
      },
      {
        text: "Happy, especially if people who supported me can share the moment.",
        score: { H: 4 }
      },
      {
        text: "Pleased because recognition opens doors to greater opportunities.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "AUTHORITY",
    text: "A teacher you completely trust gives you an instruction without explanation. What do you do?",
    answers: [
      {
        text: "Follow them. Trust means something.",
        score: { G: 3, H: 2 }
      },
      {
        text: "Ask why before committing.",
        score: { R: 4 }
      },
      {
        text: "Follow if I know they genuinely have my safety in mind.",
        score: { H: 4 }
      },
      {
        text: "Follow if their judgment has consistently produced good outcomes.",
        score: { S: 3, R: 1 }
      }
    ]
  },

  {
    category: "SACRIFICE",
    text: "You can save one person from immediate danger. The choices are a stranger, a talented person who could change the world, or someone you love.",
    answers: [
      {
        text: "The person who is most vulnerable and needs saving immediately.",
        score: { G: 3, H: 2 }
      },
      {
        text: "The person whose survival has the greatest potential consequences.",
        score: { R: 3, S: 2 }
      },
      {
        text: "Someone I love. I cannot abandon them.",
        score: { H: 5 }
      },
      {
        text: "The person whose survival prevents the greatest future harm.",
        score: { S: 4, R: 2 }
      }
    ]
  },

  {
    category: "FEAR",
    text: "What kind of fear would be hardest for you to live with?",
    answers: [
      {
        text: "Knowing I stayed silent when I should have spoken.",
        score: { G: 5 }
      },
      {
        text: "Knowing I believed something false and never discovered it.",
        score: { R: 5 }
      },
      {
        text: "Knowing someone I love needed me and I wasn't there.",
        score: { H: 5 }
      },
      {
        text: "Knowing I wasted my potential.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "THE FUTURE",
    text: "The Mirror of Erised shows you one perfect future. What dominates the image?",
    answers: [
      {
        text: "Me doing something extraordinary that I can be proud of.",
        score: { G: 3, S: 2 }
      },
      {
        text: "A life of extraordinary knowledge, achievement and mastery.",
        score: { R: 5 }
      },
      {
        text: "My loved ones happy, safe and close to me.",
        score: { H: 5 }
      },
      {
        text: "Success, independence and the freedom to live entirely on my own terms.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "ADAPTATION",
    text: "A carefully prepared plan suddenly fails during a duel. What do you do?",
    answers: [
      {
        text: "Keep fighting and improvise.",
        score: { G: 4 }
      },
      {
        text: "Identify what changed and redesign the plan.",
        score: { R: 4 }
      },
      {
        text: "Protect everyone involved before worrying about winning.",
        score: { H: 4 }
      },
      {
        text: "Use the environment, psychology and anything unexpected to gain an advantage.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "ADMIRATION",
    text: "Which compliment would mean the most to you?",
    answers: [
      {
        text: "You are the bravest person I know.",
        score: { G: 5 }
      },
      {
        text: "You see things nobody else sees.",
        score: { R: 5 }
      },
      {
        text: "You make people feel safe and loved.",
        score: { H: 5 }
      },
      {
        text: "You always know how to get where you want to go.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "CRISIS",
    text: "Under intense pressure, what is your most natural response?",
    answers: [
      {
        text: "Act. Thinking too long can make things worse.",
        score: { G: 4 }
      },
      {
        text: "Analyze exactly why things went wrong, then act.",
        score: { R: 5 }
      },
      {
        text: "Calm everyone down and make sure nobody is left behind.",
        score: { H: 5 }
      },
      {
        text: "Take control and create the fastest route out.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "LOYALTY",
    text: "Your friend does something morally questionable but says nobody was harmed. What do you do?",
    answers: [
      {
        text: "Tell them privately that I think it was wrong.",
        score: { G: 4 }
      },
      {
        text: "Ask questions before judging whether it was actually wrong.",
        score: { R: 4 }
      },
      {
        text: "Talk honestly with them while keeping the matter private.",
        score: { H: 4 }
      },
      {
        text: "Leave it alone unless their actions begin causing serious consequences.",
        score: { S: 3 }
      }
    ]
  },

  {
    category: "FORGIVENESS",
    text: "Someone who betrayed you sincerely changes. What happens to your relationship?",
    answers: [
      {
        text: "I can forgive them and eventually rebuild trust.",
        score: { G: 3 }
      },
      {
        text: "I need to see consistent evidence of change.",
        score: { R: 3, S: 2 }
      },
      {
        text: "I can forgive them without giving them the same place in my life.",
        score: { H: 4 }
      },
      {
        text: "The relationship is over unless their actions prove otherwise over time.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "RESPONSIBILITY",
    text: "You are exhausted, but someone you love desperately needs your help. What do you do?",
    answers: [
      {
        text: "Help them. I'll deal with my exhaustion afterward.",
        score: { G: 3, H: 3 }
      },
      {
        text: "Work out what help is actually necessary and what I can realistically do.",
        score: { R: 3 }
      },
      {
        text: "Put their serious need first.",
        score: { H: 5 }
      },
      {
        text: "Help if the situation is genuinely serious, otherwise find another solution.",
        score: { S: 3, R: 2 }
      }
    ]
  },

  {
    category: "MORAL COURAGE",
    text: "Everyone around you supports a decision that you believe is seriously immoral. What do you do?",
    answers: [
      {
        text: "Stand against them, even if I stand alone.",
        score: { G: 5 }
      },
      {
        text: "Present evidence and try to change their minds.",
        score: { R: 4, G: 1 }
      },
      {
        text: "Protect the people who may be hurt while trying to resolve the disagreement.",
        score: { H: 4, G: 1 }
      },
      {
        text: "Find the most effective way to stop the decision.",
        score: { S: 4, G: 1 }
      }
    ]
  },

  {
    category: "LIMITS",
    text: "You discover that an extremely powerful spell could save many people, but using it carries a serious moral cost. What do you do?",
    answers: [
      {
        text: "Use it if the alternative is allowing innocent people to die.",
        score: { G: 4 }
      },
      {
        text: "Determine exactly what the moral cost is before deciding.",
        score: { R: 5 }
      },
      {
        text: "Exhaust every other option before accepting that cost.",
        score: { H: 4, R: 1 }
      },
      {
        text: "Accept the cost if the final outcome justifies it.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "REGRET",
    text: "Which regret would haunt you most?",
    answers: [
      {
        text: "Not standing up when I knew I should have.",
        score: { G: 5 }
      },
      {
        text: "Never learning what I could have become.",
        score: { R: 5 }
      },
      {
        text: "Letting someone I loved feel alone when they needed me.",
        score: { H: 5 }
      },
      {
        text: "Playing small when I had the chance to become exceptional.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "FREEDOM",
    text: "What would make you feel most trapped?",
    answers: [
      {
        text: "Being unable to speak or act when something is wrong.",
        score: { G: 4 }
      },
      {
        text: "Being forbidden from asking questions or learning.",
        score: { R: 5 }
      },
      {
        text: "Being separated from the people I love.",
        score: { H: 5 }
      },
      {
        text: "Having my future controlled by someone else.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "STRATEGY",
    text: "You have to solve a difficult problem with limited information. What do you do first?",
    answers: [
      {
        text: "Make the best decision possible and adjust later.",
        score: { G: 4 }
      },
      {
        text: "Identify assumptions and determine which missing facts matter most.",
        score: { R: 5 }
      },
      {
        text: "Ask the people affected what they need.",
        score: { H: 4 }
      },
      {
        text: "Find the action that gives me the most leverage.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "LOYALTY",
    text: "A person you love has made a life decision you believe will ruin their future. What do you do?",
    answers: [
      {
        text: "Tell them honestly that I think they're making a mistake.",
        score: { G: 3, H: 2 }
      },
      {
        text: "Research the situation and show them the strongest evidence.",
        score: { R: 5 }
      },
      {
        text: "Make my case but stay beside them even if they choose differently.",
        score: { H: 5 }
      },
      {
        text: "Help them understand the risks and identify alternatives.",
        score: { S: 3, R: 2 }
      }
    ]
  },

  {
    category: "VALUES",
    text: "Which statement feels closest to your philosophy?",
    answers: [
      {
        text: "It is better to fail while doing what I believe is right.",
        score: { G: 5 }
      },
      {
        text: "Understanding something deeply is more valuable than being certain.",
        score: { R: 5 }
      },
      {
        text: "A meaningful life is built through the people we love.",
        score: { H: 5 }
      },
      {
        text: "Potential means little unless you have the courage to use it.",
        score: { S: 5 }
      }
    ]
  },

  {
    category: "TRUST",
    text: "Someone has earned your complete trust over many years. They ask you to follow them into an uncertain situation. What do you do?",
    answers: [
      {
        text: "Go. Their character matters more than my certainty.",
        score: { G: 3, H: 2 }
      },
      {
        text: "Ask what they know and why they believe it is necessary.",
        score: { R: 4 }
      },
      {
        text: "Go because I know they wouldn't knowingly put me in danger.",
        score: { H: 5 }
      },
      {
        text: "Go if their judgment has consistently produced good outcomes.",
        score: { S: 4 }
      }
    ]
  },

  {
    category: "CHOICE",
    text: "If you could choose only one quality to define your life, which would you choose?",
    answers: [
      {
        text: "Courage.",
        score: { G: 6 }
      },
      {
        text: "Wisdom.",
        score: { R: 6 }
      },
      {
        text: "Loyalty.",
        score: { H: 6 }
      },
      {
        text: "Ambition.",
        score: { S: 6 }
      }
    ]
  },

  {
    category: "THE HAT",
    text: "The Sorting Hat offers to place you in the House you most naturally belong to, rather than the House you think you should want. What do you tell it?",
    answers: [
      {
        text: "Place me where my courage and convictions naturally lead.",
        score: { G: 5 }
      },
      {
        text: "Place me where my curiosity and way of thinking naturally lead.",
        score: { R: 5 }
      },
      {
        text: "Place me where my loyalty and heart naturally lead.",
        score: { H: 5 }
      },
      {
        text: "Place me where my ambition and drive naturally lead.",
        score: { S: 5 }
      }
    ]
  }

];


/* =========================================================
   HOUSE INFORMATION
========================================================= */

const houses = {

  G: {
    name: "GRYFFINDOR",
    motto: "Where courage meets conviction.",
    title: "The Conviction-Driven Gryffindor",
    traits: [
      "Courage",
      "Moral conviction",
      "Protective",
      "Independent",
      "Bold",
      "Resilient"
    ]
  },

  R: {
    name: "RAVENCLAW",
    motto: "Where curiosity becomes wisdom.",
    title: "The Analytical Ravenclaw",
    traits: [
      "Curious",
      "Analytical",
      "Independent thinker",
      "Adaptable",
      "Perceptive",
      "Thoughtful"
    ]
  },

  H: {
    name: "HUFFLEPUFF",
    motto: "Where loyalty becomes strength.",
    title: "The Fiercely Loyal Hufflepuff",
    traits: [
      "Loyal",
      "Compassionate",
      "Protective",
      "Steadfast",
      "Patient",
      "Warm"
    ]
  },

  S: {
    name: "SLYTHERIN",
    motto: "Where ambition becomes power.",
    title: "The Principled Slytherin",
    traits: [
      "Ambitious",
      "Strategic",
      "Resourceful",
      "Independent",
      "Determined",
      "Perceptive"
    ]
  }

};


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
   DOM HELPERS
========================================================= */

function $(id) {
  return document.getElementById(id);
}


function showScreen(id) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  $(id).classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================================
   LETTER
========================================================= */

$("openLetter").addEventListener("click", () => {

  $("envelope").classList.add("hidden");
  $("envelopePrompt").classList.add("hidden");
  $("letter").classList.remove("hidden");

});


$("openSorting").addEventListener("click", () => {

  showScreen("modeScreen");

});


/* =========================================================
   MODE SELECTION
========================================================= */

document.querySelectorAll(".mode-card").forEach(card => {

  card.addEventListener("click", () => {

    selectedMode = Number(card.dataset.mode);

    currentQuestion = 0;
    answersGiven = [];

    scores = {
      G: 0,
      R: 0,
      H: 0,
      S: 0
    };

    $("totalNumber").textContent = selectedMode;

    showScreen("quizScreen");

    renderQuestion();

  });

});


/* =========================================================
   QUESTION RENDERING
========================================================= */

function renderQuestion() {

  const question = questions[currentQuestion];

  $("currentNumber").textContent = currentQuestion + 1;

  $("totalNumber").textContent = selectedMode;

  $("questionCategory").textContent = question.category;

  $("questionText").textContent = question.text;

  const percentage =
    ((currentQuestion) / selectedMode) * 100;

  $("progressBar").style.width = percentage + "%";


  const answersContainer = $("answers");

  answersContainer.innerHTML = "";


  question.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.className = "answer";

    if (answersGiven[currentQuestion] === index) {
      button.classList.add("selected");
    }

    const letter = document.createElement("span");

    letter.className = "answer-letter";

    letter.textContent =
      String.fromCharCode(65 + index);

    button.appendChild(letter);

    const text = document.createTextNode(answer.text);

    button.appendChild(text);


    button.addEventListener("click", () => {

      selectAnswer(index);

    });


    answersContainer.appendChild(button);

  });


  $("backButton").style.visibility =
    currentQuestion === 0 ? "hidden" : "visible";

}


/* =========================================================
   ANSWER SELECTION
========================================================= */

function selectAnswer(index) {

  answersGiven[currentQuestion] = index;


  document.querySelectorAll(".answer").forEach((button, i) => {

    button.classList.toggle(
      "selected",
      i === index
    );

  });


  setTimeout(() => {

    if (currentQuestion < selectedMode - 1) {

      currentQuestion++;

      renderQuestion();

    } else {

      finishSorting();

    }

  }, 350);

}


/* =========================================================
   BACK BUTTON
========================================================= */

$("backButton").addEventListener("click", () => {

  if (currentQuestion > 0) {

    currentQuestion--;

    renderQuestion();

  }

});


/* =========================================================
   CALCULATE SCORE
========================================================= */

function calculateScores() {

  scores = {
    G: 0,
    R: 0,
    H: 0,
    S: 0
  };


  for (
    let i = 0;
    i < selectedMode;
    i++
  ) {

    const answerIndex = answersGiven[i];

    if (answerIndex === undefined) {
      continue;
    }

    const answer =
      questions[i].answers[answerIndex];

    Object.keys(answer.score).forEach(house => {

      scores[house] += answer.score[house];

    });

  }

}


/* =========================================================
   DETERMINE HOUSE
========================================================= */

function determineHouse() {

  const entries = Object.entries(scores);

  entries.sort((a, b) => b[1] - a[1]);

  const highest = entries[0][1];

  const tied = entries.filter(
    entry => entry[1] === highest
  );


  if (tied.length === 1) {
    return tied[0][0];
  }


  /*
    Deterministic tie breaker.

    Later questions are intentionally used as
    stronger personality signals.
  */

  const tiePriority = ["G", "R", "H", "S"];

  for (let i = questions.length - 1; i >= 0; i--) {

    const answerIndex = answersGiven[i];

    if (answerIndex === undefined) {
      continue;
    }

    const answer =
      questions[i].answers[answerIndex];

    for (const house of tiePriority) {

      if (
        tied.some(item => item[0] === house) &&
        answer.score[house]
      ) {
        return house;
      }

    }

  }

  return tied[0][0];

}


/* =========================================================
   PERSONALITY ANALYSIS
========================================================= */

function getSecondaryHouse(mainHouse) {

  return Object.entries(scores)
    .filter(([house]) => house !== mainHouse)
    .sort((a, b) => b[1] - a[1])[0][0];

}


function getPersonality(mainHouse, secondaryHouse) {

  const difference =
    scores[mainHouse] - scores[secondaryHouse];


  if (mainHouse === "G") {

    if (secondaryHouse === "R") {

      return {
        title: "The Strategist Gryffindor",
        text:
          "The Hat found something interesting in you. " +
          "Your courage is not reckless. You think, question, " +
          "research and calculate — but when conviction finally " +
          "speaks, you are willing to act. You have a strong " +
          "analytical streak, yet knowledge is ultimately a tool " +
          "for deciding what should be done. You want an " +
          "extraordinary life, but not one emptied of meaning.",
        traits: [
          "Calculated courage",
          "Moral conviction",
          "Analytical",
          "Protective",
          "Independent",
          "Ambitious"
        ]
      };

    }

    if (secondaryHouse === "H") {

      return {
        title: "The Guardian Gryffindor",
        text:
          "Your bravery is deeply personal. You are most likely " +
          "to become courageous when someone or something you love " +
          "needs protecting. You do not seek danger for its own sake. " +
          "You simply find it difficult to stand aside when your " +
          "conscience tells you that you should act.",
        traits: [
          "Protective courage",
          "Loyal",
          "Principled",
          "Resilient",
          "Compassionate",
          "Bold"
        ]
      };

    }

    return {
      title: "The Defiant Gryffindor",
      text:
        "You have a strong internal line between what you believe " +
        "is right and what you believe is wrong. When that line is " +
        "crossed, comfort becomes less important than conviction. " +
        "You may think carefully before acting, but once you decide " +
        "something matters, you are difficult to stop.",
      traits: houses.G.traits
    };

  }


  if (mainHouse === "R") {

    if (secondaryHouse === "G") {

      return {
        title: "The Fearless Scholar",
        text:
          "Your mind is your first instrument, but not your only one. " +
          "You question assumptions, search for evidence and dislike " +
          "pretending certainty where none exists. Yet when knowledge " +
          "points toward action, you have the courage to follow it.",
        traits: [
          "Intellectual courage",
          "Curious",
          "Analytical",
          "Open-minded",
          "Independent",
          "Perceptive"
        ]
      };

    }

    return {
      title: houses.R.title,
      text:
        "You are naturally drawn toward understanding. You want to " +
        "know why something works, what everyone else has missed and " +
        "whether your own assumptions survive scrutiny. You are not " +
        "afraid of changing your mind when the evidence demands it.",
      traits: houses.R.traits
    };

  }


  if (mainHouse === "H") {

    if (secondaryHouse === "G") {

      return {
        title: "The Fierce Protector",
        text:
          "Your loyalty is not weakness. It is one of your strongest " +
          "sources of courage. You care intensely about the people " +
          "you let close, and when they need you, your willingness " +
          "to stand beside them can become formidable.",
        traits: [
          "Fiercely loyal",
          "Protective",
          "Emotionally strong",
          "Courageous",
          "Compassionate",
          "Steadfast"
        ]
      };

    }

    return {
      title: houses.H.title,
      text:
        "The Hat sees someone who measures a life not only by what " +
        "they accomplish, but by who was beside them when they did it. " +
        "You value genuine relationships over crowds, and forgiveness " +
        "does not necessarily mean forgetting. Your loyalty has weight.",
      traits: houses.H.traits
    };

  }


  if (mainHouse === "S") {

    if (secondaryHouse === "R") {

      return {
        title: "The Calculating Slytherin",
        text:
          "You do not merely want things. You want to understand how " +
          "to get them. You naturally think several moves ahead, " +
          "recognize leverage and value competence. Your intelligence " +
          "gives your ambition precision.",
        traits: [
          "Strategic",
          "Ambitious",
          "Intelligent",
          "Resourceful",
          "Independent",
          "Determined"
        ]
      };

    }

    return {
      title: houses.S.title,
      text:
        "The Hat detects ambition without necessarily detecting " +
        "cruelty. You want freedom, capability and the chance to make " +
        "your own choices. You understand that power itself is neither " +
        "good nor evil; what matters is what you choose to do with it.",
      traits: houses.S.traits
    };

  }

}


/* =========================================================
   SORTING HAT MONOLOGUE
========================================================= */

function generateSpeech(mainHouse, secondaryHouse) {

  const g = scores.G;
  const r = scores.R;
  const h = scores.H;
  const s = scores.S;


  let opening = "";
  let middle = "";
  let ending = "";


  const highest =
    Math.max(g, r, h, s);


  if (mainHouse === "G") {

    opening =
      "Hmmmm... now THIS is interesting. " +
      "I have looked into your choices, your instincts, " +
      "your loyalties and the things you would rather not admit " +
      "about yourself.";


    if (r >= h && r >= s) {

      middle =
        "There is a remarkably sharp mind beneath that courage. " +
        "You do not rush toward danger simply because danger is there. " +
        "You investigate. You question. You look for the flaw in the " +
        "argument and the hidden piece of the puzzle. " +
        "But knowledge, for you, is rarely the destination. " +
        "Eventually you want to KNOW what should be done — and then DO it.";

    } else if (h >= r && h >= s) {

      middle =
        "And yet your strongest secret is your heart. " +
        "You care deeply about the people you allow into your life. " +
        "You may forgive without forgetting, and loyalty matters to " +
        "you far more than popularity. When someone you love needs you, " +
        "your courage becomes almost automatic.";

    } else {

      middle =
        "There is ambition here too. You want to become capable. " +
        "You want your life to amount to something extraordinary. " +
        "But ambition is not sitting in the driver's seat. " +
        "You are willing to sacrifice comfort for achievement, " +
        "yet you still care deeply about what — and who — that achievement is for.";

    }


    ending =
      "You are not fearless. That would be far too simple. " +
      "You understand risk, you understand consequences, and you " +
      "understand that sometimes the safest choice is the wiser one. " +
      "But when something truly matters, you have a troublesome habit " +
      "of standing up anyway. " +
      "\n\n" +
      "The question was never whether you could be brave. " +
      "The question was whether your courage would survive " +
      "when courage became inconvenient." +
      "\n\n" +
      "Oh yes... I know where you belong." +
      "\n\n" +
      "GRYFFINDOR!";


  } else if (mainHouse === "R") {

    opening =
      "Ahhh... a mind that refuses to sit quietly. " +
      "Questions everywhere. Assumptions being dismantled. " +
      "You would probably interrogate the Hat itself if given enough time.";


    middle =
      "You do not seem particularly frightened of being wrong. " +
      "What bothers you more is remaining wrong because your pride " +
      "would not let you reconsider. You gather evidence, test ideas, " +
      "adapt when circumstances change and look beneath the obvious.";


    ending =
      "There is courage here too, and perhaps ambition, but neither " +
      "quite overrules your hunger to understand. " +
      "You do not merely want answers. " +
      "You want to know whether the answers deserve to be believed." +
      "\n\n" +
      "RAVENCLAW!";


  } else if (mainHouse === "H") {

    opening =
      "Ohhh... I see. You have made this Hat's work rather difficult. " +
      "There is more strength in you than you seem inclined to advertise.";


    middle =
      "You measure people by what they do when nobody is watching. " +
      "You value a small number of genuine relationships over a room " +
      "full of acquaintances. And when someone you love needs you, " +
      "your own exhaustion can become strangely unimportant.";


    ending =
      "Do not mistake that tenderness for weakness. " +
      "Loyalty is one of the oldest forms of courage. " +
      "You can forgive someone without handing them your trust again. " +
      "You can love someone without agreeing with them. " +
      "And when your people are threatened, there is a rather formidable " +
      "side of you that comes awake." +
      "\n\n" +
      "HUFFLEPUFF!";


  } else {

    opening =
      "Now then... ambition. " +
      "Not the shallow sort, either. You have thought about what " +
      "you could become, and there is a part of you that refuses " +
      "to settle for ordinary merely because ordinary is comfortable.";


    middle =
      "You understand leverage. You think about consequences. " +
      "You would rather find the clever route than waste energy " +
      "charging directly into a locked door. " +
      "And importantly, you understand that power is useful precisely " +
      "because of what it allows you to change.";


    ending =
      "But I shall give you this warning: ambition can become a cage " +
      "if you forget why you wanted freedom in the first place. " +
      "You have enough conscience to avoid that fate — if you choose " +
      "to listen to it." +
      "\n\n" +
      "SLYTHERIN!";
  }


  return opening + "\n\n" + middle + "\n\n" + ending;

}


/* =========================================================
   FINISH SORTING
========================================================= */

function finishSorting() {

  calculateScores();

  $("progressBar").style.width = "100%";

  showScreen("thinkingScreen");


  const thinkingLines = [
    "Hmm... fascinating.",
    "There is more here than first appeared.",
    "The Hat sees several possibilities...",
    "Your loyalties tell me something.",
    "And your choices under pressure tell me even more.",
    "Almost there...",
    "Yes. I know."
  ];


  let index = 0;

  $("thinkingLine").textContent =
    thinkingLines[index];


  const interval = setInterval(() => {

    index++;

    if (index < thinkingLines.length) {

      $("thinkingLine").textContent =
        thinkingLines[index];

    }

  }, 700);


  setTimeout(() => {

    clearInterval(interval);

    revealResult();

  }, 5000);

}


/* =========================================================
   RESULT
========================================================= */

function revealResult() {

  const mainHouse = determineHouse();

  const secondaryHouse =
    getSecondaryHouse(mainHouse);

  const personality =
    getPersonality(
      mainHouse,
      secondaryHouse
    );

  const speech =
    generateSpeech(
      mainHouse,
      secondaryHouse
    );


  document.body.classList.remove(
    "house-gryffindor",
    "house-ravenclaw",
    "house-hufflepuff",
    "house-slytherin"
  );


  document.body.classList.add(
    "house-" +
    houses[mainHouse].name.toLowerCase()
  );


  $("hatSpeechTitle").textContent =
    "So... that is who you are.";


  $("hatSpeech").textContent =
    speech;


  $("houseName").textContent =
    houses[mainHouse].name;


  $("houseMotto").textContent =
    houses[mainHouse].motto;


  $("personalityTitle").textContent =
    personality.title;


  $("personalityText").textContent =
    personality.text;


  const traitGrid =
    $("traitGrid");

  traitGrid.innerHTML = "";

  personality.traits.forEach(trait => {

    const el =
      document.createElement("span");

    el.className = "trait";

    el.textContent = trait;

    traitGrid.appendChild(el);

  });


  renderScores();


  showScreen("resultScreen");

}


/* =========================================================
   SCORE BARS
========================================================= */

function renderScores() {

  const container =
    $("scoreBars");

  container.innerHTML = "";


  const maxScore =
    Math.max(
      scores.G,
      scores.R,
      scores.H,
      scores.S
    );


  const labels = {
    G: "Gryffindor",
    R: "Ravenclaw",
    H: "Hufflepuff",
    S: "Slytherin"
  };


  const classes = {
    G: "gryffindor",
    R: "ravenclaw",
    H: "hufflepuff",
    S: "slytherin"
  };


  ["G", "R", "H", "S"].forEach(house => {

    const row =
      document.createElement("div");

    row.className = "score-row";


    const percentage =
      Math.round(
        (scores[house] / maxScore) * 100
      );


    row.innerHTML = `
      <div class="score-label">
        <span>${labels[house]}</span>
        <span>${percentage}%</span>
      </div>

      <div class="score-track">
        <div
          class="score-fill ${classes[house]}"
          style="width:${percentage}%"
        ></div>
      </div>
    `;


    container.appendChild(row);

  });

}


/* =========================================================
   SHARE
========================================================= */

$("shareButton").addEventListener("click", async () => {

  const house =
    $("houseName").textContent;


  const text =
    `The Sorting Hat has placed me in ${house}. ` +
    `Where would Hogwarts place you?`;


  if (
    navigator.share
  ) {

    try {

      await navigator.share({
        title: "My Hogwarts Sorting",
        text: text,
        url: window.location.href
      });

    } catch (error) {

      // User cancelled sharing.

    }

  } else {

    try {

      await navigator.clipboard.writeText(
        text + "\n" + window.location.href
      );

      $("shareButton").textContent =
        "Copied to Clipboard";

      setTimeout(() => {

        $("shareButton").textContent =
          "Share My Sorting";

      }, 2000);

    } catch (error) {

      alert(text);

    }

  }

});


/* =========================================================
   RESTART
========================================================= */

$("restartButton").addEventListener("click", () => {

  currentQuestion = 0;

  answersGiven = [];

  scores = {
    G: 0,
    R: 0,
    H: 0,
    S: 0
  };


  document.body.classList.remove(
    "house-gryffindor",
    "house-ravenclaw",
    "house-hufflepuff",
    "house-slytherin"
  );


  showScreen("modeScreen");

});


/* =========================================================
   PREVENT ACCIDENTAL PAGE EXIT
========================================================= */

window.addEventListener("beforeunload", event => {

  if (
    $("quizScreen").classList.contains("active") &&
    answersGiven.length > 0 &&
    currentQuestion > 0
  ) {

    event.preventDefault();

  }

});
/* =========================================
   HOGWARTS INTRO
   ========================================= */

const hogwartsIntro = document.getElementById("hogwartsIntro");
const enterHogwartsBtn = document.getElementById("enterHogwartsBtn");

if (enterHogwartsBtn) {
    enterHogwartsBtn.addEventListener("click", () => {
        hogwartsIntro.classList.add("hidden");

        // Show the existing Hogwarts letter
        const letterScreen = document.getElementById("letterScreen");

        if (letterScreen) {
            letterScreen.classList.add("active");
        }
    });
}
