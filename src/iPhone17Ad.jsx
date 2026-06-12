import React from "react";
import {
  AbsoluteFill,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const iPhone17Ad = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const explode = interpolate(frame, [120, 260], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const reassemble = interpolate(frame, [430, 560], [1, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const heroScale = spring({
    fps,
    frame,
    config: { damping: 120, stiffness: 80 },
  });

  const separation = explode * reassemble;

  const screenZ = 280 * separation;
  const backZ = -280 * separation;
  const batteryZ = 120 * separation;
  const chipZ = -120 * separation;
  const cameraZ = 180 * separation;

  const luxuryRotate = interpolate(frame, [260, 430], [0, 18], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const sweep = interpolate(frame, [40, 160], [-1200, 1200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textOpacity = (start, end) =>
    interpolate(frame, [start, start + 20, end - 20, end], [0, 1, 1, 0], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(180deg,#f7f7f5,#e8e8e5)",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        fontFamily: "Inter, Arial, sans-serif",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 2200,
          height: 2200,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.95), transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          position: "relative",
          width: 650,
          height: 1280,
          transform: `scale(${0.85 + heroScale * 0.15}) rotateY(${luxuryRotate}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 78,
            background: "linear-gradient(180deg,#fafafa,#d9d9d9)",
            transform: `translateZ(${backZ}px)`,
            boxShadow: "0 40px 120px rgba(0,0,0,0.15)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 60,
            top: 70,
            transform: `translateZ(${cameraZ}px)`,
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: 110,
                height: 110,
                borderRadius: "50%",
                background: "#1c1c1c",
                left: i === 1 ? 120 : 0,
                top: i === 2 ? 120 : 0,
                boxShadow: "0 0 30px rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

        <div
          style={{
            position: "absolute",
            left: 170,
            top: 340,
            width: 320,
            height: 470,
            borderRadius: 28,
            background: "linear-gradient(180deg,#444,#222)",
            transform: `translateZ(${batteryZ}px)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 240,
            top: 900,
            width: 180,
            height: 180,
            borderRadius: 24,
            background: "linear-gradient(180deg,#dfdfdf,#9e9e9e)",
            transform: `translateZ(${chipZ}px)`,
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 78,
            background: "linear-gradient(180deg,#080808,#202020)",
            transform: `translateZ(${screenZ}px)`,
            overflow: "hidden",
            boxShadow: "0 40px 120px rgba(0,0,0,0.22)",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)",
              transform: `translateX(${sweep}px)`,
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "rgba(255,255,255,0.85)",
              fontSize: 220,
              fontWeight: 700,
            }}
          >
            17
          </div>
        </div>
      </div>

      <div style={{
        position:"absolute", bottom:260, fontSize:72, fontWeight:600,
        color:"#111", opacity:textOpacity(150,250)
      }}>
        Crafted Beyond Precision
      </div>

      <div style={{
        position:"absolute", bottom:260, fontSize:72, fontWeight:600,
        color:"#111", opacity:textOpacity(250,350)
      }}>
        Engineered From Within
      </div>

      <div style={{
        position:"absolute", bottom:260, fontSize:72, fontWeight:600,
        color:"#111", opacity:textOpacity(350,450)
      }}>
        Titanium. Reimagined.
      </div>

      <div style={{
        position:"absolute", bottom:260, fontSize:72, fontWeight:600,
        color:"#111", opacity:textOpacity(450,550)
      }}>
        Power In Perfect Balance
      </div>

      <div style={{
        position:"absolute", bottom:140, textAlign:"center",
        opacity:interpolate(frame,[540,590],[0,1],{
          extrapolateLeft:"clamp", extrapolateRight:"clamp"
        })
      }}>
        <div style={{fontSize:140,fontWeight:800,color:"#111"}}>
          iPhone 17
        </div>
        <div style={{fontSize:48,color:"#555",marginTop:12}}>
          Designed For What's Next
        </div>
      </div>
    </AbsoluteFill>
  );
};

export default iPhone17Ad;
