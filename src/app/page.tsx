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
import { Button } from "@/components/ui";

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
            title="Get liquid lASTR tokens as the equivalent of your position"
            suptitle="The Liquid Farming"
            img="/images/animation-block-2.jpg"
          />
          <AnimationBlock
            title="Earn triple rewards in the form of the ALGM incentives, DEXs and l-tokens farming rewards"
            suptitle="The Liquid Farming"
            img="/images/animation-block-3.jpg"
            btn={
              <Button
                className="!bg-base-content-primary !h-[56px] mt-3 lg:mt-0"
                title="Coming soon"
                size="big"
                type="secondary"
              />
            }
          />

          <AnimationBlock
            title="Stake ASTR"
            suptitle="The Liquid Farming"
            img="/images/animation-block-4.jpg"
            reverse={true}
          />
          <AnimationBlock
            title="Get liquid nASTR tokens and start to receive staking rewards"
            suptitle="The Liquid Farming"
            img="/images/animation-block-5.jpg"
            reverse={true}
          />
          <AnimationBlock
            title="Use your nASTR tokens across DeFi to increase your profits"
            suptitle="The Liquid Farming"
            img="/images/animation-block-6.jpg"
            reverse={true}
            btn={
              <Button
                className="!bg-base-content-primary !h-[56px] mt-3 lg:mt-0"
                title="Stake now"
                size="big"
                type="secondary"
              />
            }
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
