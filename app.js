let text = document.getElementById("text");
let start = document.getElementById("start");
let pause = document.getElementById("pause");
let resume = document.getElementById("resume");
let cancel = document.getElementById("cancel");

const story = [
  [
    `<center><b><u>The Elephant Circus</u></b></center><br/>
Once upon a time in a circus, five elephants that performed circus tricks. They were kept tied up with weak rope that they could’ve easily escaped, but did not.
One day, a man visiting the circus asked the ringmaster: “Why haven’t these elephants broken the rope and run away?”
The ringmaster replied: “Frm when they were young, the elephants were made to believe that they were not strong enough to break the ropes and escape.”
It was because of this belief that they did not even try to break the ropes now.<br/><br/>

<b>Moral of the story</b> &emsp; : &emsp; Don’t give in to the limitations of society. Believe that you can achieve everything you want to!`,
  ],

  [
    `<center><b><u>The Boy Who Cried, Wolf</u></b></center><br/>
  There was a young boy whose father, a farmer, had asked him to take their herd of sheep grazing every day.Moral stories for kids
  One day, the boy was extremely bored as he watched over the sheep and so he cried: “Wolf! Wolf!”  
  On hearing his cries, the villagers rushed to help him chase the wolf away and safe the sheep.  
  When they saw the grinning boy and realised he had cried wolf for his amusement, they scolded him and told him to not cry wolf!  
  The next day, the boy cried out that the wolf was there. The villagers came, scolded him again, and left.  
  Later that same day, a wolf came and terrorized the sheep.  
  The boy cried, “Wolf! Wolf! Please help me.”  
  But, the villagers assumed that he was pulling a silly prank again and did not come to his rescue. The sheep ran away and the boy cried.  <br/><br/>
  <b>Moral of the story</b>&emsp;:&emsp;  
  Don’t lie or engage in foolish pranks, for no one will believe a liar even when he is telling the truth!`,
  ],

  [
    `<center><b><u>Two Frogs With The Same Problem</u></b></center><br/>
    Once, a group of frogs was roaming around the forest in search of water. Suddenly, two frogs in the group accidentally fell into a deep pit.

    The other frogs worried about their friends in the pit.
    
    Seeing how deep the pit was, they told the two frogs that there was no way they could escape the deep pit and that there was no point in trying.
    
    They continued to constantly discourage them as the two frogs tried to jump out of the pit. But keep falling back.
    
    Soon, one of the two frogs started to believe the other frogs — that they’ll never be able to escape the pit and eventually died after giving up.
    
    The other frog keeps trying and eventually jumps so high that he escapes the pit. The other frogs were shocked at this and wondered how he did it.
    
    The difference was that the second frog was deaf and couldn’t hear the discouragement of the group. He simply thought they were cheering him on!<br/><br/>
    
    <b>Moral of the story</b>&emsp;:&emsp;People’s opinion of you will affect you, only if you believe it to be so. It’s better to believe in yourself.`,
  ],

  [
    `<center><b><u>The Tortoise And The Hare</u></b></center><br/>
    This popular story is about a hare (an animal belonging to the rabbit family), which is known to move quickly and a tortoise, which is known to move slower.
    
    The story began when the hare who has won many races proposed a race with the tortoise. The hare simply wanted to prove that he was the best and have the satisfaction of beating him.
    
    The tortoise agreed and the race began.
    
    The hare got a head-start but became overconfident towards the end of the race. His ego made him believe that he could win the race even if he rested for a while.
    
    And so, he took a nap right near the finish line.
    
    Meanwhile, the tortoise walked slowly but extremely determined and dedicated. He did not give up for a second and kept persevering despite the odds not being in his favour.
    
    While the hare was asleep, the tortoise crossed the finish line and won the race!
    
    The best part was that the tortoise did not gloat or put the hare down!<br/><br/>
    
    <b>Moral of the story</b>&emsp;:&emsp;
    
    Slow and steady wins the race. When you work hard, stay focused, you can achieve anything, even when it seems impossible.`,
  ],

  [
    `<center><b><u>The Monkey And The Crocodile</u></b></center><br/>
    This famous moral story is from the Panchatantra.
    
    There was a monkey that lived on a berry tree on the riverbank. He ate the delicious berries every day.
    
    Once, he saw a crocodile rest under the tree who looked tired and hungry. He gave the crocodile some berries.
    
    The crocodile thanked the monkey. Soon, they became best friends. The monkey gave the crocodile berries every day.
    
    One day, the monkey gave the crocodile extra berries to take home to his wife.
    
    His wife, a wicked crocodile, enjoyed the sweet berries, but then told her husband that she wanted to eat the monkey’s heart as that would be sweeter!
    
    The crocodile was upset at first but decided to give in to his wife’s wishes.
    
    The next day, he told the monkey that his wife invited the monkey home for dinner.
    
    As the crocodile carried the monkey on his back across the river, he told him about his wife’s plan to eat his heart.
    
    The monkey, being smart, told the crocodile that he left his heart on the berry tree and needed to get it.
    
    The crocodile foolishly took him back to the berry tree. On reaching, the monkey climbed onto the tree.
    
    “Who will keep the heart on a tree? You have betrayed my trust. We can never be friends again!” the monkey told his friend.
    
    Sad after losing his friend, the crocodile swims back to his wicked wife.<br/><br/>
    
    <b>Moral of the story</b>&emsp;:&emsp;
    
    Choose your friends and the people you trust wisely. Moreover, never betray the trust of someone who trusts you.`,
  ],
];
text.innerHTML = story[0];

let speech = new SpeechSynthesisUtterance();
speech.lang = "en-IN";
speech.pitch = 1;
speech.rate = 1;
speech.volume = 1;

let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[2];
};

start.addEventListener("click", () => {
  speech.text = story[0];
  window.speechSynthesis.speak(speech);
});

pause.addEventListener("click", () => {
  window.speechSynthesis.pause();
});

resume.addEventListener("click", () => {
  window.speechSynthesis.resume();
});

cancel.addEventListener("click", () => {
  window.speechSynthesis.cancel();
  let rnd = Math.floor(Math.random() * 5);
  text.innerHTML = story[rnd];
  speech.text = story[rnd];
  window.speechSynthesis.speak(speech);
});
