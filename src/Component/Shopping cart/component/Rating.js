import { AiFillStar,AiOutlineStar } from "react-icons/ai";
const Rating = ({ rating}) => {
  return (
    <>
      {rating?.map((_, i) => (
           <span className="star" key={i}>
           {rating > i ? (
             <AiFillStar  fontSize="15px" />
           ) : (
             <AiFillStar fontSize="15px" />
           )}
           </span>
      ))}
    </>
    );
};

export default Rating;