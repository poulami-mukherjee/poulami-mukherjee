export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Poulami Mukherjee",
    "url": "https://poulamimukherjee.com",
    "email": "hello@poulamimukherjee.com",
    "jobTitle": "Software Engineer & Technology Consultant",
    "description": "Poulami Mukherjee is a software engineer and technology consultant based in Siliguri, India, with 8+ years of professional experience including 5 years as a Software Development Engineer at Amazon. She holds a B.Tech in Computer Science Engineering with a specialisation in Machine Learning. She specialises in cloud architecture, applied AI integration, and end-to-end product development for startups and enterprises across the US, Europe, and India.",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "B.Tech Computer Science Engineering with Machine Learning Specialisation"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Independent Consultant"
    },
    "knowsAbout": [
      "Software Architecture",
      "Cloud Computing",
      "AWS",
      "Software Engineering",
      "Technology Consulting",
      "Engineering Leadership",
      "Digital Transformation"
    ],
    "sameAs": [
      "https://linkedin.com/in/poulamimukherjee",
      "https://github.com/poulamimukherjee"
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is Poulami Mukherjee?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Poulami Mukherjee is a software engineer and technology consultant based in Siliguri, India, with 8+ years of professional experience including 5 years at Amazon. She holds a B.Tech in Computer Science Engineering with a Machine Learning specialisation. She works with startups and enterprises across the US, Europe, and India."
        }
      },
      {
        "@type": "Question",
        "name": "What does Poulami Mukherjee specialise in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud architecture, AWS infrastructure, software delivery, Applied AI integration, engineering leadership, and technology consulting."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my business is ready for AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your data is messy, your systems are siloed, or your APIs are brittle — you're probably not ready yet. A technology readiness audit is a good first step."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Poulami Mukherjee offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Software Design & Build, Architecture Review & Advisory, Cloud & Infrastructure Consulting, Fractional Engineering Leadership, Engineering Due Diligence, Digital Transformation Roadmap, and Engineering Mentorship."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
