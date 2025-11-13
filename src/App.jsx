import React from "react";

import Card from "./Components/Card";


function App() {

  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/meta.com",
    companyName: "Meta",
    datePosted: "3 days ago",
    post: "Frontend Engineer",
    tag: "Full Time",
    tag1: "Remote",
    tag2: "Mid Level",
    pay: "$60/hr",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "5 days ago",
    post: "Cloud Support Associate",
    tag: "Full Time",
    tag1: "On-site",
    tag2: "Junior Level",
    pay: "$45/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag: "Full Time",
    tag1: "Hybrid",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "Machine Learning Engineer",
    tag: "Full Time",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "1 week ago",
    post: "Data Scientist",
    tag: "Full Time",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$65/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Backend Engineer",
    tag: "Full Time",
    tag1: "On-site",
    tag2: "Senior Level",
    pay: "$58/hr",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/openai.com",
    companyName: "OpenAI",
    datePosted: "2 weeks ago",
    post: "AI Research Intern",
    tag: "Part Time",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    datePosted: "3 weeks ago",
    post: "Software Engineer – Autopilot",
    tag: "Full Time",
    tag1: "On-site",
    tag2: "Senior Level",
    pay: "$72/hr",
    location: "Austin, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/nvidia.com",
    companyName: "NVIDIA",
    datePosted: "8 days ago",
    post: "Graphics Programmer",
    tag: "Full Time",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$68/hr",
    location: "Santa Clara, USA"
  },
  {
    brandLogo: "https://1000logos.net/wp-content/uploads/2016/10/Adobe-Logo-1993.jpg",
    companyName: "Adobe",
    datePosted: "10 weeks ago",
    post: "Product Designer",
    tag: "Part Time",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$42/hr",
    location: "Bangalore, India"
  }
];

console.log(jobOpenings)
  
  
  return (
    <>
      <div className="parent">
        {jobOpenings.map(function(elem,){
          return <Card company={elem.companyName} post={elem.post} logo={elem.brandLogo}
          price={elem.pay} location ={elem.location} dateposted={elem.datePosted}
          tag1={elem.tag1} tag2= {elem.tag2}
          
          />
        })}
      
      </div>
    </>
  );
}

export default App;
