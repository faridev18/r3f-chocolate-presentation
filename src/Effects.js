import { EffectComposer, Bloom, Vignette, HueSaturation } from '@react-three/postprocessing'

export default function CustomEffects() {
  return (
    <EffectComposer disableNormalPass multisampling={8}>
      <Bloom luminanceThreshold={0.7} mipmapBlur luminanceSmoothing={0.2} radius={0.9} intensity={0.8} levels={6} />
      <Vignette darkness={0.35} />
      <HueSaturation hue={-0.2} saturation={0.1} />
    </EffectComposer>
  )
}
