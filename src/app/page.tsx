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
    <div>
      <div>
        <Banner>
          <Header />
        </Banner>

        <About />
      </div>

      <main className="flex flex-col min-h-screen w-full">
        <AnimationBlocks />

        <div>
          <SectionWrapper
            className="bg-base-100"
            title={
              <>
                Algem <span>ecosystem partners</span>
              </>
            }
          >
            <Partners />
          </SectionWrapper>

          <Discoveries />

          <Advantages />

          <SectionWrapper
            className="aspects-section"
            title={
              <>
                Commited to the all <br />
                security aspects
              </>
            }
            classNameTitle="text-white"
          >
            <Aspects />
          </SectionWrapper>

          <SectionWrapper
            title={
              <>
                Join <span>our community</span>
              </>
            }
            classNameTitle="[&>span]:text-base-content-primary"
          >
            <CommunityList />
          </SectionWrapper>
        </div>
      </main>

      <Footer />
    </div>
  );
}
