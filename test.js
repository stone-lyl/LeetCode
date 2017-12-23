/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
navWithRouter = () => withRouter(({ history }) => (
    <Nav
        groups={[{ links: this.props.routes.filter((r: any) => !r.hide).map(ParseGroup) }]}
        onLinkClick={
            (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
                if (item && item.key) {
                    history.push(item.key);
                }
            }}
    />

))

withRouter = ({history}) => {
    <Nav
        groups={[{ links: this.props.routes.filter((r: any) => !r.hide).map(ParseGroup) }]}
        onLinkClick={
            (ev?: React.MouseEvent<HTMLElement>, item?: INavLink) => {
                if (item && item.key) {
                    history.push(item.key);
                }
            }}
    />
}
navWithRouter = (withRouter) => {
    withRouter({history});
}