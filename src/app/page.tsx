import {
  About,
  Advantages,
  AnimationBlock,
  AspectItem,
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

        <div className="flex flex-col gap-12 lg:gap-0 py-6 lg:py-[120px]">
          <AnimationBlock
            title="Supply your tokens to the pools on the partner DEXs"
            suptitle="The Liquid Farming"
            img="/images/animation-block-1.jpg"
          />
          <AnimationBlock
            title="Supply your tokens to the pools on the partner DEXs"
            suptitle="The Liquid Farming"
            img="/images/animation-block-1.jpg"
          />
          <AnimationBlock
            title="Supply your tokens to the pools on the partner DEXs"
            suptitle="The Liquid Farming"
            img="/images/animation-block-1.jpg"
          />

          <AnimationBlock
            title="Supply your tokens to the pools on the partner DEXs"
            suptitle="The Liquid Farming"
            img="/images/animation-block-1.jpg"
            reverse={true}
          />
          <AnimationBlock
            title="Supply your tokens to the pools on the partner DEXs"
            suptitle="The Liquid Farming"
            img="/images/animation-block-1.jpg"
            reverse={true}
          />
          <AnimationBlock
            title="Supply your tokens to the pools on the partner DEXs"
            suptitle="The Liquid Farming"
            img="/images/animation-block-1.jpg"
            reverse={true}
          />
        </div>

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
      </main>

      <Footer />
    </>
  );
}
