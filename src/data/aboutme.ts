export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Sagar Prakash Barad",
  title: "ML Researcher",
  institution: "NISER Graduate Student & Upcoming Researcher @ Griffith University",
  // Note that links work in the description
  description: `
<p>
I am a Graduate <strong>Master’s student in Physical Sciences</strong> (minor in Computer Science) from <a href="https://www.niser.ac.in">NISER, Bhubaneswar</a>, where I work on <em>continual learning, efficient graph neural networks, and quantum-inspired models</em>.

My <strong>Master’s thesis</strong> develops a <em>memory-augmented Transformer</em> with entropy gated slot attention and hybrid replay strategies, achieving <strong>93.5% accuracy </strong> with only <strong> 1.5% forgetting</strong> across NLP and vision benchmarks. I also proposed <strong>Graph Reordering and Selective Pruning (GRaSP)</strong>, which reduces latency in GNNs without sacrificing accuracy, currently <em>under review at ICCV 2025</em>. I have worked on <strong>Quaternion Message Parsing Neural Networks</strong> (accepted at <em>PAKKD 2025</em>), demonstrating higher expressiveness at reduced parameter cost and verifying the existence of Graph Lottery Tickets. I also contributed to <strong>Local and Global State Space Models (LoGo)</strong>, combining Mamba’s scalable memory with Transformer architectures.

Earlier research includes <em>adiabatic quantum computing with carbon nanotube qubits</em>, <em>Kuramoto synchronization in nonlinear systems</em>, and <em>machine learning for band-gap prediction</em>, the latter published in <strong>IEEE Xplore</strong>. My broader interests lie in building <strong>scalable, theoretically grounded AI systems</strong> and advancing <strong>high-performance computing</strong> through efficient tensor operation methods on GPUs.
</p>
`,
  email: "sagarbarad118@gmail.com",
  imageUrl: "/images/sagar.jpeg", // 1:1 aspect ratio recommended
  googleScholarUrl: "https://scholar.google.ru/citations?user=D3OF4rYAAAAJ",
  githubUsername: "Astraflaneur",
  linkedinUsername: "sagar-barad-b6114a201",
  twitterUsername: "SagarPr4kash",
  cvUrl: "/SagarBaradCV.pdf",
  // institutionUrl: "https://runwayml.com",
  secretDescription: "I synthesize things that people currently cannot.",
};
