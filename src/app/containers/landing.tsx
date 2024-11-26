import React, { useState } from "react";
import {
  Row,
  Col,
  Typography,
  Button,
  Space,
  Image,
  Grid,
  ConfigProvider,
  Collapse,
  Layout,
  Flex,
  Badge,
  Dropdown,
  Modal,
  Form,
  Input,
  Divider,
} from "antd";
import {
  BarChartOutlined,
  CodeOutlined,
  ExperimentOutlined,
  UserOutlined,
} from "@ant-design/icons";
import background from "/public/background.png";
import { AppContainer } from "../components/container";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "antd/es/form/Form";
import DISCORDLOGIN_LOGO from "/public/discordLogin.png";
import GOOGLELOGIN_LOGO from "/public/googleLogin.png";

// const DisplayContent = [
//   {
//     label: "dawd",
//     value: "wadawd",
//     path: "wadawdddd",
//   },
// ];

export const Landing: React.FC<any> = () => {
  const screens = Grid.useBreakpoint();
  const navigate = useNavigate();
  const { Header } = Layout;
  const [openModal, setOpenModal] = useState<boolean>();
  const [form] = useForm();
  // const loginModal = { value: false };

  const isTablet = window.innerWidth <= 1300;

  const handlers = {
    openLoginModal: () => {
      setOpenModal(true);
    },
    closeLoginModal: () => {
      setOpenModal(false);
      form.resetFields();
    },
  };

  <ConfigProvider
    theme={{
      token: {
        colorText: "white",
      },
      components: {
        Button: {
          defaultHoverColor: "green",
        },
      },
    }}
  ></ConfigProvider>;

  return (
    <AppContainer
      header={true}
      footer={true}
      style={{ backgroundColor: "black" }}
    >
      <ConfigProvider
        theme={{
          token: {
            colorText: "white",
          },
          components: {
            Button: {
              defaultHoverColor: "green",
            },
          },
        }}
      >
        <Col
          span={24}
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          }}
        >
          <Row gutter={[16, 16]} justify={"center"}>
            <Row justify={"center"}>
              <Col
                xl={11}
                lg={11}
                md={11}
                sm={20}
                xs={20}
                style={{
                  paddingTop: 128,
                }}
              >
                <Typography.Title
                  className="text-white"
                  level={1}
                  style={{
                    textAlign: "center",
                    textAlignLast: "center",
                    fontSize: screens.xs ? 40 : "",
                  }}
                >
                  Our expert analysis and accurate predictions will help you
                  stay ahead of market trends. Explore data-driven reports to
                  make<br></br>informed decisions in the world of
                  cryptocurrency.
                </Typography.Title>
              </Col>
              <Col span={24}></Col>
              <Col
                xl={5}
                lg={5}
                md={5}
                sm={20}
                xs={20}
                style={{
                  paddingTop: 48,
                  textAlign: "center",
                  textAlignLast: "center",
                }}
              >
                <Typography.Text
                  style={{
                    color: "#98A2B3",
                  }}
                >
                  Gain insights into the world of crypto with our expert
                  analysis. Stay ahead of market trends with accurate
                  predictions and data-driven reports.
                </Typography.Text>
              </Col>
            </Row>

            <Col span={24} style={{ paddingTop: "4em" }}>
              <Button
                size="large"
                onClick={() => navigate("/premium")}
                style={{
                  backgroundColor: "#03EFB0",
                  border: "none",
                  borderRadius: 8,
                  padding: "0 120px",
                  color: "black",
                  display: "block",
                  margin: "auto",
                }}
              >
                Explore More
              </Button>
            </Col>
            <Col
              lg={16}
              md={20}
              sm={20}
              xs={20}
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "6em",
              }}
            >
              <Image
                preview={false}
                src="/public/landing.png"
                style={{
                  justifyContent: "center",
                  paddingBottom: "12em",
                }}
              />
            </Col>
            <Row justify={"center"}>
              <Col
                xl={20}
                lg={20}
                md={22}
                sm={22}
                xs={22}
                style={{ paddingBottom: screens.xs ? "3em" : "6em" }}
              >
                <Typography.Title
                  level={1}
                  style={{
                    color: "white",
                    fontSize: screens.xs ? 40 : 84,
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  Enchance Your{" "}
                  <span style={{ color: "#34d399" }}>Trading Experience</span>{" "}
                  With
                </Typography.Title>
              </Col>
              <Col span={22}>
                <Row justify={"center"}>
                  {/* first description */}
                  <Row
                    style={{
                      paddingBottom: 100,
                      marginLeft: screens.lg ? "2em" : "0",
                    }}
                  >
                    <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                      <Row justify={"center"} style={{ textAlign: "right" }}>
                        <Col xl={13} lg={13} md={22} sm={22} xs={22}>
                          <Typography.Title
                            level={3}
                            style={{
                              color: "#34d399",
                              textAlign: "left",
                            }}
                          >
                            Crypto Prediction
                          </Typography.Title>
                          <Typography.Title
                            level={1}
                            style={{
                              textAlign: "left",
                              padding: 0,
                              marginTop: 0,
                            }}
                          >
                            Accurate Cryptocurrency Predictions Tailored{" "}
                            <br></br>
                            to Your Needs
                          </Typography.Title>
                          <Typography.Paragraph
                            style={{
                              color: "#98A2B3",
                              textJustify: "inter-word",
                              textAlign: "justify",
                            }}
                          >
                            Our platform offers customizable settings for
                            trading type, cryptocurrency selection, and
                            prediction time intervals (15m, 4h, 1d), ensuring
                            you get the most accurate predictions for informed
                            trading decisions.
                          </Typography.Paragraph>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{
                            textAlign: "left",
                            marginBottom: 24,
                            marginTop: 24,
                          }}
                        >
                          <Typography.Text>
                            <ExperimentOutlined
                              style={{
                                color: "#34d399",
                                paddingRight: 8,
                                fontSize: 24,
                              }}
                            />
                            Tailored cryptocurrency predictions based on your
                            preferences and settings.
                          </Typography.Text>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{ textAlign: "left", marginBottom: 24 }}
                        >
                          <Typography.Text>
                            <CodeOutlined
                              style={{
                                color: "#34d399",
                                fontSize: 24,
                                paddingRight: 8,
                              }}
                            />
                            Customize trading type, cryptocurrency, and time
                            intervals for accurate predictions.
                          </Typography.Text>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{ textAlign: "left", marginBottom: 24 }}
                        >
                          <Typography.Text>
                            <BarChartOutlined
                              style={{
                                color: "#34d399",
                                fontSize: 24,
                                paddingRight: 8,
                              }}
                            />
                            Maximize trading success with personalized
                            prediction settings.
                          </Typography.Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      xl={12}
                      lg={12}
                      md={22}
                      sm={22}
                      xs={22}
                      style={{
                        justifyContent: "center",
                        alignContent: "center",
                        display: "block",
                        margin: "auto",
                      }}
                    >
                      <Col>
                        <Image
                          src="/public/descriptionimg1.png"
                          preview={false}
                          style={{ paddingLeft: screens.lg ? 30 : 0 }}
                        />
                      </Col>
                    </Col>
                  </Row>
                  {/* second description */}
                  <Row
                    style={{
                      paddingBottom: 100,
                      marginLeft: screens.lg ? "2em" : "0",
                    }}
                  >
                    <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                      <Row justify={"center"} style={{ textAlign: "right" }}>
                        <Col xl={13} lg={13} md={22} sm={22} xs={22}>
                          <Typography.Title
                            level={3}
                            style={{
                              color: "#34d399",
                              textAlign: "left",
                            }}
                          >
                            Crypto Prediction
                          </Typography.Title>
                          <Typography.Title
                            level={1}
                            style={{
                              textAlign: "left",
                              padding: 0,
                              marginTop: 0,
                            }}
                          >
                            Accurate Cryptocurrency Predictions Tailored{" "}
                            <br></br>
                            to Your Needs
                          </Typography.Title>
                          <Typography.Paragraph
                            style={{
                              color: "#98A2B3",
                              textJustify: "inter-word",
                              textAlign: "justify",
                            }}
                          >
                            Our platform offers customizable settings for
                            trading type, cryptocurrency selection, and
                            prediction time intervals (15m, 4h, 1d), ensuring
                            you get the most accurate predictions for informed
                            trading decisions.
                          </Typography.Paragraph>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{
                            textAlign: "left",
                            marginBottom: 24,
                            marginTop: 24,
                          }}
                        >
                          <Typography.Text>
                            <ExperimentOutlined
                              style={{
                                color: "#34d399",
                                paddingRight: 8,
                                fontSize: 24,
                              }}
                            />
                            Tailored cryptocurrency predictions based on your
                            preferences and settings.
                          </Typography.Text>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{ textAlign: "left", marginBottom: 24 }}
                        >
                          <Typography.Text>
                            <CodeOutlined
                              style={{
                                color: "#34d399",
                                fontSize: 24,
                                paddingRight: 8,
                              }}
                            />
                            Customize trading type, cryptocurrency, and time
                            intervals for accurate predictions.
                          </Typography.Text>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{ textAlign: "left", marginBottom: 24 }}
                        >
                          <Typography.Text>
                            <BarChartOutlined
                              style={{
                                color: "#34d399",
                                fontSize: 24,
                                paddingRight: 8,
                              }}
                            />
                            Maximize trading success with personalized
                            prediction settings.
                          </Typography.Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      xl={12}
                      lg={12}
                      md={22}
                      sm={22}
                      xs={22}
                      style={{
                        justifyContent: "center",
                        alignContent: "center",
                        display: "block",
                        margin: "auto",
                      }}
                    >
                      <Col>
                        <Image
                          src="/public/descriptionimg1.png"
                          preview={false}
                          style={{ paddingLeft: screens.lg ? 30 : 0 }}
                        />
                      </Col>
                    </Col>
                  </Row>
                  {/* third description */}
                  <Row
                    style={{
                      marginLeft: screens.lg ? "2em" : "0",
                    }}
                  >
                    <Col xl={12} lg={12} md={24} sm={24} xs={24}>
                      <Row justify={"center"} style={{ textAlign: "right" }}>
                        <Col xl={13} lg={13} md={22} sm={22} xs={22}>
                          <Typography.Title
                            level={3}
                            style={{
                              color: "#34d399",
                              textAlign: "left",
                            }}
                          >
                            Crypto Prediction
                          </Typography.Title>
                          <Typography.Title
                            level={1}
                            style={{
                              textAlign: "left",
                              padding: 0,
                              marginTop: 0,
                            }}
                          >
                            Accurate Cryptocurrency Predictions Tailored{" "}
                            <br></br>
                            to Your Needs
                          </Typography.Title>
                          <Typography.Paragraph
                            style={{
                              color: "#98A2B3",
                              textJustify: "inter-word",
                              textAlign: "justify",
                            }}
                          >
                            Our platform offers customizable settings for
                            trading type, cryptocurrency selection, and
                            prediction time intervals (15m, 4h, 1d), ensuring
                            you get the most accurate predictions for informed
                            trading decisions.
                          </Typography.Paragraph>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{
                            textAlign: "left",
                            marginBottom: 24,
                            marginTop: 24,
                          }}
                        >
                          <Typography.Text>
                            <ExperimentOutlined
                              style={{
                                color: "#34d399",
                                paddingRight: 8,
                                fontSize: 24,
                              }}
                            />
                            Tailored cryptocurrency predictions based on your
                            preferences and settings.
                          </Typography.Text>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{ textAlign: "left", marginBottom: 24 }}
                        >
                          <Typography.Text>
                            <CodeOutlined
                              style={{
                                color: "#34d399",
                                fontSize: 24,
                                paddingRight: 8,
                              }}
                            />
                            Customize trading type, cryptocurrency, and time
                            intervals for accurate predictions.
                          </Typography.Text>
                        </Col>
                        <Col
                          xl={13}
                          lg={13}
                          md={22}
                          sm={22}
                          xs={22}
                          style={{ textAlign: "left", marginBottom: 24 }}
                        >
                          <Typography.Text>
                            <BarChartOutlined
                              style={{
                                color: "#34d399",
                                fontSize: 24,
                                paddingRight: 8,
                              }}
                            />
                            Maximize trading success with personalized
                            prediction settings.
                          </Typography.Text>
                        </Col>
                      </Row>
                    </Col>
                    <Col
                      xl={12}
                      lg={12}
                      md={22}
                      sm={22}
                      xs={22}
                      style={{
                        justifyContent: "center",
                        alignContent: "center",
                        display: "block",
                        margin: "auto",
                      }}
                    >
                      <Col>
                        <Image
                          src="/public/descriptionimg1.png"
                          preview={false}
                          style={{ paddingLeft: screens.lg ? 30 : 0 }}
                        />
                      </Col>
                    </Col>
                  </Row>
                </Row>
              </Col>
            </Row>
            {/* FAQ */}
            <Col
              span={20}
              style={{
                display: "block",
                alignContent: "center",
                justifyContent: "center",
                margin: "auto",
                paddingTop: "6em",
              }}
            >
              <Row>
                <Col span={24}>
                  <Typography.Title
                    level={1}
                    style={{
                      textAlign: "center",
                      fontSize: 56,
                      marginBottom: "2em",
                    }}
                  >
                    Frequently Asked Question
                  </Typography.Title>
                </Col>
                {/* Collapse */}
                <Col
                  xl={20}
                  lg={20}
                  md={24}
                  sm={24}
                  xs={24}
                  style={{ margin: "auto" }}
                >
                  {/* <Collapse
                    items={items}
                    defaultActiveKey={["1"]}
                    onChange={onChange}
                    bordered={false}
                    expandIconPosition={"end"}
                    size="large"
                    style={{ backgroundColor: "#0D1010" }}
                  /> */}
                  <Space direction="vertical" style={{ width: "100%" }}>
                    <Collapse
                      defaultActiveKey={["1"]}
                      bordered={false}
                      expandIconPosition={"end"}
                      size="large"
                      style={{ backgroundColor: "#121515", marginBottom: 12 }}
                      items={[
                        {
                          key: "1",
                          label: "How accurate are your crypto predictions?",
                          children: (
                            <Typography.Paragraph
                              style={{ textAlign: "justify", color: "#98A2B3" }}
                            >
                              Our crypto predictions are based on thorough
                              analysis and extensive research by our team of
                              experts. While we strive for high accuracy, it's
                              important to remember that the crypto market is
                              volatile and predictions may not always be 100%
                              accurate.
                            </Typography.Paragraph>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      bordered={false}
                      expandIconPosition={"end"}
                      size="large"
                      style={{ backgroundColor: "#121515", marginBottom: 12 }}
                      items={[
                        {
                          key: "2",
                          label:
                            "What sets your crypto analysis services apart?",
                          children: (
                            <Typography.Paragraph></Typography.Paragraph>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      bordered={false}
                      expandIconPosition={"end"}
                      size="large"
                      style={{ backgroundColor: "#121515", marginBottom: 12 }}
                      items={[
                        {
                          key: "2",
                          label:
                            "How can I start using your crypto analysis services?",
                          children: (
                            <Typography.Paragraph></Typography.Paragraph>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      bordered={false}
                      expandIconPosition={"end"}
                      size="large"
                      style={{ backgroundColor: "#121515", marginBottom: 12 }}
                      items={[
                        {
                          key: "2",
                          label: "Do you offer personalized crypto analysis?",
                          children: (
                            <Typography.Paragraph></Typography.Paragraph>
                          ),
                        },
                      ]}
                    />
                    <Collapse
                      bordered={false}
                      expandIconPosition={"end"}
                      size="large"
                      style={{ backgroundColor: "#121515", marginBottom: 12 }}
                      items={[
                        {
                          key: "2",
                          label:
                            "Are there any free resources available for crypto analysis?",
                          children: (
                            <Typography.Paragraph></Typography.Paragraph>
                          ),
                        },
                      ]}
                    />
                  </Space>
                </Col>
              </Row>
            </Col>
            <Col span={24} style={{ padding: "8em 0" }}>
              <Row justify={"center"} align={"middle"}>
                <Col xl={14} lg={14} md={14} sm={20} xs={20}>
                  <Typography.Title level={1} style={{ textAlign: "center" }}>
                    JOIN OUR PLATFORM FOR {""}
                    <span style={{ color: "#34d399" }}>
                      SMARTER CRYPTO INVESTMENT DECISIONS
                    </span>
                  </Typography.Title>
                  <Col
                    style={{
                      margin: "auto",
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "6em",
                    }}
                  >
                    <Image src="/public/discordlogo.png" preview={false} />
                  </Col>
                  <Col
                    span={24}
                    style={{
                      paddingTop: "6em",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      type="primary"
                      size="large"
                      href="https://discord.gg/cgDAzmvWeH"
                      style={{
                        backgroundColor: "#03EFB0",
                        border: "none",
                        borderRadius: 8,
                        padding: screens.xs ? "0 8em" : "0 12em",
                        color: "black",
                      }}
                    >
                      Join Now
                    </Button>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </ConfigProvider>
      {/* <Modal
        footer={null}
        closeIcon={null}
        open={openModal}
        width={screens.xs ? "85%" : undefined}
        styles={{
          content: {
            borderRadius: 50,
            boxShadow: "1px 1px 8px 1px #FFFFFF",
            backgroundColor: "black",
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
          },
          body: {
            marginLeft: 20,
            marginRight: 20,
            backgroundColor: "transparent",
          },
        }}
        onCancel={() => handlers.closeLoginModal()}
      >
        <Form form={form}>
          <Row justify="center" align="middle" style={{ textAlign: "center" }}>
            <Col span={20}>
              <Row gutter={[12, 12]}>
                <Col span={24}>
                  <Typography.Title
                    style={{
                      fontFamily: "Inria Serif",
                      fontSize: 48,
                      color: "white",
                    }}
                  >
                    Coinhub
                  </Typography.Title>
                </Col>
                <Col span={24}>
                  <Input
                    size="large"
                    placeholder="Email Address"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  />
                </Col>
                <Col span={24}>
                  <Input.Password
                    size="large"
                    color="white"
                    placeholder="Password"
                    style={{
                      backgroundColor: "transparent",
                      color: "white",
                    }}
                  />
                </Col>
                <Col span={24} style={{ textAlign: "right" }}>
                  <Typography.Link>Forgot Password?</Typography.Link>
                </Col>
                <Col span={24}>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      backgroundColor: "#03EFB0",
                      color: "black",
                      width: "100%",
                      fontSize: 20,
                    }}
                  >
                    Login
                  </Button>
                </Col>
                <Divider style={{ color: "#858989" }}>Or Login With</Divider>
                <Col span={24} style={{ marginBottom: "2vh" }}>
                  <Space direction="horizontal" size={32}>
                    <Image
                      preview={false}
                      src={GOOGLELOGIN_LOGO}
                      style={{ height: 48, width: 48 }}
                    />
                    <Image
                      preview={false}
                      src={DISCORDLOGIN_LOGO}
                      style={{ height: 48, width: 48 }}
                    />
                  </Space>
                </Col>
                <Col span={24}>
                  <Space>
                    <Typography.Text style={{ color: "white" }}>
                      Don’t have an account yet?
                    </Typography.Text>
                    <Typography.Link>Register Now</Typography.Link>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </Form>
      </Modal> */}
    </AppContainer>
  );
};
