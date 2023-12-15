//components
import PageBanner from "@/components/PageBanner/PageBanner"

interface Props {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: Props) {
  return (
    <>
      <PageBanner lng={lng} nextBlockLink="#test" page="contact" />
    </>
  )
}
