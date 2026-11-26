export const LINKS = {
  cv: "https://drive.google.com/file/d/1xvpgeGOotegKobKHBiclrJzAO6aY4xPs/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/alifyadhiva/",
  github: "https://github.com/alifyadhiva",
  email: "alifyadhivaa@gmail.com",
  emailCompose:
    "https://mail.google.com/mail/u/0/?view=cm&tf=1&fs=1&to=alifyadhivaa@gmail.com",
  whatsapp: "http://wa.me/6287734828411",
  instagram: "https://www.instagram.com/alifyaaw/",
  phone: "(+62) 877-3482-8411",
  courseFolder:
    "https://drive.google.com/drive/folders/12JkXeQYWUQOL0Xo0EhUhJAc7lYrqXyyE?usp=sharing",
  appreciationFolder:
    "https://drive.google.com/drive/folders/12R3WEYaD6_Q-_16c7yu_9P54Bw7LdXm0?usp=sharing",
  ipaPaper:
    "https://virtualipa.s3.ap-southeast-1.amazonaws.com/abstract/2024/Abstract-the-utilization-of-seismic-geomorphology-in-identifying-the-architecture-and-evolution-of-fluvio-deltaic-environmental-systems-in-the-f3-north-sea-field-netherlands-20240514103653.pdf",
  coalPaper:
    "https://scholar.ui.ac.id/en/publications/a-novel-approach-in-estimating-coal-resources-using-machine-learn/",
};

export const PERSON = {
  name: "Alifya Awalia Dhiva",
  role: "Data Engineer | GIS Analyst | Geologist",
  roles: "Data Engineer, GIS Analyst & Geologist",
  tagline:
    "I build data-driven solutions through dashboards, database systems, WebGIS and spatial analysis to support operational, geological, and mining decision-making",
};

export const STATS = [
  { value: 5, suffix: "+", label: "Featured Projects", icon: "folder" },
  { value: 0, text: "Database & ETL", label: "Systems", icon: "db" },
  { value: 0, text: "GIS & WebGIS", label: "Applications", icon: "layers" },
  { value: 2, suffix: "+ Years", label: "Professional Experience", icon: "trend" },
];

export const ABOUT = {
  headline: "Geology Background. Data-Driven Mindset.",
  intro:
    "With a background in Geology and experience in data management, database development, dashboard creation, and GIS analysis, I enjoy turning complex data into meaningful insights and visual solutions that help teams make better decisions.",
  summary:
    "A proactive and analytical Data Engineer with experience in database management, dashboard development, ETL processes, and data analytics. Skilled in SQL, cloud-based database infrastructure, and data visualization to support operational monitoring and business decision-making. Experienced in developing centralized data systems, automating reporting workflows, and transforming complex datasets into actionable insights. Strong ability to collaborate across teams, optimize data processes, and deliver scalable data-driven solutions.",
  education: {
    degree: "Bachelor's degree in Geology",
    school: "Universitas Indonesia",
    gpa: "3.63",
    finalProject:
      "Geological Modeling and Comparison of Estimation Methods for Coal Resources Using Geostatistics and Deep Learning",
  },
  strengths: [
    "Data Analysis & Visualisation",
    "Database Design & Management",
    "GIS and Spatial Analysis",
    "Problem Solving & Automation",
  ],
  skills: [
    {
      key: "DATA & ANALYTICS",
      items: ["SQL", "Python", "Excel", "Data Cleaning", "ETL"],
    },
    {
      key: "DATABASE",
      items: ["PostgreSQL", "MySQL", "Supabase", "Database Design"],
    },
    {
      key: "GIS & SPATIAL",
      items: ["QGIS", "ArcGIS", "WebGIS", "PostGIS"],
    },
    {
      key: "TOOLS & TECHNOLOGIES",
      items: ["Looker Studio", "Power BI", "Tableau"],
    },
  ],
};

export type Job = {
  id: string;
  period: string;
  title: string;
  org: string;
  tab: string;
  blurb: string;
  responsibilities: string[];
  achievements: string[];
  stack: string[];
};

export const JOBS: Job[] = [
  {
    id: "db",
    tab: "Database Engineering",
    period: "2026 - Present",
    title: "Database Engineer",
    org: "Huayou Indonesia (PT Central Abadi Nusantara)",
    blurb:
      "Developed and maintained data systems and engineering solutions to support operational monitoring, reporting, and data-driven decision making across the organization.",
    responsibilities: [
      "Built and maintained cloud-based database infrastructure to ensure system reliability, performance, and data availability.",
      "Designed and managed ETL processes and data pipelines for efficient data integration and reporting.",
      'Developed a centralized "One Portal Data" platform integrating database, document management, external data requests, and role-based access control.',
      "Built interactive dashboards and automated reporting systems for operational monitoring and business insights.",
      "Optimized SQL databases and workflows, including data validation and performance improvement.",
    ],
    achievements: [
      "Reduced manual reporting time by 60% through automation and dashboard implementation.",
      "Improved data accuracy and accessibility through standardized ETL and database design.",
      "Established robust data infrastructure on cloud platforms to support enterprise operations.",
    ],
    stack: ["Supabase", "PostgreSQL", "Python", "SQL", "Looker Studio", "Excel"],
  },
  {
    id: "geo",
    tab: "Geological Database",
    period: "2024 - 2026",
    title: "Database Geologist & Mining Development",
    org: "Hastari Corporation (PT Aneka Sinergi Investama)",
    blurb:
      "Managed geological data and mining databases across multiple assets to support exploration, resource evaluation, and strategic decision making.",
    responsibilities: [
      "Integrated geological data across multiple mining assets and designed efficient geological database systems.",
      "Developed and implemented SOPs for geological and mining data management.",
      "Managed and optimized large-scale datasets using ArcGIS, QGIS, Global Mapper, and SQL.",
      "Provided geological insights for portfolio decisions, acquisitions, and project development.",
      "Conducted early-stage evaluations and provided technical support to field teams.",
    ],
    achievements: [
      "Built centralized geological databases improving data consistency and accessibility.",
      "Implemented SOPs and workflows that increased efficiency in data processing.",
      "Supported strategic decisions through accurate geological data and spatial analysis.",
    ],
    stack: ["ArcGIS", "QGIS", "Global Mapper", "SQL", "Microsoft Access"],
  },
  {
    id: "lab",
    tab: "Laboratory Data",
    period: "2023 - 2024",
    title: "Laboratory Data Processor",
    org: "ILRC University of Indonesia",
    blurb:
      "Managed laboratory data, documentation, and operational activities following Good Laboratory Practice (GLP) standards.",
    responsibilities: [
      "Maintained laboratory databases and operational documents based on Good Laboratory Practices (GLP).",
      "Organized laboratory schedules, managed inventories, and coordinated operational activities.",
      "Ensured data integrity, documentation accuracy, and compliance with laboratory standards.",
      "Designed and implemented an end-to-end automated workflow for laboratory services, including online requests, automatic queue assignment, real-time staff notifications, and invoice generation.",
    ],
    achievements: [
      "Contributed to the preparation and successful achievement of ISO 17025:2017 certification through data automation and easier accessibility.",
      "Improved laboratory data management and operational efficiency.",
      "Designed an integrated laboratory service workflow to streamline requests, scheduling, and billing.",
    ],
    stack: ["Excel", "Automation", "Workflow Design", "GLP"],
  },
];

export const BRING = [
  { t: "Data Engineering Expertise", d: "Designing data systems, ETL pipelines, dashboards, and automation" },
  { t: "Geological & GIS Knowledge", d: "Managing geological data, spatial analysis, and resource evaluation" },
  { t: "Data-driven Decision Support", d: "Delivering integrated data platforms for better decision making and operational excellence" },
  { t: "Collaboration & Communication", d: "Building a strong foundation in data management and quality assurance" },
];

export const CERTS = {
  course: [
    "Certified Data Scientist - BNSP",
    "Deep Learning for Geoscience",
    "SQL",
    "Data Analyst",
    "Operasional Keselamatan Pertambangan",
    "Resource Estimation",
    "Mineral Exploration",
  ],
  appreciation: [
    "Peer Reviewing",
    "Representative Finalist",
    "Representative",
    "Speaker",
  ],
  honors: [
    {
      event: "IPA 48th Convention and Exhibition",
      what: "Paper Co-Author",
      detail:
        "The Utilization of Seismic Geomorphology in Identifying the Architecture and Evolution of Fluvio-Deltaic Environmental Systems in the F3 North Sea Field, Netherlands",
      img: "ipa-poster",
    },
    {
      event: "MGEI 15th Annual Convention 2023",
      what: "Student Research Poster Contest",
      detail:
        "Unlocking the Hidden Gold Potential: A Machine Learning Approach for Brownfield Exploration in Kabupaten Luwu, South Sulawesi",
      img: "mgei1",
    },
    {
      event: "BP International",
      what: "Peer Reviewer",
      detail:
        "Reviewer for manuscript: Geostatistical modelling of geotechnical parameters in TRIAS-age formations",
      img: "bp-cert",
    },
    {
      event: "Joint Convention Pangkalpinang 2023",
      what: "Paper Presenter",
      detail: "A Novel Approach in Estimating Coal Resources Using Machine Learning Algorithm",
      img: "poster2",
    },
    {
      event: "MGEI 14th Annual Convention 2022",
      what: "Student Research Poster Contest",
      detail:
        "Re-evaluating the Ex-Colonial Gold Mining: Study of Gold Mineralization Potential in Lebong Tandai, North Bengkulu, Indonesia",
      img: "mgei2",
    },
  ],
  papers: [
    {
      title:
        "The Utilization of Seismic Geomorphology in Identifying the Architecture and Evolution of Fluvio-Deltaic Environmental Systems in the F3 North Sea Field, Netherlands",
      venue: "Proceedings, Indonesian Petroleum Association 48th Annual Convention & Exhibition",
      text: "Seismic geomorphology helps analyze deltaic depositional environments and subsurface structures. This study used 3D seismic data, stratigraphy, spectral decomposition, and attribute analysis in the F3 field (North Sea, Netherlands) to identify channel deposits, deltaic patterns, and faults, supporting hydrocarbon reservoir evaluation and shallow gas potential mapping.",
      href: LINKS.ipaPaper,
      img: "paper1",
    },
    {
      title: "A Novel Approach in Estimating Coal Resources Using Machine Learning Algorithm",
      venue: "Proceeding of Joint Convention Pangkalpinang 2023",
      text: "Accurate coal seam thickness prediction is crucial for coal exploration. This study compares Artificial Neural Networks (ANN) with geostatistical methods like Ordinary Kriging and IDW in East Kalimantan. ANN showed better performance, with lower RMSE and higher R², proving its accuracy in modeling coal thickness compared to conventional methods.",
      href: LINKS.coalPaper,
      img: "paper2",
    },
  ],
};
