import { BrowserRouter } from "react-router-dom";
import { toLower } from "lodash";
import { APP } from "./config";
import { AppRoute } from "./app/containers/routes";
import "./index.css";
import "./antd.css";

// export const App: React.FC<any> = () => {
//   return (
//     <Row>
//       <Col>testing</Col>
//     </Row>
//   );
// };

if (toLower(APP.NODE_ENV) === "production") {
  console.log = () => {};
  console.error = () => {};
  console.debug = () => {};
}

const App = () => {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
};

export default App;
