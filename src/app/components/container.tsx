import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons";
import {
  Breadcrumb,
  Button,
  Col,
  Grid,
  Layout,
  Row,
  Space,
  Spin,
  Typography,
  Flex,
  Modal,
  Input,
  Image,
  Form,
  Divider,
} from "antd";
import { useForm } from "antd/es/form/Form";

import React, { FC, PropsWithChildren, ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import background from "/public/background.png";
import DISCORDLOGO from "/public/discordlogo.png";
import DISCORDLOGIN_LOGO from "/public/discordLogin.png";
import GOOGLELOGIN_LOGO from "/public/googleLogin.png";
import DISCORDABOUT from "/public/discordAbout.png";
import XABOUT from "/public/xAbout.png";
import MEDIUMABOUT from "/public/mediumAbout.png";
import TIKTOKABOUT from "/public/tiktokAbout.png";
import INSTAGRAMABOUT from "/public/instagramAbout.png";

type ContainerProps = {
  back?: boolean | string | (() => void);
  title?: string | ReactElement;
  subTitle?: string | ReactElement;
  loading?: boolean;
  extra?: ReactElement;
  breadcrumbs?: {
    name: string;
    path?: string;
  }[];
  showFooter?: boolean;
  showHeader?: boolean;
  header?: boolean | string | ReactElement;
  footer?: boolean | string | ReactElement;
  style?: React.CSSProperties;
};

export const AppContainer: FC<PropsWithChildren<ContainerProps>> = (props) => {
  const {
    children,
    style,
    back,
    title,
    subTitle,
    extra,
    loading = false,
    breadcrumbs,
    header = true,
    footer = true,
  } = props;

  const navigate = useNavigate();
  const screens = Grid.useBreakpoint();
  const isTablet = window.innerWidth <= 1300;
  const [openModal, setOpenModal] = useState<boolean>();
  const [form] = useForm();

  const handlers = {
    openLoginModal: () => {
      setOpenModal(true);
    },
    closeLoginModal: () => {
      setOpenModal(false);
      form.resetFields();
    },
  };
  const Navigation = [
    {
      key: "products",
      title: "Market",
      path: "/market",
    },
    {
      key: "purchaseHistory",
      title: "Prediction",
      path: "/prediction",
    },
    {
      key: "vouchers",
      title: "Premium",
      path: "/premium",
    },
    {
      key: "rewards",
      title: "News",
      path: "/news",
    },
  ];

  return (
    <Layout style={style ?? { minHeight: "max-content" }}>
      {title && (
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: 24 }}
        >
          <Col>
            <Space size={4} align="center" direction="horizontal">
              {back && (
                <Button
                  style={{ color: "black" }}
                  type="link"
                  icon={<ArrowLeftOutlined style={{ cursor: "pointer" }} />}
                  onClick={() => {
                    if (typeof back === "string") {
                      navigate(back);
                    } else if (typeof back === "function") {
                      back();
                    } else if (back) {
                      navigate(-1);
                    }
                  }}
                />
              )}
              <Typography.Title level={5} style={{ margin: 0, marginLeft: 4 }}>
                {title}
              </Typography.Title>
              {subTitle && (
                <Typography.Text style={{ color: "#676767" }}>
                  &nbsp;<small>{subTitle}</small>
                </Typography.Text>
              )}
            </Space>
          </Col>
          <Col>{extra}</Col>
        </Row>
      )}

      {breadcrumbs && (
        <Breadcrumb style={{ marginBottom: 8 }}>
          {breadcrumbs?.map((b, i) => {
            return (
              <Breadcrumb.Item key={i} href={b.path}>
                {b.name}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      )}

      <Layout.Content style={{ minHeight: screens.xs ? "" : "80vh" }}>
        <Spin spinning={loading}>{children}</Spin>
      </Layout.Content>
      {typeof header == "object"
        ? header
        : header && (
            <Layout.Header
              className="header"
              id="gnb"
              style={{
                boxShadow: "0px 1px 100px -10px #03EFB0",
                width: "100%",
              }}
            >
              <Row justify={"center"}>
                <Col span={isTablet ? 24 : 24}>
                  <Row
                    justify="space-between"
                    align="middle"
                    style={{ color: "white" }}
                  >
                    <Col>
                      <Typography.Title
                        level={1}
                        className="hoverText"
                        onClick={() => navigate("/")}
                        style={{
                          fontFamily: "Inria Serif",
                          fontSize: 40,
                          margin: "0px 6vw 0px 0px",
                          color: "white",
                        }}
                      >
                        Coinhub
                      </Typography.Title>
                    </Col>
                    {!isTablet && (
                      <Col flex={"auto"}>
                        <Space
                          style={{
                            width: "100%",
                            justifyContent: "space-between",
                            paddingLeft: 24,
                            paddingRight: 24,
                          }}
                        >
                          <Space size={64} style={{ margin: "auto" }}>
                            {Navigation.map((item, index) => {
                              return (
                                <Typography.Text
                                  key={index}
                                  className="hoverText"
                                  style={{
                                    fontSize: 24,
                                    color: "white",
                                  }}
                                  // style={{
                                  //   fontSize: "1vw",
                                  //   color: pathname.includes(item.path)
                                  //     ? token.colorPrimary
                                  //     : "black",
                                  // }}
                                  onClick={() => navigate(item.path)}
                                >
                                  {item.title}
                                </Typography.Text>
                              );
                            })}
                          </Space>

                          {/* <Typography.Text
                        className="pointer"
                        style={{ fontSize: 16 }}
                        onClick={() => handlers.logout()}
                      >
                        {t("Logout")}
                      </Typography.Text> */}
                        </Space>
                      </Col>
                    )}

                    <Col>
                      <Row justify="space-between" align="middle">
                        <Flex gap="small" vertical>
                          <Flex gap="small" align="center">
                            <Button
                              size="large"
                              block
                              icon={<UserOutlined />}
                              style={{
                                color: "#03EFB0",
                                background: "none",
                                borderColor: "#03EFB0",
                                justifyContent: "end",
                                fontSize: 18,
                              }}
                              onClick={() => handlers.openLoginModal()}
                            >
                              Sign up / Login
                            </Button>
                          </Flex>
                        </Flex>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Layout.Header>
          )}
      {typeof footer == "object"
        ? footer
        : footer && (
            <Layout.Footer
              style={{
                boxShadow: "0px 1px 100px -10px #03EFB0",
                width: "100%",
                backgroundColor: "black",
              }}
            >
              <Row>
                <Col span={24}>
                  <Row align={"middle"}>
                    <Col span={12} style={{ textAlign: "left" }}>
                      <Col span={24}>
                        <Image preview={false} src={DISCORDLOGO} />
                      </Col>
                      <Col span={24}>
                        <Button
                          type="primary"
                          size="large"
                          href="https://discord.gg/cgDAzmvWeH"
                          style={{
                            backgroundColor: "#03EFB0",
                            border: "none",
                            borderRadius: 24,
                            padding: screens.xs ? "0 4em" : "0 7em",
                            margin: "2vh 0",
                            color: "black",
                          }}
                        >
                          Join Now
                        </Button>
                      </Col>
                      <Col span={24}>
                        <Typography.Title
                          level={2}
                          style={{
                            color: "white",
                            marginTop: 0,
                          }}
                        >
                          CONNECT WITH US
                        </Typography.Title>
                      </Col>
                      <Col span={24}>
                        <Space size={24}>
                          <Image preview={false} src={XABOUT} />
                          <Image preview={false} src={DISCORDABOUT} />
                          <Image preview={false} src={INSTAGRAMABOUT} />
                          <Image preview={false} src={MEDIUMABOUT} />
                          <Image preview={false} src={TIKTOKABOUT} />
                        </Space>
                      </Col>
                      <Col span={24}>
                        <Typography.Title
                          level={5}
                          style={{
                            color: "white",
                          }}
                        >
                          © 2024 Coinhub
                        </Typography.Title>
                      </Col>
                    </Col>
                    <Col span={12} style={{ textAlign: "right" }}>
                      <Col>
                        <Typography.Title
                          level={2}
                          style={{
                            color: "white",
                          }}
                        >
                          About us
                        </Typography.Title>
                      </Col>
                      <Space direction="vertical" size={12} align="start">
                        <Col span={24}>
                          <Typography.Text style={{ color: "white" }}>
                            About
                          </Typography.Text>
                        </Col>
                        <Col span={24}>
                          <Typography.Text style={{ color: "white" }}>
                            Team
                          </Typography.Text>
                        </Col>
                        <Col span={24}>
                          <Typography.Text style={{ color: "white" }}>
                            Blog
                          </Typography.Text>
                        </Col>
                        <Col span={24}>
                          <Typography.Text style={{ color: "white" }}>
                            Sponsor
                          </Typography.Text>
                        </Col>
                      </Space>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Layout.Footer>
          )}
      <Modal
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
                <Divider style={{ color: "#858989" }}>
                  Or Login / Sign up With
                </Divider>
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
      </Modal>
    </Layout>
  );
};

// export const header: FC<PropsWithChildren<ContainerProps>> = (props) => {};
