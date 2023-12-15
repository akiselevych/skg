//components
import PageBanner from "@/components/PageBanner/PageBanner"
import AboutUs from "@/components/AboutUs/AboutUs"

interface Props {
  params: {
    lng: string;
  };
}

export default async function Home({ params: { lng } }: Props) {
  return (
    <>
      <PageBanner lng={lng} nextBlockLink="#aboutUs" page="home" />
      <AboutUs lng={lng} />
    </ >
  )
}
