export const Loader = () => {
  return (
    <div className="fixed inset-0 bg-dark-bg flex items-center justify-center z-50">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-neon-cyan/20 border-t-neon-cyan rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 bg-neon-cyan rounded-full animate-pulse shadow-lg shadow-neon-cyan/50"></div>
        </div>
      </div>
      <p className="absolute mt-32 font-cyber text-neon-cyan text-sm tracking-widest animate-pulse">
        LOADING...
      </p>
    </div>
  )
}