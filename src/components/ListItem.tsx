type ListItemProps = {
    children: string
};

const ListItem = ({ children }: ListItemProps) => {
    return (
        <li className='mb-3'>{children}</li>
    );
}

export default ListItem;