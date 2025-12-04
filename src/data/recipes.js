import adobo from '../assets/adobo.png';
import tinola from '../assets/tinola.png';
import sinigang from '../assets/sinigang.png';
import longganisa from '../assets/longganisa.png';
import tapsilog from '../assets/tapsilog.png';
import lecheflan from '../assets/lecheflan.png';
import bukopandan from '../assets/bukopandan.png';
import mangoshake from '../assets/mangoshake.png';
import icedcoffee from '../assets/icedcoffee.png';
import tempura from '../assets/tempura.png';
import chocolatemousse from '../assets/chocolatemousse.png';
import bananacue from '../assets/bananacue.png';
import ubehalaya from '../assets/ubehalaya.png';
import majablanca from '../assets/majablanca.png';
import cassavacake from '../assets/cassavacake.png';


import kaldereta from '../assets/kaldereta.png';
import pancitcanton from '../assets/pancitcanton.png';
import ginataanghipon from '../assets/ginataanghipon.png';
import bulalo from '../assets/bulalo.png';
import menudo from '../assets/menudo.png';
import monggo from '../assets/monggo.png';
import karekare from '../assets/karekare.png';
import pinakbet from '../assets/pinakbet.png';
import bistek from '../assets/bistek.png';
import lumpiaShanghai from '../assets/lumpiaShanghai.png';
import dinuguan from '../assets/dinuguan.png';
import tortangtalong from '../assets/tortangtalong.png';
import champorado from '../assets/champorado.png';
import arrozcaldo from '../assets/arrozcaldo.png';
import goto_img from '../assets/goto.png';
import tinolangisda from '../assets/tinolangisda.png';
import bilobilo from '../assets/bilobilo.png';
import puto_img from '../assets/puto.png';
import bibingka_img from '../assets/bibingka.png';
import turon_img from '../assets/turon.png';

import chickenempanada from '../assets/chickenempanada.png';
import siopaoasado from '../assets/siopaoasado.png';
import brazodemercedes from '../assets/brazodemercedes.png';
import pandesal from '../assets/pandesal.png';
import bakedmacaroni from '../assets/bakedmacaroni.png';
import embutido from '../assets/embutido.png';
import maxsfriedchicken from '../assets/maxsfriedchicken.png';
import eggpie from '../assets/eggpie.png';
import kfcgravy from '../assets/kfcgravy.png';
import lumpiangsariwa from '../assets/lumpiangsariwa.png';

export const categories = [
  { id: 'all', name: 'Lahat ng Recipe', icon: '🍽️' },
  { id: 'pork', name: 'Baboy', icon: '🐷' },
  { id: 'chicken', name: 'Manok', icon: '🐔' },
  { id: 'shrimp', name: 'Hipon', icon: '🦐' },
  { id: 'breakfast', name: 'Almusal', icon: '🍳' },
  { id: 'dessert', name: 'Panghimagas', icon: '🍰' },
  { id: 'drinks', name: 'Inumin', icon: '🥤' }
];

export const recipes = [
  {
    id: 1,
    name: 'Adobong Baboy',
    category: 'pork',
    image: adobo,
    cook_time: '1 oras 10 minuto',
    servings: 4,
    ingredients: [
      '2 lbs tiyan ng baboy, hiwain sa cubes',
      '1/2 tasa toyo',
      '1/4 tasa suka',
      '6 cloves bawang, dinikdik',
      '2 dahon ng laurel',
      '1 tsp buong paminta',
      '1 tbsp mantika',
      '1 tasa tubig'
    ],
    instructions: [
      'Ibabad ang baboy sa toyo, suka, bawang, at paminta ng 30 minuto.',
      'Bahagyang iprito (sear) ang baboy sa mantika hanggang mag-brown sa lahat ng gilid.',
      'Ibuhos ang pinagbabaran (marinade) at tubig, pagkatapos ay pakuluan sa mahinang apoy hanggang lumambot ang baboy.',
      'Hayaang kumulo hanggang lumapot ang sarsa at ihain nang mainit kasama ng kanin.'
    ]
  },
  {
    id: 2,
    name: 'Tinolang Manok',
    category: 'chicken',
    image: tinola,
    cook_time: '45 minuto',
    servings: 4,
    ingredients: [
      '2 lbs manok',
      '1 hinlalaking luya, hiniwa',
      '1 berdeng papaya, hiniwa',
      '2 tasa dahon ng malunggay',
      '1 sibuyas',
      '4 cloves bawang',
      '1 tbsp patis',
      '4 tasa tubig'
    ],
    instructions: [
      'Igisa ang bawang, sibuyas, at luya sa mantika hanggang bumango.',
      'Idagdag ang manok at lutuin hanggang bahagyang mag-brown.',
      'Ibuhos ang tubig at patis, pagkatapos ay pakuluan.',
      'Idagdag ang hiniwang papaya at lutuin hanggang lumambot.',
      'Idagdag ang dahon ng malunggay bago patayin ang apoy at ihain nang mainit.'
    ]
  },
  {
    id: 3,
    name: 'Sinigang na Hipon',
    category: 'shrimp',
    image: sinigang,
    cook_time: '30 minuto',
    servings: 4,
    ingredients: [
      '1 lb hipon',
      '1 pack sinigang mix',
      '2 kamatis, hinati sa apat',
      '1 sibuyas, hiniwa',
      '2 tasa kangkong',
      '1 labanos, hiniwa',
      '1 talong, hiniwa',
      '4 tasa tubig'
    ],
    instructions: [
      'Pakuluan ang kamatis at sibuyas sa tubig hanggang lumambot.',
      'Idagdag ang labanos at talong, pagkatapos lutuin ng 5 minuto.',
      'Idagdag ang hipon at sinigang mix, pagkatapos ay pakuluan sa mahinang apoy hanggang maging pink ang hipon.',
      'Idagdag ang kangkong sa huli at ihain agad habang mainit.'
    ]
  },
  {
    id: 4,
    name: 'Longganisa na may Sinangag',
    category: 'breakfast',
    image: longganisa,
    cook_time: '25 minuto',
    servings: 2,
    ingredients: [
      '6 piraso longganisa',
      '2 tasa kanin (sinaing)',
      '3 cloves bawang, tinadtad',
      '2 itlog',
      '2 tbsp mantika'
    ],
    instructions: [
      'Iprito ang longganisa sa mantika hanggang mag-brown at maluto.',
      'Alisin ang longganisa at gamitin ang parehong kawali para igisa ang bawang hanggang maging golden (kulay-ginto).',
      'Idagdag ang kanin at haluin (stir-fry) para makagawa ng sinangag.',
      'Iprito ang itlog (sunny-side up) at ihain kasama ng longganisa at sinangag.'
    ]
  },
  {
    id: 5,
    name: 'Tapsilog',
    category: 'breakfast',
    image: tapsilog,
    cook_time: '30 minuto',
    servings: 2,
    ingredients: [
      '200g beef tapa',
      '2 tasa kanin (sinaing)',
      '2 itlog',
      '1 tbsp mantika',
      'sawsawang suka'
    ],
    instructions: [
      'Lutuin ang beef tapa sa kawali hanggang lumambot at mag-caramelize.',
      'Igisa ang bawang at idagdag ang kanin para makagawa ng sinangag.',
      'Iprito ang itlog (sunny-side up).',
      'Ihain ang tapa, sinangag, at itlog (TAPSILOG) nang magkakasama, na may sawsawang suka sa gilid.'
    ]
  },
  {
    id: 6,
    name: 'Leche Flan',
    category: 'dessert',
    image: lecheflan,
    cook_time: '1 oras',
    servings: 8,
    ingredients: [
      '10 pula ng itlog (egg yolks)',
      '1 lata evaporated milk (evap)',
      '1 lata condensed milk (condensada)',
      '1 tsp vanilla extract',
      '1 tasa asukal',
      '1/4 tasa tubig'
    ],
    instructions: [
      'Gumawa ng arnibal (caramel) sa pamamagitan ng pagtunaw ng asukal at tubig hanggang maging golden brown.',
      'Ibuhos ang arnibal sa llanera o molde at itabi.',
      'Dahan-dahang paghaluin ang pula ng itlog, evap, condensada, at vanilla. Iwasang bumula.',
      'Salain ang pinaghalong gatas at itlog at ibuhos sa ibabaw ng tumigas na arnibal.',
      'Takpan ng foil at i-steam ng 45 minuto.',
      'Palamigin nang husto bago ilagay sa ref ng hindi bababa sa 4 na oras bago ihain.'
    ]
  },
  {
    id: 7,
    name: 'Buko Pandan',
    category: 'dessert',
    image: bukopandan,
    cook_time: '1 oras 15 minuto',
    servings: 10,
    ingredients: [
      '2 tasa kinayod na buko',
      '1 pack berdeng gulaman (gelatin)',
      '1 tasa nata de coco',
      '1 tasa condensed milk',
      '1 tasa all-purpose cream'
    ],
    instructions: [
      'Lutuin ang gulaman ayon sa panuto sa pakete at hayaang tumigas.',
      'Hiwain ang gulaman sa maliliit na cubes at ihalo sa buko at nata de coco.',
      'Idagdag ang condensada at all-purpose cream, haluin nang dahan-dahan.',
      'Palamigin sa ref ng hindi bababa sa 1 oras bago ihain nang malamig.'
    ]
  },
  {
    id: 8,
    name: 'Mango Shake',
    category: 'drinks',
    image: mangoshake,
    cook_time: '5 minuto',
    servings: 1,
    ingredients: [
      '1 hinog na mangga',
      '1/2 tasa gatas',
      '1 tasa yelo',
      '1 tbsp asukal'
    ],
    instructions: [
      'Balatan at hiwain ang mangga, pagkatapos ay ilagay sa blender.',
      'Idagdag ang gatas, yelo, at asukal.',
      'I-blend hanggang maging pino at creamy.',
      'Ibuhos sa isang malamig na baso at ihain kaagad.'
    ]
  },
  {
    id: 9,
    name: 'Malamig na Kape (Iced Coffee)',
    category: 'drinks',
    image: icedcoffee,
    cook_time: '10 minuto',
    servings: 1,
    ingredients: [
      '1 tasa brewed coffee (tinimplang kape)',
      '1/2 tasa gatas',
      'yelo (ice cubes)',
      '2 tsp asukal'
    ],
    instructions: [
      'Magtimpla ng kape at hayaang lumamig (room temperature).',
      'Punuin ang baso ng yelo at ibuhos ang kape.',
      'Idagdag ang gatas at asukal, pagkatapos ay haluin nang mabuti.',
      'Ihain nang malamig na may straw.'
    ]
  },
  {
    id: 10,
    name: 'Shrimp Tempura',
    category: 'shrimp',
    image: tempura,
    cook_time: '40 minuto',
    servings: 3,
    ingredients: [
      '12 hipon, binalatan at inalisan ng dumi',
      '1 tasa harina (flour)',
      '1 itlog',
      '1 tasa malamig na tubig (na may yelo)',
      '1/2 tasa cornstarch',
      'mantika para sa pagprito'
    ],
    instructions: [
      'Patuyuin ang hipon at lagyan ng maliliit na hiwa sa tiyan para hindi kumulot.',
      'Paghaluin ang harina, itlog, at tubig na may yelo para makagawa ng manipis na batter.',
      'Painitin ang mantika sa malalim na kawali hanggang 170°C (medium-high heat).',
      'Isawsaw ang bawat hipon sa batter at iprito kaagad hanggang maging golden brown at malutong.',
      'Patuyuin sa paper towels at ihain kasama ng sawsawan ng tempura.'
    ]
  },
  {
    id: 11,
    name: 'Chocolate Mousse',
    category: 'dessert',
    image: chocolatemousse,
    cook_time: '1 oras 30 minuto',
    servings: 6,
    ingredients: [
      '200g dark chocolate',
      '3 itlog, pinaghiwalay (ang pula at puti)',
      '1 tasa all-purpose cream',
      '1/4 tasa asukal',
      '1 tsp vanilla extract'
    ],
    instructions: [
      'Tunawin ang dark chocolate sa double boiler, pagkatapos ay palamigin nang bahagya.',
      'Batihin ang puti ng itlog (egg whites) hanggang mag-soft peaks, habang dahan-dahang idinadagdag ang asukal.',
      'Ihalo (fold in) ang pula ng itlog (egg yolks) at vanilla sa tinunaw na chocolate.',
      'Dahan-dahang ihalo (fold in) ang binating puti ng itlog.',
      'Palamigin ng hindi bababa sa 1 oras bago ihain.'
    ]
  },
  {
    id: 12,
    name: 'Banana Cue na may Arnibal',
    category: 'dessert',
    image: bananacue,
    cook_time: '20 minuto',
    servings: 4,
    ingredients: [
      '6 saging na saba',
      '1 tasa brown sugar (asukal na pula)',
      '2 tasa mantika',
      'tuhugan (wooden skewers)'
    ],
    instructions: [
      'Painitin ang mantika sa kawali at idagdag ang brown sugar.',
      'Kapag nagsimula nang matunaw ang asukal, idagdag ang saging at balutan ito ng arnibal.',
      'Iprito hanggang maging golden brown at mag-caramelize.',
      'Tuhugin at ihain habang mainit.'
    ]
  },
  {
    id: 13,
    name: 'Ube Halaya',
    category: 'dessert',
    image: ubehalaya,
    cook_time: '1 oras',
    servings: 8,
    ingredients: [
      '1 kg nilaga at kinayod na ube',
      '1 lata condensada',
      '1 lata evap',
      '1/2 tasa butter (mantikilya)',
      '1 tasa asukal'
    ],
    instructions: [
      'Tunawin ang butter sa malaking kawali.',
      'Idagdag ang kinayod na ube, condensada, evap, at asukal.',
      'Patuloy na haluin sa mahinang apoy hanggang lumapot at maging malagkit.',
      'Ilipat sa molde, palamigin, at ilagay sa ref bago ihain.'
    ]
  },
  {
    id: 14,
    name: 'Maja Blanca',
    category: 'dessert',
    image: majablanca,
    cook_time: '45 minuto',
    servings: 10,
    ingredients: [
      '4 tasa gata ng niyog',
      '3/4 tasa cornstarch',
      '1 lata condensada',
      '1/2 tasa asukal',
      '1/2 tasa butil ng mais'
    ],
    instructions: [
      'Pagsamahin ang gata, condensada, asukal, at cornstarch sa isang kaldero.',
      'Patuloy na haluin sa katamtamang apoy hanggang lumapot.',
      'Idagdag ang butil ng mais at haluing mabuti.',
      'Ibuhos sa mga molde, palamigin, at lagyan ng toasted coconut (latik o sinangag na niyog) sa ibabaw bago ihain.'
    ]
  },
  {
    id: 15,
    name: 'Cassava Cake',
    category: 'dessert',
    image: cassavacake,
    cook_time: '1 oras 15 minuto',
    servings: 12,
    ingredients: [
      '2 tasa kinayod na kamoteng kahoy (cassava)',
      '1 lata condensada',
      '1 lata gata ng niyog',
      '1/2 tasa asukal',
      '2 itlog'
    ],
    instructions: [
      'Painitin ang oven sa 180°C.',
      'Paghaluin ang cassava, condensada, gata, asukal, at itlog sa isang bowl.',
      'Ibuhos ang pinaghalong sangkap sa isang greased (pinahiran ng mantika/butter) baking pan.',
      'I-bake ng 45 minuto o hanggang tumigas at maging golden brown sa ibabaw.',
      'Palamigin nang bahagya bago hiwain.'
    ]
  },
  {
    id: 16,
    name: 'Kalderetang Baka',
    category: 'pork',
    image: kaldereta,
    cook_time: '1 oras 45 minuto',
    servings: 6,
    ingredients: [
      '1 kilo baka, hiniwa sa cubes',
      '1/2 tasang tomato sauce',
      '3 kutsarang liver spread',
      '2 pirasong patatas, hiniwa',
      '1 pirasong carrots, hiniwa',
      '1 red bell pepper, hiniwa',
      '1 green bell pepper, hiniwa',
      '1 sibuyas, hiniwa',
      '5 butil bawang, dinurog',
      '2 dahon ng laurel',
      '1/4 tasang gatas (evap o fresh milk)',
      '3 tasang tubig',
      '2 kutsarang mantika',
      'asin at paminta'
    ],
    instructions: [
      'Igisa ang bawang at sibuyas hanggang bumango.',
      'Ilagay ang baka at lutuin hanggang mag-brown.',
      'Ibuhos ang tomato sauce, liver spread, at tubig. Pakuluan.',
      'Ilagay ang dahon ng laurel at hayaang maluto ng 1 oras o hanggang lumambot ang karne.',
      'Ilagay ang patatas at carrots, lutuin ng 10 minuto.',
      'Ilagay ang bell peppers at gatas, pakuluan ng 5 minuto pa.',
      'Timplahan ng asin at paminta. Ihain na mainit.'
    ]
  },
  {
    id: 17,
    name: 'Pancit Canton',
    category: 'pork',
    image: pancitcanton,
    cook_time: '30 minuto',
    servings: 6,
    ingredients: [
      '500 gramos pancit canton noodles',
      '200 gramos baboy, hiniwa ng manipis',
      '200 gramos manok, hiniwa ng manipis',
      '1/4 repolyo, hiniwa',
      '2 carrots, hiniwa ng manipis',
      '1/4 tasa sitaw, hiniwa',
      '1 sibuyas, hiniwa',
      '5 butil bawang, tinadtad',
      '3 kutsarang toyo',
      '2 kutsarang oyster sauce',
      '2 tasang sabaw ng manok',
      'mantika',
      'kalamansi at toyo pang-sawsaw'
    ],
    instructions: [
      'Pakuluan ang sabaw at ibabad ang pancit canton ng 2 minuto (o ayon sa package). Alisin at patuyuin.',
      'Igisa ang bawang at sibuyas hanggang bumango.',
      'Ilagay ang baboy at manok, lutuin hanggang maluto.',
      'Ilagay ang carrots at sitaw, igisa ng 3 minuto.',
      'Ilagay ang repolyo at haluin.',
      'Ibuhos ang toyo, oyster sauce, at kaunting sabaw.',
      'Ilagay ang pancit canton at haluing mabuti hanggang kumapit ang lasa.',
      'Ihain na may kasamang kalamansi.'
    ]
  },
  {
    id: 18,
    name: 'Ginataang Hipon',
    category: 'shrimp',
    image: ginataanghipon,
    cook_time: '25 minuto',
    servings: 4,
    ingredients: [
      '500 gramos hipon, binalatan (maaaring iwan ang ulo at buntot)',
      '2 tasang gata ng niyog',
      '1 sibuyas, hiniwa',
      '5 butil bawang, dinurog',
      '1 kutsaritang luya, tinadtad',
      '2 pirasong siling haba',
      '1 pirasong kalabasa, hiniwa',
      '1 tasa sitaw, hiniwa',
      '1 kutsarang patis',
      'mantika'
    ],
    instructions: [
      'Igisa ang bawang, sibuyas, at luya.',
      'Ibuhos ang gata at pakuluan ng 5 minuto.',
      'Ilagay ang kalabasa at lutuin hanggang medyo lumambot.',
      'Ilagay ang hipon at lutuin hanggang maging pink.',
      'Ilagay ang sitaw at siling haba.',
      'Timplahan ng patis at lutuin ng 3 minuto pa.',
      'Ihain na mainit kasama ng kanin.'
    ]
  },
  {
    id: 19,
    name: 'Bulalo',
    category: 'pork',
    image: bulalo,
    cook_time: '2 oras 30 minuto',
    servings: 6,
    ingredients: [
      '2 kilo beef shank na may bone marrow',
      '1 pirasong mais, hiniwa ng tatlo',
      '1/4 repolyo, hiniwa',
      '2 pirasong patatas',
      '1 pirasong saging na saba',
      '1 bungkos pechay',
      '1 sibuyas, buo',
      '8 tasang tubig',
      'patis',
      'buong paminta'
    ],
    instructions: [
      'Pakuluan ang beef shank sa tubig kasama ang sibuyas at buong paminta.',
      'Alisin ang lumutang na dumi (scum) sa ibabaw.',
      'Takpan at hayaang kumulo nang mabagal ng 2 oras o hanggang lumambot ang karne.',
      'Ilagay ang mais at patatas, lutuin ng 15 minuto.',
      'Ilagay ang saging na saba at lutuin ng 5 minuto pa.',
      'Ilagay ang repolyo at pechay, lutuin ng 3 minuto.',
      'Timplahan ng patis. Ihain na mainit na may sawsawang patis at kalamansi.'
    ]
  },
  {
    id: 20,
    name: 'Menudo',
    category: 'pork',
    image: menudo,
    cook_time: '1 oras',
    servings: 6,
    ingredients: [
      '500 gramos baboy, hiniwa sa cubes',
      '200 gramos atay ng baboy, hiniwa',
      '1/2 tasang tomato sauce',
      '2 pirasong patatas, cubed',
      '1 pirasong carrots, cubed',
      '1 red bell pepper, hiniwa',
      '1 sibuyas, hiniwa',
      '5 butil bawang, dinurog',
      '1/4 tasang pasas (raisins)',
      '1 tasang tubig',
      '2 dahon ng laurel',
      'mantika, asin, paminta'
    ],
    instructions: [
      'Igisa ang bawang at sibuyas.',
      'Ilagay ang baboy at lutuin hanggang mag-brown.',
      'Ilagay ang atay at igisa ng 2 minuto.',
      'Ibuhos ang tomato sauce at tubig, ilagay ang dahon ng laurel.',
      'Pakuluan at hayaang maluto ng 30 minuto.',
      'Ilagay ang patatas at carrots, lutuin ng 10 minuto.',
      'Ilagay ang bell pepper at pasas, lutuin ng 5 minuto pa.',
      'Timplahan ng asin at paminta. Ihain na mainit.'
    ]
  },
  {
    id: 21,
    name: 'Ginisang Monggo',
    category: 'pork',
    image: monggo,
    cook_time: '1 oras',
    servings: 6,
    ingredients: [
      '2 tasang munggo (monggo beans)',
      '200 gramos baboy, hiniwa',
      '1 pirasong ampalaya, hiniwa (opsyonal)',
      '2 pirasong kamatis, hiniwa',
      '1 sibuyas, hiniwa',
      '5 butil bawang, dinurog',
      '1 tasa dahon ng malunggay o ampalaya',
      '1 kutsarang patis',
      '4 tasang tubig',
      'mantika, asin'
    ],
    instructions: [
      'Pakuluan ang munggo sa tubig hanggang lumambot, mga 40 minuto. Itabi.',
      'Igisa ang bawang, sibuyas, at kamatis.',
      'Ilagay ang baboy at lutuin hanggang maluto.',
      'Ibuhos ang nilutong munggo (kasama ang sabaw) at haluin.',
      'Ilagay ang ampalaya kung gusto, lutuin ng 5 minuto.',
      'Timplahan ng patis at asin.',
      'Ilagay ang malunggay bago patayin ang apoy.',
      'Ihain na mainit kasama ang pritong isda o bagoong.'
    ]
  },
  {
    id: 22,
    name: 'Kare-Kare',
    category: 'pork',
    image: karekare,
    cook_time: '2 oras',
    servings: 8,
    ingredients: [
      '1 kilo beef tripe (tuwalya) at buntot ng baka',
      '1/2 tasang peanut butter',
      '1/4 tasang mani (sinangag), dinurog',
      '3 kutsarang atsuete powder (o atsuete oil)',
      '1 bungkos pechay',
      '1 talong, hiniwa',
      '1 tasa sitaw, hiniwa',
      '1 sibuyas, hiniwa',
      '5 butil bawang, dinurog',
      '6 tasang tubig (o pinakuluang sabaw)',
      'bagoong alamang pang-sawsaw'
    ],
    instructions: [
      'Pakuluan ang tripe at buntot ng baka sa tubig ng 1.5 oras o hanggang lumambot.',
      'Igisa ang bawang at sibuyas.',
      'Ilagay ang atsuete powder at sabaw ng karne, haluin.',
      'Ilagay ang peanut butter at durog na mani, haluin hanggang lumapot.',
      'Ilagay ang nilutong karne at pakuluan ng 15 minuto.',
      'Ilagay ang talong at sitaw, lutuin ng 5 minuto.',
      'Ilagay ang pechay at lutuin ng 2 minuto pa.',
      'Ihain na mainit na may kasamang bagoong.'
    ]
  },
  {
    id: 23,
    name: 'Pinakbet',
    category: 'pork',
    image: pinakbet,
    cook_time: '30 minuto',
    servings: 4,
    ingredients: [
      '200 gramos baboy, hiniwa',
      '1 pirasong kalabasa, hiniwa',
      '1 pirasong talong, hiniwa',
      '5 pirasong okra',
      '1 tasa sitaw, hiniwa',
      '1 pirasong ampalaya, hiniwa',
      '2 pirasong kamatis, hiniwa',
      '1 sibuyas, hiniwa',
      '5 butil bawang, dinurog',
      '2 kutsarang bagoong isda',
      '1/2 tasang tubig'
    ],
    instructions: [
      'Igisa ang bawang, sibuyas, at kamatis.',
      'Ilagay ang baboy at lutuin hanggang maluto.',
      'Ibuhos ang bagoong at tubig, pakuluan.',
      'Ilagay ang kalabasa, takpan at lutuin ng 5 minuto.',
      'Ilagay ang talong at sitaw, lutuin ng 3 minuto.',
      'Ilagay ang okra at ampalaya, lutuin ng 3 minuto pa.',
      'Huwag masyadong haluin para hindi madurog ang gulay.',
      'Ihain na mainit.'
    ]
  },
  {
    id: 24,
    name: 'Bistek Tagalog',
    category: 'pork',
    image: bistek,
    cook_time: '45 minuto',
    servings: 4,
    ingredients: [
      '500 gramos beef sirloin, hiniwa ng manipis',
      '1/2 tasang toyo',
      '1/4 tasang kalamansi juice',
      '3 pirasong sibuyas, hiniwa ng bilog (rings)',
      '5 butil bawang, dinurog',
      '1/2 tasang tubig',
      '2 kutsarang mantika',
      'paminta'
    ],
    instructions: [
      'Ibabad ang karne sa toyo, kalamansi, bawang, at paminta ng 30 minuto.',
      'Alisin ang karne sa pinagbabaran at itabi ang pinagbabaran (marinade).',
      'Sa mainit na mantika, iprito ang karne hanggang mag-brown.',
      'Ilagay ang sibuyas (rings) at igisa ng bahagya (huwag lutuin masyado). Alisin sa kawali.',
      'Ibuhos ang pinagbabaran (marinade) at tubig, pakuluan.',
      'Ibalik ang karne (hindi pa kasama ang sibuyas) at hayaang kumulo nang mabagal hanggang lumapot ang sarsa, mga 15 minuto.',
      'Ihain na may sibuyas sa ibabaw, kasama ng kanin.'
    ]
  },
  {
    id: 25,
    name: 'Lumpia Shanghai',
    category: 'pork',
    image: lumpiaShanghai,
    cook_time: '1 oras',
    servings: 8,
    ingredients: [
      '500 gramos giniling na baboy',
      '1 pirasong carrots, tinadtad nang pino',
      '1 sibuyas, tinadtad nang pino',
      '3 butil bawang, tinadtad nang pino',
      '1 itlog',
      '2 kutsarang toyo',
      '30 pirasong lumpia wrapper',
      'mantika pang-prito',
      'sweet chili sauce pang-sawsaw'
    ],
    instructions: [
      'Paghaluin ang giniling na baboy, carrots, sibuyas, bawang, itlog, at toyo.',
      'Kumuha ng lumpia wrapper at lagyan ng 1 kutsara ng mixture.',
      'Balutin ng mahigpit at idikit ang dulo gamit ang tubig.',
      'Magpainit ng mantika sa malalim na kawali.',
      'Iprito ang lumpia hanggang maging golden brown at crispy.',
      'Patuyuin sa paper towel.',
      'Ihain na mainit na may sweet chili sauce.'
    ]
  },
  {
    id: 26,
    name: 'Dinuguan',
    category: 'pork',
    image: dinuguan,
    cook_time: '45 minuto',
    servings: 6,
    ingredients: [
      '500 gramos baboy (liempo o kasim), hiniwa sa cubes',
      '1/2 tasang dugo ng baboy',
      '1/4 tasang suka',
      '2 pirasong siling haba',
      '1 sibuyas, hiniwa',
      '5 butil bawang, dinurog',
      '1 tasang tubig',
      '2 kutsarang patis',
      'mantika, asin, paminta'
    ],
    instructions: [
      'Igisa ang bawang at sibuyas.',
      'Ilagay ang baboy at lutuin hanggang mag-brown.',
      'Ibuhos ang tubig at pakuluan hanggang lumambot ang baboy, mga 30 minuto.',
      'Ibuhos ang suka at huwag haluin, hayaang kumulo ng 2 minuto (para maluto ang suka).',
      'Ilagay ang dugo at haluing mabuti para hindi mamuo.',
      'Ilagay ang siling haba at timplahan ng patis, asin, at paminta.',
      'Pakuluan ng 5 minuto pa. Ihain na mainit na may puto.'
    ]
  },
  {
    id: 27,
    name: 'Tortang Talong',
    category: 'breakfast',
    image: tortangtalong,
    cook_time: '20 minuto',
    servings: 2,
    ingredients: [
      '3 pirasong talong',
      '2 itlog',
      '1 sibuyas, tinadtad nang pino (opsyonal)',
      '1 kamatis, tinadtad nang pino (opsyonal)',
      'mantika pang-prito',
      'asin at paminta',
      'ketchup o toyo na may kalamansi pang-sawsaw'
    ],
    instructions: [
      'Ihawin o ilaga ang talong hanggang lumambot ang balat.',
      'Palamigin, tanggalin ang balat, at durugin ang laman gamit ang tinidor, iiwan ang tangkay.',
      'Batiin ang itlog kasama ang asin, at paminta (at opsyonal na sibuyas/kamatis).',
      'Isawsaw ang durog na talong sa binating itlog.',
      'Magpainit ng mantika at iprito ang talong hanggang golden brown sa magkabilang gilid.',
      'Ihain na mainit na may sawsawang ketchup.'
    ]
  },
  {
    id: 28,
    name: 'Champorado',
    category: 'breakfast',
    image: champorado,
    cook_time: '25 minuto',
    servings: 4,
    ingredients: [
      '1 tasang malagkit na bigas',
      '3 kutsarang tablea (cocoa powder ay pwede rin)',
      '1/2 tasang asukal (o ayon sa panlasa)',
      '4 tasang tubig',
      'gatas (evap o condensed) para sa topping',
      'tuyo o daing (opsyonal na kapares)'
    ],
    instructions: [
      'Hugasan ang malagkit at ilagay sa kaldero kasama ang tubig.',
      'Pakuluan, haluin paminsan-minsan, at lutuin ng 15 minuto o hanggang lumambot ang bigas.',
      'Ilagay ang tablea o cocoa powder at haluing mabuti hanggang matunaw.',
      'Ilagay ang asukal at timplahan ayon sa gusto.',
      'Lutuin ng 5 minuto pa hanggang lumapot.',
      'Ihain na mainit na may buhos na gatas at kasamang pritong tuyo.'
    ]
  },
  {
    id: 29,
    name: 'Arroz Caldo',
    category: 'chicken',
    image: arrozcaldo,
    cook_time: '1 oras',
    servings: 6,
    ingredients: [
      '500 gramos manok, hiniwa',
      '1 tasang bigas (ordinaryo o malagkit)',
      '1 kutsarang luya, hiniwa ng manipis',
      '5 butil bawang, dinurog',
      '1 sibuyas, hiniwa',
      '2 kutsarang patis',
      '6 tasang sabaw ng manok (o tubig)',
      '2 itlog, pinakuluan at hiniwa',
      'spring onions (dahon ng sibuyas), tinadtad',
      'kalamansi',
      'sinangag na bawang (toasted garlic)'
    ],
    instructions: [
      'Igisa ang bawang, sibuyas, at luya hanggang bumango.',
      'Ilagay ang manok at lutuin hanggang mag-brown.',
      'Ilagay ang bigas (hinugasan) at igisa ng 2 minuto.',
      'Ibuhos ang sabaw ng manok at pakuluan.',
      'Hayaang kumulo nang mabagal hanggang lumapot ang bigas, mga 40 minuto.',
      'Haluin paminsan-minsan para hindi dumikit sa ilalim.',
      'Timplahan ng patis. Ihain na mainit na may topping na itlog, spring onions, sinangag na bawang, at kalamansi.'
    ]
  },
  {
    id: 30,
    name: 'Goto',
    category: 'pork',
    image: goto_img,
    cook_time: '2 oras',
    servings: 6,
    ingredients: [
      '500 gramos beef tripe (tuwalya), hiniwa ng maliit',
      '1 tasang bigas (malagkit o halo)',
      '1 kutsarang luya, hiniwa ng manipis',
      '5 butil bawang, dinurog',
      '1 sibuyas, hiniwa',
      '2 kutsarang patis',
      '8 tasang tubig (o sabaw ng pinakuluang tripe)',
      'atsuete powder para sa kulay (opsyonal)',
      'toyo, kalamansi, at chicharon pang-topping'
    ],
    instructions: [
      'Pakuluan ang tripe sa tubig ng 1.5 oras o hanggang lumambot. Hiwain at itabi ang sabaw.',
      'Igisa ang bawang, sibuyas, at luya.',
      'Ilagay ang nilutong tripe at bigas (hinugasan), igisa ng 2 minuto.',
      'Ibuhos ang sabaw ng tripe at atsuete powder (kung gagamit).',
      'Pakuluan at hayaang kumulo nang mabagal hanggang lumapot, mga 40 minuto.',
      'Timplahan ng patis at paminta.',
      'Ihain na mainit na may topping na sibuyas, chicharon, toyo, at kalamansi.'
    ]
  },
  {
    id: 31,
    name: 'Tinolang Isda',
    category: 'chicken',
    image: tinolangisda,
    cook_time: '30 minuto',
    servings: 4,
    ingredients: [
      '1 kilong isda (maya-maya o lapu-lapu, o malaking isda)',
      '1 kutsarang luya, hiniwa',
      '1 sibuyas, hiniwa',
      '1 berdeng papaya, hiniwa (o sayote)',
      '2 tasa dahon ng sili o malunggay',
      '1 kutsarang patis',
      '4 tasang tubig (o hugas-bigas)',
      'mantika'
    ],
    instructions: [
      'Igisa ang luya at sibuyas hanggang bumango.',
      'Ibuhos ang tubig (o hugas-bigas) at pakuluan.',
      'Ilagay ang papaya at lutuin ng 10 minuto.',
      'Ilagay ang isda at timplahan ng patis.',
      'Lutuin ng 10 minuto o hanggang maluto ang isda (huwag i-overcook).',
      'Ilagay ang dahon ng sili o malunggay bago patayin ang apoy.',
      'Ihain na mainit.'
    ]
  },
  {
    id: 32,
    name: 'Ginataang Bilo-Bilo',
    category: 'dessert',
    image: bilobilo,
    cook_time: '45 minuto',
    servings: 8,
    ingredients: [
      '1 tasang bola-bolang galapong (bilo-bilo)',
      '2 tasang gata ng niyog',
      '1 tasang saging na saba, hiniwa',
      '1 tasang kamote, cubed',
      '1/2 tasang langka, hiniwa',
      '1/2 tasang sago (tapioca pearls), naluto',
      '1/2 tasang asukal',
      '2 tasang tubig'
    ],
    instructions: [
      'Pakuluan ang tubig at ilagay ang kamote, lutuin ng 10 minuto.',
      'Ilagay ang saging at langka, lutuin ng 5 minuto.',
      'Ilagay ang bilo-bilo at lutuin hanggang lumutang na.',
      'Ibuhos ang gata at ilagay ang asukal, haluin.',
      'Ilagay ang luto nang sago at pakuluan ng 5 minuto pa.',
      'Ihain na mainit o malamig.'
    ]
  },
  {
    id: 33,
    name: 'Puto',
    category: 'dessert',
    image: puto_img,
    cook_time: '30 minuto',
    servings: 12,
    ingredients: [
      '2 tasang all-purpose flour',
      '1 tasang asukal',
      '1 tasang gatas',
      '2 itlog',
      '2 kutsarang baking powder',
      '1/4 tasang mantika (natunaw na butter)',
      'keso para sa topping'
    ],
    instructions: [
      'Paghaluin ang mga tuyong sangkap (flour at baking powder).',
      'Batiin ang itlog at asukal hanggang matunaw ang asukal.',
      'Ilagay ang gatas at mantika, haluin.',
      'Isama ang dry ingredients sa wet ingredients at haluing mabuti (huwag overmix).',
      'Ibuhos sa puto molds na may 3/4 lang ang laman.',
      'Lagyan ng keso sa ibabaw.',
      'I-steam ng 15-20 minuto o hanggang maluto (gamit ang toothpick test).',
      'Hayaang lumamig ng kaunti bago alisin sa mold.'
    ]
  },
  {
    id: 34,
    name: 'Bibingka',
    category: 'dessert',
    image: bibingka_img,
    cook_time: '40 minuto',
    servings: 8,
    ingredients: [
      '2 tasang rice flour (galapong)',
      '1 tasang asukal',
      '1 tasang gata ng niyog',
      '3 itlog',
      '2 kutsarang baking powder',
      '1/4 tasang mantikilya (butter), natunaw',
      'dahon ng saging',
      'itlog na maalat at kinayod na niyog para sa topping'
    ],
    instructions: [
      'Paghaluin ang rice flour at baking powder.',
      'Batiin ang itlog at asukal.',
      'Ilagay ang gata at tunaw na mantikilya, haluin.',
      'Isama ang flour mixture at haluing mabuti hanggang walang buo-buo (lumps).',
      'Painitin ang oven sa 180°C.',
      'Lagyan ng dahon ng saging (na pinainit sa apoy para lumambot) ang bilao o baking pan.',
      'Ibuhos ang mixture at lagyan ng topping na itlog na maalat.',
      'Lutuin ng 25-30 minuto o hanggang golden brown.',
      'Pahiran ng mantikilya at budburan ng kinayod na niyog bago ihain.'
    ]
  },
  {
    id: 35,
    name: 'Turon',
    category: 'dessert',
    image: turon_img,
    cook_time: '25 minuto',
    servings: 6,
    ingredients: [
      '6 pirasong saba banana',
      '1/2 tasang brown sugar',
      '12 pirasong lumpia wrapper',
      '1/4 tasang langka strips (opsyonal)',
      '2 tasang mantika pang-prito'
    ],
    instructions: [
      'Hiwain ang bawat saba sa kalahati (pahaba).',
      'Kumuha ng lumpia wrapper at ilatag. Lagyan ng saba at langka.',
      'Budburan ng brown sugar.',
      'Balutin ng mahigpit at idikit ang dulo gamit ang tubig.',
      'Magpainit ng mantika sa kawali.',
      'Iprito ang turon hanggang maging golden brown at crispy.',
      'Ilagay ang natirang brown sugar sa kawali at hayaang matunaw para gumawa ng arnibal (caramel coating).',
      'Haluin ang turon sa arnibal at ihain na mainit.'
    ]
  },

  // --- MGA BAGONG RECIPE MULA SA IMAGE (36-45) ---
  {
    id: 36,
    name: 'Chicken Empanada',
    category: 'chicken',
    image: chickenempanada,
    cook_time: '1 oras',
    servings: 12, // pieces
    ingredients: [
      '2 tasa all-purpose flour (para sa dough)',
      '1/2 tasa malamig na butter, cubed',
      '1 itlog',
      '3-4 kutsarang malamig na tubig',
      '1 kutsarang asukal',
      '1/2 kutsaritang asin',
      '500g giniling na manok',
      '1 patatas, maliit na cubes',
      '1 carrots, maliit na cubes',
      '1/4 tasa pasas',
      '1 sibuyas, tinadtad',
      '3 bawang, tinadtad',
      '2 kutsarang toyo',
      '1 kutsarang mantika',
      '1 itlog (para sa egg wash)'
    ],
    instructions: [
      'Gawin ang dough: Paghaluin ang harina, asin, at asukal. Ilagay ang butter at i-mix hanggang maging parang breadcrumbs. Idagdag ang binating itlog at tubig. Masahin sandali, i-wrap sa plastic, at palamigin (chill) ng 30 minuto.',
      'Gawin ang Palaman: Igisa ang bawang at sibuyas. Idagdag ang manok at lutuin. Ilagay ang toyo. Idagdag ang patatas at carrots, lutuin hanggang lumambot. Ilagay ang pasas. Palamigin.',
      'I-roll ang dough at gumamit ng bilog na cutter (mga 4 inches).',
      'Lagyan ng 1-2 kutsarang palaman ang gitna ng bawat bilog.',
      'Basain ang gilid, tiklupin, at i-seal gamit ang tinidor o i-crimp (pleat) ang gilid.',
      'Pahiran ng egg wash (binating itlog) ang ibabaw.',
      'I-bake sa 190°C (375°F) ng 25-30 minuto o hanggang maging golden brown. Pwede ring i-deep fry.'
    ]
  },
  {
    id: 37,
    name: 'Siopao Asado',
    category: 'pork',
    image: siopaoasado,
    cook_time: '2 oras 30 minuto',
    servings: 12, // buns
    ingredients: [
      '4 tasa all-purpose flour (para sa dough)',
      '1 tasa maligamgam na tubig',
      '1/2 tasa asukal',
      '1 kutsarang active dry yeast',
      '3 kutsarang mantika',
      '1 kutsaritang baking powder',
      '500g baboy (kasim), cubed',
      '1/2 tasa toyo',
      '1/2 tasa asukal (para sa palaman)',
      '2 kutsarang oyster sauce',
      '1 sibuyas, tinadtad',
      '1 kutsarang cornstarch (tinunaw sa 2 kutsarang tubig)',
      'Star anise (opsyonal)'
    ],
    instructions: [
      'Gawin ang Palaman: Ibabad ang baboy sa toyo, asukal, oyster sauce, at sibuyas ng 30 minuto. Pakuluan hanggang lumambot. Palaputin gamit ang tinunaw na cornstarch. Palamigin.',
      'Gawin ang Dough: Tunawin ang yeast at 1 kutsarang asukal sa maligamgam na tubig. Hayaan ng 10 minuto.',
      'Sa isang bowl, ihalo ang harina, natitirang asukal, at baking powder. Idagdag ang yeast mixture at mantika. Masahin hanggang maging makinis (10-15 minuto).',
      'Paalsahin ang dough sa isang greased bowl ng 1 oras o hanggang dumoble ang laki.',
      'Hatiin ang dough sa 12 piraso. I-flatten ang bawat isa.',
      'Lagyan ng asado na palaman, isara, at ilagay sa parchment paper.',
      'Paalsahin muli ng 15 minuto.',
      'I-steam sa loob ng 15-20 minuto.'
    ]
  },
  {
    id: 38,
    name: 'Brazo De Mercedes',
    category: 'dessert',
    image: brazodemercedes,
    cook_time: '1 oras',
    servings: 8,
    ingredients: [
      '10 pula ng itlog (egg yolks, para sa yema)',
      '1 lata condensada',
      '1 kutsarang butter',
      '1 kutsaritang vanilla extract',
      '10 puti ng itlog (egg whites, para sa meringue)',
      '1 tasa asukal (para sa meringue)',
      '1 kutsaritang cream of tartar',
      'Confectioners (powdered) sugar para sa dusting'
    ],
    instructions: [
      'Gawin ang Yema: Sa isang kawali (non-stick), haluin ang pula ng itlog, condensada, at vanilla. Lutuin sa mahinang apoy habang patuloy na hinahalo hanggang lumapot. Idagdag ang butter. Palamigin.',
      'Gawin ang Meringue: Batihin ang puti ng itlog at cream of tartar hanggang bumula. Dahan-dahang idagdag ang asukal habang patuloy na binabati hanggang maging "stiff peaks" (matigas at makintab).',
      'Ilagay ang meringue sa isang baking sheet na may parchment paper. I-bake sa 170°C (340°F) ng 20-25 minuto hanggang bahagyang mag-brown.',
      'Paglabas sa oven, baliktarin agad sa ibabaw ng parchment paper na binudburan ng powdered sugar.',
      'Alisin ang ginamit na parchment paper sa ilalim. Ipahid ang yema filling.',
      'Dahan-dahang i-rolyo habang mainit pa. Budburan ng powdered sugar.'
    ]
  },
  {
    id: 39,
    name: 'Pandesal',
    category: 'breakfast',
    image: pandesal,
    cook_time: '3 oras (kasama ang pag-alsa)',
    servings: 24, // pieces
    ingredients: [
      '4 tasa all-purpose flour',
      '1 kutsarang active dry yeast',
      '1/2 tasa asukal',
      '1 kutsaritang asin',
      '1 tasa gatas (maligamgam)',
      '1/4 tasa butter, tinunaw',
      '1 itlog',
      '1 tasa breadcrumbs (para sa coating)'
    ],
    instructions: [
      'Sa isang malaking bowl, i-activate ang yeast sa maligamgam na gatas na may 1 kutsarang asukal (hayaan ng 10 minuto).',
      'Idagdag ang natitirang asukal, asin, tinunaw na butter, at itlog. Haluin.',
      'Dahan-dahang idagdag ang harina. Masahin ng 10-15 minuto hanggang maging elastic.',
      'Ilagay sa greased bowl, takpan, at paalsahin ng 1.5 oras o hanggang dumoble.',
      'I-punch down ang dough at hatiin. I-roll bawat isa sa mahabang "logs".',
      'Hiwain ang logs (mga 2 inches bawat isa).',
      'I-roll ang bawat piraso sa breadcrumbs.',
      'Ilagay sa baking sheet, takpan, at paalsahin muli ng 30 minuto.',
      'I-bake sa 180°C (350°F) ng 15-20 minuto hanggang maging light golden brown.'
    ]
  },
  {
    id: 40,
    name: 'Baked Macaroni',
    category: 'pork',
    image: bakedmacaroni,
    cook_time: '1 oras 15 minuto',
    servings: 8,
    ingredients: [
      '500g elbow macaroni',
      '500g giniling na baboy (o baka)',
      '1 pack (1kg) Filipino style spaghetti sauce',
      '5 piraso hotdog, hiniwa',
      '1 sibuyas, tinadtad',
      '4 bawang, tinadtad',
      '1/4 tasa butter (para sa Béchamel)',
      '1/4 tasa harina (para sa Béchamel)',
      '3 tasa gatas (para sa Béchamel)',
      '2 tasa cheddar cheese, kinayod'
    ],
    instructions: [
      'Lutuin ang macaroni ayon sa package instructions. I-drain at itabi.',
      'Gawin ang Meat Sauce: Igisa ang bawang at sibuyas. Idagdag ang giniling at lutuin. Idagdag ang hotdog. Ibuhos ang spaghetti sauce at pakuluan ng 15 minuto.',
      'Gawin ang Béchamel (White Sauce): Tunawin ang butter, idagdag ang harina at haluin (roux). Dahan-dahang ibuhos ang gatas habang patuloy na hinahalo (whisking) hanggang lumapot. Timplahan ng asin at paminta.',
      'Sa isang baking dish, ihalo ang nilutong macaroni at ang meat sauce.',
      'Ibuhos ang béchamel sauce sa ibabaw.',
      'Budburan ng kinayod na keso.',
      'I-bake sa 190°C (375°F) ng 25-30 minuto o hanggang matunaw ang keso at maging golden brown.'
    ]
  },
  {
    id: 41,
    name: 'Embutido',
    category: 'pork',
    image: embutido,
    cook_time: '1 oras 30 minuto',
    servings: 6,
    ingredients: [
      '1 kg giniling na baboy',
      '2 itlog (hilaw)',
      '1/2 tasa breadcrumbs',
      '1/4 tasa pasas',
      '1 carrots, tinadtad nang pino',
      '1 red bell pepper, tinadtad nang pino',
      '1 sibuyas, tinadtad nang pino',
      '1/2 tasa pickles, tinadtad',
      '3 hotdog, hiniwa (pang-core)',
      '3 itlog (nilaga), hinati (pang-core)',
      'Asin at paminta'
    ],
    instructions: [
      'Sa isang malaking bowl, paghaluin ang giniling na baboy, hilaw na itlog, breadcrumbs, pasas, carrots, bell pepper, sibuyas, at pickles.',
      'Timplahan ng asin at paminta.',
      'Ilagay ang kalahati ng mixture sa aluminum foil.',
      'Ilagay ang nilagang itlog at hotdog sa gitna.',
      'Takpan ng natitirang mixture.',
      'I-roll nang mahigpit gamit ang foil, parang isang log (kendi).',
      'I-steam sa loob ng 1 oras.',
      'Palamigin bago hiwain. Pwede ring iprito pagkatapos i-steam.'
    ]
  },
  {
    id: 42,
    name: "Max's Style Fried Chicken",
    category: 'chicken',
    image: maxsfriedchicken,
    cook_time: '1 oras (plus 2 oras na pagpapatuyo)',
    servings: 4,
    ingredients: [
      '1 buong manok (mga 1.5kg), hinati',
      'Tubig para sa brine',
      '1/4 tasa patis',
      '1 kutsarang asin',
      '1 kutsaritang buong paminta',
      'Mantika para sa deep frying'
    ],
    instructions: [
      'I-brine ang manok: Sa isang kaldero, ilagay ang manok, patis, asin, paminta, at tubig (sapat para takpan ang manok). Hayaan ng 30 minuto.',
      'Pakuluan ang manok sa parehong tubig (brine) ng 15-20 minuto. Huwag i-overcook.',
      'Alisin ang manok sa tubig at patuyuin.',
      'MAHALAGANG HAKBANG: Patuyuin sa hangin (air dry) sa loob ng ref, walang takip, ng hindi bababa sa 2 oras (o overnight) hanggang matuyo ang balat.',
      'Painitin ang mantika sa 175°C (350°F).',
      'I-deep fry ang manok ng 10-12 minuto o hanggang maging golden brown at malutong.',
      'Ihain kasama ng kamote fries at banana ketchup.'
    ]
  },
  {
    id: 43,
    name: 'Egg Pie',
    category: 'dessert',
    image: eggpie,
    cook_time: '1 oras',
    servings: 8,
    ingredients: [
      '1 1/2 tasa all-purpose flour (para sa crust)',
      '1/2 kutsaritang asin',
      '1/2 tasa butter (malamig), cubed',
      '3-4 kutsarang malamig na tubig',
      '5 malalaking itlog',
      '1 lata (370ml) evaporated milk',
      '1 lata (300ml) condensed milk',
      '1 kutsaritang vanilla extract'
    ],
    instructions: [
      'Gawin ang Crust: Paghaluin ang harina at asin. Idagdag ang butter at i-mix (gamit ang kamay o pastry blender) hanggang maging parang magaspang na buhangin. Idagdag ang malamig na tubig, haluin hanggang mabuo ang dough. Huwag i-overmix.',
      'I-roll ang dough at ilagay sa 9-inch pie pan. I-crimp ang gilid. Palamigin sa ref.',
      'Gawin ang Filling: Hatiin ang 3 itlog (paghiwalayin ang pula at puti).',
      'Sa isang bowl, batihin ang 3 pula ng itlog, 2 buong itlog, evap, condensada, at vanilla.',
      'Batihin ang 3 puti ng itlog (egg whites) hanggang "soft peaks". Dahan-dahang i-fold (ihalo) ito sa pinaghalong gatas at itlog.',
      'Salain ang mixture at ibuhos sa inihandang pie crust.',
      'I-bake sa 175°C (350°F) ng 45-55 minuto, o hanggang tumigas ang gitna at mag-brown ang ibabaw.'
    ]
  },
  {
    id: 44,
    name: 'KFC Style Gravy',
    category: 'all',
    image: kfcgravy,
    cook_time: '15 minuto',
    servings: 4,
    ingredients: [
      '1/4 tasa butter',
      '1/4 tasa all-purpose flour',
      '1 cube beef broth',
      '1 cube chicken broth',
      '2 tasa tubig (mainit)',
      '1/4 kutsaritang onion powder',
      '1/4 kutsaritang garlic powder',
      'Itim na paminta (ground pepper)'
    ],
    instructions: [
      'Tunawin ang beef at chicken broth cubes sa 2 tasa ng mainit na tubig.',
      'Sa isang kawali, tunawin ang butter sa medium heat.',
      'Idagdag ang harina at haluin (whisk) ng 2 minuto para makagawa ng "roux" (pampalapot).',
      'Dahan-dahang ibuhos ang tinunaw na broth habang patuloy na hinahalo (whisking) para maiwasan ang pagbuo-buo.',
      'Idagdag ang onion powder, garlic powder, at paminta.',
      'Hayaang kumulo sa mahinang apoy ng 5-7 minuto o hanggang lumapot sa nais na consistency.'
    ]
  },
  {
    id: 45,
    name: 'Lumpiang Sariwa',
    category: 'all',
    image: lumpiangsariwa,
    cook_time: '45 minuto',
    servings: 6,
    ingredients: [
      '1 tasa ubod (heart of palm), julienned',
      '1 tasa carrots, julienned',
      '1 tasa green beans (baguio beans), hiniwa ng manipis',
      '1/2 tasa tokwa, pinirito at cubed',
      '1/4 kilo baboy, nilaga at tinadtad (opsyonal)',
      '1/4 tasa hipon, nilaga at tinadtad (opsyonal)',
      '1 sibuyas, tinadtad',
      '3 bawang, tinadtad',
      '6 piraso lettuce',
      '6 piraso fresh lumpia wrapper (o egg crepe)',
      'Para sa Sauce: 1/2 tasa toyo, 1/2 tasa asukal, 2 tasa tubig, 3 bawang (dinikdik), 3 kutsarang cornstarch (tinunaw sa tubig)',
      'Mani (dinurog) at tinadtad na bawang (pang-ibabaw)'
    ],
    instructions: [
      'Gawin ang Palaman: Igisa ang bawang at sibuyas. Idagdag ang baboy at hipon (kung gagamit). Ilagay ang ubod, carrots, at green beans. Lutuin hanggang "crisp-tender". Idagdag ang tokwa. Timplahan ng patis at paminta. Palamigin.',
      'Gawin ang Sauce: Sa isang maliit na kaldero, pakuluan ang toyo, asukal, tubig, at dinikdik na bawang. Hayaang kumulo ng 5 minuto. Palaputin gamit ang tinunaw na cornstarch.',
      'Pag-assemble: Ilatag ang lumpia wrapper. Maglagay ng dahon ng lettuce. Maglagay ng 2-3 kutsara ng palaman sa ibabaw ng lettuce.',
      'I-rolyo (tiklupin ang gilid papasok, tapos i-roll). Huwag masyadong higpitan.',
      'Ibuhos ang sauce sa ibabaw ng lumpia at budburan ng dinurog na mani at bawang.'
    ]
  }
];

export default recipes;