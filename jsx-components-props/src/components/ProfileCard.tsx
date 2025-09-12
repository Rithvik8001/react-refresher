type ProfileCardProps = {
  name: string;
  role: string;
  avatarUrl: string;
  tags?: string[];
};

export default function ProfileCard({
  name,
  role,
  avatarUrl,
  tags,
}: ProfileCardProps) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-2xl bg-white p-2 shadow-lg transition-transform duration-300 hover:scale-[1.02]">
      <div className="h-48 w-full overflow-hidden sm:h-64">
        <img
          src={avatarUrl}
          alt={name}
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-col">
          <h3 className="text-2xl leading-tight font-semibold text-gray-900">
            {name}
          </h3>
          <p className="mt-1 text-base text-gray-500">{role}</p>
          {tags && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
