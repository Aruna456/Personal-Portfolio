const FixedButton = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Aruna_Subramanian_Resume.pdf";
    link.open = "Aruna-Subramanian-Resume.pdf";
    link.target = "_blank";
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="group">
      <button
        className="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95"
        onClick={handleDownload}
      >
        <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-50 to-teal-500 p-[2px] opacity-80  transition-opacity duration-500 group-hover:opacity-100"></span>

        <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
          <div className="flex items-center space-x-2">
            <span className="transition-all duration-500 group-hover:translate-x-1">
              Resume
            </span>
            <svg
              className="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 3a1 1 0 0 1 1 1v9.59l3.3-3.3a1 1 0 1 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 1 1 1.4-1.42L11 13.59V4a1 1 0 0 1 1-1z" />
              <path d="M5 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v1h12v-1a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1H5z" />
            </svg>
          </div>
        </span>
      </button>
    </div>
  );
};

export default FixedButton;
