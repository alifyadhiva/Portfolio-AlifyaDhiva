export type Cat = "data" | "ml" | "gis";

export type Metric = { label: string; value: number; max: number; display: string };

export type Project = {
  slug: string;
  cat: Cat;
  title: string;
  kicker: string;
  lead: string[];
  tech: string[];
  meta: { industry: string; type: string; status: string; role: string };
  overview: string;
  modules: { t: string; d: string }[];
  archTitle: string;
  archDesc: string;
  flow: string[];
  stages?: { title: string; items: string[] }[];
  images: { src: string; cap: string }[];
  phones?: { src: string; cap: string }[];
  metrics?: { title: string; intro: string; list: Metric[]; notes: { h: string; p: string }[] };
  closing?: string;
  links: { label: string; href: string; kind: "demo" | "repo" | "soon" }[];
  related?: { slug: string; label: string }[];
};

export const PROJECTS: Project[] = [
  {
    slug: "mining-operations-monitoring",
    cat: "data",
    title: "Mining Operations Monitoring Platform",
    kicker: "Dashboard Production Monitoring",
    lead: [
      "Integrated systems to monitor mining operations in real time with data-driven insights for better decision making.",
      "This platform consolidates operational data from production, shipment, stockpile, hauling, equipment, fuel, manpower, weather, and HSE into a single dashboard and reporting system across multiple sites and contractors.",
    ],
    tech: ["Excel", "Power Query", "Supabase", "SQL", "Looker Studio"],
    meta: {
      industry: "Mining",
      type: "Conditional Monitoring System",
      status: "NDA Project - Public Demo Available",
      role: "Database Engineer",
    },
    overview:
      "A comprehensive monitoring platform that provides real-time visibility of mining operations and supports performance management across multiple sites.",
    modules: [
      { t: "Production Monitoring", d: "Track production performance by site, contractor, material, and pit" },
      { t: "Shipment Monitoring", d: "Monitor shipping realization, barge information, and achievement" },
      { t: "Stockpile & Hauling Management", d: "Monitor stock levels, ore quality, and hauling productivity" },
      { t: "Fuel & Equipment Monitoring", d: "Analyze fuel consumption, equipment status, and performance KPIs" },
      { t: "Weather & EWH Analysis", d: "Measure effective working hours and analyze loss time factors" },
      { t: "Manpower Analytics", d: "Monitor workforce distribution, role composition, and manpower flow" },
      { t: "HSE Monitoring", d: "Identify hazards and monitor HSE incidents across sites" },
    ],
    archTitle: "Excel → Power Query → Supabase → Looker",
    archDesc:
      "An end-to-end data pipeline that transforms raw operational data into actionable insights through a secure, scalable, and reliable modern data stack. Data flows from source files to insights, so dashboards and decisions stay clean, validated, and accessible.",
    flow: ["Excel Files", "Power Query", "Supabase", "Looker Studio"],
    stages: [
      {
        title: "Source",
        items: [
          "Excel files: daily operational reports",
          "Production, hauling, stockpile, fuel, equipment, manpower, weather, etc.",
          "Multiple sites and contractors",
        ],
      },
      {
        title: "Transform",
        items: [
          "Power Query: data cleaning & transformations",
          "Validation & standardization",
          "Remove duplicates and null handling",
          "Data type conversion, business rules & checks",
        ],
      },
      {
        title: "Store",
        items: [
          "Supabase: centralized database",
          "Relational data model",
          "Row Level Security (RLS)",
          "Real-time API, backup & high availability",
        ],
      },
      {
        title: "Analyze",
        items: [
          "Looker Studio: interactive dashboards",
          "KPIs & performance monitoring",
          "Drill-down & filtering",
          "Automated reports, share & collaborate",
        ],
      },
    ],
    images: [
      { src: "dash1", cap: "Production report" },
      { src: "dash2", cap: "Summary report" },
      { src: "dash0", cap: "Executive overview" },
    ],
    closing:
      "Built for two audiences: management gets an executive overview for decision making, and the field team gets daily monitoring and performance tracking for operational execution and reporting.",
    links: [{ label: "View Live Dummy Dashboard", href: "https://datastudio.google.com/s/oizGXCH3TMI", kind: "demo" }],
    related: [
      { slug: "etl-production", label: "Mining Production ETL Manager" },
      { slug: "etl-operation", label: "Mining Operation ETL Manager" },
    ],
  },
  {
    slug: "etl-production",
    cat: "data",
    title: "Mining Production ETL Manager",
    kicker: "ETL Pipeline for Mining Data",
    lead: [
      "Automated data pipeline from site Excel input to dashboard-ready data in Supabase.",
      "This project automates the daily production data workflow for mining operations. The application refreshes Excel Power Query, validates changes, performs incremental loads to Supabase, and prepares data for Looker Studio dashboards.",
    ],
    tech: ["Python", "PySide6", "Pandas", "Excel COM", "Supabase", "SQL"],
    meta: {
      industry: "Mining",
      type: "ETL Automation Pipeline (Windows Desktop Application)",
      status: "NDA Internal Project",
      role: "Data Engineer & Developer",
    },
    overview:
      "A desktop application that automates the end-to-end data workflow from Excel-based operational inputs to production-ready datasets in Supabase and dashboards in Looker Studio.",
    modules: [
      { t: "One-click Automation", d: "Run the full pipeline with a single click" },
      { t: "Automated Power Query Refresh", d: "Refresh Excel and consolidate data automatically" },
      { t: "Data Validation", d: "Detect new, updated, deleted, and duplicate data" },
      { t: "Incremental Data Loading", d: "Update only changed data, keep history accurate" },
      { t: "ETL Logging & Monitoring", d: "Track every process with detailed logs" },
      { t: "Data Quality Assurance", d: "Ensure clean, accurate, and consistent data" },
      { t: "Secure & Reliable", d: "Built with Supabase and best practices" },
    ],
    archTitle: "Excel → Staging → Compare → Detect Changes → Update / Insert → Log → Dashboard",
    archDesc:
      "The architecture streamlines the entire data lifecycle: collecting operational data from Excel, transforming and validating it through Power Query, loading the processed datasets into Supabase, and publishing trusted data to Looker Studio for interactive dashboards and reporting.",
    flow: ["Input Data", "Power Query", "Staging", "Validate", "Update", "Log", "Looker Studio"],
    stages: [
      { title: "Source", items: ["Input data: users fill their own site Excel file"] },
      { title: "Extract", items: ["Power Query: the app opens Excel in the background and refreshes all queries, compiling data from every site's workbook"] },
      { title: "Staging", items: ["Supabase: the app exports CSV and loads it into a staging table"] },
      { title: "Validate", items: ["Pandas: validates data and compares it with existing rows to detect changes and duplicates"] },
      { title: "Update", items: ["Supabase: insert / update data in the main tables"] },
      { title: "Log & Views", items: ["Log: load time, row count, status, and period", "Data is ready in Supabase Views and Looker or any BI dashboard"] },
    ],
    images: [{ src: "etl-prod", cap: "ETL Manager" }],
    links: [{ label: "Public dummy app available soon", href: "", kind: "soon" }],
    related: [
      { slug: "etl-operation", label: "Mining Operation ETL Manager" },
      { slug: "mining-operations-monitoring", label: "Monitoring Platform" },
    ],
  },
  {
    slug: "etl-operation",
    cat: "data",
    title: "Mining Operation ETL Manager",
    kicker: "ETL Pipeline for Mining Data",
    lead: [
      "From Excel-based to Python-based pipeline for mining operations data.",
      "Automated the end-to-end ETL pipeline for mining operation data, replacing time-consuming Excel-based processing with Python. The new workflow significantly improved performance, data reliability, and scalability.",
    ],
    tech: ["Python", "Pandas", "Supabase", "SQL"],
    meta: {
      industry: "Mining",
      type: "ETL Automation Pipeline (Windows Desktop Application)",
      status: "NDA Internal Project",
      role: "Data Engineer & Developer",
    },
    overview:
      "The previous workflow relied on Excel. This project automates the entire ETL process using Python, from extracting data from source workbooks to loading it into Supabase, orchestrated through a structured workflow. Runtime was reduced by 92%.",
    modules: [
      { t: "One-click Automation", d: "Automated end-to-end pipeline using Python" },
      { t: "Customizable Type of Load", d: "Incremental load & validation for data accuracy" },
      { t: "Secure & Reliable", d: "Built-in data quality checks & coverage validation" },
      { t: "Runtime Monitoring", d: "Integrated logging & runtime monitoring" },
      { t: "Flexibility", d: "Configuration-driven workflow for flexibility" },
      { t: "Scalable", d: "Scalable and easy to maintain" },
    ],
    archTitle: "Source data → Extract → Transform → Load → Orchestrate → Output",
    archDesc:
      "The architecture replaces Excel-dependent processing with a Python-based pipeline, enabling automated transformation, incremental loading, data validation, and end-to-end monitoring while significantly reducing processing time across multiple sites.",
    flow: ["Input Data", "Pandas Extract", "Staging", "Validate", "Load", "Output Views"],
    stages: [
      { title: "Source", items: ["Input data: users fill their own Excel file"] },
      { title: "Extract", items: ["Pandas: read & extract data from workbooks"] },
      { title: "Staging", items: ["Supabase: clean, validate, standardize, and apply business logic"] },
      { title: "Validate", items: ["Supabase: load data and compare with existing rows"] },
      { title: "Update", items: ["Supabase: insert / update the main tables"] },
      { title: "Output", items: ["Clean & reliable data ready for analysis", "Supabase Views and Looker or any BI dashboard"] },
    ],
    images: [{ src: "etl-op", cap: "ETL Manager" }],
    metrics: {
      title: "Runtime Performance",
      intro: "Moving the workflow from Excel to Python removed repeated processing and made the daily run dramatically faster.",
      list: [{ label: "Runtime reduction", value: 92, max: 100, display: "92%" }],
      notes: [],
    },
    links: [{ label: "Public dummy app available soon", href: "", kind: "soon" }],
    related: [
      { slug: "etl-production", label: "Mining Production ETL Manager" },
      { slug: "one-portal-data", label: "One Portal Data" },
    ],
  },
  {
    slug: "one-portal-data",
    cat: "data",
    title: "One Portal Data",
    kicker: "Enterprise Data Portal",
    lead: [
      "A centralized web platform designed to unify operational data, business intelligence, GIS applications, digital documents, and mining utilities into a single secure ecosystem.",
      "The platform provides role-based authentication, allowing users from different departments and mining sites to access relevant data, submit operational reports, monitor real-time dashboards, explore interactive maps, and use mining calculation tools through one integrated interface.",
      "By replacing fragmented spreadsheets and disconnected systems, One Portal Data improves collaboration, reporting efficiency, and enterprise-wide data accessibility.",
    ],
    tech: ["Supabase", "PostgreSQL", "JavaScript", "HTML", "Leaflet", "Looker", "OneDrive", "Excel"],
    meta: {
      industry: "Mining",
      type: "Enterprise Data Platform",
      status: "Internal Enterprise",
      role: "Data Engineer & Developer",
    },
    overview:
      "A unified web platform that integrates operational data, production reporting, dashboards, GIS, documents, and mining tools into a single ecosystem. It keeps data consistent and accessible, with real-time insights across mining sites.",
    modules: [
      { t: "Production Reporting", d: "Daily production report submission with centralized storage" },
      { t: "Real-time Dashboard", d: "Live dashboard for production, equipment, fuel, weather, and more" },
      { t: "Interactive Maps", d: "WebGIS visualization of mining assets, infrastructure, and governance status" },
      { t: "Documents Center", d: "Centralized repository for SOP, reports, forms, and technical documents" },
      { t: "Mining Tools", d: "Built-in tools such as HPM Nickel Calculator and other mining utilities" },
      { t: "User & Admin System", d: "Role management, user access, permissions, and activity monitoring" },
    ],
    archTitle: "Login → Module → Role-based Access → Supabase",
    archDesc:
      "One secure login opens only the modules each person is allowed to see. Reports are submitted into Supabase, dashboards stay live through Looker, and documents are served from OneDrive.",
    flow: ["User Login", "Choose Module", "Role Check", "Supabase / PostgreSQL", "Dashboards & Maps"],
    images: [
      { src: "portal1", cap: "One Portal Data" },
      { src: "portal2", cap: "Production Hub" },
      { src: "portal3", cap: "Exploration Hub" },
      { src: "portal4", cap: "Mining Tools" },
    ],
    links: [{ label: "View Dummy Websites", href: "https://alifyadhiva.github.io/InternalArchiveSystem_demo/", kind: "demo" }],
    related: [
      { slug: "internal-archive-system", label: "Internal Archive System" },
      { slug: "mining-operations-monitoring", label: "Monitoring Platform" },
    ],
  },
  {
    slug: "internal-archive-system",
    cat: "data",
    title: "Internal Archive System",
    kicker: "Enterprise Data Portal",
    lead: [
      "A centralized internal web platform designed to streamline document management, project requests, activity reporting, and geospatial resources for exploration and mining operations.",
      "The platform provides employees with a single point of access to project documents, standardized templates, reporting forms, WebGIS applications, and internal communication channels while reducing manual administrative processes.",
    ],
    tech: ["JavaScript", "HTML", "Leaflet", "OneDrive", "Power Automate", "PostgreSQL"],
    meta: {
      industry: "Mining",
      type: "Internal Web Platform",
      status: "Internal Enterprise",
      role: "System Designer & Developer",
    },
    overview:
      "A central hub for managing project documents, request workflows, activity reporting, and geospatial tools. It improves accessibility, standardizes processes, and enhances collaboration across departments.",
    modules: [
      { t: "Document & Archive Management", d: "Centralized repository for all project documents and corporate templates" },
      { t: "Activity Reporting", d: "Log & report internal activities with digital forms and reference number management" },
      { t: "WebGIS & Geospatial Tools", d: "Interactive maps, spatial layers, and geospatial information for exploration projects" },
      { t: "Data Request Management", d: "Submit requests for documents, exploration data, or analysis results with tracking and status monitoring" },
    ],
    archTitle: "Choose Module → Submit / Input → Validation → PostgreSQL",
    archDesc:
      "Documents, activity records, reports, and interactive maps all sit on a PostgreSQL database for processing and storage. Document requests go through Power Automate for approval.",
    flow: ["Choose Module", "Submit / Input", "Validation", "PostgreSQL Database", "Power Automate Approval"],
    images: [
      { src: "arch1", cap: "Portal home" },
      { src: "arch2", cap: "Request workflow" },
      { src: "arch3", cap: "Activities & reporting" },
      { src: "arch4", cap: "WebGIS project area" },
    ],
    links: [{ label: "View Dummy Website", href: "https://alifyadhiva.github.io/InternalArchiveSystem_demo/", kind: "demo" }],
    related: [{ slug: "one-portal-data", label: "One Portal Data" }],
  },
  {
    slug: "mineral-classification",
    cat: "ml",
    title: "Mineral Classification Program",
    kicker: "Image Recognition Program",
    lead: [
      "A machine learning-based application designed to identify and classify mineral types based on their physical properties. The app aims to assist geologists, students, and exploration professionals in quickly and accurately recognizing various minerals.",
      "This project is a work in progress and will evolve with dataset expansion and user feedback. The public demo version can accurately classify 7 common minerals: biotite, malachite, muscovite, pyrite, quartz, bornite, and chrysocolla.",
    ],
    tech: ["Python", "YOLOv11", "PyTorch", "Ultralytics", "Plotly", "Streamlit", "HuggingFace"],
    meta: {
      industry: "Exploration Geology",
      type: "Computer Vision App",
      status: "Public Demo Available",
      role: "AI Developer",
    },
    overview:
      "Instead of relying solely on manual visual inspection, users upload an image and receive real-time predictions from a trained deep learning model.",
    modules: [
      { t: "AI Mineral Classification", d: "Identify minerals using a trained deep-learning model" },
      { t: "Image Upload", d: "Upload JPG, JPEG, or PNG images directly through the web interface" },
      { t: "Real-Time Prediction", d: "Receive classification results within seconds" },
      { t: "Confidence Score", d: "Display prediction probability for every identified mineral" },
      { t: "Modular AI Pipeline", d: "Designed for future model retraining and deployment" },
    ],
    archTitle: "Image Upload → Preprocessing → YOLO Classification → Prediction → Streamlit",
    archDesc:
      "Uploaded images are preprocessed (resize, normalize) before being passed to the trained YOLO classification model. The prediction engine returns the most probable mineral class and confidence score. Streamlit builds the interface, Plotly the charts, and Hugging Face Spaces hosts it publicly.",
    flow: ["Image Upload", "Preprocessing", "YOLO Classification", "Prediction", "Streamlit + Plotly"],
    images: [
      { src: "min1", cap: "Upload & classify" },
      { src: "min2", cap: "Confidence chart" },
      { src: "min-cm", cap: "Confusion matrix" },
    ],
    metrics: {
      title: "Model Performance",
      intro:
        "Evaluated on a validation set across seven mineral classes using Top-1 / Top-5 accuracy, Precision, Recall, F1-Score and a confusion matrix.",
      list: [
        { label: "Top-1 Accuracy", value: 88.28, max: 100, display: "88.28%" },
        { label: "Top-5 Accuracy", value: 100, max: 100, display: "100%" },
        { label: "Precision", value: 94.23, max: 100, display: "94.23%" },
        { label: "Recall", value: 93.69, max: 100, display: "93.69%" },
        { label: "F1-Score", value: 93.69, max: 100, display: "93.69%" },
        { label: "Fitness", value: 0.94, max: 1, display: "0.94" },
      ],
      notes: [
        {
          h: "Correctly classified minerals",
          p: "Biotite: 10 of 10. Malachite: 20 of 20 with no misclassification. Bornite: 30 correct, the highest count in the dataset. The model learned the distinguishing visual traits of these minerals well.",
        },
        {
          h: "Misclassified minerals",
          p: "Most errors happened among minerals with similar textures and color patterns. They stay limited compared with correct predictions, which indicates good class separability.",
        },
      ],
    },
    links: [
      { label: "View Github Repository", href: "https://github.com/alifyadhiva/Klasifikasi_Mineral", kind: "repo" },
      { label: "View Public Demo Project", href: "https://huggingface.co/spaces/alifya/mineral_classification_demo", kind: "demo" },
    ],
    related: [
      { slug: "iris-prediction", label: "Iris Species Prediction" },
      { slug: "nickel-grade-estimation", label: "Nickel Grade Estimation" },
    ],
  },
  {
    slug: "iris-prediction",
    cat: "ml",
    title: "Iris Species Prediction",
    kicker: "Image Recognition Program",
    lead: [
      "A machine learning web application that predicts Iris flower species (Setosa, Versicolor, Virginica) from input features.",
      "Built with Streamlit for the front end and a Scikit-learn Random Forest classifier for prediction. Users can enter data manually or upload a CSV file for batch predictions.",
    ],
    tech: ["Python", "Streamlit", "Scikit-learn", "Pandas", "Random Forest"],
    meta: {
      industry: "Data Science",
      type: "Machine Learning Web App",
      status: "Public Demo",
      role: "Data Scientist",
    },
    overview:
      "An interactive interface for single or batch predictions with real-time results, following a simple ML pipeline from user input to prediction output.",
    modules: [
      { t: "Manual & File Input", d: "Input features manually or upload a CSV for batch prediction" },
      { t: "ML Classification Model", d: "Random Forest model trained on the iris dataset" },
      { t: "Real-Time Prediction", d: "Instant prediction results" },
      { t: "Interactive Visualization", d: "Display input features and prediction results" },
      { t: "User-friendly Interface", d: "Clean and intuitive dashboard built with Streamlit" },
    ],
    archTitle: "Streamlit → Python → Scikit-learn → Prediction",
    archDesc:
      "Input comes from sliders or an uploaded CSV, is validated, cleaned and transformed into a dataframe, then passed to the Random Forest model trained on the iris dataset. Results are formatted and shown in the interface.",
    flow: ["User Input", "Preprocessing", "Random Forest", "Prediction", "Results Display"],
    images: [
      { src: "iris1", cap: "Iris Species Prediction" },
      { src: "iris2", cap: "Input features & prediction" },
      { src: "iris-rep", cap: "Classification report" },
    ],
    metrics: {
      title: "Model Performance",
      intro: "Evaluated on a held-out test set of 30 samples across three species using four morphological features.",
      list: [
        { label: "Accuracy", value: 80, max: 100, display: "80%" },
        { label: "Precision (weighted)", value: 88, max: 100, display: "0.88" },
        { label: "Recall (weighted)", value: 80, max: 100, display: "0.80" },
        { label: "F1-Score", value: 78, max: 100, display: "0.78" },
      ],
      notes: [
        {
          h: "Correctly classified species",
          p: "Iris-setosa was perfectly classified: 1.00 Precision, Recall, and F1-Score, with all 10 test samples identified. Overall, 24 of 30 samples were correct.",
        },
        {
          h: "Challenging classifications",
          p: "Most errors were between Iris-versicolor and Iris-virginica because their features are similar. Versicolor reached a Recall of 0.40; Virginica a Recall of 1.00 with a Precision of 0.62, so some Versicolor samples were predicted as Virginica.",
        },
      ],
    },
    links: [
      { label: "View Github Repository", href: "https://github.com/alifyadhiva/iris_app/", kind: "repo" },
      { label: "View Public Demo Project", href: "https://iris-app-alifya.streamlit.app/", kind: "demo" },
    ],
    related: [
      { slug: "mineral-classification", label: "Mineral Classification" },
      { slug: "nickel-grade-estimation", label: "Nickel Grade Estimation" },
    ],
  },
  {
    slug: "nickel-grade-estimation",
    cat: "ml",
    title: "Nickel Grade Estimation Predictive Analytics Application",
    kicker: "Estimation Program",
    lead: [
      "Predictive analytics application for mining operations, such as nickel grade estimation using spatial distribution, geochemistry, lithology, and drillhole depth data.",
      "This developing application leverages machine learning and geostatistics to estimate nickel grade distribution across the deposit, supporting exploration, resource modeling, and operational decision-making.",
    ],
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy", "Plotly", "PostgreSQL"],
    meta: {
      industry: "Mining",
      type: "Predictive Analytics App",
      status: "NDA Project - Public Demo (simplified dummy data)",
      role: "Data Engineer",
    },
    overview:
      "Estimates nickel grade distribution from spatial, geochemical, lithological, and drillhole depth data. The model helps geologists and engineers identify high-grade zones and supports data-driven mining planning.",
    modules: [
      { t: "Nickel Grade Prediction", d: "Estimate nickel grade using machine learning & geostatistics" },
      { t: "Geochemical Integration", d: "Incorporate geochemical data to improve prediction accuracy" },
      { t: "Drillhole Depth Analysis", d: "Use depth information to analyze grade trends" },
      { t: "Model Validation", d: "Evaluate model performance with cross-validation & metrics" },
      { t: "Interactive Dashboard", d: "User-friendly dashboard for exploration & decision support" },
    ],
    archTitle: "Drillhole Data → Data Validation → EDA → Modelling Engine → Prediction",
    archDesc:
      "An end-to-end pipeline that integrates multi-source geoscience data, applies machine learning and geostatistics, and delivers grade predictions through an interactive dashboard.",
    flow: ["Drillhole Data", "PostgreSQL", "Data Processing", "Modelling Engine", "Grade Prediction"],
    stages: [
      { title: "Collect", items: ["Drillhole assays, collar, lithology", "Topography"] },
      { title: "Store", items: ["PostgreSQL: spatial & relational data", "Data validation, versioning"] },
      { title: "Process", items: ["Data cleaning, outlier handling", "Feature engineering, data transformation"] },
      { title: "Model", items: ["Random Forest, geostatistics", "Hyperparameter tuning, cross validation"] },
      { title: "Predict", items: ["Grade interpolation", "Uncertainty estimation, depth-based analysis", "Scenario simulation"] },
    ],
    images: [
      { src: "ni1", cap: "Nickel Grade Estimation app" },
      { src: "ni2", cap: "Input data & prediction result" },
      { src: "ni-heat", cap: "Correlation heatmap (EDA)" },
      { src: "ni-models", cap: "Model comparison" },
    ],
    metrics: {
      title: "Model Performance",
      intro:
        "The Random Forest model achieved an MSE of 0.0367 and an R² of 0.8586. The low error and high explanatory power show it captures the nonlinear relationships between spatial and geochemical variables.",
      list: [
        { label: "R² (Random Forest)", value: 0.8586, max: 1, display: "0.8586" },
        { label: "MSE (Random Forest)", value: 0.0367, max: 0.2, display: "0.0367" },
      ],
      notes: [
        {
          h: "Strong geochemical relationships",
          p: "Ni grade correlates positively with MgO (r = 0.58) and negatively with Fe (r = -0.62), reflecting the limonite-saprolite transition typical of laterite nickel deposits. Fe, SiO₂, and Al₂O₃ show moderate positive correlations (r = 0.57-0.66). Drillhole ID was excluded as it has no predictive value.",
        },
        {
          h: "Important considerations",
          p: "Elevation and depth carry overlapping spatial information. Easting and Northing may indicate drilling bias rather than geology. Geochemical variables need a CLR transformation, and VIF analysis is recommended for multicollinearity. The heatmap suits exploratory analysis but needs more preprocessing before grade prediction.",
        },
      ],
    },
    links: [
      { label: "View Github Repository", href: "https://github.com/alifyadhiva/estimasikadarni", kind: "repo" },
      { label: "View Public Demo Project", href: "https://estimasikadarni-xfield.streamlit.app/", kind: "demo" },
    ],
    related: [
      { slug: "mineral-classification", label: "Mineral Classification" },
      { slug: "iris-prediction", label: "Iris Species Prediction" },
    ],
  },
  {
    slug: "gis-geology",
    cat: "gis",
    title: "GIS, Geology, and Mining Projects",
    kicker: "WebGIS, Modelling & Fieldwork",
    lead: [
      "A responsive WebGIS platform for project data management and visualization of geological and mining activities, plus field exploration and 3D geological and resource modelling work.",
      "The WebGIS integrates the Google Maps API to display shapefile-based project boundaries with color-coded indicators by project status (for example pink for desk study completed, red for pending).",
    ],
    tech: ["HTML", "CSS", "JavaScript", "PostgreSQL", "Leaflet", "Turf.js", "MapLibre", "ArcGIS", "QGIS", "Surpac", "Leapfrog"],
    meta: {
      industry: "Geology & Mining",
      type: "WebGIS, Geological Modelling, Resource Estimation",
      status: "Public Demo Available",
      role: "Geologist & GIS Developer",
    },
    overview:
      "Four connected lines of work: an Exploration Targeting WebGIS, 3D geological modelling from drillhole and lithology data, geostatistical resource estimation, and GIS-based site suitability analysis.",
    modules: [
      { t: "Exploration Targeting WebGIS", d: "Integrates geological and exploration data for efficient target identification and spatial analysis" },
      { t: "Geological Modelling", d: "3D models from drillhole and lithological data for subsurface interpretation and resource evaluation" },
      { t: "Resource Estimation", d: "Geostatistical estimation to evaluate mineral resources and support standardized reporting" },
      { t: "Site Suitability Analysis", d: "GIS-based evaluation and ranking of potential sites using spatial and environmental criteria" },
      { t: "Geological Exploration, Morowali (Central Sulawesi)", d: "Nickel deposit evaluation: geological mapping, mineral identification, sampling, and drilling" },
      { t: "Geological Exploration, North Konawe (Southeast Sulawesi)", d: "Fieldwork, mapping, and systematic sampling to support feasibility assessment of mine production planning" },
      { t: "Coal Modelling & Resource Estimation (Tarakan Basin)", d: "Geological model with deep learning for improved accuracy in resource estimation" },
    ],
    archTitle: "Field data → Database → GIS / Modelling → Decision",
    archDesc:
      "Fieldwork identifies lithology and collects rock and soil samples. The data is interpreted in GIS and modelling software, then feeds early-stage resource estimation and mine planning decisions.",
    flow: ["Fieldwork", "Database", "GIS & Modelling", "Resource Estimation", "Mine Planning"],
    stages: [
      { title: "Data Analyst & DB Admin", items: ["SQL", "Microsoft Access", "JavaScript & HTML", "Database schema design"] },
      { title: "GIS Software", items: ["ArcGIS", "QGIS", "Global Mapper"] },
      { title: "Modelling & Estimation", items: ["Surpac", "Minescape", "Leapfrog"] },
    ],
    images: [
      { src: "webgis3", cap: "Exploration Targeting WebGIS" },
      { src: "webgis2", cap: "WebGIS layers" },
      { src: "gis3", cap: "Geological modelling" },
      { src: "gis4", cap: "3D block model" },
      { src: "sw5", cap: "Coal seam model" },
      { src: "field2", cap: "Geological exploration" },
      { src: "field1", cap: "Fieldwork team" },
      { src: "field4", cap: "Mineral identification" },
      { src: "field5", cap: "Coal mine site" },
    ],
    links: [
      { label: "Github Repository", href: "https://github.com/alifyadhiva/WebGIS", kind: "repo" },
      { label: "Link to WebGIS", href: "https://alifyadhiva.github.io/WebGIS/", kind: "demo" },
    ],
    related: [{ slug: "mineral-classification", label: "Mineral Classification" }],
  },
  {
    slug: "opd-integrated",
    cat: "data",
    title: "Integrated Data System Portal",
    kicker: "One login for production, exploration and head-office data",
    lead: [
      "One installable web app (PWA) where a single sign-in opens every site and module.",
      "The portal brings daily production data, offline-first exploration data entry and head-office views behind one address, so teams stop switching between separate tools and logins.",
    ],
    tech: ["Next.js 16", "React 19", "TypeScript", "Supabase", "Dexie", "PWA"],
    meta: {
      industry: "Mining",
      type: "Progressive Web App (multi-site portal)",
      status: "NDA Internal Project",
      role: "Data Engineer & Full-stack Developer",
    },
    overview:
      "A portal that signs a person in once, finds which sites and modules they may use, and opens them as tiles. Exploration is built in as an offline-first field app; Production and Head-office modules are planned phases.",
    modules: [
      { t: "Single Sign-in", d: "One email and password checked against every connected site project in parallel" },
      { t: "Portal Home", d: "Module and site tiles, greyed out where a person has no active account" },
      { t: "Exploration App", d: "Offline-first collar, drilling progress, hours, sample entry plus dashboard, QC, map and 3D" },
      { t: "Role-based Access", d: "Viewer, data entry, site admin and super admin, enforced by Row Level Security" },
      { t: "Offline & Sync", d: "Outbox queue sends data when the connection returns, with guest mode in the field" },
      { t: "Secure by Design", d: "Public keys only in the repo, same-origin redirects, strict security headers" },
    ],
    archTitle: "Browser PWA → Supabase per site → Row Level Security",
    archDesc:
      "A static Next.js export runs entirely in the browser. Authentication fans out to each Supabase project, local data lives in IndexedDB per site, and the database decides what each person can read or write.",
    flow: ["Landing", "Login", "Portal", "Exploration / Production", "Supabase (RLS)"],
    stages: [
      { title: "Login", items: ["Credential fan-out to every site project, succeeds if at least one accepts", "10 second timeout per project, per-project status"] },
      { title: "Portal", items: ["Tiles built from the person's active profiles", "Sign-out clears server data from the device"] },
      { title: "Exploration", items: ["Dexie local database per site, outbox sync", "Dashboard, Data QC, Peta and 3D Hole need internet"] },
      { title: "Delivery", items: ["Static export on Vercel", "Service worker with versioned cache and update prompt"] },
    ],
    images: [
      { src: "ids-home", cap: "Landing page: one login for every site and module" },
      { src: "ids-mod", cap: "Module overview: Exploration, Production, Documents, Tools and Portal" },
      { src: "ids-form", cap: "Offline-first exploration data entry (guest mode)" },
      { src: "ids-tools", cap: "Tools: calculators that run in the browser" },
    ],
    closing: "Built to be fully functional while staying a non-commercial portfolio project.",
    links: [{ label: "Private project (login required)", href: "", kind: "soon" }],
    related: [
      { slug: "exploration-pwa-v2", label: "Exploration PWA v2" },
      { slug: "pdca-dashboard", label: "Interactive PDCA Dashboard" },
      { slug: "one-portal-data", label: "One Portal Data (data entry)" },
    ],
  },
  {
    slug: "exploration-pwa-v1",
    cat: "data",
    title: "Exploration Data Entry PWA v1",
    kicker: "Offline-first drilling data capture",
    lead: [
      "A field app that lets geologists record exploration data on a phone with or without signal.",
      "Data is saved on the device first and sent to the site database when a connection returns, so remote drilling sites never block data entry.",
    ],
    tech: ["Vanilla JS", "Dexie", "Supabase", "Chart.js", "Leaflet", "PWA"],
    meta: {
      industry: "Mining Exploration",
      type: "Progressive Web App (v2.0.0, vanilla JavaScript)",
      status: "NDA Internal Project",
      role: "Data Engineer & Developer",
    },
    overview:
      "The first generation of the exploration app: plain ES modules, no build step, one Supabase project per site, rules stored as data and validated again by the database.",
    modules: [
      { t: "Drilling Progress & Collar", d: "Intervals, core recovery, GPS position with accuracy, photos and duplicate-coordinate guard" },
      { t: "Distribution Hour", d: "Rig activity hours with consumables and overlap checks" },
      { t: "Sample Register", d: "Split intervals, bulk status change and uniqueness rules" },
      { t: "Excel & Lab PDF Import", d: "Template import with preview, and Report of Analysis PDF read in the browser" },
      { t: "Dashboard & Data QC", d: "Progress vs plan, QAQC charts, CRM Z-score and a lab analysis workbook" },
      { t: "Map & PDF Plan Map", d: "Collars by class, IUP boundary, uploaded layers and printable map layouts" },
    ],
    archTitle: "Phone (IndexedDB + outbox) → Site Supabase → Explo Hub",
    archDesc:
      "Every save writes the record and an outbox entry. Sync pushes the outbox, then pulls reference data. Idempotent upserts mean a repeated send never duplicates, and triggers repeat the validation on the server.",
    flow: ["Device", "Outbox", "Site Supabase", "Explo Hub", "Dashboard"],
    stages: [
      { title: "Capture", items: ["Forms with validation on the device", "Guest mode when no login is possible"] },
      { title: "Sync", items: ["Outbox queue, last write wins by updated time", "Photos compressed on the phone"] },
      { title: "Validate", items: ["Row Level Security and triggers", "Per-form permission per user"] },
      { title: "Analyse", items: ["Live dashboard and Data QC", "Hub roll-up across sites"] },
    ],
    images: [
      { src: "xp1-d1", cap: "Login with offline guest mode" },
      { src: "xp1-d2", cap: "Drilling progress form" },
      { src: "xp1-d3", cap: "Collar map with layers" },
      { src: "xp1-d4", cap: "QAQC geochemistry dashboard" },
      { src: "xp1-d5", cap: "Data QC issue register" },
    ],
    phones: [
      { src: "xp1-p1", cap: "Sample register" },
      { src: "xp1-p2", cap: "Menu" },
      { src: "xp1-p3", cap: "Collar input" },
      { src: "xp1-p4", cap: "Distribution hour" },
      { src: "xp1-p5", cap: "Drilling progress" },
    ],
    links: [{ label: "Public demo available soon", href: "", kind: "soon" }],
    related: [
      { slug: "exploration-pwa-v2", label: "Exploration PWA v2" },
      { slug: "opd-integrated", label: "Integrated Data System Portal" },
    ],
  },
  {
    slug: "exploration-pwa-v2",
    cat: "data",
    title: "Exploration Data Entry PWA v2",
    kicker: "Next.js rebuild inside the Integrated Data System Portal",
    lead: [
      "A side-by-side rebuild of the exploration app on a modern stack, now running behind the portal login.",
      "Same offline-first behaviour and data model, with a redesigned interface, a command palette and a 3D drill hole view.",
    ],
    tech: ["Next.js 16", "React 19", "Tailwind v4", "three.js", "Dexie", "Supabase"],
    meta: {
      industry: "Mining Exploration",
      type: "Progressive Web App (Next.js static export)",
      status: "NDA Internal Project",
      role: "Data Engineer & Full-stack Developer",
    },
    overview:
      "Version 2 keeps the proven offline core and moves the interface to Next.js, with dynamic form rules, editable QC thresholds and a 3D view of drill holes.",
    modules: [
      { t: "Dynamic Forms", d: "Fields show, hide or become required by rule, for example core result for coring holes" },
      { t: "3D Hole", d: "Minimum-curvature drill paths coloured by class, Ni, Fe or MgO, with a low-power plan and section fallback" },
      { t: "Data QC & Lab Analysis", d: "16 lab workbook sheets inside the app, thresholds editable by admins" },
      { t: "Dashboard", d: "KPIs, meters vs plan, QAQC geochemistry, collar map, Excel and PDF export" },
      { t: "Import Data", d: "Drillhole Excel template and lab RoA PDF import in one tab" },
      { t: "Command Palette", d: "Jump to any tab or action from the keyboard" },
    ],
    archTitle: "Next.js static export → Dexie outbox → Supabase",
    archDesc:
      "The plain JavaScript offline core is carried over unchanged, wrapped by React components. The local database schema stays compatible, so phones upgrade without losing unsent data.",
    flow: ["React UI", "Offline core", "Dexie", "Outbox sync", "Site Supabase"],
    stages: [
      { title: "Foundation", items: ["Design tokens, login and guest mode, sync chip, command palette"] },
      { title: "Forms & records", items: ["Collar, Distribution Hour, Sample, Data Records, Laporan, Import, Pengaturan"] },
      { title: "Analysis", items: ["Dashboard, Data QC, Peta with layer upload"] },
      { title: "3D", items: ["three.js loads only when the 3D tab opens"] },
    ],
    images: [
      { src: "xp2-d1", cap: "3D Hole view" },
      { src: "xp2-d2", cap: "Login" },
    ],
    phones: [
      { src: "xp2-p3", cap: "Login" },
      { src: "xp2-p4", cap: "Drilling progress" },
      { src: "xp2-p1", cap: "Collar input" },
      { src: "xp2-p2", cap: "As-built GPS" },
    ],
    links: [{ label: "Private project (login required)", href: "", kind: "soon" }],
    related: [
      { slug: "exploration-pwa-v1", label: "Exploration PWA v1" },
      { slug: "opd-integrated", label: "Integrated Data System Portal" },
    ],
  },
  {
    slug: "pdca-dashboard",
    cat: "data",
    title: "Interactive PDCA Dashboard",
    kicker: "Production monitoring built on Plan, Do, Check, Act",
    lead: [
      "The newest production dashboard, built natively inside the portal and reading live from the database.",
      "It turns daily data into verdicts, causes and actions, so management sees not only what happened but what to do next.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "SQL"],
    meta: {
      industry: "Mining",
      type: "Interactive Dashboard",
      status: "NDA Internal Project",
      role: "Data Engineer & Developer",
    },
    overview:
      "A read-only dashboard organised by the PDCA cycle, with one secured database function that returns the data for a chosen date range and set of sites.",
    modules: [
      { t: "Overview", d: "KPI cards with verdict chips, cumulative actual vs plan and first actions" },
      { t: "Plan", d: "Annual plan, required vs current daily rate and year-end projection" },
      { t: "Do", d: "Grades, shipment, overburden, contractors, stock, fuel, manpower and hauling" },
      { t: "Check", d: "Achievement, availability, working hours and rain, delay causes, HSE and data completeness" },
      { t: "Act", d: "Ranked actions and open hazard corrective actions" },
      { t: "Reports by Table", d: "One report per source table with a why-was-this-day-low panel" },
    ],
    archTitle: "Site databases → secured SQL function → interactive dashboard",
    archDesc:
      "The function checks the caller's role, limits the date range and returns only what the account may read. Cumulative columns are read on one day and never summed, which avoids double counting.",
    flow: ["Source Tables", "SQL Function", "Dashboard Model", "PDCA Views"],
    stages: [
      { title: "Plan", items: ["Calendar targets and annual plan"] },
      { title: "Do", items: ["Actual production, shipment, stock and resources"] },
      { title: "Check", items: ["Verdicts: achieved, on pace, behind pace, below plan, no plan"] },
      { title: "Act", items: ["Ranked actions from the gaps"] },
    ],
    images: [
      { src: "pdca3", cap: "Overview and plan-do-check-act summary" },
      { src: "pdca2", cap: "Cumulative plan vs actual and site status" },
      { src: "pdca4", cap: "Plan by site and daily result" },
      { src: "pdca5", cap: "Availability, utilization and lost hours" },
      { src: "pdca1", cap: "All tables explorer" },
    ],
    metrics: {
      title: "Production Plan to Actual Waterfall",
      intro: "A bridge from plan to actual that splits the gap into rain, slippery, other delays, availability and productivity, so the chart always closes on the actual figure.",
      list: [],
      notes: [
        { h: "Rain effect", p: "Rainy and dry days are compared side by side to show a pattern, not proof of cause." },
        { h: "Bridges", p: "Stock, fuel and headcount bridges show what the daily rows do not explain." },
      ],
    },
    links: [{ label: "Available inside the portal (login required)", href: "", kind: "soon" }],
    related: [
      { slug: "mining-operations-monitoring", label: "Monitoring Platform" },
      { slug: "opd-integrated", label: "Integrated Data System Portal" },
    ],
  },
  {
    slug: "daily-report-etl",
    cat: "data",
    title: "Production Data ETL Manager",
    kicker: "Daily Report ETL: from site reports to verified master workbooks",
    lead: [
      "A local app that reads each site's daily report, maps it to the master workbook tables, checks it against history and loads it safely through Excel.",
      "Every load is backed up and verified cell by cell, then the saved master can be uploaded to the site's database.",
    ],
    tech: ["Python", "Flask", "Excel COM", "PDF parsing", "Pandas", "Supabase"],
    meta: {
      industry: "Mining",
      type: "ETL Automation App (Windows desktop, local web UI)",
      status: "NDA Internal Project",
      role: "Data Engineer & Developer",
    },
    overview:
      "Built around a five-step wizard: Setup, Extract, Transform, Load and Upload. A changed report layout stops that section with an error instead of loading wrong numbers.",
    modules: [
      { t: "Site Adapters", d: "PDF and Excel parsers for three sites, each with its own layout rules" },
      { t: "Validation", d: "Severity levels (error, warning, reconcile, info) and plan checks against the master" },
      { t: "Safe Load", d: "Backup first, block load through Excel, recalculate, save and verify every loaded cell" },
      { t: "Two Load Modes", d: "Skip/Keep for daily use and Replace/Overwrite for corrections" },
      { t: "Hazard & Barge Updates", d: "Close or tag earlier findings and update barge status with no downgrade" },
      { t: "Upload", d: "Compare checksums per date and rewrite only the dates that differ" },
    ],
    archTitle: "Report → Transform → Excel master → Supabase → Looker",
    archDesc:
      "The Excel master stays the source of truth, so its formulas remain the single definition of cumulative figures. The app writes input columns only and never touches calculated columns, Power Pivot or macros.",
    flow: ["Site Report", "Extract", "Transform & Check", "Load & Verify", "Upload"],
    stages: [
      { title: "Extract", items: ["Report date read from inside the file, not the file name"] },
      { title: "Transform", items: ["Map to master input columns, check against history"] },
      { title: "Load", items: ["Block load: 193 s versus over 30 min row by row (one month test)"] },
      { title: "Verify", items: ["20,157 cells compared after load, 0 differences"] },
    ],
    images: [
      { src: "dretl1", cap: "Step 1: choose the site and its master workbook" },
      { src: "dretl2", cap: "Step 2: drop the daily report files" },
      { src: "dretl3", cap: "Step 3: review checks, errors and warnings per table" },
      { src: "dretl4", cap: "Step 4: back up, save to the master and verify" },
      { src: "dretl5", cap: "Step 5: upload to the site database with upload history" },
    ],
    metrics: {
      title: "Load Performance",
      intro: "Block loading through Excel replaced row-by-row writes on a one-month replace test.",
      list: [{ label: "Load time reduction", value: 90, max: 100, display: "90%+" }],
      notes: [],
    },
    links: [{ label: "Public dummy app available soon", href: "", kind: "soon" }],
    related: [
      { slug: "etl-production", label: "Mining Production ETL Manager" },
      { slug: "etl-operation", label: "Mining Operation ETL Manager" },
    ],
  },
];

export const bySlug = (s: string) => PROJECTS.find((p) => p.slug === s);

export type Card = {
  id: string;
  cat: Cat;
  title: string;
  text: string;
  img: string;
  href?: string;
  tech: string[];
  ongoing?: boolean;
};

export const CARDS: Card[] = [
  {
    id: "dash",
    cat: "data",
    title: "Dashboard Production Monitoring",
    text: "Interactive dashboard that transforms daily mining production data into actionable insights, enabling faster decision-making across sites and operations.",
    img: "dash0",
    href: "/projects/mining-operations-monitoring/",
    tech: ["Looker Studio", "Excel", "Supabase"],
  },
  {
    id: "etl",
    cat: "data",
    title: "ETL Pipeline for Mining Data",
    text: "Automated ETL pipeline that consolidates production, exploration, and operational data into a centralized PostgreSQL database, reducing manual reporting and improving data consistency.",
    img: "etl-card",
    href: "/projects/etl-production/",
    tech: ["Python", "PostgreSQL", "Supabase"],
  },
  {
    id: "portal",
    cat: "data",
    title: "Enterprise Data Portal",
    text: "A one-stop platform integrating dashboards, reports, and operational data to support mining, exploration, and administrative teams in a single ecosystem.",
    img: "portal1",
    href: "/projects/one-portal-data/",
    tech: ["Supabase", "Looker", "Power BI", "Excel"],
  },
  {
    id: "opd",
    cat: "data",
    title: "Integrated Data System Portal",
    text: "One installable app with a single login for production, exploration and head-office data across mining sites, with an offline-first field app built in.",
    img: "ids-home",
    href: "/projects/opd-integrated/",
    tech: ["Next.js", "Supabase", "PWA"],
  },
  {
    id: "explo1",
    cat: "data",
    title: "Exploration PWA v1",
    text: "Offline-first drilling data entry for geologists: collars, progress, hours and samples saved on the phone and synced when signal returns.",
    img: "xp1-d5",
    href: "/projects/exploration-pwa-v1/",
    tech: ["Vanilla JS", "Dexie", "Supabase"],
  },
  {
    id: "explo2",
    cat: "data",
    title: "Exploration PWA v2",
    text: "Next.js rebuild inside the portal with dynamic forms, Data QC, collar map and a 3D drill hole view.",
    img: "xp2-d1",
    href: "/projects/exploration-pwa-v2/",
    tech: ["Next.js", "three.js", "Supabase"],
  },
  {
    id: "pdca",
    cat: "data",
    title: "Interactive PDCA Dashboard",
    text: "Newest production dashboard organised by Plan, Do, Check and Act, with verdicts, a plan-to-actual waterfall and ranked actions.",
    img: "pdca3",
    href: "/projects/pdca-dashboard/",
    tech: ["Next.js", "PostgreSQL", "SQL"],
  },
  {
    id: "dretl",
    cat: "data",
    title: "Production Data ETL Manager",
    text: "Reads site daily reports, validates them against history and loads the Excel master safely with full cell-by-cell verification.",
    img: "dretl2",
    href: "/projects/daily-report-etl/",
    tech: ["Python", "Excel COM", "Supabase"],
  },
  {
    id: "img",
    cat: "ml",
    title: "Image Recognition Program",
    text: "Deep learning-based image classification system that identifies objects from images and generates predictions with high accuracy. Applied in projects such as Iris Species Classification and Mineral Classification.",
    img: "min1",
    href: "/projects/mineral-classification/",
    tech: ["Python", "YOLOv11", "Streamlit"],
  },
  {
    id: "est",
    cat: "ml",
    title: "Estimation Program",
    text: "Predictive analytics application for mining operations, such as nickel grade estimation using spatial distribution, geochemistry, lithology, and drillhole depth data.",
    img: "ni-cover",
    href: "/projects/nickel-grade-estimation/",
    tech: ["Python", "PostgreSQL", "Scikit-learn"],
  },
  {
    id: "qgis",
    cat: "ml",
    title: "QGIS Plugin",
    text: "Custom QGIS plugin that automates plantation analysis by estimating coconut plantation area and counting coconut crowns from drone imagery and GeoTIFF datasets.",
    img: "qgis",
    tech: ["QGIS", "Python", "GeoTIFF"],
    ongoing: true,
  },
  {
    id: "gis",
    cat: "gis",
    title: "Exploration Targeting WebGIS",
    text: "WebGIS application integrating geological and exploration data for efficient target identification and spatial analysis.",
    img: "webgis3",
    href: "/projects/gis-geology/",
    tech: ["Leaflet", "MapLibre", "Turf.js"],
  },
  {
    id: "model",
    cat: "gis",
    title: "Geological Modelling",
    text: "3D geological modelling integrating drillhole and lithological data for subsurface interpretation and resource evaluation.",
    img: "gis3",
    href: "/projects/gis-geology/",
    tech: ["Leapfrog", "Surpac", "Minescape"],
  },
  {
    id: "res",
    cat: "gis",
    title: "Resource Estimation",
    text: "Geostatistical resource estimation for evaluating mineral resources and supporting standardized reporting.",
    img: "gis4",
    href: "/projects/gis-geology/",
    tech: ["Surpac", "Geostatistics"],
  },
  {
    id: "suit",
    cat: "gis",
    title: "Site Suitability Analysis",
    text: "GIS-based suitability analysis for evaluating and ranking potential sites using spatial and environmental criteria.",
    img: "gis1",
    href: "/projects/gis-geology/",
    tech: ["ArcGIS", "QGIS"],
  },
];
