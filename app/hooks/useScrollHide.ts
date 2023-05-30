const useScrollHide = (isOpen: boolean) => {
  document.body.style.overflow = isOpen ? "hidden" : "auto";
};

export default useScrollHide;
