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

import radarPoster from "@/assets/radar/poster-presentation.jpg";
import radarTreeVsLinear from "@/assets/radar/tree-vs-linear.png";
import radarGainBeamwidth from "@/assets/radar/array-gain-beamwidth.png";
import radarScanPowerTime from "@/assets/radar/scan-power-time.png";
import radarTxSensitivity from "@/assets/radar/tx-power-sensitivity.png";
import radarBfArchitectures from "@/assets/radar/bf-architectures.png";
import radarAfeCompression from "@/assets/radar/afe-compression.png";
import radarBfPower from "@/assets/radar/bf-power-breakdown.png";
import radarSnrAdc from "@/assets/radar/snr-vs-adc.png";
import rficBlockDiagram from "@/assets/rfic/system-block-diagram.png";
import rficComparatorSchematic from "@/assets/rfic/comparator-schematic.png";
import rficComparatorOutput from "@/assets/rfic/comparator-output.png";
import rficComparatorLayout from "@/assets/rfic/comparator-layout.png";
import rficComparatorPostLayout from "@/assets/rfic/comparator-post-layout.png";
import rficEncoderDiagram from "@/assets/rfic/encoder-block-diagram.png";
import rficBackscatterLayout from "@/assets/rfic/backscatter-layout.png";
import rficBackscatterOutput from "@/assets/rfic/backscatter-output.png";
import creamScd from "@/assets/cream/scd.jpg";
import creamInstrument from "@/assets/cream/instrument.jpg";
import creamCmsLeakage from "@/assets/cream/cms-leakage.png";
import creamDetectorPedestals from "@/assets/cream/detector-pedestals.png";
import creamReadoutChain from "@/assets/cream/readout-chain.png";
import creamNiel from "@/assets/cream/niel-displacement.png";
import creamScdLayout from "@/assets/cream/scd-layout.png";
import creamChannelFit from "@/assets/cream/channel-fit.png";
import creamSlopeHistogram from "@/assets/cream/slope-histogram.png";
import creamBoardRates from "@/assets/cream/board-rates.png";

import spikeBlock from "@/assets/spike/block-diagram.png";
import spikeElectrodes from "@/assets/spike/electrode-signals.png";
import spikeFft from "@/assets/spike/fft.png";
import spikeFilterResponse from "@/assets/spike/filter-response.png";
import spikeFiltered from "@/assets/spike/filtered-output.png";
import spikePeakDetector from "@/assets/spike/peak-detector.png";
import spikeSampleHold from "@/assets/spike/sample-hold-output.png";
import spikeBump from "@/assets/spike/bump-circuit.png";
import spikeWta from "@/assets/spike/wta-circuit.png";
import spikeOutput from "@/assets/spike/neuron-output.png";
import spikeChip from "@/assets/spike/chip-schematic.png";

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
    "I am a fourth-year Ph.D. student in Electrical and Electronics Engineering at the University of Maryland, College Park, specializing in microelectronics. My research focuses on the design of analog and mixed-signal integrated circuits for biomedical, sensing and space-exploration applications.",
    "My primary interest is electronics for spaceborne instrumentation, including payloads, particle detectors and CubeSats. This interest began with my early exposure to space science in Dhaka, Bangladesh, and has guided my work from undergraduate space-research projects through my doctoral research.",
    "My current doctoral research, part of the SRC JUMP 2.0 CogniSense center, focuses on power-efficient beamforming and beam-scanning architectures for millimeter-wave FMCW radar. My other project experience includes analog VLSI for neural-signal processing, rigid-flex PCB design for ingestible medical devices, radiation-effects analysis for an instrument aboard the International Space Station, and energy harvesting from electrostatic arcing on satellite solar arrays.",
  ],
  /** Longer personal statement shown on the About page */
  statement: [
    "My research spans analog, mixed-signal and VLSI design in applications such as biomedical sensing, wireless sensing and space exploration. I have a particularly strong interest in electronics and integrated-circuit systems for spaceborne instrumentation, payloads and particle detectors, as well as space missions and CubeSat design.",
    "My interest in space science began in my teenage years, through documentaries such as Journey to the Edge of the Universe and the broadcast of the Apollo 11 Moon landing. A visit to the only space observatory in my hometown of Dhaka, Bangladesh, strengthened that interest and motivated me to pursue research that contributes to our understanding of the origin and evolution of the universe.",
    "During my undergraduate studies in electronics engineering, I worked on several space-exploration projects, through which I identified my research focus: analog integrated circuits and electronic systems for the instruments and detectors used in planetary exploration, astrophysics and astronomy. I am continuing this work in my doctoral research.",
    "I am also interested in other areas of electrical engineering, particularly analog and mixed-signal circuits for biomedical sensing and implantable technologies.",
  ],
  interests: [
    "mmWave radar systems",
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
  /** Set when the cover is a photograph: it fills its tile instead of being shown whole on white. */
  coverIsPhoto?: boolean;
  tags: string[];
  metrics: Metric[];
  sections: Section[];
  tables?: SpecTable[];
  figures: Figure[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "cognisense-mmwave-radar",
    title:
      "Power-Efficient Beamforming and Beam Scanning for mmWave FMCW Radar",
    shortTitle: "CogniSense: Low-Power mmWave Radar",
    category: "Research",
    affiliation:
      "SRC JUMP 2.0 CogniSense Center · IBIS Lab, University of Maryland · with Prof. Pamela Abshire · Current Ph.D. research",
    summary:
      "Current Ph.D. research on reducing the power of 77 GHz FMCW radar for autonomous navigation, from hierarchical tree-search beam scanning on the transmitter to hybrid receiver beamforming that compresses antenna signals in the analog domain before digitization.",
    cover: radarPoster,
    coverIsPhoto: true,
    tags: [
      "mmWave FMCW Radar",
      "Beamforming",
      "System-Level Power Modeling",
      "RF Transmitter Circuits",
      "Compute-in-Memory",
      "MATLAB",
      "Ansys HFSS",
    ],
    metrics: [
      { value: "80–96%", label: "Average search-time reduction with tree search (8–32 TX)" },
      { value: "12–60%", label: "Average transmitted-power saving in sparse scenes" },
      { value: "17–26%", label: "Receiver power reduction with hybrid beamforming" },
      { value: "77 GHz", label: "Automotive FMCW radar band" },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Millimeter-wave FMCW radars for automotive sensing, drone surveillance and collision avoidance rely on large antenna arrays and beamforming to overcome severe path loss. As arrays grow for finer angular resolution, the power spent on beam scanning, RF front-end circuitry and data conversion becomes a central design constraint.",
          "This work is part of CogniSense, one of seven centers in the Semiconductor Research Corporation's JUMP 2.0 program, sponsored by DARPA. My research analyzes radar power at both the system level (scanning strategy and beamforming architecture) and the circuit level (transmitter and receiver components), and is summarized in two manuscripts, one of which is under review in IEEE Transactions on Radar Systems. I presented the tree-search and transmitter-power work at the CogniSense Annual Review at Georgia Tech in 2025.",
        ],
      },
      {
        heading: "Research objectives",
        bullets: [
          "Determine when hierarchical tree-search beam scanning is faster and more power-efficient than conventional linear scanning, and how the advantage depends on array size and scene sparsity.",
          "Connect scanning-level savings to transmitter circuit power, identifying which RF building blocks dominate the DC power budget.",
          "Quantify the power and spatial-flexibility tradeoffs of analog, fully digital and hybrid receiver beamforming, including the effect of ADC resolution and quantization noise.",
          "Evaluate adaptive analog feature extraction and compression before the ADCs as a way to reduce receiver power while preserving multiple spatial measurements.",
        ],
      },
      {
        heading: "Approach",
        steps: [
          {
            title: "Antenna and array modeling",
            body: "Modeled patch antennas and phased arrays in Ansys HFSS to characterize gain, beamwidth, return loss and beam steering as the number of elements increases, informing the array-gain and beamwidth scaling used in the system models.",
          },
          {
            title: "Tree search vs. linear search",
            body: "Built analytical models from the radar equation and Marcum-Q detection statistics (99% detection probability, 10% false-alarm probability) to compare a coarse-to-fine tree search, which starts with a broad 2-TX beam and refines with larger arrays only where targets are detected, against exhaustive linear scanning as a function of scene sparsity.",
          },
          {
            title: "Transmitter circuit power",
            body: "Extended the analysis to transmitter DC power by modeling the sensitivity of a 77 GHz transmitter to VCO biasing, PLL loop bandwidth, injection-locked frequency-tripler injection power and power-amplifier efficiency, using published circuit implementations as references.",
          },
          {
            title: "Beamforming power models",
            body: "Developed component-level power models in a MATLAB radar simulation framework for LNAs, mixers and LO distribution, baseband amplifiers and data converters, and used an additive quantization-noise model to relate converter resolution to effective SNR for an eight-element array.",
          },
          {
            title: "Hybrid receiver with analog feature extraction",
            body: "Modeled a hybrid receiver that compresses eight antenna signals into four or two feature channels before digitization using an adaptive mixed-signal compute-in-memory engine (AdaAFE-CIM), whose SRAM-based current-domain vector-matrix multiplier tracks the dominant spatial subspace with Oja's algorithm.",
          },
        ],
      },
      {
        heading: "Key findings",
        bullets: [
          "In a sparse scene (0.074% object-occurrence probability), tree search reduced average transmitted power by 11.5%, 59.0% and 59.6% and average search time by 79.9%, 91.6% and 95.8% for 8-, 16- and 32-TX arrays.",
          "Tree search remains more power-efficient than linear search as long as fewer than about 9.4%, 51.6% and 49.2% of scanned sectors contain targets for the 8-, 16- and 32-TX configurations.",
          "Including circuit power, an 8-TX tree search has a total power advantage when transmitter DC power is at least 3.18× the radiated power. VCO biasing and power-amplifier efficiency dominate the transmitter's DC power sensitivity, while PLL loop bandwidth and tripler injection power have comparatively small effects.",
          "For an eight-element receiver with 8-bit ADCs, fully digital beamforming consumes 762.2 mW, while analog beamforming consumes 165.3 mW but provides only one spatial measurement per acquisition. Hybrid compression to four or two channels lowers receiver power to 632.4 mW (−17.0%) and 565.9 mW (−25.8%) relative to digital beamforming, including a 3.32 mW feature-extraction overhead.",
          "Normalized per retained spatial direction, digital beamforming is the most efficient (95.3 mW per direction), and the benefit of pre-ADC compression falls to about 1–2% with 4-bit ADCs because converter power grows exponentially with resolution.",
        ],
      },
      {
        heading: "Takeaways",
        paragraphs: [
          "Power-efficient radar sensing cannot be optimized at a single level of the design. The advantage of hierarchical scanning depends on scene sparsity, array size and the efficiency of the transmitter circuits, and no single receiver beamforming architecture minimizes both total power and power per spatial direction. Hybrid architectures that combine analog-domain preprocessing with digital flexibility offer a scalable path as radar arrays grow, particularly when high-resolution converters are required.",
        ],
      },
    ],
    tables: [
      {
        caption: "Tree search vs. linear search (sparse scene)",
        columns: ["Array", "Avg. power saving", "Avg. time reduction", "Max. sparsity ρmax"],
        rows: [
          ["8 TX", "11.5%", "79.9%", "≈ 9.4%"],
          ["16 TX", "59.0%", "91.6%", "≈ 51.6%"],
          ["32 TX", "59.6%", "95.8%", "≈ 49.2%"],
        ],
      },
      {
        caption: "Eight-element receiver power (8-bit ADCs)",
        columns: ["Architecture", "Total power", "Spatial directions", "Power / direction"],
        rows: [
          ["Analog BF", "165.3 mW", "1", "165.3 mW"],
          ["Digital BF", "762.2 mW", "8", "95.3 mW"],
          ["Hybrid BF (m = 4)", "632.4 mW", "4", "158.1 mW"],
          ["Hybrid BF (m = 2)", "565.9 mW", "2", "282.9 mW"],
        ],
      },
    ],
    figures: [
      { src: radarPoster, caption: "Presenting \"Investigating Power Trade-offs in Linear and Tree Search in FMCW Radar\" at the CogniSense Annual Review, Georgia Tech, 2025" },
      { src: radarTreeVsLinear, caption: "Tree-search (a) vs. linear-search (b) beam scanning across angular regions" },
      { src: radarGainBeamwidth, caption: "Array gain and beamwidth vs. number of antenna elements" },
      { src: radarScanPowerTime, caption: "Transmitted power per scan, total scan power and search duration vs. array size" },
      { src: radarTxSensitivity, caption: "Sensitivity of transmitter DC power to VCO biasing, PLL bandwidth, tripler injection power and PA efficiency" },
      { src: radarBfArchitectures, caption: "Analog TX/RX, fully digital RX and hybrid RX beamforming architectures" },
      { src: radarAfeCompression, caption: "Analog feature extraction and compression ahead of the ADCs (inset: AFE-CIM concept from prior work)" },
      { src: radarSnrAdc, caption: "Effective SNR vs. ADC resolution under the additive quantization-noise model" },
      { src: radarBfPower, caption: "Receiver power breakdown for analog, digital and hybrid beamforming" },
    ],
  },
  {
    slug: "rf-energy-harvesting-backscatter-ic",
    title:
      "Batteryless RF Energy-Harvesting and Backscatter IC for RFID Tags",
    shortTitle: "RF Energy-Harvesting & Backscatter IC",
    category: "IC Design",
    affiliation:
      "ENEE 719M: Analog and Mixed-Signal Design · University of Maryland · Team of three",
    summary:
      "A 180 nm CMOS power-management and backscatter chip for batteryless RFID tags. I designed the hysteresis comparator that switches the chip between energy harvesting and communication, and laid out the backscatter block's reference, clock and digital control circuits.",
    cover: rficComparatorLayout,
    tags: [
      "Cadence Virtuoso",
      "180 nm CMOS",
      "Hysteresis Comparator",
      "Custom Layout",
      "DRC / LVS",
      "Post-Layout (PEX) Simulation",
      "Low-Power Mixed-Signal",
    ],
    metrics: [
      { value: "0.9 / 0.6 V", label: "Comparator trip points (VH / VL)" },
      { value: "≈ 20 mV", label: "Post-layout shift in trip points" },
      { value: "≈ 522 kHz", label: "Ring-oscillator clock, within 0.2 kHz after PEX" },
      { value: "−25 dBm", label: "Rectifier sensitivity (system result)" },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "Batteryless RFID tags and low-power IoT nodes must operate from very small amounts of ambient RF energy. This project co-designed the antenna and power-management electronics of an energy-harvesting tag, rather than optimizing each block in isolation, so that the rectifier is designed for the non-ideal impedance the antenna actually presents.",
          "The system combines a planar inverted-F antenna with a 24-transistor Dickson rectifier, an RF-tunable capacitor array for multiband (2.4–7 GHz) matching, a beta-multiplier voltage reference, a hysteresis comparator, and a backscatter block that transmits tag data by modulating the antenna impedance. The rectifier reached −25 dBm sensitivity and 8.2% power-conversion efficiency after parasitic extraction.",
        ],
      },
      {
        heading: "My contributions",
        bullets: [
          "Designed the hysteresis comparator for the power-management unit end to end: schematic, simulation, custom layout, DRC/LVS verification and post-layout (PEX) simulation.",
          "Created and verified custom layouts for the backscatter block, including the PTAT current reference, ring oscillator, Mod-3 counter, D flip-flops and mixed-signal control circuitry, with DRC/LVS-clean physical verification and post-layout validation.",
        ],
      },
      {
        heading: "Hysteresis comparator",
        paragraphs: [
          "The comparator is the central control element of the power-management unit. It monitors the voltage on the storage capacitor and toggles a PMOS switch to move the chip between the energy-harvesting phase (charging the capacitor) and the communication phase (powering the backscatter block).",
          "The design uses a PMOS input stage, an NMOS current mirror and a PMOS load with positive feedback. The current mirror transfers the input-stage signal to the load, and the positive feedback creates the bistable behavior that sets two distinct trip points: VH = 0.9 V for the transition to communication and VL = 0.6 V for the return to harvesting. Hysteresis prevents the chip from oscillating between modes as the stored voltage fluctuates.",
          "After layout and parasitic extraction, both trip points shifted by only about 20 mV, showing that the layout preserved the intended hysteresis window.",
        ],
      },
      {
        heading: "Backscatter block layout",
        paragraphs: [
          "The backscatter block transmits hard-wired tag data by on-off keying: an NMOS switch modulates the antenna impedance according to the encoded bit stream. Because the rectified supply is not constant, a PTAT current reference biases a three-stage ring oscillator to produce a stable clock, and a frequency divider built from a Mod-3 counter and D flip-flops derives the additional clocks. The digital encoder combines a preamble with data registers through a multiplexer and a parallel-in serial-out register, and Manchester-encodes the output.",
          "In post-layout simulation, the ring-oscillator frequency moved only from 522.0 kHz to 521.8 kHz, and a glitch present in the pre-layout Manchester-encoded output did not appear after extraction.",
        ],
      },
      {
        heading: "Takeaways",
        paragraphs: [
          "The project reinforced how layout decisions carry through to circuit behavior in low-power mixed-signal design. Careful matching and routing kept the comparator's trip points and the clock frequency within a few percent of their schematic targets, which is essential when the entire chip runs from harvested energy with no margin for drift.",
        ],
      },
    ],
    figures: [
      { src: rficBlockDiagram, caption: "System block diagram: energy harvester and power-management unit with the backscatter block" },
      { src: rficComparatorSchematic, caption: "Hysteresis comparator schematic" },
      { src: rficComparatorOutput, caption: "Simulated comparator response showing the hysteresis trip points" },
      { src: rficComparatorLayout, caption: "Custom layout of the hysteresis comparator" },
      { src: rficComparatorPostLayout, caption: "Post-layout (PEX) simulation of the comparator" },
      { src: rficEncoderDiagram, caption: "Digital encoder: preamble and data registers, PISO and Manchester encoder" },
      { src: rficBackscatterLayout, caption: "Layout of the backscatter block" },
      { src: rficBackscatterOutput, caption: "Backscatter block waveforms: main clock, divided clocks, packet and Manchester-encoded data" },
    ],
  },
  {
    slug: "iss-cream-pedestal",
    title:
      "Investigating Pedestal Build-up in the ISS-CREAM Silicon Charge Detector",
    shortTitle: "ISS-CREAM Pedestal Build-up",
    category: "Research",
    affiliation:
      "UMD Cosmic Ray Physics Group · Supervisor: Prof. Eun-Suk Seo · Ongoing research",
    summary:
      "Investigating why the pedestal (baseline offset) of the Silicon Charge Detector on the ISS-CREAM cosmic-ray instrument rose steadily while in orbit on the International Space Station, through radiation-effects analysis, a review of the readout electronics and a hierarchical analysis of flight data.",
    cover: creamScd,
    tags: [
      "Radiation Effects (NIEL)",
      "Detector Readout Electronics",
      "Flight-Data Analysis",
      "Linear Regression",
      "CERN ROOT",
      "MATLAB",
    ],
    metrics: [
      { value: "24 · 84", label: "Sensor ladders · ADC chips analyzed" },
      { value: "27–60", label: "Pedestal rise across boards (ADC counts / yr)" },
      { value: "2.2×", label: "Spread in rise rate between readout boards" },
      { value: "2017–2019", label: "ISS-CREAM operation on the ISS" },
    ],
    sections: [
      {
        heading: "Background",
        paragraphs: [
          "The ISS-Cosmic Ray Energetics And Mass (ISS-CREAM) instrument was developed by the UMD Cosmic Ray Physics Group in collaboration with NASA to measure the elemental spectra of high-energy cosmic rays from protons to iron (Z = 1–26). After a series of balloon missions, it operated on the International Space Station from 2017 to 2019.",
          "The Silicon Charge Detector (SCD) measures the charge of incoming particles using silicon pixel sensors read out through analog front-end electronics and ADCs. Pedestal runs, recorded every 10 minutes to 1 hour, measure the baseline offset on each readout channel, which is subtracted to recover the true particle signal. While the pedestals of the other detectors (TCD, BCD and calorimeter) stayed constant within a few tens of ADC counts, the pedestal means of both SCD layers rose steadily throughout operation.",
        ],
      },
      {
        heading: "Research objectives",
        bullets: [
          "Determine the cause of the cumulative pedestal build-up observed only in the SCD.",
          "Evaluate whether radiation-induced leakage current in the silicon sensors, caused by Non-Ionizing Energy Loss (NIEL), can explain a rise that persists through the detector's regular power cycling.",
          "Assess alternative explanations in the readout chain, including the AC-coupling capacitors between the sensors and the front-end electronics.",
          "Localize the effect within the detector hierarchy (quadrant, ladder, readout board, ADC chip and channel) using flight data.",
        ],
      },
      {
        heading: "Approach",
        steps: [
          {
            title: "Radiation-effects analysis",
            body: "Studied NIEL displacement damage in silicon, where the increase in bulk leakage current scales with the 1 MeV-equivalent hadron fluence (ΔI = α·Φeq·V). Reviewed evidence from the CMS and ATLAS pixel detectors, proton-irradiation tests of silicon drift detectors for ESA's LOFT mission, SiPMs for NASA missions and Hamburg-model predictions for Mars, and compared their radiation environments with the ISS orbit (370–460 km, 51.6° inclination).",
          },
          {
            title: "Readout-electronics review",
            body: "Examined the SCD's AC-coupled front end (33 nF, 630 V X7R multilayer ceramic coupling capacitors, followed by a preamplifier and pulse shaper) and evaluated capacitor degradation mechanisms, including voltage stress, rated lifetime and dielectric aging, as possible sources of the build-up.",
          },
          {
            title: "Hierarchical flight-data analysis",
            body: "Mapped the 2017 pedestal data onto the detector structure (four quadrants, 24 ladders, readout (ACP) boards of seven ADCs each and 84 ADC chips of 32 channels), plotted daily, monthly and yearly trends, and fitted a linear regression to every channel to extract its rate of pedestal rise. Compared the distributions of these rates across ADC chips, ladders and boards using CERN ROOT and MATLAB.",
          },
        ],
      },
      {
        heading: "Key findings",
        bullets: [
          "The pedestal rise is cumulative and present in every quadrant, ladder and ADC chip examined, with similar month-to-month behavior across channels, including a common drop in pedestal RMS in October 2017.",
          "The rate of rise differs systematically between readout boards: the four ACP boards analyzed averaged 27.0, 31.4, 48.9 and 59.7 ADC counts per year, a spread of more than 2×.",
          "Within each board, the seven ADC chips show smaller but measurable differences (for example, 24–29 counts per year on board 1 and 57–65 on board 4).",
          "Because the sensors are AC-coupled, DC leakage current should be blocked before the readout, and the pedestal noise did not increase alongside the mean. Both observations argue against sensor leakage current alone as the cause.",
        ],
      },
      {
        heading: "Takeaways",
        paragraphs: [
          "NIEL-induced leakage current is a well-documented, cumulative effect that is unaffected by power cycling, making it a strong initial hypothesis. However, the AC-coupled readout and the board-to-board variation in rise rate indicate that the build-up depends on the readout boards or their location in the detector, not only on the sensors. Ongoing work focuses on correlating the rise rates with board-level parameters and quantifying the uncertainty of the fitted rates to isolate the source.",
        ],
      },
    ],
    figures: [
      { src: creamScd, caption: "Silicon Charge Detector (SCD) module" },
      { src: creamInstrument, caption: "ISS-CREAM instrument during integration" },
      { src: creamDetectorPedestals, caption: "Pedestal-mean history of the ISS-CREAM detectors: only SCD1/SCD2 (d) rise steadily (Yoon et al.)" },
      { src: creamReadoutChain, caption: "AC-coupled SCD readout: detector bias, coupling capacitor, preamplifier and pulse shaper" },
      { src: creamNiel, caption: "Displacement-damage process in the silicon lattice underlying NIEL (after Todd & Uznanski, CERN)" },
      { src: creamCmsLeakage, caption: "Measured vs. predicted NIEL leakage current in CMS layer-1 pixel modules (CERN)" },
      { src: creamScdLayout, caption: "SCD layout: 24 ladders, readout (ACP) boards of seven ADCs, 16 channels per sensor" },
      { src: creamChannelFit, caption: "Linear fit of pedestal mean over time for a single channel" },
      { src: creamSlopeHistogram, caption: "Distribution of channel rise rates for ADC chips on ACP board 1" },
      { src: creamBoardRates, caption: "Mean rise rate per ADC chip (with error bars) on four ACP boards" },
    ],
  },
  {
    slug: "spike-sorting-vlsi",
    title: "Custom Analog VLSI Chip for Neuron Spike Sorting",
    shortTitle: "Neuron Spike-Sorting VLSI",
    category: "IC Design",
    affiliation:
      "ENEE 611: Integrated Circuits Design and Analysis · University of Maryland · Individual project",
    summary:
      "Designed a transistor-level analog VLSI system that detects and classifies spikes from six neurons recorded on a four-channel tetrode, learning each neuron's amplitude signature from teacher signals and producing a digital output for each neuron.",
    cover: spikeBump,
    tags: [
      "Analog VLSI",
      "Subthreshold Design",
      "Gm-C Filters",
      "Winner-Take-All",
      "SKY130 PDK",
      "Xschem / ngspice",
      "MATLAB",
    ],
    metrics: [
      { value: "6 / 4", label: "Neurons classified / tetrode channels" },
      { value: "500 Hz–4 kHz", label: "Band-pass filter passband" },
      { value: "~500", label: "Transistors in the full system" },
      { value: "24", label: "Bump-circuit similarity comparators" },
    ],
    sections: [
      {
        heading: "Overview",
        paragraphs: [
          "The objective was to design a custom analog VLSI chip that detects and sorts spikes from six neurons recorded with a tetrode (four electrode channels). Because each electrode sits at a different distance from each neuron, every neuron produces a distinct amplitude signature across the four channels. During training, six teacher signals indicate when each neuron fires; the chip stores the corresponding spike amplitudes and then uses them to identify which neuron is firing once the teacher signals are removed.",
          "Each electrode channel is processed by an identical analog front-end (filter, peak detector, comparator, sample-and-hold and memory), and a shared classification stage compares live spikes against the stored signatures.",
        ],
      },
      {
        heading: "Signal analysis",
        paragraphs: [
          "I first characterized the four electrode recordings and six teacher signals in MATLAB. FFT analysis after DC removal showed large 60 Hz power-line interference and significant low-frequency content below ~500 Hz, along with low-amplitude high-frequency noise above ~4 kHz. These results set the specification for a 500 Hz–4 kHz band-pass filter.",
        ],
      },
      {
        heading: "Circuit design",
        steps: [
          {
            title: "Band-pass filter",
            body: "First-order transconductance-amplifier (Gm-C) high-pass and low-pass sections in cascade, with the high-pass first to avoid saturation from large low-frequency interference. Initial bias points were derived from ωc = Gm/C and the subthreshold relation Gm = κIb/UT (κ ≈ 0.68, extracted from device characterization); final cut-offs were set through AC analysis. Unity-gain buffers isolate each stage.",
          },
          {
            title: "Peak detection",
            body: "A transconductance-amplifier peak detector with a reset transistor captures spike peaks on each filtered channel; bias voltages were tuned for sharp detection.",
          },
          {
            title: "Training memory",
            body: "Six memory cells per electrode (24 in total) store spike amplitudes on 10 pF capacitors through pFET switches gated by the teacher signals.",
          },
          {
            title: "Triggered sample-and-hold",
            body: "Without teacher signals, a hysteresis comparator (1.78 V threshold) detects spikes and triggers sampling. An inverter-chain delay aligns sampling with the trailing edge of each event to account for peak-detector decay, and a delayed reset clears the 10 pF hold capacitor for the next event.",
          },
          {
            title: "Classification",
            body: "Bump circuits measure the similarity between each sampled amplitude and each stored signature. pFET current mirrors sum the bump currents for each neuron across all four electrodes, and a six-input winner-take-all circuit selects the neuron with the largest total current.",
          },
          {
            title: "Digital output",
            body: "The winner-take-all output is converted to 5 V logic levels. A four-input OR gate combines the electrode spike triggers and gates six AND gates, producing one digital output per neuron.",
          },
        ],
      },
      {
        heading: "Results",
        paragraphs: [
          "During training, the digital outputs closely tracked their corresponding teacher signals. In the test period (from ≈355 ms, after the teacher signals end), the chip produced a classified firing sequence across the six neuron outputs. Initial overlap between neuron outputs was reduced by tuning the bump-circuit biases and transistor sizing; some residual overlap between neurons remained, which would be the focus of further optimization.",
          "Estimated average power for the full system is approximately 10.8 mW, dominated by the bump circuits, memory, sample-and-hold and delay stages.",
        ],
      },
    ],
    tables: [
      {
        caption: "Transistor count and estimated power",
        columns: ["Block", "Transistors", "Avg. power"],
        rows: [
          ["Band-pass filters", "40", "0.06 µW"],
          ["Filter buffers", "20", "0.02 µW"],
          ["Peak detectors", "28", "3.1 µW"],
          ["Hysteresis comparator", "48", "1.1 µW"],
          ["Delay circuits", "32", "1.0 mW"],
          ["Sample-and-hold", "64", "1.5 mW"],
          ["Memory", "54", "2.0 mW"],
          ["Bump circuits", "120", "6.0 mW"],
          ["Winner-take-all", "13", "< 0.01 µW"],
          ["Analog-to-digital conversion", "24", "< 0.01 µW"],
          ["AND / OR logic", "54", "0.3 mW"],
          ["Total", "497", "≈ 10.8 mW"],
        ],
      },
    ],
    figures: [
      { src: spikeBlock, caption: "Signal chain for one electrode channel (repeated for all four)" },
      { src: spikeElectrodes, caption: "Raw tetrode recordings, electrode channels 1–4 (MATLAB)" },
      { src: spikeFft, caption: "Amplitude spectrum of electrode channel 1 used to set the filter passband" },
      { src: spikeFilterResponse, caption: "Simulated frequency response of the band-pass filter" },
      { src: spikeFiltered, caption: "Electrode channel 2 before (red) and after (blue) filtering" },
      { src: spikePeakDetector, caption: "Peak-detector schematic with output buffer" },
      { src: spikeSampleHold, caption: "Sample-and-hold output for electrode 1 with teacher signals" },
      { src: spikeBump, caption: "Bump circuit comparing sampled and stored amplitudes" },
      { src: spikeWta, caption: "Six-input winner-take-all circuit" },
      { src: spikeOutput, caption: "Digital outputs for the six neurons during training and test" },
      { src: spikeChip, caption: "Top-level schematic of the complete system" },
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

export const publications: { title: string; venue: string; href?: string }[] = [
  {
    title:
      "Tree Search for Power-Efficient Sparse Object Detection in FMCW Radar",
    venue:
      "M. Rahman and P. Abshire · Under review, IEEE Transactions on Radar Systems (T-RS)",
  },
  {
    title:
      "Power Tradeoffs for Analog, Digital, and Hybrid Beamforming Architectures in FMCW Radars",
    venue: "M. Rahman and P. Abshire · Manuscript",
  },
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
      "Subthreshold & Gm-C circuits",
      "Hysteresis comparators",
    ],
  },
  {
    group: "Hardware & Systems",
    items: [
      "Rigid-flex PCB design",
      "Sensor front-ends",
      "Detector readout electronics",
      "Radiation effects in silicon",
      "mmWave FMCW radar & beamforming",
      "System-level power modeling",
      "Biomedical devices",
    ],
  },
  {
    group: "Tools",
    items: [
      "Cadence Virtuoso",
      "TSMC 180 nm PDK",
      "SkyWater SKY130 PDK",
      "Ansys HFSS",
      "Xschem / ngspice",
      "COMSOL Multiphysics",
      "MATLAB",
    ],
  },
];
