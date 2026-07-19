export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abanoub Nasser",
    jobTitle: "Brand Designer",
    url: "https://abanoubnasser.com",
    sameAs: [
      "https://www.behance.net/abanoubnasser",
      "https://instagram.com/abanoubnasser_",
    ],
    knowsAbout: [
      "Brand Identity",
      "Logo Design",
      "Packaging Design",
      "Visual Systems",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}