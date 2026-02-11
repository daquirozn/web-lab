// Data de tus publicaciones
const publications = [
  {
    title:
      'Biochemical Conversion of Herbaceous Biomass to Renewable Diesel: Net Greenhouse Gas and Air Pollutant Trade-offs',
    authors: 'D Quiroz, V Ravi, Y Zhang, A Bhatt, G Heath',
    venue: 'ACS ES&T Air 2 (2), 175-186',
    year: 2025,
  },
  {
    title:
      'Antiscalant Effects on pH-Mediated Electrochemical Precipitation of Scaling Ions in Brackish Reverse Osmosis Concentrates',
    authors: 'S Bashir, A Fariha, L Miller, D Quiroz, YS Jun, Y Yang, T Kim',
    venue: 'ACS ES&T Engineering 5 (12), 3249-3261',
    year: 2025,
  },
  {
    title:
      'Techno-economic analysis and life cycle assessment of algal turf scrubbers treating wastewater effluent for renewable diesel production',
    authors:
      'A Ryland, P Chen, M Zivojnovich, S Kim, R Davis, T Eckles, JC Quinn, ...',
    venue: 'Algal Research, 104459',
    year: 2025,
  },
  {
    title:
      'Antiscalants in Reverse Osmosis Concentrates: Impacts, Removal Strategies, and Pathways to Zero Liquid Discharge',
    authors:
      'A Fariha, S Bashir, D Quiroz, L Miller, H Kim, S Wang, T Kim, SS Lee, ...',
    venue: 'ACS ES&T Engineering',
    year: 2025,
  },
  {
    title:
      'Prospective Life Cycle Assessment of Sustainable Aviation Fuel Systems',
    authors: 'D Quiroz, JM Greene, BJ Limb, JC Quinn',
    venue: 'Environmental Science & Technology 59 (36), 19269-19282',
    year: 2025,
  },
  {
    title:
      'Techno-economic analysis of microalgae cultivation strategies: batch and semi-continuous approaches',
    authors: 'D Quiroz, JA McGowen, JC Quinn',
    venue: 'Algal Research, 104109',
    year: 2025,
  },
  {
    title:
      'Geographically-resolved techno-economic and life cycle assessment comparing microalgae-based renewable diesel and sustainable aviation fuel in the United States',
    authors: 'JM Greene, D Quiroz, BJ Limb, JC Quinn',
    venue: 'Environmental Science & Technology 59 (7), 3472-3483',
    year: 2025,
  },
  {
    title:
      'Implications of pond reliability on the techno-economic and life cycle environmental impacts of algal biofuels',
    authors: 'D Quiroz, J McGowen, JC Quinn',
    venue: 'Journal of Cleaner Production 469, 143178',
    year: 2024,
  },
  {
    title:
      'Global life cycle and techno-economic assessment of algal-based biofuels',
    authors: 'D Quiroz, JM Greene, BJ Limb, JC Quinn',
    venue: 'Environmental Science & Technology 57 (31), 11541-11551',
    year: 2023,
  },
  {
    title:
      'Regionalized life-cycle water impacts of microalgal-based biofuels in the United States',
    authors: 'D Quiroz, JM Greene, JC Quinn',
    venue: 'Environmental Science & Technology 56 (22), 16400-16409',
    year: 2022,
  },
  {
    title:
      'Geographical assessment of open pond algal productivity and evaporation losses across the United States',
    authors: 'D Quiroz, JM Greene, J McGowen, JC Quinn',
    venue: 'Algal research 60, 102483',
    year: 2021,
  },
  {
    title:
      'Algae-based beneficial re-use of carbon emissions using a novel photobioreactor: A techno-economic and life cycle analysis',
    authors:
      'MH Wilson, A Shea, J Groppo, C Crofcheck, D Quiroz, JC Quinn, ...',
    venue: 'BioEnergy Research 14 (1), 292-302',
    year: 2021,
  },
  {
    title:
      'A validated thermal and biological model for predicting algal productivity in large scale outdoor cultivation systems',
    authors: 'JM Greene, D Quiroz, S Compton, PJ Lammers, JC Quinn',
    venue: 'Algal Research 54 (102224)',
    year: 2021,
  },
  {
    title:
      'Driving toward sustainable algal fuels: A harmonization of techno-economic and life cycle assessments',
    authors:
      'JR Cruce, A Beattie, P Chen, D Quiroz, M Somers, S Compton, K DeRose, ...',
    venue: 'Algal Research 54, 102169',
    year: 2021,
  },
];

// Función para renderizar
function renderPublications() {
  const container = document.getElementById('publications-list');

  // Opcional: Ordenar por año descendente (del más nuevo al más viejo)
  // Si prefieres el orden original, borra estas tres líneas siguientes:
  publications.sort((a, b) => b.year - a.year);

  publications.forEach((pub) => {
    // Crear elementos HTML dinámicamente
    const pubDiv = document.createElement('div');
    pubDiv.className = 'pub-item';

    const title = document.createElement('div');
    title.className = 'pub-title';
    title.textContent = pub.title;

    const authors = document.createElement('div');
    authors.className = 'pub-authors';
    authors.textContent = pub.authors;

    const venue = document.createElement('div');
    venue.className = 'pub-venue';
    venue.innerHTML = `${pub.venue} <strong>(${pub.year})</strong>`;

    // Añadir al contenedor
    pubDiv.appendChild(title);
    pubDiv.appendChild(authors);
    pubDiv.appendChild(venue);
    container.appendChild(pubDiv);
  });
}

// Ejecutar cuando cargue la página
document.addEventListener('DOMContentLoaded', renderPublications);
