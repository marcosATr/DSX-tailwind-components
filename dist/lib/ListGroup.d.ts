export interface IListGroupProp {
    items: Item[];
    active?: Item["id"];
}
type Item = {
    id: string | number;
    value: string;
    onClick: () => void;
};
declare function ListGroup({ items, active }: IListGroupProp): JSX.Element;
export default ListGroup;
