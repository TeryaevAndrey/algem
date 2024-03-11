import { AnimationBlock, Banner, Header } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner>
        <Header />
      </Banner>

      <main className="flex flex-col min-h-screen w-full gap-12 lg:gap-0">
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
      </main>
    </>
  );
}
