export const teamDesc = {
  'Yönetim': 'Takım koordinasyonu, planlama, sponsor ve dış ilişkiler.',
  'Aero-Kompozit': 'Aerodinamik verimlilik ve kompozit gövde tasarımı/üretimi.',
  'Elektronik': 'Araç kontrol sistemi, haberleşme, yazılım, telemetri ve emniyet devreleri.',
  'Şasi-Süspansiyon': 'Şasi, süspansiyon, fren, direksiyon ve mekanik entegrasyon.',
  'Powertrain': 'Motor, motor sürücüsü, batarya, güç aktarımı ve termal yönetim.',
  'Medya': 'Sosyal medya, tanıtım, görsel kimlik ve sponsor görünürlüğü.',
};

export const groups = [
  { name: 'Yönetim', members: [
    { n: 'Ege Şeker', r: 'Baş Mühendis', d: 'Makine Müh. 4. Sınıf', lead: true },
    { n: 'Ebru Tokatlı', r: 'Takım Direktörü', d: 'Makine Müh. 2. Sınıf', lead: true },
  ]},
  { name: 'Aero-Kompozit', members: [
    { n: 'Ayberk Şahin', r: 'Kaptan · Lider', d: 'Makine Müh. 2. Sınıf', lead: true },
    { n: 'Berra Yıldırım', r: 'Üye', d: 'Makine Müh. 3. Sınıf' },
    { n: 'Arda Ayden', r: 'Üye', d: 'Kimya Müh. 1. Sınıf' },
  ]},
  { name: 'Elektronik', members: [
    { n: 'Burak Furkan Koç', r: 'Lider', d: 'Makine Müh. 2. Sınıf', lead: true },
    { n: 'Muhammet Mert Yıldız', r: 'Üye', d: 'Yazılım Müh. 2. Sınıf' },
    { n: 'Hasan Hacıahmetoğlu', r: 'Üye', d: 'Bilgisayar Müh. 2. Sınıf' },
    { n: 'Mehmet Fuat Mat', r: 'Üye', d: 'Makine Müh. 2. Sınıf' },
    { n: 'Ebru Tokatlı', r: 'EMC / İzolasyon', d: 'Makine Müh. 2. Sınıf' },
  ]},
  { name: 'Şasi-Süspansiyon', members: [
    { n: 'İsmail Öztürk', r: 'Lider', d: 'End. Tasarım Müh. 3 · Makine Müh. ÇAP', lead: true },
    { n: 'Rana Şenkardeşler', r: 'Üye', d: 'Makine Müh. 2. Sınıf' },
    { n: 'Miraç Taha Aynacı', r: 'Üye', d: 'Makine Müh. 2. Sınıf' },
    { n: 'Kaan Koç', r: 'Üye', d: 'Mekatronik Müh. 3. Sınıf' },
    { n: 'Yusuf Kalender', r: 'Üye', d: 'Kimya Müh. 2. Sınıf' },
  ]},
  { name: 'Powertrain', members: [
    { n: 'Ebrar Berrak Elmalı', r: 'Lider', d: 'Mekatronik Müh. 1. Sınıf', lead: true },
    { n: 'Ferhat Karakuş', r: 'Üye', d: 'Mekatronik Müh. 2. Sınıf' },
    { n: 'Işıl Yaman', r: 'Üye', d: 'Kimya Müh. 2. Sınıf' },
    { n: 'Murat Adsan', r: 'Üye', d: 'Mekatronik Müh. 3. Sınıf' },
    { n: 'Mustafa Deniz Abaylamak', r: 'Üye', d: 'Makine Müh. 2. Sınıf' },
  ]},
  { name: 'Medya', members: [
    { n: 'Muhammed Yiğit Akgün', r: 'Medya & Tanıtım Lideri', d: 'End. Tasarım Müh. 2. Sınıf', lead: true },
  ]},
];

export const slug = (s) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .toLowerCase()
  .replaceAll('ı', 'i').replaceAll('ç', 'c').replaceAll('ğ', 'g')
  .replaceAll('ö', 'o').replaceAll('ş', 's').replaceAll('ü', 'u')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const initials = (s) => s.split(' ').filter(Boolean).slice(0, 2)
  .map((w) => w[0]).join('').toLocaleUpperCase('tr');

export function people() {
  const map = new Map();
  for (const g of groups) {
    for (const m of g.members) {
      const s = slug(m.n);
      if (!map.has(s)) map.set(s, { name: m.n, dept: m.d, slug: s, roles: [] });
      map.get(s).roles.push({ team: g.name, role: m.r, lead: !!m.lead });
    }
  }
  return [...map.values()];
}