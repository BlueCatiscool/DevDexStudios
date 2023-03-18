export abstract class ASTNode {
    abstract accept(visitor: ASTVisitor): any;
}