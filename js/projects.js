const projectData = {
    'Bachelor_scriptie': {
        category: 'Materiaalkarakterisering',
        title: 'Analysemodellering van Thermische Zouten & Materiaalkarakterisering',
        layers: {
            overzicht: {
                title: 'Overzicht',
                hint: 'Niet-technisch',
                content: `
                    <div class="summary-box">
                        <h2>Overzicht</h2>
                        <p><strong>Pitch:</strong> Het succesvol modelleren van complexe fysieke fasewisselingen in zouten voor de ontwikkeling van duurzame warmtebatterijen, ondersteund door een multidisciplinaire analyse van DSC-, TGA- en XRD-metingen.</p>
                        <p><strong>Kernresultaat:</strong> Door parameters uit de literatuur aan te passen en deze wiskundig te reguleren, heb ik een model gecreëerd dat de overgang van zouten tussen verschillende toestanden accuraat voorspelt. Hierdoor was er een nieuwe fase ontdekt. Dit is cruciaal voor het veilig en efficiënt opslaan van energie.</p>
                        <p><strong>Kernconcepten:</strong></p>
                        <ul>
                            <li>Python (SciPy) & Data Analytics</li>
                            <li>Datavisualisatie & Interpretatie</li>
                            <li>Literatuuronderzoek & Modeladaptatie</li>
                            <li>Multidisciplinaire Materiaalkarakterisering (DSC, TGA, XRD)</li>
                        </ul>
                    </div>
                `
            },
            expertise: {
                title: 'Expertise',
                hint: 'Management',
                content: `
                    <h2>Expertise</h2>
                    <p><strong>Data Analytics & Interpretatie:</strong></p>
                    <p>In dit project stond de interpretatie en visualisatie van complexe datasets centraal. Door data van DSC-, TGA- en XRD-metingen te integreren, kon ik een holistisch beeld vormen van het zout gedrag. Een funderend onderdeel hiervan was het opschonen van de data (door het corrigeren van baseline-drift in de DSC-metingen) en het extraheren van bruikbare informatie uit diverse XRD-formaten. Door deze data zorgvuldig te visualiseren, konden subtiele anomalieën worden ontdekt die cruciaal waren voor het identificeren van nieuwe fasen.</p>
                    <p><strong>Modeladaptatie:</strong></p>
                    <p>In plaats van een model vanaf nul te ontwikkelen, heb ik bestaande wiskundige formules uit de literatuur geanalyseerd, begrepen en aangepast aan de specifieke eigenschappen van het onderzochte zout. Deze aanpak zorgde ervoor dat het model niet alleen wiskundig accuraat was, maar ook fysisch consistent bleef met de waarnemingen uit de verschillende karakteriseringstechnieken.</p>
                `
            },
            diepgang: {
                title: 'Diepgang',
                hint: 'Technisch/Wiskunde',
                content: `
                    <h2>Diepgang</h2>
                    <p><strong>Regulering en het voorkomen van Overfitting:</strong></p>
                    <p>Een cruciaal onderdeel van dit project was het "temmen" van complexe, niet-lineaire optimalisatieprocessen om fysisch logische resultaten te verkrijgen.</p>
                    <p><strong>De Analyse-flow (Case-study):</strong></p>
                    <ul>
                        <li><strong>Stap 1: De Observatie (Plot 1):</strong> In de DSC-metingen was een subtiele 'shoulder' zichtbaar rond de 126°C. Door de data te visualiseren, werd direct duidelijk dat een standaard model met één component deze overgang niet kon verklaren. <br><br> <img src="../img/Bachelor project/DSC fit base=0.png" alt="DSC fit base=0.png"></li>
                        <li><strong>Stap 2: De Wiskundige Uitdaging:</strong> Bij het toevoegen van een tweede component om de nieuwe fase te vatten, liep ik tegen een probleem aan: de complexe niet-lineaire formule bood te veel vrijheidsgraden. Zonder beperkingen leverde het model "wiskundig correcte" oplossingen op die fysisch onmogelijk waren—bijvoorbeeld een component die buiten de grenzen van de data viel (Plot 2).</li>
                        <li><strong>Stap 3: De Oplossing (Regulatie):</strong> Om overfitting te voorkomen, heb ik het aantal variabelen gereduceerd van 15 naar 9 door specifieke fysische parameters te fixeren, zoals de baseline (die door drift gecorrigeerd moest worden) en de warmtecapaciteit (Cp). Door deze 'harde grenzen' op te leggen, dwong ik het optimalisatieproces om binnen de grenzen van de natuurkunde te blijven.</li>
                        <li><strong>Het Resultaat (Plot 3):</strong> Dit leidde tot een fysisch consistente fit die de aanwezigheid van de nieuwe fase succesvol valideerde. <br><br> <img src="../img/Bachelor project/fitted with 1 piek (1).png" alt="fitted with 1 piek (1).png"></li>
                    </ul>
                    <p><em>Voor de volledige wiskundige onderbouwing en de specifieke formules die uit de literatuur zijn aangepast, kun je de technische bijlage raadplegen.</em></p>
                    <p><em>Voor de volledige details van de onderzoeksmethoden, inclusief de volledige dataset en beschrijvingen van de TGA- en XRD-analyses, zie het volledige stageverslag in de bijlage.</em></p>
                `
            }
                }
    },
    'Master_project': {
        category: 'Reinforcement Learning',
        title: 'Reinforcement Learning voor Pendulum Stabilisatie',
        layers: {
            overzicht: {
                title: 'Overzicht',
                hint: 'Niet-technisch',
                content: `
                    <div class="summary-box">
                        <h2>Overzicht</h2>
                        <p><strong>Teamproject - Focus op Dynamische Modellering & Controle:</strong></p>
                        <p>Dit project is uitgevoerd als een groepsopdracht waarbij de taken modulair werden verdeeld tussen teamleden (modellen, simulatie, dataverwerking) met gebruik van Git voor gestructureerde samenwerking en versiebeheer. Mijn specifieke bijdrage lag bij het modelleren van systeemdynamica en het ontwikkelen van een controle-policy voor een niet-lineair systeem (een <em>unbalanced disk</em>).</p>
                        <p>De kernuitdaging was om de beste oplossing te vinden voor twee verschillende opdrachten: een model dat de werkelijkheid zo goed mogelijk weergeeft via <strong>Time Series Analysis</strong>, en de beste beslissingen via een <strong>Actor-Critic</strong> methode. Door in beide opdrachten gebruik te maken van principes uit de informatietheorie, konden we de onzekerheid in deze zoektochten minimaliseren en de juiste balans vinden tussen nauwkeurige voorspelling en stabiele controle.</p>
                        <p><strong>Kernresultaat:</strong> "Het succesvol stabiliseren van de disk in een gesimuleerde omgeving door de balans te vinden tussen nauwkeurige dynamische modellering en exploratieve controle, waardoor de agent in staat was om het gewenste evenwicht te vinden en vast te houden."</p>
                    </div>
                `
            },
            expertise: {
                title: 'Expertise',
                hint: 'Management',
                content: `
                    <h2>Expertise</h2>
                    <p><strong>Modellering van Tijd-afhankelijke Dynamica:</strong></p>
                    <p>Om de dynamica van de <em>unbalanced disk</em> te vatten, heb ik NARX ANN en State Space Neural Networks (SSNN) ontwikkeld. Deze architecturen zijn essentieel omdat ze temporele afhankelijkheden modelleren, waardoor het systeem de vorige toestanden kan 'onthouden' om de volgende te voorspellen. Deze modellen zijn volledig geïmplementeerd in <strong>PyTorch</strong>, waarbij een cruciale engineering-keuze de implementatie van een <strong>adaptieve learning rate</strong> was. Dit zorgt ervoor dat de leerfactor automatisch wordt bijgesteld wanneer het model een plateau bereikt, waardoor het model meer en sneller kan leren.</p>
                    <p><strong>Reinforcement Learning & Controle-architectuur:</strong></p>
                    <p>Voor de actieve controle heb ik een <strong>Actor-Critic</strong> methode geïmplementeerd. In tegenstelling tot standaard Q-learning maakt Actor-Critic het mogelijk om met een continue actieruimte te werken, wat noodzakelijk is voor vloeiende, graduele aanpassingen van de kracht. Om te voorkomen dat de agent vastloopt in een suboptimale actie, heb ik <strong>Entropy Regularisatie</strong> geïmplementeerd. Dit dwingt de agent om een zekere mate van onzekerheid in zijn acties te behouden, waardoor het systeem gedwongen wordt om nieuwe paden te verkennen totdat de globale oplossing voor stabilisatie wordt gevonden.</p>
                `
            },
            diepgang: {
                title: 'Diepgang',
                hint: 'Technisch/Wiskunde',
                content: `
                    <h2>Diepgang</h2>
                    <p><strong>Het Probleem: De Uitdaging van de Parameterruimte</strong></p>
                    <p>Bij het trainen van complexe neurale netwerken voor niet-lineaire systemen is de zoekruimte voor de optimale hyperparameters (zoor als het aantal neuronen, verborgen lagen en leerfactoren) groot. Een standaard 'Grid Search' is hierbij vaak ondoenlijk omdat het te veel rekenkracht vereist om elke mogelijke combinatie te proberen, terwijl de meeste combinaties triviaal slecht presteren.</p>
                    <p><strong>De Oplossing: Bayesian Optimization via Optuna</strong></p>
                    <p>Om dit probleem op te lossen, heb ik de "improvement loop" geautomatiseerd door gebruik te maken van <strong>Bayesian Optimization</strong> via het <strong>Optuna</strong> framework. In plaats van een willekeurige zoektocht bouwt Bayesian Optimization een probabilistisch model van de parameterruimte zelf. Dit model "weet" in essentie welke gebieden van de zoekruimte onzeker zijn en welke gebieden waarschijnlijk een piek (optimaal resultaat) bevatten. Door de onzekerheid te minimaliseren en de zoektocht naar een nieuwe piek te balanceren, kan de optimizer veel efficiënter zoeken dan bij een Grid Search, omdat het gericht inspeelt op de meest veelbelovende gebieden.</p>
                    <p><strong>Bekijk de Actor-Critic in actie!</strong></p>
                    <p><video controls src="../img/master_project/ActorCritic.mp4" title="[Link naar video]"></video></p>
                    <p><em>In deze video zie je hoe de agent de balans van de disk vindt en stabiliseert via de geleerde policy.</em></p>
                `
            }
                }
    },
    'thesis_Data_engineering': {
        category: 'Data Engineering',
        title: 'Robot Navigatie',
        layers: {
            overzicht: {
                title: 'Overzicht',
                hint: 'Niet-technisch',
                content: `
                    <div class="summary-box">
                        <h2>Overzicht</h2>
                        <p><strong>Pitch:</strong> Hoe zorg je dat een robot begrijpt waar hij is en hoe hij moet bewegen? In deze thesis heb ik de 'data-snelweg' gebouwd voor een robot die door een digitale omgeving navigeert. Het probleem was dat de ruwe sensordata (LiDAR) niet direct bruikbaar was voor het AI-systeem; het was een onoverzichtelijke stroom die ook niet altijd op een constante snelheid binnenkwam, wat de besluitvorming van de robot onbetrouwbaar maakte. Ik bouwde een data-pipeline die deze ruwe data omzet naar simpele geometrische vormen (Polygon Maps) en zorgde voor een constante, betrouwbare stroom van informatie naar de AI. Daarnaast zorgde ik ervoor dat de verschillende software-onderdelen (Unity, ROS en Julia) vloeiend met elkaar konden communiceren. Het resultaat is een navigatiesysteem waarbij de AI altijd over duidelijke en consistente informatie beschikt om veilig beslissingen te nemen.</p>
                        <p><strong>Kernresultaat:</strong> "Het bouwen van een robuuste data-pipeline die ruwe sensordata omzet in een constante en bruikbare stroom voor real-time besluitvorming, door middel van slimme dataverwerking en het verbinden van verschillende softwaresystemen."</p>
                        <video controls src="../img/Master project data science/Robot_bewegen.mp4" title="Title"></video>
                    </div>
                `
            },
            expertise: {
                title: 'Expertise',
                hint: 'Management',
                content: `
                    <h2>Expertise</h2>
                    <p><strong>Modulaire Systeem-Orchestratie:</strong></p>
                    <p>Ik ontwikkelde een modulaire communicatie-architectuur over een byte-geoptimaliseerde TCP-verbinding. Dit stelde mij in staat om functies in Unity direct aan te roepen vanuit het Julia. Door een gestructureerd protocol te definiëren (waarbij het eerste getal de functie identificeert en de daaropvolgende getallen de datalading bevatten), kon ik gemakkelijk nieuwe functies toevoegen om andere data of nieuwe instructies over te brengen van Julia naar Unity en visa versa. Deze modulariteit zorgde voor een aanzienlijk snellere ontwikkelingssnelheid, betere documentatie en een architectuur die eenvoudig onderhoudbaar is.</p>
                    <p><strong>Data-verwerking en Consistentie:</strong></p>
                    <p>Binnen deze infrastructuur is het essentieel dat de informatie die de AI ontvangt, "AI-klaar" is voor navigatie en planning. Ik heb diverse modules ontworpen om de ruwe sensordata te verwerken en te transformeren naar een stabiel wereldbeeld.</p>
                    <p>Een kernonderdeel hiervan is de integratie van <strong>Cartographer (een SLAM-algoritme)</strong> in de ROS2-onderlaag. Cartographer is cruciaal omdat het de ruwe LiDAR-metingen vertaalt naar een globale positie en een kaart van de omgeving. Dit is noodzakelijk omdat de AI-agent een globale context nodig heeft om effectief te kunnen plannen.</p>
                    <p>Omdat de Cartographer-data niet direct bruikbaar is voor de AI-besluitvorming, wordt deze door een reeks modules verwerkt. Een cruciale stap hierin is de omzetting van de Occupancy Grid van het SLAM-algoritme naar een geometrische kaart: </p>
                    <p>- <strong>Geometrische Abstractie:</strong> De kaartdata wordt omgezet naar <strong>Polygon Maps</strong>. Een groot voordeel van Polygon Maps is dat ze complexe vormen kunnen aannemen en meerdere datapunten kunnen samenvatten in één vorm. Daarnaast stelt het gebruik van de <strong>libgeos.jl</strong> bibliotheek ons in staat om zeer snel de afstand tussen de agent en de obstakels te berekenen. Omdat het AI-systeem constant de afstand moet berekenen om een route om obstakels heen te plannen, versnelt deze transformatie de AI-besluitvorming aanzienlijk en blijft het zeer nauwkeurig.</p>
                    <p><strong>Resource-bewuste Performance:</strong></p>
                    <p>De gehele infrastructuur draait op een systeem met beperkte rekenkracht (16GB RAM), wat directe gevolgen heeft voor de latency. Dit leidde tot twee belangrijke technische uitdagingen:</p>
                    <p>- <strong>Data-stabiliteit:</strong> De verwerkingstijd van Cartographer was inconsistent. Om te garanderen dat het AI-systeem altijd de meest actuele data ontvangt zonder te vertragen, heb ik de data-stroom geoptimaliseerd zodat de AI consistent gevoed wordt.</p>
                    <p>- <strong>Planning-optimalisatie:</strong> Het AI-systeem plant vooruit om de veiligheid te waarborgen. Dit is specifiek getuned door het aantal vooruit-geplande stappen te optimaliseren. Ik heb het systeem zo ingericht dat het de reeds geplande acties meeneemt tijdens het genereren van een nieuwe planning. Hierdoor kan het systeem direct opnieuw plannen terwijl de oude planning tot N stappen wordt uitgevoerd, waardoor de AI precies op tijd klaar is voor de volgende cyclus binnen de hardware-limieten.</p>
                    <p>Deze gecombineerde aanpak zorgde ervoor dat de AI de robot succesvol kon besturen in een real-time omgeving. Zie de video hieronder voor een demonstratie van het resultaat.</</p>
                    <p><video controls src="../img/Master project data science/Robot_bewegen.mp4" title="Title"></video></p>
                `
            },
            diepgang: {
                title: 'Diepgang',
                hint: 'Technisch/Wiskunde',
                content: `
                    <h2>Diepgang</h2>
                    <p><strong>De Intuïtie: Het probleem van de draaiende cirkel</strong></p>
                    <p>Stel je voor dat je een kompas hebt. Het noorden is 0°. Als je een heel klein beetje naar links draait, kom je uit op 359°. Voor een mens is het duidelijk dat je maar een klein beetje hebt bewogen. Maar voor een computer die gewoon met getallen rekent, is de afstand tussen 0° en 359° enorm groot. Het systeem ziet een "sprong" van 359 graden in plaats van een kleine beweging van slechts 1 graad.</p>
                    <p>Voor een robot die moet navigeren, is dit een kritiek probleem. Als de AI-agent denkt dat de robot plotseling een enorme draai heeft gemaakt, zal hij een verkeerde correctie uitvoeren en een botsing riskeren.</p>
                    <p><strong>Het Wiskundige Probleem: De beperking van de Gaussiaanse verdeling</strong></p>
                    <p>In de Active Inference (AIF) agent die ik heb geïmplementeerd, gebruiken we "Gaussiaanse verdelingen" om onzekerheden te modelleren. Dit is de standaard in veel AI-modellen omdat de wiskunde daarachter zeer efficiënt en snel is.</p>
                    <p>Echter, een standaard Gaussische verdeling gaat ervan uit dat de ruimte "oneindig" is in beide richtingen (ℝ). Een hoek is echter "circulair". Het zou eigenlijk een <em>von Mises-verdeling</em> moeten zijn (een Gaussische verdeling voor cirkels), maar de wiskunde daarachter wordt zeer complex zodra je het combineert met de niet-lineaire dynamica van een robot. Om de efficiëntie en snelheid van het AI-systeem te behouden, moeten we de data naar het AI-model "vertalen" naar een vorm die het model wel kan begrijpen, zonder de complexiteit van de cirkel-wiskunde in het model zelf te introduceren.</p>
                    <p><strong>De Engineering Oplossing: Domein-correctie</strong></p>
                    <p>Mijn oplossing was om de data-flow te corrigeren voordat deze het AI-model bereikt. Ik heb een transformatie-laag gebouwd die de hoek van de robot θ uit het circulaire domein (0 tot 2π) vertaalt naar een oneindig lineair domein (ℝ).</p>
                    <p>In de praktijk werkt dit als volgt:</p>
                    <p>1. <strong>Range Detectie:</strong> Het systeem kijkt naar de huidige positie van de robot en bepaalt in welk "circuit" van de cirkel hij zich bevindt (bijvoorbeeld tussen 2π en 4π).</p>
                    <p>2. <strong>Shift-correctie:</strong> De hoek wordt dan naar het centrale bereik van dat circuit getransformeerd.</p>
                    <p>3. <strong>Sprong-detectie:</strong> Als de verandering tussen twee metingen groter is dan π (180 graden), herkent het systeem dat de robot naar een nieuw circuit is overgestapt (bijvoorbeeld van 359° naar 1°) en corrigeert het de waarde direct naar de juiste lineaire waarde.</p>
                    <p><strong>Resultaat:</strong> Door deze transformatie krijgt het AI-model een "lineaire" representatie van een circulaire beweging. Het systeem "ziet" nu een kleine beweging van 1° in plaats van een sprong van 359°, terwijl het AI-model nog steeds de eenvoudige, snelle berekeningen van een Gaussische verdeling kan gebruiken. Dit is de essentie van <strong>Data Engineering</strong>: het vertalen van de complexe, ruwe werkelijkheid naar een vorm die de AI optimaal kan verwerken.</p>
                `
            }
                }
    },
    'thesis_Data_science_ai': {
        category: 'Data Science',
        title: 'Optimalisatie van Active Inference voor Roboten',
        layers: {
            overzicht: {
                title: 'Overzicht',
                hint: 'Niet-technisch',
                content: `
                    <div class="summary-box">
                        <h2>Overzicht</h2>
                        <p><strong>Pitch:</strong> Van een AI die twijfelt naar een AI die direct handelt. Ik heb een AI-agent ontwikkeld voor robotnavigatie in een digitale omgeving. De robot reed aanvankelijk door muren heen of kon te traag beslissen over een veilige route omdat het algoritme een tijdrovend 'zoekproces' doorliep om de veiligheidsmarges te bepalen. Ik heb de onderliggende structuur van het algoritme aangepast zodat de agent niet langer bij elke stap een iteratieve zoektocht moet uitvoeren naar een veilige route, maar de optimale route direct berekent op basis van de huidige situatie. Het resultaat is een systeem dat nu in real-time beslist en veilig obstakels ontwijkt, zelfs in onbekende omgevingen. Ookal heeft hij nu moeite met zijn doel bereiken...</p>
                        <p><strong>Kernresultaat:</strong> "Het omzetten van een traag, onvoorspelbaar zoekproces naar een directe, wiskundig gegarandeerde berekening (one-step convergence). Dit maakt de robot in staat om direct en betrouwbaar te navigeren met lage latentie."</p>
                        <video controls src="../img/Master project data science/Robot_bewegen.mp4" title="Title"></video>
                    </div>
                `
            },
            expertise: {
                title: 'Expertise',
                hint: 'Management',
                content: `
                    <h2>Expertise</h2>
                    <p><strong>Engineering voor Real-time Stabiliteit:</strong></p>
                    <p>Mijn focus lag op het overbruggen van de kloof tussen academische AI-theorie en productie-waardige systemen. In een real-time scenario is de balans tussen veiligheid en reactiesnelheid cruciaal. De standaard implementatie van de NUV-prior (een gespecialiseerde prior die zichzelf aanpast om aan een voorwaarde zoals x > a te voldoen) vereiste een γ-parameter die de 'sterkte' van de veiligheidsgrens bepaalde. Een te hoge γ maakte de agent overgevoelig (overconstrained), waardoor de robot 'angstig' werd voor obstakels; bij een te lage γ plant de agent routes door obstakels heen. Bovendien was het berekenen van een veilige route in de literatuur een iteratief proces, wat leidde tot onvoorspelbare latentie.</p>
                    <p>Mijn bijdrage was het dynamisch berekenen van γ per tijdstap. Dit zorgt ervoor dat de agent zijn 'voorzichtigheid' per situatie aanpast, waardoor hij veilig genoeg blijft om obstakels te ontwijden zonder onnodig beperkt te worden door over-regularisatie. Door dit te koppelen aan een analytische 'fixed-point' oplossing, bereikt het algoritme 'one-step convergence'. Hierdoor voert het AI-systeem direct de juiste acties uit, wat essentieel is voor de navigatie van een mobiele robot.</p>
                    <p><video controls src="../img/Master project data science/Robot_bewegen.mp4" title="Title"></video></p>
                `
            },
            diepgang: {
                title: 'Diepgang',
                hint: 'Technisch/Wiskunde',
                content: `
                    <h2>Diepgang</h2>
                    <p><strong>De Intuïtie: Wat is een 'Vast-punt'?</strong></p>
                    <p>Stel je een wiskundige reeks voor waarin elke volgende waarde (xₜ₊₁) afhangt van de vorige waarde (xₜ). Een simpel voorbeeld is de volgende regel: xₜ₊₁ = 0.5 · xₜ. Als we beginnen met x₀ = 8, dan is x₁ gelijk aan 4. Wat wordt x₂? (Antwoord: x₂ = 0.5 · 4 = 2). Wat wordt x₃? (Antwoord: 1). Als dit proces oneindig wordt herhaald, nadert x naar 0. Maar stel je voor als x₀ = 0, dan is x₁ = 0.5 · 0 = 0 en ook x₂ = 0.5 · 0 = 0. In de wiskunde noemen we een punt waar de invoer en de uitvoer gelijk zijn (x = f(x)) het <strong>vaste-punt</strong> (fixed-point).</p>
                    <p><strong>Het Probleem in Roboti-navigatie</strong></p>
                    <p>In dit project wordt een AI-agent aangepast om obstakels te vermijden middels een gespecialiseerde prior (de NUV-prior). Deze prior is ontworpen om de robot te dwingen aan bepaalde veiligheidsvoorwaarden te voldoen (zoals x > a). In de standaard literatuur wordt dit bereikt via een iteratief proces, zoals weergegeven door:</p>
                    <p>zₗ₊₁ = (1/σ² + 1/σ²ₗ)⁻¹(s/σ² + mₗ/σ²ₗ)<br>σ²ₗ₊₁ = |a - zₗ₊₁|/γ<br>mₗ₊₁ = |a - zₗ₊₁| + a</p>
                    <p>Het probleem is dat de tijd die nodig is om deze convergentie te bereiken sterk varieert, afhankelijk van de situatie (zoals de mate van onzekerheid van de agent over zijn positie). Voor een mobiele robot die binnen milliseconden moet reageren, is een onvoorspelbare latentie een kritiek risico voor de veiligheid. Als de agent te lang bezig is met het 'zoeken' naar de juiste route, mist hij de kans om tijdig te reagereren.</p>
                    <p><strong>De Oplossing: Van Iteratie naar Directe Berekening</strong></p>
                    <p>In plaats van te wachten tot de agent via een lus het juiste punt vindt, kan het probleem worden geformuleerd als een analytische vaste-puntvergelijking. Door het probleem wiskundig op te lossen, wordt het iteratieve proces vervangen door een directe berekening.</p>
                    <p>De vaste-punt z wordt berekend door: z = (1/σ² + 1/σ²∞(z))⁻¹(s/σ + m∞(z)/σ²∞(z)) = (1/σ² + γ/|a - z|)⁻¹(s/σ² + γ(|a-z| + a)/|a-z|)</p>
                    <p>Door deze formule analytisch op te lossen, is de "eindbestemming" direct beschikbaar. Veel termen vallen weg, waardoor de oplossing elegant wordt.</p>
                    <p>Hierdoor wordt de iteratie vervangen door een <strong>één-stap</strong> formule. Dit garandeert dat de AI-systeem een stuk sneller wordt en binnen de tijdslimieten van de robot kan blijven, terwijl hij tegelijkertijd veilig obstakels ontwijkt.</p>
                `
            }
                }
    }
};

function renderProject(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    document.querySelector('.category').textContent = data.category;
    document.querySelector('h1').textContent = data.title;

    const layers = ['overzicht', 'expertise', 'diepgang'];
    
    layers.forEach((layerKey, index) => {
        const layerData = data.layers[layerKey];
        const btn = document.querySelector(`.layer-btn[data-target="${layerKey}"]`);
        const content = document.getElementById(layerKey);
        
        // Update titles and hints
        btn.querySelector('.btn-title').textContent = layerData.title;
        btn.querySelector('.btn-hint').textContent = `(${layerData.hint})`;
        
        // Inject content
        content.querySelector('.project-layer-content').innerHTML = layerData.content;
        
        // Initial state: first layer always open, others can be toggled
        if (index === 0) {
            content.querySelector('.project-layer-content').classList.add('is-open');
        } else {
            content.querySelector('.project-layer-content').classList.remove('is-open');
        }
    });

    // Add click listeners for the accordion toggle
    document.querySelectorAll('.layer-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-target');
            const target = document.getElementById(targetId);
            target.querySelector('.project-layer-content').classList.toggle('is-open');
            // Note: The user said "de text eronder verwijnt". 
            // In this logic, clicking a bar closes its own content.
            // If they want only ONE to be open at a time, we can easily add:
            // document.querySelectorAll('.layer-content').forEach(el => {
            //    if (el !== target) el.classList.add('is-closed');
            // });
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    if (id && projectData[id]) {
        renderProject(id);
    }
});