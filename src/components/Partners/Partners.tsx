import { PartnerItem } from "../entities";

export const Partners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      <PartnerItem
        img="/images/partner-1.svg"
        title="Sirius"
        text="Use your nASTR token for yield farming or lending across Astar Network's DeFi ecosystem. Use your nASTR token for yield farming or lending "
      />
      <PartnerItem
        img="/images/partner-2.svg"
        title="Arthswap"
        text="Use your nASTR token for yield farming or lending across Astar Network's DeFi ecosystem. "
      />
      <PartnerItem
        img="/images/partner-3.svg"
        title="SiO2"
        text="Use your nASTR token for yield farming or lending across Astar Network's DeFi ecosystem. "
      />
      <PartnerItem
        img="/images/partner-4.svg"
        title="AstridDAO"
        text="Use your nASTR token for yield farming or lending across Astar Network's DeFi ecosystem. Use your nASTR token for yield farming or lending "
      />
      <PartnerItem
        img="/images/partner-5.svg"
        title="Starlay"
        text="Use your nASTR token for yield farming or lending across Astar Network's DeFi ecosystem. "
      />
      <PartnerItem
        img="/images/partner-6.svg"
        title="Equilibrium"
        text="Use your nASTR token for yield farming or lending across Astar Network's DeFi ecosystem. "
      />
      <PartnerItem
        img="/images/partner-7.svg"
        title="Stella Swap"
        text="Use your nASTR token for yield farming or lending across Astar Network's DeFi ecosystem. Use your nASTR token for yield farming or lending "
      />
      <PartnerItem
        img="/images/partner-8.svg"
        title="Other dApps"
        text="Use your nASTR token for yield farming or lending across Astar Network's DeFi ecosystem. "
      />
    </div>
  );
};
