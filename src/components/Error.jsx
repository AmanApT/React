import { useRouteError } from "react-router-dom";
const Error = () => {
  const error = useRouteError();
  const errorStyle = {
    height: "110vh",
    backgroundImage: `url("https://i.pinimg.com/originals/0b/21/9f/0b219f91b508342ff91c997e16afeca4.gif")`,
    backgroundSize: "cover",
  };

  return (
    <div style={errorStyle}>
      <img src="" />
    </div>
  );
};
export default Error;
