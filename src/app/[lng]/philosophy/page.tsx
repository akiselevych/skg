//components
import PageBanner from "@/components/PageBanner/PageBanner"
import PhilosophyBlock from "@/components/PhilosophyBlock/PhilosophyBlock"

interface Props {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: Props) {
  return (
    <>
      <PageBanner lng={lng} nextBlockLink="#philosophyBlock" page="philosophy" />
      <PhilosophyBlock lng={lng} />
    </>
  )
}

