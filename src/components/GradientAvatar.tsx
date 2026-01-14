/**
 * Generate a gradient avatar based on a person's name
 * Returns a deterministic gradient based on the name's characters
 */

const gradients = [
  "from-[#FFA300] to-[#E87722]", // Orange
  "from-[#00629B] to-[#002855]", // Blue
  "from-[#00B5E2] to-[#009CA6]", // Cyan to Teal
  "from-[#981D97] to-[#772583]", // Purple
  "from-[#78BE20] to-[#658D1B]", // Green
  "from-[#FFD100] to-[#FFC72C]", // Yellow
  "from-[#BA0C2F] to-[#861F41]", // Red
];

export function getGradientForName(name: string): string {
  // Generate a hash from the name
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash; // Convert to 32bit integer
  }

  // Use hash to select a gradient
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
}

export function getInitials(name: string): string {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export function GradientAvatar({
  name,
  size = "md",
  className = "",
}: AvatarProps) {
  const gradient = getGradientForName(name);
  const initials = getInitials(name);

  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-32 h-32 text-3xl",
    lg: "w-40 h-40 text-4xl",
    xl: "w-48 h-48 text-5xl",
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-white font-bold shadow-lg ${className}`}
    >
      {initials}
    </div>
  );
}
