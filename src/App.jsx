import PortalModal from "./Components/PortalModal";
import PortalWrapperModal from "./Components/PortalWrapperModal";
import TraditionalModal from "./Components/TraditionalModal";

const App = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5">
      <TraditionalModal/>
      <PortalModal/>
      <PortalWrapperModal/>
    </div>
  );
};

export default App;