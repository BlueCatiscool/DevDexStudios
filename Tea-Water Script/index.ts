import { Lexer } from "./lexer";
import { Parser, ASTNode } from "./parser";
import { Interpreter } from "./interpreter";

const input = "1 + 2 * 3";
const lexer = new Lexer(input);
const parser = new Parser(lexer);
const interpreter = new Interpreter();
const ast: ASTNode | null = parser.parse();

if (ast !== null) {
    const result = interpreter.interpret(ast);
    console.log(result); // Output: 7
}