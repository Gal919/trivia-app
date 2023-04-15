// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Header from "../UI/Header";
// import { Button } from "../../styles/Button";
// import * as S from "../../styles/Form";

// const Login = () => {
//   const [userInfo, setUserInfo] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     e.preventDefault();

//     const { name, value } = e.target;
//     setUserInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <S.Container>
//       <S.LeftContainer>
//         <h1>Welcome To</h1>
//         <h1>
//           Trivia App
//           <i className="fa-solid fa-medal"></i>
//         </h1>
//       </S.LeftContainer>
//       <S.RightContainer>
//         <Header text="Login" />
//         <S.LoginForm>
//           <S.LoginLabel>email</S.LoginLabel>
//           <S.LoginInput
//             type="text"
//             name="email"
//             placeholder="Please enter email"
//             value={userInfo.email}
//             onChange={handleChange}
//           />
//           <S.LoginLabel>Password</S.LoginLabel>
//           <S.LoginInput
//             type="password"
//             name="password"
//             placeholder="Please enter password"
//             value={userInfo.password}
//             onChange={handleChange}
//           />
//         </S.LoginForm>
//         <Link to={"main"} style={S.LoginLink}>
//           <Button>Start</Button>
//         </Link>
//       </S.RightContainer>
//     </S.Container>
//   );
// };

// export default Login;
