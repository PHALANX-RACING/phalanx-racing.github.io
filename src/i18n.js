export const locales = ['tr', 'en'];
export const defaultLang = 'tr';
export const localeTag = { tr: 'tr-TR', en: 'en-US' };
export const ogLocale = { tr: 'tr_TR', en: 'en_US' };

// Which language does this URL belong to?
export function getLangFromUrl(url) {
  const seg = url.pathname.split('/')[1];
  return seg === 'en' ? 'en' : 'tr';
}

// Strip a leading /en so we always have the canonical (Turkish-rooted) path.
export function stripLang(pathname) {
  const p = pathname.replace(/^\/en(?=\/|$)/, '');
  return p === '' ? '/' : p;
}

// Same page, in the requested language.
export function localizedPath(pathname, lang) {
  const base = stripLang(pathname);
  if (lang === 'en') return base === '/' ? '/en/' : '/en' + base;
  return base;
}

// Date formatting per locale.
export function formatDate(date, lang) {
  return date.toLocaleDateString(localeTag[lang], {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const ui = {
  tr: {
    nav: { road: 'Yol Haritası', buildlog: 'Build-log', team: 'Takım', sponsor: 'Sponsorlar', contact: 'İletişim' },
    footer: '© 2026 Phalanx Racing · TEKNOFEST 2027 Efficiency Challenge',
    ldDesc: 'İstanbul Sağlık ve Teknoloji Üniversitesi öğrencilerinden oluşan, TEKNOFEST 2027 Uluslararası Elektrikli Araç Yarışları (Efficiency Challenge) hedefli öğrenci takımı.',
    baseDesc: 'TEKNOFEST 2027 Efficiency Challenge — elektrikli verimlilik aracı geliştiren öğrenci takımı',

    home: {
      title: 'Phalanx Racing — TEKNOFEST 2027 Efficiency Challenge',
      desc: "İstanbul Sağlık ve Teknoloji Üniversitesi'nin TEKNOFEST 2027 Efficiency Challenge takımı Phalanx Racing. Sıfırdan bir elektrikli verimlilik aracı geliştiriyoruz.",
      eyebrow: 'TEKNOFEST 2027 · Efficiency Challenge',
      sub: 'Uluslararası Elektrikli Araç Yarışları — Elektromobil',
      tag: 'Sıfırdan bir elektrikli verimlilik aracı inşa eden, disiplinler arası bir öğrenci takımı.',
      ctaRoad: 'Yol Haritası',
      ctaLog: 'Build-log',
      stats: [
        { n: '2027', k: 'Hedef Yarış' },
        { n: '5', k: 'Alt Takım' },
        { n: '20', k: 'Üye' },
        { n: '1.', k: 'Sezon' },
      ],
      roadEyebrow: 'Yolculuk',
      roadHead: 'Yol Haritası',
      phases: [
        { p: 'Temmuz 2026', h: 'Temel & Altyapı', d: 'Eğitim programları, portfolyo projeleri, atölye kararı ve takım kimliği.' },
        { p: 'Ağustos–Eylül 2026', h: 'Konsept Tasarım', d: 'Eğitimlerin sürmesi, yeni üye alımı, alt takım konseptleri ve kıyaslama analizi.' },
        { p: 'Ekim–Kasım 2026', h: 'Detay Tasarım', d: 'Kural incelemesi, kaba araç mimarisi, danışman kaydı. ', hl: 'Şasi üretimine başlangıç (~Kasım).' },
        { p: '◆ Aralık–Şubat 2027', h: 'Tasarım Dondurma', d: 'Tam CAD, analizler, tedarik listesi ve maliyet netleşir.', mile: true },
        { p: 'Mart–Mayıs 2027', h: 'İmalat + TTR', d: 'Başvuru, Takım Gelişim Videosu, Teknik Tasarım Raporu ve üretim.' },
        { p: 'Mayıs–Temmuz 2027', h: 'Test & Onay', d: 'Sürüş ve fren testleri, Teknik Onay Videosu.' },
        { p: '◆ Eylül–Ekim 2027', h: 'Final — Şanlıurfa', d: 'Yarış haftası ve TEKNOFEST finalleri.', mile: true },
      ],
      teamEyebrow: 'Ekip',
      teamHead: 'Takım',
      teamCta: 'Tüm takımı görüntüle →',
      sponsorEyebrow: 'Birlikte kazanalım',
      sponsorHead: 'Sponsorluk',
      tiers: [
        { t: 'Platin', feat: true, items: ['Araçta büyük logo + takım kıyafeti', 'Tüm sosyal medya & website ana sponsor', 'Etkinlik & teknik gezi önceliği', 'Özel teşekkür içeriği'] },
        { t: 'Altın', items: ['Araçta orta boy logo', 'Sosyal medya paylaşımları', 'Website sponsor sayfası'] },
        { t: 'Gümüş', items: ["Website'de logo", 'Sosyal medyada anma', 'Teşekkür sertifikası'] },
      ],
      supportBold: 'Nakit dışı destek de değerlidir:',
      supportRest: ' atölye/mekan erişimi, ekipman ve hammadde, üyelerimize staj imkânı. Sizin için en uygun katkıyı birlikte belirleyelim.',
      contactEyebrow: 'İletişim',
      contactHead: 'Bize ulaşın',
      contactText: 'Sorularınız, iş birliği önerileri veya bize ulaşmak için yazın. Kısa bir mesajınız bile bizim için değerli.',
      uni: 'İstanbul Sağlık ve Teknoloji Üniversitesi · İstanbul',
      contactBtn: 'Mail Gönder',
    },

    teamPage: {
      title: 'Tüm Takım — Phalanx Racing',
      desc: 'Phalanx Racing kadrosu: yönetim ve beş alt takım — aerodinamik-kompozit, elektronik, şasi-süspansiyon, powertrain.',
      back: '← Ana sayfa',
      eyebrow: 'Kadro',
      h1: 'Tüm Takım',
      lead: "Phalanx Racing'in disiplinler arası kadrosu — bir isme tıkla, sayfasına git.",
    },

    member: {
      back: '← Takım',
      // bio(name, teams, dept) -> string
      bio: (name, teams, dept) => `${name}, Phalanx Racing bünyesinde ${teams} ekibinde görev alıyor. ${dept}.`,
      teamsJoin: ' ve ',
    },

    buildlog: {
      title: 'Build-log — Phalanx Racing',
      desc: 'Phalanx Racing yarış aracı geliştirme günlüğü — tarih tarih ilerleme: eğitim, tasarım, üretim ve test adımları.',
      eyebrow: 'Sahadan',
      h1: 'Build-log',
      lead: 'Atölyeden yarış pistine yolculuğumuz — tarih tarih, adım adım.',
      back: '← Build-log',
      defaultTag: 'Günlük',
    },
  },

  en: {
    nav: { road: 'Roadmap', buildlog: 'Build-log', team: 'Team', sponsor: 'Sponsors', contact: 'Contact' },
    footer: '© 2026 Phalanx Racing · TEKNOFEST 2027 Efficiency Challenge',
    ldDesc: 'A student team from Istanbul Health and Technology University aiming for the TEKNOFEST 2027 International Electric Vehicle Race (Efficiency Challenge).',
    baseDesc: 'A student team developing an electric efficiency vehicle for the TEKNOFEST 2027 Efficiency Challenge',

    home: {
      title: 'Phalanx Racing — TEKNOFEST 2027 Efficiency Challenge',
      desc: 'Phalanx Racing, the TEKNOFEST 2027 Efficiency Challenge team from Istanbul Health and Technology University. We are building an electric efficiency vehicle from scratch.',
      eyebrow: 'TEKNOFEST 2027 · Efficiency Challenge',
      sub: 'International Electric Vehicle Race — Electromobile',
      tag: 'An interdisciplinary student team building an electric efficiency vehicle from scratch.',
      ctaRoad: 'Roadmap',
      ctaLog: 'Build-log',
      stats: [
        { n: '2027', k: 'Target Race' },
        { n: '5', k: 'Sub-teams' },
        { n: '20', k: 'Members' },
        { n: '1st', k: 'Season' },
      ],
      roadEyebrow: 'The Journey',
      roadHead: 'Roadmap',
      phases: [
        { p: 'July 2026', h: 'Foundation & Infrastructure', d: 'Training programs, portfolio projects, workshop decision and team identity.' },
        { p: 'August–September 2026', h: 'Concept Design', d: 'Continued training, new member recruitment, sub-team concepts and benchmarking analysis.' },
        { p: 'October–November 2026', h: 'Detailed Design', d: 'Rules review, rough vehicle architecture, advisor registration. ', hl: 'Chassis production begins (~November).' },
        { p: '◆ December–February 2027', h: 'Design Freeze', d: 'Full CAD, analyses, procurement list and cost finalized.', mile: true },
        { p: 'March–May 2027', h: 'Manufacturing + TDR', d: 'Application, Team Development Video, Technical Design Report and production.' },
        { p: 'May–July 2027', h: 'Testing & Approval', d: 'Driving and braking tests, Technical Approval Video.' },
        { p: '◆ September–October 2027', h: 'Finals — Şanlıurfa', d: 'Race week and the TEKNOFEST finals.', mile: true },
      ],
      teamEyebrow: 'The Crew',
      teamHead: 'Team',
      teamCta: 'View full team →',
      sponsorEyebrow: "Let's win together",
      sponsorHead: 'Sponsorship',
      tiers: [
        { t: 'Platinum', feat: true, items: ['Large logo on car + team apparel', 'Main sponsor across all social media & website', 'Priority for events & technical visits', 'Dedicated thank-you content'] },
        { t: 'Gold', items: ['Medium logo on car', 'Social media posts', 'Website sponsor page'] },
        { t: 'Silver', items: ['Logo on website', 'Mention on social media', 'Certificate of thanks'] },
      ],
      supportBold: 'In-kind support matters too:',
      supportRest: ' workshop/space access, equipment and raw materials, internship opportunities for our members. Let’s find the contribution that suits you best.',
      contactEyebrow: 'Contact',
      contactHead: 'Get in touch',
      contactText: 'Write to us with questions, collaboration ideas, or just to say hello. Even a short message means a lot to us.',
      uni: 'Istanbul Health and Technology University · Istanbul',
      contactBtn: 'Send Email',
    },

    teamPage: {
      title: 'Full Team — Phalanx Racing',
      desc: 'The Phalanx Racing roster: management and five sub-teams — aero-composite, electronics, chassis-suspension, powertrain.',
      back: '← Home',
      eyebrow: 'Roster',
      h1: 'Full Team',
      lead: "Phalanx Racing's interdisciplinary roster — click a name to open their page.",
    },

    member: {
      back: '← Team',
      bio: (name, teams, dept) => `${name} is part of the ${teams} ${teams.includes(' and ') ? 'teams' : 'team'} at Phalanx Racing. ${dept}.`,
      teamsJoin: ' and ',
    },

    buildlog: {
      title: 'Build-log — Phalanx Racing',
      desc: 'The Phalanx Racing vehicle development log — progress date by date: training, design, manufacturing and testing.',
      eyebrow: 'From the field',
      h1: 'Build-log',
      lead: 'Our journey from the workshop to the racetrack — date by date, step by step.',
      back: '← Build-log',
      defaultTag: 'Log',
    },
  },
};
