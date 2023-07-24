import { useState } from "react";
import ContainerUpload from "../components/container/ContainerUpload";
import PanelContainer from "../components/container/PanelContainer";

const UploadProjects = () => {
  const [update, setupdate] = useState(false);
  return (
    <div className="mt-20">
      <div className="items-center justify-between md:flex">
        <ContainerUpload setupdate={setupdate} update={update} />
        <PanelContainer setupdate={setupdate} update={update} />
      </div>
    </div>
  );
};

export default UploadProjects;
