import { Server, Cloud, Cpu, Activity } from "lucide-react";

import {
  SiGo,
  SiKubernetes,
  SiDocker,
  SiApachekafka,
  SiPrometheus,
} from "react-icons/si";

import { FaRobot, FaProjectDiagram, FaAws, FaDatabase } from "react-icons/fa";
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
      linkedin: "https://www.linkedin.com/in/mohammed-imran-kasab/",
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
      value: "10+",
      label: "Enterprise Products",
      description: "Shipped to production",
    },
    {
      value: "Millions",
      label: "Metadata Records",
      description: "Processed across enterprise platforms",
    },
    {
      value: "100+",
      label: "Production Deployments",
      description: "Cloud-native releases",
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
        "Delivered multiple production releases with zero critical post-release incidents through rigorous testing and collaboration.",
      ],
    },
  ],

  projects: [
    {
      title: "Metadata Ingestion Service",
      repo: "Metadata-Ingestion-Service",

      description:
        "Enterprise-grade metadata ingestion platform built in Go with pluggable connectors, worker pools, Prometheus metrics, graceful shutdown, retry mechanisms, and concurrent processing.",

      tech: [
        "Go",
        "Kafka",
        "Docker",
        "Prometheus",
        "Worker Pools",
        "OpenSearch",
      ],

      github:
        "https://github.com/mohammedimrankasab/Metadata-Ingestion-Service",

      demo: null,

      status: "Open Source",

      color: "from-blue-500/20 via-cyan-500/20 to-indigo-500/20",

      icon: SiGo,
      highlights: [
        "Processes millions of metadata records",
        "Concurrent worker-based ingestion pipeline",
        "Power BI, Tableau and MLflow connectors",
      ],
      quality: ["Docker", "Kubernetes", "Prometheus"],
    },

    {
      title: "Pargo",

      repo: "pargo",

      description:
        "A lightweight, generic, context-aware concurrency library for Go featuring Map, Filter, Reduce, Pipelines, cancellation support, configurable worker pools, and zero-dependency APIs.",

      tech: ["Go", "Generics", "Concurrency", "Worker Pools", "Pipelines"],

      github: "https://github.com/mohammedimrankasab/pargo",

      demo: null,

      status: "Open Source",

      color: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",

      icon: FaProjectDiagram,
      highlights: [
        "High-performance generic concurrency library",
        "Worker pools, Map, Filter and Reduce",
        "Benchmark-driven optimizations",
      ],
      quality: ["Benchmarked", "Generics", "CI/CD"],
    },

    {
      title: "RAG Chatbot",

      repo: "rag-service-go",

      description:
        "Retrieval-Augmented Generation service using Go, vector embeddings, semantic search, LLM orchestration, and AI pipelines for enterprise knowledge retrieval.",

      tech: ["Go", "LLM", "Vector DB", "RAG"],

      github: "https://github.com/mohammedimrankasab/rag-service-go",

      demo: null,

      status: "Experimental",

      color: "from-orange-500/20 via-red-500/20 to-pink-500/20",

      icon: FaRobot,
    },
    {
      title: "Go Design Patterns",
      repo: "go-design-patterns",
      description:
        "A production-oriented collection of Go design patterns implemented using real-world backend engineering scenarios. Each pattern focuses on idiomatic Go, dependency injection, comprehensive testing, and production-ready architecture rather than toy examples.",
      tech: [
        "Go",
        "Design Patterns",
        "Architecture",
        "Testing",
        "Backend",
        "CI/CD",
      ],
      github: "https://github.com/mohammedimrankasab/go-design-patterns",
      featured: true,
      status: "Open Source",
      color: "from-violet-500/20 via-indigo-500/20 to-blue-500/20",
      icon: SiGo,
      highlights: [
        "Production-inspired implementations instead of toy examples",
        "Creational and Structural patterns with comprehensive documentation",
        "100% package coverage where practical",
        "Race-tested and golangci-lint compliant",
        "Idiomatic Go using interfaces and dependency injection",
        "Designed as an interview and production reference",
      ],
      quality: ["MIT License", "CI/CD", "Race Tested", "100% Coverage"],
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
        "REST APIs",
        "Microservices",
        "gRPC",
      ],
    },

    Kubernetes: {
      icon: SiKubernetes,
      items: ["Kubernetes", "Helm", "Operators", "Docker", "Terraform"],
    },

    AWS: {
      icon: FaAws,
      items: ["EKS", "EC2", "S3", "IAM", "CloudWatch"],
    },

    Messaging: {
      icon: SiApachekafka,
      items: ["Kafka", "RabbitMQ", "NATS", "gRPC"],
    },

    Databases: {
      icon: FaDatabase,
      items: ["PostgreSQL", "OpenSearch", "Redis", "MongoDB", "MySQL"],
    },

    Observability: {
      icon: SiPrometheus,
      items: ["Prometheus", "Grafana", "OpenTelemetry", "Jaeger"],
    },

    DevOps: {
      icon: SiDocker,
      items: [
        "Docker",
        "GitHub Actions",
        "CI/CD",
        "SonarQube",
        "JFrog Xray",
        "Dependabot",
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
      items: ["Agile", "Scrum", "CI/CD", "GitOps", "TDD", "DDD"],
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
      title:
        "LLM Foundations: Vector Databases for Caching and Retrieval Augmented Generation(RAG)",
      issuer: "LinkedIn Learning",
      year: "2026",
    },
    {
      title: "Generative AI: Introduction to Large Language Models",
      issuer: "LinkedIn Learning",
      year: "2026",
    },
    {
      title: "AWS Knowledge: Compute - Training Badge",
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
