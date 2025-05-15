import metaLogo from "@/assets/images/logos/meta_logo.png";

const dataAnalyticsPDF = `${window.location.origin}/files/PDF/certifications/Coursera Data Analytics certification.pdf`;
const pythonCertificationPDF = `${window.location.origin}/files/PDF/certifications/Coursera_PythonCertification.pdf`;
const dataAnalysisSprSQLPDF = `${window.location.origin}/files/PDF/certifications/Data Analysis with Spreadsheets and SQL_certificate.pdf`;
const dataAnalyticsMethodMrktPDF = `${window.location.origin}/files/PDF/certifications/Data Analytics Methods for Marketing.pdf`;
const dataAnalyticsFoundationsPDF = `${window.location.origin}/files/PDF/certifications/Marketing Analytics Foundation.pdf`;
const marketingAnalyticsPDF = `${window.location.origin}/files/PDF/certifications/Marketing Analytics with Meta Certification.pdf`;
const marketingSciencePDF = `${window.location.origin}/files/PDF/certifications/Meta Marketing Science Certification Exam.pdf`;
const statisticFoundationsPDF = `${window.location.origin}/files/PDF/certifications/Statistics Foundations.pdf`;

export const certifications =[
  {
    name: "Marketing Analytics Foundations",
    description: "Core principles of digital marketing analytics.",
    image: metaLogo,
    issuedBy: "Meta & Coursera",
    link: dataAnalyticsFoundationsPDF,
    date: "Nov, 2023",
  },
  {
    name: "Data Analytics",
    description: "Entry-level data cleaning, analysis & visualization with Python, SQL, and statistics.",
    image: metaLogo,
    issuedBy: "Meta & Coursera",
    link: dataAnalyticsPDF,
    date: "Jan, 2024",
  },
  {
    name: "Data Analysis with Spreadsheets and SQL",
    description: "Spreadsheet data cleaning, SQL querying, and dashboard creation.",
    image: metaLogo,
    issuedBy: "Meta & Coursera",
    link: dataAnalysisSprSQLPDF,
    date: "Apr, 2024",
  },
  {
    name: "Python for Everybody",
    description: "Core Python skills for data gathering, cleaning, and visualization.",
    image: metaLogo,
    issuedBy: "Meta & Coursera",
    link: pythonCertificationPDF,
    date: "Aug, 2024",
  },
  {
    name: "Data Analytics Methods for Marketing",
    description: "Marketing mix modeling, attribution, and forecasting techniques.",
    image: metaLogo,
    issuedBy: "Meta & Coursera",
    link: dataAnalyticsMethodMrktPDF,
    date: "Oct, 2024",
  },
  {
    name: "Marketing Analytics with Meta",
    description: "Measuring and optimizing Meta ad campaigns end-to-end.",
    image: metaLogo,
    issuedBy: "Meta & Coursera",
    link: marketingAnalyticsPDF,
    date: "Nov, 2024",
  },
  {
    name: "Meta Marketing Science Certification",
    description: "Study resources and prep for Meta’s Marketing Science exam.",
    image: metaLogo,
    issuedBy: "Meta & Coursera",
    link: marketingSciencePDF,
    date: "Nov, 2024",
  },
  {
    name: "Statistics Foundations",
    description: "Fundamentals of descriptive and inferential statistics.",
    image: metaLogo,
    issuedBy: "Meta & Coursera",
    link: statisticFoundationsPDF,
    date: "Nov, 2024",
  },
]

