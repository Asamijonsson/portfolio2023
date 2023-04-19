import { useState } from "react";
import Header from "./Header";
const MainHeader = () => {
    const [language, setLanguage] = useState(false);
    const handleChangeLanguage = () => {
        setLanguage(!language);
        console.log(language)
      };
    
  return <Header language={handleChangeLanguage} />;
};
export default MainHeader;
