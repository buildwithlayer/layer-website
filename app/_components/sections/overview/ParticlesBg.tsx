"use client";

import { Container } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import React, { useEffect, useState } from "react";

const ParticlesBg = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (init) return;
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container: Container | undefined) => {
    console.log(container);
  };

  return (
    init && (
      <div className="w-full h-full -z-10 absolute top-0 left-0 opacity-40">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#000000",
              },
            },
            fpsLimit: 1000,
            smooth: true,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.1,
                },
              },
            },
            particles: {
              color: {
                value: "#52004a",
              },
              links: {
                color: "#52004a",
                distance: 150,
                enable: true,
                opacity: 1,
                width: 4,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 150,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 3, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
    )
  );
};

export default ParticlesBg;
