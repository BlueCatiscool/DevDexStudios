class Parser {
    lexer: Lexer;

    constructor(lexer: Lexer) {
        this.lexer = lexer;
    }

    public parse(): ASTNode | null {
        // TODO: implement parser logic
    }
}

abstract class ASTNode {
    abstract accept(visitor: ASTVisitor): any;
}

class NumberNode extends ASTNode {
    value: number;

    constructor(value: number) {
        super ();
        this.value = value;
    }

    accept(visitor: ASTVisitor) {
        return visitor.visitNumber(this);
    }
}

interface ASRVisitor {
    visitNumber(node: NumberNode): any;
}