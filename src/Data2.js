import controllers from "./DataImg/controllers.png"
import cameraMoment from "./DataImg/camera-moment.png"
import hints from "./DataImg/hints.png"
import gear from "./DataImg/gear.png"
import controller from "./DataImg/controller.jpg"
import dragging from "./DataImg/dragging.jpg"
import results from "./DataImg/rework-result.jpg"
import roomsLocked from "./DataImg/locked-rooms.jpg"
import old from "./DataImg/old.jpg"
import touch from "./DataImg/touch.png"

let stageid = 1
let id = 1


const Data = [
    {
        stageid: stageid++,
        packhouse: [
            {
                id: id++,
                weeks: "Week 1 en 2",
                opdracht: "De eerste paar dagen dat ik terug kwam hier bij packhouse heb ik al mijn documenten verzameld en op orde gezet zodat ik met mijn stage kon beginnen. Zodra ik daar mee klaar was, heb ik de github repo gepulled en ben ik begonnen aan murder at the mansion. Mijn eerste taak was dat de end game van murder niet moeilijk genoeg was dus wij hebben zelf een twist bij gemaakt. Eerst was dat je een volgorde moest klikken op de controllers en nu hebben we er van gemaakt dat je de juiste kleuren om de paar seconde moet klikken om zo veel mogenlijk punten te behouden en te krijgen. In het begin werd ik ingelicht over hou het zou moeten en had ik snel met de hulp een prototype. Hoe ik dit heb aangepakt is dat ik eerst vijanden laat komen en met de knop iemand naar die vijand stuur en het uitcancel. Daarna de controllers verbonden en de kleuren goed zetten. Ik kwam ondertussen heel wat problemen aan, hoe ze moeten bewegen, hoe ze in moeten spawnen, hoe ze hoe je een kleur kan aan geven en ook aan de controller en als de vijanden op een punt komen dat ze gelijk stoppen en dan punten eraf halen. Sinds dit voor mij gevoel te technisch en te complex was. na een aantal weken en hulp van mijn baas hebben we het af kunnen krijgen en werkend. Zodra ik hier mee klaar was moest er een timer komen. de timer was er zodat je niet uren lang in de game kan zitten. Dus ik heb een timer gemaakt in de game dat dus na de volgende act gaat van de game waar je conclusies moet trekken en de antwoorden moet door geven. Tegelijk heb voor dat een score moeten bijhouden. Eerst had ik de timer gemaakt dat het naar de volgende act gaat en met de overige tijd kan het een score berekenen van de 20k dat je kan halen. deze weken heb ik geleerd hoe je met een timer een specifieke volgorde moet hebben zodat de volgode van de game goed werkt, hoe je met de overige tijd een score kan berekenen en hoe je enemies kan spawnen door een loop te gebruiken en het opnieuw te roepen.",
                img: controllers,
                imgUileg: "hier pakt hij de hoeveelheid spelers er zijn en word een player een kleur van de controller gelinked",
                werkproc: "b1-k1-w1, b1-k1-w2, b1-k2-w2, b1-k2-w3, b-h2, b-h3"
            }, {
                id: id++,
                weeks: "Week 3 en 4",
                opdracht: "In de 3de week aan de end game. Er waren nog een aantal aanpassingen dat er gemaakt moesten worden, Zoals de styling dat de huis thema bijpassend is. Ook heb ik de camera moment geimplementeerd, dus als je klaar bent met de game worden er foto's gemaakt en opgeslagen. Ook worden die verstuurd naar de spelers hun mail en in de api krijgen we ook alle data te zien van de bezoekers. Ook heb ik in de 4de week aan een andere project lopen werken, want de volgorde van de video's klopte niet en dat ben ik gaan nagelopen en heb ik het goed gezet, door de kijken welke files worden geroepen om ze te laten zien en waar de video's moeten laten zien. Naast dat heb ik heel wat bug fixen gedaan, zoald audio dat niet goed afspeelt, game flow van de Murder At The Mansionwouden ze veranderen, dus ik heb met mijn collega's en na besproken hoe ze het wouden en hoe het eruit moest zien. De problemen dat hier tegen kwam was dat de styling voor de endgame veel aanpassingen nodig had waardoor het best wel moeilijk werd omdat de andere stylingen het zelfde namen en styling gebruiken. Hier heb ik geleerd om als ik de juiste thema's wil gebruiken maar iets andere class namen moeten gebruiken, hoe ik de flow moet aanpassen vanuit een andere file. hoe ik dat heb gedaan is wanneer iets ingeladen wordt, geeft ik het een nummer mee en dat grbuikt hij om de flow variable aan te passen.",
                img: cameraMoment,
                imgUileg: "je kan hier zien welke svg's ik heb hergebruikt en deze svg's heb ik veel lopen stylen",
                werkproc: "b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k2-w1, b1-k2-w3, b-h4,"
            }, {
                id: id++,
                weeks: "Week 5 en 6",
                opdracht: "In de 5de en 6de week heb ik een beetje lopen werken aan de puzzels. Ik heb een paar aanpassingen gemaakt zoals, een kruisje in een menu, heartbeat geluiden in een puzzel, de hoeveelheid bewijsmateriaal zien in de lobby, achterschermen gefixed, en de flow vernieuwen van de game. Na dat wouden we een nieuwe hint systeem implementeren en ik moest er mee gaan beginnen. ik had een excel document gekregen met wat voor hints erin moesten komen, hoeveel punten het zou kosten en wanneer het moest komen in de kamer. ik kwam ondertussen tegen heel veel problemen omdat het ook te complex was voor mij, maar met veel hulp was het me gelukt en heb ik het werkend gekregen. Eerst ging ik alles in 1 document zetten, zoals of het al laten zien is, wanneer het laten zien moest worden, wat het moest zeggen en of de puzzel compleet moest worden door die hint. De probleem waar ik tegen kwam, was dat het te complex was voor mij en dit koste veel tijd van mij, maar gelukkig kon mijn baas me helpen met alles en hebben we het af kunnen maken. hier heb ik geleerd hoe ik functie's de id kan aanroepen om mee te geven dat ze niet meer moeten komen of wel. Ook kon ik leren hoe ze de data kwa kosten en de timer ook kon meegeven aan de punten telling en dat kon aanpassen.",
                img: hints,
                imgUileg: "hier zie je de hints, een hint heeft een id, tijd wnr hij moet laten zien, koste, of hij al laten zien is, geluid, gelezen, disabled moet zijn ",
                werkproc: "b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k2-w1, b1-k2-w2, b1-k2-w3, b-h2, b-h4"
            }, {
                id: id++,
                weeks: "Week 7 en 8",
                opdracht: "in de 7de en 8ste week heb ik gekeken hoe een klant de game speelde en feedback verzamelen uit de video's. Uit de opname hebben we een paar negatieve dingen uitkunnen halen en hebben we kunnen veranderen in de game, want we willen graag van de negatieve reviews een positieve maken door terug te kijken wat er niet goed ging en naar hun feedback te luisteren. In de endgame heb ik ook in het begin een delay gegeven om de spelers wat tijd te geven voorat het begint. Nog wat licht problemen gefixed omdat het fout werd geroepen. Endgame ook laten scalen aan de hoeveelheid spelers er zijn, dus als er 6 spelers er zijn, zijn er 6 paden dat er zijn. Ook als een controller stuk is dat en een andere wordt gebruikt. Voorheen gebeurde dat niet en was het hard coded en als er een controller stuk gaat kan het zijn dat een ppuzzel niet meer opgelost kan worden. De probleem waar ik tegen kwam was dat het niet helemaal werkte, maar dat kwam omdat ik een volgorde fout deed, maar het werkt nu! Wat ik hier van heb geleerd is om naar de feedback van klanten terug te kijken en hoe zij het ervaarden en de negatieve dingen te fixen. Ook leerde ik hoe je een array met nummers kan hebben die gebruikt moeten worden en dan als er 1tje niet reageerd dat de eerst volgende gepakt en gebruikt kon worden.",
                img: controller,
                imgUileg: "end game werkt ook als er meer players zijn dan controllers",
                werkproc: "b1-k1-w2, b1-k1-w4, b1-k2-w1, b1-k2-w2, b-h1"
            }, {
                id: id++,
                weeks: "Week 9 en 10",
                opdracht: "in de 9de en 10de week heb ik de controllers afgemaakt als er 1tje stuk gaat dat dan een andere gebruikt wordt en de hele puzzel van kamer 6 opnieuw gemaakt omdat het niet leesbaar was en het niet meer werkte met de nieuwe controllers implementatie. hoe ik dit heb gedaan was, ik lade eerst de foto's in en zette ze op de goede plek. had tegen specifieke gears aangegeven dat ze alleen omhoog of omlaag kunnen en konden draaien. wanneer ze op de goede positie waren dat ze ook met elkaar kunnen draaien. als alles samen werkte had ik de slot dan open en dan ging de volgende video afspelen. Ik liep soms tegen wat moeilijke dingen aan en voor dat had ik de hulp van mijn baas gekregen, zoals hoe de gears samen kunnen interacten en files eruit moeten zien. wat ik hier van heb geleerd is dat er verzorgd moet worden dat je code leesbaar is zodat als iemand anders eraan gaat werken vanwege een probleem of als ze een aanpassing moeten maken dat het snel te lezen is hoe en waar ze moeten zijn.",
                img: gear,
                imgUileg: "hier zie je als een van de 'gears' op de goede positie staat, dan gaat hij kijken welke hij moet vinden om de andere te laten draaien",
                werkproc: "b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k2-w1, b1-k2-w2, b-h6"
            }, {
                id: id++,
                weeks: "Week 11 en 12",
                opdracht: "in de 11de en 12de week heb ik aan kamer 4 puzzle lopen werken. het probleem was dat het slepen van de papieren snippers niet zo makkelijk meesleepte, dus om dat op te lossen heb ik ze wat dichterbij de puzzel neergelegd en geprobeerd om de slepen wat makkelijker te maken voor de bezoekers. Er waren ook wat extra toevoegingen zoals, datals je sleepte en ergens los laatte dat het daar eventjes 'bleef', en dan naar een paar seconde weer terug op de orginele positie ging, maar uit eindelijk moest ik er mee stoppen omdat de puzzel ook opnieuw gemaakt moet worden voor dat en dat zou te veel tijd kosten als ik er aan zou gaan zitten. De X-cube is nu ook in portugal gevestiged, dus ik was eventjes bezig met de portugese vertaling in een van de games genaamd spy training (versie voor kids). Het probleem hier was dat de papieren snippers hun oude posities moesten onthouden en dan ook andere kon vervangen, maar dat werkte niet zo goed en om dat op te lossen, moesten we het hele puzzle ook opnieuw maken, maar dat zou te veel tijd kosten, dus hadden we er voor gekozen om dat op een latere moment te doen. hier heb ik geleerd is dat games ook voor andere talen makkelijk te veranderen is en heb ik ook geleerd om met dragable items te werken door dragEventListeren te gebruiken en rond te spelene en te testen wat er gebeurde.",
                img: dragging,
                imgUileg: "als je sleept en los laat waar het gaat staan voor een seconde, voordat hij terug gaat naar de orginele plek",
                werkproc: "b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k2-w1, b1-k2-w2, b1-k2-w3, b-h1, b-h4, b-h6"
            }, {
                id: id++,
                weeks: "Week 13 en 14",
                opdracht: "in de 13de en 14de week werkte ik aan de mails, want als een bezoeker de game heeft uitgespeelt, dan krijgen ze een mail met details van de game en hoe ze het deden, maar dat kregen ze dus niet. ik heb lopen zoeken waar het probleem aan lag en lopen fixen. Probleem was dat het op de verkeerde moment de data stuurde, dus heb het verplaatst door het op een latere moment alles op te sturen en dat werkte zoals het moet. Ook de eind score waren er problemen. De probleem was dat de score fout optelde door andere beinvloedbare moegnelijkheden. hoe we daar achter kwamen was door langs alle score te gaan wat optelt in de eind score, hier heb ik met iemand de hele middag lopen kijken waar aan het kon liggen en we vonden dat er nog andere factor was in een console.log en dat het aanpaste de score aan terwijl dat niet moest. hier heb ik geleerd om alles goed te testen en uit te zoeken welke dingen beinvloedbaar is en waar het aan kan liggen. ook heb ik geleerd om de data op de juiste moment te sturen, anders krijg je half de data dat wat de bezoeker orgineel zou moeten krijgen.",
                img: results,
                imgUileg: "hier zie je wat er opgestuurd wordt naar de api zodat we later hun bookingen terug kunnen kijken.",
                werkproc: "b1-k1-w3, b1-k1-w4, b1-k2-w1, b1-k2-w2, b-h1, b-h2, b-h3, b-h4, b-h5, b-h6"
            }, {
                id: id++,
                weeks: "Week 15 en 16",
                opdracht: "in week 15 had ik het kamers vrijspelen gemaakt omdat de meeste mensen op puzzel 4 en 5 lang vast zaten, dus we hebben besloten om dat te openen als ze de rest af hebben voordat ze die in kunnen. Ook willen ze een mobiele versie van hun reserveringen zien en ik heb daar naar toe lopen kijken wat er veranderd kon worden en wat niet. Is toch niet geimplementeerd. Ook had ik de heel week van 16 vrij. probleem van het vrij spelen is waarschijnlijk dat het niet echt logisch is om het te implenmenteren in de game zelf. wat ik hier heb geleerd is dat je ook oude werk terug moet kijken om aanpassing te maken en kijken welke verbeteringen kunnen komen zodat de klant het ook makkelijk kan gebruiken. Om de dichte kamer te openen heb ik geleerd om de data van 1 punt te pakken en dat was de opgepakte bewijsmateriaal die er al was te gebruiken en dat als een conditie moest gebruiken om de klikbare zone te blokeren totdat ze 4 of meer hebben gepakt. Om dat te kunnen doen heb ik met classbinding gebruikt in vue, dat is een functie in vue en daarmee kan je makkelijk een true of flase statement doorgeven en dan heeft hij of de eerste class anders niet.",
                img: roomsLocked,
                imgUileg: "dit is dus niet klik baar tenzij je de andere puzzels eerst af had gemaakt.",
                werkproc: "b1-k1-w3, b1-k1-w4, b1-k2-w1, b1-k2-w2, b-h1, b-h2, b-h3, b-h4, b-h6"
            },{
                id: id++,
                weeks: "Week 17 en 18",
                opdracht: "In week 17 heb ik een email binnen gekregen dan mijn stageblog niet up to standard is, dus heb ik een hele week lopen kijken wat ik kon veranderen, aanpassen en ook voor feedback gevraagt aan mijn medestagiar Sander Bakkum. wij hebben veel overlegd met wat er nodig wat, wat we missen en wat we zouden toevoegen om het beter te maken. in week 18 heb ik eventjes mee gedaan aan de Tile framework. ik heb een dagje in lopen kijken hoe het werkte, maar de volgende dag kreeg ik tehoren dat het niet meer nodig was en dat ze een andere aanpak hadden voor de tile framework project. In week 18 ben ik weer aan Murder At The Mansion kunnen gaan werken voor bug fixes en nieuwe implementatie, zoals de multi language. sinds de x-cude in portugal in gevestigd, heb ik ook een weekje lang aan ai stemmen lopen werken en de files goed gezet in de drives. hier heb ik geleerd om de files goed te zetten en ook door de hele game te lopen en goed te luisteren aan fouten, goed lezen of er niet perongeluk iets in het nederlands staat en dat te fixen, de problemen dat ik tegen kwam is dat de antwoorden dat doorgestuurd werden wel in een andere taal kwam maar werd vergeleken in het nederlands. Om dat te fixen heb ik dat hij voor beide de key pakt uit een array en dan de gekozen antwoord vergelijkt met de antwoord dat hij momenteel in die taal in ipv dat het om werd gezet naar engels.",
                img: old,
                imgUileg: "hoe het er eerst uit zak (deze heb ik van mijn eerste blogpost gepakt van mijn vorige stage)",
                werkproc: "b1-k1-w3, b1-k1-w4, b1-k2-w2, b-h2, b-h3, b-h5,"
            },
            {
                id: id++,
                weeks: "Week 19 en 20",
                opdracht: "in week 17 had ik tehoren gekregen dan mijn opa in china is overleden, dus heb verlof aangevraagd en ben dan 2 weken in china geweest. Voor dat ik weg was gegaan had ik nog een taakje gekregen om de admin-shutdown met touch werkend te krijgen. Ik heb dat werkend gekregen door de speciale vue plugin touch-start en touch-end. Wat ik hier heb geleerd is om het niet alleen met een muis werkend te krijgen maar ook met touch door gebruik temaken van de mobiele test versie. Een fout dat ik maakte was dat ik niet de socumentatie doorleesde dat vue een touch plugin heeft.",
                img: touch,
                imgUileg: "de vue plugin voor de click en voor de touch",
                werkproc: "b1-k1-w1, b1-k1-w3, b1-w1-k4, b1-k2-w2, b-h6"
            }

        ]
    }
]

export default Data