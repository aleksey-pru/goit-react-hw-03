import s from "./Contact.module.css";
import { FaPhone } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
const Contact = ({ data: { id, name, number }, onDelete }) => {
  return (
    <div className={s.container}>
      <div className={s.infoContainer}>
        <p className={s.name}>
          <BsPersonFill />
          {name}
        </p>

        <p className={s.name}>
          <FaPhone />
          {number}
        </p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
