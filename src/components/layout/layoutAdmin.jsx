import HeaderAdmin from "../header/headerAdmin";

const LayoutAdmin = ({ children }) => {
  return (
    <div>
      <HeaderAdmin />
      {children}
    </div>
  );
};

export default LayoutAdmin;
