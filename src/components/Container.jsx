export default function Container({ children, className = '', divider = false, label = null, sublabel = null, scrollable = false }) {
  if (divider) {
    return (
      <div className={`myContainer flex flex-col gap-0 p-0 overflow-hidden ${className}`}>
        {/* Title */}
        {label && (
          <span className="flex gap-1.5 justify-center items-center text-xs text-gray-400 capitalize pt-2 px-2 shrink-0">
            {label}
          </span>
        )}
        {/* Subtitle */}
        {sublabel && (
          <p className="text-center text-sm capitalize px-2 pb-1.5 shrink-0">{sublabel}</p>
        )}
        {/* Divider */}
        <hr className="border-white/10 shrink-0" />
        {/* Content */}
        <div className={`flex-1 min-h-0 px-2 pb-2 ${scrollable ? 'overflow-y-scroll [scrollbar-color:theme(colors.primary)_rgba(0,0,0,0.2)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-black/20 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary [&::-webkit-scrollbar-thumb]:rounded-full' : 'overflow-hidden'}`}>
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`myContainer ${className}`}>
      {children}
    </div>
  );
}
