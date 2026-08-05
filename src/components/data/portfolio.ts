import {
  Server,
  Cloud,
  Cpu,
  Activity,
} from "lucide-react";

import {
  SiGo,
  SiKubernetes,
  SiDocker,
  SiApachekafka,
  SiPostgresql,
  SiPrometheus,
} from "react-icons/si";

import {
  FaRobot,
  FaProjectDiagram,
} from "react-icons/fa";

import { FaAws } from "react-icons/fa";
import type { PortfolioData } from "../../types/portfolio";

export const PORTFOLIO_DATA: PortfolioData = {
  personal: {
    name: "Kasab Mohammed Imran",
    headline: "Principal Software Engineer",
    subtitle:
      "Building scalable backend platforms, cloud-native systems and AI-powered applications.",
    about:
      "With over 13 years of experience in Backend Engineering, I specialize in architecting distributed systems, cloud infrastructure, and microservices. My core expertise lies in Go, Kubernetes, and designing highly available systems. Recently, I've been focused on AI Engineering, building RAG architectures and integrating LLMs to solve complex enterprise problems.",
    links: {
      github: "https://github.com/mohammedimrankasab",
      linkedin:
        "https://www.linkedin.com/in/mohammed-imran-kasab/",
      email: "mailto:imranmohammedk2@gmail.com",
      resume: `${import.meta.env.BASE_URL}Kasab_Mohammed_Imran_Resume.pdf`,
    },
  },

  stats: [
    {
      value: "13+",
      label: "Years Experience",
      description: "Building scalable backend platforms",
    },
    {
      value: "50%",
      label: "Performance Improvement",
      description: "Optimized enterprise workflows",
    },
    {
      value: "Millions",
      label: "Metadata Records",
      description: "Processed across enterprise platforms",
    },
    {
      value: "5+",
      label: "Microservices",
      description: "Designed production systems",
    },
  ],

 highlights: [
  {
    title: "Backend Engineering",
    description:
      "13+ years building scalable backend systems, microservices, and enterprise platforms using Go, Java, and cloud-native technologies.",
    icon: Server,
  },
  {
    title: "Cloud Native Architecture",
    description:
      "Designed distributed systems using Kubernetes, Docker, CI/CD pipelines, observability, and production deployment practices.",
    icon: Cloud,
  },
  {
    title: "AI & Data Platforms",
    description:
      "Building AI-powered applications, metadata ingestion platforms, and RAG-based solutions using modern LLM technologies.",
    icon: Cpu,
  },
  {
    title: "Performance Engineering",
    description:
      "Improving reliability and performance using concurrency, asynchronous processing, caching, and architecture improvements.",
    icon: Activity,
  },
],

  experience: [
    {
      id: "pentaho",
      company: "Pentaho",
      role: "Principal Software Engineer",
      period: "2023 - Present",
      description:
        "Building scalable metadata platforms and backend services focused on enterprise data integration and cloud-native architectures.",
      achievements: [
        "Designed Go-based microservices for enterprise metadata ingestion workflows.",
        "Built connectors for enterprise platforms including PowerBI, Tableau, and MLflow.",
        "Reduced ingestion processing time by around 50% using optimized incremental processing strategies.",
      ],
    },
    {
      id: "concentrix",
      company: "Concentrix",
      role: "Senior Software Engineer II",
      period: "2021 - 2023",
      description:
        "Developed enterprise applications and AI-powered solutions for business process automation.",
      achievements: [
        "Built computer vision based employee monitoring solution using YOLO inference.",
        "Improved inference and labeling workflow performance by up to 30%.",
        "Developed backend services supporting enterprise workflows.",
      ],
    },
    {
      id: "hitachi-vantara",
      company: "Hitachi Vantara",
      role: "Software Development Engineer Senior",
      period: "2018 - 2021",
      description:
        "Worked on SaaS platforms and distributed cloud infrastructure supporting enterprise deployments.",
      achievements: [
        "Designed scalable backend services for multi-tenant SaaS platforms.",
        "Improved cluster provisioning workflows through asynchronous operations.",
        "Worked with Kubernetes-based deployments and cloud-native technologies.",
      ],
    },
    {
      id: "altisource",
      company: "Altisource Business Solutions Pvt Ltd",
      role: "Software Engineer",
      period: "2013 - 2018",
      description:
        "Developed and maintained enterprise real estate enterprise applications.",
      achievements: [
        "Modernized legacy Java applications by migrating critical services to Spring Boot.",
        "Designed modular backend services supporting mortgage servicing, foreclosure, auction, and credit reporting platforms.",
        "Built REST APIs consumed by enterprise applications while improving maintainability through modular architecture.",
        "Designed MongoDB data models for mortgage modification documents, enabling efficient document storage, retrieval, and lifecycle management.",
        "Delivered multiple production releases with zero critical post-release incidents through rigorous testing and collaboration."
      ],
    },
  ],

  projects: [
    {
      title: "Metadata Ingestion Service",
      description:
        "High-throughput Go-based platform for ingesting, validating, and processing enterprise metadata from multiple sources.",
      tech: [
        "Go",
        "Microservices",
        "Messaging",
        "Docker",
        "Worker Pools",
        "Prometheus",
      ],
      github:
        "https://github.com/mohammedimrankasab/Metadata-Ingestion-Service",
      demo: null,
      status: "Open Source",
      color:
        "from-blue-500/20 to-indigo-500/20",
        icon: SiGo,
        stars: 0,
        forks: 0,
    },
    {
      title: "Pargo",
      description:
        "A lightweight, generic, context-aware concurrency library for Go (Map, Filter, Reduce).",
      tech: [
        "Go",
        "Concurrency",
        "Collections",
        "Worker Pools",
        "Generics"
      ],
      github:
        "https://github.com/mohammedimrankasab/pargo",
      demo: null,
      status: "Open Source",
      color:
        "from-teal-500/20 to-emerald-500/20",
        icon: FaProjectDiagram,

        stars: 0,
        forks: 0,
    },
    {
      title: "RAG Chatbot",
      description:
        "Retrieval-Augmented Generation application using semantic search and LLM-based responses.",
      tech: [
        "Go",
        "Python",
        "LLM",
        "Vector Search",
      ],
      github: "https://github.com/mohammedimrankasab/rag-service-go",
      demo: null,
      status: "Experimental",
      color:
        "from-orange-500/20 to-red-500/20",
        icon: FaRobot,

        stars: 0,
        forks: 0,
    },
  ],

skills: {
  Backend: {
    icon: SiGo,
    items: [
      "Go",
      "Java",
      "Node.js",
      "Python",
      "Microservices",
      "REST APIs",
    ],
  },

  "Cloud Native": {
    icon: SiKubernetes,
    items: [
      "Kubernetes",
      "Docker",
      "Helm",
      "Terraform",
    ],
  },

  AWS: {
    icon: FaAws,
    items: [
      "EC2",
      "EKS",
      "S3",
      "IAM",
      "CloudWatch",
    ],
  },

  Messaging: {
    icon: SiApachekafka,
    items: [
      "Kafka",
      "RabbitMQ",
      "gRPC",
    ],
  },

  Databases: {
    icon: SiPostgresql,
    items: [
      "OpenSearch",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "Elasticsearch",
    ],
  },

  Observability: {
    icon: SiPrometheus,
    items: [
      "Prometheus",
      "Grafana",
      "OpenTelemetry",
    ],
  },

  DevOps: {
    icon: SiDocker,
    items: [
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "SAST: SonarQube",
      "SCA: JFrog Xray, GitHub Dependabot, Black Duck",
    ],
  },
},

practices: [
  {
    title: "Architecture",
    items: [
      "System Design",
      "Distributed Systems",
      "Microservices",
      "Event-Driven",
      "REST APIs",
      "gRPC",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Agile",
      "Scrum",
      "CI/CD",
      "GitOps",
      "TDD",
      "DDD",
    ],
  },
  {
    title: "Leadership",
    items: [
      "Technical Leadership",
      "Mentoring",
      "Architecture Reviews",
      "Cross-functional Collaboration",
      "Performance Optimization",
      "Production Support",
    ],
  },
],
  certifications: [
    {
      title: "LLM Foundations: Vector Databases for Caching and Retrieval Augmented Generation(RAG)",
      issuer: "LinkedIn Learning",
      year: "2026",
    },
    {
      title: "Generative AI: Introduction to Large Language Models",
      issuer: "LinkedIn Learning",
      year: "2026",
    },
    {
      title:
        "AWS Knowledge: Compute - Training Badge",
      issuer: "AWS",
      year: "2026",
    },
    {
      title: "AWS SimuLearn - AI Practitioner - Training Badge",
      issuer: "AWS",
      year: "2026",
    },
  ],
};