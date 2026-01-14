import Header from "@/components/Header";
import { Separator } from "@/components/ui/separator";

const OchranaUdajov = () => {
  return (
    <div className="bg-background text-foreground">
      <Header />
      <div className="container mx-auto px-4 md:px-6 my-16 py-12">
        <div className="prose prose-lg max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Zásady ochrany osobných údajov
          </h1>
          <p className="text-muted-foreground">
            Tieto zásady ochrany osobných údajov (ďalej len „Zásady“) popisujú,
            akým spôsobom spoločnosť ARGO SNV, s.r.o. spracúva osobné údaje
            návštevníkov svojej webovej stránky (ďalej len „webstránka“).
          </p>
          <Separator className="my-8" />
          <p>
            Ochrana vašich osobných údajov je pre nás dôležitá. Zaväzujeme sa
            chrániť vaše súkromie v súlade s platnými právnymi predpismi, najmä
            s Nariadením Európskeho parlamentu a Rady (EÚ) 2016/679 o ochrane
            fyzických osôb pri spracúvaní osobných údajov a o voľnom pohybe
            takýchto údajov (ďalej len „GDPR“) a zákonom č. 18/2018 Z. z. o
            ochrane osobných údajov.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            1. Kto je prevádzkovateľom vašich údajov?
          </h2>
          <p>
            Prevádzkovateľom, ktorý určuje účely a prostriedky spracúvania
            vašich osobných údajov, je:
          </p>
          <div className="p-4 border rounded-lg my-4">
            <p className="font-semibold">ARGO SNV, s.r.o.</p>
            <p>Slovenská 256</p>
            <p>053 21 Markušovce</p>
            <p>IČO: 50314262</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Spoločnosť zapísaná v Obchodnom registri Mestského súdu Košice,
              oddiel: Sro, vložka č. 39196/V
            </p>
          </div>
          <p>
            Ak máte akékoľvek otázky týkajúce sa spracúvania vašich osobných
            údajov, môžete nás kontaktovať:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>E-mailom:</strong> kotlynapelety@gmail.com
            </li>
            <li>
              <strong>Telefonicky:</strong> +421 905 123 456
            </li>
            <li>
              <strong>Poštou:</strong> na vyššie uvedenú adresu sídla.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            2. Aké údaje spracúvame, na aký účel a na akom právnom základe?
          </h2>
          <p>
            Na našej webstránke spracúvame osobné údaje v nasledujúcich
            prípadoch:
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">A. Kontaktný formulár</h3>
          <p>
            Ak sa rozhodnete kontaktovať nás prostredníctvom kontaktného
            formulára na našej webstránke, spracúvame údaje, ktoré nám
            poskytnete.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Spracúvané údaje:</strong> Meno a priezvisko, e-mailová
              adresa, telefónne číslo a obsah vašej správy.
            </li>
            <li>
              <strong>Účel spracúvania:</strong> Spracovanie vašej požiadavky,
              dopytu alebo otázky a poskytnutie odpovede.
            </li>
            <li>
              <strong>Právny základ:</strong> Naše oprávnené záujmy (čl. 6 ods.
              1 písm. f) GDPR), ktoré spočívajú v potrebe efektívne komunikovať
              s návštevníkmi webstránky a potenciálnymi klientmi, ktorí nás sami
              oslovia.
            </li>
            <li>
              <strong>Doba uchovávania:</strong> Údaje uchovávame po dobu
              nevyhnutnú na vybavenie vášho dopytu a prípadnú nadväzujúcu
              komunikáciu, zvyčajne však nie dlhšie ako 1 rok od ukončenia
              komunikácie, pokiaľ nevznikne iný právny vzťah (napr. zmluva).
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2">
            B. Analytické súbory cookies (Google Analytics)
          </h3>
          <p>
            Na analýzu návštevnosti a zlepšovanie fungovania našej webstránky
            využívame službu Google Analytics od spoločnosti Google Ireland
            Limited.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Spracúvané údaje:</strong> Anonymizované údaje o vašom
              zariadení, prehliadači, približnej geografickej polohe (odvodenej
              z IP adresy) a o tom, ako používate našu webstránku (ktoré stránky
              ste navštívili, ako dlho ste na nich strávili čas). Služba Google
              Analytics je nastavená na anonymizáciu IP adries.
            </li>
            <li>
              <strong>Účel spracúvania:</strong> Získavanie štatistických údajov
              o návštevnosti webstránky, porozumenie správaniu používateľov a
              následné zlepšovanie obsahu a funkčnosti našej webstránky.
            </li>
            <li>
              <strong>Právny základ:</strong> Váš súhlas (čl. 6 ods. 1 písm. a
              GDPR), ktorý nám udeľujete prostredníctvom bannera (cookie lišty)
              pri prvej návšteve webstránky.
            </li>
            <li>
              <strong>Doba uchovávania:</strong> Doba uchovávania údajov v
              Google Analytics je nastavená na 14 mesiacov. Svoj súhlas môžete
              kedykoľvek odvolať zmenou nastavení cookies vo vašom prehliadači
              alebo v nastaveniach cookie lišty na našej webstránke.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2">
            C. Reklamné súbory cookies (Google AdSense)
          </h3>
          <p>
            Na zobrazovanie personalizovanej reklamy využívame službu Google
            AdSense od spoločnosti Google Ireland Limited.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Spracúvané údaje:</strong> Údaje o vašom zariadení,
              prehliadači, IP adrese, histórii prehliadania a záujmoch
              odvodených z vášho online správania. Tieto údaje sa používajú na
              zobrazovanie reklám, ktoré sú pre vás relevantné.
            </li>
            <li>
              <strong>Účel spracúvania:</strong> Zobrazovanie personalizovaných
              reklám na našej webstránke, meranie výkonnosti reklám a
              poskytovanie relevantného reklamného obsahu.
            </li>
            <li>
              <strong>Právny základ:</strong> Váš súhlas (čl. 6 ods. 1 písm. a
              GDPR), ktorý nám udeľujete prostredníctvom bannera (cookie lišty)
              pri prvej návšteve webstránky.
            </li>
            <li>
              <strong>Doba uchovávania:</strong> Doba uchovávania údajov závisí
              od konkrétneho typu cookie. Reklamné cookies môžu byť uchovávané
              až 2 roky. Svoj súhlas môžete kedykoľvek odvolať v nastaveniach
              cookie lišty na našej webstránke.
            </li>
          </ul>

          <h3 className="text-xl font-bold mt-6 mb-2">
            D. Sledovanie konverzií (Google Ads Conversion Tracking)
          </h3>
          <p>
            Na meranie účinnosti našich reklamných kampaní v službe Google Ads
            využívame sledovanie konverzií od spoločnosti Google Ireland Limited.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Spracúvané údaje:</strong> Informácie o tom, že ste
              vykonali konverznú akciu (napríklad odoslanie kontaktného
              formulára), údaje o vašom zariadení, prehliadači, IP adrese a
              jedinečný identifikátor transakcie. Tieto údaje sa používajú na
              prepojenie vašej konverznej akcie s reklamnou kampaňou, ktorá vás
              na našu stránku priviedla.
            </li>
            <li>
              <strong>Účel spracúvania:</strong> Meranie efektivity reklamných
              kampaní, optimalizácia reklamných výdavkov a zlepšovanie cielenia
              reklám. Sledovanie konverzií nám pomáha pochopiť, ktoré reklamy
              vedú k požadovaným akciám na našej webstránke.
            </li>
            <li>
              <strong>Právny základ:</strong> Váš súhlas (čl. 6 ods. 1 písm. a
              GDPR), ktorý nám udeľujete prostredníctvom bannera (cookie lišty)
              pri prvej návšteve webstránky výberom kategórie „Reklamné cookies".
            </li>
            <li>
              <strong>Doba uchovávania:</strong> Údaje o konverziách sú
              uchovávané v službe Google Ads po dobu 90 dní. Cookies súvisiace
              so sledovaním konverzií môžu byť uchovávané až 90 dní. Svoj súhlas
              môžete kedykoľvek odvolať v nastaveniach cookie lišty na našej
              webstránke.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            3. Komu poskytujeme vaše údaje?
          </h2>
          <p>
            Vaše osobné údaje sú pre nás dôverné a neposkytujeme ich tretím
            stranám na komerčné účely.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">Kontaktný formulár</h3>
          <p>
            Údaje z kontaktného formulára spracúvame iba interně a nie sú
            poskytované žiadnym tretím stranám, okrem prípadov, keď to vyžaduje
            zákon.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-2">Google Analytics, Google AdSense a Google Ads</h3>
          <p>V prípade analytických, reklamných cookies a sledovania konverzií sú príjemcom údajov:</p>
          <p>
            <strong>Google Ireland Limited</strong> (Gordon House, Barrow
            Street, Dublin 4, Írsko) a v rámci skupiny Google aj{" "}
            <strong>Google LLC (USA)</strong>. Prenos údajov do USA (tretej
            krajiny) je zabezpečený prostredníctvom Štandardných zmluvných
            doložiek (SCC) schválených Európskou komisiou, ktoré poskytujú
            primerané záruky ochrany osobných údajov.
          </p>
          <p className="mt-4">
            Viac informácií o tom, ako Google spracúva údaje, nájdete v{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Zásadách ochrany súkromia spoločnosti Google
            </a>
            . Informácie o personalizovanej reklame a možnostiach odhlásenia nájdete na{" "}
            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              stránke nastavení reklám Google
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            4. Aké sú vaše práva?
          </h2>
          <p>
            Ako dotknutá osoba máte v súvislosti so spracúvaním vašich osobných
            údajov nasledujúce práva:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Právo na prístup:</strong> Máte právo získať potvrdenie o
              tom, či spracúvame vaše osobné údaje, a ak áno, získať k nim
              prístup.
            </li>
            <li>
              <strong>Právo na opravu:</strong> Máte právo na opravu nesprávnych
              alebo doplnenie neúplných osobných údajov.
            </li>
            <li>
              <strong>Právo na vymazanie (právo „byť zabudnutý“):</strong> Máte
              právo požiadať o vymazanie vašich údajov, ak už nie sú potrebné na
              účely, na ktoré boli získané, alebo ak bol súhlas odvolaný.
            </li>
            <li>
              <strong>Právo na obmedzenie spracúvania:</strong> Máte právo
              požiadať o obmedzenie spracúvania, ak napríklad namietate
              správnosť údajov.
            </li>
            <li>
              <strong>Právo na prenosnosť údajov:</strong> Máte právo získať
              údaje, ktoré ste nám poskytli, v štruktúrovanom a bežne používanom
              formáte.
            </li>
            <li>
              <strong>Právo odvolať súhlas:</strong> Ak spracúvame vaše údaje na
              základe súhlasu (t.j. analytické a reklamné cookies vrátane sledovania konverzií), máte právo tento súhlas
              kedykoľvek odvolať. Odvolanie súhlasu nemá vplyv na zákonnosť
              spracúvania pred jeho odvolaním.
            </li>
            <li>
              <strong>Právo namietať:</strong> Ak spracúvame vaše údaje na
              základe oprávneného záujmu (t.j. kontaktný formulár), máte právo
              kedykoľvek namietať proti takémuto spracúvaniu.
            </li>
          </ul>
          <p className="mt-4">
            Svoje práva si môžete uplatniť zaslaním žiadosti na naše kontaktné
            údaje uvedené v bode 1.
          </p>
          <p>
            Ak sa domnievate, že spracúvanie vašich osobných údajov je v rozpore
            s GDPR, máte právo podať sťažnosť dozornému orgánu, ktorým je:
          </p>

          <p className="font-semibold">
            Úrad na ochranu osobných údajov Slovenskej republiky
          </p>
          <p>Hraničná 12, 820 07 Bratislava 27</p>
          <p>
            Web:{" "}
            <a
              href="https://dataprotection.gov.sk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              https://dataprotection.gov.sk/
            </a>
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">
            5. Záverečné ustanovenia
          </h2>
          <p>
            Tieto Zásady môžeme príležitostne aktualizovať, aby odrážali zmeny v
            našich postupoch alebo v legislatíve. O všetkých podstatných zmenách
            vás budeme informovať na našej webstránke.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Tieto Zásady sú platné a účinné od 15.11.2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OchranaUdajov;
