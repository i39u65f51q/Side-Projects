const Clear = ({ clearAll }) => {
  return (
    <button
      onClick={() => clearAll([])}
      className="p-1 w-full bg-slate-200 rounded-sm"
    >
      Clear All
    </button>
  );
};

export default Clear;
