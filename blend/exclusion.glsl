/**
 *
 * BlendExclusion
 * 
 * The code here is generated using the ../source/convert.js script.
 * Modify that file to update.
 * Alternative implementations could be tried, for example : https://github.com/mattdesl/glsl-blend-soft-light
 *
 */

vec3 blendExclusion(vec3 base, vec3 blend) {
	return base+blend-2.0*base*blend;
}

#pragma glslify: export(blendExclusion)