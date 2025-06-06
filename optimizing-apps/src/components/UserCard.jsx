import { useUser } from "../hooks/useUser";
import { useOnlineStatus } from "../hooks/useOnlineStatus";

export default function UserCard() {
  // custom Hook
  const { users, loading, error } = useUser();
  const { onlineStatus } = useOnlineStatus();

  return (
    <div className="py-8 bg-background min-h-screen">
      <div className="flex flex-wrap gap-6 max-w-6xl mx-auto px-4 justify-center">
        {loading && (
          <div className="w-full text-center py-12">
            <div className="text-sm text-muted-foreground">
              Loading users...
            </div>
          </div>
        )}
        {error && (
          <div className="w-full text-center py-8">
            <div className="rounded-md border border-border bg-card text-card-foreground shadow p-6 inline-block max-w-md">
              <div className="text-sm text-destructive">{error}</div>
            </div>
          </div>
        )}
        {!loading &&
          !error &&
          users.map((user) => (
            <div
              key={user.id}
              className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-md w-full max-w-sm"
            >
              {/* Card Header */}
              <div className="flex flex-col space-y-1.5 p-6 pb-4">
                <div className="flex flex-col items-center space-x-4">
                  {onlineStatus && <h1 className="mb-4">User is Online</h1>}
                  <div className="relative">
                    <img
                      src={user.picture.large}
                      alt={`${user.name.first} ${user.name.last}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div
                      className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-card ${
                        user.gender === "male" ? "bg-blue-500" : "bg-pink-500"
                      }`}
                    ></div>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold leading-none tracking-tight">
                      {user.name.first} {user.name.last}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {user.location.city}, {user.location.country}
                    </p>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-0">
                <div className="space-y-4">
                  {/* Contact Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Email</span>
                      <span className="font-medium truncate ml-2 max-w-[180px]">
                        {user.email}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Phone</span>
                      <span className="font-mono text-xs">{user.phone}</span>
                    </div>
                  </div>

                  {/* Divider */}
                  <hr className="border-border" />

                  {/* Personal Info */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Age</span>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
                        {user.dob.age} years
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Nationality</span>
                      <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                        {user.nat}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        Member since
                      </span>
                      <span className="text-xs">
                        {user.registered.age} years ago
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
