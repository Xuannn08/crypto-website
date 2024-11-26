import React, { useState, useEffect, useRef } from "react";
import { AppContainer } from "../components/container";
import { Row, Col, Typography, Select } from "antd";
import { toDisplayDate, toDisplayTime } from "../formatter";
import { BtcWidget } from "../components/btc";
// import { MarketWidget } from "../components/market";
// import { NewsWidget } from "../components/news";

export const Prediction: React.FC<any> = () => {
  const [prediction, setPrediction] = useState<any>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://coinhub.xuan08.com/prediction/BTCUSDT")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setPrediction(data))
      .catch((error) => setError(error));
  }, []);

  return (
    <AppContainer
      header={true}
      footer={false}
      style={{ backgroundColor: "black" }}
    >
      <Row>
        <Col span={24}>
          <Row justify={"start"} gutter={[12, 0]} style={{ marginTop: "8vh" }}>
            <Col
              span={18}
              style={{
                textAlign: "left",
                width: "100%",
                marginLeft: "1%",
              }}
            >
              {/* <Typography.Title level={1} style={{ color: "white" }}>
                Symbol <span style={{ color: "#03efb0" }}>Graph</span>
              </Typography.Title> */}
              <Typography.Title level={3} style={{ color: "white" }}>
                Symbol: <Select style={{ width: 100 }}></Select>
                {/* <span style={{ color: "#03efb0" }}>BTCUSDT</span> */}
              </Typography.Title>
              <Typography.Title level={3} style={{ color: "white" }}>
                Time Interval: <span style={{ color: "#03efb0" }}>Day</span>
              </Typography.Title>
            </Col>
            <Col span={5} style={{ textAlign: "left", width: "100%" }}>
              {/* <Typography.Title level={1} style={{ color: "white" }}>
                Prediction Value
              </Typography.Title> */}
            </Col>

            <Col span={12} style={{ height: "56vh", marginLeft: "1%" }}>
              <BtcWidget />
            </Col>
            <Col span={11} style={{ textAlign: "right", width: "100%" }}>
              <Typography.Title level={1} style={{ color: "white" }}>
                {`${toDisplayTime(prediction?.data?.current_timestamp)}`}
              </Typography.Title>
              <Typography.Title level={1} style={{ color: "white" }}>
                {prediction?.data?.current_price}
              </Typography.Title>
              <Typography.Title level={1} style={{ color: "white" }}>
                {`${toDisplayTime(prediction?.data?.predicted_timestamp)}`}
              </Typography.Title>
              <Typography.Title level={1} style={{ color: "white" }}>
                {prediction?.data?.predicted_price}
              </Typography.Title>
            </Col>
          </Row>
        </Col>
      </Row>
    </AppContainer>
  );
};
