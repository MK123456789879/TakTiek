import Image from "next/image";
import { Tag } from "@/components/ui/Tag";

type TeamMemberCardProps = {
  name: string;
  role: string;
  bio: string;
  image: string;
  color: "teal" | "coral" | "lime" | "purple";
};

export function TeamMemberCard({ name, role, bio, image, color }: TeamMemberCardProps) {
  return (
    <article className="bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)] border border-[var(--tt-border)]">
      {/* PLACEHOLDER: vervangen vóór livegang door eigen portret */}
      <div className="relative aspect-[4/5] bg-cream">
        <Image
          src={image}
          alt={`Portret van ${name}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-bold mb-1">{name}</h3>
        <Tag color={color} className="mb-3">
          {role}
        </Tag>
        <p className="text-ink-soft text-sm leading-relaxed">{bio}</p>
      </div>
    </article>
  );
}
