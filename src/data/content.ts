/**
 * All site content lives here. Edit this file to update the website —
 * no layout code needs to change to add a project, skill or publication.
 */
import type { StaticImageData } from "next/image";

import headshot from "@/assets/headshot.jpg";

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

import fcConcept from "@/assets/fructocare/concept.png";
import fcSchematic from "@/assets/fructocare/system-schematic.png";
import fcAssembly from "@/assets/fructocare/capsule-assembly.png";
import fcPcbAfe from "@/assets/fructocare/pcb-afe.png";
import fcPcbMcu from "@/assets/fructocare/pcb-mcu.png";

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
    summary:
      "Electronics for an ingestible capsule that senses fructose in the small intestine and releases a GLUT5 inhibitor through an electrostatic microvalve — built on a custom rigid-flex PCB.",
    cover: fcAssembly,
    tags: [
      "Rigid-Flex PCB",
      "Biomedical Devices",
      "Sensor AFE",
      "MCU",
      "Power Management",
    ],
    metrics: [
      { value: "8.5 mm", label: "Capsule diameter" },
      { value: "Rigid-flex", label: "Custom PCB stack" },
      { value: "Closed-loop", label: "Sense → dose control" },
    ],
    sections: [
      {
        heading: "Motivation",
        paragraphs: [
          "Unregulated fructose consumption is linked to obesity. GLUT5 is the protein responsible for fructose absorption in the body, and GLUT5 inhibitors have been identified as a possible route of treatment. FructoCare is an ingestible device that autonomously limits fructose absorption during high-sugar meals.",
        ],
      },
      {
        heading: "System design",
        paragraphs: [
          "The capsule contains a custom rigid-flex printed circuit board that reads a flexible fructose sensor designed to operate in the small intestine. The PCB stack includes a sensor analog front-end, microcontroller, regulator, converter and a reed switch for activation, powered by on-board batteries.",
          "The board drives an electrostatic microvalve on an elastic balloon reservoir containing MSNBA, a GLUT5 inhibitor. Based on the sensed fructose concentration, the controller releases a precise dose — regulating absorption while limiting malabsorption.",
        ],
      },
    ],
    figures: [
      { src: fcConcept, caption: "Device concept and control flow in the small intestine" },
      { src: fcSchematic, caption: "System-level electronics schematic" },
      { src: fcAssembly, caption: "Capsule electronics stack (8.5 mm diameter)" },
      { src: fcPcbAfe, caption: "Rigid-flex PCB: reed switch, FFC and sensor AFE" },
      { src: fcPcbMcu, caption: "Rigid-flex PCB: regulator, MCU, converter and switch" },
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
