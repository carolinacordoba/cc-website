import { skillIcons } from "@/app/lib/constants";

export default function IconBanner() {
  const duplicatedIcons = [...skillIcons, ...skillIcons];
  return (
    <div className="w-full h-60 flex items-center overflow-visible relative gap-8 py-10">
      <div className="marquee-container">
        <div className="marquee-content">
          {duplicatedIcons.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <IconComponent
                key={`icon-${index}`}
                className="icon-effect"
                aria-label={item.label}
                data-label={item.label}
                title={item.label}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
