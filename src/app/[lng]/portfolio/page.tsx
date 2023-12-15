//components
import PageBanner from "@/components/PageBanner/PageBanner"
import PortfolioCards from "@/components/PortfolioCards/PortfolioCards"

interface Props {
  params: {
    lng: string;
  };
}

export default async function Page({ params: { lng } }: Props) {
  return (
    <>
      <PageBanner lng={lng} nextBlockLink="#cards" page="portfolio" />
      <PortfolioCards lng={lng} />
    </>
  )
}

