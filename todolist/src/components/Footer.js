const Footer = ({ todo }) => {
  return (
    <footer>
      <p className="text-sm w-full text-right">
        You have {todo.length} todos on pending!
      </p>
    </footer>
  );
};

export default Footer;
