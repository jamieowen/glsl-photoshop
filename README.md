# glsl-blend

Photoshop blending modes in glsl for use with [glslify](https://github.com/stackgl/glslify).
Blending modes include Screen, Multiply, Soft Light, Vivid Light, Overlay, etc.
Implementations sourced from this article on [Photoshop math](https://mouaif.wordpress.com/2009/01/05/photoshop-math-with-glsl-shaders/).

<http://jamieowen.github.io/glsl-blend>



## Installation
```shell
npm install glsl-blend
```

[![NPM](https://nodei.co/npm/gl-geometry.png)](https://nodei.co/npm/gl-geometry/)

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

## Standard Usage

Blend modes can be imported individually using the standard glslify preprocessor syntax.

```glsl
#pragma glslify: blendAdd = require(glsl-blend/add)
#pragma glslify: blendAverage = require(glsl-blend/average)
#pragma glslify: blendColorBurn = require(glsl-blend/color-burn)
#pragma glslify: blendColorDodge = require(glsl-blend/color-dodge)
#pragma glslify: blendDarken = require(glsl-blend/darken)
#pragma glslify: blendDifference = require(glsl-blend/difference)
#pragma glslify: blendExclusion = require(glsl-blend/exclusion)
#pragma glslify: blendGlow = require(glsl-blend/glow)
#pragma glslify: blendHardLight = require(glsl-blend/hard-light)
#pragma glslify: blendHardMix = require(glsl-blend/hard-mix)
#pragma glslify: blendLighten = require(glsl-blend/lighten)
#pragma glslify: blendLinearBurn = require(glsl-blend/linear-burn)
#pragma glslify: blendLinearDodge = require(glsl-blend/linear-dodge)
#pragma glslify: blendLinearLight = require(glsl-blend/linear-light)
#pragma glslify: blendMultiply = require(glsl-blend/multiply)
#pragma glslify: blendNegation = require(glsl-blend/negation)
#pragma glslify: blendNormal = require(glsl-blend/normal)
#pragma glslify: blendOverlay = require(glsl-blend/overlay)
#pragma glslify: blendPhoenix = require(glsl-blend/phoenix)
#pragma glslify: blendPinLight = require(glsl-blend/pin-light)
#pragma glslify: blendReflect = require(glsl-blend/reflect)
#pragma glslify: blendScreen = require(glsl-blend/screen)
#pragma glslify: blendSoftLight = require(glsl-blend/soft-light)
#pragma glslify: blendSubstract = require(glsl-blend/substract)
#pragma glslify: blendVividLight = require(glsl-blend/vivid-light)
```

A foreground and background color is needed to perform a blend operation.

```glsl
#pragma glslify: blend = require(glsl-blend/screen)

void main() {
  vec4 bgColor = texture2D(bg, vUv);
  vec4 fgColor = texture2D(foreground, vUv);

  vec3 color = blend(bgColor.rgb, fgColor.rgb);
  gl_FragColor = vec4(color, 1.0);
}
```

Blend modes can also specify an additional opacity argument using function overloading.
```glsl
  float opacity = 0.75;
  vec3 color = blend(bgColor.rgb, fgColor.rgb, opacity );
```

## Modal Usage

There is also an additional 'all' glsl function that can be imported to allow you to use
any blend mode by specifying an integer.  The modes

## Todo

* Hue, Luminance, Saturation & Color Modes. ( req. color conversion dependencies )


## Contributing

See [stackgl/contributing](https://github.com/stackgl/contributing).

## License

MIT. See [LICENSE.md](http://github.com/mattdesl/glsl-blend-soft-light/blob/master/LICENSE.md) for details.

