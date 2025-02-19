interface Service {
    id: string;
    title: string;
    description: string;
  }
  
  const servicesData: Service[] = [
    {
      id: "website-development",
      title: "Website Development",
      description: "We build modern, responsive websites that drive results.",
    },
    {
      id: "logo-design",
      title: "Logo Design",
      description: "Create a memorable and impactful brand identity with our logo design services.",
    },
    {
      id: "ui-ux-consultation",
      title: "UI/UX Consultation",
      description: "Get expert advice on user experience and interface design to enhance your product or service.",
    },
  ];
  
  export default servicesData;