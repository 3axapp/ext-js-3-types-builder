declare namespace Ext.tree {
  class TreeNodeUI {

    public addClass(className: string | unknown[]): void;

    private afterLoad(): void;

    private animCollapse(callback: object): void;

    private animExpand(callback: object): void;

    private appendDDGhost(ghostNode: object): void;

    private beforeLoad(): void;

    private blur(): void;

    private collapse(): void;

    private destroy(): void;

    private ecClick(e: object): void;

    private endDrop(): void;

    private expand(): void;

    private fireEvent(): void;

    private focus(): void;

    public getAnchor(): HTMLElement;

    private getChildIndent(): void;

    private getContainer(): void;

    private getDDHandles(): void;

    private getDDRepairXY(): void;

    public getEl(): HTMLElement;

    private getHref(href: string): void;

    public getIconEl(): HTMLElement;

    public getTextEl(): HtmlNode;

    public hide(): void;

    private highlight(): void;

    private initEvents(): void;

    public isChecked(): boolean;

    private onCheckChange(): void;

    private onClick(e: object): void;

    private onClsChange(node: object, cls: object, oldCls: object): void;

    private onContextMenu(e: object): void;

    private onDblClick(e: object): void;

    private onDisableChange(node: object, state: object): void;

    private onHrefChange(node: object, href: object, target: object): void;

    private onIconChange(node: object, icon: object): void;

    private onIconClsChange(node: object, cls: object, oldCls: object): void;

    private onIdChange(id: object): void;

    private onMove(tree: object, node: object, oldParent: object, newParent: object, index: object, refNode: object): void;

    private onOut(e: object): void;

    private onOver(e: object): void;

    private onRender(): void;

    private onSelectedChange(state: object): void;

    private onTextChange(node: object, text: object, oldText: object): void;

    private onTipChange(node: object, tip: object, title: object): void;

    private remove(): void;

    private removeChild(node: object): void;

    public removeClass(className: string | unknown[]): void;

    private render(bulkRender: object): void;

    private renderElements(n: object, a: object, targetNode: object, bulkRender: object): void;

    private renderIndent(): void;

    public show(): void;

    private startDrop(): void;

    public toggleCheck(value?: boolean): void;

    private updateExpandIcon(): void;
  }
}
