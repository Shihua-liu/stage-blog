import controllers from "./DataImg/controllers.png"
import cameraMoment from "./DataImg/camera-moment.png"
import hints from "./DataImg/hints.png"
import gear from "./DataImg/gear.png"
import controller from "./DataImg/controller.jpg"
import dragging from "./DataImg/dragging.jpg"
import results from "./DataImg/rework-result.jpg"
import roomsLocked from "./DataImg/locked-rooms.jpg"

let stageid = 1
let id = 1

const Data = [
    {
        stageid: stageid++,
        packhouse: [
            {
                id: id++,
                weeks: "Week 1 en 2",
                opdracht: "De eerste paar dagen dat ik terug kwam hier bij packhouse heb ik al mijn documenten verzameld en op orde gezet zodat ik met mijn stage kon beginnen. Zodra ik daar mee klaar was, heb ik de github repo gepulled en ben ik begonnen aan murder at the mansion. Mijn eerste taak was dat de end game van murder niet moeilijk genoeg was dus wij hebben zelf een twist bij gemaakt. Eerst was dat je een volgorde moest klikken op de controllers en nu hebben we er van gemaakt dat je de juiste kleuren om de paar seconde moet klikken om zo veel mogenlijk punten te behouden en te krijgen. In het begin werd ik ingelicht over hou het zou moeten en had ik snel met de hulp een prototype. Hoe ik dit heb aangepakt is dat ik eerst vijanden laat komen en met de knop iemand naar die vijand stuur en het uitcancel. Daarna de controllers verbonden en de kleuren goed zetten. Ik kwam ondertussen heel wat problemen aan, sinds dit voor mij gevoel te technisch en te complex was. na een aantal weken en hulp van mijn baas hebben we het af kunnen krijgen en werkend. Zodra ik hier mee klaar was moest er een timer komen. de timer was er zodat je niet uren lang in de game kan zitten. Dus ik heb een timer gemaakt in de game dat dus na de volgende act gaat van de game waar je conclusies moet trekken en de antwoorden moet door geven. Tegelijk heb voor dat een score moeten bijhouden. Eerst had ik de timer gemaakt dat het naar de volgende act gaat en met de ovirige tijd kan het een score berekenen van de 20k dat je kan halen.",
                img: controllers,
                imgUileg: "hier pakt hij de hoeveelheid spelers er zijn en word een player een kleur van de controller gelinked",
                werkproc: "b1-k1-w1, b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k1-w5, b1-k2-w1, b1-k2-w2, b1-k2-w3, b-h1, b-h2, b-h3, b-h4, b-h5, b-h6"
            }, {
                id: id++,
                weeks: "Week 3 en 4",
                opdracht: "In de 3de week aan de end game. Er waren nog een aantal aanpassingen dat er gemaakt moesten worden, Zoals de styling dat de huis thema bijpassend is. Ook heb ik de camera moment geimplementeerd, dus als je klaar bent met de game worden er foto's gemaakt en opgeslagen. Ook worden die verstuurd naar de spelers hun mail en in de api krijgen we ook alle data te zien van hun. Ook heb ik in de 4de week aan een ander eproject lopen werken, want de video's klopte niet en dat heb ik nagelopen en goed gezet. Naast dat heb ik heel wat bug fixen gedaan, zoald audio dat niet goed afspeelt, flow werkte niet goed",
                img: cameraMoment,
                imgUileg: "je kan hier zien welke svg's ik heb hergebruikt en deze svg's heb ik veel lopen stylen",
                werkproc: "b1-k1-w1, b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k1-w5, b1-k2-w1, b1-k2-w2, b1-k2-w3, b-h1, b-h2, b-h3, b-h4, b-h5, b-h6"
            }, {
                id: id++,
                weeks: "Week 5 en 6",
                opdracht: "In de 5de en 6de week heb ik een beetje lopen werken aan de puzzels. Ik heb een paar aanpassingen gemaakt zoals, een kruisje in een menu, heartbeat geluiden in een puzzel, de hoeveelheid bewijsmateriaal zien in de lobby, achterschermen gefixed, en de flow vernieuwen van de game. Na dat wouden we een nieuwe hint systeem implementeren en ik moest er mee gaan beginnen. ik had een excel document gekregen met wat voor hints erin moesten komen, hoeveel punten het zou kosten en wanneer het moest komen in de kamer. ik kwam ondertussen tegen heel veel problemen omdat het ook te complex was voor mij, maar met veel hulp was het me gelukt en heb ik het werkend gekregen. Eerst ging ik alles in 1 document zetten, zoals of het al laten zien is, wanneer het laten zien moest worden, wat het moest zeggen en of de puzzel compleet moest worden door die hint.",
                img: hints,
                imgUileg: "hier zie je de hints, een hint heeft een id, tijd wnr hij moet laten zien, koste, of hij al laten zien is, geluid, gelezen, disabled moet zijn ",
                werkproc: "b1-k1-w1, b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k1-w5, b1-k2-w1, b1-k2-w2, b1-k2-w3, b-h1, b-h2, b-h3, b-h4, b-h5, b-h6"
            }, {
                id: id++,
                weeks: "Week 7 en 8",
                opdracht: "in de 7de en 8ste week heb ik gekeken hoe een klant de game speelde en feedback verzamelen uit de video's. Uit de opname hebben we een paar negatieve dingen uitkunnen halen en hebben we kunnen veranderen in de game. In de endgame heb ik ook in het begin een delay gegeven om de spelers wat tijd te geven voorat het begint. Nog wat licht problemen gefixed omdat het fout werd geroepen. Endgame ook laten scalen aan de hoeveelheid spelers er zijn, dus als er 6 spelers er zijn, zijn er 6 paden dat er zijn. Ook als een controller stuk is dat en een andere wordt gebruikt.",
                img: controller,
                imgUileg: "end game werkt ook als er meer players zijn dan controllers",
                werkproc: "b1-k1-w1, b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k1-w5, b1-k2-w1, b1-k2-w2, b1-k2-w3, b-h1, b-h2, b-h3, b-h4, b-h5, b-h6"
            }, {
                id: id++,
                weeks: "Week 9 en 10",
                opdracht: "in de 9de en 10de week heb ik de controllers afgemaakt als er 1tje stuk gaat dat dan een andere gebruikt wordt en de hele puzzel van kamer 6 opnieuw gemaakt omdat het niet leesbaar was en het niet meer werkte met de nieuwe controllers implementatie. hoe ik dit heb gedaan was, ik lade eerst de foto's in en zette ze op de goede plek. had tegen specifieke gears aangegeven dat ze alleen omhoog of omlaag kunnen en konden draaien. wanneer ze op de goede positie waren dat ze ook met elkaar kunnen draaien. als alles samen workte had ik de slot dan open en dan ging de volgende video afspelen. ik liep soms tegen wat moeilijke dingen aan en voor dat had ik de hulp van mijn baas gekregen.",
                img: gear,
                imgUileg: "hier zie je als een van de 'gears' op de goede positie staat, dan gaat hij kijken welke hij moet vinden om de andere te laten draaien",
                werkproc: "b1-k1-w1, b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k1-w5, b1-k2-w1, b1-k2-w2, b1-k2-w3, b-h1, b-h2, b-h3, b-h4, b-h5, b-h6"
            }, {
                id: id++,
                weeks: "Week 11 en 12",
                opdracht: "in de 11de en 12de week heb ik aan kamer 4 puzzle lopen werken. het probleem was dat het slpen van de papieren snippers niet zo makkelijk meesleepte, dus om dat op te lossen heb ik ze wat dichterbij de puzzel neergelegd en geprobeerd om de slepen wat beter te maken, maar uit eindelijk moest ik er mee stoppen omdat de puzzel ook opnieuw gemaakt moet worden voor dat en dat zou te veel tijd kosten als ik er aan zou gaan zitten. De X-cube is nu ook in portugal gevestiged, dus wij waren eventjes bezig met de portugese vertaling in sommige games",
                img: dragging,
                imgUileg: "als je sleept en los laat waar het gaat staan voor een seconde, voordat hij terug gaat naar de orginele plek",
                werkproc: "b1-k1-w1, b1-k1-w2, b1-k1-w3, b1-k1-w4, b1-k1-w5, b1-k2-w1, b1-k2-w2, b1-k2-w3, b-h1, b-h2, b-h3, b-h4, b-h6"
            }, {
                id: id++,
                weeks: "Week 13 en 14",
                opdracht: "in de 13de en 14de week werkte ik aan de mails, want als een bezoeker de game heeft uitgespeelt, dan krijgen ze een mail met details van de game en hoe ze het deden, maar dat kregen ze dus niet. ik heb lopen zoeken waar het aan lag en lopen fixen. Probleem was dat het op de verkeerde moment het stuurde, dus heb het verplaatst door het op een latere moment op te sturen en dat werkte prima. Ook de eind score waren er problemen. De probleem was dat de heb met iemand lopen kijken waar aan het kon liggen en we vonden dat er nog andere factoren waren die het aanpaste terwijl dat niet moest.",
                img: results,
                imgUileg: "hier zie je wat er opgestuurd wordt naar de api zodat we later hun bookingen terug kunnen kijken.",
                werkproc: "b1-k1-w3, b1-k1-w4, b1-k2-w1, b1-k2-w2, b-h1, b-h2, b-h3, b-h4, b-h5, b-h6"
            }, {
                id: id++,
                weeks: "Week 15 en 16",
                opdracht: "in week 15 had ik het kamers vrijspelen gemaakt omdat de meeste mensen op puzzel 4 en 5 lang vast zaten, dus we hebben besloten om dat te openen als ze de rest af hebben voordat ze die in kunnen. Ook willen ze een mobiele versie van hun reserveringen zien en ik heb daar naar toe lopen kijken wat er veranderd kon worden en wat niet. Is toch niet geimplementeerd. Ook had ik de heel week van 16 vrij ",
                img: results,
                imgUileg: "dit is dus niet klik baar tnzij je de andere puzzels eerst af had gemaakt.",
                werkproc: "b1-k1-w3, b1-k1-w4, b1-k2-w1, b1-k2-w2, b-h1, b-h2, b-h3, b-h4, b-h5, b-h6"
            }

        ]
    }
]

export default Data