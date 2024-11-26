import { Landing, Premium, Prediction, Market, News, SneakPeak } from "../";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import {
  Button,
  Result,
  Layout,
  Row,
  Col,
  ConfigProvider,
  Typography,
  Grid,
} from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import background from "/public/background.png";

const Ugh404 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const screens = Grid.useBreakpoint();

  return (
    <Row justify={"center"} align={"middle"} style={{ textAlign: "center" }}>
      <Col
        xl={24}
        lg={24}
        md={15}
        sm={19}
        xs={19}
        style={{
          marginLeft: screens.xs ? "" : "",
        }}
      >
        <Typography.Title level={4} style={{ color: "red" }}>
          Oops, Page not found
        </Typography.Title>
        <Typography.Text style={{ color: "white" }}>
          The page "{location.pathname}" you are looking for does not exist.
          Please check the address and try again.
        </Typography.Text>
        <Col style={{ paddingTop: 24 }}>
          <Button onClick={() => navigate("/")} icon={<ArrowLeftOutlined />}>
            Back
          </Button>
        </Col>
      </Col>
    </Row>
  );
};

export const AppRoute = () => {
  return (
    <Routes>
      <Route path="*" element={<Ugh404 />} />
      <Route path="/" element={<SneakPeak />} />
      {/* <Route path="/" element={<Landing />} /> */}
      <Route path="/premium" element={<Premium />} />
      <Route path="/prediction" element={<Prediction />} />
      <Route path="/market" element={<Market />} />
      <Route path="/news" element={<News />} />
    </Routes>
  );
};
