import { AcademyLanding, productJsonLd } from '@/components/academy-landing'

export default function Page() {
  return (
    <>
      <AcademyLanding />
      <script type="application/ld+json">{JSON.stringify(productJsonLd)}</script>
    </>
  )
}
