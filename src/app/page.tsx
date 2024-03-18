import {
  About,
  Advantages,
  AnimationBlocks,
  Aspects,
  Banner,
  CommunityList,
  Discoveries,
  Footer,
  Header,
  Partners,
  SectionWrapper,
} from "@/components";

export default function Home() {
  return (
    <>
      <Banner>
        <Header />
      </Banner>

      <main className="flex flex-col min-h-screen w-full">
        <About />

        <AnimationBlocks />
      </main>

      <Footer />
    </>
  );
}
