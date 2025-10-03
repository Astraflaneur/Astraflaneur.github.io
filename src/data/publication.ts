export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  videoUrl?: string; // Added for hover effects
  award?: string;
  projectUrl?: string;
  otherLinks?: Array<{ name: string; url: string }>;
}

export const publicationData: Publication[] = [
  // ---- Completed / Accepted publications ----
    {
    year: "2025",
    conference: "PAKKD (accepted)",
    title: "Graph Neural Networks at a Fraction",
    authors: "S. P. Barad, R. Joshi, and S. Mishra",
    paperUrl: "https://arxiv.org/abs/2502.06136",
    codeUrl: "https://github.com/Astraflaneur/lth-qmpnn",
    tldr:
      "Introduced Quaternion Message Parsing Neural Networks (QMPNNs), showing improved expressiveness at reduced parameter counts and verifying Graph Lottery Tickets (GLTs).",
    imageUrl: "/images/qmpnn.png",
    videoUrl: "/videos/qmpnn.mp4",
    award: "Student Researcher Award",
  },
  {
    year: "2024",
    conference: "IC-CGU (IEEE Xplore)",
    title: "Estimation of Electronic Band Gap Energy From Material Properties Using Machine Learning",
    authors: "S. P. Barad, S. Kumar, and S. Mishra",
    paperUrl: "https://ieeexplore.ieee.org/document/10530748",
    codeUrl: "https://github.com/Astraflaneur/EBGE",
    tldr:
      "Proposed an ML architecture to predict material band gaps and their types from easily computed material properties—removing the need for expensive DFT calculations.",
    imageUrl: "/images/ebge.presentation.png",
    videoUrl: "/videos/ebge.presentation.video.mp4",
    award: "🎤 Oral Presentation",
  },

  // ---- Under review / Presented ----
  {
    year: "2026 (under review)",
    conference: "WSDM 2026 (under review)",
    title: "FastPath: Efficient Channel Reordering for Pruned Neural Networks via Graph Learning",
    authors: "S. P. Barad and S. Mishra",
    tldr:
      "Proposed Fastpath, a graph reordering and selective pruning method that cuts redundant node features in GNNs. Applied to VisionGNN, our method yields significant latency reduction on ImageNet and CIFAR-10 while preserving accuracy.",
    imageUrl: "/images/fastpath.png",
    videoUrl: "/videos/fastpath.mp4"
  },
  {
    year: "2025 (under review)",
    conference: "Under review",
    title: "InfoGate: Information-Theoretic Gating for Continual Learning in Memory-Augmented Transformers",
    authors: "S. P. Barad and S. Mishra",
    tldr:
      "InfoGate uses information-theoretic selective memory updates with entropy- and confidence-based gating plus KL-regularized consolidation to reduce catastrophic forgetting in continual learning benchmarks.",
    imageUrl: "/images/gmt.png",
    videoUrl: "/videos/gmt.mp4"
  },
  {
    year: "2025",
    conference: "YRS Symposium / CODS-COMAD",
    title: "Parallel Tensor-Train Methods for High-Performance GPU Decomposition",
    authors: "S. P. Barad et al.",
    tldr:
      "Presented work on parallel TT decomposition and tensor unfolding strategies with GPU-resident pipelines, randomized sketching, and optimized contraction strategies for large-scale tensor factorization.",
    imageUrl: "/images/tt-svd-arch.jpeg",
    videoUrl: "/videos/gmt.mp4"
  }
];
