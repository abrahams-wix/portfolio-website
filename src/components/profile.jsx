export function ProfileCard({
  name = "Abraham Soclof",
  title = "Full Stack Developer · Wix",
  profileImage = "images/profile.jpg",
  school = "Machon Lev, Jerusalem College of Technology",
}) {
  return (
    <div className="card-minimal flex h-full w-full flex-col overflow-hidden">
      <div className="relative min-h-48 flex-1 overflow-hidden bg-blue-gray-100 md:min-h-0">
        <img
          src={profileImage}
          alt={name}
          className="absolute inset-0 h-full w-full object-cover object-[center_50%]"
        />
      </div>

      <div className="flex shrink-0 flex-wrap items-center gap-x-3 gap-y-2 border-t border-blue-gray-100 px-5 py-4 text-left">
        <h1 className="text-base font-medium text-blue-gray-900">{name}</h1>
        <p className="text-sm text-blue-gray-500">{title}</p>
        <div className="flex items-center gap-2 text-sm text-blue-gray-500">
          <img src="/images/school.svg" alt="" className="h-4 w-4 opacity-60" />
          <span>{school}</span>
        </div>
        <p className="text-xs text-blue-gray-400">Graduating June 2026</p>
      </div>
    </div>
  );
}
