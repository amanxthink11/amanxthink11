import InningsBoard from "@/components/InningsBoard";
import Section from "@/components/ui/Section";

export default function Journey() {
  return (
    <Section
      id="journey"
      title="Innings"
      intro={
        <p>
          Every company, client and late-night release added something to how I build. Some innings went big, some
          taught me more. <strong className="text-chalk">Pick one and read the scorecard.</strong>
        </p>
      }
    >
      <InningsBoard />
    </Section>
  );
}
