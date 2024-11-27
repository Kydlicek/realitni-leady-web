### Realitní Leady - Webová stránka pro sběr kontaktů potenciálních zákazníků

---

#### Popis projektu
**Realitní Leady** je webová stránka postavená na Next.js, která slouží k jednoduchému sběru kontaktů potenciálních zájemců o realitní nabídky. Tato stránka umožňuje snadné sbírání kontaktních údajů uživatelů, kteří mohou být po připojení k backendu a autentifikaci prostřednictvím **Kinde Authentication** převedeni na reálné uživatele.

---

### Požadavky

Předtím, než začnete s nastavením, ujistěte se, že máte nainstalovány následující nástroje:

- **Node.js** - Verze 14 nebo novější
- **npm** - Součástí Node.js

---

### Instrukce pro nastavení

#### 1. Instalace závislostí
Začněte tím, že přejdete do složky projektu a nainstalujete všechny potřebné balíčky. Spusťte následující příkaz:

```bash
cd realitni-leady
npm install
```

Tento příkaz stáhne a nainstaluje všechny požadované závislosti pro váš projekt.

---

#### 2. Nastavení prostředí
Aby projekt správně fungoval, musíte nastavit environmentální proměnné, které umožní propojení s vaší backendovou aplikací a dalšími službami.

1. **Přejmenujte vzorový soubor prostředí:**
   V kořenové složce projektu najdete soubor `.env.local.sample`. Přejmenujte tento soubor na `.env.local`:

   ```bash
   mv .env.local.sample .env.local
   ```

2. **Aktualizujte soubor s environmentálními proměnnými:**
   Otevřete soubor `.env.local` a přidejte své nastavení:

   ```env
   KINDE_CLIENT_ID=<váš_kinde_client_id>
   KINDE_CLIENT_SECRET=<váš_kinde_client_secret>
   KINDE_ISSUER_URL=https://<váš_kinde_subdomén>.kinde.com
   KINDE_SITE_URL=<url_vaší_stránky>
   KINDE_POST_LOGOUT_REDIRECT_URL=<url_po_odhlášení>
   KINDE_POST_LOGIN_REDIRECT_URL=<url_po_přihlášení>
   ```

- **KINDE_CLIENT_ID**: Získáte v Kinde dashboardu pod nastavením aplikace.
- **KINDE_CLIENT_SECRET**: Najdete v dashboardu.
- **KINDE_ISSUER_URL**: URL pro vaši Kinde subdoménu (např. https://your-subdomain.kinde.com).
- **KINDE_SITE_URL**: URL vaší stránky (např. https://realitni-leady.cz).
- **KINDE_POST_LOGOUT_REDIRECT_URL**: URL, na kterou budou uživatelé přesměrováni po odhlášení (např. https://realitni-leady.cz).
- **KINDE_POST_LOGIN_REDIRECT_URL**: URL, na kterou budou uživatelé přesměrováni po přihlášení (např. https://realitni-leady.cz/dashboard).

---

#### 3. Spuštění vývojového serveru
Po nastavení environmentálních proměnných můžete spustit vývojový server, který zobrazí vaši webovou stránku. Použijte následující příkaz:

```bash
npm run dev
```

Vaše stránka bude dostupná na adrese [http://localhost:3000](http://localhost:3000).

---

#### 4. Nasazení
Pokud budete připraveni nasadit stránku do produkčního prostředí, můžete využít platformy jako **Vercel**, **Netlify** nebo jakoukoli jinou platformu podporující Next.js. Nezapomeňte přidat environmentální proměnné v nastavení nasazení na platformě.

---

### Přehled projektu

Tato webová stránka je navržena pro generování realitních leadů. Poskytuje formulář pro sběr kontaktů, kteří mají zájem o realitní nabídky, a následně je můžete spojit s realitními makléři nebo agenturami.

- **Kinde Authentication**: Pomocí Kinde ověříme uživatele a zajistíme bezpečný přístup.
- **Jednoduchý design**: Stránka je minimalistická a zaměřuje se na efektivní sběr informací.
- **Optimalizováno pro konverzi**: Stránka je navržena tak, aby přitahovala zájemce a přeměňovala návštěvníky na leady.

---

### Kontakt

Pokud máte jakékoliv dotazy nebo potřebujete podporu, neváhejte nás kontaktovat!

---

### Závěr

Tento projekt vám umožní snadno spustit webovou stránku pro generování realitních leadů. Použití **Kinde** pro správu uživatelů vám zajistí bezpečný a efektivní způsob, jak se spojit se zájemci o realitní nabídky.

Pokud potřebujete jakoukoli pomoc při nastavení nebo nasazení, rádi vám pomůžeme! 😊