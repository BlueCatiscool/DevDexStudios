class Interpreter implements ASTVisitor {
    visitNumber(node: NodeNumber): any {
        return node.value;
    }

    public interpret(ast: ASTNode): any {
        return ast.accept(this);
    }
}