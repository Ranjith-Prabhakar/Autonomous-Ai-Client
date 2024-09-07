import ReactDOM from "react-dom";

type Props = {
  visible: true;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const OtherAPiModal = ({ visible, setVisible }: Props) => {
  console.log(visible, setVisible);
  const portalRoot = document.getElementById("root-portal");

  if (!portalRoot) {
    console.error("Error: Target container is not a DOM element.");
    return null;
  }

  return ReactDOM.createPortal(<div className="portal">
    <button onClick={()=>setVisible(false)}>Back to home</button>
  </div>, portalRoot);
};

export default OtherAPiModal;
