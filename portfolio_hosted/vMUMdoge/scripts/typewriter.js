const sentences = [
  "Sigh. To be fair, you have to have a very high IQ to understand vMUMDOGE and Maia DAO Ecosystem. Its future applications are extremely subtle, and without a solid grasp of computing and economics most of its possible functions will go over a typical investor’s head. There’s also $HERMES free market outlook, which is deftly woven into his creation- his personal philosophy draws heavily from Robert Malthus, for instance.",
  "The shills understand this stuff; they have the intellectual capacity to truly appreciate the depths of this coin, to realize that it is not just speculation - it says something deep about LIFE.",
  "As a consequence people who dislike VMUMDOGE truly ARE idiots- of course they wouldn’t appreciate, for instance, the brilliance in the financial tokenized repository- the “AKITA V3,” which itself is a cryptic reference to Uranus and UST.",
  "I’m smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as our lord and savior's genius wit unfolds itself on their computer screens. What fools.. how I pity them. 😂",
  "And yes, by the way, i DO have a vMUMDOGE tattoo. And no, you cannot see it. It’s for the ladies’ eyes only- and even then they have to demonstrate that they’re within 5 IQ points of my own (preferably lower) beforehand. Nothin personnel kid 😎",
];
let currentSentence = 0;
let currentLetter = 0;
const typingDiv = document.getElementById("typingText");
const typingSpeed = 50; // milliseconds

function typeSentence() {
  if (currentSentence < sentences.length) {
    let sentence = sentences[currentSentence];
    if (currentLetter < sentence.length) {
      typingDiv.textContent += sentence.charAt(currentLetter);
      currentLetter++;
      setTimeout(typeSentence, typingSpeed);
    } else {
      setTimeout(clearSentence, 2000); // wait a bit before clearing
    }
  }
}

function clearSentence() {
  typingDiv.textContent = "";
  currentLetter = 0;
  currentSentence++;
  // If we've reached the end of the sentences array, reset to start
  if (currentSentence >= sentences.length) {
    currentSentence = 0; // Reset to the first sentence
  }
  setTimeout(typeSentence, 500); // Continue to the next sentence
}

typeSentence();
