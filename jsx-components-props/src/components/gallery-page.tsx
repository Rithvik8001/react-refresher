import { PROFILES } from "../data/constants";
import ProfileCard from "./ProfileCard";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Profile Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROFILES.map((profile) => (
            <ProfileCard
              key={profile.id}
              name={profile.name}
              role={profile.role}
              avatarUrl={profile.avatarUrl}
              tags={profile.tags}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
