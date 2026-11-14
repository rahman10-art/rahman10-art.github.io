/**
 * All site content lives here. Edit this file to update the website —
 * no layout code needs to change to add a project, skill or publication.
 */
import type { StaticImageData } from "next/image";

import headshot from "@/assets/headshot.jpg";
import earthrise from "@/assets/hero/earthrise.jpg";
import moonwalk from "@/assets/hero/moonwalk.jpg";

/** Full-width photos used behind page headers and the closing banner */
export const heroImages = {
  home: earthrise,
  summary: moonwalk,
  projects: creamInstrument,
  about: earthrise,
  banner: moonwalk,
};

import tegTripleJunction from "@/assets/teg/triple-junction.png";
import tegArcResponse from "@/assets/teg/arc-response.png";
import tegComsol from "@/assets/teg/comsol-teg.png";
import tegArcCurrentTemp from "@/assets/teg/arc-current-temp.png";

import creamScd from "@/assets/cream/scd.jpg";
import creamInstrument from "@/assets/cream/instrument.jpg";
import creamPedestalMean from "@/assets/cream/pedestal-mean.png";
import creamChannelPedestal from "@/assets/cream/channel-pedestal.png";
import creamCmsLeakage from "@/assets/cream/cms-leakage.png";

import spikeBlock from "@/assets/spike/block-diagram.png";
import spikeSchematic from "@/assets/spike/vlsi-schematic.png";
import spikeOutput from "@/assets/spike/neuron-output.png";

import fcFinalAssembly from "@/assets/fructocare/final-assembly.png";
import fcProcessFlow from "@/assets/fructocare/process-flow.png";
import fcBlockDiagram from "@/assets/fructocare/block-diagram.png";
import fcPcbStack from "@/assets/fructocare/pcb-stack.png";
import fcPcbAfe from "@/assets/fructocare/pcb-afe.png";
import fcPcbMcu from "@/assets/fructocare/pcb-mcu.png";
import fcBattery from "@/assets/fructocare/battery-connection.png";
import fcSensorFfc from "@/assets/fructocare/sensor-ffc.png";
import fcDrugDelivery from "@/assets/fructocare/drug-delivery-connection.png";
import fcDimensions from "@/assets/fructocare/capsule-dimensions.png";

import otaTransistor from "@/assets/ota/transistor-schematic.png";
import otaCadence from "@/assets/ota/cadence-schematic.png";
import otaLayout from "@/assets/ota/layout.png";

/* ------------------------------------------------------------------ */
/* Profile                                                             */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Muntaha Rahman",
  pronouns: "she/her",
  title: "Electrical & Electronics Engineer",
  role: "Ph.D. Student, Microelectronics · University of Maryland, College Park",
  headline:
    "Analog and mixed-signal IC design for biomedical sensing, wireless sensing and space instrumentation.",
  photo: headshot,
  email: "rahman10@umd.edu",
  linkedin: "https://www.linkedin.com/in/muntaha-rahman",
  resume:
    "https://drive.google.com/file/d/1uUgYFXZNcDW46FSsqFIubTwrqXpi4_VJ/view",
  location: "College Park, MD",
  seeking: "Open to analog / mixed-signal IC and hardware internships",
  about: [
    "I am a third-year Ph.D. student in Electrical and Electronics Engineering at the University of Maryland, College Park, specializing in microelectronics. My research focuses on the design of analog and mixed-signal integrated circuits for biomedical, sensing and space-exploration applications.",
    "I am particularly drawn to electronics for spaceborne instrumentation — payloads, particle detectors and CubeSats. That interest started as a teenager watching the Apollo 11 landing and visiting the only observatory in my hometown of Dhaka, Bangladesh, and it carried me through undergraduate space-research projects into my doctoral work.",
    "Beyond space systems, I enjoy working across domains: from transistor-level amplifier layout to custom PCBs for ingestible medical devices, and from radiation-effects analysis on the International Space Station to neuromorphic VLSI.",
  ],
  /** Longer personal statement shown on the About page */
  statement: [
    "My research spans analog, mixed-signal and VLSI design in applications such as biomedical sensing, wireless sensing and space exploration. I have a particularly strong interest in electronics and integrated-circuit systems for spaceborne instrumentation, payloads and particle detectors, as well as space missions and CubeSat design.",
    "That interest began when I was a teenager. I remember being captivated by documentaries like Journey to the Edge of the Universe and by the historic Apollo 11 Moon landing on National Geographic — Neil Armstrong's words, \"That's one small step for man, one giant leap for mankind,\" still resonate with me as powerfully as they did the first time I heard them. My curiosity deepened when I visited the only space observatory in my hometown of Dhaka, Bangladesh. Standing under its dome, I wanted to understand the creation and evolution of the cosmos, and the potential for life across its planets, moons and galaxies — firsthand.",
    "Driven by that, I worked on space-exploration projects throughout my undergraduate studies in electronics engineering, where I found my focus: analog integrated circuits and electronic systems for the instruments and detectors used in planetary exploration, astrophysics and astronomy. I continue to pursue this through my doctoral research.",
    "I also love exploring other domains in electrical engineering — in particular, analog and mixed-signal circuits for biomedical sensing and implantable technologies.",
  ],
  interests: [
    "Analog IC design",
    "Mixed-signal & VLSI",
    "Space instrumentation",
    "Radiation effects",
    "Biomedical sensing",
    "Implantable electronics",
  ],
};

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export type Figure = { src: StaticImageData; caption: string };
export type Metric = { value: string; label: string };
export type Section = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  steps?: { title: string; body: string }[];
};
export type SpecTable = {
  caption: string;
  columns: string[];
  rows: string[][];
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: "Research" | "IC Design" | "Hardware";
  affiliation?: string;
  summary: string;
  cover: StaticImageData;
  tags: string[];
  metrics: Metric[];
  sections: Section[];
  tables?: SpecTable[];
  figures: Figure[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "ota-design",
    title:
      "Low-Power Single-Stage Operational Transconductance Amplifier (OTA)",
    shortTitle: "Low-Power OTA — TSMC 180 nm",
    category: "IC Design",
    summary:
      "End-to-end design of a single-stage, single-ended OTA in Cadence Virtuoso: schematic, simulation, common-centroid layout and post-layout verification, meeting all specs at 72.5 µW.",
    cover: otaLayout,
    tags: [
      "Cadence Virtuoso",
      "TSMC 180 nm",
      "Analog Layout",
      "Post-Layout Sim",
      "Common-Centroid",
    ],
    metrics: [
      { value: "47.9 dB", label: "DC gain (spec ≥ 40 dB)" },
      { value: "72.6°", label: "Phase margin (spec ≥ 60°)" },
      { value: "72.5 µW", label: "Power (spec < 100 µW)" },
      { value: "11.9 MHz", label: "Unity-gain bandwidth" },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "This project covered the full analog design flow for a low-power single-stage operational transconductance amplifier: schematic design, simulation, layout and post-layout verification in Cadence Virtuoso using the TSMC 180 nm process. The goal was to meet strict analog performance specifications while staying robust against layout parasitics.",
        ],
      },
      {
        heading: "Design approach",
        paragraphs: [
          "I designed a fully symmetric OTA with matched transistor pairs to ensure proper differential operation and minimize mismatch.",
        ],
        bullets: [
          "Careful biasing to achieve high gain under a tight power budget",
          "Pole placement and compensation for stability (phase margin > 60°)",
          "Explicit trade-offs between gain, bandwidth and power consumption",
        ],
      },
      {
        heading: "Layout strategy",
        bullets: [
          "Common-centroid (ABBA) layout for critical transistor pairs",
          "Fully symmetric placement to minimize systematic mismatch",
          "Compact routing to reduce parasitic capacitance",
          "Area optimization (~1916 µm²) while preserving matching integrity",
        ],
      },
      {
        heading: "Outcome",
        paragraphs: [
          "Every specification was met both before and after parasitic extraction. Post-layout results tracked pre-layout within 0.3 MHz of bandwidth and 0.2° of phase margin, confirming the layout introduced minimal degradation.",
        ],
      },
    ],
    tables: [
      {
        caption: "Design specifications",
        columns: ["Parameter", "Target"],
        rows: [
          ["DC gain", "≥ 40 dB"],
          ["Phase margin", "≥ 60°"],
          ["Load capacitance", "1 pF"],
          ["Power consumption", "< 100 µW"],
          ["Supply voltage", "1.8 V"],
        ],
      },
      {
        caption: "Measured results",
        columns: ["Metric", "Pre-layout", "Post-layout"],
        rows: [
          ["DC gain", "47.93 dB", "47.91 dB"],
          ["Unity-gain bandwidth", "12.18 MHz", "11.91 MHz"],
          ["Phase margin", "72.8°", "72.6°"],
          ["Power consumption", "72.6 µW", "72.5 µW"],
          ["Area", "—", "~1916 µm²"],
        ],
      },
    ],
    figures: [
      { src: otaTransistor, caption: "Transistor-level schematic of the differential OTA" },
      { src: otaCadence, caption: "Schematic with test bench in Cadence Virtuoso" },
      { src: otaLayout, caption: "Common-centroid layout in TSMC 180 nm" },
    ],
  },
  {
    slug: "iss-cream-pedestal",
    title:
      "Radiation-Induced Pedestal Build-up on the ISS-CREAM Silicon Charge Detector",
    shortTitle: "ISS-CREAM Radiation Effects",
    category: "Research",
    affiliation: "UMD Cosmic Ray Physics Group · Supervisor: Prof. Eun-Suk Seo",
    summary:
      "Diagnosed why the pedestal (noise baseline) on 2,911 ADC readout channels of a NASA cosmic-ray detector aboard the ISS kept rising — tracing it to radiation-induced leakage current in the silicon sensors.",
    cover: creamScd,
    tags: [
      "Detector Electronics",
      "Radiation Effects",
      "ADC Readout",
      "Data Analysis",
      "Silicon Sensors",
    ],
    metrics: [
      { value: "2,911", label: "ADC readout channels analyzed" },
      { value: "Z = 1–26", label: "Cosmic-ray charge range" },
      { value: "ISS", label: "Flown since Aug. 2017" },
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "The ISS-Cosmic Ray Energetics And Mass (ISS-CREAM) instrument was built by the UMD Cosmic Ray Physics Group in collaboration with NASA to measure high-energy cosmic-ray spectra from protons to iron nuclei (Z = 1 to 26, ~10¹² to ~10¹⁵ eV). After multiple balloon missions it was launched to the International Space Station in August 2017.",
          "A key subsystem is the Silicon Charge Detector (SCD): silicon pixel sensors, analog and digital readout electronics, and a mechanical support structure. Pedestal runs — measurements of the constant background offset on each ADC channel — are subtracted from detector output to recover the true particle signal. That baseline should stay constant over time.",
        ],
      },
      {
        heading: "Problem",
        paragraphs: [
          "Pedestal means for both SCD layers rose steadily over the instrument's operating life, and channel-level analysis showed the same cumulative build-up. The question: was the cause in the front-end readout, the ADCs, or the silicon sensors themselves?",
        ],
      },
      {
        heading: "Investigation",
        paragraphs: [
          "I first examined electronic failure modes in the readout chain — ADC offset errors, leakage currents and similar effects. None explained the behavior. The SCD is power-cycled multiple times every hour, so any purely electrical noise would be reset; whatever caused the build-up had to survive power cycling and accumulate over time.",
          "That pointed to the sensors. I concluded the pedestal growth was driven by rising leakage current in the silicon pixel sensors due to Non-Ionizing Energy Loss (NIEL): high-energy hadrons in the space radiation environment displace atoms from the silicon lattice, creating defects that migrate over time and increase the sensor's leakage current in proportion to accumulated particle fluence.",
          "This mechanism is consistent with displacement damage observed elsewhere — for example, the steady increase in leakage current of silicon pixel detectors in the CMS experiment at CERN's LHC.",
        ],
      },
    ],
    figures: [
      { src: creamScd, caption: "Silicon Charge Detector (SCD) module" },
      { src: creamInstrument, caption: "ISS-CREAM instrument during integration" },
      { src: creamPedestalMean, caption: "Pedestal-mean variation over time for SCD1/SCD2" },
      { src: creamChannelPedestal, caption: "Pedestal drift on individual ADC readout channels" },
      { src: creamCmsLeakage, caption: "Measured vs. predicted leakage current, CMS layer-1 modules (CERN)" },
    ],
  },
  {
    slug: "spike-sorting-vlsi",
    title: "Custom Analog VLSI Chip for Neuron Spike Sorting",
    shortTitle: "Neuron Spike-Sorting VLSI",
    category: "IC Design",
    summary:
      "A custom analog VLSI system that detects and classifies spikes from six neurons recorded on a 4-channel tetrode, learning each neuron's signature from teacher signals.",
    cover: spikeSchematic,
    tags: [
      "Analog VLSI",
      "MATLAB",
      "Filter Design",
      "Sample & Hold",
      "Winner-Take-All",
      "ADC",
    ],
    metrics: [
      { value: "6", label: "Neurons classified" },
      { value: "4", label: "Tetrode channels" },
      { value: "5", label: "Signal-chain stages" },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "The goal was to design a custom VLSI chip that detects and sorts spike signals from six neurons measured with a tetrode (four electrode channels). Because each electrode sits at a different distance from each neuron, every neuron produces a unique amplitude \"signature\" across the channels. Six teacher signals indicate when each neuron fires and at what amplitude; the system stores these and uses them to identify firing neurons once the teachers are removed.",
        ],
      },
      {
        heading: "System architecture",
        steps: [
          {
            title: "Raw data analysis",
            body: "Characterized electrode and teacher signals in MATLAB, using FFTs to identify noisy and redundant frequency content.",
          },
          {
            title: "Filtering",
            body: "Chose cut-off frequencies from the FFT analysis and designed a band-pass filter with a series buffer to isolate it from downstream stages.",
          },
          {
            title: "Peak detection",
            body: "Designed a peak-detector circuit (with buffer) to identify when a neuron fires.",
          },
          {
            title: "Peak storage & sampling",
            body: "Sample-and-hold circuit captures spike peaks; a teacher-driven memory circuit, hysteresis comparator and delay circuit decide when to store values.",
          },
          {
            title: "Classification & output",
            body: "Bump circuits and a winner-take-all network select the firing neuron; an ADC and digital logic (AND/OR) present the result as a pulse.",
          },
        ],
      },
    ],
    figures: [
      { src: spikeBlock, caption: "Signal-chain block diagram" },
      { src: spikeSchematic, caption: "Schematic of the full VLSI chip" },
      { src: spikeOutput, caption: "Final neuron output" },
    ],
    links: [
      {
        label: "Project files",
        href: "https://drive.google.com/drive/folders/1OfGtuqvi20FD0zruEOhoHZ4C-ZfBSLUu?usp=drive_link",
      },
    ],
  },
  {
    slug: "fructocare-capsule",
    title:
      "FructoCare: Ingestible Capsule for Autonomous Regulation of Fructose Absorption",
    shortTitle: "FructoCare Ingestible Capsule",
    category: "Hardware",
    affiliation:
      "ENEE 605 · University of Maryland · Fall 2024 · Electronics lead on a 5-person team",
    summary:
      "As electronics lead, I designed the sensing and control electronics for an ingestible capsule that measures fructose in the small intestine and doses a GLUT5 inhibitor through a 75 V electrostatic microvalve — on a custom 8.5 mm rigid-flex PCB.",
    cover: fcFinalAssembly,
    tags: [
      "Rigid-Flex PCB",
      "Component Selection",
      "Amperometric AFE",
      "Low-Power MCU",
      "Boost Converter",
      "Power Budgeting",
      "Biomedical Devices",
    ],
    metrics: [
      { value: "8.5 mm", label: "Rigid-flex PCB diameter" },
      { value: "3 V → 75 V", label: "Boost for microvalve drive" },
      { value: "≈24.5 / 28 mAh", label: "Worst-case charge vs. capacity" },
      { value: "000", label: "Capsule size (26.1 × 10 mm)" },
    ],
    sections: [
      {
        heading: "Motivation",
        paragraphs: [
          "Unregulated fructose consumption is linked to obesity, insulin resistance and fatty liver disease. Fructose is absorbed in the small intestine by the GLUT5 transporter, and GLUT5 inhibitors have been identified as a possible treatment — but there is no technology that measures fructose inside the gut and regulates its absorption.",
          "FructoCare is an ingestible capsule, taken with a high-sugar meal, that senses luminal fructose with a flexible electrochemical sensor and releases a controlled dose of MSNBA (a selective GLUT5 inhibitor) from an elastic PDMS reservoir through an electrostatic microvalve.",
        ],
      },
      {
        heading: "My role: electronics lead",
        paragraphs: [
          "The project was split into five areas — packaging, fructose sensing, drug delivery, electronics and systems integration — each with a lead. I owned the electronics: selecting components, designing the readout and control architecture, laying out the rigid-flex PCB and budgeting power for the capsule.",
        ],
      },
      {
        heading: "Signal chain",
        steps: [
          {
            title: "Power-on",
            body: "A magnetic reed switch turns the capsule on when it is removed from its magnetic holder, connecting two series silver-oxide cells to a low-noise 3 V regulator that supplies every component.",
          },
          {
            title: "Sensing",
            body: "An amperometric analog front-end connects to the sensor's working, counter and reference electrodes through a flat-flex connector, amplifies the sensor current and digitizes it with a 16-bit ADC.",
          },
          {
            title: "Control",
            body: "The microcontroller reads the AFE over I²C and runs the dosing algorithm, mapping fructose concentration to a PWM duty cycle that sets how long the valve stays open.",
          },
          {
            title: "Actuation",
            body: "The PWM signal drives a CMOS analog switch into a boost converter that steps 3 V up to the ~75 V needed to open the electrostatic microvalve, releasing a controlled dose.",
          },
        ],
      },
      {
        heading: "Rigid-flex PCB",
        paragraphs: [
          "Every part had to fit inside a standard 000 capsule. I designed two 4-layer, 1.5 mm-thick circular FR-4 boards, 8.5 mm in diameter. The top board carries the reed switch and sensor FFC, with the AFE underneath for a short sensor path; the bottom board carries the MCU and regulator on top and the boost converter and analog switch below.",
          "The two silver-oxide cells are sandwiched between the boards to save space, and polyimide flex cables with 35 µm copper traces carry power, ground and I²C between them. The flex section also lets the battery pins, sensor and drug-delivery module align and plug in during final assembly.",
        ],
      },
      {
        heading: "Power budget",
        paragraphs: [
          "To size the battery, I computed each component's charge consumption in its active and sleep modes for a worst case: continuous sensing for the ~4 hours the capsule spends in the small intestine, plus 30 minutes of drug delivery. The worst-case total is about 24.5 mAh — within the 28 mAh capacity of the series SR626 cells. Switching to intermittent sensing, with the AFE and MCU sleeping between measurements, would cut consumption substantially.",
        ],
      },
    ],
    tables: [
      {
        caption: "Component selection",
        columns: ["Function", "Part", "Size"],
        rows: [
          ["Sensor analog front-end", "Nisshinbo NJU9101", "4 × 4 mm"],
          ["Microcontroller", "TI MSPM0C1104", "3 × 3 mm"],
          ["Valve switch", "TI SN4599-Q1 (CMOS analog switch)", "2.9 × 2.8 mm"],
          ["3 V regulator", "ADI/Linear LT1761 (low-noise LDO)", "2.9 × 2.8 mm"],
          ["High-voltage boost", "ADI/Linear LT3482 (90 V)", "3 × 3 mm"],
          ["Power-on switch", "Standex-Meder MK24 reed switch", "5 × 2.2 mm"],
          ["Battery", "2 × Seiko SR626 silver-oxide (series)", "6.8 × 2.6 mm each"],
          ["Sensor interface", "Flat-flex connector, 0.5 mm pitch", "—"],
        ],
      },
    ],
    figures: [
      { src: fcFinalAssembly, caption: "Capsule assembly: batteries, rigid-flex PCB, sensor and drug-delivery module inside the shell" },
      { src: fcBlockDiagram, caption: "Electronics block diagram: reed switch, regulator, AFE, MCU, analog switch and boost converter" },
      { src: fcPcbStack, caption: "Rigid-flex PCB stack with batteries sandwiched between the boards" },
      { src: fcPcbAfe, caption: "Top board: reed switch, sensor FFC and AFE" },
      { src: fcPcbMcu, caption: "Bottom board: regulator, MCU, boost converter and analog switch" },
      { src: fcBattery, caption: "Battery integration: series cells, heat-shrink and pins into the PCB" },
      { src: fcSensorFfc, caption: "Sensor backing design and insertion into the flat-flex connector" },
      { src: fcDrugDelivery, caption: "Connecting the electrostatic microvalve to the PCB's high-voltage output" },
      { src: fcProcessFlow, caption: "How the capsule works: ingestion, pH-activated sensing and controlled release" },
      { src: fcDimensions, caption: "Capsule cross-section: 11.7 mm electronics + 13.4 mm drug delivery in a 000 shell" },
    ],
  },
  {
    slug: "teg-solar-array-arcing",
    title:
      "Energy Extraction Using a Thermoelectric Generator from Solar Array Arcing in Space",
    shortTitle: "TEG Energy Harvesting from Solar-Array Arcs",
    category: "Research",
    affiliation: "Published in IEEE Xplore · 2021",
    summary:
      "Modeled a thermoelectric generator in COMSOL to harvest energy from electrostatic arcs on satellite solar panels — quantifying 64.75 mW peak power per arc and 3.13 mJ harvestable energy on a GEO satellite.",
    cover: tegComsol,
    tags: [
      "COMSOL Multiphysics",
      "Plasma Physics",
      "Spacecraft Charging",
      "Energy Harvesting",
    ],
    metrics: [
      { value: "64.75 mW", label: "Max power per arc" },
      { value: "3.13 mJ", label: "Harvestable energy (WINDS)" },
      { value: "26,774", label: "Arcs modeled" },
    ],
    sections: [
      {
        heading: "Problem",
        paragraphs: [
          "Spacecraft charging — the build-up of charge on a satellite's surfaces as it interacts with space plasma — produces electrostatic discharges that can damage electronics and degrade materials. On solar panels, arcs form at \"triple junctions\": the 200 µm–1 mm gaps where the cover insulator, conductor and surrounding plasma meet. Arcing at these junctions is linked to roughly 25% lifetime power degradation in GPS satellites, making the arcs' power and energy profile important to understand.",
        ],
      },
      {
        heading: "Approach",
        paragraphs: [
          "I designed a hybridized thermoelectric generator (TEG) model in COMSOL Multiphysics that integrates with the solar panel to capture the current generated by these arcs and derive their power characteristics. Using plasma physics and Stefan–Boltzmann computations, I found the maximum power dissipated per arc to be 64.75 mW.",
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "Applied to the WINDS geostationary satellite — expected to see 26,774 arcs across 8,760 triple junctions — the model gives 0.117 µJ per arc and 3.13 mJ in total: energy that could be harvested to power on-board microchips and electronics. The work was presented at the 7th International Conference on Space Science and Communication (2021) and published in IEEE Xplore.",
        ],
      },
    ],
    figures: [
      { src: tegTripleJunction, caption: "Triple junction between solar cells with the TEG module" },
      { src: tegArcResponse, caption: "Typical arc current response" },
      { src: tegComsol, caption: "COMSOL temperature distribution of the TEG" },
      { src: tegArcCurrentTemp, caption: "Arc current vs. temperature for the primary arc" },
    ],
    links: [
      {
        label: "Read the paper",
        href: "https://www.researchgate.net/publication/360493163_Energy_Extraction_Using_Thermoelectric_Generator_from_Solar_Array_Arcing_in_Space_Applications",
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Publications                                                        */
/* ------------------------------------------------------------------ */

export const publications = [
  {
    title:
      "Energy Extraction Using Thermoelectric Generator from Solar Array Arcing in Space Applications",
    venue:
      "7th International Conference on Space Science and Communication, 2021 · IEEE Xplore",
    href: "https://www.researchgate.net/publication/360493163_Energy_Extraction_Using_Thermoelectric_Generator_from_Solar_Array_Arcing_in_Space_Applications",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Analog & Mixed-Signal IC",
    items: [
      "OTA / amplifier design",
      "Biasing & compensation",
      "Common-centroid layout",
      "Post-layout verification",
      "Sample-and-hold, comparators",
      "Analog VLSI",
    ],
  },
  {
    group: "Hardware & Systems",
    items: [
      "Rigid-flex PCB design",
      "Sensor front-ends",
      "Detector readout electronics",
      "Radiation effects in silicon",
      "Biomedical devices",
    ],
  },
  {
    group: "Tools",
    items: [
      "Cadence Virtuoso",
      "TSMC 180 nm PDK",
      "COMSOL Multiphysics",
      "MATLAB",
    ],
  },
];
