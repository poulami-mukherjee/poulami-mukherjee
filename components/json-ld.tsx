export function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Poulami Mukherjee",
    "url": "https://poulamimukherjee.com",
    "email": "hello@poulamimukherjee.com",
    "jobTitle": "Software Engineer, Architect & Technology Consultant",
    "description": "Poulami Mukherjee is a software engineer, architect and technology consultant with 8+ years of experience including 5 at Amazon. Specialising in Applied AI/ML, cloud architecture, and regulatory compliance (GDPR, HIPAA). B.Tech in Computer Science Engineering. Based in India, working with clients across the US, Europe, India, UK, and Australia.",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Sikkim Manipal Institute of Technology",
      "description": "B.Tech in Computer Science Engineering"
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
      "Applied AI/ML",
      "GDPR Compliance",
      "HIPAA Compliance",
      "Digital Transformation"
    ],
    "sameAs": [
      "https://linkedin.com/in/poulami-mukherjee",
      "https://github.com/poulami-mukherjee"
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
          "text": "Poulami Mukherjee is a software engineer, architect and technology consultant with 8+ years of professional experience including 5 years at Amazon. She holds a B.Tech in Computer Science Engineering. She works with startups and enterprises across the US, Europe, India, UK, and Australia."
        }
      },
      {
        "@type": "Question",
        "name": "What does Poulami Mukherjee specialise in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cloud architecture, AWS infrastructure, software delivery, Applied AI/ML integration, engineering leadership, regulatory compliance (GDPR, HIPAA), and technology consulting."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my business is ready for AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Before AI can work for your business, your systems have to be ready for it. If your data is messy, your systems are siloed, or your APIs are brittle — you're probably not ready yet. A digital transformation roadmap is a practical first step."
        }
      },
      {
        "@type": "Question",
        "name": "What services does Poulami Mukherjee offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Software Design, Delivery & Build; Architecture Review & Advisory; Cloud & Infrastructure Consulting; Fractional Engineering Leadership; Engineering Due Diligence; Digital Transformation Roadmap; and Engineering Mentorship."
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
