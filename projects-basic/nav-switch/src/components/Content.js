const Content = ({ content, index }) => {
  const { title, info } = content[index];
  return (
    <div className="border-2 my-5 bg-slate-400 flex flex-col gap-5 p-2 rounded">
      <header className="text-white font-bold">{title}</header>
      <p>{info}</p>
    </div>
  );
};

export default Content;
