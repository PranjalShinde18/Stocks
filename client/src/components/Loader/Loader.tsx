// import Spinner from 'react-bootstrap/Spinner';
import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    // <Spinner animation="border" variant="dark" />
    <div className="flex justify-center items-center h-96 mt-[100px]">
      <PuffLoader />
    </div>
  );
};

export default Loader;
