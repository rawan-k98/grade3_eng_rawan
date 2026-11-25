// لعبة رياضيات للصف الثالث: الوحدتان 2 و3 (تدريب عام على الأعداد والجمع والطرح)
const questionBank = [
// Unit 2: numbers, place value, comparing, ordering, rounding-like practice
{unit:2, q:'ما العدد الذي يتكوّن من 4 آلاف و3 مئات و2 عشرات و7 آحاد؟', options:['4327','4237','4037'], answer:0},
{unit:2, q:'كيف نكتب العدد 5086 بالكلمات؟', options:['خمسة آلاف وثمانون وستة','خمسة آلاف وستة وثمانون','خمسة آلاف وثمانمئة وستة'], answer:1},
{unit:2, q:'ما منزلة الرقم 7 في العدد 2741؟', options:['الآحاد','العشرات','المئات'], answer:2},
{unit:2, q:'أي الأعداد أكبر؟', options:['3958','3985','3859'], answer:1},
{unit:2, q:'ما العدد الذي يلي 6999 مباشرة؟', options:['6998','7000','7001'], answer:1},
{unit:2, q:'ما العدد الذي يسبق 4100؟', options:['4099','4101','4009'], answer:0},
{unit:2, q:'رتّب الأعداد تصاعدياً: 2410، 2140، 2401', options:['2140، 2401، 2410','2410، 2401، 2140','2401، 2140، 2410'], answer:0},
{unit:2, q:'ما القيمة المنزلية للرقم 5 في 3528؟', options:['5','50','500'], answer:2},
{unit:2, q:'أي عدد يساوي 6 آلاف و9 عشرات و4 آحاد؟', options:['6904','6094','6940'], answer:1},
{unit:2, q:'اختر العدد الأصغر.', options:['6208','6280','6028'], answer:2},
{unit:2, q:'كم عشرة في العدد 430؟', options:['4','43','430'], answer:1},
{unit:2, q:'العدد 8 آلاف و5 مئات يكتب:', options:['8500','8050','8005'], answer:0},
{unit:2, q:'أي عدد يقع بين 3200 و3300؟', options:['3199','3256','3301'], answer:1},
{unit:2, q:'ما العدد المكوّن من 7 آلاف و0 مئات و3 عشرات و9 آحاد؟', options:['7039','7309','70039'], answer:0},
{unit:2, q:'قارن: 4567 ___ 4657', options:['>','<','='], answer:1},
{unit:2, q:'قارن: 8000 ___ 7999', options:['<','>','='], answer:1},
{unit:2, q:'ما العدد الذي فيه 4 آلاف و4 مئات و4 عشرات و4 آحاد؟', options:['4444','4404','4044'], answer:0},
{unit:2, q:'أي كتابة صحيحة للعدد 6302؟', options:['ستة آلاف وثلاثمئة واثنان','ستة آلاف وثلاثون واثنان','ستة آلاف ومئتان وثلاثة'], answer:0},
{unit:2, q:'رتب تنازلياً: 1520، 1250، 1502', options:['1250، 1502، 1520','1520، 1502، 1250','1502، 1250، 1520'], answer:1},
{unit:2, q:'ما العدد المؤلف من 9 آلاف و8 آحاد؟', options:['9800','9008','9080'], answer:1},
{unit:2, q:'ما الرقم الموجود في منزلة العشرات في 7615؟', options:['7','6','1'], answer:2},
{unit:2, q:'أي عدد يساوي 2 آلاف و7 مئات و0 عشرات و5 آحاد؟', options:['2705','2075','2750'], answer:0},
{unit:2, q:'اختر العدد الأكبر من 5000.', options:['4999','5001','5000'], answer:1},
{unit:2, q:'كم مئة في 1200؟', options:['12','120','2'], answer:0},
{unit:2, q:'ما العدد الذي يأتي بعد 8499؟', options:['8498','8500','8501'], answer:1},
// Unit 3: addition and subtraction
{unit:3, q:'احسب: 300 + 400', options:['600','700','800'], answer:1},
{unit:3, q:'احسب: 2500 + 1300', options:['3700','3800','3900'], answer:1},
{unit:3, q:'احسب: 6400 − 2000', options:['4400','4200','4600'], answer:0},
{unit:3, q:'احسب: 3250 + 450', options:['3600','3700','3750'], answer:1},
{unit:3, q:'احسب: 900 − 350', options:['550','650','450'], answer:0},
{unit:3, q:'احسب: 125 + 275', options:['300','400','410'], answer:1},
{unit:3, q:'احسب: 4700 + 200', options:['4900','4800','4702'], answer:0},
{unit:3, q:'احسب: 5600 − 600', options:['5000','5100','5200'], answer:0},
{unit:3, q:'احسب: 345 + 120', options:['455','465','475'], answer:1},
{unit:3, q:'احسب: 1000 − 1', options:['999','100','990'], answer:0},
{unit:3, q:'احسب: 2300 + 500', options:['2800','2500','3000'], answer:0},
{unit:3, q:'احسب: 720 − 240', options:['470','480','490'], answer:1},
{unit:3, q:'احسب: 4100 + 900', options:['4900','5000','5100'], answer:1},
{unit:3, q:'احسب: 8600 − 3000', options:['5600','5300','5800'], answer:0},
{unit:3, q:'احسب: 225 + 225', options:['400','450','500'], answer:1},
{unit:3, q:'احسب: 3500 − 1250', options:['2250','2350','2500'], answer:0},
{unit:3, q:'احسب: 640 + 160', options:['700','800','810'], answer:1},
{unit:3, q:'احسب: 2750 + 250', options:['2900','3000','3100'], answer:1},
{unit:3, q:'احسب: 5000 − 2750', options:['2250','2350','2500'], answer:0},
{unit:3, q:'مع ليلى 350 ليرة، أعطاها والدها 150 ليرة. كم أصبح معها؟', options:['400','450','500'], answer:2},
{unit:3, q:'في المكتبة 800 كتاب، استعير 125 كتاباً. كم بقي؟', options:['675','685','725'], answer:0},
{unit:3, q:'كان في الحديقة 245 زهرة، زرعنا 155 زهرة إضافية. كم زهرة أصبحت؟', options:['390','400','410'], answer:1},
{unit:3, q:'اشترى سامر لعبة بـ 1250 ليرة من 5000 ليرة. كم بقي معه؟', options:['3750','3850','3500'], answer:0},
{unit:3, q:'احسب: 999 + 1', options:['100','1000','9990'], answer:1},
{unit:3, q:'احسب: 4300 − 800', options:['3400','3500','3600'], answer:1},
{unit:3, q:'احسب: 1500 + 1500', options:['2500','3000','3500'], answer:1},
{unit:3, q:'احسب: 620 − 90', options:['520','530','540'], answer:1},
{unit:3, q:'في صف 28 طالباً، غاب 6 طلاب. كم طالباً حضر؟', options:['22','24','26'], answer:0}
];
const ROUND_SIZE = 15, TIME_PER_QUESTION = 20;
let roundQuestions=[], current=0, score=0, lives=3, timer=null, remaining=TIME_PER_QUESTION, answered=false;
let selectedCharacter='boy';
const characterImages={boy:'assets/boy.svg',girl:'assets/girl.svg'};
function chooseCharacter(character){selectedCharacter=character; $('boy-choice').classList.toggle('selected',character==='boy'); $('girl-choice').classList.toggle('selected',character==='girl'); $('game-mascot').src=characterImages[character];}
const $=id=>document.getElementById(id);
const screens=['welcome-screen','game-screen','result-screen'];
function showScreen(id){screens.forEach(s=>$(s).classList.toggle('hidden',s!==id));}
function shuffle(arr){return [...arr].sort(()=>Math.random()-.5);}
function startGame(){
 clearInterval(timer);score=0;current=0;lives=3;
 const selected=$('unit-select').value;
 let pool=questionBank.filter(q=>selected==='all'||String(q.unit)===selected);
 roundQuestions=shuffle(pool).slice(0,Math.min(ROUND_SIZE,pool.length));
 showScreen('game-screen');renderQuestion();
}
function renderQuestion(){
 clearInterval(timer);answered=false;remaining=TIME_PER_QUESTION;
 const q=roundQuestions[current];
 $('unit-badge').textContent=q.unit===2?'📘 الوحدة الثانية':'📗 الوحدة الثالثة';
 $('question-count').textContent=`السؤال ${current+1} / ${roundQuestions.length}`;
 $('score').textContent=score;$('lives').textContent='❤️'.repeat(lives)+'🖤'.repeat(3-lives);
 $('progress-bar').style.width=`${current/roundQuestions.length*100}%`;
 $('question-text').textContent=q.q;$('question-emoji').textContent=['🧠','✏️','🔢','🎯'][current%4];$('game-mascot').src=characterImages[selectedCharacter];
 $('feedback').textContent='';$('feedback').className='feedback';$('next-btn').classList.add('hidden');$('time').textContent=remaining;
 const answers=$('answers');answers.innerHTML='';
 shuffle(q.options.map((text,index)=>({text,correct:index===q.answer}))).forEach(opt=>{
  const btn=document.createElement('button');btn.className='answer-btn';btn.textContent=opt.text;
  btn.addEventListener('click',()=>chooseAnswer(btn,opt.correct));answers.appendChild(btn);
 });
 timer=setInterval(()=>{remaining--; $('time').textContent=remaining;if(remaining<=0){clearInterval(timer);if(!answered)chooseAnswer(null,false,true);}},1000);
}
function chooseAnswer(btn,isCorrect,timeout=false){
 if(answered)return;answered=true;clearInterval(timer);
 [...$('answers').children].forEach(b=>b.disabled=true);
 const q=roundQuestions[current];
 if(isCorrect){score++;if(btn)btn.classList.add('correct');$('feedback').textContent='🎉 إجابة صحيحة! أحسنت!';$('feedback').classList.add('good');}
 else {lives--;if(btn)btn.classList.add('wrong');const correctText=q.options[q.answer];[...$('answers').children].forEach(b=>{if(b.textContent===correctText)b.classList.add('correct');});$('feedback').textContent=timeout?`⏰ انتهى الوقت! الجواب: ${correctText}`:`😊 لا بأس! الجواب الصحيح: ${correctText}`;$('feedback').classList.add('bad');}
 $('lives').textContent='❤️'.repeat(lives)+'🖤'.repeat(3-lives);$('score').textContent=score;
 $('next-btn').classList.remove('hidden');$('next-btn').textContent=(current===roundQuestions.length-1||lives===0)?'عرض النتيجة 🏆':'السؤال التالي ⬅';
}
function nextQuestion(){if(current>=roundQuestions.length-1||lives===0){finishGame();return;}current++;renderQuestion();}
function finishGame(){clearInterval(timer);showScreen('result-screen');const total=roundQuestions.length,ratio=score/total;
 $('result-emoji').textContent=ratio>=.8?'🏆':ratio>=.55?'🌟':'💪';
 $('result-title').textContent=ratio>=.8?'بطل الرياضيات!':ratio>=.55?'أحسنت، تقدم رائع!':'حاول مرة أخرى، أنت تستطيع!';
 $('final-score').textContent=`${score} / ${total} إجابة صحيحة · ⭐ ${score} نجوم`;
 $('result-message').textContent=ratio>=.8?'ممتاز! أصبحت من أبطال الرياضيات.':ratio>=.55?'نتيجة جيدة! واصل التدريب حتى تتقن كل الأسئلة.':'كل محاولة تعلم جديد. جرب جولة ثانية لتحسن نتيجتك!';
}
$('boy-choice').addEventListener('click',()=>chooseCharacter('boy'));$('girl-choice').addEventListener('click',()=>chooseCharacter('girl'));$('start-btn').addEventListener('click',startGame);$('next-btn').addEventListener('click',nextQuestion);$('retry-btn').addEventListener('click',startGame);$('home-btn').addEventListener('click',()=>{clearInterval(timer);showScreen('welcome-screen');});
