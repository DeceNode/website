type ListViewProps = {
  icon?: JSX.Element;
  items: string[];
};

const ListView = ({ items, icon }: ListViewProps) => {
  return (
    <ul className={icon && "list-unstyled"}>
      {items.map((item, index) => (
        <li className={`mb-3 ${icon && "d-flex align-items-center gap-2"}`} key={index}>
          {icon}
          {item}
        </li>
      ))}
    </ul>
  );
};

export default ListView;
