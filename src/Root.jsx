import React from "react";
import { Composition } from "remotion";
import { iPhone17Ad } from "./iPhone17Ad";
export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="PremiumProductShowcase"
        component={iPhone17Ad}
        durationInFrames={600}
        fps={60}
        width={3840}
        height={2160}
      />
    </>
  );
};
