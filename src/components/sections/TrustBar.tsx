import { Icon } from "@/components/ui/Icon";
import { trustBarItems } from "@/lib/site";

export function TrustBar() {
  return (
    <div className="border-b border-line bg-paper">
      <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-center">
        {trustBarItems.map((item) => (
          <span key={item} className="flex items-center gap-2 text-sm font-medium text-slate">
            <Icon name="check" className="h-4 w-4 text-gold" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
