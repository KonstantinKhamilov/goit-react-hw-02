import description from "../../description.json";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";

const App = () => {
  return (
    <>
      <Description name={description.name} text={description.text} />
      <Options />
    </>
  );
};
export default App;
