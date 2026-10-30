import SkillBoard from "@/components/SkillBoard";
import Section from "@/components/ui/Section";
import { SKILL_STICKERS } from "@/data/site-data";

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Skills"
      intro={<p>Every sticker is something I work with, or love doing. Drag them around, stack them, make a mess.</p>}
    >
      <SkillBoard skills={SKILL_STICKERS} />
    </Section>
  );
}
