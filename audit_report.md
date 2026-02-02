# Audit súladu webovej stránky kotlynapelety.sk so slovenskou legislatívou (stav k 2026)

Dobrý deň,
na základe vašej požiadavky som vykonal predbežnú kontrolu webovej stránky `kotlynapelety.sk` z hľadiska súladu so slovenskými právnymi predpismi. Nižšie uvádzam zhrnutie zistení a odporúčania na nápravu.

---

## Čo je v poriadku

*   **1. GDPR a ochrana súkromia:**
    *   **Zásady ochrany osobných údajov:** Na stránke je dostupný kvalitne spracovaný dokument `/OchranaUdajov`, ktorý pokrýva všetky kľúčové oblasti GDPR: identifikáciu prevádzkovateľa, účely a právne základy spracúvania, informácie o príjemcoch, poučenie o právach dotknutých osôb a kontakt na dozorný orgán.
    *   **Cookie lišta:** Implementácia cookie lišty je technicky správna a rešpektuje princíp "opt-in". Predvolene sú marketingové a analytické cookies vypnuté. Používateľ má možnosť granulárne si zvoliť preferencie, prijať všetko alebo odmietnuť všetko. Lišta obsahuje aj odkaz na zásady ochrany osobných údajov.

*   **2. Ceny a DPH:**
    *   **Informácia o DPH v detaile produktu:** Na stránke s detailom produktu je uvedená informácia: "Cena zahŕňa DPH, doprava a inštalácia sa účtuje osobitne." Toto je v súlade so zákonom.

*   **3. Proces objednávky:**
    *   **Stránka nie je e-shop:** Webová stránka funguje ako online katalóg, ktorý umožňuje používateľom odoslať dopyt (cenovú ponuku) e-mailom alebo telefonicky. Keďže k uzatváraniu zmluvy nedochádza priamo cez web, nevzťahuje sa na ňu povinnosť mať tlačidlo "Objednávka s povinnosťou platby".

---

## Čo chýba / je nesprávne

*   **1. Identifikačné údaje (Informačná povinnosť):**
    *   **Neúplné a rozptýlené údaje:** Povinné identifikačné údaje o prevádzkovateľovi sú neúplné a roztrúsené na rôznych miestach (pätička, stránka o ochrane údajov).
    *   **Chýbajúce údaje:** Úplne chýbajú nasledujúce povinné údaje:
        *   **DIČ / IČ DPH:** (Ak je prevádzkovateľ platiteľom DPH, tento údaj je povinný).
        *   **Orgán dozoru:** Názov a adresa príslušného inšpektorátu Slovenskej obchodnej inšpekcie (SOI) podľa sídla spoločnosti.

*   **2. Všeobecné obchodné podmienky (VOP):**
    *   **VOP úplne chýbajú:** Na stránke sa nenachádza žiadny dokument, ktorý by sa dal považovať za Všeobecné obchodné podmienky. Aj keď stránka nie je klasickým e-shopom, pri predaji tovaru na základe dopytu je vysoko odporúčané mať VOP, ktoré si zákazník môže prečítať pred odoslaním dopytu alebo najneskôr pred uzavretím zmluvy.

*   **3. GDPR a ochrana súkromia:**
    *   **Chýbajúca informácia pri kontaktnom formulári:** Hoci je právny základ (oprávnený záujem) pre spracovanie údajov z formulára správne uvedený v zásadách, pri samotnom formulári chýba odkaz na tieto zásady. To znižuje transparentnosť pre používateľa.

*   **4. Ceny a DPH:**
    *   **Chýbajúca informácia o DPH v zozname produktov:** Na stránke so zoznamom produktov a na kartách jednotlivých produktov (`ProductCard`) je uvedená cena bez informácie, či je s DPH alebo bez DPH. Táto informácia je povinná.

---

## Odporúčania na nápravu

*   **1. Centralizovať a doplniť identifikačné údaje:**
    *   **Vytvoriť jednotnú sekciu:** Odporúčam vytvoriť na stránke samostatnú podstránku "Kontakt" alebo "O nás", prípadne doplniť do pätičky webu všetky povinné údaje na jedno miesto.
    *   **Doplniť chýbajúce údaje:** Do tejto sekcie doplňte:
        *   Obchodné meno
        *   Sídlo
        *   IČO
        *   **DIČ / IČ DPH**
        *   Údaj o zápise v obchodnom registri (napr. "Spoločnosť zapísaná v Obchodnom registri Mestského súdu Košice, oddiel: Sro, vložka č. 39196/V")
        *   Kontaktné údaje (e-mail, telefón)
        *   **Informácie o orgáne dozoru:**
            ```
            Orgán dozoru:
            Inšpektorát SOI pre Košický kraj
            Vrátna č. 3, 043 79 Košice 1
            ```

*   **2. Vypracovať a zverejniť Všeobecné obchodné podmienky:**
    *   **Vypracovať VOP:** Nechajte si právnikom vypracovať VOP, ktoré budú zodpovedať vášmu obchodnému modelu (predaj na základe dopytu). Mali by obsahovať minimálne:
        *   Identifikáciu predávajúceho.
        *   Popis tovaru a procesu objednávky (dopytu).
        *   Cenové a platobné podmienky.
        *   Dodacie podmienky.
        *   **Poučenie o práve na odstúpenie od zmluvy do 14 dní** (ak sa zmluva uzatvára na diaľku, napr. e-mailom).
        *   **Reklamačný poriadok** (zodpovednosť za vady, postup pri reklamácii).
        *   **Informáciu o možnosti alternatívneho riešenia sporov (ARS).**
    *   **Zverejniť VOP:** Umiestnite odkaz na VOP do pätičky webu, aby boli ľahko dostupné.

*   **3. Zvýšiť transparentnosť pri kontaktnom formulári:**
    *   **Pridať odkaz:** Pod kontaktný formulár pridajte text s odkazom na Zásady ochrany osobných údajov. Napríklad:
        > "Odoslaním formulára beriete na vedomie spracovanie osobných údajov za účelom vybavenia vašej požiadavky. Viac informácií nájdete v našich [Zásadách ochrany osobných údajov](/OchranaUdajov)."

*   **4. Doplniť informáciu o DPH pri cenách:**
    *   **Upraviť zobrazenie ceny:** V komponente `ProductCard.tsx` (a všade inde, kde sa zobrazuje cena v zozname produktov) doplňte k cene informáciu "s DPH". Napríklad: `1 234 € s DPH`.

---

**Právna doložka:** Tento audit slúži ako predbežná kontrola a odporúčanie. Pre zabezpečenie 100% právnej istoty odporúčam finálne znenie dokumentov a implementáciu zmien konzultovať s právnikom špecializujúcim sa na e-commerce a ochranu osobných údajov.
