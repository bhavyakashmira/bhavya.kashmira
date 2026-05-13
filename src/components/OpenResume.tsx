"use client"

function OpenResume() {
  const handleOpenResume = () => {
    window.open("/last_resume.pdf", "_blank");
  };

  return (
    <button
      onClick={handleOpenResume}
      className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-blue-500/10 border border-blue-500/30 rounded-lg hover:bg-blue-500/20 hover:border-blue-500/50 transition-all"
    >
      Resume
    </button>
  )
}

export default OpenResume
