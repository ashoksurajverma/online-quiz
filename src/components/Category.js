import { AiOutlineLeft } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function Category({ data, heading, goBack }) {
  const navigate = useNavigate();

  return (
    <>
      <h3 className="heading" onClick={goBack}>
        <AiOutlineLeft className="mr-5" />
        {heading}
      </h3>
      <div>
        {data.map((d) => {
          return (
            <div className="sub-idea" onClick={() => navigate("/thanks")}>
              {d.name}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Category;
