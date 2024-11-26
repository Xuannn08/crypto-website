import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { Row, Avatar, Col, Typography, Image, Space, Flex } from "antd";
import { useTrail, a } from "@react-spring/web";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import React from "react";
import { useHref } from "react-router-dom";
import SERVER_LOGO from "/public/coinhub.png";
import DISCORD_LOGO from "/public/discordAbout.png";
import X_LOGO from "/public/xAbout.png";

interface TrailProps {
  open: boolean;
  delay?: number;
}

const Trail: React.FC<React.PropsWithChildren<TrailProps>> = ({
  open,
  children,
  delay = 0,
}) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 110 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay,
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {trail.map(({ x, ...style }, index) => (
        <a.div
          key={index}
          style={{
            ...style,
            textAlign: "center",
            color: "white",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          <a.div
            style={{
              ...style,
              transform: x.to((xVal) => `translateX(${xVal}%)`),
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            {items[index]}
          </a.div>
        </a.div>
      ))}
    </div>
  );
};

export const SneakPeak: React.FC<any> = () => {
  const [init, setInit] = useState(false);
  const [open, setOpen] = useState(true);
  const [openFirst, setOpenFirst] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);

  useEffect(() => {
    setOpenFirst(true);

    const timeout = setTimeout(() => {
      setOpenSecond(true);
    }, 1800);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: { value: "black" },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 4 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: "#ffffff" },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: MoveDirection.none,
          enable: true,
          outModes: { default: OutMode.out },
          random: false,
          speed: 1,
          straight: false,
        },
        number: { density: { enable: true }, value: 80 },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 5 } },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <>
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <Row
          justify="center"
          align="middle"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            textAlign: "center",
          }}
        >
          <Col span={24}>
            <Avatar size={256} src={SERVER_LOGO}></Avatar>
            <Typography.Title
              level={1}
              style={{ color: "white", fontFamily: "Inria Serif" }}
            >
              Coinhub
            </Typography.Title>
            <Space size={48} style={{ marginBottom: 24 }}>
              <Image
                preview={false}
                src={DISCORD_LOGO}
                style={{ height: 48, width: 48, cursor: "pointer" }}
                onClick={() => {
                  window.location.href = "https://discord.gg/cgDAzmvWeH";
                }}
              />
              <Image
                preview={false}
                src={X_LOGO}
                style={{ height: 40, width: 40, cursor: "pointer" }}
                onClick={() => {
                  window.location.href = "https://x.com/Coinhub__";
                }}
              />
            </Space>

            <Trail open={openFirst}>
              <span>Accurate</span>
              <span>Crypto</span>
              <span>&</span>
              <span>Stock</span>
              <span>Predictions</span>
              <span>for</span>
              <span>Smarter</span>
              <span>Investing</span>
            </Trail>

            <Trail open={openSecond}>
              <span style={{ color: "#03efb0", fontSize: "45px" }}>Coming</span>
              <span style={{ color: "#03efb0", fontSize: "45px" }}>Soon</span>
            </Trail>
          </Col>
        </Row>
      </>
    );
  }

  return <></>;
};
