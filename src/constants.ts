import { BlendMode, BlendModeDef3, BlendModeDef4 } from "./api";
import {
  blendAdd3,
  blendAdd4,
  blendAverage3,
  blendAverage4,
  blendColorBurn3,
  blendColorBurn4,
  blendColorDodge3,
  blendColorDodge4,
  blendDarken3,
  blendDarken4,
  blendDifference3,
  blendDifference4,
  blendExclusion3,
  blendExclusion4,
  blendGlow3,
  blendGlow4,
  blendHardLight3,
  blendHardLight4,
  blendHardMix3,
  blendHardMix4,
  blendLighten3,
  blendLighten4,
  blendLinearBurn3,
  blendLinearBurn4,
  blendLinearDodge3,
  blendLinearDodge4,
  blendLinearLight3,
  blendLinearLight4,
  blendMultiply3,
  blendMultiply4,
  blendNegation3,
  blendNegation4,
  blendNormal3,
  blendNormal4,
  blendOverlay3,
  blendOverlay4,
  blendPhoenix3,
  blendPhoenix4,
  blendPinLight3,
  blendPinLight4,
  blendReflect3,
  blendReflect4,
  blendScreen3,
  blendScreen4,
  blendSoftLight3,
  blendSoftLight4,
  blendSubtract3,
  blendSubtract4,
  blendVividLight3,
  blendVividLight4,
} from "./def-export";

export const BLEND_MODES_3: Record<BlendMode, BlendModeDef3> = {
  add: blendAdd3,
  average: blendAverage3,
  "color-burn": blendColorBurn3,
  "color-dodge": blendColorDodge3,
  darken: blendDarken3,
  difference: blendDifference3,
  exclusion: blendExclusion3,
  glow: blendGlow3,
  "hard-light": blendHardLight3,
  "hard-mix": blendHardMix3,
  lighten: blendLighten3,
  "linear-burn": blendLinearBurn3,
  "linear-dodge": blendLinearDodge3,
  "linear-light": blendLinearLight3,
  multiply: blendMultiply3,
  negation: blendNegation3,
  normal: blendNormal3,
  overlay: blendOverlay3,
  phoenix: blendPhoenix3,
  "pin-light": blendPinLight3,
  reflect: blendReflect3,
  screen: blendScreen3,
  "soft-light": blendSoftLight3,
  subtract: blendSubtract3,
  "vivid-light": blendVividLight3,
};

export const BLEND_MODES_4: Record<BlendMode, BlendModeDef4> = {
  add: blendAdd4,
  average: blendAverage4,
  "color-burn": blendColorBurn4,
  "color-dodge": blendColorDodge4,
  darken: blendDarken4,
  difference: blendDifference4,
  exclusion: blendExclusion4,
  glow: blendGlow4,
  "hard-light": blendHardLight4,
  "hard-mix": blendHardMix4,
  lighten: blendLighten4,
  "linear-burn": blendLinearBurn4,
  "linear-dodge": blendLinearDodge4,
  "linear-light": blendLinearLight4,
  multiply: blendMultiply4,
  negation: blendNegation4,
  normal: blendNormal4,
  overlay: blendOverlay4,
  phoenix: blendPhoenix4,
  "pin-light": blendPinLight4,
  reflect: blendReflect4,
  screen: blendScreen4,
  "soft-light": blendSoftLight4,
  subtract: blendSubtract4,
  "vivid-light": blendVividLight4,
};