import React from "react";
import { AppContainer } from "../components/container";
import { Row, Col, Typography } from "antd";

export const Premium: React.FC<any> = () => {
  return (
    <AppContainer style={{ backgroundColor: "black" }}>
      <Col span={24}>
        <Row justify={"center"} align={"middle"} style={{ marginTop: "8vh" }}>
          <Col style={{ textAlign: "center" }}>
            <Typography.Title level={1} style={{ color: "red" }}>
              In Developement
            </Typography.Title>
          </Col>
        </Row>
      </Col>
    </AppContainer>
  );
};
