import "./App.css";
import Menu from "./Assets/Components/Menu";
import Formulario from "./Assets/Components/Formulario/index";
import UseForm from "./Assets/Components/UseForm";
import ReviewForm from "./Assets/Components/ReviewForm";
import Thenks from "./Assets/Components/Thenks";
import "./index.css";
import Steps from "./Assets/Components/Steps";

// Hooks
import { useForm } from "./hooks/useForm";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  coment: "",
}

export default function App() {
  const [data, setData] = useState()
  const formComponents = [<UseForm data={data} />, <ReviewForm data={data} />, <Thenks data={data} />];

  const { currentStep, currentComponents, changeStep, isLastStep, isFirsStep, Steps } =
    useForm(formComponents);

  return (
    <div className="app">
      <Menu />
      <useForm />
      <Formulario
        changeStep={changeStep}
        currentStep={currentStep}
        currentComponents={currentComponents}
        isLastStep={isLastStep}
        isFirsStep={isFirsStep}
        Steps={Steps}
      />   
    </div>
  );
}
