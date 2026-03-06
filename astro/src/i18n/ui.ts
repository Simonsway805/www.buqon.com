export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Locale = keyof typeof languages;

export const defaultLocale: Locale = "de";

export const ui = {
  de: {
    "nav.product": "Produkt",
    "nav.features": "Features",
    "nav.testimonials": "Kundenstimmen",
    "nav.contact": "Kontakt",
    "nav.inquiry": "Anfrage",
    "hero.badge": "DINE",
    "hero.title": "Ein Tisch Um Sie zu Vereinen",
    "hero.subtitle":
      "Freunde, Familie und Essen im Mittelpunkt",
    "hero.cta": "Jetzt anfragen",
    "feature.community.title":
      "Freunde, Familie und Essen im Mittelpunkt",
    "feature.community.body":
      "Der Buqon DINE Gartentisch mit Grilleinsatz bietet, worauf du schon lange wartest: Das Miteinander wird beim Grillen ins Zentrum gerückt. Um den Tisch versammelt ist jeder mitten im Geschehen und niemand außen vor. Keiner muss mehr stundenlang am Griller stehen, womöglich noch mit dem Rücken zu den anderen, und kann sich am Geschehen kaum beteiligen. Mit Buqon steht das gemeinsame Essen und der soziale Aspekt, genauso wie der BBQ Grill selbst, im Mittelpunkt.",
    "feature.grill.title":
      "Bestimme deine Garstufe selbst, direkt am Tisch mit Grill",
    "feature.grill.body":
      "Mit dem Buqon DINE Edelstahl Gartentisch bist du dein eigener Grillmeister. Grille ganz nach deinem individuellen Geschmack und bestimme dein Grillgut und die Garstufe selbst, direkt am Tisch. Das ausgeklügelte Grill-System ist mit verschiedenen Adaptierungen erweiterbar. Wie wäre es zum Beispiel zusätzlich mit einer Eiswanne für kühle Getränke direkt am Tisch?",
    "feature.style.title":
      "Get Together mit Stil – der ideale Tisch für Garten, Terrasse und Balkon",
    "feature.style.body":
      "Ob hinter deinem Haus, über den Dächern deiner Stadt, der Penthouse Terrasse oder im Garten deiner Finka im Süden. Der Buqon DINE Tisch mit integriertem Grill passt mit seiner zeitlosen Optik überall perfekt zu dir. Der Tisch kann als Gartentisch oder Tisch mit Grill in der Mitte verwendet werden. Je nach Gelegenheit und Verwendung.",
    "feature.quality.title":
      "Made in Europe: Ein langlebiges Produkt auf höchster Qualität",
    "feature.quality.body":
      "Sowohl Gartentisch als auch Grill sind Dinge, die lange Haltbarkeit aufweisen sollen. Das ist auch uns ein wichtiges Anliegen. Deshalb setzen wir auf eine qualitativ hochwertige Produktion mit kurzen Lieferwegen, hier in Europa.",
    "safety.title": "Sicherheit beim Grillen",
    "safety.body":
      "Wird bei uns groß geschrieben. Deshalb ist der Grilleinsatz von außen komplett temperatur neutral und wird selbst bei langen Grillabenden nicht heiss. Das Umbauen des Buqon DINE Gartentisches geht außerdem kinderleicht von der Hand.",
    "cta.title": "Hol dir das perfekte Grillerlebnis nach Hause!",
    "cta.body":
      "Denn es gibt nichts schöneres als Familie und Freunden gemeinsam am Tisch zu sitzen, den feinen Holzkohle-Grill-Duft in der Nase zu verspüren und das Brutzeln von leckeren Köstlichkeiten live mit zu erleben. Hol dir also deinen Buqon DINE Gartentisch mit Grilleinsatz und genieße die Grillsaison mit allen Sinnen zur Gänze.",
    "cta.button": "Anfrage senden",
    "form.name": "Name",
    "form.email": "E-Mail",
    "form.message": "Nachricht",
    "form.send": "Senden",
    "form.success": "Vielen Dank! Deine Anfrage wurde gesendet.",
    "form.error": "Etwas ist schiefgelaufen. Bitte versuche es erneut.",
    "form.sending": "Wird gesendet...",
    "footer.rights": "Alle Rechte vorbehalten.",
    "testimonials.title": "Das sagen unsere Kunden",
  },
  en: {
    "nav.product": "Product",
    "nav.features": "Features",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "nav.inquiry": "Inquiry",
    "hero.badge": "DINE",
    "hero.title": "One Table to Unite Them All",
    "hero.subtitle":
      "Friends, Family, and Food at the Center",
    "hero.cta": "Inquire now",
    "feature.community.title":
      "Friends, Family, and Food at the Center",
    "feature.community.body":
      "The Buqon DINE garden table with built-in grill offers what you've been waiting for: togetherness is placed at the heart of grilling. Gathered around the table, everyone is part of the action and no one is left out. No more standing at the grill for hours, back turned to your guests. With Buqon, shared dining and the social experience, just like the BBQ grill itself, take center stage.",
    "feature.grill.title":
      "Choose your own doneness, right at the table",
    "feature.grill.body":
      "With the Buqon DINE stainless steel garden table, you are your own grill master. Grill to your individual taste and choose your ingredients and doneness yourself, right at the table. The sophisticated grill system can be expanded with various adaptations. How about adding an ice bucket for cool drinks right at the table?",
    "feature.style.title":
      "Get Together in Style – the ideal table for garden, terrace, and balcony",
    "feature.style.body":
      "Whether behind your house, above the rooftops of your city, on a penthouse terrace, or in the garden of your villa in the south. The Buqon DINE table with integrated grill fits perfectly everywhere with its timeless design. The table can be used as a garden table or a table with a grill in the middle. Depending on the occasion and use.",
    "feature.quality.title":
      "Made in Europe: A durable product of the highest quality",
    "feature.quality.body":
      "Both garden tables and grills should be built to last. That is also important to us. That's why we rely on high-quality production with short supply chains, right here in Europe.",
    "safety.title": "Safety While Grilling",
    "safety.body":
      "Safety is a top priority for us. That's why the grill insert is completely temperature-neutral on the outside and doesn't get hot even during long barbecue evenings. Converting the Buqon DINE garden table is also incredibly easy.",
    "cta.title": "Bring the perfect grilling experience home!",
    "cta.body":
      "Because there's nothing better than sitting together with family and friends at the table, the fine charcoal grill aroma in the air, and experiencing the sizzle of delicious food live. So get your Buqon DINE garden table with grill insert and enjoy the grilling season to the fullest with all your senses.",
    "cta.button": "Send inquiry",
    "form.name": "Name",
    "form.email": "Email",
    "form.message": "Message",
    "form.send": "Send",
    "form.success": "Thank you! Your inquiry has been sent.",
    "form.error": "Something went wrong. Please try again.",
    "form.sending": "Sending...",
    "footer.rights": "All rights reserved.",
    "testimonials.title": "What Our Customers Say",
  },
} as const;
