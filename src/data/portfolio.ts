export interface Portfolio {
  title: string;
  description: string;
  imageUrl?: string;
  projectUrl?: string;
  codeUrl?: string;
  technologies?: string[];
}

export const portfolioData: Portfolio[] = [
   {
    title: "Topologically Ordered States in Qiskit",
    description:
      "Implemented topological ordering and ground state preparation in Qiskit, simulating toric code systems up to 31 qubits for quantum error correction research.",
    technologies: ["Qiskit", "Quantum Computing", "Python"],
    codeUrl: "https://github.com/Astraflaneur/ToricCodeSimulation",
    imageUrl: "/images/toric-code.png",
  },
  {
    title: "FV-PINNs",
    description:
      "Combined Kuraganov–Tadmor flux solver with Physics-Informed Neural Networks to accurately handle shock discontinuities. Validated on shock-tube problems with improved stability and accuracy.",
    technologies: ["Python", "PINNs", "Numerical Methods"],
    codeUrl: "https://github.com/Astraflaneur/PINN-KT",
    imageUrl: "/images/BLP-time.png",
  },
  {
    title: "αΩ Galactic Dynamo Simulation",
    description:
      "Investigated finite difference scheme sensitivity in galactic dynamo simulations. Explored how numerical stability and accuracy affect large-scale astrophysical magnetic field modeling.",
    technologies: ["C++", "Numerical Simulation", "Astrophysics"],
    codeUrl: "https://github.com/Astraflaneur/GalacticDynamos",
    imageUrl: "/images/galac.jpg",
    projectUrl: "https://astraflaneur.github.io/GalacticDynamos/",
  },
  {
    title: "Quantum Dot Dynamics Simulator",
    description:
      "Built an interactive simulator for quantum dot properties with real-time parameter adjustments, validated against experimental datasets.",
    technologies: ["Python", "Quantum Simulation"],
    codeUrl: "https://github.com/Astraflaneur/QuantumDotSimulator",
    imageUrl: "/images/qdsim.png",
  }
];
