"use client";

import { PartnerItem } from "../entities";
import { motion } from "framer-motion";

export const Partners = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
      <motion.div
        transition={{ ease: "backOut", duration: 0.6 }}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        <PartnerItem
          img="/images/partner-1.svg"
          title="Sirius "
          text="Sirius Finance is the first stablecoin AMM infrastructure on Astar Network"
        />
      </motion.div>
      <motion.div
        transition={{ ease: "backOut", duration: 0.6, delay: 0.1 }}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        <PartnerItem
          img="/images/partner-2.svg"
          title="Arthswap "
          text="One-stop DeFi on Astar Network"
        />
      </motion.div>
      <motion.div
        transition={{ ease: "backOut", duration: 0.6, delay: 0.2 }}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        <PartnerItem
          img="/images/partner-3.svg"
          title="SiO2 "
          text="SiO2 Finance is the Astar-native lending hub that supports both EVM and WASM
          "
        />
      </motion.div>
      <motion.div
        transition={{ ease: "backOut", duration: 0.6 }}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        <PartnerItem
          img="/images/partner-4.svg"
          title="AstridDAO "
          text="A decentralized money market with native stablecoin"
        />
      </motion.div>
      <motion.div
        transition={{ ease: "backOut", duration: 0.6, delay: 0.1 }}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        <PartnerItem
          img="/images/partner-5.svg"
          title="Starlay "
          text="A Leading Polkadot Ecosystem Protocol for Secure and Innovative Lending
          Astar Degens - Astar Degens is a DAO developed to provide support to on the Astar ecosystem
          "
        />
      </motion.div>

      <motion.div
        transition={{ ease: "backOut", duration: 0.6, delay: 0.1 }}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        <PartnerItem
          img="/images/partner-9.svg"
          title="Astar Degens "
          text="Astar Degens is a DAO developed to provide support to on the Astar ecosystem
          "
        />
      </motion.div>
      <motion.div
        transition={{ ease: "backOut", duration: 0.6, delay: 0.2 }}
        initial={{ opacity: 0, translateY: 30 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
      >
        <PartnerItem
          img="/images/partner-8.svg"
          title="More dApps to come "
          text="Stay tuned to know our next partner"
        />
      </motion.div>
    </div>
  );
};
