export default function ServiceCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="xz-zClass-service_card-wrapper border border-gray-200 hover:border-gray-300 duration-500 text-gray-700">
      <div className="service-icon">{icon}</div>
      <div className="service-content">
        <div className="font-bold">{title}</div>
        <div style={{ fontWeight: 500 }} className="text-sm max-w-42.5">
          {subtitle}
        </div>
      </div>
    </div>
  );
}
