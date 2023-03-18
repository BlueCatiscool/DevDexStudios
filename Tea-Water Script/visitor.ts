import { NodeNumber, NodeBinaryOp } from "./parser";

export interface ASTVisitor {
    visitNumber(node: NodeNumber): any;
    visitBinaryOp(node: NodeBinaryOp): any;
}