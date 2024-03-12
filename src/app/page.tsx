import {
  AnimationBlock,
  Banner,
  Discoveries,
  Header,
  Partners,
  SectionWrapper,
} from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner>
        <Header />
      </Banner>

      <main className="flex flex-col min-h-screen w-full">
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
      </main>
    </>
  );
}
