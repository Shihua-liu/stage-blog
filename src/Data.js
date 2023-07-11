import getMilestonesList from "./DataImg/getMilestonesList.webp"
import SplideSlider from "./DataImg/SplideSlider.webp"
import LauncherStatus from "./DataImg/LauncherStatus.webp"
import PHPImg from "./DataImg/PHPImg.webp"
import ParellaxEffect from "./DataImg/ParellaxEffect.webp"
import Cookie from "./DataImg/cookie-router.webp"
import MarketPlace from "./DataImg/marketplace.webp"
import databaseFetch from "./DataImg/databaseFetch.webp"
import userDiscordBot from "./DataImg/userDiscordBot.png"
import MATM from "./DataImg/MATM.jpg"

let stageid = 1
let id = 1

const Data = [
    {
        stageid: stageid++,
        packhouse: [
            {
                id: id++,
                weeks: "Week 1 en 2",
                opdracht: "Mijn opdracht in de eerste week was mijzelf bekend maken met vue. Zoals hoe hun syntaxes werken en hoe het inelkaar zit. Ook hebben we mijn werkomgeving klaargezet, zoals een account voor de server, dat ik de github in kan. In de tweede week kreeg ik de opdracht om in de portal (website waar we overzicht houden met opdrachten etc.) van alle opdarchten een mini overzicht te maken van opdrachten wanneer het begonnen is en wanneer het klaar was. Dit hebben we kunnen doen met gebruik van graphQL.",
                stappenPlan: "Voor week 1 documentatie opzoeken en uitproberen in een aparte bestand en voor week 2 alle data dat ik binnen kreeg een voor een console loggen en for loopen om te kijk wat ik daarna nodig heb.",
                img: getMilestonesList,
                imgUileg: "in dit stukje code kan je zit dat ik in de functie een lege array maak, en door this.customers.projects wil loopen en de uitkomst naar de lege array wil pushen, zodat ik het kan gebruiken.",
                Samenwerking: "Ja, er was wat data dat ik moest ophalen en daar waren andere stagiares aan te werken en ik heb begeleiding gekregen",
                succesFouten: "Sinds vue vegelijkbaar is met react, wou ik door alle data arrays gaan mappen, dat is niet altijd het beste, soms is het beter om te gaan for loopen. ik leer hier dat ik meerdere dingen moet doen om een oplossing te vinden",
                werkproc: "b1-k1-w4"
            }, {
                id: id++,
                weeks: "Week 3 en 4",
                opdracht: "Ik kreeg de opdracht om een website te maken om hun nft's en hun game te promoten met behulp van een photoshop bestand. Dit heb ik ook gemaakt in vue. Dit duurde wel een lange tijd, sinds hun website uit veel plaatjes inelkaar en op aparte posities moet staan.",
                stappenPlan: "ik had als eerst alle foto's gedownload en geprobeert om op hun plek te zetten, was enorm veel werk, sinds sommige foto's hoger of lager moest zijn. er waren wel wat componenten waar ik een plugin moest zoeken en gebruiken. Dat bespaart wel veel tijd en moeite.",
                img: SplideSlider,
                imgUileg: "hier zie je de plugin slider dat ik heb gebruikt. Dat bespaart veel moeite en tijd ipv zelf een carousel maken.",
                Samenwerking: "nee, ik werkte hier alleen aan, maar ik heb wel begeleiding gekregen",
                succesFouten: "bij een website maken is het hadig om desktop first of mobile first te maken, maar ik probeerde beide tegelijke tijd. ook probeerde ik hun mobile versie tegelijk te maken, wat dus niet nodig was omdt we daar geen design voor hadden.",
                werkproc: "b1-k1-w1, b1-k1-w2, b1-k1-w3, b1-k2-w2, b1-k2-w3"
            }, {
                id: id++,
                weeks: "Week 5 en 6",
                opdracht: "Deze weken heb ik onderzoek gedaan om te kijken welke warketplace ze willen gebruiken om hun producten te adviteren. dit was veel documentatie lezen. De week daarop heb ik aan de gamelauncher zitten werken. dit had dingentjes nodig, zoals dat de knop niet zien is als er een update was of dat je het kan afsluiten of rond kan slepen",
                stappenPlan: "Voor de market place had ik mezelf eerst bekend gemaakt met hoe het inelkaar zit kwa code. dus ik heb eerst onderzocht wat ik moet gebruiken en wat ik kan aanpassen. vanaf daar heb ik rond zitten lezen wat ik kan aanpassen om alleen hun spullen kan laten zien. Voor de game launcher moest ik kijken hoe de api dat gelinked is en de statussen vergelijken om te zeggen of iets wel of niet kon.",
                img: LauncherStatus,
                imgUileg: "met electron kan je de download pauseren, resumeren en de launcher minimaliseren en afsluiten",
                Samenwerking: "nee, ik werkte hier alleen aan, maar ik heb wel begeleiding gekregen",
                succesFouten: "ik had beter de documentatie kunnen lezen voor de marketplace, er waren dingentjes dat ik over het hoofd had gezien. Voor de game launcher had ik veel beter wat uitleg kunnen vragen omdat de code al was gemaakt en ik moest aanpassingen maken.",
                werkproc: "b-h1, b-h3, b1-k2-w1, b1-w1-k5"
            }, {
                id: id++,
                weeks: "Week 7 en 8",
                opdracht: "ik heb mezelf deze weken laten werken aan de herkansings opdrachten van school. dit moest ik inhalen. daarna moest ik de feedback verwerken van de marketplace.",
                stappenPlan: "ik heb de opdrachten in delen gemaakt en ingeleverd. daarna moest ik naar school en simon ging het nakijken. voor de marketplace wouden ze de navigatie en de filters links van het scherm hebben ipv boven in",
                img: PHPImg,
                imgUileg: "hier in de foto kan je zien dat ik de connectie met de database heb kunnen maken en de waardes van de formulie kan versturen.",
                Samenwerking: "nee de opdrachten heb ik zelf gemaakt, maar wel met behulp van een youtube tutorial. de marketplace heb ik ook zelf zitten maken.er waren een paar dingentjes dat ik niet had gelezen waardoor het makkelijker was om de aanpassingen te maken",
                succesFouten: "de opdracht is afgetekent met behaalt. mijn opdrachten optijd afmaken",
                werkproc: "-"
            }, {
                id: id++,
                weeks: "Week 9 en 10",
                opdracht: "de website had aanpassingen nodig, ze wouden dat er een scroll effect kwam als je naar beneden of boven scrollde, daarnaast wouden ze dat hun nieuws een aparte pagina kreeg met meer informatie.",
                stappenPlan: "ik had eerst gezeten om de parallax effect te krijgen, na veel proberen eb ik dat laten zitten en was ik door gegaan aan de nieuwspagina",
                img: ParellaxEffect,
                imgUileg: "bij een scroll, gaat hij de effect calculeren en dan verandert hij het bij zo veel.",
                Samenwerking: "nee, maar ik heb wel wat begelieding gekregen",
                succesFouten: "waar ik trots op ben is dat de parralax effect goed werkt, het geeft echt een leuke 3d effect. ik moet goed kijken naar de functie namen want dat geeft me problemen",
                werkproc: "-"
            }, {
                id: id++,
                weeks: "Week 11 en 12",
                opdracht: "stageblog aanpassingen gemaakt zodat het voldoet aan de criteria, de website had wat content nodig voor hun cookies, careers en privacy policy, ik heb router link gebruikt, het geeft een key mee en met die key vind hij de goede url en filterd hij de goeie informatie uit. daar naast heb ik gezeten aan de game launcher om wat bugs te fixen",
                stappenPlan: "eerst de stage blog maken met react zodra ik dat af had, was ik verder gegaan met de website en de bug fixes voor de game launcher",
                img: Cookie,
                imgUileg: "dit is dus de router link dat ik heb gemaakt voor de website, als je erop klikt geeft het een key mee en met dat kan hij de data ophalen",
                Samenwerking: "nee, maar ik heb wel wat begelieding gekregen",
                succesFouten: "succes was dat ik mijn stageblog snel af had gemaakt, kwa fout was dat ik bij de website elke keer zelfde manier gebuikte, dus ik moet meer DRY(don't repeat yourself) zijn.",
                werkproc: "-"
            }, {
                id: id++,
                weeks: "Week 13 en 14",
                opdracht: "marketplace had nieuwe stylingen nodig, veel aanpassingen gemaakt",
                stappenPlan: "kijken wat ik wel kon gebruiken en waar het moest om de goeie stylingen te krijgen",
                img: MarketPlace,
                imgUileg: "je kan hier zien hoe ik het nu naar toe heb gestyled",
                Samenwerking: "nee, maar ik heb wel feedback gevraagd",
                succesFouten: "succes was dat de componenten snel te hergebruiken was en snel kon identificeren wat wat was en wat waar moest. ik begreep weer snel wat ik moest gebruiken om de aanpassingen te maken",
                werkproc: "-"
            }, {
                id: id++,
                weeks: "Week 15 en 16",
                opdracht: "er was niet echt een taak voor mij, dus ik was begonnen met een mini project, het was een inlog systeem bouwen met een database api",
                stappenPlan: "eerst begonnen met de design, login en registreer form gemaakt en daarna ervoor gezorgd dat de data opgestuurd wordt",
                img: databaseFetch,
                imgUileg: "dit is een manier hoe je data kan ophalen, en kan vergelijken of de data klopt of niet",
                Samenwerking: "nee, maar iemand heeft me wel geholpen met de huisstyle voor de pagina",
                succesFouten: "ik had best wel wat problemen met databases zoeken, maar ik heb wel nu de goeie gevonden, maar de documenten moet ik beter door lezen. uit eindelijk moet ik beter kijken wat er nodig is om de data te sturen en wat je nodig heb om het optehalen",
                werkproc: "-"
            }, {
                id: id++,
                weeks: "Week 17 en 18",
                opdracht: "ik heb veel lopen kijken hoe ik unity werkend kon krijgen, geen oplossing, dus ben een discord bot gaan maken en aan een nieuwe taak gaan beginnen",
                stappenPlan: "voor de bot ben eerst gaan kijken hoe je een command maakt en custom commands en alle data goed op pakt en mooit heb kunnen zetten. voor de taak had ik eerst zitten kijken hoe het werkte, hoe de videos afspeelde en hoe de vlakken werden ingeladen.",
                img: userDiscordBot,
                imgUileg: "hier zie je de data dat ik ophaal van een account, je kan de indeling bepalen, kleur aan de zijkant en de footer tekst veranderen",
                Samenwerking: "ja, ik werkte met iemand van school",
                succesFouten: "ik maakte veel fouten met de commands, wat ik hiermee bedoel is dat sommige functies niet werkte, waardoor ik veel tijd moet gebruiken om te kijken wat wel werkte en wat niet. er waren niet zo veel documentatie dus ik moest dieper in duiken om het te vinden",
                werkproc: "b-h2"
            }, {
                id: id++,
                weeks: "Week 19 en 20",
                opdracht: "aan de nieuwe taak veel progressie gemaakt, is een game waar je met de gerenderde video's navigeer en een puzzel oplos",
                stappenPlan: "de lobby en de eerste 3 kamers zijn werkend met de alle video's na veel proberen en testen",
                img: MATM,
                imgUileg: "code dat ik heb gemaakt om de ingevoerde wachtwoord voor de puzzel heb gemaakt. dat samenwerkt met een virtuele keyboard",
                Samenwerking: "ja, ik werkte samen met mijn baas",
                succesFouten: "er waren veel succeses en fouten. een succes was de video's echt goed werkend te krijgen en een fout was dat ik sommige delen van code opnieuw gebruikte dus ik 'DRY' mezelf, maar dat heb ik veranderd om het een speciale component te maken",
                werkproc: "b-h4, b-h5"
            }
        ]
    }
]

export default Data