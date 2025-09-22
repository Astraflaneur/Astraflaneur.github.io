export interface Experience {
  year: string;
  company: string;
  companyUrl?: string;
  position: string;
  description?: string;
  location?: string;
}

export const experienceData: Experience[] = [
  {
    year: "Sep 2024 – Present",
    company: "NISER Bhubaneswar",
    companyUrl: "https://www.niser.ac.in",
    position: "Master’s Thesis Researcher",
    description:
      "Developing <strong>selective, replay-consolidation memory</strong> for robust continual learning. Built a memory-augmented Transformer with entropy-gated slot attention and hybrid replay strategies, achieving <strong>93.5% accuracy with 1.5% forgetting</strong> on Wikitext-103, LQA, Split-/Permuted-MNIST.",
    location: "Bhubaneswar, India",
  },
  {
    year: "Sep 2024 – Present",
    company: "NISER Bhubaneswar",
    companyUrl: "https://www.niser.ac.in",
    position: "Researcher",
    description:
      "Proposed <strong>Graph Reordering and Selective Pruning (GRaSP)</strong> to improve efficiency of GNNs. Applied to VisionGNN, achieving significant latency reduction on ImageNet and CIFAR-10 while preserving accuracy. <em>Under review at ICCV 2025</em>.",
    location: "Bhubaneswar, India",
  },
  {
    year: "Jan 2024 – May 2024",
    company: "NISER Bhubaneswar & Microsoft India (collaboration)",
    position: "Researcher",
    description:
      "Worked on <strong>Quaternion Message Parsing Neural Networks (QMPNNs)</strong>, showing greater expressiveness than real-valued models at 1/4th the parameters. Verified Graph Lottery Tickets in QMPNNs. <em>Accepted at PAKDD 2025</em>.",
    location: "Bhubaneswar, India",
  },
  {
    year: "Jun 2023 – Jul 2023",
    company: "IIIT Bangalore",
    companyUrl: "https://www.iiitb.ac.in",
    position: "Summer Research Fellow",
    description:
      "Explored <strong>adiabatic quantum computing with carbon nanotube qubits</strong>, demonstrating coherence and stability in simulations. Also modeled synchronization dynamics using Kuramoto oscillators.",
    location: "Bangalore, India",
  },
  {
    year: "Feb 2023 – Jun 2023",
    company: "NISER Bhubaneswar",
    companyUrl: "https://www.niser.ac.in",
    position: "Researcher",
    description:
      "Designed a <strong>machine learning framework for band-gap prediction</strong> from material properties without DFT dependence. Published in <a href='https://ieeexplore.ieee.org/document/10530748' target='_blank' rel='noopener'>IEEE Xplore</a>.",
    location: "Bhubaneswar, India",
  },
];
