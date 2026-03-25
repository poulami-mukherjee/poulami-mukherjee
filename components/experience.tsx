const chapters = [
  {
    title: "The foundation",
    entries: [
      {
        year: "2014–2018",
        role: "B.Tech in Computer Science Engineering",
        company: "Sikkim Manipal Institute of Technology, India",
        description: "Software Engineering, System Design, Machine Learning, Data Structures, and Secure Scalable Software. Four years of building the foundation — algorithms, operating systems, databases, and a whole lot of late-night debugging.",
      },
    ],
  },
  {
    title: "The Amazon years",
    entries: [
      {
        year: "2018–2020",
        role: "Application Development Engineer II",
        company: "Amazon Compliance, Hyderabad, India",
        description: "Started as an intern, converted to full-time. Part of the Amazon Compliance team — developed solutions to identify hazardous products and remove them from Amazon retail pages, protecting customer safety at scale. Built data solutions supporting Amazon's sustainability and eco-friendly packaging initiative. Worked within GDPR compliance frameworks.",
        highlight: "Key build: A full-stack analytics and business reporting tool that eliminated the dependency of BIEs, VPs, and leadership on Data Engineers — enabling them to pull their own insights for business decisions independently. Used by 100+ people. Reduced 1 week's manual effort to ~30 minutes.",
        extra: "Infrastructure: Migrated 8 RDS databases from public to private subnets with zero downtime.",
      },
      {
        year: "2020–2021",
        role: "Application Development Engineer III",
        company: "Amazon, Bengaluru, India",
        description: "Reduced latency by 40% through caching and Spring optimisations. Discovered and fixed a CSRF vulnerability, enhancing application security. Service Champion for 3 customer-facing core services with full CI/CD integration.",
        italic: "Graduated from Amazon's internal Machine Learning University — trained in supervised and unsupervised learning, statistical methods, gradient descent optimisation, vector embeddings, dimensionality reduction, and model evaluation under guidance from senior ML scientists at Amazon.",
      },
      {
        year: "2021–2023",
        role: "Software Engineer",
        company: "Amazon Logistics, Vendor Invoicing & RME, Hyderabad, India",
        description: "Part of the Invoicing team ensuring security and compliance of millions of dollars in transactions. Contributed to the RME (Reliability, Maintenance, Engineering) team — building software for fulfilment centre operations, ensuring workplace safety for warehouse workers, and optimising cost of repair and incident management.",
        highlight: "Product: Designed, developed, and tested end-to-end mobile app features for Seller Central payments. Scale: Led Prime Day Peak Readiness — 0 high-severity incidents across 6+ seller-facing websites. Reduced server latency from 4,000ms to 100ms. Led a team of 4 engineers.",
        extra: "Hiring: Trained and certified for conducting software development interviews. Conducted 60+ technical interviews. Culture: Mentored junior SDEs and interns. Volunteered as Scrum Master.",
        italic: "Won the Seller Payments Hackathon 2020 — built an ML Sales Forecaster with SageMaker. Earned LinkedIn Top Voice 2023.",
      },
    ],
  },
  {
    title: "Explored what's next",
    entries: [
      {
        year: "2023",
        role: "Went independent. Explored new directions.",
        company: "India & Germany",
        description: "After 5 years at Amazon, stepped out to explore what building on my own terms looks like. Experimented with food — baking, healthy snacks, cooking — while figuring out what to build next in tech.",
        italic: "The cooking experiments didn't become a business, but I still make excellent momos.",
      },
    ],
  },
  {
    title: "The startup chapter",
    entries: [
      {
        year: "2023–2024",
        role: "Co-founder & Software Engineer",
        company: "B2B AI & Cloud SaaS, Berlin, Germany",
        description: "Built MVPs using Multi-Agent Systems, Python FastAPI, Langchain, and AWS. Making cloud and AI integration less intimidating for small businesses.",
        extra: "Selected for: Campus Founders Incubator, GenAI Accelerator. Finalist at: Aidia, Berlin TOA.",
      },
      {
        year: "2024",
        role: "Nuri — Health-tech for rural Indian women",
        company: "Berlin, Germany",
        description: "AI-powered health & fitness app with voice-first interaction and multilingual coaching. Built the architecture, AI integration, hackathon finalist.",
        italic: "Built something I genuinely cared about — technology that reaches women who are usually left out of the conversation.",
      },
    ],
  },
  {
    title: "Now",
    entries: [
      {
        year: "Dec 2024–present",
        role: "Senior Software Development Consultant",
        company: "Constant Therapy, US Remote",
        description: "Healthcare tech platform using patented AI for speech and cognitive recovery after strokes and brain injuries. Leading backend development across the full stack. Working within HIPAA compliance for US patient data and navigating cross-border data regulations as the platform expands to India, UK, and Australia.",
      },
      {
        year: "March 2025–present",
        role: "Independent Consultant & Builder",
        company: "poulamimukherjee.com",
        description: "Helping startups and businesses build software that's ready to scale, ready for AI, and built by someone who's been through it. Architecture, cloud, engineering leadership, regulatory compliance, and mentorship.",
      },
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-8 md:px-16 lg:px-24 py-24 md:py-32 border-t border-border/50">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-16">Experience</p>
        
        <div className="space-y-16">
          {chapters.map((chapter, chapterIndex) => (
            <div key={chapterIndex}>
              <h3 className="font-serif text-xl md:text-2xl text-accent mb-8">{chapter.title}</h3>
              
              <div className="space-y-10 border-l border-border/50 pl-8 ml-2">
                {chapter.entries.map((entry, entryIndex) => (
                  <div key={entryIndex} className="relative">
                    <div className="absolute -left-[41px] top-1 w-2 h-2 rounded-full bg-accent" />
                    
                    <p className="text-sm text-muted-foreground mb-2">{entry.year}</p>
                    <p className="font-serif text-lg font-medium mb-1">{entry.role}</p>
                    <p className="text-sm text-muted-foreground mb-4">{entry.company}</p>
                    
                    <p className="text-foreground/80 leading-relaxed">{entry.description}</p>
                    
                    {entry.highlight && (
                      <p className="mt-4 text-foreground/80 leading-relaxed bg-secondary/50 p-4 rounded">
                        {entry.highlight}
                      </p>
                    )}
                    
                    {entry.extra && (
                      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                        {entry.extra}
                      </p>
                    )}
                    
                    {entry.italic && (
                      <p className="mt-4 text-sm italic text-muted-foreground leading-relaxed">
                        {entry.italic}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <p className="mt-16 pt-8 border-t border-border/50 text-sm text-muted-foreground leading-relaxed">
          Published in DevPro Journal. Women Who Code, Girls in Tech, Google Women Techmakers. Compliance experience spanning GDPR, HIPAA, and cross-border data regulations across the US, EU, India, UK, and Australia.
        </p>
      </div>
    </section>
  )
}
