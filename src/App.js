import "./styles/App.scss";

import { Routes, Route } from "react-router-dom";

// import { aboutService_data } from "./data/data";

import Main from "./pages/Main/MainPage";
import About from "./pages/About/AboutPage";
// import Managment from "./pages/Managment/ManagmentPage";
// import Contacts from "./pages/Contacts/ContactsPage";
// import Faq from "./pages/Faq/FaqPage";
// import License from "./pages/License/License";
// import Price from "./pages/Price/PricePage";
// import Reviews from "./pages/Reviews/ReviewsPage";
// import OurTech from "./pages/OurTech/OurTechPage";
// import Projects from "./pages/Projects/ProjectsPage";
// import Project1 from "./pages/Projects/Project1Page/Project1Page";
// import Service from "././pages/SingleService/ServicePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/managment" element={<Managment />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/license" element={<License />} />
        <Route path="/price" element={<Price />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/ourTech" element={<OurTech />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/project_1" element={<Project1 />} />
        {aboutService_data.map((page) => {
          return (
            <Route
              key={page.id}
              path={`services/${page.id}`}
              element={<Service {...page} />}
            />
          );
        })} */}
      </Routes>
    </>
  );
}

export default App;
