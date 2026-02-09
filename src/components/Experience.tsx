import React from 'react';
import { motion } from 'motion/react';
import { Brain, Server, Layers } from 'lucide-react';

export function Experience() {
  const experiences = [
    {
      title: "Senior AI Engineer - LLM & Document Intelligence",
      company: "AI Solutions & Production Systems",
      period: "2022 - Present",
      description: "Architecting enterprise-scale LLM systems with LLaMA for intelligent document processing. Built RAG architectures, vector search infrastructure, and prompt engineering frameworks achieving 95%+ accuracy at 10K+ documents/day. Led optimization of inference pipelines reducing latency by 60% while maintaining production SLAs.",
      icon: Brain,
      skills: ["LLM Architecture", "RAG Systems", "Vector Search", "Production MLOps", "FastAPI", "System Design"]
    },
    {
      title: "ML Engineer - Computer Vision & Deep Learning",
      company: "Production AI Infrastructure",
      period: "2021 - Present",
      description: "Designed and deployed real-time computer vision systems using YOLOv4/v5 for industrial automation. Built scalable inference infrastructure handling 30 FPS with sub-50ms latency. Optimized deep learning models with PyTorch and TensorFlow, implemented model versioning, A/B testing, and continuous training pipelines.",
      icon: Layers,
      skills: ["Computer Vision", "YOLO Optimization", "PyTorch", "Model Deployment", "Performance Tuning", "MLOps"]
    },
    {
      title: "Data & ML Platform Engineer",
      company: "Enterprise ML Systems",
      period: "2021 - Present",
      description: "Built production ML infrastructure and data engineering pipelines serving multiple AI models. Architected ETL workflows, feature stores, and model serving APIs using FastAPI and Flask. Integrated ML systems with enterprise databases (MongoDB, PostgreSQL, SQL Server), implemented monitoring, and established MLOps best practices.",
      icon: Server,
      skills: ["ML Infrastructure", "Data Engineering", "API Design", "Database Integration", "ETL Pipelines", "Monitoring"]
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-gray-400 text-lg">
            Architecting and scaling AI systems from research to production deployment
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-400 via-purple-400 to-pink-400 rounded-full" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              viewport={{ once: true }}
              className={`relative flex items-center mb-16 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              {/* Timeline node */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.3 + 0.5, duration: 0.5 }}
                viewport={{ once: true }}
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full border-4 border-gray-900 z-10"
              />

              {/* Content card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
              >
                <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-lg p-6 hover:border-blue-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-blue-500/20 rounded-full mr-4">
                      <exp.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                  </div>
                  
                  <p className="text-purple-300 text-sm mb-3">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm border border-purple-400/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}