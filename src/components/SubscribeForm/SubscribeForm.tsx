import { ArrRight } from "../icons";
import { Button } from "../ui";

export const SubscribeForm = () => {
  return (
    <form
      action="https://app.getresponse.com/add_subscriber.html"
      acceptCharset="utf-8"
      method="post"
      className="flex items-center gap-2"
    >
      <input
        className="py-2 px-3.5 min-h-[34px] rounded-xl bg-transparent border border-white/20 text-sm text-white placeholder:text-white/80 w-full"
        type="email"
        placeholder="Email"
        name="email"
      />

      <input type="hidden" name="campaign_token" value="L5ygQ" />

      <input type="hidden" name="Thank you for subscribing!" value="" />
      <input type="hidden" name="start_day" value="0" />

      <Button
        className="w-[104px] !gap-2 !text-xs !rounded-xl !bg-[#454A52] !text-white [&>svg>g>path]:stroke-white"
        title="Subscribe"
        icon={<ArrRight />}
        size="small"
        btnType="submit"
      />
    </form>
  );
};
