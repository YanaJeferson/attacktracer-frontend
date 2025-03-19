import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-[#0a0e0a] border-green-500/30">
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle className="font-mono text-white">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-green-300 text-sm font-mono">{description}</p>
      </CardContent>
    </Card>
  );
}